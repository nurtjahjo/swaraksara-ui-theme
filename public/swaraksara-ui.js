import { jsx as b, jsxs as F, Fragment as Mt } from "react/jsx-runtime";
import $t, { createContext as Dt, useState as de, useEffect as He, useMemo as Rt, useContext as zt, useId as Za } from "react";
const en = ".swaraksara.id", tn = () => {
  const e = window.location.hostname;
  return e === "localhost" || e === "127.0.0.1" || e.match(/^\d{1,3}\./) ? "" : e.endsWith("swaraksara.id") ? `; domain=${en}` : "";
}, Wt = (e, t, a = 365) => {
  let n = "";
  if (a) {
    const s = /* @__PURE__ */ new Date();
    s.setTime(s.getTime() + a * 24 * 60 * 60 * 1e3), n = `; expires=${s.toUTCString()}`;
  }
  const r = tn(), i = "; path=/", o = "; SameSite=Lax";
  document.cookie = `${e}=${t || ""}${n}${r}${i}${o}`;
}, Ut = (e) => {
  const t = e + "=", a = document.cookie.split(";");
  for (let n = 0; n < a.length; n++) {
    let r = a[n];
    for (; r.charAt(0) === " "; ) r = r.substring(1, r.length);
    if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
  }
  return null;
}, Yt = Dt(void 0), Yo = ({ children: e, defaultMode: t = "light" }) => {
  const [a, n] = de(() => {
    const s = Ut("sa_theme");
    return s === "light" || s === "dark" ? s : t;
  }), r = a;
  He(() => {
    const s = window.document.documentElement;
    s.classList.remove("light", "dark"), s.classList.add(r), Wt("sa_theme", a);
  }, [a, r]);
  const i = (s) => {
    n(s);
  }, o = Rt(() => ({
    mode: r,
    resolvedTheme: r,
    setMode: i
  }), [r]);
  return /* @__PURE__ */ b(Yt.Provider, { value: o, children: e });
}, an = () => {
  const e = zt(Yt);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, Ht = Dt(void 0), Ho = ({ children: e }) => {
  const [t, a] = de(() => {
    const o = Ut("sa_locale");
    return o === "id" || o === "en" ? o : navigator.language.startsWith("en") ? "en" : "id";
  });
  He(() => {
    Wt("sa_locale", t), document.documentElement.lang = t;
  }, [t]);
  const n = (o) => {
    a(o);
  }, r = (o) => o, i = Rt(() => ({ locale: t, setLocale: n, t: r }), [t]);
  return /* @__PURE__ */ b(Ht.Provider, { value: i, children: e });
}, Bo = () => {
  const e = zt(Ht);
  if (!e)
    throw new Error("useLocale must be used within a LocaleProvider");
  return e;
};
function Fe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function nn(e) {
  if (Array.isArray(e)) return e;
}
function rn(e) {
  if (Array.isArray(e)) return Fe(e);
}
function on(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function sn(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Bt(n.key), n);
  }
}
function ln(e, t, a) {
  return t && sn(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function fe(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = Be(e)) || t) {
      a && (e = a);
      var n = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return {
    s: function() {
      a = a.call(e);
    },
    n: function() {
      var l = a.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, i = l;
    },
    f: function() {
      try {
        o || a.return == null || a.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function v(e, t, a) {
  return (t = Bt(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function fn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function un(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n, r, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (a = a.call(e)).next, t === 0) {
        if (Object(a) !== a) return;
        l = !1;
      } else for (; !(l = (n = i.call(a)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, r = c;
    } finally {
      try {
        if (!l && a.return != null && (o = a.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw r;
      }
    }
    return s;
  }
}
function cn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nt(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nt(Object(a), !0).forEach(function(n) {
      v(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : nt(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function pe(e, t) {
  return nn(e) || un(e, t) || Be(e, t) || cn();
}
function C(e) {
  return rn(e) || fn(e) || Be(e) || dn();
}
function mn(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Bt(e) {
  var t = mn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function me(e) {
  "@babel/helpers - typeof";
  return me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, me(e);
}
function Be(e, t) {
  if (e) {
    if (typeof e == "string") return Fe(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Fe(e, t) : void 0;
  }
}
var rt = function() {
}, Ve = {}, Vt = {}, Gt = null, Xt = {
  mark: rt,
  measure: rt
};
try {
  typeof window < "u" && (Ve = window), typeof document < "u" && (Vt = document), typeof MutationObserver < "u" && (Gt = MutationObserver), typeof performance < "u" && (Xt = performance);
} catch {
}
var hn = Ve.navigator || {}, it = hn.userAgent, ot = it === void 0 ? "" : it, D = Ve, w = Vt, st = Gt, se = Xt;
D.document;
var $ = !!w.documentElement && !!w.head && typeof w.addEventListener == "function" && typeof w.createElement == "function", Kt = ~ot.indexOf("MSIE") || ~ot.indexOf("Trident/"), ke, vn = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, pn = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, Jt = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, gn = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, qt = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], P = "classic", ae = "duotone", Qt = "sharp", Zt = "sharp-duotone", ea = "chisel", ta = "etch", aa = "jelly", na = "jelly-duo", ra = "jelly-fill", ia = "notdog", oa = "notdog-duo", sa = "slab", la = "slab-press", fa = "thumbprint", ua = "utility", ca = "utility-duo", da = "utility-fill", ma = "whiteboard", bn = "Classic", yn = "Duotone", xn = "Sharp", wn = "Sharp Duotone", kn = "Chisel", Sn = "Etch", An = "Jelly", In = "Jelly Duo", Pn = "Jelly Fill", En = "Notdog", Nn = "Notdog Duo", Fn = "Slab", Cn = "Slab Press", On = "Thumbprint", Tn = "Utility", _n = "Utility Duo", jn = "Utility Fill", Ln = "Whiteboard", ha = [P, ae, Qt, Zt, ea, ta, aa, na, ra, ia, oa, sa, la, fa, ua, ca, da, ma];
ke = {}, v(v(v(v(v(v(v(v(v(v(ke, P, bn), ae, yn), Qt, xn), Zt, wn), ea, kn), ta, Sn), aa, An), na, In), ra, Pn), ia, En), v(v(v(v(v(v(v(v(ke, oa, Nn), sa, Fn), la, Cn), fa, On), ua, Tn), ca, _n), da, jn), ma, Ln);
var Mn = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
}, $n = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
}, Dn = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), Rn = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, va = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], lt = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, zn = ["kit"], Wn = "kit", Un = "kit-duotone", Yn = "Kit", Hn = "Kit Duotone";
v(v({}, Wn, Yn), Un, Hn);
var Bn = {
  kit: {
    "fa-kit": "fak"
  }
}, Vn = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Gn = {
  kit: {
    fak: "fa-kit"
  }
}, ft = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Se, le = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Xn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], Kn = "classic", Jn = "duotone", qn = "sharp", Qn = "sharp-duotone", Zn = "chisel", er = "etch", tr = "jelly", ar = "jelly-duo", nr = "jelly-fill", rr = "notdog", ir = "notdog-duo", or = "slab", sr = "slab-press", lr = "thumbprint", fr = "utility", ur = "utility-duo", cr = "utility-fill", dr = "whiteboard", mr = "Classic", hr = "Duotone", vr = "Sharp", pr = "Sharp Duotone", gr = "Chisel", br = "Etch", yr = "Jelly", xr = "Jelly Duo", wr = "Jelly Fill", kr = "Notdog", Sr = "Notdog Duo", Ar = "Slab", Ir = "Slab Press", Pr = "Thumbprint", Er = "Utility", Nr = "Utility Duo", Fr = "Utility Fill", Cr = "Whiteboard";
Se = {}, v(v(v(v(v(v(v(v(v(v(Se, Kn, mr), Jn, hr), qn, vr), Qn, pr), Zn, gr), er, br), tr, yr), ar, xr), nr, wr), rr, kr), v(v(v(v(v(v(v(v(Se, ir, Sr), or, Ar), sr, Ir), lr, Pr), fr, Er), ur, Nr), cr, Fr), dr, Cr);
var Or = "kit", Tr = "kit-duotone", _r = "Kit", jr = "Kit Duotone";
v(v({}, Or, _r), Tr, jr);
var Lr = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, Mr = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, Ce = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, $r = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], pa = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(Xn, $r), Dr = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ga = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Rr = ga.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), zr = ["aw", "fw", "pull-left", "pull-right"], Wr = [].concat(C(Object.keys(Mr)), Dr, zr, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", le.GROUP, le.SWAP_OPACITY, le.PRIMARY, le.SECONDARY]).concat(ga.map(function(e) {
  return "".concat(e, "x");
})).concat(Rr.map(function(e) {
  return "w-".concat(e);
})), Ur = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, L = "___FONT_AWESOME___", Oe = 16, ba = "fa", ya = "svg-inline--fa", U = "data-fa-i2svg", Te = "data-fa-pseudo-element", Yr = "data-fa-pseudo-element-pending", Ge = "data-prefix", Xe = "data-icon", ut = "fontawesome-i2svg", Hr = "async", Br = ["HTML", "HEAD", "STYLE", "SCRIPT"], xa = ["::before", "::after", ":before", ":after"], wa = (function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function ne(e) {
  return new Proxy(e, {
    get: function(a, n) {
      return n in a ? a[n] : a[P];
    }
  });
}
var ka = f({}, Jt);
ka[P] = f(f(f(f({}, {
  "fa-duotone": "duotone"
}), Jt[P]), lt.kit), lt["kit-duotone"]);
var Vr = ne(ka), _e = f({}, Rn);
_e[P] = f(f(f(f({}, {
  duotone: "fad"
}), _e[P]), ft.kit), ft["kit-duotone"]);
var ct = ne(_e), je = f({}, Ce);
je[P] = f(f({}, je[P]), Gn.kit);
var Ke = ne(je), Le = f({}, Lr);
Le[P] = f(f({}, Le[P]), Bn.kit);
ne(Le);
var Gr = vn, Sa = "fa-layers-text", Xr = pn, Kr = f({}, Mn);
ne(Kr);
var Jr = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ae = gn, qr = [].concat(C(zn), C(Wr)), q = D.FontAwesomeConfig || {};
function Qr(e) {
  var t = w.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Zr(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (w && typeof w.querySelector == "function") {
  var ei = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ei.forEach(function(e) {
    var t = pe(e, 2), a = t[0], n = t[1], r = Zr(Qr(a));
    r != null && (q[n] = r);
  });
}
var Aa = {
  styleDefault: "solid",
  familyDefault: P,
  cssPrefix: ba,
  replacementClass: ya,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
q.familyPrefix && (q.cssPrefix = q.familyPrefix);
var X = f(f({}, Aa), q);
X.autoReplaceSvg || (X.observeMutations = !1);
var m = {};
Object.keys(Aa).forEach(function(e) {
  Object.defineProperty(m, e, {
    enumerable: !0,
    set: function(a) {
      X[e] = a, Q.forEach(function(n) {
        return n(m);
      });
    },
    get: function() {
      return X[e];
    }
  });
});
Object.defineProperty(m, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    X.cssPrefix = t, Q.forEach(function(a) {
      return a(m);
    });
  },
  get: function() {
    return X.cssPrefix;
  }
});
D.FontAwesomeConfig = m;
var Q = [];
function ti(e) {
  return Q.push(e), function() {
    Q.splice(Q.indexOf(e), 1);
  };
}
var H = Oe, O = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ai(e) {
  if (!(!e || !$)) {
    var t = w.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var a = w.head.childNodes, n = null, r = a.length - 1; r > -1; r--) {
      var i = a[r], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    }
    return w.head.insertBefore(t, n), e;
  }
}
var ni = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function dt() {
  for (var e = 12, t = ""; e-- > 0; )
    t += ni[Math.random() * 62 | 0];
  return t;
}
function K(e) {
  for (var t = [], a = (e || []).length >>> 0; a--; )
    t[a] = e[a];
  return t;
}
function Je(e) {
  return e.classList ? K(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function Ia(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ri(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, '="').concat(Ia(e[a]), '" ');
  }, "").trim();
}
function ge(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, ": ").concat(e[a].trim(), ";");
  }, "");
}
function qe(e) {
  return e.size !== O.size || e.x !== O.x || e.y !== O.y || e.rotate !== O.rotate || e.flipX || e.flipY;
}
function ii(e) {
  var t = e.transform, a = e.containerWidth, n = e.iconWidth, r = {
    transform: "translate(".concat(a / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: u
  };
}
function oi(e) {
  var t = e.transform, a = e.width, n = a === void 0 ? Oe : a, r = e.height, i = r === void 0 ? Oe : r, o = "";
  return Kt ? o += "translate(".concat(t.x / H - n / 2, "em, ").concat(t.y / H - i / 2, "em) ") : o += "translate(calc(-50% + ".concat(t.x / H, "em), calc(-50% + ").concat(t.y / H, "em)) "), o += "scale(".concat(t.size / H * (t.flipX ? -1 : 1), ", ").concat(t.size / H * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var si = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function Pa() {
  var e = ba, t = ya, a = m.cssPrefix, n = m.replacementClass, r = si;
  if (a !== e || n !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(a, "-")).replace(o, "--".concat(a, "-")).replace(s, ".".concat(n));
  }
  return r;
}
var mt = !1;
function Ie() {
  m.autoAddCss && !mt && (ai(Pa()), mt = !0);
}
var li = {
  mixout: function() {
    return {
      dom: {
        css: Pa,
        insertCss: Ie
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ie();
      },
      beforeI2svg: function() {
        Ie();
      }
    };
  }
}, M = D || {};
M[L] || (M[L] = {});
M[L].styles || (M[L].styles = {});
M[L].hooks || (M[L].hooks = {});
M[L].shims || (M[L].shims = []);
var N = M[L], Ea = [], Na = function() {
  w.removeEventListener("DOMContentLoaded", Na), he = 1, Ea.map(function(t) {
    return t();
  });
}, he = !1;
$ && (he = (w.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(w.readyState), he || w.addEventListener("DOMContentLoaded", Na));
function fi(e) {
  $ && (he ? setTimeout(e, 0) : Ea.push(e));
}
function re(e) {
  var t = e.tag, a = e.attributes, n = a === void 0 ? {} : a, r = e.children, i = r === void 0 ? [] : r;
  return typeof e == "string" ? Ia(e) : "<".concat(t, " ").concat(ri(n), ">").concat(i.map(re).join(""), "</").concat(t, ">");
}
function ht(e, t, a) {
  if (e && e[t] && e[t][a])
    return {
      prefix: t,
      iconName: a,
      icon: e[t][a]
    };
}
var Pe = function(t, a, n, r) {
  var i = Object.keys(t), o = i.length, s = a, l, u, c;
  for (n === void 0 ? (l = 1, c = t[i[0]]) : (l = 0, c = n); l < o; l++)
    u = i[l], c = s(c, t[u], u, t);
  return c;
};
function Fa(e) {
  return C(e).length !== 1 ? null : e.codePointAt(0).toString(16);
}
function vt(e) {
  return Object.keys(e).reduce(function(t, a) {
    var n = e[a], r = !!n.icon;
    return r ? t[n.iconName] = n.icon : t[a] = n, t;
  }, {});
}
function Me(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.skipHooks, r = n === void 0 ? !1 : n, i = vt(t);
  typeof N.hooks.addPack == "function" && !r ? N.hooks.addPack(e, vt(t)) : N.styles[e] = f(f({}, N.styles[e] || {}), i), e === "fas" && Me("fa", t);
}
var ee = N.styles, ui = N.shims, Ca = Object.keys(Ke), ci = Ca.reduce(function(e, t) {
  return e[t] = Object.keys(Ke[t]), e;
}, {}), Qe = null, Oa = {}, Ta = {}, _a = {}, ja = {}, La = {};
function di(e) {
  return ~qr.indexOf(e);
}
function mi(e, t) {
  var a = t.split("-"), n = a[0], r = a.slice(1).join("-");
  return n === e && r !== "" && !di(r) ? r : null;
}
var Ma = function() {
  var t = function(i) {
    return Pe(ee, function(o, s, l) {
      return o[l] = Pe(s, i, {}), o;
    }, {});
  };
  Oa = t(function(r, i, o) {
    if (i[3] && (r[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        r[l.toString(16)] = o;
      });
    }
    return r;
  }), Ta = t(function(r, i, o) {
    if (r[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        r[l] = o;
      });
    }
    return r;
  }), La = t(function(r, i, o) {
    var s = i[2];
    return r[o] = o, s.forEach(function(l) {
      r[l] = o;
    }), r;
  });
  var a = "far" in ee || m.autoFetchSvg, n = Pe(ui, function(r, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !a && (s = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  _a = n.names, ja = n.unicodes, Qe = be(m.styleDefault, {
    family: m.familyDefault
  });
};
ti(function(e) {
  Qe = be(e.styleDefault, {
    family: m.familyDefault
  });
});
Ma();
function Ze(e, t) {
  return (Oa[e] || {})[t];
}
function hi(e, t) {
  return (Ta[e] || {})[t];
}
function W(e, t) {
  return (La[e] || {})[t];
}
function $a(e) {
  return _a[e] || {
    prefix: null,
    iconName: null
  };
}
function vi(e) {
  var t = ja[e], a = Ze("fas", e);
  return t || (a ? {
    prefix: "fas",
    iconName: a
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function R() {
  return Qe;
}
var Da = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function pi(e) {
  var t = P, a = Ca.reduce(function(n, r) {
    return n[r] = "".concat(m.cssPrefix, "-").concat(r), n;
  }, {});
  return ha.forEach(function(n) {
    (e.includes(a[n]) || e.some(function(r) {
      return ci[n].includes(r);
    })) && (t = n);
  }), t;
}
function be(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.family, n = a === void 0 ? P : a, r = Vr[n][e];
  if (n === ae && !e)
    return "fad";
  var i = ct[n][e] || ct[n][r], o = e in N.styles ? e : null, s = i || o || null;
  return s;
}
function gi(e) {
  var t = [], a = null;
  return e.forEach(function(n) {
    var r = mi(m.cssPrefix, n);
    r ? a = r : n && t.push(n);
  }), {
    iconName: a,
    rest: t
  };
}
function pt(e) {
  return e.sort().filter(function(t, a, n) {
    return n.indexOf(t) === a;
  });
}
var gt = pa.concat(va);
function ye(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.skipLookups, n = a === void 0 ? !1 : a, r = null, i = pt(e.filter(function(h) {
    return gt.includes(h);
  })), o = pt(e.filter(function(h) {
    return !gt.includes(h);
  })), s = i.filter(function(h) {
    return r = h, !qt.includes(h);
  }), l = pe(s, 1), u = l[0], c = u === void 0 ? null : u, d = pi(i), p = f(f({}, gi(o)), {}, {
    prefix: be(c, {
      family: d
    })
  });
  return f(f(f({}, p), wi({
    values: e,
    family: d,
    styles: ee,
    config: m,
    canonical: p,
    givenPrefix: r
  })), bi(n, r, p));
}
function bi(e, t, a) {
  var n = a.prefix, r = a.iconName;
  if (e || !n || !r)
    return {
      prefix: n,
      iconName: r
    };
  var i = t === "fa" ? $a(r) : {}, o = W(n, r);
  return r = i.iconName || o || r, n = i.prefix || n, n === "far" && !ee.far && ee.fas && !m.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: r
  };
}
var yi = ha.filter(function(e) {
  return e !== P || e !== ae;
}), xi = Object.keys(Ce).filter(function(e) {
  return e !== P;
}).map(function(e) {
  return Object.keys(Ce[e]);
}).flat();
function wi(e) {
  var t = e.values, a = e.family, n = e.canonical, r = e.givenPrefix, i = r === void 0 ? "" : r, o = e.styles, s = o === void 0 ? {} : o, l = e.config, u = l === void 0 ? {} : l, c = a === ae, d = t.includes("fa-duotone") || t.includes("fad"), p = u.familyDefault === "duotone", h = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!c && (d || p || h) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && yi.includes(a)) {
    var x = Object.keys(s).find(function(k) {
      return xi.includes(k);
    });
    if (x || u.autoFetchSvg) {
      var y = Dn.get(a).defaultShortPrefixId;
      n.prefix = y, n.iconName = W(n.prefix, n.iconName) || n.iconName;
    }
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = R() || "fas"), n;
}
var ki = /* @__PURE__ */ (function() {
  function e() {
    on(this, e), this.definitions = {};
  }
  return ln(e, [{
    key: "add",
    value: function() {
      for (var a = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      var o = r.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        a.definitions[s] = f(f({}, a.definitions[s] || {}), o[s]), Me(s, o[s]);
        var l = Ke[P][s];
        l && Me(l, o[s]), Ma();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(a, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(i) {
        var o = r[i], s = o.prefix, l = o.iconName, u = o.icon, c = u[2];
        a[s] || (a[s] = {}), c.length > 0 && c.forEach(function(d) {
          typeof d == "string" && (a[s][d] = u);
        }), a[s][l] = u;
      }), a;
    }
  }]);
})(), bt = [], V = {}, G = {}, Si = Object.keys(G);
function Ai(e, t) {
  var a = t.mixoutsTo;
  return bt = e, V = {}, Object.keys(G).forEach(function(n) {
    Si.indexOf(n) === -1 && delete G[n];
  }), bt.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(o) {
      typeof r[o] == "function" && (a[o] = r[o]), me(r[o]) === "object" && Object.keys(r[o]).forEach(function(s) {
        a[o] || (a[o] = {}), a[o][s] = r[o][s];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(o) {
        V[o] || (V[o] = []), V[o].push(i[o]);
      });
    }
    n.provides && n.provides(G);
  }), a;
}
function $e(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    n[r - 2] = arguments[r];
  var i = V[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(n));
  }), t;
}
function Y(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  var r = V[e] || [];
  r.forEach(function(i) {
    i.apply(null, a);
  });
}
function z() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return G[e] ? G[e].apply(null, t) : void 0;
}
function De(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, a = e.prefix || R();
  if (t)
    return t = W(a, t) || t, ht(Ra.definitions, a, t) || ht(N.styles, a, t);
}
var Ra = new ki(), Ii = function() {
  m.autoReplaceSvg = !1, m.observeMutations = !1, Y("noAuto");
}, Pi = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return $ ? (Y("beforeI2svg", t), z("pseudoElements2svg", t), z("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot;
    m.autoReplaceSvg === !1 && (m.autoReplaceSvg = !0), m.observeMutations = !0, fi(function() {
      Ni({
        autoReplaceSvgRoot: a
      }), Y("watch", t);
    });
  }
}, Ei = {
  icon: function(t) {
    if (t === null)
      return null;
    if (me(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: W(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var a = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = be(t[0]);
      return {
        prefix: n,
        iconName: W(n, a) || a
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(m.cssPrefix, "-")) > -1 || t.match(Gr))) {
      var r = ye(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || R(),
        iconName: W(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var i = R();
      return {
        prefix: i,
        iconName: W(i, t) || t
      };
    }
  }
}, E = {
  noAuto: Ii,
  config: m,
  dom: Pi,
  parse: Ei,
  library: Ra,
  findIconDefinition: De,
  toHtml: re
}, Ni = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot, n = a === void 0 ? w : a;
  (Object.keys(N.styles).length > 0 || m.autoFetchSvg) && $ && m.autoReplaceSvg && E.dom.i2svg({
    node: n
  });
};
function xe(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return re(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if ($) {
        var n = w.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Fi(e) {
  var t = e.children, a = e.main, n = e.mask, r = e.attributes, i = e.styles, o = e.transform;
  if (qe(o) && a.found && !n.found) {
    var s = a.width, l = a.height, u = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = ge(f(f({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function Ci(e) {
  var t = e.prefix, a = e.iconName, n = e.children, r = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(m.cssPrefix, "-").concat(a) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: f(f({}, r), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function Oi(e) {
  var t = ["aria-label", "aria-labelledby", "title", "role"];
  return t.some(function(a) {
    return a in e;
  });
}
function et(e) {
  var t = e.icons, a = t.main, n = t.mask, r = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, l = e.maskId, u = e.extra, c = e.watchable, d = c === void 0 ? !1 : c, p = n.found ? n : a, h = p.width, x = p.height, y = [m.replacementClass, i ? "".concat(m.cssPrefix, "-").concat(i) : ""].filter(function(g) {
    return u.classes.indexOf(g) === -1;
  }).filter(function(g) {
    return g !== "" || !!g;
  }).concat(u.classes).join(" "), k = {
    children: [],
    attributes: f(f({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: y,
      role: u.attributes.role || "img",
      viewBox: "0 0 ".concat(h, " ").concat(x)
    })
  };
  !Oi(u.attributes) && !u.attributes["aria-hidden"] && (k.attributes["aria-hidden"] = "true"), d && (k.attributes[U] = "");
  var S = f(f({}, k), {}, {
    prefix: r,
    iconName: i,
    main: a,
    mask: n,
    maskId: l,
    transform: o,
    symbol: s,
    styles: f({}, u.styles)
  }), A = n.found && a.found ? z("generateAbstractMask", S) || {
    children: [],
    attributes: {}
  } : z("generateAbstractIcon", S) || {
    children: [],
    attributes: {}
  }, I = A.children, T = A.attributes;
  return S.children = I, S.attributes = T, s ? Ci(S) : Fi(S);
}
function yt(e) {
  var t = e.content, a = e.width, n = e.height, r = e.transform, i = e.extra, o = e.watchable, s = o === void 0 ? !1 : o, l = f(f({}, i.attributes), {}, {
    class: i.classes.join(" ")
  });
  s && (l[U] = "");
  var u = f({}, i.styles);
  qe(r) && (u.transform = oi({
    transform: r,
    width: a,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var c = ge(u);
  c.length > 0 && (l.style = c);
  var d = [];
  return d.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), d;
}
function Ti(e) {
  var t = e.content, a = e.extra, n = f(f({}, a.attributes), {}, {
    class: a.classes.join(" ")
  }), r = ge(a.styles);
  r.length > 0 && (n.style = r);
  var i = [];
  return i.push({
    tag: "span",
    attributes: n,
    children: [t]
  }), i;
}
var Ee = N.styles;
function Re(e) {
  var t = e[0], a = e[1], n = e.slice(4), r = pe(n, 1), i = r[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(m.cssPrefix, "-").concat(Ae.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(Ae.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(Ae.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: a,
    icon: o
  };
}
var _i = {
  found: !1,
  width: 512,
  height: 512
};
function ji(e, t) {
  !wa && !m.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ze(e, t) {
  var a = t;
  return t === "fa" && m.styleDefault !== null && (t = R()), new Promise(function(n, r) {
    if (a === "fa") {
      var i = $a(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Ee[t] && Ee[t][e]) {
      var o = Ee[t][e];
      return n(Re(o));
    }
    ji(e, t), n(f(f({}, _i), {}, {
      icon: m.showMissingIcons && e ? z("missingIconAbstract") || {} : {}
    }));
  });
}
var xt = function() {
}, We = m.measurePerformance && se && se.mark && se.measure ? se : {
  mark: xt,
  measure: xt
}, J = 'FA "7.1.0"', Li = function(t) {
  return We.mark("".concat(J, " ").concat(t, " begins")), function() {
    return za(t);
  };
}, za = function(t) {
  We.mark("".concat(J, " ").concat(t, " ends")), We.measure("".concat(J, " ").concat(t), "".concat(J, " ").concat(t, " begins"), "".concat(J, " ").concat(t, " ends"));
}, tt = {
  begin: Li,
  end: za
}, ue = function() {
};
function wt(e) {
  var t = e.getAttribute ? e.getAttribute(U) : null;
  return typeof t == "string";
}
function Mi(e) {
  var t = e.getAttribute ? e.getAttribute(Ge) : null, a = e.getAttribute ? e.getAttribute(Xe) : null;
  return t && a;
}
function $i(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(m.replacementClass);
}
function Di() {
  if (m.autoReplaceSvg === !0)
    return ce.replace;
  var e = ce[m.autoReplaceSvg];
  return e || ce.replace;
}
function Ri(e) {
  return w.createElementNS("http://www.w3.org/2000/svg", e);
}
function zi(e) {
  return w.createElement(e);
}
function Wa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.ceFn, n = a === void 0 ? e.tag === "svg" ? Ri : zi : a;
  if (typeof e == "string")
    return w.createTextNode(e);
  var r = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    r.appendChild(Wa(o, {
      ceFn: n
    }));
  }), r;
}
function Wi(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var ce = {
  replace: function(t) {
    var a = t[0];
    if (a.parentNode)
      if (t[1].forEach(function(r) {
        a.parentNode.insertBefore(Wa(r), a);
      }), a.getAttribute(U) === null && m.keepOriginalSource) {
        var n = w.createComment(Wi(a));
        a.parentNode.replaceChild(n, a);
      } else
        a.remove();
  },
  nest: function(t) {
    var a = t[0], n = t[1];
    if (~Je(a).indexOf(m.replacementClass))
      return ce.replace(t);
    var r = new RegExp("".concat(m.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === m.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? a.removeAttribute("class") : a.setAttribute("class", i.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return re(s);
    }).join(`
`);
    a.setAttribute(U, ""), a.innerHTML = o;
  }
};
function kt(e) {
  e();
}
function Ua(e, t) {
  var a = typeof t == "function" ? t : ue;
  if (e.length === 0)
    a();
  else {
    var n = kt;
    m.mutateApproach === Hr && (n = D.requestAnimationFrame || kt), n(function() {
      var r = Di(), i = tt.begin("mutate");
      e.map(r), i(), a();
    });
  }
}
var at = !1;
function Ya() {
  at = !0;
}
function Ue() {
  at = !1;
}
var ve = null;
function St(e) {
  if (st && m.observeMutations) {
    var t = e.treeCallback, a = t === void 0 ? ue : t, n = e.nodeCallback, r = n === void 0 ? ue : n, i = e.pseudoElementsCallback, o = i === void 0 ? ue : i, s = e.observeMutationsRoot, l = s === void 0 ? w : s;
    ve = new st(function(u) {
      if (!at) {
        var c = R();
        K(u).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !wt(d.addedNodes[0]) && (m.searchPseudoElements && o(d.target), a(d.target)), d.type === "attributes" && d.target.parentNode && m.searchPseudoElements && o([d.target], !0), d.type === "attributes" && wt(d.target) && ~Jr.indexOf(d.attributeName))
            if (d.attributeName === "class" && Mi(d.target)) {
              var p = ye(Je(d.target)), h = p.prefix, x = p.iconName;
              d.target.setAttribute(Ge, h || c), x && d.target.setAttribute(Xe, x);
            } else $i(d.target) && r(d.target);
        });
      }
    }), $ && ve.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Ui() {
  ve && ve.disconnect();
}
function Yi(e) {
  var t = e.getAttribute("style"), a = [];
  return t && (a = t.split(";").reduce(function(n, r) {
    var i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), a;
}
function Hi(e) {
  var t = e.getAttribute("data-prefix"), a = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", r = ye(Je(e));
  return r.prefix || (r.prefix = R()), t && a && (r.prefix = t, r.iconName = a), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = hi(r.prefix, e.innerText) || Ze(r.prefix, Fa(e.innerText))), !r.iconName && m.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function Bi(e) {
  var t = K(e.attributes).reduce(function(a, n) {
    return a.name !== "class" && a.name !== "style" && (a[n.name] = n.value), a;
  }, {});
  return t;
}
function Vi() {
  return {
    iconName: null,
    prefix: null,
    transform: O,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function At(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, a = Hi(e), n = a.iconName, r = a.prefix, i = a.rest, o = Bi(e), s = $e("parseNodeAttributes", {}, e), l = t.styleParser ? Yi(e) : [];
  return f({
    iconName: n,
    prefix: r,
    transform: O,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var Gi = N.styles;
function Ha(e) {
  var t = m.autoReplaceSvg === "nest" ? At(e, {
    styleParser: !1
  }) : At(e);
  return ~t.extra.classes.indexOf(Sa) ? z("generateLayersText", e, t) : z("generateSvgReplacementMutation", e, t);
}
function Xi() {
  return [].concat(C(va), C(pa));
}
function It(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!$) return Promise.resolve();
  var a = w.documentElement.classList, n = function(d) {
    return a.add("".concat(ut, "-").concat(d));
  }, r = function(d) {
    return a.remove("".concat(ut, "-").concat(d));
  }, i = m.autoFetchSvg ? Xi() : qt.concat(Object.keys(Gi));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Sa, ":not([").concat(U, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(U, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = K(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), r("complete");
  else
    return Promise.resolve();
  var l = tt.begin("onTree"), u = s.reduce(function(c, d) {
    try {
      var p = Ha(d);
      p && c.push(p);
    } catch (h) {
      wa || h.name === "MissingIcon" && console.error(h);
    }
    return c;
  }, []);
  return new Promise(function(c, d) {
    Promise.all(u).then(function(p) {
      Ua(p, function() {
        n("active"), n("complete"), r("pending"), typeof t == "function" && t(), l(), c();
      });
    }).catch(function(p) {
      l(), d(p);
    });
  });
}
function Ki(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ha(e).then(function(a) {
    a && Ua([a], t);
  });
}
function Ji(e) {
  return function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : De(t || {}), r = a.mask;
    return r && (r = (r || {}).icon ? r : De(r || {})), e(n, f(f({}, a), {}, {
      mask: r
    }));
  };
}
var qi = function(t) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, r = n === void 0 ? O : n, i = a.symbol, o = i === void 0 ? !1 : i, s = a.mask, l = s === void 0 ? null : s, u = a.maskId, c = u === void 0 ? null : u, d = a.classes, p = d === void 0 ? [] : d, h = a.attributes, x = h === void 0 ? {} : h, y = a.styles, k = y === void 0 ? {} : y;
  if (t) {
    var S = t.prefix, A = t.iconName, I = t.icon;
    return xe(f({
      type: "icon"
    }, t), function() {
      return Y("beforeDOMElementCreation", {
        iconDefinition: t,
        params: a
      }), et({
        icons: {
          main: Re(I),
          mask: l ? Re(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: S,
        iconName: A,
        transform: f(f({}, O), r),
        symbol: o,
        maskId: c,
        extra: {
          attributes: x,
          styles: k,
          classes: p
        }
      });
    });
  }
}, Qi = {
  mixout: function() {
    return {
      icon: Ji(qi)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.treeCallback = It, a.nodeCallback = Ki, a;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(a) {
      var n = a.node, r = n === void 0 ? w : n, i = a.callback, o = i === void 0 ? function() {
      } : i;
      return It(r, o);
    }, t.generateSvgReplacementMutation = function(a, n) {
      var r = n.iconName, i = n.prefix, o = n.transform, s = n.symbol, l = n.mask, u = n.maskId, c = n.extra;
      return new Promise(function(d, p) {
        Promise.all([ze(r, i), l.iconName ? ze(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var x = pe(h, 2), y = x[0], k = x[1];
          d([a, et({
            icons: {
              main: y,
              mask: k
            },
            prefix: i,
            iconName: r,
            transform: o,
            symbol: s,
            maskId: u,
            extra: c,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, t.generateAbstractIcon = function(a) {
      var n = a.children, r = a.attributes, i = a.main, o = a.transform, s = a.styles, l = ge(s);
      l.length > 0 && (r.style = l);
      var u;
      return qe(o) && (u = z("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(u || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Zi = {
  mixout: function() {
    return {
      layer: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, i = r === void 0 ? [] : r;
        return xe({
          type: "layer"
        }, function() {
          Y("beforeDOMElementCreation", {
            assembler: a,
            params: n
          });
          var o = [];
          return a(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(m.cssPrefix, "-layers")].concat(C(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, eo = {
  mixout: function() {
    return {
      counter: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n.title;
        var r = n.classes, i = r === void 0 ? [] : r, o = n.attributes, s = o === void 0 ? {} : o, l = n.styles, u = l === void 0 ? {} : l;
        return xe({
          type: "counter",
          content: a
        }, function() {
          return Y("beforeDOMElementCreation", {
            content: a,
            params: n
          }), Ti({
            content: a.toString(),
            extra: {
              attributes: s,
              styles: u,
              classes: ["".concat(m.cssPrefix, "-layers-counter")].concat(C(i))
            }
          });
        });
      }
    };
  }
}, to = {
  mixout: function() {
    return {
      text: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? O : r, o = n.classes, s = o === void 0 ? [] : o, l = n.attributes, u = l === void 0 ? {} : l, c = n.styles, d = c === void 0 ? {} : c;
        return xe({
          type: "text",
          content: a
        }, function() {
          return Y("beforeDOMElementCreation", {
            content: a,
            params: n
          }), yt({
            content: a,
            transform: f(f({}, O), i),
            extra: {
              attributes: u,
              styles: d,
              classes: ["".concat(m.cssPrefix, "-layers-text")].concat(C(s))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(a, n) {
      var r = n.transform, i = n.extra, o = null, s = null;
      if (Kt) {
        var l = parseInt(getComputedStyle(a).fontSize, 10), u = a.getBoundingClientRect();
        o = u.width / l, s = u.height / l;
      }
      return Promise.resolve([a, yt({
        content: a.innerHTML,
        width: o,
        height: s,
        transform: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, Ba = new RegExp('"', "ug"), Pt = [1105920, 1112319], Et = f(f(f(f({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), $n), Ur), Vn), Ye = Object.keys(Et).reduce(function(e, t) {
  return e[t.toLowerCase()] = Et[t], e;
}, {}), ao = Object.keys(Ye).reduce(function(e, t) {
  var a = Ye[t];
  return e[t] = a[900] || C(Object.entries(a))[0][1], e;
}, {});
function no(e) {
  var t = e.replace(Ba, "");
  return Fa(C(t)[0] || "");
}
function ro(e) {
  var t = e.getPropertyValue("font-feature-settings").includes("ss01"), a = e.getPropertyValue("content"), n = a.replace(Ba, ""), r = n.codePointAt(0), i = r >= Pt[0] && r <= Pt[1], o = n.length === 2 ? n[0] === n[1] : !1;
  return i || o || t;
}
function io(e, t) {
  var a = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), r = isNaN(n) ? "normal" : n;
  return (Ye[a] || {})[r] || ao[a];
}
function Nt(e, t) {
  var a = "".concat(Yr).concat(t.replace(":", "-"));
  return new Promise(function(n, r) {
    if (e.getAttribute(a) !== null)
      return n();
    var i = K(e.children), o = i.filter(function(oe) {
      return oe.getAttribute(Te) === t;
    })[0], s = D.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), u = l.match(Xr), c = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), n();
    if (u && d !== "none" && d !== "") {
      var p = s.getPropertyValue("content"), h = io(l, c), x = no(p), y = u[0].startsWith("FontAwesome"), k = ro(s), S = Ze(h, x), A = S;
      if (y) {
        var I = vi(x);
        I.iconName && I.prefix && (S = I.iconName, h = I.prefix);
      }
      if (S && !k && (!o || o.getAttribute(Ge) !== h || o.getAttribute(Xe) !== A)) {
        e.setAttribute(a, A), o && e.removeChild(o);
        var T = Vi(), g = T.extra;
        g.attributes[Te] = t, ze(S, h).then(function(oe) {
          var qa = et(f(f({}, T), {}, {
            icons: {
              main: oe,
              mask: Da()
            },
            prefix: h,
            iconName: A,
            extra: g,
            watchable: !0
          })), we = w.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(we, e.firstChild) : e.appendChild(we), we.outerHTML = qa.map(function(Qa) {
            return re(Qa);
          }).join(`
`), e.removeAttribute(a), n();
        }).catch(r);
      } else
        n();
    } else
      n();
  });
}
function oo(e) {
  return Promise.all([Nt(e, "::before"), Nt(e, "::after")]);
}
function so(e) {
  return e.parentNode !== document.head && !~Br.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Te) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var lo = function(t) {
  return !!t && xa.some(function(a) {
    return t.includes(a);
  });
}, fo = function(t) {
  if (!t) return [];
  var a = /* @__PURE__ */ new Set(), n = t.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  n = n.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(u) {
      return u.trim();
    });
  });
  var r = fe(n), i;
  try {
    for (r.s(); !(i = r.n()).done; ) {
      var o = i.value;
      if (lo(o)) {
        var s = xa.reduce(function(l, u) {
          return l.replace(u, "");
        }, o);
        s !== "" && s !== "*" && a.add(s);
      }
    }
  } catch (l) {
    r.e(l);
  } finally {
    r.f();
  }
  return a;
};
function Ft(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if ($) {
    var a;
    if (t)
      a = e;
    else if (m.searchPseudoElementsFullScan)
      a = e.querySelectorAll("*");
    else {
      var n = /* @__PURE__ */ new Set(), r = fe(document.styleSheets), i;
      try {
        for (r.s(); !(i = r.n()).done; ) {
          var o = i.value;
          try {
            var s = fe(o.cssRules), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var u = l.value, c = fo(u.selectorText), d = fe(c), p;
                try {
                  for (d.s(); !(p = d.n()).done; ) {
                    var h = p.value;
                    n.add(h);
                  }
                } catch (y) {
                  d.e(y);
                } finally {
                  d.f();
                }
              }
            } catch (y) {
              s.e(y);
            } finally {
              s.f();
            }
          } catch (y) {
            m.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href, " (").concat(y.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (y) {
        r.e(y);
      } finally {
        r.f();
      }
      if (!n.size) return;
      var x = Array.from(n).join(", ");
      try {
        a = e.querySelectorAll(x);
      } catch {
      }
    }
    return new Promise(function(y, k) {
      var S = K(a).filter(so).map(oo), A = tt.begin("searchPseudoElements");
      Ya(), Promise.all(S).then(function() {
        A(), Ue(), y();
      }).catch(function() {
        A(), Ue(), k();
      });
    });
  }
}
var uo = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.pseudoElementsCallback = Ft, a;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(a) {
      var n = a.node, r = n === void 0 ? w : n;
      m.searchPseudoElements && Ft(r);
    };
  }
}, Ct = !1, co = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ya(), Ct = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        St($e("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Ui();
      },
      watch: function(a) {
        var n = a.observeMutationsRoot;
        Ct ? Ue() : St($e("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Ot = function(t) {
  var a = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, r) {
    var i = r.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, a);
}, mo = {
  mixout: function() {
    return {
      parse: {
        transform: function(a) {
          return Ot(a);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (a.transform = Ot(r)), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(a) {
      var n = a.main, r = a.transform, i = a.containerWidth, o = a.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(u, " ").concat(c)
      }, p = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: d,
        path: p
      };
      return {
        tag: "g",
        attributes: f({}, h.outer),
        children: [{
          tag: "g",
          attributes: f({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: f(f({}, n.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, Ne = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Tt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ho(e) {
  return e.tag === "g" ? e.children : [e];
}
var vo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-mask"), i = r ? ye(r.split(" ").map(function(o) {
          return o.trim();
        })) : Da();
        return i.prefix || (i.prefix = R()), a.mask = i, a.maskId = n.getAttribute("data-fa-mask-id"), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(a) {
      var n = a.children, r = a.attributes, i = a.main, o = a.mask, s = a.maskId, l = a.transform, u = i.width, c = i.icon, d = o.width, p = o.icon, h = ii({
        transform: l,
        containerWidth: d,
        iconWidth: u
      }), x = {
        tag: "rect",
        attributes: f(f({}, Ne), {}, {
          fill: "white"
        })
      }, y = c.children ? {
        children: c.children.map(Tt)
      } : {}, k = {
        tag: "g",
        attributes: f({}, h.inner),
        children: [Tt(f({
          tag: c.tag,
          attributes: f(f({}, c.attributes), h.path)
        }, y))]
      }, S = {
        tag: "g",
        attributes: f({}, h.outer),
        children: [k]
      }, A = "mask-".concat(s || dt()), I = "clip-".concat(s || dt()), T = {
        tag: "mask",
        attributes: f(f({}, Ne), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [x, S]
      }, g = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: ho(p)
        }, T]
      };
      return n.push(g, {
        tag: "rect",
        attributes: f({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(A, ")")
        }, Ne)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, po = {
  provides: function(t) {
    var a = !1;
    D.matchMedia && (a = D.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = f(f({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: f(f({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return a || s.children.push({
        tag: "animate",
        attributes: f(f({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: f(f({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: a ? [] : [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), a || n.push({
        tag: "path",
        attributes: f(f({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, go = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-symbol"), i = r === null ? !1 : r === "" ? !0 : r;
        return a.symbol = i, a;
      }
    };
  }
}, bo = [li, Qi, Zi, eo, to, uo, co, mo, vo, po, go];
Ai(bo, {
  mixoutsTo: E
});
E.noAuto;
var te = E.config;
E.library;
E.dom;
var Va = E.parse;
E.findIconDefinition;
E.toHtml;
var yo = E.icon;
E.layer;
E.text;
E.counter;
function xo(e) {
  return e = e - 0, e === e;
}
function Ga(e) {
  return xo(e) ? e : (e = e.replace(/[_-]+(.)?/g, (t, a) => a ? a.toUpperCase() : ""), e.charAt(0).toLowerCase() + e.slice(1));
}
function wo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var B = /* @__PURE__ */ new Map(), ko = 1e3;
function So(e) {
  if (B.has(e))
    return B.get(e);
  const t = {};
  let a = 0;
  const n = e.length;
  for (; a < n; ) {
    const r = e.indexOf(";", a), i = r === -1 ? n : r, o = e.slice(a, i).trim();
    if (o) {
      const s = o.indexOf(":");
      if (s > 0) {
        const l = o.slice(0, s).trim(), u = o.slice(s + 1).trim();
        if (l && u) {
          const c = Ga(l);
          t[c.startsWith("webkit") ? wo(c) : c] = u;
        }
      }
    }
    a = i + 1;
  }
  if (B.size === ko) {
    const r = B.keys().next().value;
    r && B.delete(r);
  }
  return B.set(e, t), t;
}
function Xa(e, t, a = {}) {
  if (typeof t == "string")
    return t;
  const n = (t.children || []).map((c) => Xa(e, c)), r = t.attributes || {}, i = {};
  for (const [c, d] of Object.entries(r))
    switch (!0) {
      case c === "class": {
        i.className = d;
        break;
      }
      case c === "style": {
        i.style = So(String(d));
        break;
      }
      case c.startsWith("aria-"):
      case c.startsWith("data-"): {
        i[c.toLowerCase()] = d;
        break;
      }
      default:
        i[Ga(c)] = d;
    }
  const {
    style: o,
    role: s,
    "aria-label": l,
    ...u
  } = a;
  return o && (i.style = i.style ? { ...i.style, ...o } : o), s && (i.role = s), l && (i["aria-label"] = l, i["aria-hidden"] = "false"), e(t.tag, { ...u, ...i }, ...n);
}
var Ao = Xa.bind(null, $t.createElement), _t = (e, t) => {
  const a = Za();
  return e || (t ? a : void 0);
}, Io = class {
  constructor(e = "react-fontawesome") {
    this.enabled = !1;
    let t = !1;
    try {
      t = typeof process < "u" && process.env.NODE_ENV === "development";
    } catch {
    }
    this.scope = e, this.enabled = t;
  }
  /**
   * Logs messages to the console if not in production.
   * @param args - The message and/or data to log.
   */
  log(...e) {
    this.enabled && console.log(`[${this.scope}]`, ...e);
  }
  /**
   * Logs warnings to the console if not in production.
   * @param args - The warning message and/or data to log.
   */
  warn(...e) {
    this.enabled && console.warn(`[${this.scope}]`, ...e);
  }
  /**
   * Logs errors to the console if not in production.
   * @param args - The error message and/or data to log.
   */
  error(...e) {
    this.enabled && console.error(`[${this.scope}]`, ...e);
  }
};
typeof process < "u" && process.env.FA_VERSION;
var Po = (
  // @ts-expect-error TS2872 - Expression is always truthy - This is true when v7 of SVGCore is used, but not when v6 is used.
  // This is the point of this check - if the property exists on config, we have v7, otherwise we have v6.
  // TS is checking this against the dev dependencies which uses v7, so it reports a false error here.
  "searchPseudoElementsFullScan" in te ? "7.0.0" : "6.0.0"
), Eo = Number.parseInt(Po) >= 7, Z = "fa", _ = {
  beat: "fa-beat",
  fade: "fa-fade",
  beatFade: "fa-beat-fade",
  bounce: "fa-bounce",
  shake: "fa-shake",
  spin: "fa-spin",
  spinPulse: "fa-spin-pulse",
  spinReverse: "fa-spin-reverse",
  pulse: "fa-pulse"
}, No = {
  left: "fa-pull-left",
  right: "fa-pull-right"
}, Fo = {
  90: "fa-rotate-90",
  180: "fa-rotate-180",
  270: "fa-rotate-270"
}, Co = {
  "2xs": "fa-2xs",
  xs: "fa-xs",
  sm: "fa-sm",
  lg: "fa-lg",
  xl: "fa-xl",
  "2xl": "fa-2xl",
  "1x": "fa-1x",
  "2x": "fa-2x",
  "3x": "fa-3x",
  "4x": "fa-4x",
  "5x": "fa-5x",
  "6x": "fa-6x",
  "7x": "fa-7x",
  "8x": "fa-8x",
  "9x": "fa-9x",
  "10x": "fa-10x"
}, j = {
  border: "fa-border",
  /** @deprecated */
  fixedWidth: "fa-fw",
  flip: "fa-flip",
  flipHorizontal: "fa-flip-horizontal",
  flipVertical: "fa-flip-vertical",
  inverse: "fa-inverse",
  rotateBy: "fa-rotate-by",
  swapOpacity: "fa-swap-opacity",
  widthAuto: "fa-width-auto"
};
function Oo(e) {
  const t = te.cssPrefix || te.familyPrefix || Z;
  return t === Z ? e : e.replace(
    new RegExp(String.raw`(?<=^|\s)${Z}-`, "g"),
    `${t}-`
  );
}
function To(e) {
  const {
    beat: t,
    fade: a,
    beatFade: n,
    bounce: r,
    shake: i,
    spin: o,
    spinPulse: s,
    spinReverse: l,
    pulse: u,
    fixedWidth: c,
    inverse: d,
    border: p,
    flip: h,
    size: x,
    rotation: y,
    pull: k,
    swapOpacity: S,
    rotateBy: A,
    widthAuto: I,
    className: T
  } = e, g = [];
  return T && g.push(...T.split(" ")), t && g.push(_.beat), a && g.push(_.fade), n && g.push(_.beatFade), r && g.push(_.bounce), i && g.push(_.shake), o && g.push(_.spin), l && g.push(_.spinReverse), s && g.push(_.spinPulse), u && g.push(_.pulse), c && g.push(j.fixedWidth), d && g.push(j.inverse), p && g.push(j.border), h === !0 && g.push(j.flip), (h === "horizontal" || h === "both") && g.push(j.flipHorizontal), (h === "vertical" || h === "both") && g.push(j.flipVertical), x != null && g.push(Co[x]), y != null && y !== 0 && g.push(Fo[y]), k != null && g.push(No[k]), S && g.push(j.swapOpacity), Eo ? (A && g.push(j.rotateBy), I && g.push(j.widthAuto), (te.cssPrefix || te.familyPrefix || Z) === Z ? g : (
    // TODO: see if we can achieve custom prefix support without iterating
    // eslint-disable-next-line unicorn/no-array-callback-reference
    g.map(Oo)
  )) : g;
}
var _o = (e) => typeof e == "object" && "icon" in e && !!e.icon;
function jt(e) {
  if (e)
    return _o(e) ? e : Va.icon(e);
}
function jo(e) {
  return Object.keys(e);
}
var Lt = new Io("FontAwesomeIcon"), Ka = {
  border: !1,
  className: "",
  mask: void 0,
  maskId: void 0,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: void 0,
  listItem: !1,
  pull: void 0,
  pulse: !1,
  rotation: void 0,
  rotateBy: !1,
  size: void 0,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: void 0,
  transform: void 0,
  swapOpacity: !1,
  widthAuto: !1
}, Lo = new Set(Object.keys(Ka)), ie = $t.forwardRef((e, t) => {
  const a = { ...Ka, ...e }, {
    icon: n,
    mask: r,
    symbol: i,
    title: o,
    titleId: s,
    maskId: l,
    transform: u
  } = a, c = _t(l, !!r), d = _t(s, !!o), p = jt(n);
  if (!p)
    return Lt.error("Icon lookup is undefined", n), null;
  const h = To(a), x = typeof u == "string" ? Va.transform(u) : u, y = jt(r), k = yo(p, {
    ...h.length > 0 && { classes: h },
    ...x && { transform: x },
    ...y && { mask: y },
    symbol: i,
    title: o,
    titleId: d,
    maskId: c
  });
  if (!k)
    return Lt.error("Could not find icon", p), null;
  const { abstract: S } = k, A = { ref: t };
  for (const I of jo(a))
    Lo.has(I) || (A[I] = a[I]);
  return Ao(S[0], A);
});
ie.displayName = "FontAwesomeIcon";
const Mo = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, $o = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Ja = $o, Do = ({ isOpen: e, onClose: t, position: a }) => /* @__PURE__ */ F(Mt, { children: [
  /* @__PURE__ */ b("div", { className: `sidebar-backdrop ${e ? "open" : ""}`, onClick: t }),
  /* @__PURE__ */ F("nav", { className: `sidebar-menu ${e ? "open" : ""} position-${a}`, children: [
    /* @__PURE__ */ b(
      "button",
      {
        className: "sidebar-close-btn",
        onClick: t,
        "aria-label": "Tutup menu navigasi",
        children: /* @__PURE__ */ b(ie, { icon: Ja })
      }
    ),
    /* @__PURE__ */ F("div", { className: "sidebar-links", children: [
      /* @__PURE__ */ b("a", { href: "#", className: "nav-link active", children: "Produk" }),
      /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Penulis" }),
      /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Tentang" }),
      /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Blog" }),
      /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Kontak" }),
      /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Masuk" })
    ] })
  ] })
] }), Vo = ({ hamburgerPosition: e }) => {
  const [t, a] = de(!1), [n, r] = de(!1);
  return He(() => {
    const i = () => {
      r(window.scrollY > 10);
    };
    return window.addEventListener("scroll", i), i(), () => {
      window.removeEventListener("scroll", i);
    };
  }, []), /* @__PURE__ */ F(Mt, { children: [
    /* @__PURE__ */ F("header", { className: `navbar ${n ? "scrolled" : ""} hamburger-${e}`, children: [
      /* @__PURE__ */ b("div", { className: "navbar-overlay" }),
      /* @__PURE__ */ b("a", { href: "#", className: "navbar-logo", children: "SwarAksara" }),
      /* @__PURE__ */ F("div", { className: "navbar-links", children: [
        /* @__PURE__ */ b("a", { href: "#", className: "nav-link active", children: "Produk" }),
        /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Penulis" }),
        /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Tentang" }),
        /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Blog" }),
        /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Kontak" }),
        /* @__PURE__ */ b("a", { href: "#", className: "nav-link", children: "Masuk" }),
        /* @__PURE__ */ b("a", { href: "#", className: "nav-link register-btn", children: "Register" })
      ] }),
      /* @__PURE__ */ b(
        "button",
        {
          className: "hamburger-menu",
          onClick: () => a(!0),
          "aria-label": "Buka menu navigasi",
          children: /* @__PURE__ */ b(ie, { icon: Mo })
        }
      )
    ] }),
    /* @__PURE__ */ b(
      Do,
      {
        isOpen: t,
        onClose: () => a(!1),
        position: e
      }
    )
  ] });
};
const Ro = {
  prefix: "far",
  iconName: "copyright",
  icon: [512, 512, [169], "f1f9", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"]
}, Go = () => {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ F("footer", { className: "footer", children: [
    /* @__PURE__ */ F("div", { className: "footer-copyright", children: [
      /* @__PURE__ */ b(ie, { icon: Ro }),
      /* @__PURE__ */ b("span", { children: `2023-${e} - SwarAksara` })
    ] }),
    /* @__PURE__ */ F("div", { className: "footer-links", children: [
      /* @__PURE__ */ b("a", { href: "#", children: "Kebijakan Privasi" }),
      /* @__PURE__ */ b("a", { href: "#", children: "Syarat & Ketentuan" }),
      /* @__PURE__ */ b("a", { href: "#", children: "Hubungi Kami" })
    ] })
  ] });
}, Xo = () => {
  const { mode: e, setMode: t } = an();
  return /* @__PURE__ */ b(
    "button",
    {
      type: "button",
      className: "trigger-button",
      onClick: () => {
        t(e === "light" ? "dark" : "light");
      },
      "aria-label": `Switch to ${e === "light" ? "dark" : "light"} mode`,
      style: { padding: "0.5rem 1rem", fontSize: "0.9rem" },
      children: e === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"
    }
  );
}, Ko = ({ isOpen: e, onClose: t, title: a, children: n }) => e ? /* @__PURE__ */ b("div", { className: "modal-backdrop", onClick: t, children: /* @__PURE__ */ F("div", { className: "modal-content", onClick: (r) => r.stopPropagation(), children: [
  /* @__PURE__ */ F("header", { className: "modal-header", children: [
    /* @__PURE__ */ b("h2", { children: a }),
    /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        "aria-label": "Close modal",
        onClick: t,
        className: "modal-close-btn",
        children: /* @__PURE__ */ b(ie, { icon: Ja })
      }
    )
  ] }),
  /* @__PURE__ */ b("div", { className: "modal-body", children: n })
] }) }) : null, zo = {
  xs: "0.75rem",
  // 12px
  sm: "0.875rem",
  // 14px
  md: "1rem",
  // 16px
  lg: "1.25rem",
  // 20px
  xl: "1.5rem",
  // 24px
  "2xl": "2rem"
  // 32px
}, Jo = ({
  as: e,
  size: t = "md",
  color: a,
  className: n = "",
  style: r
}) => {
  const i = {
    fontSize: zo[t],
    width: "1em",
    // Mengikuti fontSize
    height: "1em",
    color: a || "currentColor",
    // Default mengikuti warna teks parent
    display: "inline-block",
    verticalAlign: "middle",
    // Agar sejajar dengan teks
    ...r
  };
  return /* @__PURE__ */ b(
    e,
    {
      className: `sw-icon ${n}`,
      style: i,
      "aria-hidden": "true"
    }
  );
};
export {
  Go as Footer,
  Jo as Icon,
  Ho as LocaleProvider,
  Ko as Modal,
  Vo as Navbar,
  Do as Sidebar,
  Yo as ThemeProvider,
  Xo as ThemeSwitcher,
  Ut as getSwaraksaraCookie,
  Wt as setSwaraksaraCookie,
  Bo as useLocale,
  an as useTheme
};
