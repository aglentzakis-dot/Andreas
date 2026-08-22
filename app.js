// ---------- Βασικά (React από CDN) ----------
const { useState, useEffect, useRef, useCallback } = React;

// Μικρά τοπικά εικονίδια (χωρίς εξωτερική βιβλιοθήκη, για να δουλεύει η εφαρμογή χωρίς σύνδεση)
function Pencil({ size = 16, color = "#000" }) { return <span style={{ fontSize: size, lineHeight: 1, color }}>✏️</span>; }
function XIcon({ size = 16, color = "#000" }) { return <span style={{ fontSize: size, lineHeight: 1, color, fontWeight: 700 }}>✕</span>; }
function ArrowLeft({ size = 16, color = "#000" }) { return <span style={{ fontSize: size, lineHeight: 1, color, fontWeight: 700 }}>←</span>; }
function Volume2({ size = 16, color = "#000" }) { return <span style={{ fontSize: size, lineHeight: 1, color }}>🔊</span>; }
function Check({ size = 16, color = "#000" }) { return <span style={{ fontSize: size, lineHeight: 1, color, fontWeight: 700 }}>✓</span>; }
function Plus({ size = 16, color = "#000" }) { return <span style={{ fontSize: size, lineHeight: 1, color, fontWeight: 700 }}>＋</span>; }
function Trash2({ size = 16, color = "#000" }) { return <span style={{ fontSize: size, lineHeight: 1, color }}>🗑️</span>; }


// ---------- Δεδομένα ----------
const CATEGORIES = [
  {
    id: "fagita",
    name: "Φαγητά",
    emoji: "🍎",
    color: "#FF6B5E",
    dark: "#C8412F",
    soft: "#FFEDE9",
    items: [
      { id: "milo", emoji: "🍎", label: "Μήλο" },
      { id: "banana", emoji: "🍌", label: "Μπανάνα" },
      { id: "portokali", emoji: "🍊", label: "Πορτοκάλι" },
      { id: "karpouzi", emoji: "🍉", label: "Καρπούζι" },
      { id: "stafyli", emoji: "🍇", label: "Σταφύλι" },
      { id: "fraoula", emoji: "🍓", label: "Φράουλα" },
      { id: "psomi", emoji: "🍞", label: "Ψωμί" },
      { id: "tyri", emoji: "🧀", label: "Τυρί" },
      { id: "pizza", emoji: "🍕", label: "Πίτσα" },
      { id: "pagoto", emoji: "🍦", label: "Παγωτό" },
      { id: "keik", emoji: "🍰", label: "Κέικ" },
      { id: "gala", emoji: "🥛", label: "Γάλα" },
    ],
  },
  {
    id: "zoa",
    name: "Ζώα",
    emoji: "🐶",
    color: "#3FBFAE",
    dark: "#1F7A6E",
    soft: "#E7FBF7",
    items: [
      { id: "skylos", emoji: "🐶", label: "Σκύλος" },
      { id: "gata", emoji: "🐱", label: "Γάτα" },
      { id: "alogo", emoji: "🐴", label: "Άλογο" },
      { id: "ageladha", emoji: "🐮", label: "Αγελάδα" },
      { id: "provato", emoji: "🐑", label: "Πρόβατο" },
      { id: "liontari", emoji: "🦁", label: "Λιοντάρι" },
      { id: "elefantas", emoji: "🐘", label: "Ελέφαντας" },
      { id: "pithikos", emoji: "🐵", label: "Πίθηκος" },
      { id: "psari", emoji: "🐟", label: "Ψάρι" },
      { id: "pouli", emoji: "🐦", label: "Πουλί" },
      { id: "kotopoulo", emoji: "🐔", label: "Κότα" },
      { id: "helona", emoji: "🐢", label: "Χελώνα" },
    ],
  },
  {
    id: "arithmoi",
    name: "Αριθμοί",
    emoji: "🔢",
    color: "#FFC93C",
    dark: "#B8860B",
    soft: "#FFF8E1",
    items: [
      { id: "n1", emoji: "1️⃣", label: "Ένα" },
      { id: "n2", emoji: "2️⃣", label: "Δύο" },
      { id: "n3", emoji: "3️⃣", label: "Τρία" },
      { id: "n4", emoji: "4️⃣", label: "Τέσσερα" },
      { id: "n5", emoji: "5️⃣", label: "Πέντε" },
      { id: "n6", emoji: "6️⃣", label: "Έξι" },
      { id: "n7", emoji: "7️⃣", label: "Επτά" },
      { id: "n8", emoji: "8️⃣", label: "Οκτώ" },
      { id: "n9", emoji: "9️⃣", label: "Εννέα" },
      { id: "n10", emoji: "🔟", label: "Δέκα" },
    ],
  },
  {
    id: "xromata",
    name: "Χρώματα",
    emoji: "🎨",
    color: "#B084F5",
    dark: "#6F3FB0",
    soft: "#F4EBFF",
    items: [
      { id: "kokkino", emoji: "🔴", label: "Κόκκινο" },
      { id: "ble", emoji: "🔵", label: "Μπλε" },
      { id: "prasino", emoji: "🟢", label: "Πράσινο" },
      { id: "kitrino", emoji: "🟡", label: "Κίτρινο" },
      { id: "portokali_x", emoji: "🟠", label: "Πορτοκαλί" },
      { id: "mov", emoji: "🟣", label: "Μωβ" },
      { id: "kafe", emoji: "🟤", label: "Καφέ" },
      { id: "mavro", emoji: "⚫", label: "Μαύρο" },
      { id: "aspro", emoji: "⚪", label: "Άσπρο" },
    ],
  },
  {
    id: "antikeimena",
    name: "Αντικείμενα",
    emoji: "⚽",
    color: "#5FBF67",
    dark: "#2F7A38",
    soft: "#EEFBEF",
    items: [
      { id: "mpala", emoji: "⚽", label: "Μπάλα" },
      { id: "autokinito", emoji: "🚗", label: "Αυτοκίνητο" },
      { id: "vivlio", emoji: "📚", label: "Βιβλίο" },
      { id: "karekla", emoji: "🪑", label: "Καρέκλα" },
      { id: "roloi", emoji: "⏰", label: "Ρολόι" },
      { id: "kleidi", emoji: "🔑", label: "Κλειδί" },
      { id: "psalidi", emoji: "✂️", label: "Ψαλίδι" },
      { id: "tilefono", emoji: "📱", label: "Τηλέφωνο" },
      { id: "podilato", emoji: "🚲", label: "Ποδήλατο" },
      { id: "ompela", emoji: "☂️", label: "Ομπρέλα" },
    ],
  },
  {
    id: "drastiriotites",
    name: "Δραστηριότητες",
    emoji: "🧸",
    color: "#4F9DDE",
    dark: "#256B9E",
    soft: "#E8F4FC",
    items: [
      { id: "paixnidi", emoji: "🧸", label: "Παίζω" },
      { id: "zografiki", emoji: "🎨", label: "Ζωγραφίζω" },
      { id: "ypnos", emoji: "😴", label: "Κοιμάμαι" },
      { id: "mpanio", emoji: "🛁", label: "Κάνω μπάνιο" },
      { id: "trogo", emoji: "🍽️", label: "Τρώω" },
      { id: "volta", emoji: "🚶", label: "Πάω βόλτα" },
      { id: "tragoudi", emoji: "🎵", label: "Τραγουδάω" },
      { id: "diavazo", emoji: "📖", label: "Διαβάζω" },
      { id: "xorevo", emoji: "💃", label: "Χορεύω" },
      { id: "pazl", emoji: "🧩", label: "Κάνω παζλ" },
      { id: "plenoxeria", emoji: "🧼", label: "Πλένω τα χέρια μου" },
      { id: "vourtsizo", emoji: "🪥", label: "Βουρτσίζω τα δόντια μου" },
    ],
  },
  {
    id: "synaisthimata",
    name: "Συναισθήματα",
    emoji: "😊",
    color: "#FF8FB2",
    dark: "#C24A75",
    soft: "#FFEFF4",
    items: [
      { id: "xaroumenos", emoji: "😊", label: "Χαρούμενος" },
      { id: "lypimenos", emoji: "😢", label: "Λυπημένος" },
      { id: "thymomenos", emoji: "😠", label: "Θυμωμένος" },
      { id: "fovismenos", emoji: "😨", label: "Φοβισμένος" },
      { id: "kourasmenos", emoji: "😴", label: "Κουρασμένος" },
      { id: "ekpliktos", emoji: "😲", label: "Έκπληκτος" },
      { id: "iremos", emoji: "😌", label: "Ήρεμος" },
      { id: "mperdemenos", emoji: "😕", label: "Μπερδεμένος" },
    ],
  },
  {
    id: "routina",
    name: "Καθημερινή ρουτίνα",
    emoji: "⏰",
    color: "#8C7853",
    dark: "#5C4B2E",
    soft: "#F5F0E6",
    items: [
      { id: "ksypnao", emoji: "⏰", label: "Ξυπνάω" },
      { id: "proino", emoji: "🥣", label: "Τρώω πρωινό" },
      { id: "plenodontia", emoji: "🪥", label: "Πλένω τα δόντια μου" },
      { id: "ntynomai", emoji: "👕", label: "Ντύνομαι" },
      { id: "sxoleio", emoji: "🎒", label: "Πάω σχολείο" },
      { id: "mesimeriano", emoji: "🍽️", label: "Τρώω μεσημεριανό" },
      { id: "paixnidi_r", emoji: "🧸", label: "Παίζω" },
      { id: "mpanio_r", emoji: "🛁", label: "Κάνω μπάνιο" },
      { id: "pitzames", emoji: "🌙", label: "Φοράω πιτζάμες" },
      { id: "ypnos_r", emoji: "🌛", label: "Πάω για ύπνο" },
    ],
  },
  {
    id: "rimata",
    name: "Ρήματα / Ενέργειες",
    emoji: "🏃",
    color: "#7C83FD",
    dark: "#4A50B0",
    soft: "#EEF0FF",
    items: [
      { id: "treho", emoji: "🏃", label: "Τρέχω" },
      { id: "pidao", emoji: "🤸", label: "Πηδάω" },
      { id: "anoigo", emoji: "🔓", label: "Ανοίγω" },
      { id: "kleino", emoji: "🔒", label: "Κλείνω" },
      { id: "dino", emoji: "🤲", label: "Δίνω" },
      { id: "perno", emoji: "🤏", label: "Παίρνω" },
      { id: "kathomai", emoji: "🪑", label: "Κάθομαι" },
      { id: "sikonomai", emoji: "🧍", label: "Σηκώνομαι" },
      { id: "koitazo", emoji: "👀", label: "Κοιτάζω" },
      { id: "akouo", emoji: "👂", label: "Ακούω" },
    ],
  },
  {
    id: "meritousomatos",
    name: "Μέρη του σώματος",
    emoji: "✋",
    color: "#F0A84E",
    dark: "#A86B1E",
    soft: "#FFF3E0",
    items: [
      { id: "kefali", emoji: "🙂", label: "Κεφάλι" },
      { id: "mati", emoji: "👁️", label: "Μάτι" },
      { id: "afti", emoji: "👂", label: "Αυτί" },
      { id: "myti", emoji: "👃", label: "Μύτη" },
      { id: "stoma", emoji: "👄", label: "Στόμα" },
      { id: "dontia", emoji: "🦷", label: "Δόντια" },
      { id: "xeri", emoji: "✋", label: "Χέρι" },
      { id: "dahtyla", emoji: "👆", label: "Δάχτυλα" },
      { id: "podi", emoji: "🦶", label: "Πόδι" },
      { id: "mallia", emoji: "💇", label: "Μαλλιά" },
    ],
  },
];

// Χρωματικές παλέτες για νέες κατηγορίες που φτιάχνει ο χρήστης
const PALETTE = [
  { color: "#FF6B5E", dark: "#C8412F", soft: "#FFEDE9" },
  { color: "#3FBFAE", dark: "#1F7A6E", soft: "#E7FBF7" },
  { color: "#FFC93C", dark: "#B8860B", soft: "#FFF8E1" },
  { color: "#B084F5", dark: "#6F3FB0", soft: "#F4EBFF" },
  { color: "#5FBF67", dark: "#2F7A38", soft: "#EEFBEF" },
  { color: "#4F9DDE", dark: "#256B9E", soft: "#E8F4FC" },
  { color: "#FF8FB2", dark: "#C24A75", soft: "#FFEFF4" },
  { color: "#8C7853", dark: "#5C4B2E", soft: "#F5F0E6" },
  { color: "#7C83FD", dark: "#4A50B0", soft: "#EEF0FF" },
  { color: "#F0A84E", dark: "#A86B1E", soft: "#FFF3E0" },
];

const LABELS_KEY = "custom-labels";
const CATS_KEY = "custom-categories";
const ITEMS_KEY = "custom-items-by-cat";
const EMOJIS_KEY = "custom-emojis";
const HOLD_MS = 1600; // πόση ώρα χρειάζεται το κρατημένο πάτημα

// ---------- Βιβλιοθήκη εικόνων για αναζήτηση με περιγραφή ----------
const EMOJI_LIBRARY = [
  { e: "🍎", k: ["μήλο", "φρούτο"] },
  { e: "🍌", k: ["μπανάνα"] },
  { e: "🍊", k: ["πορτοκάλι"] },
  { e: "🍉", k: ["καρπούζι"] },
  { e: "🍇", k: ["σταφύλι"] },
  { e: "🍓", k: ["φράουλα"] },
  { e: "🍍", k: ["ανανάς"] },
  { e: "🍑", k: ["ροδάκινο"] },
  { e: "🍒", k: ["κεράσι"] },
  { e: "🍋", k: ["λεμόνι"] },
  { e: "🥝", k: ["ακτινίδιο"] },
  { e: "🍞", k: ["ψωμί"] },
  { e: "🧀", k: ["τυρί"] },
  { e: "🍕", k: ["πίτσα"] },
  { e: "🍦", k: ["παγωτό"] },
  { e: "🍰", k: ["κέικ", "τούρτα"] },
  { e: "🥛", k: ["γάλα"] },
  { e: "🍫", k: ["σοκολάτα"] },
  { e: "🍪", k: ["μπισκότο"] },
  { e: "🥕", k: ["καρότο"] },
  { e: "🥦", k: ["μπρόκολο"] },
  { e: "🍅", k: ["ντομάτα"] },
  { e: "🥔", k: ["πατάτα"] },
  { e: "🍔", k: ["χάμπουργκερ"] },
  { e: "🍟", k: ["τηγανητές πατάτες"] },
  { e: "🥚", k: ["αυγό"] },
  { e: "🍝", k: ["μακαρόνια", "ζυμαρικά"] },
  { e: "🍗", k: ["κοτόπουλο φαγητό"] },
  { e: "🍯", k: ["μέλι"] },
  { e: "🧁", k: ["κapκέικ", "μάφιν"] },
  { e: "🍽️", k: ["πιάτο", "τρώω"] },
  { e: "🐶", k: ["σκύλος"] },
  { e: "🐱", k: ["γάτα"] },
  { e: "🐴", k: ["άλογο"] },
  { e: "🐮", k: ["αγελάδα"] },
  { e: "🐑", k: ["πρόβατο"] },
  { e: "🦁", k: ["λιοντάρι"] },
  { e: "🐘", k: ["ελέφαντας"] },
  { e: "🐵", k: ["πίθηκος"] },
  { e: "🐟", k: ["ψάρι"] },
  { e: "🐦", k: ["πουλί"] },
  { e: "🐔", k: ["κότα", "κοτόπουλο"] },
  { e: "🐢", k: ["χελώνα"] },
  { e: "🐰", k: ["κουνέλι"] },
  { e: "🐻", k: ["αρκούδα"] },
  { e: "🐸", k: ["βάτραχος"] },
  { e: "🦋", k: ["πεταλούδα"] },
  { e: "🐝", k: ["μέλισσα"] },
  { e: "🦉", k: ["κουκουβάγια"] },
  { e: "🐺", k: ["λύκος"] },
  { e: "🦒", k: ["καμηλοπάρδαλη"] },
  { e: "🦓", k: ["ζέβρα"] },
  { e: "🐷", k: ["γουρούνι"] },
  { e: "🐭", k: ["ποντίκι"] },
  { e: "🔴", k: ["κόκκινο"] },
  { e: "🔵", k: ["μπλε"] },
  { e: "🟢", k: ["πράσινο"] },
  { e: "🟡", k: ["κίτρινο"] },
  { e: "🟠", k: ["πορτοκαλί"] },
  { e: "🟣", k: ["μωβ"] },
  { e: "🟤", k: ["καφέ χρώμα"] },
  { e: "⚫", k: ["μαύρο"] },
  { e: "⚪", k: ["άσπρο", "λευκό"] },
  { e: "💗", k: ["ροζ"] },
  { e: "⚽", k: ["μπάλα"] },
  { e: "🚗", k: ["αυτοκίνητο"] },
  { e: "📚", k: ["βιβλίο"] },
  { e: "🪑", k: ["καρέκλα"] },
  { e: "⏰", k: ["ρολόι", "ξυπνάω"] },
  { e: "🔑", k: ["κλειδί"] },
  { e: "✂️", k: ["ψαλίδι"] },
  { e: "📱", k: ["τηλέφωνο"] },
  { e: "🚲", k: ["ποδήλατο"] },
  { e: "☂️", k: ["ομπρέλα"] },
  { e: "🎒", k: ["τσάντα", "σχολείο"] },
  { e: "🖊️", k: ["στυλό"] },
  { e: "✏️", k: ["μολύβι"] },
  { e: "🧦", k: ["κάλτσα"] },
  { e: "👟", k: ["παπούτσι"] },
  { e: "👕", k: ["μπλούζα", "ντύνομαι"] },
  { e: "🧸", k: ["αρκουδάκι", "παιχνίδι", "παίζω"] },
  { e: "🎈", k: ["μπαλόνι"] },
  { e: "🚪", k: ["πόρτα"] },
  { e: "🪟", k: ["παράθυρο"] },
  { e: "🛏️", k: ["κρεβάτι"] },
  { e: "🚿", k: ["ντους"] },
  { e: "🧻", k: ["χαρτί υγείας"] },
  { e: "🧴", k: ["σαμπουάν", "κρέμα"] },
  { e: "🎨", k: ["ζωγραφική", "ζωγραφίζω"] },
  { e: "😴", k: ["κοιμάμαι", "ύπνος", "κουρασμένος"] },
  { e: "🛁", k: ["μπάνιο"] },
  { e: "🚶", k: ["βόλτα", "περπατάω"] },
  { e: "🎵", k: ["τραγουδάω", "μουσική"] },
  { e: "📖", k: ["διαβάζω", "ανάγνωση"] },
  { e: "💃", k: ["χορεύω"] },
  { e: "🧩", k: ["παζλ"] },
  { e: "🧼", k: ["πλένω χέρια", "σαπούνι"] },
  { e: "🪥", k: ["βουρτσίζω δόντια", "οδοντόβουρτσα"] },
  { e: "🏃", k: ["τρέχω"] },
  { e: "🤸", k: ["πηδάω"] },
  { e: "🔓", k: ["ανοίγω"] },
  { e: "🔒", k: ["κλείνω"] },
  { e: "🤲", k: ["δίνω"] },
  { e: "🤏", k: ["παίρνω"] },
  { e: "🧍", k: ["σηκώνομαι", "άνθρωπος", "ανθρωπάκι"] },
  { e: "👀", k: ["κοιτάζω", "μάτια"] },
  { e: "🗣️", k: ["μιλάω"] },
  { e: "🤗", k: ["αγκαλιά"] },
  { e: "😊", k: ["χαρούμενος", "χαμόγελο"] },
  { e: "😢", k: ["λυπημένος", "κλαίω"] },
  { e: "😠", k: ["θυμωμένος"] },
  { e: "😨", k: ["φοβισμένος"] },
  { e: "😲", k: ["έκπληκτος"] },
  { e: "😌", k: ["ήρεμος"] },
  { e: "😕", k: ["μπερδεμένος"] },
  { e: "🥰", k: ["αγάπη"] },
  { e: "🥣", k: ["πρωινό", "μπολ"] },
  { e: "🌙", k: ["πιτζάμες", "νύχτα"] },
  { e: "🌛", k: ["ύπνος", "φεγγάρι"] },
  { e: "🙂", k: ["κεφάλι", "πρόσωπο"] },
  { e: "👁️", k: ["μάτι"] },
  { e: "👂", k: ["αυτί", "ακούω"] },
  { e: "👃", k: ["μύτη"] },
  { e: "👄", k: ["στόμα"] },
  { e: "🦷", k: ["δόντια"] },
  { e: "✋", k: ["χέρι"] },
  { e: "👆", k: ["δάχτυλα"] },
  { e: "🦶", k: ["πόδι", "πατούσα"] },
  { e: "🦵", k: ["πόδι", "σκέλος"] },
  { e: "👣", k: ["πατούσες", "πατήματα"] },
  { e: "💇", k: ["μαλλιά"] },
  { e: "👦", k: ["αγόρι"] },
  { e: "👧", k: ["κορίτσι"] },
  { e: "👨", k: ["μπαμπάς", "άντρας"] },
  { e: "👩", k: ["μαμά", "γυναίκα"] },
  { e: "👴", k: ["παππούς"] },
  { e: "👵", k: ["γιαγιά"] },
  { e: "👶", k: ["μωρό"] },
  { e: "🧑‍🏫", k: ["δάσκαλος", "δασκάλα"] },
  { e: "🧑‍⚕️", k: ["γιατρός"] },
  { e: "👮", k: ["αστυνομικός"] },
  { e: "👨‍🚒", k: ["πυροσβέστης"] },
  { e: "1️⃣", k: ["ένα", "αριθμός 1"] },
  { e: "2️⃣", k: ["δύο", "αριθμός 2"] },
  { e: "3️⃣", k: ["τρία", "αριθμός 3"] },
  { e: "4️⃣", k: ["τέσσερα", "αριθμός 4"] },
  { e: "5️⃣", k: ["πέντε", "αριθμός 5"] },
  { e: "6️⃣", k: ["έξι", "αριθμός 6"] },
  { e: "7️⃣", k: ["επτά", "αριθμός 7"] },
  { e: "8️⃣", k: ["οκτώ", "αριθμός 8"] },
  { e: "9️⃣", k: ["εννέα", "αριθμός 9"] },
  { e: "🔟", k: ["δέκα", "αριθμός 10"] },
  { e: "⭐", k: ["αστέρι"] },
  { e: "❤️", k: ["καρδιά"] },
  { e: "🔺", k: ["τρίγωνο", "σχήμα"] },
  { e: "⬜", k: ["τετράγωνο", "σχήμα"] },
  { e: "⭕", k: ["κύκλος", "σχήμα"] },
  { e: "☀️", k: ["ήλιος"] },
  { e: "🌧️", k: ["βροχή"] },
  { e: "❄️", k: ["χιόνι"] },
  { e: "🌈", k: ["ουράνιο τόξο"] },
  { e: "🌳", k: ["δέντρο"] },
  { e: "🌸", k: ["λουλούδι"] },
  { e: "🌊", k: ["θάλασσα", "κύμα"] },
  { e: "🚌", k: ["λεωφορείο"] },
  { e: "🚂", k: ["τρένο"] },
  { e: "✈️", k: ["αεροπλάνο"] },
  { e: "🚢", k: ["πλοίο"] },
];

function normalizeGreek(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function searchEmojis(query, limit = 24) {
  const q = normalizeGreek(query.trim());
  if (!q) return EMOJI_LIBRARY.slice(0, 18);
  return EMOJI_LIBRARY.filter((entry) => entry.k.some((kw) => normalizeGreek(kw).includes(q))).slice(0, limit);
}

// Μικρό component: αναζήτηση εικόνας περιγράφοντάς την στα ελληνικά
function EmojiPicker({ selected, onSelect, accentColor }) {
  const [query, setQuery] = useState("");
  const results = searchEmojis(query);
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 12,
            border: `2px solid ${accentColor || "#ddd"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            flexShrink: 0,
            background: "#fafafa",
          }}
        >
          {selected || "🖼️"}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, boxSizing: "border-box", fontSize: 15, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", fontFamily: "inherit" }}
          placeholder="Περίγραψε την εικόνα (π.χ. μήλο)"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 6,
          maxHeight: 148,
          overflowY: "auto",
          padding: 6,
          background: "#fafafa",
          borderRadius: 12,
        }}
      >
        {results.length === 0 && (
          <span style={{ gridColumn: "1 / -1", fontSize: 12, color: "#999", textAlign: "center", padding: "10px 0" }}>
            Δεν βρέθηκε εικόνα — δοκίμασε άλλη λέξη
          </span>
        )}
        {results.map((entry, idx) => (
          <button
            key={`${entry.e}-${idx}`}
            onClick={() => onSelect(entry.e)}
            style={{
              fontSize: 22,
              border: entry.e === selected ? `2px solid ${accentColor || "#333"}` : "2px solid transparent",
              background: entry.e === selected ? "#fff" : "transparent",
              borderRadius: 10,
              padding: "4px 0",
              cursor: "pointer",
            }}
          >
            {entry.e}
          </button>
        ))}
      </div>
    </div>
  );
}

function newId(prefix) {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function MathainoLexeis() {
  const [screen, setScreen] = useState({ view: "home", categoryId: null });
  const [editMode, setEditMode] = useState(false);
  const [customLabels, setCustomLabels] = useState({});
  const [customEmojis, setCustomEmojis] = useState({});
  const [customCategories, setCustomCategories] = useState([]); // [{id,name,emoji,color,dark,soft,items:[]}]
  const [customItemsByCat, setCustomItemsByCat] = useState({}); // { catId: [{id,emoji,label,custom:true}] }
  const [editingItem, setEditingItem] = useState(null);
  const [draftText, setDraftText] = useState("");
  const [draftEmoji, setDraftEmoji] = useState("");
  const [addCatOpen, setAddCatOpen] = useState(false);
  const [catNameDraft, setCatNameDraft] = useState("");
  const [catEmojiDraft, setCatEmojiDraft] = useState("⭐");
  const [catPaletteIdx, setCatPaletteIdx] = useState(0);
  const [addItemFor, setAddItemFor] = useState(null); // catId ή null
  const [itemEmojiDraft, setItemEmojiDraft] = useState("");
  const [itemLabelDraft, setItemLabelDraft] = useState("");
  const [speakingId, setSpeakingId] = useState(null);
  const [saveState, setSaveState] = useState("idle");
  const [holdProgress, setHoldProgress] = useState(0);
  const voicesRef = useRef([]);
  const holdStartRef = useRef(null);
  const holdRafRef = useRef(null);

  const clearHold = useCallback(() => {
    if (holdRafRef.current) cancelAnimationFrame(holdRafRef.current);
    holdRafRef.current = null;
    holdStartRef.current = null;
    setHoldProgress(0);
  }, []);

  const startHold = useCallback(() => {
    holdStartRef.current = performance.now();
    const tick = (now) => {
      if (!holdStartRef.current) return;
      const elapsed = now - holdStartRef.current;
      const pct = Math.min(1, elapsed / HOLD_MS);
      setHoldProgress(pct);
      if (pct >= 1) {
        setEditMode((v) => !v);
        clearHold();
        return;
      }
      holdRafRef.current = requestAnimationFrame(tick);
    };
    holdRafRef.current = requestAnimationFrame(tick);
  }, [clearHold]);

  // Φόρτωση αποθηκευμένων δεδομένων
  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get(LABELS_KEY, false);
        if (res && res.value) setCustomLabels(JSON.parse(res.value));
      } catch (e) {}
      try {
        const res = await window.storage.get(CATS_KEY, false);
        if (res && res.value) setCustomCategories(JSON.parse(res.value));
      } catch (e) {}
      try {
        const res = await window.storage.get(ITEMS_KEY, false);
        if (res && res.value) setCustomItemsByCat(JSON.parse(res.value));
      } catch (e) {}
      try {
        const res = await window.storage.get(EMOJIS_KEY, false);
        if (res && res.value) setCustomEmojis(JSON.parse(res.value));
      } catch (e) {}
    })();
  }, []);

  // Φόρτωση φωνών ομιλίας
  useEffect(() => {
    function loadVoices() {
      voicesRef.current = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    }
    loadVoices();
    if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = useCallback((text, itemId) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "el-GR";
    const greekVoice = voicesRef.current.find((v) => v.lang && v.lang.toLowerCase().startsWith("el"));
    if (greekVoice) utter.voice = greekVoice;
    utter.rate = 0.9;
    utter.pitch = 1.05;
    setSpeakingId(itemId);
    utter.onend = () => setSpeakingId(null);
    utter.onerror = () => setSpeakingId(null);
    window.speechSynthesis.speak(utter);
  }, []);

  const getLabel = (catId, item) => customLabels[`${catId}:${item.id}`] ?? item.label;
  const getEmoji = (catId, item) => customEmojis[`${catId}:${item.id}`] ?? item.emoji;

  function flashSaved() {
    setSaveState("saving");
    setTimeout(() => setSaveState("saved"), 150);
    setTimeout(() => setSaveState("idle"), 1300);
  }

  async function persistLabels(next) {
    setCustomLabels(next);
    flashSaved();
    try {
      await window.storage.set(LABELS_KEY, JSON.stringify(next), false);
    } catch (e) {}
  }

  async function persistEmojis(next) {
    setCustomEmojis(next);
    flashSaved();
    try {
      await window.storage.set(EMOJIS_KEY, JSON.stringify(next), false);
    } catch (e) {}
  }

  async function persistCategories(next) {
    setCustomCategories(next);
    flashSaved();
    try {
      await window.storage.set(CATS_KEY, JSON.stringify(next), false);
    } catch (e) {}
  }

  async function persistItems(next) {
    setCustomItemsByCat(next);
    flashSaved();
    try {
      await window.storage.set(ITEMS_KEY, JSON.stringify(next), false);
    } catch (e) {}
  }

  function openEditor(catId, item) {
    setEditingItem({ catId, itemId: item.id, defaultLabel: item.label, defaultEmoji: item.emoji });
    setDraftText(getLabel(catId, item));
    setDraftEmoji(getEmoji(catId, item));
  }

  function saveEditor() {
    if (!editingItem) return;
    const key = `${editingItem.catId}:${editingItem.itemId}`;

    const trimmed = draftText.trim();
    const nextLabels = { ...customLabels };
    if (!trimmed || trimmed === editingItem.defaultLabel) {
      delete nextLabels[key];
    } else {
      nextLabels[key] = trimmed;
    }
    persistLabels(nextLabels);

    const nextEmojis = { ...customEmojis };
    if (!draftEmoji || draftEmoji === editingItem.defaultEmoji) {
      delete nextEmojis[key];
    } else {
      nextEmojis[key] = draftEmoji;
    }
    persistEmojis(nextEmojis);

    setEditingItem(null);
  }

  function openAddCategory() {
    setCatNameDraft("");
    setCatEmojiDraft("⭐");
    setCatPaletteIdx((customCategories.length + CATEGORIES.length) % PALETTE.length);
    setAddCatOpen(true);
  }

  function saveNewCategory() {
    const name = catNameDraft.trim();
    if (!name) return;
    const pal = PALETTE[catPaletteIdx];
    const cat = {
      id: newId("cat"),
      name,
      emoji: catEmojiDraft.trim() || "⭐",
      color: pal.color,
      dark: pal.dark,
      soft: pal.soft,
      items: [],
      custom: true,
    };
    persistCategories([...customCategories, cat]);
    setAddCatOpen(false);
  }

  function deleteCategory(catId) {
    persistCategories(customCategories.filter((c) => c.id !== catId));
    const nextItems = { ...customItemsByCat };
    delete nextItems[catId];
    persistItems(nextItems);
    const nextLabels = { ...customLabels };
    Object.keys(nextLabels).forEach((k) => {
      if (k.startsWith(`${catId}:`)) delete nextLabels[k];
    });
    persistLabels(nextLabels);
    if (screen.categoryId === catId) setScreen({ view: "home", categoryId: null });
  }

  function openAddItem(catId) {
    setItemEmojiDraft("");
    setItemLabelDraft("");
    setAddItemFor(catId);
  }

  function saveNewItem() {
    const label = itemLabelDraft.trim();
    if (!label || !addItemFor) return;
    const item = { id: newId("item"), emoji: itemEmojiDraft.trim() || "🖼️", label, custom: true };
    const next = { ...customItemsByCat };
    next[addItemFor] = [...(next[addItemFor] || []), item];
    persistItems(next);
    setAddItemFor(null);
  }

  function deleteItem(catId, itemId) {
    const next = { ...customItemsByCat };
    next[catId] = (next[catId] || []).filter((it) => it.id !== itemId);
    persistItems(next);
  }

  const allCategories = [...CATEGORIES, ...customCategories];
  const activeCategory = allCategories.find((c) => c.id === screen.categoryId);
  const activeItems = activeCategory
    ? [...activeCategory.items, ...(customItemsByCat[activeCategory.id] || [])]
    : [];

  return (
    <div
      style={{
        fontFamily: "'Baloo 2', 'Comic Sans MS', 'Segoe UI Rounded', system-ui, sans-serif",
        background: activeCategory ? activeCategory.soft : "#FFF9EF",
        minHeight: "600px",
        width: "100%",
        transition: "background 0.35s ease",
        position: "relative",
        overflow: "hidden",
        borderRadius: 20,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -40,
          right: -30,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: activeCategory ? activeCategory.color : "#FFD93D",
          opacity: 0.18,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -50,
          left: -40,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: activeCategory ? activeCategory.color : "#B084F5",
          opacity: 0.14,
        }}
      />

      {/* Κεφαλίδα */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 18px 6px 18px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 40 }}>
          {screen.view === "items" && (
            <button
              onClick={() => setScreen({ view: "home", categoryId: null })}
              style={{
                border: "none",
                background: "#ffffffcc",
                borderRadius: 999,
                width: 42,
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 3px 0 rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
              aria-label="Πίσω"
            >
              <ArrowLeft size={22} color={activeCategory?.dark || "#555"} />
            </button>
          )}
        </div>

        <h1
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: activeCategory ? activeCategory.dark : "#5B4636",
            margin: 0,
            textAlign: "center",
            letterSpacing: 0.2,
          }}
        >
          {screen.view === "home" ? "Μαθαίνω Λέξεις" : activeCategory?.name}
        </h1>

        {/* Αόρατη ζώνη γονικού ελέγχου: κράτα πατημένο ~1.5" για είσοδο/έξοδο από επεξεργασία. */}
        <div
          onPointerDown={startHold}
          onPointerUp={clearHold}
          onPointerLeave={clearHold}
          onPointerCancel={clearHold}
          role="button"
          aria-label="Γονικός έλεγχος"
          style={{
            width: 42,
            height: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "default",
            touchAction: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          {holdProgress > 0 && (
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 999,
                background: `conic-gradient(${activeCategory?.dark || "#5B4636"} ${holdProgress * 360}deg, #00000014 0deg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  background: activeCategory ? activeCategory.soft : "#FFF9EF",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {editMode && (
        <div
          style={{
            margin: "0 18px 4px 18px",
            padding: "8px 12px",
            background: "#3d3d3d",
            color: "#fff",
            borderRadius: 12,
            fontSize: 12.5,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {screen.view === "home"
            ? "Λειτουργία επεξεργασίας ενεργή — πατήστε ✏️ σε μια κατηγορία ή προσθέστε νέα."
            : "Λειτουργία επεξεργασίας ενεργή — πατήστε ✏️ σε μια εικόνα ή προσθέστε νέα."}
        </div>
      )}

      {/* Περιεχόμενο */}
      <div style={{ position: "relative", padding: "12px 16px 26px 16px" }}>
        {screen.view === "home" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {allCategories.map((cat, i) => (
              <div key={cat.id} style={{ position: "relative" }}>
                <button
                  onClick={() => setScreen({ view: "items", categoryId: cat.id })}
                  style={{
                    border: `3px solid ${cat.color}`,
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: 22,
                    padding: "20px 10px 14px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    boxShadow: `0 6px 0 ${cat.color}55, 0 8px 14px rgba(0,0,0,0.08)`,
                    transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: 54, lineHeight: 1 }}>{cat.emoji}</span>
                  <span style={{ fontSize: 16.5, fontWeight: 800, color: cat.dark }}>{cat.name}</span>
                </button>
                {editMode && cat.custom && (
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    aria-label="Διαγραφή κατηγορίας"
                    style={{
                      position: "absolute",
                      top: -6,
                      left: -6,
                      width: 26,
                      height: 26,
                      borderRadius: 999,
                      background: "#E24C4C",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
                      cursor: "pointer",
                    }}
                  >
                    <Trash2 size={12} color="#fff" />
                  </button>
                )}
              </div>
            ))}

            {editMode && (
              <button
                onClick={openAddCategory}
                style={{
                  border: "3px dashed #bbb",
                  cursor: "pointer",
                  background: "#ffffffa0",
                  borderRadius: 22,
                  padding: "20px 10px 14px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  minHeight: 96,
                  width: "100%",
                }}
              >
                <Plus size={30} color="#888" />
                <span style={{ fontSize: 13, fontWeight: 800, color: "#888" }}>Νέα κατηγορία</span>
              </button>
            )}
          </div>
        )}

        {screen.view === "items" && activeCategory && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {activeItems.map((item) => {
              const label = getLabel(activeCategory.id, item);
              const emoji = getEmoji(activeCategory.id, item);
              const isSpeaking = speakingId === item.id;
              return (
                <div key={item.id} style={{ position: "relative" }}>
                  <button
                    onClick={() => (editMode ? openEditor(activeCategory.id, item) : speak(label, item.id))}
                    style={{
                      width: "100%",
                      border: `2.5px solid ${activeCategory.color}`,
                      borderRadius: 18,
                      background: isSpeaking ? activeCategory.soft : "#fff",
                      cursor: "pointer",
                      padding: "14px 4px 10px 4px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 4,
                      boxShadow: isSpeaking ? `0 0 0 4px ${activeCategory.color}55` : "0 4px 8px rgba(0,0,0,0.06)",
                      transform: isSpeaking ? "scale(1.06)" : "scale(1)",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ fontSize: 42 }}>{emoji}</span>
                    <span
                      style={{
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: activeCategory.dark,
                        textAlign: "center",
                        lineHeight: 1.15,
                      }}
                    >
                      {label}
                    </span>
                    {!editMode && <Volume2 size={13} color={activeCategory.color} style={{ marginTop: 1 }} />}
                  </button>
                  {editMode && (
                    <div
                      style={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                        width: 26,
                        height: 26,
                        borderRadius: 999,
                        background: activeCategory.dark,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
                        pointerEvents: "none",
                      }}
                    >
                      <Pencil size={12} color="#fff" />
                    </div>
                  )}
                  {editMode && item.custom && (
                    <button
                      onClick={() => deleteItem(activeCategory.id, item.id)}
                      aria-label="Διαγραφή εικόνας"
                      style={{
                        position: "absolute",
                        top: -6,
                        left: -6,
                        width: 26,
                        height: 26,
                        borderRadius: 999,
                        background: "#E24C4C",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={12} color="#fff" />
                    </button>
                  )}
                </div>
              );
            })}

            {editMode && (
              <button
                onClick={() => openAddItem(activeCategory.id)}
                style={{
                  border: "2.5px dashed #bbb",
                  cursor: "pointer",
                  background: "#ffffffa0",
                  borderRadius: 18,
                  padding: "14px 4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  minHeight: 84,
                }}
              >
                <Plus size={22} color="#888" />
                <span style={{ fontSize: 11, fontWeight: 800, color: "#888" }}>Νέα εικόνα</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Παράθυρο μετονομασίας */}
      {editingItem && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            zIndex: 10,
            borderRadius: 20,
          }}
        >
          <div style={{ background: "#fff", borderRadius: 20, padding: 20, width: "100%", maxWidth: 320, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontWeight: 800, fontSize: 15, color: "#333" }}>Άλλαξε εικόνα ή λέξη</span>
              <button
                onClick={() => setEditingItem(null)}
                style={{ border: "none", background: "#f1f1f1", borderRadius: 999, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <XIcon size={16} />
              </button>
            </div>
            <EmojiPicker selected={draftEmoji} onSelect={setDraftEmoji} accentColor={activeCategory?.color} />
            <input
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", fontSize: 16, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", marginBottom: 14, fontFamily: "inherit" }}
              placeholder="Τι θα λέει;"
            />
            <button
              onClick={saveEditor}
              style={{ width: "100%", border: "none", background: activeCategory?.color || "#3FBFAE", color: "#fff", fontWeight: 800, fontSize: 15, padding: "12px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}
            >
              <Check size={18} /> Αποθήκευση
            </button>
          </div>
        </div>
      )}

      {/* Παράθυρο νέας κατηγορίας */}
      {addCatOpen && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 10, borderRadius: 20 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 20, width: "100%", maxWidth: 320, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontWeight: 800, fontSize: 15, color: "#333" }}>Νέα κατηγορία</span>
              <button onClick={() => setAddCatOpen(false)} style={{ border: "none", background: "#f1f1f1", borderRadius: 999, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <XIcon size={16} />
              </button>
            </div>
            <input
              autoFocus
              value={catNameDraft}
              onChange={(e) => setCatNameDraft(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", fontSize: 16, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", marginBottom: 10, fontFamily: "inherit" }}
              placeholder="Όνομα κατηγορίας, π.χ. Σχήματα"
            />
            <EmojiPicker selected={catEmojiDraft} onSelect={setCatEmojiDraft} accentColor={PALETTE[catPaletteIdx].color} />
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {PALETTE.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setCatPaletteIdx(idx)}
                  aria-label="Επιλογή χρώματος"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 999,
                    background: p.color,
                    border: idx === catPaletteIdx ? "3px solid #333" : "3px solid transparent",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
            <button
              onClick={saveNewCategory}
              style={{ width: "100%", border: "none", background: PALETTE[catPaletteIdx].color, color: "#fff", fontWeight: 800, fontSize: 15, padding: "12px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}
            >
              <Check size={18} /> Δημιουργία
            </button>
          </div>
        </div>
      )}

      {/* Παράθυρο νέας εικόνας */}
      {addItemFor && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 10, borderRadius: 20 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 20, width: "100%", maxWidth: 320, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontWeight: 800, fontSize: 15, color: "#333" }}>Νέα εικόνα</span>
              <button onClick={() => setAddItemFor(null)} style={{ border: "none", background: "#f1f1f1", borderRadius: 999, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <XIcon size={16} />
              </button>
            </div>
            <EmojiPicker selected={itemEmojiDraft} onSelect={setItemEmojiDraft} accentColor={activeCategory?.color} />
            <input
              value={itemLabelDraft}
              onChange={(e) => setItemLabelDraft(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", fontSize: 16, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", marginBottom: 14, fontFamily: "inherit" }}
              placeholder="Τι θα λέει;"
            />
            <button
              onClick={saveNewItem}
              style={{ width: "100%", border: "none", background: activeCategory?.color || "#3FBFAE", color: "#fff", fontWeight: 800, fontSize: 15, padding: "12px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}
            >
              <Check size={18} /> Προσθήκη
            </button>
          </div>
        </div>
      )}

      {saveState !== "idle" && (
        <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", background: "#333", color: "#fff", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 999 }}>
          {saveState === "saving" ? "Αποθήκευση..." : "Αποθηκεύτηκε ✓"}
        </div>
      )}
    </div>
  );
}


const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(<MathainoLexeis />);
