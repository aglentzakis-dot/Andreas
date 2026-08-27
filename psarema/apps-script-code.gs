function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.type === 'contact') {
      var subject = 'Ψάρεμα - Μήνυμα από χρήστη' + (data.name ? (' - ' + data.name) : '');
      var body = 'Όνομα: ' + (data.name || '(δεν δόθηκε)') + '\n' +
                 'Email απάντησης: ' + (data.email || '(δεν δόθηκε)') + '\n\n' +
                 'Μήνυμα:\n' + (data.message || '');
      GmailApp.sendEmail('aglentzakis@gmail.com', subject, body);
      return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // default: backup export
    var folder = getOrCreateFolder('Psarema Backups');
    var angler = 'unknown';
    if (data.entries && data.entries.length) {
      var last = data.entries[data.entries.length - 1];
      if (last.angler && last.angler.length) {
        angler = last.angler.join('-');
      }
    }
    angler = angler.replace(/[^a-zA-Z0-9\u0370-\u03FF\u1F00-\u1FFF\-]/g, '_');

    var now = new Date();
    var stamp = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd_HHmmss');
    var filename = 'psarema-backup_' + angler + '_' + stamp + '.json';

    var blob = Utilities.newBlob(JSON.stringify(data), 'application/json', filename);
    folder.createFile(blob);

    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateFolder(name) {
  var folders = DriveApp.getFoldersByName(name);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(name);
}
