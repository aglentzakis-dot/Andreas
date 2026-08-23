(() => {
  const { useState, useEffect, useRef, useCallback } = React;
  function Pencil({ size = 16, color = "#000" }) {
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, lineHeight: 1, color } }, "\u270F\uFE0F");
  }
  function XIcon({ size = 16, color = "#000" }) {
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, lineHeight: 1, color, fontWeight: 700 } }, "\u2715");
  }
  function ArrowLeft({ size = 16, color = "#000" }) {
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, lineHeight: 1, color, fontWeight: 700 } }, "\u2190");
  }
  function Volume2({ size = 16, color = "#000" }) {
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, lineHeight: 1, color } }, "\u{1F50A}");
  }
  function Check({ size = 16, color = "#000" }) {
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, lineHeight: 1, color, fontWeight: 700 } }, "\u2713");
  }
  function Plus({ size = 16, color = "#000" }) {
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, lineHeight: 1, color, fontWeight: 700 } }, "\uFF0B");
  }
  function Trash2({ size = 16, color = "#000" }) {
    return /* @__PURE__ */ React.createElement("span", { style: { fontSize: size, lineHeight: 1, color } }, "\u{1F5D1}\uFE0F");
  }
  const CATEGORIES = [
    {
      id: "fagita",
      name: "\u03A6\u03B1\u03B3\u03B7\u03C4\u03AC",
      emoji: "\u{1F34E}",
      color: "#FF6B5E",
      dark: "#C8412F",
      soft: "#FFEDE9",
      items: [
        { id: "milo", emoji: "\u{1F34E}", label: "\u039C\u03AE\u03BB\u03BF" },
        { id: "banana", emoji: "\u{1F34C}", label: "\u039C\u03C0\u03B1\u03BD\u03AC\u03BD\u03B1" },
        { id: "portokali", emoji: "\u{1F34A}", label: "\u03A0\u03BF\u03C1\u03C4\u03BF\u03BA\u03AC\u03BB\u03B9" },
        { id: "karpouzi", emoji: "\u{1F349}", label: "\u039A\u03B1\u03C1\u03C0\u03BF\u03CD\u03B6\u03B9" },
        { id: "stafyli", emoji: "\u{1F347}", label: "\u03A3\u03C4\u03B1\u03C6\u03CD\u03BB\u03B9" },
        { id: "fraoula", emoji: "\u{1F353}", label: "\u03A6\u03C1\u03AC\u03BF\u03C5\u03BB\u03B1" },
        { id: "psomi", emoji: "\u{1F35E}", label: "\u03A8\u03C9\u03BC\u03AF" },
        { id: "tyri", emoji: "\u{1F9C0}", label: "\u03A4\u03C5\u03C1\u03AF" },
        { id: "pizza", emoji: "\u{1F355}", label: "\u03A0\u03AF\u03C4\u03C3\u03B1" },
        { id: "pagoto", emoji: "\u{1F366}", label: "\u03A0\u03B1\u03B3\u03C9\u03C4\u03CC" },
        { id: "keik", emoji: "\u{1F370}", label: "\u039A\u03AD\u03B9\u03BA" },
        { id: "gala", emoji: "\u{1F95B}", label: "\u0393\u03AC\u03BB\u03B1" }
      ]
    },
    {
      id: "zoa",
      name: "\u0396\u03CE\u03B1",
      emoji: "\u{1F436}",
      color: "#3FBFAE",
      dark: "#1F7A6E",
      soft: "#E7FBF7",
      items: [
        { id: "skylos", emoji: "\u{1F436}", label: "\u03A3\u03BA\u03CD\u03BB\u03BF\u03C2" },
        { id: "gata", emoji: "\u{1F431}", label: "\u0393\u03AC\u03C4\u03B1" },
        { id: "alogo", emoji: "\u{1F434}", label: "\u0386\u03BB\u03BF\u03B3\u03BF" },
        { id: "ageladha", emoji: "\u{1F42E}", label: "\u0391\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1" },
        { id: "provato", emoji: "\u{1F411}", label: "\u03A0\u03C1\u03CC\u03B2\u03B1\u03C4\u03BF" },
        { id: "liontari", emoji: "\u{1F981}", label: "\u039B\u03B9\u03BF\u03BD\u03C4\u03AC\u03C1\u03B9" },
        { id: "elefantas", emoji: "\u{1F418}", label: "\u0395\u03BB\u03AD\u03C6\u03B1\u03BD\u03C4\u03B1\u03C2" },
        { id: "pithikos", emoji: "\u{1F435}", label: "\u03A0\u03AF\u03B8\u03B7\u03BA\u03BF\u03C2" },
        { id: "psari", emoji: "\u{1F41F}", label: "\u03A8\u03AC\u03C1\u03B9" },
        { id: "pouli", emoji: "\u{1F426}", label: "\u03A0\u03BF\u03C5\u03BB\u03AF" },
        { id: "kotopoulo", emoji: "\u{1F414}", label: "\u039A\u03CC\u03C4\u03B1" },
        { id: "helona", emoji: "\u{1F422}", label: "\u03A7\u03B5\u03BB\u03CE\u03BD\u03B1" }
      ]
    },
    {
      id: "arithmoi",
      name: "\u0391\u03C1\u03B9\u03B8\u03BC\u03BF\u03AF",
      emoji: "\u{1F522}",
      color: "#FFC93C",
      dark: "#B8860B",
      soft: "#FFF8E1",
      items: [
        { id: "n1", emoji: "1\uFE0F\u20E3", label: "\u0388\u03BD\u03B1" },
        { id: "n2", emoji: "2\uFE0F\u20E3", label: "\u0394\u03CD\u03BF" },
        { id: "n3", emoji: "3\uFE0F\u20E3", label: "\u03A4\u03C1\u03AF\u03B1" },
        { id: "n4", emoji: "4\uFE0F\u20E3", label: "\u03A4\u03AD\u03C3\u03C3\u03B5\u03C1\u03B1" },
        { id: "n5", emoji: "5\uFE0F\u20E3", label: "\u03A0\u03AD\u03BD\u03C4\u03B5" },
        { id: "n6", emoji: "6\uFE0F\u20E3", label: "\u0388\u03BE\u03B9" },
        { id: "n7", emoji: "7\uFE0F\u20E3", label: "\u0395\u03C0\u03C4\u03AC" },
        { id: "n8", emoji: "8\uFE0F\u20E3", label: "\u039F\u03BA\u03C4\u03CE" },
        { id: "n9", emoji: "9\uFE0F\u20E3", label: "\u0395\u03BD\u03BD\u03AD\u03B1" },
        { id: "n10", emoji: "\u{1F51F}", label: "\u0394\u03AD\u03BA\u03B1" }
      ]
    },
    {
      id: "xromata",
      name: "\u03A7\u03C1\u03CE\u03BC\u03B1\u03C4\u03B1",
      emoji: "\u{1F3A8}",
      color: "#B084F5",
      dark: "#6F3FB0",
      soft: "#F4EBFF",
      items: [
        { id: "kokkino", hex: "#E53935", emoji: "\u{1F534}", label: "\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF" },
        { id: "ble", hex: "#1E88E5", emoji: "\u{1F535}", label: "\u039C\u03C0\u03BB\u03B5" },
        { id: "prasino", hex: "#43A047", emoji: "\u{1F7E2}", label: "\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF" },
        { id: "kitrino", hex: "#FDD835", emoji: "\u{1F7E1}", label: "\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF" },
        { id: "portokali_x", hex: "#FB8C00", emoji: "\u{1F7E0}", label: "\u03A0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF" },
        { id: "mov", hex: "#8E24AA", emoji: "\u{1F7E3}", label: "\u039C\u03C9\u03B2" },
        { id: "roz", hex: "#EC407A", emoji: "\u{1F497}", label: "\u03A1\u03BF\u03B6" },
        { id: "kafe", hex: "#6D4C41", emoji: "\u{1F7E4}", label: "\u039A\u03B1\u03C6\u03AD" },
        { id: "mavro", hex: "#212121", emoji: "\u26AB", label: "\u039C\u03B1\u03CD\u03C1\u03BF" },
        { id: "aspro", hex: "#FFFFFF", emoji: "\u26AA", label: "\u0386\u03C3\u03C0\u03C1\u03BF" },
        { id: "gkri", hex: "#9E9E9E", emoji: "\u26AA", label: "\u0393\u03BA\u03C1\u03B9" },
        { id: "mpez", hex: "#D9BB94", emoji: "\u{1F7E4}", label: "\u039C\u03C0\u03B5\u03B6" },
        { id: "xryso", hex: "#D4AF37", emoji: "\u{1F7E1}", label: "\u03A7\u03C1\u03C5\u03C3\u03CC" },
        { id: "asimi", hex: "#BFC1C2", emoji: "\u26AA", label: "\u0391\u03C3\u03B7\u03BC\u03AF" },
        { id: "tourkouaz", hex: "#26C6DA", emoji: "\u{1F535}", label: "\u03A4\u03B9\u03C1\u03BA\u03BF\u03C5\u03AC\u03B6" },
        { id: "ladi", hex: "#808000", emoji: "\u{1F7E2}", label: "\u039B\u03B1\u03B4\u03AF" },
        { id: "vyssini", hex: "#7B1F2B", emoji: "\u{1F534}", label: "\u0392\u03C5\u03C3\u03C3\u03B9\u03BD\u03AF" },
        { id: "galazio", hex: "#64B5F6", emoji: "\u{1F535}", label: "\u0393\u03B1\u03BB\u03AC\u03B6\u03B9\u03BF" },
        { id: "levanta", hex: "#B497BD", emoji: "\u{1F7E3}", label: "\u039B\u03B5\u03B2\u03AC\u03BD\u03C4\u03B1" },
        { id: "xaki", hex: "#BDB76B", emoji: "\u{1F7E2}", label: "\u03A7\u03B1\u03BA\u03AF" }
      ]
    },
    {
      id: "antikeimena",
      name: "\u0391\u03BD\u03C4\u03B9\u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03B1",
      emoji: "\u26BD",
      color: "#5FBF67",
      dark: "#2F7A38",
      soft: "#EEFBEF",
      items: [
        { id: "mpala", emoji: "\u26BD", label: "\u039C\u03C0\u03AC\u03BB\u03B1" },
        { id: "autokinito", emoji: "\u{1F697}", label: "\u0391\u03C5\u03C4\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03BF" },
        { id: "vivlio", emoji: "\u{1F4DA}", label: "\u0392\u03B9\u03B2\u03BB\u03AF\u03BF" },
        { id: "karekla", emoji: "\u{1FA91}", label: "\u039A\u03B1\u03C1\u03AD\u03BA\u03BB\u03B1" },
        { id: "roloi", emoji: "\u23F0", label: "\u03A1\u03BF\u03BB\u03CC\u03B9" },
        { id: "kleidi", emoji: "\u{1F511}", label: "\u039A\u03BB\u03B5\u03B9\u03B4\u03AF" },
        { id: "psalidi", emoji: "\u2702\uFE0F", label: "\u03A8\u03B1\u03BB\u03AF\u03B4\u03B9" },
        { id: "tilefono", emoji: "\u{1F4F1}", label: "\u03A4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF" },
        { id: "podilato", emoji: "\u{1F6B2}", label: "\u03A0\u03BF\u03B4\u03AE\u03BB\u03B1\u03C4\u03BF" },
        { id: "ompela", emoji: "\u2602\uFE0F", label: "\u039F\u03BC\u03C0\u03C1\u03AD\u03BB\u03B1" }
      ]
    },
    {
      id: "drastiriotites",
      name: "\u0394\u03C1\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B5\u03C2",
      emoji: "\u{1F9F8}",
      color: "#4F9DDE",
      dark: "#256B9E",
      soft: "#E8F4FC",
      items: [
        { id: "paixnidi", emoji: "\u{1F9F8}", label: "\u03A0\u03B1\u03AF\u03B6\u03C9" },
        { id: "zografiki", emoji: "\u{1F3A8}", label: "\u0396\u03C9\u03B3\u03C1\u03B1\u03C6\u03AF\u03B6\u03C9" },
        { id: "ypnos", emoji: "\u{1F634}", label: "\u039A\u03BF\u03B9\u03BC\u03AC\u03BC\u03B1\u03B9" },
        { id: "mpanio", emoji: "\u{1F6C1}", label: "\u039A\u03AC\u03BD\u03C9 \u03BC\u03C0\u03AC\u03BD\u03B9\u03BF" },
        { id: "trogo", emoji: "\u{1F37D}\uFE0F", label: "\u03A4\u03C1\u03CE\u03C9" },
        { id: "volta", emoji: "\u{1F6B6}", label: "\u03A0\u03AC\u03C9 \u03B2\u03CC\u03BB\u03C4\u03B1" },
        { id: "tragoudi", emoji: "\u{1F3B5}", label: "\u03A4\u03C1\u03B1\u03B3\u03BF\u03C5\u03B4\u03AC\u03C9" },
        { id: "diavazo", emoji: "\u{1F4D6}", label: "\u0394\u03B9\u03B1\u03B2\u03AC\u03B6\u03C9" },
        { id: "xorevo", emoji: "\u{1F483}", label: "\u03A7\u03BF\u03C1\u03B5\u03CD\u03C9" },
        { id: "pazl", emoji: "\u{1F9E9}", label: "\u039A\u03AC\u03BD\u03C9 \u03C0\u03B1\u03B6\u03BB" },
        { id: "plenoxeria", emoji: "\u{1F9FC}", label: "\u03A0\u03BB\u03AD\u03BD\u03C9 \u03C4\u03B1 \u03C7\u03AD\u03C1\u03B9\u03B1 \u03BC\u03BF\u03C5" },
        { id: "vourtsizo", emoji: "\u{1FAA5}", label: "\u0392\u03BF\u03C5\u03C1\u03C4\u03C3\u03AF\u03B6\u03C9 \u03C4\u03B1 \u03B4\u03CC\u03BD\u03C4\u03B9\u03B1 \u03BC\u03BF\u03C5" }
      ]
    },
    {
      id: "synaisthimata",
      name: "\u03A3\u03C5\u03BD\u03B1\u03B9\u03C3\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1",
      emoji: "\u{1F60A}",
      color: "#FF8FB2",
      dark: "#C24A75",
      soft: "#FFEFF4",
      items: [
        { id: "xaroumenos", emoji: "\u{1F60A}", label: "\u03A7\u03B1\u03C1\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF\u03C2" },
        { id: "lypimenos", emoji: "\u{1F622}", label: "\u039B\u03C5\u03C0\u03B7\u03BC\u03AD\u03BD\u03BF\u03C2" },
        { id: "thymomenos", emoji: "\u{1F620}", label: "\u0398\u03C5\u03BC\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2" },
        { id: "fovismenos", emoji: "\u{1F628}", label: "\u03A6\u03BF\u03B2\u03B9\u03C3\u03BC\u03AD\u03BD\u03BF\u03C2" },
        { id: "kourasmenos", emoji: "\u{1F634}", label: "\u039A\u03BF\u03C5\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03BF\u03C2" },
        { id: "ekpliktos", emoji: "\u{1F632}", label: "\u0388\u03BA\u03C0\u03BB\u03B7\u03BA\u03C4\u03BF\u03C2" },
        { id: "iremos", emoji: "\u{1F60C}", label: "\u0389\u03C1\u03B5\u03BC\u03BF\u03C2" },
        { id: "mperdemenos", emoji: "\u{1F615}", label: "\u039C\u03C0\u03B5\u03C1\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF\u03C2" }
      ]
    },
    {
      id: "routina",
      name: "\u039A\u03B1\u03B8\u03B7\u03BC\u03B5\u03C1\u03B9\u03BD\u03AE \u03C1\u03BF\u03C5\u03C4\u03AF\u03BD\u03B1",
      emoji: "\u23F0",
      color: "#8C7853",
      dark: "#5C4B2E",
      soft: "#F5F0E6",
      items: [
        { id: "ksypnao", emoji: "\u23F0", label: "\u039E\u03C5\u03C0\u03BD\u03AC\u03C9" },
        { id: "proino", emoji: "\u{1F963}", label: "\u03A4\u03C1\u03CE\u03C9 \u03C0\u03C1\u03C9\u03B9\u03BD\u03CC" },
        { id: "plenodontia", emoji: "\u{1FAA5}", label: "\u03A0\u03BB\u03AD\u03BD\u03C9 \u03C4\u03B1 \u03B4\u03CC\u03BD\u03C4\u03B9\u03B1 \u03BC\u03BF\u03C5" },
        { id: "ntynomai", emoji: "\u{1F455}", label: "\u039D\u03C4\u03CD\u03BD\u03BF\u03BC\u03B1\u03B9" },
        { id: "sxoleio", emoji: "\u{1F392}", label: "\u03A0\u03AC\u03C9 \u03C3\u03C7\u03BF\u03BB\u03B5\u03AF\u03BF" },
        { id: "mesimeriano", emoji: "\u{1F37D}\uFE0F", label: "\u03A4\u03C1\u03CE\u03C9 \u03BC\u03B5\u03C3\u03B7\u03BC\u03B5\u03C1\u03B9\u03B1\u03BD\u03CC" },
        { id: "paixnidi_r", emoji: "\u{1F9F8}", label: "\u03A0\u03B1\u03AF\u03B6\u03C9" },
        { id: "mpanio_r", emoji: "\u{1F6C1}", label: "\u039A\u03AC\u03BD\u03C9 \u03BC\u03C0\u03AC\u03BD\u03B9\u03BF" },
        { id: "pitzames", emoji: "\u{1F319}", label: "\u03A6\u03BF\u03C1\u03AC\u03C9 \u03C0\u03B9\u03C4\u03B6\u03AC\u03BC\u03B5\u03C2" },
        { id: "ypnos_r", emoji: "\u{1F31B}", label: "\u03A0\u03AC\u03C9 \u03B3\u03B9\u03B1 \u03CD\u03C0\u03BD\u03BF" }
      ]
    },
    {
      id: "rimata",
      name: "\u03A1\u03AE\u03BC\u03B1\u03C4\u03B1 / \u0395\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2",
      emoji: "\u{1F3C3}",
      color: "#7C83FD",
      dark: "#4A50B0",
      soft: "#EEF0FF",
      items: [
        { id: "treho", emoji: "\u{1F3C3}", label: "\u03A4\u03C1\u03AD\u03C7\u03C9" },
        { id: "pidao", emoji: "\u{1F938}", label: "\u03A0\u03B7\u03B4\u03AC\u03C9" },
        { id: "anoigo", emoji: "\u{1F513}", label: "\u0391\u03BD\u03BF\u03AF\u03B3\u03C9" },
        { id: "kleino", emoji: "\u{1F512}", label: "\u039A\u03BB\u03B5\u03AF\u03BD\u03C9" },
        { id: "dino", emoji: "\u{1F932}", label: "\u0394\u03AF\u03BD\u03C9" },
        { id: "perno", emoji: "\u{1F90F}", label: "\u03A0\u03B1\u03AF\u03C1\u03BD\u03C9" },
        { id: "kathomai", emoji: "\u{1FA91}", label: "\u039A\u03AC\u03B8\u03BF\u03BC\u03B1\u03B9" },
        { id: "sikonomai", emoji: "\u{1F9CD}", label: "\u03A3\u03B7\u03BA\u03CE\u03BD\u03BF\u03BC\u03B1\u03B9" },
        { id: "koitazo", emoji: "\u{1F440}", label: "\u039A\u03BF\u03B9\u03C4\u03AC\u03B6\u03C9" },
        { id: "akouo", emoji: "\u{1F442}", label: "\u0391\u03BA\u03BF\u03CD\u03C9" }
      ]
    },
    {
      id: "meritousomatos",
      name: "\u039C\u03AD\u03C1\u03B7 \u03C4\u03BF\u03C5 \u03C3\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2",
      emoji: "\u270B",
      color: "#F0A84E",
      dark: "#A86B1E",
      soft: "#FFF3E0",
      items: [
        { id: "kefali", emoji: "\u{1F642}", label: "\u039A\u03B5\u03C6\u03AC\u03BB\u03B9" },
        { id: "mati", emoji: "\u{1F441}\uFE0F", label: "\u039C\u03AC\u03C4\u03B9" },
        { id: "afti", emoji: "\u{1F442}", label: "\u0391\u03C5\u03C4\u03AF" },
        { id: "myti", emoji: "\u{1F443}", label: "\u039C\u03CD\u03C4\u03B7" },
        { id: "stoma", emoji: "\u{1F444}", label: "\u03A3\u03C4\u03CC\u03BC\u03B1" },
        { id: "dontia", emoji: "\u{1F9B7}", label: "\u0394\u03CC\u03BD\u03C4\u03B9\u03B1" },
        { id: "xeri", emoji: "\u270B", label: "\u03A7\u03AD\u03C1\u03B9" },
        { id: "dahtyla", emoji: "\u{1F446}", label: "\u0394\u03AC\u03C7\u03C4\u03C5\u03BB\u03B1" },
        { id: "podi", emoji: "\u{1F9B6}", label: "\u03A0\u03CC\u03B4\u03B9" },
        { id: "mallia", emoji: "\u{1F487}", label: "\u039C\u03B1\u03BB\u03BB\u03B9\u03AC" }
      ]
    }
  ];
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
    { color: "#F0A84E", dark: "#A86B1E", soft: "#FFF3E0" }
  ];
  const LABELS_KEY = "custom-labels";
  const CATS_KEY = "custom-categories";
  const ITEMS_KEY = "custom-items-by-cat";
  const EMOJIS_KEY = "custom-emojis";
  const VOICE_KEY = "tts-voice-name";
  const HOLD_MS = 1600;
  const EMOJI_LIBRARY = [
    { e: "\u{1F34E}", k: ["\u03BC\u03AE\u03BB\u03BF", "\u03C6\u03C1\u03BF\u03CD\u03C4\u03BF"] },
    { e: "\u{1F34C}", k: ["\u03BC\u03C0\u03B1\u03BD\u03AC\u03BD\u03B1"] },
    { e: "\u{1F34A}", k: ["\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03AC\u03BB\u03B9"] },
    { e: "\u{1F349}", k: ["\u03BA\u03B1\u03C1\u03C0\u03BF\u03CD\u03B6\u03B9"] },
    { e: "\u{1F347}", k: ["\u03C3\u03C4\u03B1\u03C6\u03CD\u03BB\u03B9"] },
    { e: "\u{1F353}", k: ["\u03C6\u03C1\u03AC\u03BF\u03C5\u03BB\u03B1"] },
    { e: "\u{1F34D}", k: ["\u03B1\u03BD\u03B1\u03BD\u03AC\u03C2"] },
    { e: "\u{1F351}", k: ["\u03C1\u03BF\u03B4\u03AC\u03BA\u03B9\u03BD\u03BF"] },
    { e: "\u{1F352}", k: ["\u03BA\u03B5\u03C1\u03AC\u03C3\u03B9"] },
    { e: "\u{1F34B}", k: ["\u03BB\u03B5\u03BC\u03CC\u03BD\u03B9"] },
    { e: "\u{1F95D}", k: ["\u03B1\u03BA\u03C4\u03B9\u03BD\u03AF\u03B4\u03B9\u03BF"] },
    { e: "\u{1F35E}", k: ["\u03C8\u03C9\u03BC\u03AF"] },
    { e: "\u{1F9C0}", k: ["\u03C4\u03C5\u03C1\u03AF"] },
    { e: "\u{1F355}", k: ["\u03C0\u03AF\u03C4\u03C3\u03B1"] },
    { e: "\u{1F366}", k: ["\u03C0\u03B1\u03B3\u03C9\u03C4\u03CC"] },
    { e: "\u{1F370}", k: ["\u03BA\u03AD\u03B9\u03BA", "\u03C4\u03BF\u03CD\u03C1\u03C4\u03B1"] },
    { e: "\u{1F95B}", k: ["\u03B3\u03AC\u03BB\u03B1"] },
    { e: "\u{1F36B}", k: ["\u03C3\u03BF\u03BA\u03BF\u03BB\u03AC\u03C4\u03B1"] },
    { e: "\u{1F36A}", k: ["\u03BC\u03C0\u03B9\u03C3\u03BA\u03CC\u03C4\u03BF"] },
    { e: "\u{1F955}", k: ["\u03BA\u03B1\u03C1\u03CC\u03C4\u03BF"] },
    { e: "\u{1F966}", k: ["\u03BC\u03C0\u03C1\u03CC\u03BA\u03BF\u03BB\u03BF"] },
    { e: "\u{1F345}", k: ["\u03BD\u03C4\u03BF\u03BC\u03AC\u03C4\u03B1"] },
    { e: "\u{1F954}", k: ["\u03C0\u03B1\u03C4\u03AC\u03C4\u03B1"] },
    { e: "\u{1F354}", k: ["\u03C7\u03AC\u03BC\u03C0\u03BF\u03C5\u03C1\u03B3\u03BA\u03B5\u03C1"] },
    { e: "\u{1F35F}", k: ["\u03C4\u03B7\u03B3\u03B1\u03BD\u03B7\u03C4\u03AD\u03C2 \u03C0\u03B1\u03C4\u03AC\u03C4\u03B5\u03C2"] },
    { e: "\u{1F95A}", k: ["\u03B1\u03C5\u03B3\u03CC"] },
    { e: "\u{1F35D}", k: ["\u03BC\u03B1\u03BA\u03B1\u03C1\u03CC\u03BD\u03B9\u03B1", "\u03B6\u03C5\u03BC\u03B1\u03C1\u03B9\u03BA\u03AC"] },
    { e: "\u{1F357}", k: ["\u03BA\u03BF\u03C4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF \u03C6\u03B1\u03B3\u03B7\u03C4\u03CC"] },
    { e: "\u{1F36F}", k: ["\u03BC\u03AD\u03BB\u03B9"] },
    { e: "\u{1F9C1}", k: ["\u03BAap\u03BA\u03AD\u03B9\u03BA", "\u03BC\u03AC\u03C6\u03B9\u03BD"] },
    { e: "\u{1F37D}\uFE0F", k: ["\u03C0\u03B9\u03AC\u03C4\u03BF", "\u03C4\u03C1\u03CE\u03C9"] },
    { e: "\u{1F436}", k: ["\u03C3\u03BA\u03CD\u03BB\u03BF\u03C2"] },
    { e: "\u{1F431}", k: ["\u03B3\u03AC\u03C4\u03B1"] },
    { e: "\u{1F434}", k: ["\u03AC\u03BB\u03BF\u03B3\u03BF"] },
    { e: "\u{1F42E}", k: ["\u03B1\u03B3\u03B5\u03BB\u03AC\u03B4\u03B1"] },
    { e: "\u{1F411}", k: ["\u03C0\u03C1\u03CC\u03B2\u03B1\u03C4\u03BF"] },
    { e: "\u{1F981}", k: ["\u03BB\u03B9\u03BF\u03BD\u03C4\u03AC\u03C1\u03B9"] },
    { e: "\u{1F418}", k: ["\u03B5\u03BB\u03AD\u03C6\u03B1\u03BD\u03C4\u03B1\u03C2"] },
    { e: "\u{1F435}", k: ["\u03C0\u03AF\u03B8\u03B7\u03BA\u03BF\u03C2"] },
    { e: "\u{1F41F}", k: ["\u03C8\u03AC\u03C1\u03B9"] },
    { e: "\u{1F426}", k: ["\u03C0\u03BF\u03C5\u03BB\u03AF"] },
    { e: "\u{1F414}", k: ["\u03BA\u03CC\u03C4\u03B1", "\u03BA\u03BF\u03C4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF"] },
    { e: "\u{1F422}", k: ["\u03C7\u03B5\u03BB\u03CE\u03BD\u03B1"] },
    { e: "\u{1F430}", k: ["\u03BA\u03BF\u03C5\u03BD\u03AD\u03BB\u03B9"] },
    { e: "\u{1F43B}", k: ["\u03B1\u03C1\u03BA\u03BF\u03CD\u03B4\u03B1"] },
    { e: "\u{1F438}", k: ["\u03B2\u03AC\u03C4\u03C1\u03B1\u03C7\u03BF\u03C2"] },
    { e: "\u{1F98B}", k: ["\u03C0\u03B5\u03C4\u03B1\u03BB\u03BF\u03CD\u03B4\u03B1"] },
    { e: "\u{1F41D}", k: ["\u03BC\u03AD\u03BB\u03B9\u03C3\u03C3\u03B1"] },
    { e: "\u{1F989}", k: ["\u03BA\u03BF\u03C5\u03BA\u03BF\u03C5\u03B2\u03AC\u03B3\u03B9\u03B1"] },
    { e: "\u{1F43A}", k: ["\u03BB\u03CD\u03BA\u03BF\u03C2"] },
    { e: "\u{1F992}", k: ["\u03BA\u03B1\u03BC\u03B7\u03BB\u03BF\u03C0\u03AC\u03C1\u03B4\u03B1\u03BB\u03B7"] },
    { e: "\u{1F993}", k: ["\u03B6\u03AD\u03B2\u03C1\u03B1"] },
    { e: "\u{1F437}", k: ["\u03B3\u03BF\u03C5\u03C1\u03BF\u03CD\u03BD\u03B9"] },
    { e: "\u{1F42D}", k: ["\u03C0\u03BF\u03BD\u03C4\u03AF\u03BA\u03B9"] },
    { e: "\u{1F534}", k: ["\u03BA\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"] },
    { e: "\u{1F535}", k: ["\u03BC\u03C0\u03BB\u03B5"] },
    { e: "\u{1F7E2}", k: ["\u03C0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"] },
    { e: "\u{1F7E1}", k: ["\u03BA\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"] },
    { e: "\u{1F7E0}", k: ["\u03C0\u03BF\u03C1\u03C4\u03BF\u03BA\u03B1\u03BB\u03AF"] },
    { e: "\u{1F7E3}", k: ["\u03BC\u03C9\u03B2"] },
    { e: "\u{1F7E4}", k: ["\u03BA\u03B1\u03C6\u03AD \u03C7\u03C1\u03CE\u03BC\u03B1"] },
    { e: "\u26AB", k: ["\u03BC\u03B1\u03CD\u03C1\u03BF"] },
    { e: "\u26AA", k: ["\u03AC\u03C3\u03C0\u03C1\u03BF", "\u03BB\u03B5\u03C5\u03BA\u03CC"] },
    { e: "\u{1F497}", k: ["\u03C1\u03BF\u03B6"] },
    { e: "\u26BD", k: ["\u03BC\u03C0\u03AC\u03BB\u03B1"] },
    { e: "\u{1F697}", k: ["\u03B1\u03C5\u03C4\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03BF"] },
    { e: "\u{1F4DA}", k: ["\u03B2\u03B9\u03B2\u03BB\u03AF\u03BF"] },
    { e: "\u{1FA91}", k: ["\u03BA\u03B1\u03C1\u03AD\u03BA\u03BB\u03B1"] },
    { e: "\u23F0", k: ["\u03C1\u03BF\u03BB\u03CC\u03B9", "\u03BE\u03C5\u03C0\u03BD\u03AC\u03C9"] },
    { e: "\u{1F511}", k: ["\u03BA\u03BB\u03B5\u03B9\u03B4\u03AF"] },
    { e: "\u2702\uFE0F", k: ["\u03C8\u03B1\u03BB\u03AF\u03B4\u03B9"] },
    { e: "\u{1F4F1}", k: ["\u03C4\u03B7\u03BB\u03AD\u03C6\u03C9\u03BD\u03BF"] },
    { e: "\u{1F6B2}", k: ["\u03C0\u03BF\u03B4\u03AE\u03BB\u03B1\u03C4\u03BF"] },
    { e: "\u2602\uFE0F", k: ["\u03BF\u03BC\u03C0\u03C1\u03AD\u03BB\u03B1"] },
    { e: "\u{1F392}", k: ["\u03C4\u03C3\u03AC\u03BD\u03C4\u03B1", "\u03C3\u03C7\u03BF\u03BB\u03B5\u03AF\u03BF"] },
    { e: "\u{1F58A}\uFE0F", k: ["\u03C3\u03C4\u03C5\u03BB\u03CC"] },
    { e: "\u270F\uFE0F", k: ["\u03BC\u03BF\u03BB\u03CD\u03B2\u03B9"] },
    { e: "\u{1F9E6}", k: ["\u03BA\u03AC\u03BB\u03C4\u03C3\u03B1"] },
    { e: "\u{1F45F}", k: ["\u03C0\u03B1\u03C0\u03BF\u03CD\u03C4\u03C3\u03B9"] },
    { e: "\u{1F455}", k: ["\u03BC\u03C0\u03BB\u03BF\u03CD\u03B6\u03B1", "\u03BD\u03C4\u03CD\u03BD\u03BF\u03BC\u03B1\u03B9"] },
    { e: "\u{1F9F8}", k: ["\u03B1\u03C1\u03BA\u03BF\u03C5\u03B4\u03AC\u03BA\u03B9", "\u03C0\u03B1\u03B9\u03C7\u03BD\u03AF\u03B4\u03B9", "\u03C0\u03B1\u03AF\u03B6\u03C9"] },
    { e: "\u{1F388}", k: ["\u03BC\u03C0\u03B1\u03BB\u03CC\u03BD\u03B9"] },
    { e: "\u{1F6AA}", k: ["\u03C0\u03CC\u03C1\u03C4\u03B1"] },
    { e: "\u{1FA9F}", k: ["\u03C0\u03B1\u03C1\u03AC\u03B8\u03C5\u03C1\u03BF"] },
    { e: "\u{1F6CF}\uFE0F", k: ["\u03BA\u03C1\u03B5\u03B2\u03AC\u03C4\u03B9"] },
    { e: "\u{1F6BF}", k: ["\u03BD\u03C4\u03BF\u03C5\u03C2"] },
    { e: "\u{1F9FB}", k: ["\u03C7\u03B1\u03C1\u03C4\u03AF \u03C5\u03B3\u03B5\u03AF\u03B1\u03C2"] },
    { e: "\u{1F9F4}", k: ["\u03C3\u03B1\u03BC\u03C0\u03BF\u03C5\u03AC\u03BD", "\u03BA\u03C1\u03AD\u03BC\u03B1"] },
    { e: "\u{1F3A8}", k: ["\u03B6\u03C9\u03B3\u03C1\u03B1\u03C6\u03B9\u03BA\u03AE", "\u03B6\u03C9\u03B3\u03C1\u03B1\u03C6\u03AF\u03B6\u03C9"] },
    { e: "\u{1F634}", k: ["\u03BA\u03BF\u03B9\u03BC\u03AC\u03BC\u03B1\u03B9", "\u03CD\u03C0\u03BD\u03BF\u03C2", "\u03BA\u03BF\u03C5\u03C1\u03B1\u03C3\u03BC\u03AD\u03BD\u03BF\u03C2"] },
    { e: "\u{1F6C1}", k: ["\u03BC\u03C0\u03AC\u03BD\u03B9\u03BF"] },
    { e: "\u{1F6B6}", k: ["\u03B2\u03CC\u03BB\u03C4\u03B1", "\u03C0\u03B5\u03C1\u03C0\u03B1\u03C4\u03AC\u03C9"] },
    { e: "\u{1F3B5}", k: ["\u03C4\u03C1\u03B1\u03B3\u03BF\u03C5\u03B4\u03AC\u03C9", "\u03BC\u03BF\u03C5\u03C3\u03B9\u03BA\u03AE"] },
    { e: "\u{1F4D6}", k: ["\u03B4\u03B9\u03B1\u03B2\u03AC\u03B6\u03C9", "\u03B1\u03BD\u03AC\u03B3\u03BD\u03C9\u03C3\u03B7"] },
    { e: "\u{1F483}", k: ["\u03C7\u03BF\u03C1\u03B5\u03CD\u03C9"] },
    { e: "\u{1F9E9}", k: ["\u03C0\u03B1\u03B6\u03BB"] },
    { e: "\u{1F9FC}", k: ["\u03C0\u03BB\u03AD\u03BD\u03C9 \u03C7\u03AD\u03C1\u03B9\u03B1", "\u03C3\u03B1\u03C0\u03BF\u03CD\u03BD\u03B9"] },
    { e: "\u{1FAA5}", k: ["\u03B2\u03BF\u03C5\u03C1\u03C4\u03C3\u03AF\u03B6\u03C9 \u03B4\u03CC\u03BD\u03C4\u03B9\u03B1", "\u03BF\u03B4\u03BF\u03BD\u03C4\u03CC\u03B2\u03BF\u03C5\u03C1\u03C4\u03C3\u03B1"] },
    { e: "\u{1F3C3}", k: ["\u03C4\u03C1\u03AD\u03C7\u03C9"] },
    { e: "\u{1F938}", k: ["\u03C0\u03B7\u03B4\u03AC\u03C9"] },
    { e: "\u{1F513}", k: ["\u03B1\u03BD\u03BF\u03AF\u03B3\u03C9"] },
    { e: "\u{1F512}", k: ["\u03BA\u03BB\u03B5\u03AF\u03BD\u03C9"] },
    { e: "\u{1F932}", k: ["\u03B4\u03AF\u03BD\u03C9"] },
    { e: "\u{1F90F}", k: ["\u03C0\u03B1\u03AF\u03C1\u03BD\u03C9"] },
    { e: "\u{1F9CD}", k: ["\u03C3\u03B7\u03BA\u03CE\u03BD\u03BF\u03BC\u03B1\u03B9", "\u03AC\u03BD\u03B8\u03C1\u03C9\u03C0\u03BF\u03C2", "\u03B1\u03BD\u03B8\u03C1\u03C9\u03C0\u03AC\u03BA\u03B9"] },
    { e: "\u{1F440}", k: ["\u03BA\u03BF\u03B9\u03C4\u03AC\u03B6\u03C9", "\u03BC\u03AC\u03C4\u03B9\u03B1"] },
    { e: "\u{1F5E3}\uFE0F", k: ["\u03BC\u03B9\u03BB\u03AC\u03C9"] },
    { e: "\u{1F917}", k: ["\u03B1\u03B3\u03BA\u03B1\u03BB\u03B9\u03AC"] },
    { e: "\u{1F60A}", k: ["\u03C7\u03B1\u03C1\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF\u03C2", "\u03C7\u03B1\u03BC\u03CC\u03B3\u03B5\u03BB\u03BF"] },
    { e: "\u{1F622}", k: ["\u03BB\u03C5\u03C0\u03B7\u03BC\u03AD\u03BD\u03BF\u03C2", "\u03BA\u03BB\u03B1\u03AF\u03C9"] },
    { e: "\u{1F620}", k: ["\u03B8\u03C5\u03BC\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2"] },
    { e: "\u{1F628}", k: ["\u03C6\u03BF\u03B2\u03B9\u03C3\u03BC\u03AD\u03BD\u03BF\u03C2"] },
    { e: "\u{1F632}", k: ["\u03AD\u03BA\u03C0\u03BB\u03B7\u03BA\u03C4\u03BF\u03C2"] },
    { e: "\u{1F60C}", k: ["\u03AE\u03C1\u03B5\u03BC\u03BF\u03C2"] },
    { e: "\u{1F615}", k: ["\u03BC\u03C0\u03B5\u03C1\u03B4\u03B5\u03BC\u03AD\u03BD\u03BF\u03C2"] },
    { e: "\u{1F970}", k: ["\u03B1\u03B3\u03AC\u03C0\u03B7"] },
    { e: "\u{1F963}", k: ["\u03C0\u03C1\u03C9\u03B9\u03BD\u03CC", "\u03BC\u03C0\u03BF\u03BB"] },
    { e: "\u{1F319}", k: ["\u03C0\u03B9\u03C4\u03B6\u03AC\u03BC\u03B5\u03C2", "\u03BD\u03CD\u03C7\u03C4\u03B1"] },
    { e: "\u{1F31B}", k: ["\u03CD\u03C0\u03BD\u03BF\u03C2", "\u03C6\u03B5\u03B3\u03B3\u03AC\u03C1\u03B9"] },
    { e: "\u{1F642}", k: ["\u03BA\u03B5\u03C6\u03AC\u03BB\u03B9", "\u03C0\u03C1\u03CC\u03C3\u03C9\u03C0\u03BF"] },
    { e: "\u{1F441}\uFE0F", k: ["\u03BC\u03AC\u03C4\u03B9"] },
    { e: "\u{1F442}", k: ["\u03B1\u03C5\u03C4\u03AF", "\u03B1\u03BA\u03BF\u03CD\u03C9"] },
    { e: "\u{1F443}", k: ["\u03BC\u03CD\u03C4\u03B7"] },
    { e: "\u{1F444}", k: ["\u03C3\u03C4\u03CC\u03BC\u03B1"] },
    { e: "\u{1F9B7}", k: ["\u03B4\u03CC\u03BD\u03C4\u03B9\u03B1"] },
    { e: "\u270B", k: ["\u03C7\u03AD\u03C1\u03B9"] },
    { e: "\u{1F446}", k: ["\u03B4\u03AC\u03C7\u03C4\u03C5\u03BB\u03B1"] },
    { e: "\u{1F9B6}", k: ["\u03C0\u03CC\u03B4\u03B9", "\u03C0\u03B1\u03C4\u03BF\u03CD\u03C3\u03B1"] },
    { e: "\u{1F9B5}", k: ["\u03C0\u03CC\u03B4\u03B9", "\u03C3\u03BA\u03AD\u03BB\u03BF\u03C2"] },
    { e: "\u{1F463}", k: ["\u03C0\u03B1\u03C4\u03BF\u03CD\u03C3\u03B5\u03C2", "\u03C0\u03B1\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1"] },
    { e: "\u{1F487}", k: ["\u03BC\u03B1\u03BB\u03BB\u03B9\u03AC"] },
    { e: "\u{1F466}", k: ["\u03B1\u03B3\u03CC\u03C1\u03B9"] },
    { e: "\u{1F467}", k: ["\u03BA\u03BF\u03C1\u03AF\u03C4\u03C3\u03B9"] },
    { e: "\u{1F468}", k: ["\u03BC\u03C0\u03B1\u03BC\u03C0\u03AC\u03C2", "\u03AC\u03BD\u03C4\u03C1\u03B1\u03C2"] },
    { e: "\u{1F469}", k: ["\u03BC\u03B1\u03BC\u03AC", "\u03B3\u03C5\u03BD\u03B1\u03AF\u03BA\u03B1"] },
    { e: "\u{1F474}", k: ["\u03C0\u03B1\u03C0\u03C0\u03BF\u03CD\u03C2"] },
    { e: "\u{1F475}", k: ["\u03B3\u03B9\u03B1\u03B3\u03B9\u03AC"] },
    { e: "\u{1F476}", k: ["\u03BC\u03C9\u03C1\u03CC"] },
    { e: "\u{1F9D1}\u200D\u{1F3EB}", k: ["\u03B4\u03AC\u03C3\u03BA\u03B1\u03BB\u03BF\u03C2", "\u03B4\u03B1\u03C3\u03BA\u03AC\u03BB\u03B1"] },
    { e: "\u{1F9D1}\u200D\u2695\uFE0F", k: ["\u03B3\u03B9\u03B1\u03C4\u03C1\u03CC\u03C2"] },
    { e: "\u{1F46E}", k: ["\u03B1\u03C3\u03C4\u03C5\u03BD\u03BF\u03BC\u03B9\u03BA\u03CC\u03C2"] },
    { e: "\u{1F468}\u200D\u{1F692}", k: ["\u03C0\u03C5\u03C1\u03BF\u03C3\u03B2\u03AD\u03C3\u03C4\u03B7\u03C2"] },
    { e: "1\uFE0F\u20E3", k: ["\u03AD\u03BD\u03B1", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 1"] },
    { e: "2\uFE0F\u20E3", k: ["\u03B4\u03CD\u03BF", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 2"] },
    { e: "3\uFE0F\u20E3", k: ["\u03C4\u03C1\u03AF\u03B1", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 3"] },
    { e: "4\uFE0F\u20E3", k: ["\u03C4\u03AD\u03C3\u03C3\u03B5\u03C1\u03B1", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 4"] },
    { e: "5\uFE0F\u20E3", k: ["\u03C0\u03AD\u03BD\u03C4\u03B5", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 5"] },
    { e: "6\uFE0F\u20E3", k: ["\u03AD\u03BE\u03B9", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 6"] },
    { e: "7\uFE0F\u20E3", k: ["\u03B5\u03C0\u03C4\u03AC", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 7"] },
    { e: "8\uFE0F\u20E3", k: ["\u03BF\u03BA\u03C4\u03CE", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 8"] },
    { e: "9\uFE0F\u20E3", k: ["\u03B5\u03BD\u03BD\u03AD\u03B1", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 9"] },
    { e: "\u{1F51F}", k: ["\u03B4\u03AD\u03BA\u03B1", "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 10"] },
    { e: "\u2B50", k: ["\u03B1\u03C3\u03C4\u03AD\u03C1\u03B9"] },
    { e: "\u2764\uFE0F", k: ["\u03BA\u03B1\u03C1\u03B4\u03B9\u03AC"] },
    { e: "\u{1F53A}", k: ["\u03C4\u03C1\u03AF\u03B3\u03C9\u03BD\u03BF", "\u03C3\u03C7\u03AE\u03BC\u03B1"] },
    { e: "\u2B1C", k: ["\u03C4\u03B5\u03C4\u03C1\u03AC\u03B3\u03C9\u03BD\u03BF", "\u03C3\u03C7\u03AE\u03BC\u03B1"] },
    { e: "\u2B55", k: ["\u03BA\u03CD\u03BA\u03BB\u03BF\u03C2", "\u03C3\u03C7\u03AE\u03BC\u03B1"] },
    { e: "\u2600\uFE0F", k: ["\u03AE\u03BB\u03B9\u03BF\u03C2"] },
    { e: "\u{1F327}\uFE0F", k: ["\u03B2\u03C1\u03BF\u03C7\u03AE"] },
    { e: "\u2744\uFE0F", k: ["\u03C7\u03B9\u03CC\u03BD\u03B9"] },
    { e: "\u{1F308}", k: ["\u03BF\u03C5\u03C1\u03AC\u03BD\u03B9\u03BF \u03C4\u03CC\u03BE\u03BF"] },
    { e: "\u{1F333}", k: ["\u03B4\u03AD\u03BD\u03C4\u03C1\u03BF"] },
    { e: "\u{1F338}", k: ["\u03BB\u03BF\u03C5\u03BB\u03BF\u03CD\u03B4\u03B9"] },
    { e: "\u{1F30A}", k: ["\u03B8\u03AC\u03BB\u03B1\u03C3\u03C3\u03B1", "\u03BA\u03CD\u03BC\u03B1"] },
    { e: "\u{1F68C}", k: ["\u03BB\u03B5\u03C9\u03C6\u03BF\u03C1\u03B5\u03AF\u03BF"] },
    { e: "\u{1F682}", k: ["\u03C4\u03C1\u03AD\u03BD\u03BF"] },
    { e: "\u2708\uFE0F", k: ["\u03B1\u03B5\u03C1\u03BF\u03C0\u03BB\u03AC\u03BD\u03BF"] },
    { e: "\u{1F6A2}", k: ["\u03C0\u03BB\u03BF\u03AF\u03BF"] }
  ];
  function ColorSwatch({ hex, size }) {
    const isWhite = hex.toLowerCase() === "#ffffff";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          width: size,
          height: size,
          borderRadius: "50%",
          background: hex,
          border: isWhite ? "2px solid #ddd" : "2px solid rgba(0,0,0,0.08)",
          boxShadow: "inset 0 -3px 6px rgba(0,0,0,0.12)"
        }
      }
    );
  }
  function normalizeGreek(str) {
    return (str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function searchEmojis(query, limit = 24) {
    const q = normalizeGreek(query.trim());
    if (!q) return EMOJI_LIBRARY.slice(0, 18);
    return EMOJI_LIBRARY.filter((entry) => entry.k.some((kw) => normalizeGreek(kw).includes(q))).slice(0, limit);
  }
  function EmojiPicker({ selected, onSelect, accentColor }) {
    const [query, setQuery] = useState("");
    const results = searchEmojis(query);
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 8 } }, /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          width: 46,
          height: 46,
          borderRadius: 12,
          border: `2px solid ${accentColor || "#ddd"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 26,
          flexShrink: 0,
          background: "#fafafa"
        }
      },
      selected || "\u{1F5BC}\uFE0F"
    ), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: query,
        onChange: (e) => setQuery(e.target.value),
        style: { flex: 1, boxSizing: "border-box", fontSize: 15, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", fontFamily: "inherit" },
        placeholder: "\u03A0\u03B5\u03C1\u03AF\u03B3\u03C1\u03B1\u03C8\u03B5 \u03C4\u03B7\u03BD \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1 (\u03C0.\u03C7. \u03BC\u03AE\u03BB\u03BF)"
      }
    )), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 6,
          maxHeight: 148,
          overflowY: "auto",
          padding: 6,
          background: "#fafafa",
          borderRadius: 12
        }
      },
      results.length === 0 && /* @__PURE__ */ React.createElement("span", { style: { gridColumn: "1 / -1", fontSize: 12, color: "#999", textAlign: "center", padding: "10px 0" } }, "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1 \u2014 \u03B4\u03BF\u03BA\u03AF\u03BC\u03B1\u03C3\u03B5 \u03AC\u03BB\u03BB\u03B7 \u03BB\u03AD\u03BE\u03B7"),
      results.map((entry, idx) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: `${entry.e}-${idx}`,
          onClick: () => onSelect(entry.e),
          style: {
            fontSize: 22,
            border: entry.e === selected ? `2px solid ${accentColor || "#333"}` : "2px solid transparent",
            background: entry.e === selected ? "#fff" : "transparent",
            borderRadius: 10,
            padding: "4px 0",
            cursor: "pointer"
          }
        },
        entry.e
      ))
    ));
  }
  function newId(prefix) {
    return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
  }
  function MathainoLexeis() {
    const [screen, setScreen] = useState({ view: "home", categoryId: null });
    const [editMode, setEditMode] = useState(false);
    const [customLabels, setCustomLabels] = useState({});
    const [customEmojis, setCustomEmojis] = useState({});
    const [customCategories, setCustomCategories] = useState([]);
    const [customItemsByCat, setCustomItemsByCat] = useState({});
    const [editingItem, setEditingItem] = useState(null);
    const [draftText, setDraftText] = useState("");
    const [draftEmoji, setDraftEmoji] = useState("");
    const [addCatOpen, setAddCatOpen] = useState(false);
    const [catNameDraft, setCatNameDraft] = useState("");
    const [catEmojiDraft, setCatEmojiDraft] = useState("\u2B50");
    const [catPaletteIdx, setCatPaletteIdx] = useState(0);
    const [addItemFor, setAddItemFor] = useState(null);
    const [itemEmojiDraft, setItemEmojiDraft] = useState("");
    const [itemLabelDraft, setItemLabelDraft] = useState("");
    const [speakingId, setSpeakingId] = useState(null);
    const [colorQuery, setColorQuery] = useState("");
    const [lastSpokenColorId, setLastSpokenColorId] = useState(null);
    const [voicesList, setVoicesList] = useState([]);
    const [selectedVoiceName, setSelectedVoiceName] = useState("");
    const [voiceSettingsOpen, setVoiceSettingsOpen] = useState(false);
    const [listening, setListening] = useState(false);
    const [colorTextMode, setColorTextMode] = useState(false);
    const recognitionRef = useRef(null);
    const speechRecognitionSupported = typeof window !== "undefined" && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
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
    useEffect(() => {
      (async () => {
        try {
          const res = await window.storage.get(LABELS_KEY, false);
          if (res && res.value) setCustomLabels(JSON.parse(res.value));
        } catch (e) {
        }
        try {
          const res = await window.storage.get(CATS_KEY, false);
          if (res && res.value) setCustomCategories(JSON.parse(res.value));
        } catch (e) {
        }
        try {
          const res = await window.storage.get(ITEMS_KEY, false);
          if (res && res.value) setCustomItemsByCat(JSON.parse(res.value));
        } catch (e) {
        }
        try {
          const res = await window.storage.get(EMOJIS_KEY, false);
          if (res && res.value) setCustomEmojis(JSON.parse(res.value));
        } catch (e) {
        }
        try {
          const res = await window.storage.get(VOICE_KEY, false);
          if (res && res.value) setSelectedVoiceName(res.value);
        } catch (e) {
        }
      })();
    }, []);
    useEffect(() => {
      function loadVoices() {
        const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
        voicesRef.current = voices;
        setVoicesList(voices);
      }
      loadVoices();
      if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);
    async function chooseVoice(name) {
      setSelectedVoiceName(name);
      try {
        await window.storage.set(VOICE_KEY, name, false);
      } catch (e) {
      }
    }
    const speak = useCallback(
      (text, itemId) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "el-GR";
        const chosen = voicesRef.current.find((v) => v.name === selectedVoiceName);
        const greekVoice = voicesRef.current.find((v) => v.lang && v.lang.toLowerCase().startsWith("el"));
        if (chosen) utter.voice = chosen;
        else if (greekVoice) utter.voice = greekVoice;
        utter.rate = 0.9;
        utter.pitch = 1.05;
        setSpeakingId(itemId);
        utter.onend = () => setSpeakingId(null);
        utter.onerror = () => setSpeakingId(null);
        window.speechSynthesis.speak(utter);
      },
      [selectedVoiceName]
    );
    function testVoice(voice) {
      if (!window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance("\u0393\u03B5\u03B9\u03B1 \u03C3\u03BF\u03C5, \u03B1\u03C5\u03C4\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03C6\u03C9\u03BD\u03AE \u03BC\u03BF\u03C5.");
      utter.voice = voice;
      utter.lang = voice.lang || "el-GR";
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    }
    function startListening() {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) return;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
        }
      }
      const rec = new SR();
      rec.lang = "el-GR";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onresult = (e) => {
        const text = e.results[0][0].transcript;
        setColorQuery(text);
      };
      rec.onend = () => setListening(false);
      rec.onerror = () => setListening(false);
      recognitionRef.current = rec;
      setListening(true);
      try {
        rec.start();
      } catch (e) {
        setListening(false);
      }
    }
    const getLabel = (catId, item) => {
      var _a;
      return (_a = customLabels[`${catId}:${item.id}`]) != null ? _a : item.label;
    };
    const getEmoji = (catId, item) => {
      var _a;
      return (_a = customEmojis[`${catId}:${item.id}`]) != null ? _a : item.emoji;
    };
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
      } catch (e) {
      }
    }
    async function persistEmojis(next) {
      setCustomEmojis(next);
      flashSaved();
      try {
        await window.storage.set(EMOJIS_KEY, JSON.stringify(next), false);
      } catch (e) {
      }
    }
    async function persistCategories(next) {
      setCustomCategories(next);
      flashSaved();
      try {
        await window.storage.set(CATS_KEY, JSON.stringify(next), false);
      } catch (e) {
      }
    }
    async function persistItems(next) {
      setCustomItemsByCat(next);
      flashSaved();
      try {
        await window.storage.set(ITEMS_KEY, JSON.stringify(next), false);
      } catch (e) {
      }
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
      setCatEmojiDraft("\u2B50");
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
        emoji: catEmojiDraft.trim() || "\u2B50",
        color: pal.color,
        dark: pal.dark,
        soft: pal.soft,
        items: [],
        custom: true
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
      const item = { id: newId("item"), emoji: itemEmojiDraft.trim() || "\u{1F5BC}\uFE0F", label, custom: true };
      const next = { ...customItemsByCat };
      next[addItemFor] = [...next[addItemFor] || [], item];
      persistItems(next);
      setAddItemFor(null);
    }
    function deleteItem(catId, itemId) {
      const next = { ...customItemsByCat };
      next[catId] = (next[catId] || []).filter((it) => it.id !== itemId);
      persistItems(next);
    }
    const xromataCategory = CATEGORIES.find((c) => c.id === "xromata");
    const normalizedColorQuery = normalizeGreek(colorQuery.trim());
    const colorMatch = normalizedColorQuery ? xromataCategory.items.find((c) => normalizeGreek(c.label) === normalizedColorQuery) : null;
    const colorSuggestions = normalizedColorQuery ? xromataCategory.items.filter((c) => normalizeGreek(c.label).startsWith(normalizedColorQuery) && c !== colorMatch).slice(0, 5) : [];
    useEffect(() => {
      if (colorMatch && colorMatch.id !== lastSpokenColorId) {
        speak(colorMatch.label, `colorgame-${colorMatch.id}`);
        setLastSpokenColorId(colorMatch.id);
      }
      if (!colorMatch) setLastSpokenColorId(null);
    }, [colorMatch, lastSpokenColorId, speak]);
    const allCategories = [...CATEGORIES, ...customCategories];
    const activeCategory = allCategories.find((c) => c.id === screen.categoryId);
    const activeItems = activeCategory ? [...activeCategory.items, ...customItemsByCat[activeCategory.id] || []] : [];
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontFamily: "'Baloo 2', 'Comic Sans MS', 'Segoe UI Rounded', system-ui, sans-serif",
          background: activeCategory ? activeCategory.soft : "#FFF9EF",
          minHeight: "600px",
          width: "100%",
          transition: "background 0.35s ease",
          position: "relative",
          overflow: "hidden",
          borderRadius: 20
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          "aria-hidden": true,
          style: {
            position: "absolute",
            top: -40,
            right: -30,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: activeCategory ? activeCategory.color : "#FFD93D",
            opacity: 0.18
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          "aria-hidden": true,
          style: {
            position: "absolute",
            bottom: -50,
            left: -40,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: activeCategory ? activeCategory.color : "#B084F5",
            opacity: 0.14
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 18px 6px 18px"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, minWidth: 40 } }, screen.view !== "home" && /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setScreen(
              screen.view === "colorgame" ? { view: "items", categoryId: "xromata" } : { view: "home", categoryId: null }
            ),
            style: {
              border: "none",
              background: "#ffffffcc",
              borderRadius: 999,
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 0 rgba(0,0,0,0.08)",
              cursor: "pointer"
            },
            "aria-label": "\u03A0\u03AF\u03C3\u03C9"
          },
          /* @__PURE__ */ React.createElement(ArrowLeft, { size: 22, color: (activeCategory == null ? void 0 : activeCategory.dark) || "#555" })
        )),
        /* @__PURE__ */ React.createElement(
          "h1",
          {
            style: {
              fontSize: 22,
              fontWeight: 800,
              color: activeCategory ? activeCategory.dark : "#5B4636",
              margin: 0,
              textAlign: "center",
              letterSpacing: 0.2
            }
          },
          screen.view === "home" ? "\u039C\u03B1\u03B8\u03B1\u03AF\u03BD\u03C9 \u039B\u03AD\u03BE\u03B5\u03B9\u03C2" : screen.view === "colorgame" ? "\u0393\u03C1\u03AC\u03C8\u03B5 \u03AD\u03BD\u03B1 \u03C7\u03C1\u03CE\u03BC\u03B1" : activeCategory == null ? void 0 : activeCategory.name
        ),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setVoiceSettingsOpen(true),
            "aria-label": "\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03C6\u03C9\u03BD\u03AE\u03C2",
            style: {
              border: "none",
              background: "#ffffffcc",
              borderRadius: 999,
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 0 rgba(0,0,0,0.08)",
              cursor: "pointer",
              fontSize: 17
            }
          },
          "\u{1F5E3}\uFE0F"
        ), /* @__PURE__ */ React.createElement(
          "div",
          {
            onPointerDown: startHold,
            onPointerUp: clearHold,
            onPointerLeave: clearHold,
            onPointerCancel: clearHold,
            role: "button",
            "aria-label": "\u0393\u03BF\u03BD\u03B9\u03BA\u03CC\u03C2 \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2",
            style: {
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "default",
              touchAction: "none",
              userSelect: "none",
              WebkitUserSelect: "none"
            }
          },
          holdProgress > 0 && /* @__PURE__ */ React.createElement(
            "div",
            {
              style: {
                width: 30,
                height: 30,
                borderRadius: 999,
                background: `conic-gradient(${(activeCategory == null ? void 0 : activeCategory.dark) || "#5B4636"} ${holdProgress * 360}deg, #00000014 0deg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }
            },
            /* @__PURE__ */ React.createElement(
              "div",
              {
                style: {
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  background: activeCategory ? activeCategory.soft : "#FFF9EF"
                }
              }
            )
          )
        ))
      ),
      editMode && /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            margin: "0 18px 4px 18px",
            padding: "8px 12px",
            background: "#3d3d3d",
            color: "#fff",
            borderRadius: 12,
            fontSize: 12.5,
            fontWeight: 600,
            textAlign: "center"
          }
        },
        screen.view === "home" ? "\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1\u03C2 \u03B5\u03BD\u03B5\u03C1\u03B3\u03AE \u2014 \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u270F\uFE0F \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03BA\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1 \u03AE \u03C0\u03C1\u03BF\u03C3\u03B8\u03AD\u03C3\u03C4\u03B5 \u03BD\u03AD\u03B1." : "\u039B\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1\u03C2 \u03B5\u03BD\u03B5\u03C1\u03B3\u03AE \u2014 \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u270F\uFE0F \u03C3\u03B5 \u03BC\u03B9\u03B1 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1 \u03AE \u03C0\u03C1\u03BF\u03C3\u03B8\u03AD\u03C3\u03C4\u03B5 \u03BD\u03AD\u03B1."
      ),
      /* @__PURE__ */ React.createElement("div", { style: { position: "relative", padding: "12px 16px 26px 16px" } }, screen.view === "home" && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, allCategories.map((cat, i) => /* @__PURE__ */ React.createElement("div", { key: cat.id, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => setScreen({ view: "items", categoryId: cat.id }),
          style: {
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
            width: "100%"
          }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 54, lineHeight: 1 } }, cat.emoji),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16.5, fontWeight: 800, color: cat.dark } }, cat.name)
      ), editMode && cat.custom && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => deleteCategory(cat.id),
          "aria-label": "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03BA\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1\u03C2",
          style: {
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
            cursor: "pointer"
          }
        },
        /* @__PURE__ */ React.createElement(Trash2, { size: 12, color: "#fff" })
      ))), editMode && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: openAddCategory,
          style: {
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
            width: "100%"
          }
        },
        /* @__PURE__ */ React.createElement(Plus, { size: 30, color: "#888" }),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 800, color: "#888" } }, "\u039D\u03AD\u03B1 \u03BA\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1")
      )), screen.view === "items" && activeCategory && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 } }, activeCategory.id === "xromata" && !editMode && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => setScreen({ view: "colorgame", categoryId: "xromata" }),
          style: {
            gridColumn: "1 / -1",
            border: `2.5px dashed ${activeCategory.color}`,
            cursor: "pointer",
            background: "#fff",
            borderRadius: 18,
            padding: "14px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10
          }
        },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 26 } }, "\u270D\uFE0F"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14.5, fontWeight: 800, color: activeCategory.dark } }, "\u0393\u03C1\u03AC\u03C8\u03B5 \u03AD\u03BD\u03B1 \u03C7\u03C1\u03CE\u03BC\u03B1")
      ), activeItems.map((item) => {
        const label = getLabel(activeCategory.id, item);
        const overrideEmoji = customEmojis[`${activeCategory.id}:${item.id}`];
        const emoji = overrideEmoji != null ? overrideEmoji : item.emoji;
        const showSwatch = !overrideEmoji && item.hex;
        const isSpeaking = speakingId === item.id;
        return /* @__PURE__ */ React.createElement("div", { key: item.id, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => editMode ? openEditor(activeCategory.id, item) : speak(label, item.id),
            style: {
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
              transition: "all 0.15s ease"
            }
          },
          showSwatch ? /* @__PURE__ */ React.createElement(ColorSwatch, { hex: item.hex, size: 42 }) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: 42 } }, emoji),
          /* @__PURE__ */ React.createElement(
            "span",
            {
              style: {
                fontSize: 12.5,
                fontWeight: 700,
                color: activeCategory.dark,
                textAlign: "center",
                lineHeight: 1.15
              }
            },
            label
          ),
          !editMode && /* @__PURE__ */ React.createElement(Volume2, { size: 13, color: activeCategory.color, style: { marginTop: 1 } })
        ), editMode && /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
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
              pointerEvents: "none"
            }
          },
          /* @__PURE__ */ React.createElement(Pencil, { size: 12, color: "#fff" })
        ), editMode && item.custom && /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => deleteItem(activeCategory.id, item.id),
            "aria-label": "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2",
            style: {
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
              cursor: "pointer"
            }
          },
          /* @__PURE__ */ React.createElement(Trash2, { size: 12, color: "#fff" })
        ));
      }), editMode && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => openAddItem(activeCategory.id),
          style: {
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
            minHeight: 84
          }
        },
        /* @__PURE__ */ React.createElement(Plus, { size: 22, color: "#888" }),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 800, color: "#888" } }, "\u039D\u03AD\u03B1 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1")
      )), screen.view === "colorgame" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingTop: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: "100%" } }, /* @__PURE__ */ React.createElement(
        "input",
        {
          autoFocus: !speechRecognitionSupported,
          readOnly: speechRecognitionSupported && !colorTextMode,
          value: colorQuery,
          onChange: (e) => setColorQuery(e.target.value),
          onClick: () => {
            if (speechRecognitionSupported && !colorTextMode) startListening();
          },
          placeholder: speechRecognitionSupported && !colorTextMode ? listening ? "\u03A3\u03B5 \u03B1\u03BA\u03BF\u03CD\u03C9\u2026 \u03C0\u03B5\u03C2 \u03AD\u03BD\u03B1 \u03C7\u03C1\u03CE\u03BC\u03B1" : "\u03A0\u03AC\u03C4\u03B7\u03C3\u03B5 \u03B5\u03B4\u03CE \u03BA\u03B1\u03B9 \u03C0\u03B5\u03C2 \u03AD\u03BD\u03B1 \u03C7\u03C1\u03CE\u03BC\u03B1" : "\u0393\u03C1\u03AC\u03C8\u03B5 \u03AD\u03BD\u03B1 \u03C7\u03C1\u03CE\u03BC\u03B1\u2026 \u03C0.\u03C7. \u03BA\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF",
          style: {
            width: "100%",
            boxSizing: "border-box",
            fontSize: 18,
            textAlign: "center",
            padding: speechRecognitionSupported && !colorTextMode ? "14px 46px" : "14px 16px",
            borderRadius: 16,
            border: `2.5px solid ${listening ? "#4F9DDE" : colorMatch ? colorMatch.hex : "#ddd"}`,
            fontFamily: "inherit",
            fontWeight: 700,
            color: "#444",
            cursor: speechRecognitionSupported && !colorTextMode ? "pointer" : "text",
            boxShadow: listening ? "0 0 0 5px #4F9DDE33" : "none",
            transition: "box-shadow 0.2s ease, border 0.2s ease"
          }
        }
      ), speechRecognitionSupported && !colorTextMode && /* @__PURE__ */ React.createElement(
        "span",
        {
          style: {
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 22,
            animation: listening ? "pulseMic 1s infinite" : "none"
          }
        },
        listening ? "\u{1F534}" : "\u{1F3A4}"
      )), speechRecognitionSupported && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => setColorTextMode((v) => !v),
          style: { border: "none", background: "transparent", color: "#999", fontSize: 12.5, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }
        },
        colorTextMode ? "\u{1F3A4} \u03A0\u03B5\u03C2 \u03C4\u03BF \u03B1\u03BD\u03C4' \u03B1\u03C5\u03C4\u03BF\u03CD" : "\u2328\uFE0F \u03A0\u03BB\u03B7\u03BA\u03C4\u03C1\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B5 \u03B1\u03BD\u03C4' \u03B1\u03C5\u03C4\u03BF\u03CD"
      ), /* @__PURE__ */ React.createElement("style", null, `@keyframes pulseMic { 0%,100% { opacity:1; transform: translateY(-50%) scale(1); } 50% { opacity:0.5; transform: translateY(-50%) scale(1.15); } }`), colorSuggestions.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" } }, colorSuggestions.map((c) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: c.id,
          onClick: () => setColorQuery(c.label),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            border: "2px solid #eee",
            background: "#fff",
            borderRadius: 999,
            padding: "5px 10px 5px 6px",
            cursor: "pointer"
          }
        },
        /* @__PURE__ */ React.createElement(ColorSwatch, { hex: c.hex, size: 16 }),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5, fontWeight: 700, color: "#555" } }, c.label)
      ))), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => colorMatch && speak(colorMatch.label, `colorgame-${colorMatch.id}`),
          disabled: !colorMatch,
          style: {
            width: "72%",
            aspectRatio: "1 / 1",
            maxWidth: 260,
            borderRadius: 32,
            background: colorMatch ? colorMatch.hex : "#f0f0f0",
            border: colorMatch ? colorMatch.hex.toLowerCase() === "#ffffff" ? "4px solid #ddd" : "4px solid rgba(0,0,0,0.08)" : "4px dashed #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: colorMatch ? "pointer" : "default",
            boxShadow: colorMatch ? "0 10px 24px rgba(0,0,0,0.12)" : "none",
            transition: "all 0.2s ease"
          }
        },
        !colorMatch && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 44, opacity: 0.4 } }, "\u{1F3A8}"),
        colorMatch && /* @__PURE__ */ React.createElement(Volume2, { size: 30, color: colorMatch.hex.toLowerCase() === "#ffffff" || colorMatch.hex.toLowerCase() === "#fdd835" ? "#00000055" : "#ffffffaa" })
      ), /* @__PURE__ */ React.createElement("div", { style: { minHeight: 34, display: "flex", alignItems: "center" } }, colorMatch && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 22, fontWeight: 800, color: (activeCategory == null ? void 0 : activeCategory.dark) || "#333" } }, colorMatch.label)), colorQuery && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => setColorQuery(""),
          style: { border: "none", background: "transparent", color: "#999", fontSize: 13, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }
        },
        "\u039A\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2"
      ))),
      editingItem && /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            zIndex: 10,
            borderRadius: 20
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: 20, width: "100%", maxWidth: 320, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 800, fontSize: 15, color: "#333" } }, "\u0386\u03BB\u03BB\u03B1\u03BE\u03B5 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1 \u03AE \u03BB\u03AD\u03BE\u03B7"), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setEditingItem(null),
            style: { border: "none", background: "#f1f1f1", borderRadius: 999, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }
          },
          /* @__PURE__ */ React.createElement(XIcon, { size: 16 })
        )), /* @__PURE__ */ React.createElement(EmojiPicker, { selected: draftEmoji, onSelect: setDraftEmoji, accentColor: activeCategory == null ? void 0 : activeCategory.color }), /* @__PURE__ */ React.createElement(
          "input",
          {
            value: draftText,
            onChange: (e) => setDraftText(e.target.value),
            style: { width: "100%", boxSizing: "border-box", fontSize: 16, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", marginBottom: 14, fontFamily: "inherit" },
            placeholder: "\u03A4\u03B9 \u03B8\u03B1 \u03BB\u03AD\u03B5\u03B9;"
          }
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: saveEditor,
            style: { width: "100%", border: "none", background: (activeCategory == null ? void 0 : activeCategory.color) || "#3FBFAE", color: "#fff", fontWeight: 800, fontSize: 15, padding: "12px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }
          },
          /* @__PURE__ */ React.createElement(Check, { size: 18 }),
          " \u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7"
        ))
      ),
      addCatOpen && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 10, borderRadius: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: 20, width: "100%", maxWidth: 320, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 800, fontSize: 15, color: "#333" } }, "\u039D\u03AD\u03B1 \u03BA\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1"), /* @__PURE__ */ React.createElement("button", { onClick: () => setAddCatOpen(false), style: { border: "none", background: "#f1f1f1", borderRadius: 999, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" } }, /* @__PURE__ */ React.createElement(XIcon, { size: 16 }))), /* @__PURE__ */ React.createElement(
        "input",
        {
          autoFocus: true,
          value: catNameDraft,
          onChange: (e) => setCatNameDraft(e.target.value),
          style: { width: "100%", boxSizing: "border-box", fontSize: 16, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", marginBottom: 10, fontFamily: "inherit" },
          placeholder: "\u038C\u03BD\u03BF\u03BC\u03B1 \u03BA\u03B1\u03C4\u03B7\u03B3\u03BF\u03C1\u03AF\u03B1\u03C2, \u03C0.\u03C7. \u03A3\u03C7\u03AE\u03BC\u03B1\u03C4\u03B1"
        }
      ), /* @__PURE__ */ React.createElement(EmojiPicker, { selected: catEmojiDraft, onSelect: setCatEmojiDraft, accentColor: PALETTE[catPaletteIdx].color }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 } }, PALETTE.map((p, idx) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: idx,
          onClick: () => setCatPaletteIdx(idx),
          "aria-label": "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u03C7\u03C1\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2",
          style: {
            width: 30,
            height: 30,
            borderRadius: 999,
            background: p.color,
            border: idx === catPaletteIdx ? "3px solid #333" : "3px solid transparent",
            cursor: "pointer"
          }
        }
      ))), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: saveNewCategory,
          style: { width: "100%", border: "none", background: PALETTE[catPaletteIdx].color, color: "#fff", fontWeight: 800, fontSize: 15, padding: "12px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }
        },
        /* @__PURE__ */ React.createElement(Check, { size: 18 }),
        " \u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1"
      ))),
      addItemFor && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 10, borderRadius: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: 20, width: "100%", maxWidth: 320, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 800, fontSize: 15, color: "#333" } }, "\u039D\u03AD\u03B1 \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1"), /* @__PURE__ */ React.createElement("button", { onClick: () => setAddItemFor(null), style: { border: "none", background: "#f1f1f1", borderRadius: 999, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" } }, /* @__PURE__ */ React.createElement(XIcon, { size: 16 }))), /* @__PURE__ */ React.createElement(EmojiPicker, { selected: itemEmojiDraft, onSelect: setItemEmojiDraft, accentColor: activeCategory == null ? void 0 : activeCategory.color }), /* @__PURE__ */ React.createElement(
        "input",
        {
          value: itemLabelDraft,
          onChange: (e) => setItemLabelDraft(e.target.value),
          style: { width: "100%", boxSizing: "border-box", fontSize: 16, padding: "10px 12px", borderRadius: 12, border: "2px solid #ddd", marginBottom: 14, fontFamily: "inherit" },
          placeholder: "\u03A4\u03B9 \u03B8\u03B1 \u03BB\u03AD\u03B5\u03B9;"
        }
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: saveNewItem,
          style: { width: "100%", border: "none", background: (activeCategory == null ? void 0 : activeCategory.color) || "#3FBFAE", color: "#fff", fontWeight: 800, fontSize: 15, padding: "12px", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }
        },
        /* @__PURE__ */ React.createElement(Check, { size: 18 }),
        " \u03A0\u03C1\u03BF\u03C3\u03B8\u03AE\u03BA\u03B7"
      ))),
      saveState !== "idle" && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", background: "#333", color: "#fff", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 999 } }, saveState === "saving" ? "\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7..." : "\u0391\u03C0\u03BF\u03B8\u03B7\u03BA\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5 \u2713"),
      voiceSettingsOpen && /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            zIndex: 10,
            borderRadius: 20
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: 20, width: "100%", maxWidth: 340, maxHeight: "80%", display: "flex", flexDirection: "column", boxShadow: "0 12px 30px rgba(0,0,0,0.3)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 800, fontSize: 15, color: "#333" } }, "\u{1F5E3}\uFE0F \u03A6\u03C9\u03BD\u03AE \u03B5\u03BA\u03C6\u03CE\u03BD\u03B7\u03C3\u03B7\u03C2"), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setVoiceSettingsOpen(false),
            style: { border: "none", background: "#f1f1f1", borderRadius: 999, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }
          },
          /* @__PURE__ */ React.createElement(XIcon, { size: 16 })
        )), voicesList.length === 0 && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: "#888", lineHeight: 1.5 } }, "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B1\u03BD \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B5\u03C2 \u03C6\u03C9\u03BD\u03AD\u03C2 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE."), !voicesList.some((v) => v.lang && v.lang.toLowerCase().startsWith("el")) && voicesList.length > 0 && /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: "#a05a00", background: "#FFF3E0", padding: "8px 10px", borderRadius: 10, lineHeight: 1.5, marginBottom: 8 } }, "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AE \u03C6\u03C9\u03BD\u03AE \u03C3\u03C4\u03BF \u03BA\u03B9\u03BD\u03B7\u03C4\u03CC. \u0393\u03B9\u03B1 \u03C3\u03C9\u03C3\u03C4\u03AE \u03C0\u03C1\u03BF\u03C6\u03BF\u03C1\u03AC, \u03B5\u03B3\u03BA\u03B1\u03C4\u03AD\u03C3\u03C4\u03B7\u03C3\u03B5 \u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AE \u03C6\u03C9\u03BD\u03AE \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 \u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u2192 \u0393\u03BB\u03CE\u03C3\u03C3\u03B1 \u2192 Text-to-speech. \u039C\u03AD\u03C7\u03C1\u03B9 \u03C4\u03CC\u03C4\u03B5, \u03B4\u03B9\u03AC\u03BB\u03B5\u03BE\u03B5 \u03CC\u03C0\u03BF\u03B9\u03B1 \u03C6\u03C9\u03BD\u03AE \u03B1\u03BA\u03BF\u03CD\u03B3\u03B5\u03C4\u03B1\u03B9 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B1."), /* @__PURE__ */ React.createElement("div", { style: { overflowY: "auto", display: "flex", flexDirection: "column", gap: 6 } }, [...voicesList].sort((a, b) => {
          const aEl = a.lang && a.lang.toLowerCase().startsWith("el") ? 0 : 1;
          const bEl = b.lang && b.lang.toLowerCase().startsWith("el") ? 0 : 1;
          if (aEl !== bEl) return aEl - bEl;
          return a.name.localeCompare(b.name);
        }).map((v) => /* @__PURE__ */ React.createElement(
          "div",
          {
            key: v.name + v.lang,
            onClick: () => chooseVoice(v.name),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              padding: "10px 12px",
              borderRadius: 12,
              border: v.name === selectedVoiceName ? "2px solid #4F9DDE" : "2px solid #eee",
              background: v.name === selectedVoiceName ? "#E8F4FC" : "#fafafa",
              cursor: "pointer"
            }
          },
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: "#333", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, v.name), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "#999" } }, v.lang)),
          v.name === selectedVoiceName && /* @__PURE__ */ React.createElement(Check, { size: 16, color: "#4F9DDE" }),
          /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: (e) => {
                e.stopPropagation();
                testVoice(v);
              },
              style: {
                border: "none",
                background: "#fff",
                borderRadius: 999,
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.12)",
                cursor: "pointer",
                flexShrink: 0
              },
              "aria-label": "\u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03C6\u03C9\u03BD\u03AE\u03C2"
            },
            /* @__PURE__ */ React.createElement(Volume2, { size: 15, color: "#555" })
          )
        ))), selectedVoiceName && /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => chooseVoice(""),
            style: { marginTop: 10, border: "none", background: "transparent", color: "#999", fontSize: 12.5, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }
          },
          "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE"
        ))
      )
    );
  }
  const rootEl = document.getElementById("root");
  ReactDOM.createRoot(rootEl).render(/* @__PURE__ */ React.createElement(MathainoLexeis, null));
})();
