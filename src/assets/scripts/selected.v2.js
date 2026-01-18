/*!
 * Font Awesome Mod 
 */
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "square-instagram": [448, 512, ["instagram-square"], "e055", "M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"],
    "square-twitter": [448, 512, ["twitter-square"], "f081", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"],
    "square-youtube": [448, 512, [61798, "youtube-square"], "f431", "M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"],
    "facebook-f": [320, 512, [], "f39e", "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"],
    "tiktok": [448, 512, [], "e07b", "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"],
    "square-facebook": [448, 512, ["facebook-square"], "f082", "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"],
    "instagram": [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"],
    "facebook": [512, 512, [62000], "f09a", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"],
    "whatsapp": [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"],
    "youtube": [576, 512, [61802], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"],
    "twitter": [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"],
    "pinterest": [496, 512, [], "f0d2", "M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"],
    "telegram": [496, 512, [62462, "telegram-plane"], "f2c6", "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"],
    "square-whatsapp": [448, 512, ["whatsapp-square"], "f40c", "M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"],
    "google": [488, 512, [], "f1a0", "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"],
    "square-google-plus": [448, 512, ["google-plus-square"], "f0d4", "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"],
  };

  bunker(function () {
    defineIcons('fab', icons);
    defineIcons('fa-brands', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "0": [320, 512, [], "30", ["M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z", ""]],
    "at": [512, 512, [61946], "40", ["M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z", ""]],
    "bars": [448, 512, ["navicon"], "f0c9", ["M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z", "M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"]],
    "book-blank": [448, 512, [128213, 128215, 128216, 128217, "book-alt"], "f5d9", ["M64 416c0-17.7 14.3-32 32-32H416v64H96c-17.7 0-32-14.3-32-32z", "M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H352 256 96c-17.7 0-32 14.3-32 32s14.3 32 32 32H256h96 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96z"]],
    "book-copy": [576, 512, [], "e0be", ["M160 96H96C43 96 0 139 0 192V416c0 53 43 96 96 96H320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 272 96c-17.7 0-32-14.3-32-32s14.3-32 32-32h74.8c-6.9-14.5-10.8-30.8-10.8-48V96z", "M288 0c-53 0-96 43-96 96V320c0 53 43 96 96 96H512h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H512 288zm0 288H480v64H288c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]],
    "book-open": [576, 512, [128214, 128366], "f518", ["M288 72V480s92.8-32 144-32c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-64 0-128 24-144 40z", "M288 72V480s-92.8-32-144-32c-38.5 0-88.4 12.1-119.9 22.6C12.8 474.3 0 466 0 454.1V83.8C0 71.7 6.8 60.5 18.1 56.1C46.3 45.3 93.5 32 144 32c64 0 128 24 144 40z"]],
    "book-open-cover": [640, 512, ["book-open-alt"], "e0c0", ["M64 373.8c0 15.3 10.8 28.4 25.7 31.4L304 448V32L100.6 2.2C81.3-.7 64 14.3 64 33.8V373.8zM576 33.8c0-19.5-17.3-34.5-36.6-31.7L336 32V448l214.3-42.9c15-3 25.7-16.1 25.7-31.4V33.8z", "M89.7 405.1L320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4V28.8l25.7-5.1C621.5 19.7 640 34.8 640 55V421.8c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8V55C0 34.8 18.5 19.7 38.3 23.7L64 28.8v345c0 15.3 10.8 28.4 25.7 31.4z"]],
    "volume-high": [640, 512, [128266, "volume-up"], "f028", ["M499.9 36c8.4-10.3 23.5-11.8 33.8-3.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8zm-60.5 74.5c8.4-10.3 23.5-11.8 33.8-3.5c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8zM378.8 185c8.4-10.3 23.5-11.8 33.8-3.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8z", "M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z"]],
    "waveform": [640, 512, [], "f8f1", ["M320 0c12 0 22.1 8.8 23.8 20.7l42 304.4L424.3 84.2c1.9-11.7 12-20.3 23.9-20.2s21.9 8.9 23.6 20.6l28.2 197.3 20.5-102.6c2.2-10.8 11.3-18.7 22.3-19.3s20.9 6.4 24.2 16.9L593.7 264H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c-10.5 0-19.8-6.9-22.9-16.9l-4.1-13.4-29.4 147c-2.3 11.5-12.5 19.6-24.2 19.3s-21.4-9-23.1-20.6L446.7 248.3l-39 243.5c-1.9 11.7-12.1 20.3-24 20.2s-21.9-8.9-23.5-20.7L320 199.6 279.8 491.3c-1.6 11.8-11.6 20.6-23.5 20.7s-22.1-8.5-24-20.2l-39-243.5L167.8 427.4c-1.7 11.6-11.4 20.3-23.1 20.6s-21.9-7.8-24.2-19.3l-29.4-147-4.1 13.4C83.8 305.1 74.5 312 64 312H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H46.3l26.8-87.1c3.2-10.5 13.2-17.5 24.2-16.9s20.2 8.5 22.3 19.3l20.5 102.6L168.2 84.6c1.7-11.7 11.7-20.5 23.6-20.6s22 8.5 23.9 20.2l38.5 240.9 42-304.4C297.9 8.8 308 0 320 0z", ""]],
    "microphone": [384, 512, [], "f130", ["M40 192c13.3 0 24 10.7 24 24v40c0 70.7 57.3 128 128 128s128-57.3 128-128V216c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 89.1-66.2 162.7-152 174.4V464h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H192 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V430.4C82.2 418.7 16 345.1 16 256V216c0-13.3 10.7-24 24-24z", "M96 96c0-53 43-96 96-96s96 43 96 96V256c0 53-43 96-96 96s-96-43-96-96V96z"]],
    "file-pen": [576, 512, [128221, "file-edit"], "f31c", ["M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.5l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19.1 1.4 27.9H64c-35.3 0-64-28.7-64-64V64z", "M384 160H256c-17.7 0-32-14.3-32-32V0L384 160zm165.9 75.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.5-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417.1L441.2 287.8l71 71L382.9 488.1c-4.1 4.1-9.2 7-14.9 8.4l-60.2 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.2c1.4-5.6 4.3-10.8 8.4-14.9z"]],
    "eye": [576, 512, [128065], "f06e", ["M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288z", "M224 256c35.3 0 64-28.7 64-64c0-7.1-1.2-13.9-3.3-20.3c-1.8-5.5 1.6-11.9 7.4-11.7c40.8 1.7 77.5 29.6 88.6 71.1c13.7 51.2-16.7 103.9-67.9 117.6s-103.9-16.7-117.6-67.9c-1.9-6.9-2.9-13.9-3.2-20.7c-.3-5.8 6.1-9.2 11.7-7.4c6.4 2.1 13.2 3.3 20.3 3.3z"]],
    "eye-slash": [640, 512, [], "f070", ["M360.8 380.3C339.4 392.8 314.6 400 288 400c-79.5 0-144-64.5-144-144c0-14.5 2.1-28.5 6.1-41.7L63.5 146c-29.4 34.7-49.9 70.8-61.1 97.6c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480c56.1 0 104.4-17.8 144.5-43.2l-71.7-56.5zM198.5 252.4c-3.7 .8-6.7 3.7-6.5 7.7c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9c1.9-.5 3.9-1.1 5.7-1.7l-120-94.6zm89-52.4l94.8 74.3c2.7-13.9 2.4-28.6-1.5-43.2c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 2.7-.2 5.4-.5 8zM432 256c0 17.7-3.2 34.6-9 50.2l84.1 65.9c32.3-36.6 54.6-75.4 66.4-103.9c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32c-60 0-111.1 20.3-152.8 48.7L207 136.9c23.1-15.7 51-24.9 81-24.9c79.5 0 144 64.5 144 144z", "M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z"]],
    "copyright": [512, 512, [169], "f1f9", ["M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z", "M312.6 199.4c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1s81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"]],
    "envelope": [512, 512, [128386, 9993, 61443], "f0e0", ["M0 112V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V112c0 15.1-7.1 29.3-19.2 38.4L275.2 313.6c-11.4 8.5-27 8.5-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112z", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48z"]],
    "house": [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", ["M64 270.5L64.1 472c0 22.1 17.9 40 40 40H184c22.1 0 40-17.9 40-40V383.7c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V472c0 22.1 17.9 40 40 40h80.5c22.1 0 40-18 40-40.1l-.4-201.3L288 74.5 64 270.5z", "M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2l256-224z"]],
    "id-card": [576, 512, [62147, "drivers-license"], "f2c2", ["M576 128H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128zM117.3 352H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7c0-29.5 23.9-53.3 53.3-53.3zM112 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z", "M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM240 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM64 405.3c0 5.9 4.8 10.7 10.7 10.7H277.3c5.9 0 10.7-4.8 10.7-10.7c0-29.5-23.9-53.3-53.3-53.3H117.3C87.9 352 64 375.9 64 405.3z"]],
    "infinity": [640, 512, [8734, 9854], "f534", ["M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z", ""]],
    "user": [448, 512, [128100, 62144], "f007", ["M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128z", "M0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"]],
    "arrow-right-to-bracket": [512, 512, ["sign-in"], "f090", ["M320 448c0-17.7 14.3-32 32-32l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32z", "M342.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]],
    "arrow-right-from-bracket": [512, 512, ["sign-out"], "f08b", ["M192 64c0 17.7-14.3 32-32 32L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32z", "M502.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288 192 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l210.7 0-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128z"]],
    "floppy-disk": [448, 512, [128190, 128426, "save"], "f0c7", "M16 96c0-26.5 21.5-48 48-48l0 112c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V49.2c8.8 2 17 6.4 23.4 12.9l74.5 74.5c9 9 14.1 21.2 14.1 33.9V416c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96zM80 48H304V160c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V48zM0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V170.5c0-17-6.7-33.3-18.7-45.3L354.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96zM296 328a72 72 0 1 1 -144 0 72 72 0 1 1 144 0zm-72-88a88 88 0 1 0 0 176 88 88 0 1 0 0-176z"],
    "spinner": [512, 512, [], "f110", ["M369.1 75A48 48 0 1 1 437 142.9 48 48 0 1 1 369.1 75zM416 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM208 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zm294.2 0A48 48 0 1 1 437 437a48 48 0 1 1 -67.9-67.9z", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 256A48 48 0 1 0 0 256a48 48 0 1 0 96 0zM75 142.9A48 48 0 1 0 142.9 75 48 48 0 1 0 75 142.9z"]],
    "xmark": [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", ["M297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6z", ""]],
    "arrow-rotate-left": [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", ["M125.7 160l17.1-17.1c62.5-62.5 163.8-62.5 226.3 0s62.5 163.8 0 226.3s-163.8 62.5-226.3 0c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3c87.5 87.5 229.3 87.5 316.8 0s87.5-229.3 0-316.8s-229.3-87.5-316.8 0L80 115.2V160h45.7z", "M16 192c0 17.7 14.3 32 32 32H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H80V64c0-17.7-14.3-32-32-32S16 46.3 16 64V192z"]],
    "user-plus": [640, 512, [], "f234", ["M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z", "M504 248v64c0 13.3 10.7 24 24 24s24-10.7 24-24V248h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H552V136c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H440c-13.3 0-24 10.7-24 24s10.7 24 24 24h64z"]],
    "key": [512, 512, [128273], "f084", ["M168.3 229.7L282.3 343.7l0 0s0 0 0 0L249 377c-4.5 4.5-10.6 7-17 7H192v40c0 13.3-10.7 24-24 24H128v40c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V408c0-6.4 2.5-12.5 7-17L168.3 229.7s0 0 0 0l0 0z", "M168.3 229.7L282.3 343.7l0 0c16.9 5.4 35 8.3 53.7 8.3c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7l0 0zM336 136a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]],
    "lock": [448, 512, [128274], "f023", ["M224 64c-44.2 0-80 35.8-80 80v48H80V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48H304V144c0-44.2-35.8-80-80-80z", "M0 256c0-35.3 28.7-64 64-64H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256z"]],
    "xmark-large": [448, 512, [], "e59b", ["M393.4 41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 256 438.6 425.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 301.3 54.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0L224 210.7 393.4 41.4z", ""]],
    "phone": [512, 512, [128222, 128379], "f095", ["M505.7 412.3l-8.5 31.2c-71.8-8.7-138.9-32.9-197.8-69.1l20.5-25c55.4 33.4 118.4 55.4 185.8 62.9zM99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8l-25 20.5C101.4 153.7 77.2 86.6 68.4 14.8L99.7 6.3z", "M68.4 14.8l-39 10.6C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l10.6-39C273.2 416.4 95.6 238.8 68.4 14.8zM505.7 412.3l4.9-17.8c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6l-25.1 30.7c55.4 33.4 118.4 55.4 185.8 62.9zM162.6 192.1L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2L99.7 6.3c7.5 67.4 29.5 130.4 62.9 185.8z"]],
    "puzzle-piece": [512, 512, [129513], "f12e", ["M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8v0c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2v0c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2v0c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2v0c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8v0c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320v0c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256v0C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2v0z", ""]],
    "chevron-left": [320, 512, [9001], "f053", ["M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z", ""]],
    "chevron-right": [320, 512, [9002], "f054", ["M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z", ""]],
    "triangle-exclamation": [512, 512, [9888, "exclamation-triangle", "warning"], "f071", ["M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z", "M280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184zM256 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]],
    "gift": [512, 512, [127873], "f06b", ["M73.6 128c14.6 28.5 44.2 48 78.4 48h64 8v80H32c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32H73.6zM480 256H288V176h72c34.2 0 63.8-19.5 78.4-48H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32zM32 288H224V512H80c-26.5 0-48-21.5-48-48V288zM288 512V288H480V464c0 26.5-21.5 48-48 48H288z", "M190.5 68.8L225.3 128H224h-8H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88s39.4 88 88 88h64 8v80h64V176h72c48.6 0 88-39.4 88-88s-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5zm65.5-16.7C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40s-17.9 40-40 40H286.7l34.8-59.2zM288 512V288H224V512h64z"]],
    "books": [512, 512, [128218], "f5db", ["M0 32C0 14.3 14.3 0 32 0H96c17.7 0 32 14.3 32 32V96H0V32zm0 96H128V384H0V128zM0 416H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V96H160V32zm0 96H288V384H160V128zm0 288H288v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416zM289.4 117.8L412.2 85l8.2 30.9L297.6 148.8l-8.2-30.9zm74.2 278.3l122.8-32.9 8.2 30.9L371.8 427l-8.2-30.9z", "M288 112.6l1.4 5.2L412.2 85 395.8 23.7c-4.5-17-22-27.1-38.9-22.6L295.5 17.6c-2.7 .7-5.2 1.8-7.5 3.1L288 96H160v32H288l0-15.4zm132.4 3.2L297.6 148.8l66 247.4 122.8-32.9-66-247.4zM388.2 488.3c4.5 17 22 27.1 38.9 22.6l61.4-16.5c16.9-4.6 27-22.1 22.5-39.1l-16.3-61.1L371.8 427l16.3 61.3zM0 96v32H128V96H0zM128 384H0v32H128V384zm160 0H160v32H288V384z"]],
    "circle-user": [512, 512, [62142, "user-circle"], "f2bd", ["M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z", "M256 272a72 72 0 1 0 0-144 72 72 0 1 0 0 144zm0 176c56.8 0 107.8-24.7 143-63.8C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8z"]],
    "pen-to-square": [512, 512, ["edit"], "f044", ["M0 160c0-53 43-96 96-96h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32 14.3-32 32V416c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V320c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 53-43 96-96 96H96c-53 0-96-43-96-96V160z", "M392.4 21.7L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0zM339.7 74.3L172.4 241.7c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3z"]],
    "file-arrow-up": [384, 512, ["file-upload"], "f574", ["M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM216 392V289.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V392c0 13.3 10.7 24 24 24s24-10.7 24-24z", "M384 160H256c-17.7 0-32-14.3-32-32V0L384 160zM216 392c0 13.3-10.7 24-24 24s-24-10.7-24-24V289.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V392z"]],
    "arrow-up-from-bracket": [448, 512, [], "e09a", ["M32 320c17.7 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V352c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 53-43 96-96 96H96c-53 0-96-43-96-96V352c0-17.7 14.3-32 32-32z", "M201.4 9.4c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128z"]],
    "cloud-arrow-up": [640, 512, [62338, "cloud-upload", "cloud-upload-alt"], "f0ee", ["M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z", "M223 297c-9.4-9.4-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39L344 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-134.1-39 39c-9.4 9.4-24.6 9.4-33.9 0z"]],
    "trash-can": [448, 512, [61460, "trash-alt"], "f2ed", ["M416 96H32V448c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V96zM144 176V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16z", "M163.8 0c-12.1 0-23.2 6.8-28.6 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8z"]],
    "coins": [512, 512, [], "f51e", ["M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6c-.4-.2-.7-.4-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM416 341.3V278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 29.6-38.6 55.5-96 69.3zm0-96V240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9c-14.6 7.4-32.2 13.6-52.2 18.4z", "M384 240c0 18-14.3 34.6-38.4 48c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-44.2 86-80 192-80s192 35.8 192 80zM192 352c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V336c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352zm148.1 70.1c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448s108.6-9.4 148.1-25.9z"]],
    "book-medical": [448, 512, [], "f7e6", ["M64 416c0-17.7 14.3-32 32-32H416v64H96c-17.7 0-32-14.3-32-32z", "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H352 256 96c-17.7 0-32-14.3-32-32s14.3-32 32-32H256h96 64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zM208 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272v48c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224H160c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48V112z"]],
    "file-plus": [384, 512, [], "f319", ["M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM192 240c-13.3 0-24 10.7-24 24v48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V360h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V264c0-13.3-10.7-24-24-24z", "M384 160H256c-17.7 0-32-14.3-32-32V0L384 160zM192 240c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V360H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V264c0-13.3 10.7-24 24-24z"]],
    "money-bill-1-wave": [576, 512, ["money-bill-wave-alt"], "f53b", ["M512 160c-33.9 0-61.6-26.3-63.9-59.7c-40 .9-83.5 10.5-134.2 23.2c-4.6 1.2-9.4 2.3-14.2 3.6l0 0c-51.1 12.8-110.4 27.8-172.9 28.6C121.5 185.4 95.4 208 64 208V352c33.9 0 61.6 26.3 63.9 59.7c40-.9 83.5-10.5 134.2-23.2c4.7-1.2 9.4-2.3 14.2-3.6l0 0c51.1-12.8 110.4-27.8 172.9-28.6c5.5-29.8 31.6-52.4 63-52.4V160zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96z", "M0 418.3V115.8C0 92 25.4 76.2 48.4 82.4C128.2 103.9 208.1 84 288 64c86.9-21.7 173.8-43.5 260.7-11.8C565.8 58.5 576 75.5 576 93.7V396.2c0 23.8-25.4 39.5-48.3 33.3C447.8 408.1 367.9 428 288 448c-86.9 21.7-173.8 43.4-260.7 11.8C10.2 453.5 0 436.5 0 418.3zm448.1-318c-40 .9-83.5 10.5-134.2 23.2c-4.6 1.2-9.4 2.3-14.2 3.6l0 0c-51.1 12.8-110.4 27.8-172.9 28.6C121.5 185.4 95.4 208 64 208V352c33.9 0 61.6 26.3 63.9 59.7c40-.9 83.5-10.5 134.2-23.2c4.7-1.2 9.4-2.3 14.2-3.6l0 0c51.1-12.8 110.4-27.8 172.9-28.6c5.5-29.8 31.6-52.4 63-52.4V160c-33.9 0-61.6-26.3-63.9-59.7zM272 188h16c11 0 20 9 20 20v68h4c11 0 20 9 20 20s-9 20-20 20H288 264c-11 0-20-9-20-20s9-20 20-20h4V227.6c-9.1-1.9-16-9.9-16-19.6c0-11 9-20 20-20z"]],
    "arrow-up-long": [384, 512, ["long-arrow-up"], "f176", ["M160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l-32-32-32 32z", "M169.4 9.4c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 77.3 86.6 182.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128z"]],
    "mobile-screen": [384, 512, ["mobile-android-alt"], "f3cf", ["M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z", "M80 64H304V384H80V64z"]],
    "file-check": [384, 512, [], "f316", ["M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM305 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L305 281z", "M384 160L224 0V128c0 17.7 14.3 32 32 32H384zM305 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L305 281z"]],
    "arrow-left": [448, 512, [8592], "f060", ["M109.3 288L416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0-32 32 32 32z", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 256 214.6 393.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160z"]],
    "circle-question": [512, 512, [62108, "question-circle"], "f059", ["M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z", "M222.6 128c-23.7 0-44.8 14.9-52.8 37.3l-.4 1.2c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6l.4-1.2c1.1-3.2 4.2-5.3 7.5-5.3h58.3c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8V264c0 13.3 10.7 24 24 24c13.1 0 23.8-10.5 24-23.6l32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1H222.6zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]],
    "circle-exclamation": [512, 512, ["exclamation-circle"], "f06a", ["M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z", "M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]],
    "window-restore": [512, 512, [], "f2d2", ["M208 64H432c8.8 0 16 7.2 16 16V304c0 8.8-7.2 16-16 16H416v64h16c44.2 0 80-35.8 80-80V80c0-44.2-35.8-80-80-80H208c-44.2 0-80 35.8-80 80V96h64V80c0-8.8 7.2-16 16-16z", "M64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H64zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]],
    "window-maximize": [512, 512, [128470], "f2d0", ["M64 128c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z", "M448 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64l384 0zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]],
    "arrow-down-long": [384, 512, ["long-arrow-down"], "f175", ["M160 402.7V32c0-17.7 14.3-32 32-32s32 14.3 32 32V402.7l-32 32-32-32z", "M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 434.7 86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"]],
    "file-excel": [384, 512, [], "f1c3", ["M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM155.7 250.2c-7.6-10.9-22.6-13.5-33.4-5.9s-13.5 22.6-5.9 33.4L162.7 344l-46.4 66.2c-7.6 10.9-5 25.8 5.9 33.4s25.8 5 33.4-5.9L192 385.8l36.3 51.9c7.6 10.9 22.6 13.5 33.4 5.9s13.5-22.6 5.9-33.4L221.3 344l46.4-66.2c7.6-10.9 5-25.8-5.9-33.4s-25.8-5-33.4 5.9L192 302.1l-36.3-51.9z", "M384 160L224 0V128c0 17.7 14.3 32 32 32H384zM155.7 250.2c-7.6-10.9-22.6-13.5-33.4-5.9s-13.5 22.6-5.9 33.4L162.7 344l-46.4 66.2c-7.6 10.9-5 25.8 5.9 33.4s25.8 5 33.4-5.9L192 385.8l36.3 51.9c7.6 10.9 22.6 13.5 33.4 5.9s13.5-22.6 5.9-33.4L221.3 344l46.4-66.2c7.6-10.9 5-25.8-5.9-33.4s-25.8-5-33.4 5.9L192 302.1l-36.3-51.9z"]],
    "spell-check": [576, 512, [], "f891", ["M141.5 19.7C136.6 7.8 124.9 0 112 0S87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160zM112 115.2L130.7 160H93.3L112 115.2zM288 0c-17.7 0-32 14.3-32 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288zm80 80c0 8.8-7.2 16-16 16H320V64h32c8.8 0 16 7.2 16 16zM320 192V160h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320z", "M566.6 265.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L352 434.7 521.4 265.4c12.5-12.5 32.8-12.5 45.3 0z"]],
    "volume-off": [320, 512, [], "f026", ["", "M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z"]],
    "check": [448, 512, [10003, 10004], "f00c", ["", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", ["M208 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 352A208 208 0 1 0 208 0a208 208 0 1 0 0 416z", "M330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z"]],
    "headphones": [512, 512, [127911], "f025", ["M49.6 262C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c29.1 12 49.6 40.6 49.6 74V288C512 146.6 397.4 32 256 32S0 146.6 0 288v48c0-33.4 20.5-62.1 49.6-74z", "M80 256c-44.2 0-80 35.8-80 80v64c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm352 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80V336c0-44.2-35.8-80-80-80z"]],
    "a": [384, 512, [97], "41", ["M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z", ""]],
    "b": [320, 512, [98], "42", ["M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H192c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128H64zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288h96 32c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V288z", ""]],
    "font-case": [640, 512, [], "f866", ["M512 160c-70.7 0-128 57.3-128 128v64c0 70.7 57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8c5 11.1 16.2 18.8 29.2 18.8c17.7 0 32-14.3 32-32V352 288 192c0-17.7-14.3-32-32-32c-13 0-24.1 7.7-29.2 18.8C559.4 166.9 536.5 160 512 160zm64 128v64c0 35.3-28.7 64-64 64s-64-28.7-64-64V288c0-35.3 28.7-64 64-64s64 28.7 64 64z", "M206 52.8C201.3 40.3 189.3 32 176 32s-25.3 8.3-30 20.8L2 436.8c-6.2 16.5 2.2 35 18.7 41.2s35-2.2 41.2-18.7L96.2 368H255.8L290 459.2c6.2 16.5 24.7 24.9 41.2 18.7s24.9-24.6 18.7-41.2L206 52.8zM231.8 304H120.2L176 155.1 231.8 304z"]],
    "square-chevron-down": [448, 512, ["chevron-square-down"], "f329", ["M64 480c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64zM241 345L345 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 345c9.4 9.4 24.6 9.4 33.9 0z", "M207 345c9.4 9.4 24.6 9.4 33.9 0L345 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 345z"]],
    "square-chevron-up": [448, 512, ["chevron-square-up"], "f32c", ["M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM241 167L345 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L207 167c9.4-9.4 24.6-9.4 33.9 0z", "M207 167c9.4-9.4 24.6-9.4 33.9 0L345 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L207 167z"]],
    "book-circle-arrow-up": [640, 512, [], "e0bd", ["M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V198.6C374.1 219.5 320 287.4 320 368c0 5.4 .2 10.7 .7 16H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H339.2c13.1 25.6 32.2 47.6 55.6 64H384 96c-53 0-96-43-96-96V96z", "M640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM428.7 348.7l56-56c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 342.6l0 89.4c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-89.4-28.7 28.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"]],
    "file-pdf": [512, 512, [], "f1c1", ["M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64z", "M384 160L224 0V128c0 17.7 14.3 32 32 32H384zM176 352c-8.8 0-16 7.2-16 16v80 48c0 8.8 7.2 16 16 16s16-7.2 16-16V464h16c30.9 0 56-25.1 56-56s-25.1-56-56-56H176zm32 80H192V384h16c13.3 0 24 10.7 24 24s-10.7 24-24 24zm96-80c-8.8 0-16 7.2-16 16V496c0 8.8 7.2 16 16 16h32c26.5 0 48-21.5 48-48V400c0-26.5-21.5-48-48-48H304zm32 128H320V384h16c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16zm80-112v64 64c0 8.8 7.2 16 16 16s16-7.2 16-16V448h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V384h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H432c-8.8 0-16 7.2-16 16z"]],
    "book-open-reader": [512, 512, ["book-reader"], "f5da", ["", "M256 0a96 96 0 1 0 0 192A96 96 0 1 0 256 0zM240 512V248c-52.1-36.4-114.1-56-177.7-56H32c-17.7 0-32 14.3-32 32V427c0 16.4 12.5 30.2 28.8 31.8l96 9.6c23.2 2.3 45.9 8.9 66.8 19.3L240 512zm32 0l48.4-24.2c20.9-10.4 43.5-17 66.8-19.3l96-9.6c16.4-1.6 28.8-15.4 28.8-31.8V224c0-17.7-14.3-32-32-32H449.7c-63.6 0-125.6 19.6-177.7 56V512z"]],
    "right-to-bracket": [512, 512, ["sign-in-alt"], "f2f6", ["M320 448c0-17.7 14.3-32 32-32l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32z", "M340.7 228.7L217.9 105.9c-6.4-6.4-15-9.9-24-9.9c-18.7 0-33.9 15.2-33.9 33.9l0 62.1L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0 0 62.1c0 18.7 15.2 33.9 33.9 33.9c9 0 17.6-3.6 24-9.9L340.7 283.3c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3z"]],
    "magnifying-glass-plus": [512, 512, ["search-plus"], "f00e", ["M208 416A208 208 0 1 0 208 0a208 208 0 1 0 0 416zM184 296V232H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V120c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H232v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z", "M184 296V232H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V120c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H232v64c0 13.3-10.7 24-24 24s-24-10.7-24-24zM457.4 502.6L330.7 376C348 363.3 363.3 348 376 330.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"]],
    "magnifying-glass-minus": [512, 512, ["search-minus"], "f010", ["M208 416A208 208 0 1 0 208 0a208 208 0 1 0 0 416zM136 184H280c13.3 0 24 10.7 24 24s-10.7 24-24 24H136c-13.3 0-24-10.7-24-24s10.7-24 24-24z", "M136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136zM330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z"]],
    "book-arrow-up": [448, 512, [], "e0ba", ["M216 384H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H216V384zm48 64H416V384H264v64z", "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H216V448H96c-17.7 0-32-14.3-32-32s14.3-32 32-32H216l0-174.1-39 39c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39V384h88 64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zM264 448v64H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H352 264z"]],
    "share-nodes": [448, 512, ["share-alt"], "f1e0", ["M285.4 197.1c-15.4-14.9-25.9-34.9-28.6-57.2l-94.1 47c15.4 14.9 25.9 34.9 28.6 57.2l94.1-47zm-94.1 70.8c-2.8 22.4-13.2 42.4-28.6 57.2l94.1 47c2.8-22.4 13.2-42.4 28.6-57.2l-94.1-47z", "M256 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM0 256a96 96 0 1 1 192 0A96 96 0 1 1 0 256zm352 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]],
    "cart-shopping": [576, 512, [128722, "shopping-cart"], "f07a", ["M170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411c2 4.2 3.5 8.8 4.4 13.5L170.7 288z", "M0 24C0 10.7 10.7 0 24 0H69.5c26.9 0 50 19.1 55 45.5l51.6 271c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]],
    "pen-clip": [512, 512, ["pen-alt"], "f305", ["M362.7 19.3c25-25 65.5-25 90.5 0l39.4 39.4c25 25 25 65.5 0 90.5L417.9 224 288 94.1l74.7-74.7z", "M207 114.9c9.4-9.4 24.6-9.4 33.9 0L254.1 128 99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9 .9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1L401 241l17-17-1-1-16-16-96-96-17-17L274.9 81c-28.1-28.1-73.7-28.1-101.8 0L71 183c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L207 114.9z"]],
    "wifi": [640, 512, ["wifi-3", "wifi-strong"], "f1eb", ["", "M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]],
    "wifi-slash": [640, 512, [], "f6ac", ["M364.6 260.4c39.2 7.9 74.7 26.1 103.6 51.6c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192c-13.3 0-26.5 .9-39.3 2.7l83.9 65.8zM185.6 120.2C227.4 104.5 272.7 96 320 96c103.2 0 196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32c-68.7 0-133.7 15.5-191.9 43.1l57.5 45.1zM380.8 396l-55.6-43.8c-1.7-.1-3.4-.2-5.2-.2c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-7-1.1-13.7-3.2-20zM228 275.7L173 232.3c-15.5 9.2-30.1 19.8-43.5 31.7c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c16.7-14.8 35.6-27 56.2-36.3zM93.6 169.8L41.7 128.9C30.7 137.7 20 147 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9c12.4-11.9 25.6-23 39.5-33.1z", "M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z"]],

  };

  bunker(function () {
    defineIcons('fad', icons);
    defineIcons('fa-duotone', icons);
  });

}());
// ---------------------------------------------------------------------------------------
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "0": [320, 512, [], "30", "M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 64C89.3 64 32 121.3 32 192V320c0 70.7 57.3 128 128 128s128-57.3 128-128V192c0-70.7-57.3-128-128-128z"],
    "at": [512, 512, [61946], "40", "M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v24c0 48.6-39.4 88-88 88c-33.4 0-62.5-18.7-77.4-46.1c-20.4 28-53.4 46.1-90.6 46.1c-61.9 0-112-50.1-112-112s50.1-112 112-112c31.3 0 59.7 12.9 80 33.6V176c0-8.8 7.2-16 16-16s16 7.2 16 16v80 24c0 30.9 25.1 56 56 56s56-25.1 56-56V256C480 132.3 379.7 32 256 32zm80 224a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z"],
    "bars": [448, 512, ["navicon"], "f0c9", "M0 80c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H432c8.8 0 16 7.2 16 16z"],
    "book-blank": [448, 512, [128213, 128215, 128216, 128217, "book-alt"], "f5d9", "M0 64C0 28.7 28.7 0 64 0H400c26.5 0 48 21.5 48 48V368c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64l0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H384V416H64zM32 392.6c9.4-5.4 20.3-8.6 32-8.6H96V32H64C46.3 32 32 46.3 32 64l0 328.6zM128 32V384H400c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H128z"],
    "book-copy": [576, 512, [], "e0be", "M224 64c0-17.7 14.3-32 32-32H528c8.8 0 16 7.2 16 16V272c0 8.8-7.2 16-16 16H256c-11.7 0-22.6 3.1-32 8.6V64zm-32 0V352c0 35.3 28.7 64 64 64H528h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H544V317.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H256c-35.3 0-64 28.7-64 64zm64 320c-17.7 0-32-14.3-32-32s14.3-32 32-32H512v64H256zm96 96V448H320v32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H184.4c-8.3-9.2-14.8-20.1-19-32H64c-11.7 0-22.6 3.1-32 8.6V160c0-17.7 14.3-32 32-32h96V96H64C28.7 96 0 124.7 0 160V448c0 35.3 28.7 64 64 64H336h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H352z"],
    "book-open": [576, 512, [128214, 128366], "f518", "M156 32c44.6 0 89.7 8.6 132 22.6C330.3 40.6 375.4 32 420 32c55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1V402.5c0 26.9-25.1 44.8-49 40.6c-18.5-3.2-51.3-7.2-99-7.2c-58.9 0-97.8 24.3-111.2 34.1c-7.5 5.5-17.2 9.6-28.2 9.9c-.2 0-.5 0-.7 0c-.1 0-.1 0-.2 0c-.1 0-.2 0-.3 0c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7c-24 4-48-14.1-48-40.2V91.1C0 74.5 10.3 59 27.1 53.6C48.8 46.6 100.6 32 156 32zM304 440c20.3-13.5 63.1-36 124-36c49.5 0 84.1 4.2 104.4 7.6c2.5 .4 5.7-.3 8.2-2.3c2.2-1.8 3.4-4 3.4-6.8V91.1c0-3.5-2.1-6.1-4.9-7C518.6 77.5 470.5 64 420 64c-38.6 0-78.1 7.1-116 19V440zM272 83c-37.9-12-77.4-19-116-19C105.5 64 57.4 77.5 36.9 84c-2.8 .9-4.9 3.6-4.9 7V403.5c0 2.7 1.1 4.9 3.1 6.5c2.2 1.8 5.1 2.5 7.6 2.1c21.3-3.6 58-8.2 105.3-8.2c56.8 0 102.8 23.7 124 36.9V83z"],
    "book-open-cover": [640, 512, ["book-open-alt"], "e0c0", "M544 373.8V33.5L336 62.1V415.4l208-41.6zM304 415.4V62.1L96 33.5V373.8l208 41.6zM539.6 1.8C558.9-.8 576 14.1 576 33.5V373.8c0 15.3-10.8 28.4-25.7 31.4L332.6 448.7c-8.3 1.7-16.8 1.7-25.1 0L89.7 405.1c-15-3-25.7-16.1-25.7-31.4V33.5C64 14.1 81.1-.8 100.4 1.8L320 32 539.6 1.8zM0 65.5c0-17.9 14.6-32 32-32l0 32L32 160l0 258.6 281.7 56.3c4.1 .8 8.4 .8 12.6 0L608 418.6V160 65.5v-32c17.4 0 32 14.1 32 32V418.6c0 15.3-10.8 28.4-25.7 31.4L332.6 506.3c-8.3 1.7-16.8 1.7-25.1 0L25.7 449.9C10.8 447 0 433.8 0 418.6V65.5z"],
    "volume-high": [640, 512, [128266, "volume-up"], "f028", "M151.6 188L288 66.7V445.3L151.6 324c-2.9-2.6-6.7-4-10.6-4H56c-13.3 0-24-10.7-24-24V216c0-13.3 10.7-24 24-24h85c3.9 0 7.7-1.4 10.6-4zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9L270.4 472.5l10.6-12-10.6 12c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8V61.8C320 45.3 306.7 32 290.2 32zM409.6 179.2c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4C406 216.5 416 235.1 416 256s-10 39.5-25.6 51.2c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2C432.9 315.3 448 287.4 448 256s-15.1-59.3-38.4-76.8zm42-69.2c-5.6 6.8-4.7 16.9 2.1 22.5C489.4 161.9 512 206.3 512 256s-22.6 94.1-58.2 123.4c-6.8 5.6-7.8 15.7-2.1 22.5s15.7 7.8 22.5 2.1C516.8 368.9 544 315.6 544 256s-27.2-112.9-69.8-148.1c-6.8-5.6-16.9-4.7-22.5 2.1zm86.7-73.6c-6.7-5.7-16.8-4.9-22.6 1.8s-4.9 16.8 1.8 22.6c55.3 47 90.4 117 90.4 195.2s-35.1 148.2-90.4 195.2c-6.7 5.7-7.6 15.8-1.8 22.6s15.8 7.6 22.6 1.8C600.5 422.8 640 344 640 256s-39.5-166.8-101.6-219.6z"],
    "waveform": [640, 512, [], "f8f1", "M320 0c8 0 14.8 5.9 15.9 13.9l49.3 369.5L432.2 77.6c1.2-7.9 8-13.6 16-13.6s14.6 6 15.7 13.8l34.6 254 29.8-158.8c1.4-7.3 7.6-12.7 15-13s14.1 4.5 16.1 11.6L588.1 272H624c8.8 0 16 7.2 16 16s-7.2 16-16 16H576c-7.1 0-13.4-4.7-15.4-11.6l-13.4-46.8L511.7 434.9c-1.4 7.7-8.3 13.2-16.1 13s-14.4-6.1-15.5-13.8L447 191.4l-47.2 307c-1.2 7.9-8 13.6-16 13.6s-14.6-6-15.7-13.9L320 137.1 271.9 498.1c-1.1 7.9-7.7 13.8-15.7 13.9s-14.8-5.7-16-13.6L193 191.4 159.9 434.2c-1.1 7.8-7.6 13.6-15.5 13.8s-14.7-5.3-16.1-13L92.8 245.6 79.4 292.4c-2 6.9-8.2 11.6-15.4 11.6H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H51.9L80.6 171.6c2-7.1 8.7-11.9 16.1-11.6s13.6 5.7 15 13l29.8 158.8 34.6-254c1.1-7.9 7.8-13.8 15.7-13.8s14.7 5.7 16 13.6l47.1 305.9L304.1 13.9C305.2 5.9 312 0 320 0z"],
    "microphone": [384, 512, [], "f130", "M256 96V256c0 35.3-28.7 64-64 64s-64-28.7-64-64V96c0-35.3 28.7-64 64-64s64 28.7 64 64zM96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96S96 43 96 96zM64 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 83 63.1 151.2 144 159.2V480H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h80 80c8.8 0 16-7.2 16-16s-7.2-16-16-16H208V415.2c80.9-8 144-76.2 144-159.2V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 70.7-57.3 128-128 128s-128-57.3-128-128V208z"],
    "file-pen": [576, 512, [128221, "file-edit"], "f31c", "M64 480H258.6l-1.1 4.5c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H220.1c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9V285.7l-32 32V192H240c-26.5 0-48-21.5-48-48V32H64C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16H351.5zm167 104c-6.2-6.2-16.4-6.2-22.6 0l-24.8 24.8 39.9 39.9 24.8-24.8c6.2-6.2 6.2-16.4 0-22.6L518.6 264zM342.4 417.5c-2.1 2.1-3.5 4.6-4.2 7.4L326 473.9l48.9-12.2c2.8-.7 5.4-2.2 7.4-4.2L488.5 351.3l-39.9-39.9L342.4 417.5zM473.3 241.4c18.7-18.7 49.1-18.7 67.9 0l17.3 17.3c18.7 18.7 18.7 49.1 0 67.9L405 480.1c-6.2 6.2-13.9 10.5-22.3 12.6l-74.8 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.8c2.1-8.4 6.5-16.2 12.6-22.3L473.3 241.4z"],
    "eye": [576, 512, [128065], "f06e", "M117.2 136C160.3 96 217.6 64 288 64s127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-13.3 32-42.1 80-85.2 120c-43.1 40-100.4 72-170.8 72s-127.7-32-170.8-72C74.1 336 45.3 288 32 256c13.3-32 42.1-80 85.2-120zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"],
    "eye-slash": [640, 512, [], "f070", "M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-51.2 0-96 14.8-133.9 36.8l27.3 21.5C244.6 74.2 280.2 64 320 64c70.4 0 127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-9.2 22.1-25.9 52-49.5 81.5l25.1 19.8c25.6-32 43.7-64.4 53.9-89zM88.4 154.7c-25.6 32-43.7 64.4-53.9 89c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c51.2 0 96-14.8 133.9-36.8l-27.3-21.5C395.4 437.8 359.8 448 320 448c-70.4 0-127.7-32-170.8-72C106.1 336 77.3 288 64 256c9.2-22.1 25.9-52 49.5-81.5L88.4 154.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z"],
    "copyright": [512, 512, [169], "f1f9", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm67.9-188.1c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8s98.3-37.5 135.8 0c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"],
    "envelope": [512, 512, [128386, 9993, 61443], "f0e0", "M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"],
    "house": [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V235l37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432V206.7L288 37.3 480 206.7V432c0 26.5-21.5 48-48 48H368V320c0-17.7-14.3-32-32-32H240c-17.7 0-32 14.3-32 32V480H144c-26.5 0-48-21.5-48-48zm144 48V320h96V480H240z"],
    "id-card": [576, 512, [62147, "drivers-license"], "f2c2", "M64 64C46.3 64 32 78.3 32 96l512 0c0-17.7-14.3-32-32-32H64zM0 112V96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64v16V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V112zm544 16H32V416c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32V128zM192 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM160 352c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48H160zM336 208c0-8.8 7.2-16 16-16H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-8.8 0-16-7.2-16-16z"],
    "infinity": [640, 512, [8734, 9854], "f534", "M0 233.5C0 157.5 61.5 96 137.5 96c39.3 0 76.7 16.8 102.7 46.1L320 231.9l79.8-89.8C425.9 112.8 463.3 96 502.5 96C578.5 96 640 157.5 640 233.5v45.1C640 354.5 578.5 416 502.5 416c-39.3 0-76.7-16.8-102.7-46.1L320 280.1l-79.8 89.8C214.1 399.2 176.7 416 137.5 416C61.5 416 0 354.5 0 278.5V233.5zM298.6 256l-82.3-92.6c-20-22.5-48.7-35.4-78.8-35.4C79.2 128 32 175.2 32 233.5v45.1C32 336.8 79.2 384 137.5 384c30.1 0 58.8-12.9 78.8-35.4L298.6 256zm42.8 0l82.3 92.6c20 22.5 48.7 35.4 78.8 35.4C560.8 384 608 336.8 608 278.5V233.5C608 175.2 560.8 128 502.5 128c-30.1 0-58.8 12.9-78.8 35.4L341.4 256z"],
    "user": [448, 512, [128100, 62144], "f007", "M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"],
    "arrow-right-to-bracket": [512, 512, ["sign-in"], "f090", "M347.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L196.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM336 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c44.2 0 80-35.8 80-80l0-288c0-44.2-35.8-80-80-80l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-96 0z"],
    "arrow-right-from-bracket": [512, 512, ["sign-out"], "f08b", "M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 176 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L356.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l96 0z"],
    "floppy-disk": [448, 512, [128190, 128426, "save"], "f0c7", "M32 96c0-17.7 14.3-32 32-32l0 96c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V65.8c4.5 1.6 8.7 4.2 12.1 7.6l74.5 74.5c6 6 9.4 14.1 9.4 22.6V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96zM96 64H288v96H96V64zM0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V170.5c0-17-6.7-33.3-18.7-45.3L354.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96zM272 320a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z"],
    "spinner": [512, 512, [], "f110", "M256 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 480a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM64 256a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 256a48 48 0 1 1 96 0A48 48 0 1 1 0 256zm464 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM120.2 391.8A16 16 0 1 0 97.6 414.4a16 16 0 1 0 22.6-22.6zM75 437a48 48 0 1 1 67.9-67.9A48 48 0 1 1 75 437zM97.6 120.2a16 16 0 1 0 22.6-22.6A16 16 0 1 0 97.6 120.2zM142.9 75A48 48 0 1 1 75 142.9 48 48 0 1 1 142.9 75zM414.4 414.4a16 16 0 1 0 -22.6-22.6 16 16 0 1 0 22.6 22.6zm-45.3-45.3A48 48 0 1 1 437 437a48 48 0 1 1 -67.9-67.9z"],
    "xmark": [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256 347.1 123.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6 324.5 411.1z"],
    "arrow-rotate-left": [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M48 192c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v92.6C103.2 75.5 174.5 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-79.9 0-150-41.8-189.7-104.8C59.8 364.8 67.7 352 80 352c6 0 11.4 3.2 14.7 8.2C128.9 413 188.4 448 256 448c106 0 192-86 192-192s-86-192-192-192c-71.1 0-133.1 38.6-166.3 96H176c8.8 0 16 7.2 16 16s-7.2 16-16 16H48z"],
    "user-plus": [640, 512, [], "f234", "M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM269.7 336c80 0 145 64.3 146.3 144H32c1.2-79.7 66.2-144 146.3-144h91.4zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3zM512 304c0 8.8 7.2 16 16 16s16-7.2 16-16V224h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H544V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H432c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80z"],
    "key": [512, 512, [128273], "f084", "M192 176c0-79.5 64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144c-11.1 0-22-1.3-32.4-3.6c-5.4-1.2-11 .4-14.9 4.3L257.4 352H208c-8.8 0-16 7.2-16 16v48H144c-8.8 0-16 7.2-16 16v48H32V398.6L194.8 235.8c4.2-4.2 5.7-10.5 3.9-16.2c-4.4-13.8-6.7-28.4-6.7-43.7zM336 0C238.8 0 160 78.8 160 176c0 15.1 1.9 29.8 5.5 43.9L4.7 380.7c-3 3-4.7 7.1-4.7 11.3V496c0 8.8 7.2 16 16 16H144c8.8 0 16-7.2 16-16V448h48c8.8 0 16-7.2 16-16V384h40c4.2 0 8.3-1.7 11.3-4.7l30-30c10 1.8 20.2 2.7 30.7 2.7c97.2 0 176-78.8 176-176S433.2 0 336 0zm32 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"],
    "lock": [448, 512, [128274], "f023", "M128 128v64H320V128c0-53-43-96-96-96s-96 43-96 96zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h16c44.2 0 80 35.8 80 80V432c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V272c0-44.2 35.8-80 80-80H96zM32 272V432c0 26.5 21.5 48 48 48H368c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48z"],
    "xmark-large": [448, 512, [], "e59b", "M420.7 36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L246.6 256 443.3 452.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 278.6 27.3 475.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L201.4 256 4.7 59.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 233.4 420.7 36.7z"],
    "phone": [512, 512, [128222, 128379], "f095", "M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z"],
    "puzzle-piece": [512, 512, [129513], "f12e", "M62 333.2l-12.8 9.6L62 333.2zM178.8 450l-9.6 12.8 9.6-12.8zM414 242.8l-12.8-9.6 12.8 9.6zm-352 0l-12.8-9.6L62 242.8zM304 64c0-19.4-10.5-35.8-25.1-46.7S244.8 0 224 0V32c14.5 0 27.1 4.4 35.7 10.9S272 56.9 272 64h32zm-25.3 46.8C293.4 99.9 304 83.5 304 64H272c0 7.1-3.8 14.8-12.4 21.2l19.2 25.6zM336 128H279.2v32H336V128zm48 104.8V176H352v56.8h32zM448 208c-19.5 0-35.9 10.6-46.8 25.3l25.6 19.2c6.4-8.6 14.1-12.4 21.2-12.4V208zm64 80c0-20.8-6.3-40.2-17.3-54.9s-27.3-25.1-46.7-25.1v32c7.1 0 14.7 3.8 21.1 12.3s10.9 21.1 10.9 35.7h32zm-64 80c19.4 0 35.8-10.5 46.7-25.1s17.3-34.1 17.3-54.9H480c0 14.5-4.4 27.1-10.9 35.7s-14.1 12.3-21.1 12.3v32zm-46.8-25.3c11 14.7 27.4 25.3 46.8 25.3V336c-7.1 0-14.8-3.8-21.2-12.4l-25.6 19.2zM384 464V343.2H352V464h32zM279.2 512H336V480H279.2v32zM272 416c0 7.1-3.8 14.8-12.4 21.2l19.2 25.6c14.7-11 25.3-27.4 25.3-46.8H272zm-48-32c14.5 0 27.1 4.4 35.7 10.9s12.3 14.1 12.3 21.1h32c0-19.4-10.5-35.8-25.1-46.7s-34.1-17.3-54.9-17.3v32zm-48 32c0-7.1 3.8-14.7 12.3-21.1s21.1-10.9 35.7-10.9V352c-20.8 0-40.2 6.3-54.9 17.3s-25.1 27.3-25.1 46.7h32zm12.4 21.2c-8.6-6.4-12.4-14.1-12.4-21.2H144c0 19.5 10.6 35.9 25.3 46.8l19.2-25.6zM48 512H168.8V480H48v32zM0 343.2V464H32V343.2H0zM96 336c-7.1 0-14.8-3.8-21.2-12.4L49.2 342.7C60.1 357.4 76.5 368 96 368V336zm32-48c0 14.5-4.4 27.1-10.9 35.7S103.1 336 96 336v32c19.4 0 35.8-10.5 46.7-25.1s17.3-34.1 17.3-54.9H128zM96 240c7.1 0 14.7 3.8 21.1 12.3s10.9 21.1 10.9 35.7h32c0-20.8-6.3-40.2-17.3-54.9S115.4 208 96 208v32zM74.8 252.4C81.2 243.8 88.9 240 96 240V208c-19.5 0-35.9 10.6-46.8 25.3l25.6 19.2zM0 176v56.8H32V176H0zm168.8-48H48v32H168.8V128zM144 64c0 19.5 10.6 35.9 25.3 46.8l19.2-25.6C179.8 78.8 176 71.1 176 64H144zM224 0c-20.8 0-40.2 6.3-54.9 17.3S144 44.6 144 64h32c0-7.1 3.8-14.7 12.3-21.1S209.5 32 224 32V0zM208 120.8c0-16.2-9.9-28.4-19.6-35.6l-19.2 25.6c5.2 3.8 6.7 7.7 6.7 10h32zM39.2 336c2.3 0 6.1 1.6 10 6.7l25.6-19.2C67.6 313.9 55.4 304 39.2 304v32zM32 343.2c0-4 3.2-7.2 7.2-7.2V304C17.5 304 0 321.5 0 343.2H32zM48 480c-8.8 0-16-7.2-16-16H0c0 26.5 21.5 48 48 48V480zm128-7.2c0 4-3.2 7.2-7.2 7.2v32c21.6 0 39.2-17.5 39.2-39.2H176zm-6.7-10c5.2 3.8 6.7 7.7 6.7 10h32c0-16.2-9.9-28.4-19.6-35.6l-19.2 25.6zM352 464c0 8.8-7.2 16-16 16v32c26.5 0 48-21.5 48-48H352zm39.2-160c-21.7 0-39.2 17.5-39.2 39.2h32c0-4 3.2-7.2 7.2-7.2V304zm35.6 19.6c-7.2-9.7-19.4-19.6-35.6-19.6v32c2.3 0 6.1 1.6 10 6.7l25.6-19.2zM168.8 160c21.6 0 39.2-17.5 39.2-39.2H176c0 4-3.2 7.2-7.2 7.2v32zM391.2 272c16.2 0 28.4-9.9 35.6-19.6l-25.6-19.2c-3.8 5.2-7.7 6.7-10 6.7v32zM32 176c0-8.8 7.2-16 16-16V128c-26.5 0-48 21.5-48 48H32zm320 56.8c0 21.6 17.5 39.2 39.2 39.2V240c-4 0-7.2-3.2-7.2-7.2H352zM39.2 240c-4 0-7.2-3.2-7.2-7.2H0C0 254.5 17.5 272 39.2 272V240zM336 160c8.8 0 16 7.2 16 16h32c0-26.5-21.5-48-48-48v32zM272 472.8c0-2.3 1.6-6.1 6.7-10l-19.2-25.6c-9.7 7.2-19.6 19.4-19.6 35.6h32zM49.2 233.3c-3.8 5.2-7.7 6.7-10 6.7v32c16.2 0 28.4-9.9 35.6-19.6L49.2 233.3zM240 120.8c0 21.6 17.5 39.2 39.2 39.2V128c-4 0-7.2-3.2-7.2-7.2H240zM279.2 480c-4 0-7.2-3.2-7.2-7.2H240c0 21.7 17.5 39.2 39.2 39.2V480zM259.6 85.2c-9.7 7.2-19.6 19.4-19.6 35.6h32c0-2.3 1.6-6.1 6.7-10L259.6 85.2z"],
    "chevron-left": [320, 512, [9001], "f053", "M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z"],
    "chevron-right": [320, 512, [9002], "f054", "M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"],
    "triangle-exclamation": [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M34.5 420.4c-1.6 2.8-2.5 6-2.5 9.3c0 10.2 8.2 18.4 18.4 18.4H461.6c10.2 0 18.4-8.2 18.4-18.4c0-3.3-.9-6.4-2.5-9.3L276.5 75.8C272.2 68.5 264.4 64 256 64s-16.2 4.5-20.5 11.8L34.5 420.4zM6.9 404.2l201-344.6C217.9 42.5 236.2 32 256 32s38.1 10.5 48.1 27.6l201 344.6c4.5 7.7 6.9 16.5 6.9 25.4c0 27.8-22.6 50.4-50.4 50.4H50.4C22.6 480 0 457.4 0 429.6c0-8.9 2.4-17.7 6.9-25.4zM256 160c8.8 0 16 7.2 16 16V304c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16zM232 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"],
    "gift": [512, 512, [127873], "f06b", "M365.1 32c-17.6 0-33.9 9-43.2 23.9l-45 72.1H288h80c26.5 0 48-21.5 48-48s-21.5-48-48-48h-2.9zm-130 96l-45-72.1C180.8 41 164.5 32 146.9 32H144c-26.5 0-48 21.5-48 48s21.5 48 48 48h80 11.1zM256 101l38.8-62c15.2-24.2 41.7-39 70.3-39H368c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h32c26.5 0 48 21.5 48 48v64c0 20.9-13.4 38.7-32 45.3V288 448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V288v-2.7C13.4 278.7 0 260.9 0 240V176c0-26.5 21.5-48 48-48H80C70 114.6 64 98 64 80C64 35.8 99.8 0 144 0h2.9c28.6 0 55.2 14.7 70.3 39L256 101zM144 160H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H64 240V160H224 144zm128 0v96H448h16c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H368 288 272zM240 288H64V448c0 17.7 14.3 32 32 32H240V288zm32 192H416c17.7 0 32-14.3 32-32V288H272V480z"],
    "books": [512, 512, [128218], "f5db", "M128 416v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V416h96zm-16 96c12.3 0 23.5-4.6 32-12.2c8.5 7.6 19.7 12.2 32 12.2h64c26.5 0 48-21.5 48-48V416 400 384 193.8l51.4 198.1 4 15.5 18 69.2c6.6 25.5 32 40.6 56.7 33.8l59.6-16.5c24.7-6.8 39.3-33 32.7-58.5l-13.9-53.7-4-15.5-63.9-246-4-15.5-18-69.2C400 9.9 374.6-5.2 349.9 1.6L290.3 18.1c-3.5 1-6.8 2.3-9.9 4C271.9 8.8 257 0 240 0H176c-12.3 0-23.5 4.6-32 12.2C135.5 4.6 124.3 0 112 0H48C21.5 0 0 21.5 0 48V96v16 16V384v16 16 48c0 26.5 21.5 48 48 48h64zM288 64.8V63.5c.3-7.2 5.1-13 10.8-14.6l59.6-16.5c6.6-1.8 14.8 2 17.2 11l14.1 54.2-87.3 24.2L288.6 68.6c-.3-1.3-.5-2.6-.6-3.8zm-32-.6c0 0 0 0 0 0V96H160V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V64.2zM176 480c-8.8 0-16-7.2-16-16V416h96v48c0 8.8-7.2 16-16 16H176zM128 128V384H32V128h96zm0-80V96H32V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16zM256 384H160V128h96V384zM397.7 128.7l59.8 230.5-87.3 24.2L310.4 152.8l87.3-24.2zm67.9 261.5l13.8 53.2c2.4 9.4-3.2 17.7-10.3 19.6l-59.6 16.5c-6.6 1.8-14.8-2-17.2-11l-14.1-54.2 87.3-24.2z"],
    "circle-user": [512, 512, [62142, "user-circle"], "f2bd", "M412.1 416.6C398.1 361.1 347.9 320 288 320H224c-59.9 0-110.1 41.1-124.1 96.6C58 375.9 32 319 32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 63-26 119.9-67.9 160.6zm-28.5 23.4C347.5 465.2 303.5 480 256 480s-91.5-14.8-127.7-39.9c4-49.3 45.3-88.1 95.7-88.1h64c50.4 0 91.6 38.8 95.7 88.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-256a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm-80-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z"],
    "pen-to-square": [512, 512, ["edit"], "f044", "M454.6 45.3l12.1 12.1c12.5 12.5 12.5 32.8 0 45.3L440 129.4 382.6 72l26.7-26.7c12.5-12.5 32.8-12.5 45.3 0zM189 265.6l171-171L417.4 152l-171 171c-4.2 4.2-9.6 7.2-15.4 8.6l-65.6 15.1L180.5 281c1.3-5.8 4.3-11.2 8.6-15.4zm197.7-243L166.4 243c-8.5 8.5-14.4 19.2-17.1 30.9l-20.9 90.6c-1.2 5.4 .4 11 4.3 14.9s9.5 5.5 14.9 4.3l90.6-20.9c11.7-2.7 22.4-8.6 30.9-17.1L489.4 125.3c25-25 25-65.5 0-90.5L477.3 22.6c-25-25-65.5-25-90.5 0zM80 64C35.8 64 0 99.8 0 144V432c0 44.2 35.8 80 80 80H368c44.2 0 80-35.8 80-80V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V432c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z"],
    "file-arrow-up": [384, 512, ["file-upload"], "f574", "M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H192V144c0 26.5 21.5 48 48 48H352V448c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4H240zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM208 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 278.6V400c0 8.8 7.2 16 16 16s16-7.2 16-16V278.6z"],
    "arrow-up-from-bracket": [448, 512, [], "e09a", "M235.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 54.6V336c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6L340.7 155.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-128-128zM32 336c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 44.2 35.8 80 80 80H368c44.2 0 80-35.8 80-80V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V336z"],
    "cloud-arrow-up": [640, 512, [62338, "cloud-upload", "cloud-upload-alt"], "f0ee", "M389.8 125.2C363.7 88.1 320.7 64 272 64c-77.4 0-140.5 61-143.9 137.5c-.6 13-9 24.4-21.3 28.8C63.2 245.7 32 287.2 32 336c0 61.9 50.1 112 112 112H512c53 0 96-43 96-96c0-36.8-20.7-68.8-51.2-84.9c-13.4-7.1-20-22.5-15.8-37.1c2-6.9 3-14.3 3-22c0-44.2-35.8-80-80-80c-12.3 0-23.9 2.8-34.3 7.7c-14.1 6.7-30.9 2.3-39.9-10.5zM272 32c59.5 0 112.1 29.5 144 74.8C430.5 99.9 446.8 96 464 96c61.9 0 112 50.1 112 112c0 10.7-1.5 21-4.3 30.8C612.3 260.2 640 302.9 640 352c0 70.7-57.3 128-128 128H144C64.5 480 0 415.5 0 336c0-62.8 40.2-116.1 96.2-135.9C100.3 106.6 177.4 32 272 32zM228.7 244.7l80-80c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L336 214.6V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V214.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"],
    "trash-can": [448, 512, [61460, "trash-alt"], "f2ed", "M164.2 39.5L148.9 64H299.1L283.8 39.5c-2.9-4.7-8.1-7.5-13.6-7.5H177.7c-5.5 0-10.6 2.8-13.6 7.5zM311 22.6L336.9 64H384h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H416V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V96H16C7.2 96 0 88.8 0 80s7.2-16 16-16H32 64h47.1L137 22.6C145.8 8.5 161.2 0 177.7 0h92.5c16.6 0 31.9 8.5 40.7 22.6zM64 96V432c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V96H64zm80 80V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16zm96 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16z"],
    "coins": [512, 512, [], "f51e", "M160 80c0 2.4 1.3 6.8 8.3 12.8c1.4 1.2 2.9 2.4 4.6 3.6c-15.4 .6-30.4 1.9-44.9 3.9V80c0-15.3 8.6-27.7 19.4-37c10.9-9.4 25.7-17.1 42.7-23.2C224.1 7.3 270 0 320 0s95.9 7.3 129.9 19.7c16.9 6.2 31.8 13.9 42.7 23.2C503.4 52.3 512 64.7 512 80l0 104 0 0 0 113.9c0 15.4-8.2 28.2-19.1 38s-25.7 17.9-42.7 24.4c-10.4 3.9-21.8 7.4-34.1 10.3v-33c8.2-2.2 15.8-4.6 22.8-7.2c14.9-5.7 25.8-12 32.7-18.2s8.5-11.1 8.5-14.2V231.7c-8.7 5.6-18.8 10.5-29.9 14.7c-10.4 3.9-21.8 7.4-34.1 10.3v-33c8.2-2.2 15.8-4.6 22.8-7.2c14.9-5.7 25.8-12 32.7-18.2s8.5-11.1 8.5-14.2V126.1c-8.8 5.4-19 10.1-30.1 14.1c-17.3 6.3-37.6 11.3-60 14.6c-1.9-1.9-3.8-3.8-5.7-5.5c-10.1-9.1-21.7-16.4-33.8-22.5c34.8-2.3 65.4-8.4 88.5-16.8c14.9-5.4 25.8-11.5 32.8-17.4c7-6 8.3-10.4 8.3-12.8s-1.3-6.8-8.3-12.8c-6.9-5.9-17.8-12-32.8-17.4C409.3 39 367.2 32 320 32s-89.3 7-119 17.8c-14.9 5.4-25.8 11.5-32.8 17.4c-7 6-8.3 10.4-8.3 12.8zM32 208c0 2.4 1.3 6.8 8.3 12.8c6.9 5.9 17.8 12 32.8 17.4C102.7 249 144.8 256 192 256s89.3-7 119-17.8c14.9-5.4 25.8-11.5 32.8-17.4c7-6 8.3-10.4 8.3-12.8s-1.3-6.8-8.3-12.8c-6.9-5.9-17.8-12-32.8-17.4C281.3 167 239.2 160 192 160s-89.3 7-119 17.8c-14.9 5.4-25.8 11.5-32.8 17.4c-7 6-8.3 10.4-8.3 12.8zM0 208c0-15.3 8.6-27.7 19.4-37c10.9-9.4 25.7-17.1 42.7-23.2C96.1 135.3 142 128 192 128s95.9 7.3 129.9 19.7c16.9 6.2 31.8 13.9 42.7 23.2c10.9 9.3 19.4 21.8 19.4 37l0 104 0 0 0 113.9c0 15.4-8.2 28.2-19.1 38s-25.7 17.9-42.7 24.4C288.1 501.3 242 509 192 509s-96.1-7.7-130.1-20.7c-17-6.5-31.8-14.6-42.7-24.4S0 441.3 0 425.9V312 208zm352 46.1c-8.8 5.4-19 10.1-30.1 14.1C287.9 280.7 242 288 192 288s-95.9-7.3-129.9-19.7c-11.1-4-21.3-8.7-30.1-14.1V312c0 3.1 1.6 8 8.5 14.2s17.8 12.6 32.7 18.2C102.9 355.7 144.8 363 192 363s89.1-7.3 118.8-18.6c14.9-5.7 25.8-12 32.7-18.2s8.5-11.1 8.5-14.2V254.1zM32 425.9c0 3.1 1.6 8 8.5 14.2s17.8 12.6 32.7 18.2C102.9 469.6 144.8 477 192 477s89.1-7.3 118.8-18.6c14.9-5.7 25.8-12 32.7-18.2s8.5-11.1 8.5-14.2V359.7c-8.7 5.6-18.8 10.5-29.9 14.7C288.1 387.4 242 395 192 395s-96.1-7.7-130.1-20.7c-11-4.2-21.1-9.1-29.9-14.7v66.2z"],
    "book-medical": [448, 512, [], "f7e6", "M0 64C0 28.7 28.7 0 64 0H400c26.5 0 48 21.5 48 48V368c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64l0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H384V416H64zM32 392.6c9.4-5.4 20.3-8.6 32-8.6H400c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H64C46.3 32 32 46.3 32 64l0 328.6zM224 96h32c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H288v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V256H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h32V128c0-17.7 14.3-32 32-32zm0 32v48c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7H160v32h48c8.8 0 16 7.2 16 16v48h32V240c0-8.8 7.2-16 16-16h48V192H272c-8.8 0-16-7.2-16-16V128H224z"],
    "file-plus": [384, 512, [], "f319", "M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H192V144c0 26.5 21.5 48 48 48H352V448c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4H240zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM176 416c0 8.8 7.2 16 16 16s16-7.2 16-16V352h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H208V256c0-8.8-7.2-16-16-16s-16 7.2-16 16v64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64z"],
    "money-bill-1-wave": [576, 512, ["money-bill-wave-alt"], "f53b", "M32 112.5l0-.1s0 0 0 0l0 0 0 0 0 0c.1-.1 .4-.6 1.3-1.2c2-1.3 4.7-1.8 6.9-1.2c18.7 5.1 37.3 8.1 55.8 9.5v.5c0 35.3-28.7 64-64 64V112.5zm0 309.9V376c35.3 0 64 28.7 64 64v6.8c-19.5-1.9-38.7-6-57.8-13.2c-2.5-.9-6.2-4.5-6.2-11.3zM128 440c0-53-43-96-96-96V216c52.9 0 95.8-42.8 96-95.6c57.8-1 113.9-15.3 165.7-28.6c4.4-1.1 8.7-2.2 13-3.3C356.9 75.8 403.3 65 448 64v8c0 53 43 96 96 96V296c-52.9 0-95.8 42.8-96 95.6c-57.8 1-113.9 15.3-165.7 28.6c-4.4 1.1-8.7 2.2-13 3.3C219.1 436.2 172.7 447 128 448v-8zm352-47.5V392c0-35.3 28.7-64 64-64v71.5c0 .1 0 .1 0 .1s0 0 0 0c-.1 .1-.4 .6-1.3 1.2c-2 1.3-4.7 1.8-6.9 1.2c-18.6-5.1-37.3-8.1-55.8-9.5zm0-327.3c19.5 1.9 38.7 6 57.8 13.2c2.5 .9 6.2 4.5 6.2 11.3V136c-35.3 0-64-28.7-64-64V65.2zM0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM400 256c0-65-44.9-128-112-128s-112 63-112 128s44.9 128 112 128s112-63 112-128zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM272 192c-8.8 0-16 7.2-16 16s7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h24 24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V208c0-8.8-7.2-16-16-16H272z"],
    "arrow-up-long": [384, 512, ["long-arrow-up"], "f176", "M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-144 144c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 54.6V496c0 8.8 7.2 16 16 16s16-7.2 16-16V54.6L324.7 171.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-144-144z"],
    "mobile-screen": [384, 512, ["mobile-android-alt"], "f3cf", "M288 32c17.7 0 32 14.3 32 32V320H64V64c0-17.7 14.3-32 32-32H288zm32 320v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352H320zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zm48 416c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16z"],
    "file-check": [384, 512, [], "f316", "M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H192V144c0 26.5 21.5 48 48 48H352V448c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4H240zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM283.3 294c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-95.4 95.4-42-42c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L154 400.6c6.2 6.2 16.4 6.2 22.6 0L283.3 294z"],
    "arrow-left": [448, 512, [8592], "f060", "M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z"],
    "circle-question": [512, 512, [62108, "question-circle"], "f059", "M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168.7-86.2c6.5-24.6 28.7-41.8 54.2-41.8H280c35.5 0 64 29 64 64.3c0 24-13.4 46.2-34.9 57.2L272 268.3V288c0 8.8-7.2 16-16 16s-16-7.2-16-16V258.5c0-6 3.4-11.5 8.7-14.3l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7c0-17.8-14.4-32.3-32-32.3H222.9c-10.9 0-20.5 7.4-23.2 17.9l-.2 .7c-2.2 8.5-11 13.7-19.5 11.4s-13.7-11-11.4-19.5l.2-.7zM232 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"],
    "circle-exclamation": [512, 512, ["exclamation-circle"], "f06a", "M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16V272c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"],
    "window-restore": [512, 512, [], "f2d2", "M432 32H208c-26.5 0-48 21.5-48 48V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V352h16c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM320 160H64c-17.7 0-32 14.3-32 32v64H352V192c0-17.7-14.3-32-32-32zM32 448c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V288H32V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"],
    "window-maximize": [512, 512, [128470], "f2d0", "M64 64C46.3 64 32 78.3 32 96v96H480V96c0-17.7-14.3-32-32-32H64zM32 224V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V224H32zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"],
    "arrow-down-long": [384, 512, ["long-arrow-down"], "f175", "M180.7 507.3c6.2 6.2 16.4 6.2 22.6 0l144-144c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 457.4 208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 441.4L59.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144z"],
    "file-excel": [384, 512, [], "f1c3", "M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H192V144c0 26.5 21.5 48 48 48H352V448c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4H240zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zm85.1 246.8c-5.1-7.2-15-9-22.3-3.9s-9 15-3.9 22.3L172.5 336l-49.6 70.8c-5.1 7.2-3.3 17.2 3.9 22.3s17.2 3.3 22.3-3.9L192 363.9l42.9 61.3c5.1 7.2 15 9 22.3 3.9s9-15 3.9-22.3L211.5 336l49.6-70.8c5.1-7.2 3.3-17.2-3.9-22.3s-17.2-3.3-22.3 3.9L192 308.1l-42.9-61.3z"],
    "spell-check": [576, 512, [], "f891", "M126.7 9.7C124.2 3.8 118.4 0 112 0s-12.2 3.8-14.7 9.7l-96 224c-3.5 8.1 .3 17.5 8.4 21s17.5-.3 21-8.4L54 192H170l23.3 54.3c3.5 8.1 12.9 11.9 21 8.4s11.9-12.9 8.4-21l-96-224zM156.3 160H67.7L112 56.6 156.3 160zM256 16V128 240c0 8.8 7.2 16 16 16H376c39.8 0 72-32.2 72-72c0-31.1-19.7-57.6-47.3-67.6C410.3 104.1 416 88.7 416 72c0-39.8-32.2-72-72-72H272c-8.8 0-16 7.2-16 16zm88 96H288V32h56c22.1 0 40 17.9 40 40s-17.9 40-40 40zm-56 32h56 32c22.1 0 40 17.9 40 40s-17.9 40-40 40H288V144zM571.3 299.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L352 473.4 251.3 372.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0l208-208z"],
    "volume-off": [320, 512, [], "f026", "M288 66.7L151.6 188c-2.9 2.6-6.7 4-10.6 4H56c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h85c3.9 0 7.7 1.4 10.6 4L288 445.3V66.7zM270.4 39.5c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8V450.2c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L134.9 352H56c-30.9 0-56-25.1-56-56V216c0-30.9 25.1-56 56-56h78.9L270.4 39.5z"],
    "check": [448, 512, [10003, 10004], "f00c", "M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z"],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", "M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z"],
    "headphones": [512, 512, [127911], "f025", "M32.6 271.6C41 155.5 137.8 64 256 64s215 91.5 223.4 207.6C466.1 261.8 449.7 256 432 256c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80V368 336 288C512 146.6 397.4 32 256 32S0 146.6 0 288v48 32 32c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48c-17.7 0-34.1 5.8-47.4 15.6zM32 336c0-26.5 21.5-48 48-48c8.8 0 16 7.2 16 16V432c0 8.8-7.2 16-16 16c-26.5 0-48-21.5-48-48V368 336zm448 0v32 32c0 26.5-21.5 48-48 48c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16c26.5 0 48 21.5 48 48z"],
    "a": [384, 512, [97], "41", "M206.7 41.8c-2.5-5.9-8.3-9.8-14.7-9.8s-12.2 3.8-14.7 9.8l-176 416c-3.4 8.1 .4 17.5 8.5 21s17.5-.4 21-8.5L67.2 384H316.8l36.5 86.2c3.4 8.1 12.8 11.9 21 8.5s11.9-12.8 8.5-21l-176-416zM303.2 352H80.8L192 89.1 303.2 352z"],
    "b": [320, 512, [98], "42", "M48 32C21.5 32 0 53.5 0 80V240 432c0 26.5 21.5 48 48 48H192c70.7 0 128-57.3 128-128c0-52.8-32-98.2-77.7-117.7C270 213.9 288 181 288 144c0-61.9-50.1-112-112-112H48zM192 256c53 0 96 43 96 96s-43 96-96 96H48c-8.8 0-16-7.2-16-16V256H176h16zm-16-32H32V80c0-8.8 7.2-16 16-16H176c44.2 0 80 35.8 80 80s-35.8 80-80 80z"],
    "font-case": [640, 512, [], "f866", "M190.9 42.3C188.6 36.1 182.6 32 176 32s-12.6 4.1-14.9 10.3l-160 416c-3.2 8.2 .9 17.5 9.2 20.7s17.5-.9 20.7-9.2L76.2 352H275.8l45.3 117.7c3.2 8.2 12.4 12.4 20.7 9.2s12.4-12.4 9.2-20.7l-160-416zM263.5 320H88.5L176 92.6 263.5 320zM624 160c-8.8 0-16 7.2-16 16v34.7C585.4 179.9 549 160 508 160c-68.5 0-124 55.5-124 124v72c0 68.5 55.5 124 124 124c41 0 77.4-19.9 100-50.7V464c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16zM416 284c0-50.8 41.2-92 92-92s92 41.2 92 92v72c0 50.8-41.2 92-92 92s-92-41.2-92-92V284z"],
    "square-chevron-down": [448, 512, ["chevron-square-down"], "f329", "M384 448c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0zm64-32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM212.7 347.3l-112-112c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 313.4 324.7 212.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"],
    "square-chevron-up": [448, 512, ["chevron-square-up"], "f32c", "M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm235.3 68.7l112 112c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 198.6 123.3 299.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l112-112c6.2-6.2 16.4-6.2 22.6 0z"],
    "book-circle-arrow-up": [640, 512, [], "e0bd", "M64 0C28.7 0 0 28.7 0 64L0 448l0 0c0 35.3 28.7 64 64 64H394.8c-12.9-9.1-24.5-19.9-34.6-32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H326.6c-2.9-10.3-4.9-21-5.9-32H64c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32H400c8.8 0 16 7.2 16 16V211.2c10.1-5.2 20.8-9.4 32-12.6V48c0-26.5-21.5-48-48-48H64zM384 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-211.3 3.3c6.2 6.2 16.4 6.2 22.6 0L480 342.6V432c0 8.8 7.2 16 16 16s16-7.2 16-16V342.6l28.7 28.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0l-56 56c-6.2 6.2-6.2 16.4 0 22.6z"],
    "file-pdf": [512, 512, [], "f1c1", "M64 480H96v32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H220.1c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9V288H352V192H240c-26.5 0-48-21.5-48-48V32H64C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16H351.5zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"],
    "book-open-reader": [512, 512, ["book-reader"], "f5da", "M256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160A96 96 0 1 0 256 0a96 96 0 1 0 0 192zm0 48s-56.8-42.6-224-47.5C14.4 191.9 0 206.3 0 224V432c0 17.7 14.4 31.9 32 32.7c114.9 4.7 186.9 33.7 208.8 43.8c4.8 2.2 9.9 3.5 15.1 3.5s10.4-1.3 15.1-3.5c21.9-10.1 93.9-39.1 208.8-43.8c17.7-.7 32-15 32-32.7V224c0-17.7-14.4-32.1-32-31.5C312.8 197.4 256 240 256 240zm-18.9 25.8L240 268V473.3c-34-13.8-104.4-36.4-206.7-40.6c-.5 0-.9-.2-1.2-.5c-.1-.1-.1-.1-.1-.2l0 0 0 0 0 0 0 0 0 0 0 0V224.5c80.5 2.4 133.2 13.9 164.9 24.1c15.9 5.1 26.7 9.9 33 13.2c3.2 1.6 5.3 2.9 6.4 3.6c.4 .3 .7 .5 .9 .6zM272 268l2.9-2.2c.1-.1 .4-.3 .9-.6c1.1-.7 3.2-1.9 6.4-3.6c6.3-3.3 17-8.1 33-13.2c31.8-10.2 84.5-21.6 164.9-24.1V432v0l0 .1c0 0-.1 .1-.1 .1c-.3 .3-.7 .5-1.2 .5C376.4 436.9 306 459.5 272 473.3V268z"],
    "right-to-bracket": [512, 512, ["sign-in-alt"], "f2f6", "M319.2 257.8c.5-.5 .8-1.1 .8-1.8s-.3-1.4-.8-1.8L187.3 129.8c-1.2-1.2-2.9-1.8-4.6-1.8c-3.7 0-6.7 3-6.7 6.7l0 57.3c0 8.8-7.2 16-16 16L40 208c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l120 0c8.8 0 16 7.2 16 16l0 57.3c0 3.7 3 6.7 6.7 6.7c1.7 0 3.3-.6 4.6-1.8L319.2 257.8zM352 256c0 9.5-3.9 18.6-10.8 25.1L209.2 405.5c-7.2 6.8-16.7 10.5-26.5 10.5c-21.4 0-38.7-17.3-38.7-38.7l0-41.3L40 336c-22.1 0-40-17.9-40-40l0-80c0-22.1 17.9-40 40-40l104 0 0-41.3c0-21.4 17.3-38.7 38.7-38.7c9.9 0 19.3 3.8 26.5 10.5L341.2 230.9c6.9 6.5 10.8 15.6 10.8 25.1zM336 448l96 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l96 0c44.2 0 80 35.8 80 80l0 288c0 44.2-35.8 80-80 80l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"],
    "magnifying-glass-plus": [512, 512, ["search-plus"], "f00e", "M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM192 304c0 8.8 7.2 16 16 16s16-7.2 16-16V224h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H224V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v80H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80z"],
    "magnifying-glass-minus": [512, 512, ["search-minus"], "f010", "M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM112 192c-8.8 0-16 7.2-16 16s7.2 16 16 16H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"],
    "book-arrow-up": [448, 512, [], "e0ba", "M64 0C28.7 0 0 28.7 0 64L0 448l0 0c0 35.3 28.7 64 64 64H176V480H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H176V384H64c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32H400c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16H304v32h80v64H304v32H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H416V413.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H64zm68.7 228.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 182.6 224 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-313.4 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0l-96 96z"],
    "share-nodes": [448, 512, ["share-alt"], "f1e0", "M448 112c0 44.2-35.8 80-80 80c-22.9 0-43.6-9.6-58.1-25l-151 75.5c.8 4.4 1.1 8.9 1.1 13.5s-.4 9.1-1.1 13.5l151 75.5c14.6-15.4 35.2-25 58.1-25c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-9.7 1.7-19 4.9-27.7L147.2 299.5c-14.3 22-39 36.5-67.2 36.5c-44.2 0-80-35.8-80-80s35.8-80 80-80c28.2 0 52.9 14.5 67.2 36.5l145.7-72.9c-3.2-8.6-4.9-17.9-4.9-27.7c0-44.2 35.8-80 80-80s80 35.8 80 80zM80 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM416 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM368 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"],
    "cart-shopping": [576, 512, [128722, "shopping-cart"], "f07a", "M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16H53.9c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.2c-15.2 0-28.3-10.7-31.4-25.6L152 288H466.5c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8H99.1C92.5 13 74.4 0 53.9 0H16zm90.1 64H539.5L497.6 231.8C494 246 481.2 256 466.5 256H145.4L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z"],
    "pen-clip": [512, 512, ["pen-alt"], "f305", "M385.4 41.9c12.5-12.5 32.8-12.5 45.3 0l39.4 39.4c12.5 12.5 12.5 32.8 0 45.3L421.7 175 337 90.3l48.4-48.4zM291.7 90.3L99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9 .9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1L492.7 149.3c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0L314.3 67.7 301.3 54.6c-25-25-65.5-25-90.5 0L100.7 164.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L233.4 77.3c12.5-12.5 32.8-12.5 45.3 0l13.1 13.1zM314.3 113L399 197.7 206.9 389.8c-43.6 43.6-99 73.2-159.4 85.3l-13.2 2.6 2.6-13.2c12.1-60.4 41.8-115.9 85.3-159.4L314.3 113z"],
    "wifi": [640, 512, ["wifi-3", "wifi-strong"], "f1eb", "M27.3 184.4C102.4 110 205.8 64 320 64s217.6 46 292.7 120.4c6.3 6.2 16.4 6.2 22.6-.1s6.2-16.4-.1-22.6C554.3 81.5 442.9 32 320 32S85.7 81.5 4.7 161.7c-6.3 6.2-6.3 16.3-.1 22.6s16.3 6.3 22.6 .1zM320 224c70.5 0 134.4 28.5 180.7 74.7c6.3 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-52.1-51.9-123.9-84-203.3-84s-151.2 32.1-203.3 84c-6.3 6.2-6.3 16.4 0 22.6s16.4 6.3 22.6 0C185.6 252.5 249.5 224 320 224zm0 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"],
    "wifi-slash": [640, 512, [], "f6ac", "M3.4 6.1C8.9-.8 19-2 25.9 3.4l608 480c6.9 5.5 8.1 15.5 2.6 22.5s-15.5 8.1-22.5 2.6L6.1 28.6C-.8 23.1-2 13 3.4 6.1zm394.7 230l-54.7-43.2c70 5.6 133 36.3 179.9 83.1c6.3 6.2 6.3 16.4 0 22.6s-16.4 6.3-22.6 0c-28.4-28.3-63.5-50-102.6-62.5zM208.5 249.5c-25.8 12.5-49.1 29.2-69.2 49.2c-6.3 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6c19-18.9 40.6-35.2 64.2-48.3l27.6 21.8zM201.7 81.1L171.5 57.2C218 40.9 267.9 32 320 32c122.9 0 234.3 49.5 315.3 129.7c6.3 6.2 6.3 16.3 .1 22.6s-16.3 6.3-22.6 .1C537.6 110 434.2 64 320 64c-41.1 0-80.8 6-118.3 17.1zM48.8 123.4l26 20.5C57.9 156.2 42 169.8 27.3 184.4c-6.3 6.2-16.4 6.2-22.6-.1s-6.2-16.4 .1-22.6c13.8-13.7 28.5-26.5 44-38.3zM268.1 453.5a64 64 0 1 1 103.7-75 64 64 0 1 1 -103.7 75zM352 416a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"],

  };

  bunker(function () {
    defineIcons('fal', icons);
    defineIcons('fa-light', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "0": [320, 512, [], "30", "M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 80C98.1 80 48 130.1 48 192V320c0 61.9 50.1 112 112 112s112-50.1 112-112V192c0-61.9-50.1-112-112-112z"],
    "at": [512, 512, [61946], "40", "M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24v80 28c0 24.3 19.7 44 44 44s44-19.7 44-44V256c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"],
    "bars": [448, 512, ["navicon"], "f0c9", "M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H424c13.3 0 24 10.7 24 24z"],
    "book-blank": [448, 512, [128213, 128215, 128216, 128217, "book-alt"], "f5d9", "M88 0C39.4 0 0 39.4 0 88V424H.4c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V394.6c18.9-9 32-28.3 32-50.6V56c0-30.9-25.1-56-56-56H88zM368 400v64H80c-17.7 0-32-14.3-32-32s14.3-32 32-32H368zM80 352c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40H392c4.4 0 8 3.6 8 8V344c0 4.4-3.6 8-8 8H80z"],
    "book-copy": [576, 512, [], "e0be", "M192 88c0-48.6 39.4-88 88-88H528c26.5 0 48 21.5 48 48V160v96c0 20.9-13.4 38.7-32 45.3V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H520 272c-44.2 0-80-35.8-80-80V88zM528 48H280c-22.1 0-40 17.9-40 40V262.7c9.8-4.3 20.6-6.7 32-6.7H520h8V160 48zM272 304c-17.7 0-32 14.3-32 32s14.3 32 32 32H496V304H272zM160 96v48H88c-22.1 0-40 17.9-40 40V358.7c9.8-4.3 20.6-6.7 32-6.7h81.1c2.5 17.7 9.2 34 18.9 48H80c-17.7 0-32 14.3-32 32s14.3 32 32 32H304V448h48v16h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H328 80c-44.2 0-80-35.8-80-80V184c0-48.6 39.4-88 88-88h72z"],
    "book-open": [576, 512, [128214, 128366], "f518", "M156 32C100.6 32 48.8 46.6 27.1 53.6C10.3 59 0 74.5 0 91.1V403.5c0 26.1 24 44.2 48 40.2c19.8-3.3 54.8-7.7 100-7.7c54 0 97.5 25.5 112.5 35.6c7.5 5 16.8 8.4 27 8.4c11.5 0 21.6-4.2 29.3-9.9C330.2 460.3 369.1 436 428 436c47.7 0 80.5 4 99 7.2c23.9 4.1 49-13.8 49-40.6V91.1c0-16.5-10.3-32.1-27.1-37.5C527.2 46.6 475.4 32 420 32c-36.8 0-71.8 6.4-97.4 12.7c-12.8 3.2-23.5 6.3-30.9 8.7c-1.3 .4-2.6 .8-3.7 1.2c-1.1-.4-2.4-.8-3.7-1.2c-7.5-2.4-18.1-5.5-30.9-8.7C227.8 38.4 192.8 32 156 32zM264 97.3V417.9C238 404.2 196.8 388 148 388c-42.9 0-77.4 3.7-100 7.1V97.3C70.3 90.6 112.4 80 156 80c31.6 0 62.6 5.6 85.9 11.3c8.6 2.1 16.1 4.2 22.1 6zm48 319.2V97.3c6-1.8 13.5-3.9 22.1-6C357.4 85.6 388.4 80 420 80c43.6 0 85.7 10.6 108 17.3V394.7c-21.7-3.3-54.9-6.7-100-6.7c-51.4 0-90.8 15-116 28.6z"],
    "book-open-cover": [640, 512, ["book-open-alt"], "e0c0", "M512 337.2V52.4L344 77V373l168-35.8zM296 373V77L128 52.4V337.2L296 373zM523.4 2.2C542.7-.7 560 14.3 560 33.8V350.1c0 15.1-10.6 28.1-25.3 31.3l-201.3 43c-8.8 1.9-17.9 1.9-26.7 0l-201.3-43C90.6 378.3 80 365.2 80 350.1V33.8C80 14.3 97.3-.7 116.6 2.2L320 32 523.4 2.2zM38.3 23.7l10.2 2c-.3 2.7-.5 5.4-.5 8.1V74.6 342.1v66.7l265.8 54.5c2 .4 4.1 .6 6.2 .6s4.2-.2 6.2-.6L592 408.8V342.1 74.6 33.8c0-2.8-.2-5.5-.5-8.1l10.2-2C621.5 19.7 640 34.8 640 55V421.9c0 15.2-10.7 28.3-25.6 31.3L335.8 510.4c-5.2 1.1-10.5 1.6-15.8 1.6s-10.6-.5-15.8-1.6L25.6 453.2C10.7 450.2 0 437.1 0 421.9V55C0 34.8 18.5 19.7 38.3 23.7z"],
    "volume-high": [640, 512, [128266, "volume-up"], "f028", "M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.8 640 346.2 640 256s-41.5-170.8-106.4-223.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM159.9 201.9L272 102.3V409.7L159.9 310.1c-4.4-3.9-10.1-6.1-15.9-6.1H56c-4.4 0-8-3.6-8-8V216c0-4.4 3.6-8 8-8h88c5.9 0 11.6-2.2 15.9-6.1zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9L270.4 472.5c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8V61.8C320 45.3 306.7 32 290.2 32z"],
    "waveform": [640, 512, [], "f8f1", "M320 0c12 0 22.1 8.8 23.8 20.7l42 304.4L424.3 84.2c1.9-11.7 12-20.3 23.9-20.2s21.9 8.9 23.6 20.6l28.2 197.3 20.5-102.6c2.2-10.8 11.3-18.7 22.3-19.3s20.9 6.4 24.2 16.9L593.7 264H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c-10.5 0-19.8-6.9-22.9-16.9l-4.1-13.4-29.4 147c-2.3 11.5-12.5 19.6-24.2 19.3s-21.4-9-23.1-20.6L446.7 248.3l-39 243.5c-1.9 11.7-12.1 20.3-24 20.2s-21.9-8.9-23.5-20.7L320 199.6 279.8 491.3c-1.6 11.8-11.6 20.6-23.5 20.7s-22.1-8.5-24-20.2l-39-243.5L167.8 427.4c-1.7 11.6-11.4 20.3-23.1 20.6s-21.9-7.8-24.2-19.3l-29.4-147-4.1 13.4C83.8 305.1 74.5 312 64 312H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H46.3l26.8-87.1c3.2-10.5 13.2-17.5 24.2-16.9s20.2 8.5 22.3 19.3l20.5 102.6L168.2 84.6c1.7-11.7 11.7-20.5 23.6-20.6s22 8.5 23.9 20.2l38.5 240.9 42-304.4C297.9 8.8 308 0 320 0z"],
    "microphone": [384, 512, [], "f130", "M240 96V256c0 26.5-21.5 48-48 48s-48-21.5-48-48V96c0-26.5 21.5-48 48-48s48 21.5 48 48zM96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96S96 43 96 96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"],
    "file-pen": [576, 512, [128221, "file-edit"], "f31c", "M64 464H262.6l-5.1 20.5c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V285.7l-48 48V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"],
    "eye": [576, 512, [128065], "f06e", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"],
    "eye-slash": [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"],
    "copyright": [512, 512, [169], "f1f9", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"],
    "envelope": [512, 512, [128386, 9993, 61443], "f0e0", "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"],
    "house": [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5V432c0 44.2 35.8 80 80 80H432c44.2 0 80-35.8 80-80V245.5l24.5 20.8c10.1 8.6 25.3 7.3 33.8-2.8s7.3-25.3-2.8-33.8l-264-224zM112 432V204.8L288 55.5 464 204.8V432c0 17.7-14.3 32-32 32H384V312c0-22.1-17.9-40-40-40H232c-22.1 0-40 17.9-40 40V464H144c-17.7 0-32-14.3-32-32zm128 32V320h96V464H240z"],
    "id-card": [576, 512, [62147, "drivers-license"], "f2c2", "M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"],
    "infinity": [640, 512, [8734, 9854], "f534", "M0 237.3C0 159.3 63.3 96 141.3 96c39 0 76.2 16.1 102.9 44.5L320 221l75.8-80.5C422.5 112.1 459.7 96 498.7 96c78 0 141.3 63.3 141.3 141.3v37.4c0 78-63.3 141.3-141.3 141.3c-39 0-76.2-16.1-102.9-44.5L320 291l-75.8 80.5C217.5 399.9 180.3 416 141.3 416C63.3 416 0 352.7 0 274.7V237.3zM287 256l-77.8-82.6c-17.6-18.7-42.2-29.4-68-29.4C89.8 144 48 185.8 48 237.3v37.4c0 51.5 41.8 93.3 93.3 93.3c25.7 0 50.3-10.6 68-29.4L287 256zm65.9 0l77.8 82.6c17.6 18.7 42.2 29.4 68 29.4c51.5 0 93.3-41.8 93.3-93.3V237.3c0-51.5-41.8-93.3-93.3-93.3c-25.7 0-50.3 10.6-68 29.4L353 256z"],
    "user": [448, 512, [128100, 62144], "f007", "M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"],
    "arrow-right-to-bracket": [512, 512, ["sign-in"], "f090", "M217 401L345 273c9.4-9.4 9.4-24.6 0-33.9L217 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM344 80l80 0c22.1 0 40 17.9 40 40l0 272c0 22.1-17.9 40-40 40l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c48.6 0 88-39.4 88-88l0-272c0-48.6-39.4-88-88-88l-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24z"],
    "arrow-right-from-bracket": [512, 512, ["sign-out"], "f08b", "M505 273c9.4-9.4 9.4-24.6 0-33.9L377 111c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L184 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l246.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 273zM168 80c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l80 0z"],
    "floppy-disk": [448, 512, [128190, 128426, "save"], "f0c7", "M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"],
    "spinner": [512, 512, [], "f110", "M288 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM448 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM32 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM75 437a32 32 0 1 0 45.3-45.3A32 32 0 1 0 75 437zm316.8 0A32 32 0 1 0 437 391.8 32 32 0 1 0 391.8 437zM75 75a32 32 0 1 0 45.3 45.3A32 32 0 1 0 75 75z"],
    "xmark": [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"],
    "arrow-rotate-left": [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"],
    "user-plus": [640, 512, [], "f234", "M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM269.7 352c65.7 0 120.1 48.7 129 112H49.3c8.9-63.3 63.3-112 129-112h91.4zm-91.4-48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H224 178.3zM504 312c0 13.3 10.7 24 24 24s24-10.7 24-24V248h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H552V136c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H440c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"],
    "key": [512, 512, [128273], "f084", "M208 176c0-70.7 57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128c-10.4 0-20.5-1.2-30.1-3.6c-8.1-2-16.7 .4-22.6 6.4L254.1 336H200c-13.3 0-24 10.7-24 24v40H136c-13.3 0-24 10.7-24 24v40H48V385.9L205.2 228.7c5.9-5.9 8.3-14.5 6.4-22.6c-2.3-9.6-3.6-19.7-3.6-30.1zM336 0C238.8 0 160 78.8 160 176c0 9.5 .7 18.8 2.2 27.9L7 359c-4.5 4.5-7 10.6-7 17V488c0 13.3 10.7 24 24 24H136c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l27.2-27.2c9.1 1.4 18.4 2.2 27.9 2.2c97.2 0 176-78.8 176-176S433.2 0 336 0zm32 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"],
    "lock": [448, 512, [128274], "f023", "M144 128v64H304V128c0-44.2-35.8-80-80-80s-80 35.8-80 80zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zM48 256V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V256c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16z"],
    "xmark-large": [448, 512, [], "e59b", "M41 39C31.6 29.7 16.4 29.7 7 39S-2.3 63.6 7 73l183 183L7 439c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l183-183L407 473c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-183-183L441 73c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-183 183L41 39z"],
    "phone": [512, 512, [128222, 128379], "f095", "M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 295.2 175.2 485.6 400.1 509.5c9.8 1 19.6 1.8 29.6 2.2c0 0 0 0 0 0c0 0 .1 0 .1 0c6.1 .2 12.1 .4 18.2 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM441.5 464C225.8 460.5 51.5 286.2 48.1 70.5l99.2-21.3 43 100.4L154.4 179c-18.2 14.9-22.9 40.8-11.1 61.2c30.9 53.3 75.3 97.7 128.6 128.6c20.4 11.8 46.3 7.1 61.2-11.1l29.4-35.9 100.4 43L441.5 464zM48 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0s0 0 0 0"],
    "puzzle-piece": [512, 512, [129513], "f12e", "M275.2 107.4L261.6 87.6l13.6 19.8zM404.6 323.2l-19.8 13.6 19.8-13.6zM275.3 470.5l-17.3-16.6 17.3 16.6zM41.5 323.3l16.6-17.3L41.5 323.3zM188.7 470.5l-17.3 16.6 17.3-16.6zM404.6 236.8l-19.8-13.6 19.8 13.6zm-363.1-.1l16.6 17.3L41.5 236.7zM188.8 107.4l-13.6 19.8 13.6-19.8zm13.6-19.8C194.4 82.1 192 76.2 192 72H144c0 23.8 13.7 43.2 31.2 55.2l27.2-39.6zM56 144H185.3V96H56v48zm-8 86.1V152H0v78.1H48zm10.1 24c4.3-4.2 9.2-6.1 13.9-6.1V200c-18.5 0-34.9 7.7-47.1 19.4l33.3 34.6zM72 248c9.9 0 24 10.7 24 32h48c0-40.6-28.9-80-72-80v48zm24 32c0 21.3-14.1 32-24 32v48c43.1 0 72-39.4 72-80H96zM72 312c-4.7 0-9.5-1.9-13.9-6.1L24.9 340.6C37.1 352.3 53.5 360 72 360V312zM48 456V329.9H0V456H48zm134.1 8H56v48H182.1V464zM152 440c0 18.5 7.7 34.9 19.4 47.1l34.6-33.3c-4.2-4.3-6.1-9.2-6.1-13.9H152zm80-72c-40.6 0-80 28.9-80 72h48c0-9.9 10.7-24 32-24V368zm80 72c0-43.1-39.4-72-80-72v48c21.3 0 32 14.1 32 24h48zm-19.4 47.1C304.3 474.9 312 458.5 312 440H264c0 4.7-1.9 9.5-6.1 13.9l34.6 33.3zM360 464H281.9v48H360V464zm8-137.3V456h48V326.7H368zm72-6.7c-4.2 0-10.1-2.4-15.6-10.4l-39.6 27.2c12 17.6 31.4 31.2 55.2 31.2V320zm24-40c0 13-4 23.8-9.3 30.9s-10.7 9.1-14.7 9.1v48c22.5 0 41-12.2 53.1-28.3S512 302.4 512 280H464zm-24-40c4 0 9.5 2.1 14.7 9.1s9.3 17.9 9.3 30.9h48c0-22.4-6.8-43.5-18.9-59.7S462.5 192 440 192v48zm-15.6 10.4c5.5-8 11.4-10.4 15.6-10.4V192c-23.8 0-43.2 13.7-55.2 31.2l39.6 27.2zM368 152v81.3h48V152H368zm-89.3-8H360V96H278.7v48zM272 72c0 4.2-2.4 10.1-10.4 15.6l27.2 39.6C306.3 115.2 320 95.8 320 72H272zM232 48c13 0 23.8 4 30.9 9.3s9.1 10.7 9.1 14.7h48c0-22.5-12.2-41-28.3-53.1S254.4 0 232 0V48zM192 72c0-4 2.1-9.5 9.1-14.7S219 48 232 48V0c-22.4 0-43.5 6.8-59.7 18.9S144 49.5 144 72h48zm104 41.3c0 6.3-3.3 11.2-7.2 13.9L261.6 87.6C253.8 93 248 102.2 248 113.3h48zM398.7 344c-6.3 0-11.2-3.3-13.9-7.2l39.6-27.2c-5.3-7.8-14.6-13.6-25.6-13.6v48zM416 326.7c0 9.5-7.7 17.3-17.3 17.3V296c-17 0-30.7 13.8-30.7 30.7h48zM360 512c30.9 0 56-25.1 56-56H368c0 4.4-3.6 8-8 8v48zM248 478.1c0 18.7 15.2 33.9 33.9 33.9V464c7.8 0 14.1 6.3 14.1 14.1H248zm9.9-24.2c-5.5 5.7-9.9 14.1-9.9 24.2h48c0 4.4-1.9 7.4-3.4 9l-34.6-33.3zM182.1 512c18.7 0 33.9-15.2 33.9-33.9H168c0-7.8 6.3-14.1 14.1-14.1v48zM33.9 296C15.2 296 0 311.2 0 329.9H48c0 7.8-6.3 14.1-14.1 14.1V296zm24.2 9.9C52.4 300.5 44 296 33.9 296v48c-4.4 0-7.4-1.9-9-3.4l33.3-34.6zM416 152c0-30.9-25.1-56-56-56v48c4.4 0 8 3.6 8 8h48zM0 230.1C0 248.8 15.2 264 33.9 264V216c7.8 0 14.1 6.3 14.1 14.1H0zM398.7 216c9.5 0 17.3 7.7 17.3 17.3H368c0 17 13.8 30.7 30.7 30.7V216zM56 96C25.1 96 0 121.1 0 152H48c0-4.4 3.6-8 8-8V96zM216 478.1c0-10.1-4.5-18.5-9.9-24.2l-34.6 33.3c-1.5-1.6-3.4-4.6-3.4-9h48zM384.8 223.2c2.7-3.9 7.6-7.2 13.9-7.2v48c11.1 0 20.3-5.8 25.6-13.6l-39.6-27.2zM168 113.3c0-9.5 7.7-17.3 17.3-17.3v48c17 0 30.7-13.8 30.7-30.7H168zM278.7 96c9.5 0 17.3 7.7 17.3 17.3H248c0 17 13.8 30.7 30.7 30.7V96zM33.9 264c10.1 0 18.5-4.5 24.2-9.9L24.9 219.4c1.6-1.5 4.6-3.4 9-3.4v48zM0 456c0 30.9 25.1 56 56 56V464c-4.4 0-8-3.6-8-8H0zM175.2 127.2c-3.9-2.7-7.2-7.6-7.2-13.9h48c0-11.1-5.8-20.3-13.6-25.6l-27.2 39.6z"],
    "chevron-left": [320, 512, [9001], "f053", "M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"],
    "chevron-right": [320, 512, [9002], "f054", "M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"],
    "triangle-exclamation": [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5H62.5c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184z"],
    "gift": [512, 512, [127873], "f06b", "M231.9 44.4C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88c0 14.4 3.5 28 9.6 40H48c-26.5 0-48 21.5-48 48v64c0 20.9 13.4 38.7 32 45.3V288 448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V288v-2.7c18.6-6.6 32-24.4 32-45.3V176c0-26.5-21.5-48-48-48H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41zM464 176v64H432 288V176h72H464zm-240 0v64H80 48V176H152h72zm0 112V464H96c-8.8 0-16-7.2-16-16V288H224zm64 176V288H432V448c0 8.8-7.2 16-16 16H288zm72-336H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40s-17.9 40-40 40zm-136 0H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8L225.3 128H224z"],
    "books": [512, 512, [128218], "f5db", "M48 416v48h64V416H48zm88 89.6c-7.1 4.1-15.3 6.4-24 6.4H48c-26.5 0-48-21.5-48-48V416 392 368 144 120 96 48C0 21.5 21.5 0 48 0h64c8.7 0 16.9 2.3 24 6.4C143.1 2.3 151.3 0 160 0h64c20.6 0 38.1 12.9 45 31.1c5.6-6.1 12.9-10.7 21.4-13L349.9 1.6c24.7-6.8 50.1 8.3 56.7 33.8l18 69.2 6 23.2 61.8 238.3 6 23.2 11.9 46c6.6 25.5-8 51.7-32.7 58.5l-59.6 16.5c-24.7 6.8-50.1-8.3-56.7-33.8l-18-69.2-6-23.2L275.6 145.9 272 132.2V144 368v24 24 48c0 26.5-21.5 48-48 48H160c-8.7 0-16.9-2.3-24-6.4zM160 464h64V416H160v48zM112 48H48V96h64V48zm0 96H48V368h64V144zm48-48h64V48H160V96zm64 272V144H160V368h64zm216.1-12.3l-55.8-215-56.5 15.6 55.8 215 56.5-15.6zm-44.4 62.1l11.9 45.7L464 447.9c0-.1 0-.2 0-.3l0-.1-11.7-45.2-56.5 15.6zm-79.9-308l56.5-15.6L360.4 48.5 304 64.1c0 .1 0 .2 0 .4l11.7 45.2z"],
    "circle-user": [512, 512, [62142, "user-circle"], "f2bd", "M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z"],
    "pen-to-square": [512, 512, ["edit"], "f044", "M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"],
    "file-arrow-up": [384, 512, ["file-upload"], "f574", "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zM216 408V305.9l31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31V408c0 13.3 10.7 24 24 24s24-10.7 24-24z"],
    "arrow-up-from-bracket": [448, 512, [], "e09a", "M241 7c-9.4-9.4-24.6-9.4-33.9 0L79 135c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87V328c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l87 87c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L241 7zM48 344c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V344c0-13.3-10.7-24-24-24s-24 10.7-24 24v80c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V344z"],
    "cloud-arrow-up": [640, 512, [62338, "cloud-upload", "cloud-upload-alt"], "f0ee", "M354.9 121.7c13.8 16 36.5 21.1 55.9 12.5c8.9-3.9 18.7-6.2 29.2-6.2c39.8 0 72 32.2 72 72c0 4-.3 7.9-.9 11.7c-3.5 21.6 8.1 42.9 28.1 51.7C570.4 276.9 592 308 592 344c0 46.8-36.6 85.2-82.8 87.8c-.6 0-1.3 .1-1.9 .2H504 144c-53 0-96-43-96-96c0-41.7 26.6-77.3 64-90.5c19.2-6.8 32-24.9 32-45.3l0-.2v0 0c0-66.3 53.7-120 120-120c36.3 0 68.8 16.1 90.9 41.7zM512 480v-.2c71.4-4.1 128-63.3 128-135.8c0-55.7-33.5-103.7-81.5-124.7c1-6.3 1.5-12.8 1.5-19.3c0-66.3-53.7-120-120-120c-17.4 0-33.8 3.7-48.7 10.3C360.4 54.6 314.9 32 264 32C171.2 32 96 107.2 96 200l0 .2C40.1 220 0 273.3 0 336c0 79.5 64.5 144 144 144H464h40 8zM223 255c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V384c0 13.3 10.7 24 24 24s24-10.7 24-24V249.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"],
    "trash-can": [448, 512, [61460, "trash-alt"], "f2ed", "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"],
    "coins": [512, 512, [], "f51e", "M176 88v0c0 .1 .1 .6 .6 1.5c.6 1.2 2 3.1 4.7 5.5c.4 .3 .8 .7 1.2 1c-18.7 .4-36.9 1.7-54.4 4.1V88c0-18 9.7-32.4 21.1-42.7s26.7-18.5 43.5-24.9C226.4 7.5 271.5 0 320 0s93.6 7.5 127.3 20.3c16.8 6.4 32.1 14.6 43.5 24.9S512 70 512 88V192 296c0 18-9.7 32.4-21.1 42.7s-26.7 18.5-43.5 24.9c-9.6 3.7-20.1 6.9-31.3 9.6V323.6c5.1-1.5 9.8-3.1 14.2-4.8c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.6-1.1 .6-1.5 .6-1.5v0V252.4c-5.3 2.6-10.9 5-16.7 7.2c-9.6 3.7-20.1 6.9-31.3 9.6V219.6c5.1-1.5 9.8-3.1 14.2-4.8c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5v0 0V148.4c-5.3 2.6-10.9 5-16.7 7.2c-13.7 5.2-29.4 9.6-46.3 12.9c-5.1-7.5-11-13.9-16.8-19.1c-10.1-9.1-21.8-16.5-34-22.6c31.7-2.3 59.3-8.2 80-16.1c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5v0 0 0c0 0 0-.5-.6-1.5c-.6-1.2-2-3.1-4.7-5.5c-5.5-5-14.9-10.6-28.5-15.7C403.2 54.9 364.2 48 320 48s-83.2 6.9-110.2 17.2c-13.6 5.2-23 10.8-28.5 15.7c-2.7 2.4-4.1 4.3-4.7 5.5c-.6 1.1-.6 1.5-.6 1.5l0 0zM48 216v0c0 .1 .1 .6 .6 1.5c.6 1.2 2 3.1 4.7 5.5c5.5 5 14.9 10.6 28.5 15.7c27 10.3 66 17.2 110.2 17.2s83.2-6.9 110.2-17.2c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5v0 0 0c0 0 0-.5-.6-1.5c-.6-1.2-2-3.1-4.7-5.5c-5.5-5-14.9-10.6-28.5-15.7c-27-10.3-66-17.2-110.2-17.2s-83.2 6.9-110.2 17.2c-13.6 5.2-23 10.8-28.5 15.7c-2.7 2.4-4.1 4.3-4.7 5.5c-.6 1.1-.6 1.5-.6 1.5l0 0zM0 216c0-18 9.7-32.4 21.1-42.7s26.7-18.5 43.5-24.9C98.4 135.5 143.5 128 192 128s93.6 7.5 127.3 20.3c16.8 6.4 32.1 14.6 43.5 24.9S384 198 384 216V320 424c0 18-9.7 32.4-21.1 42.7s-26.7 18.5-43.5 24.9C285.6 504.5 240.5 512 192 512s-93.6-7.5-127.3-20.3c-16.8-6.4-32-14.6-43.5-24.9S0 442 0 424V320 216zM336 320V276.4c-5.3 2.6-10.9 5-16.7 7.2C285.6 296.5 240.5 304 192 304s-93.6-7.5-127.3-20.3c-5.8-2.2-11.4-4.6-16.7-7.2V320v0c0 .1 .1 .6 .6 1.5c.6 1.2 2 3.1 4.7 5.5c5.5 5 14.9 10.6 28.5 15.7c27 10.3 66 17.2 110.2 17.2s83.2-6.9 110.2-17.2c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.5-.9 .6-1.4 .6-1.5v0 0zM64.7 387.7c-5.8-2.2-11.4-4.6-16.7-7.2V424l0 0c0 0 0 .5 .6 1.5c.6 1.2 2 3.1 4.7 5.5c5.5 5 14.9 10.6 28.5 15.7c27 10.3 66 17.2 110.2 17.2s83.2-6.9 110.2-17.2c13.6-5.2 23-10.8 28.5-15.7c2.7-2.4 4.1-4.3 4.7-5.5c.6-1.1 .6-1.5 .6-1.5v0V380.4c-5.3 2.6-10.9 5-16.7 7.2C285.6 400.5 240.5 408 192 408s-93.6-7.5-127.3-20.3z"],
    "book-medical": [448, 512, [], "f7e6", "M0 88C0 39.4 39.4 0 88 0H392c30.9 0 56 25.1 56 56V344c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8H0V88zM48 432c0 17.7 14.3 32 32 32H368V400H80c-17.7 0-32 14.3-32 32zm0-73.3c9.8-4.3 20.6-6.7 32-6.7H392c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88C65.9 48 48 65.9 48 88V358.7zM208 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272v48c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16V224H160c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48V112z"],
    "file-plus": [384, 512, [], "f319", "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zM192 208c-13.3 0-24 10.7-24 24v48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V328h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V232c0-13.3-10.7-24-24-24z"],
    "money-bill-1-wave": [576, 512, ["money-bill-wave-alt"], "f53b", "M265.7 407.9c4.5-1.1 9-2.3 13.5-3.4l0 0c55.9-14.3 119.4-30.6 185.3-28.7c4.1-31.4 30.9-55.7 63.5-55.7V144c-35.3 0-63.9-28.6-64-63.9c-47-1.7-96.8 9.5-153.7 24c-4.5 1.1-9 2.3-13.5 3.5l0 0c-55.9 14.3-119.4 30.6-185.3 28.7C107.4 167.7 80.5 192 48 192V368c35.3 0 63.9 28.6 64 63.9c47 1.7 96.8-9.5 153.7-24zM0 421.5V113C0 88.8 25.4 72.7 48.4 79C128.2 101 208.1 80.6 288 60.3c86.9-22.1 173.8-44.3 260.7-12C565.8 54.6 576 72 576 90.5V399c0 24.3-25.4 40.3-48.3 34C447.8 411 367.9 431.4 288 451.7c-86.9 22.1-173.8 44.3-260.7 12C10.2 457.4 0 440 0 421.5zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM256 208c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h24 24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V208c0-8.8-7.2-16-16-16H272c-8.8 0-16 7.2-16 16z"],
    "arrow-up-long": [384, 512, ["long-arrow-up"], "f176", "M209 7c-9.4-9.4-24.6-9.4-33.9 0L39 143c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l95-95V488c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l95 95c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L209 7z"],
    "mobile-screen": [384, 512, ["mobile-android-alt"], "f3cf", "M64 448c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16V368H64v80zm0-128H320V64c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16V320zM16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"],
    "file-check": [384, 512, [], "f316", "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zM289 267.6c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-89.7 89.7L129 287c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l53.3 53.3c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7L289 267.6z"],
    "arrow-left": [448, 512, [8592], "f060", "M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"],
    "circle-question": [512, 512, [62108, "question-circle"], "f059", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"],
    "circle-exclamation": [512, 512, ["exclamation-circle"], "f06a", "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-13.3 0-24 10.7-24 24V264c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"],
    "window-restore": [512, 512, [], "f2d2", "M432 48H208c-17.7 0-32 14.3-32 32V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V336h16c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V256H48V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"],
    "window-maximize": [512, 512, [128470], "f2d0", "M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"],
    "arrow-down-long": [384, 512, ["long-arrow-down"], "f175", "M175 505c9.4 9.4 24.6 9.4 33.9 0L345 369c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95L216 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 406.1L73 335c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L175 505z"],
    "file-excel": [384, 512, [], "f1c3", "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z"],
    "spell-check": [576, 512, [], "f891", "M134.1 14.6C130.4 5.8 121.6 0 112 0s-18.3 5.8-22.1 14.6l-88 208c-5.2 12.2 .5 26.3 12.8 31.5s26.3-.5 31.5-12.8L56.8 216H167.2l10.7 25.4c5.2 12.2 19.2 17.9 31.5 12.8s17.9-19.2 12.8-31.5l-88-208zM146.9 168H77.1L112 85.6 146.9 168zM256 24V128 232c0 13.3 10.7 24 24 24h92c42 0 76-34 76-76c0-24.6-11.7-46.4-29.8-60.3C426.9 107.3 432 92.2 432 76c0-42-34-76-76-76H280c-13.3 0-24 10.7-24 24zm100 80H304V48h52c15.5 0 28 12.5 28 28s-12.5 28-28 28zm-52 48h52 16c15.5 0 28 12.5 28 28s-12.5 28-28 28H304V152zM568.6 313.3c9.6-9.2 9.9-24.4 .7-33.9s-24.4-9.9-33.9-.7l-183 175.7L265 367c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L335 505c9.2 9.2 24.2 9.4 33.6 .3l200-192z"],
    "volume-off": [320, 512, [], "f026", "M272 102.3L159.9 201.9c-4.4 3.9-10.1 6.1-15.9 6.1H56c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h88c5.9 0 11.6 2.2 15.9 6.1L272 409.7V102.3zm-1.6-62.8c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8V450.2c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5L134.9 352H56c-30.9 0-56-25.1-56-56V216c0-30.9 25.1-56 56-56h78.9L270.4 39.5z"],
    "check": [448, 512, [10003, 10004], "f00c", "M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", "M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"],
    "headphones": [512, 512, [127911], "f025", "M49.6 262C62.4 159.4 149.9 80 256 80s193.6 79.4 206.4 182c-9.4-3.9-19.6-6-30.4-6c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80V368 336 288C512 146.6 397.4 32 256 32S0 146.6 0 288v48 32 32c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48c-10.8 0-21 2.1-30.4 6zM48 336c0-17.7 14.3-32 32-32V432c-17.7 0-32-14.3-32-32V368 336zm416 0v32 32c0 17.7-14.3 32-32 32V304c17.7 0 32 14.3 32 32z"],
    "a": [384, 512, [97], "41", "M214.1 46.7C210.4 37.8 201.7 32 192 32s-18.4 5.8-22.1 14.7l-168 400c-5.1 12.2 .6 26.3 12.8 31.4s26.3-.6 31.4-12.8L80.3 384H303.7l34.1 81.3c5.1 12.2 19.2 18 31.4 12.8s18-19.2 12.8-31.4l-168-400zM283.6 336H100.4L192 118l91.6 218z"],
    "b": [320, 512, [98], "42", "M56 32C25.1 32 0 57.1 0 88V256 424c0 30.9 25.1 56 56 56H196c68.5 0 124-55.5 124-124c0-48.9-28.3-91.1-69.3-111.3c23-22.5 37.3-53.9 37.3-88.7c0-68.5-55.5-124-124-124H56zM164 232H48V88c0-4.4 3.6-8 8-8H164c42 0 76 34 76 76s-34 76-76 76zM48 280H164h28 4c42 0 76 34 76 76s-34 76-76 76H56c-4.4 0-8-3.6-8-8V280z"],
    "font-case": [640, 512, [], "f866", "M198.4 47.5C194.9 38.2 186 32 176 32s-18.9 6.2-22.4 15.5l-152 400c-4.7 12.4 1.5 26.3 13.9 31s26.3-1.5 31-13.9L83.1 368H268.9l36.7 96.5c4.7 12.4 18.6 18.6 31 13.9s18.6-18.6 13.9-31l-152-400zM250.7 320H101.4L176 123.6 250.7 320zM616 160c-13.3 0-24 10.7-24 24v8.8c-22.1-20.4-51.6-32.8-84-32.8c-68.5 0-124 55.5-124 124v72c0 68.5 55.5 124 124 124c32.4 0 61.9-12.4 84-32.8V456c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zM432 284c0-42 34-76 76-76s76 34 76 76v72c0 42-34 76-76 76s-76-34-76-76V284z"],
    "square-chevron-down": [448, 512, ["chevron-square-down"], "f329", "M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM207 345L103 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 345c-9.4 9.4-24.6 9.4-33.9 0z"],
    "square-chevron-up": [448, 512, ["chevron-square-up"], "f32c", "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm241 71L345 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L207 167c9.4-9.4 24.6-9.4 33.9 0z"],
    "book-circle-arrow-up": [640, 512, [], "e0bd", "M88 0C39.4 0 0 39.4 0 88V424H.4c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80H394.8c-18.3-12.9-34.1-29.2-46.3-48H80c-17.7 0-32-14.3-32-32s14.3-32 32-32H322.9c-1.9-10.4-2.9-21.1-2.9-32c0-5.4 .2-10.7 .7-16H80c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40H392c4.4 0 8 3.6 8 8V220.5c14.6-9.5 30.8-17 48-21.8V56c0-30.9-25.1-56-56-56H88zM496 224a144 144 0 1 0 0 288 144 144 0 1 0 0-288zM428.7 371.3c-6.2-6.2-6.2-16.4 0-22.6l56-56c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 342.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V342.6l-28.7 28.7c-6.2 6.2-16.4 6.2-22.6 0z"],
    "file-pdf": [512, 512, [], "f1c1", "M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"],
    "book-open-reader": [512, 512, ["book-reader"], "f5da", "M256 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM256 0a96 96 0 1 1 0 192A96 96 0 1 1 256 0zM228 279l-.2-.1c-.7-.5-2.4-1.5-5.2-2.9c-5.5-2.8-15.4-7.3-30.6-12.2c-28-9-74.2-19.3-144-22.7V417.4c84.9 5 147.1 22.3 184 35.7V282l-4-3zm52 3V453.1c36.9-13.4 99.1-30.7 184-35.7V241.1c-69.9 3.4-116 13.7-144 22.7c-15.1 4.9-25 9.4-30.6 12.2c-2.8 1.4-4.5 2.4-5.2 2.9l-.2 .1-4 3zM32 192.5C199.2 197.4 256 240 256 240s56.8-42.6 224-47.5c17.7-.5 32 13.9 32 31.5V432c0 17.7-14.4 31.9-32 32.7c-114.9 4.7-186.9 33.7-208.8 43.8c-4.8 2.2-9.9 3.5-15.1 3.5s-10.4-1.3-15.1-3.5c-21.9-10.1-93.9-39.1-208.8-43.8c-17.7-.7-32-15-32-32.7V224c0-17.7 14.4-32.1 32-31.5z"],
    "right-to-bracket": [512, 512, ["sign-in-alt"], "f2f6", "M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"],
    "magnifying-glass-plus": [512, 512, ["search-plus"], "f00e", "M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"],
    "magnifying-glass-minus": [512, 512, ["search-minus"], "f010", "M208 48a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 368c48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L371.1 337.1C399.2 301.7 416 256.8 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"],
    "book-arrow-up": [448, 512, [], "e0ba", "M88 0C39.4 0 0 39.4 0 88V424H.4c-.3 2.6-.4 5.3-.4 8c0 44.2 35.8 80 80 80h96V464H80c-17.7 0-32-14.3-32-32s14.3-32 32-32h96V352H80c-11.4 0-22.2 2.4-32 6.7V88c0-22.1 17.9-40 40-40H392c4.4 0 8 3.6 8 8V344c0 4.4-3.6 8-8 8H304v48h64v64H304v48H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V394.6c18.9-9 32-28.3 32-50.6V56c0-30.9-25.1-56-56-56H88zm55 215c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L216 488c0 13.3 10.7 24 24 24s24-10.7 24-24V209.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"],
    "share-nodes": [448, 512, ["share-alt"], "f1e0", "M448 128c0 53-43 96-96 96c-28.9 0-54.8-12.8-72.4-33l-89.7 44.9c1.4 6.5 2.1 13.2 2.1 20.1s-.7 13.6-2.1 20.1L279.6 321c17.6-20.2 43.5-33 72.4-33c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-6.9 .7-13.6 2.1-20.1L168.4 319c-17.6 20.2-43.5 33-72.4 33c-53 0-96-43-96-96s43-96 96-96c28.9 0 54.8 12.8 72.4 33l89.7-44.9c-1.4-6.5-2.1-13.2-2.1-20.1c0-53 43-96 96-96s96 43 96 96zM96 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM400 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM352 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"],
    "cart-shopping": [576, 512, [128722, "shopping-cart"], "f07a", "M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0H24zM131.1 80H520.7L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8H161.6L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"],
    "pen-clip": [512, 512, ["pen-alt"], "f305", "M320 62.1l42.7-42.7c25-25 65.5-25 90.5 0l39.4 39.4c25 25 25 65.5 0 90.5L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L286.1 96 273 82.9c-9.4-9.4-24.6-9.4-33.9 0L137 185c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L205.1 49c28.1-28.1 73.7-28.1 101.8 0L320 62.1zm0 67.9L133.5 316.5c-38.8 38.8-66 87.5-78.6 140.7c53.2-12.7 101.9-39.9 140.7-78.6L382.1 192 320 129.9z"],
    "wifi": [640, 512, ["wifi-3", "wifi-strong"], "f1eb", "M39.9 185.7C114.6 119.9 212.6 80 320 80s205.4 39.9 280.1 105.7c9.9 8.8 25.1 7.8 33.9-2.2s7.8-25.1-2.2-33.9C548.7 76.4 439.5 32 320 32S91.3 76.4 8.2 149.6c-9.9 8.8-10.9 23.9-2.2 33.9s23.9 10.9 33.9 2.2zM320 256c64.6 0 123.5 24.7 167.6 65.2c9.8 9 24.9 8.3 33.9-1.5s8.3-24.9-1.5-33.9C467.4 237.5 397.1 208 320 208s-147.4 29.5-200.1 77.9c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5C196.5 280.7 255.4 256 320 256zm56 168a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z"],
    "wifi-slash": [640, 512, [], "f6ac", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-267-209.3c47.2 8.4 89.8 30.2 123.8 61.4c9.8 9 24.9 8.3 33.9-1.5s8.3-24.9-1.5-33.9C467.4 237.5 397.1 208 320 208c-7.2 0-14.3 .3-21.4 .8L169.4 107.5C216.2 89.7 267 80 320 80c107.4 0 205.4 39.9 280.1 105.7c9.9 8.8 25.1 7.8 33.9-2.2s7.8-25.1-2.2-33.9C548.7 76.4 439.5 32 320 32c-69.1 0-134.7 14.9-193.9 41.5L38.8 5.1zM76.9 156.6L37.7 125.7c-10.2 7.6-20 15.6-29.5 23.9c-9.9 8.8-10.9 23.9-2.2 33.9s23.9 10.9 33.9 2.2c11.8-10.4 24.1-20.1 37-29.1zM226.3 274.3L184 241c-23.4 12.1-44.9 27.2-64.1 44.8c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5c21.5-19.7 46.5-35.7 73.9-46.9zM376 424a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z"],

  };

  bunker(function () {
    defineIcons('far', icons);
    defineIcons('fa-regular', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "0": [320, 512, [], "30", "M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 96c-53 0-96 43-96 96V320c0 53 43 96 96 96s96-43 96-96V192c0-53-43-96-96-96z"],
    "at": [512, 512, [61946], "40", "M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"],
    "bars": [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"],
    "book-blank": [448, 512, [128213, 128215, 128216, 128217, "book-alt"], "f5d9", "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"],
    "book-copy": [576, 512, [], "e0be", "M160 96L96 96C43 96 0 139 0 192V416c0 53 43 96 96 96H320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 288 96c-17.7 0-32-14.3-32-32s14.3-32 32-32h81.1c-10.9-18.8-17.1-40.7-17.1-64V96zM320 416h32H512h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H512 288c-53 0-96 43-96 96V320c0 24.6 9.2 47 24.4 64c17.6 19.6 43.1 32 71.6 32h32zm-64-96c0-17.7 14.3-32 32-32h96 96v64H384 288c-17.7 0-32-14.3-32-32z"],
    "book-open": [576, 512, [128214, 128366], "f518", "M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"],
    "book-open-cover": [640, 512, ["book-open-alt"], "e0c0", "M304 32V408L96 368V34.7C96 14.9 113.8-.2 133.3 3.1L304 32zM89.7 405.1L320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4V28.8l25.7-5.1C621.5 19.7 640 34.8 640 55V421.8c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8V55C0 34.8 18.5 19.7 38.3 23.7L64 28.8v345c0 15.3 10.8 28.4 25.7 31.4zM336 408V32L506.7 3.1C526.2-.2 544 14.9 544 34.7V368L336 408z"],
    "volume-high": [640, 512, [128266, "volume-up"], "f028", "M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"],
    "waveform": [640, 512, [], "f8f1", "M320 0c12 0 22.1 8.8 23.8 20.7l42 304.4L424.3 84.2c1.9-11.7 12-20.3 23.9-20.2s21.9 8.9 23.6 20.6l28.2 197.3 20.5-102.6c2.2-10.8 11.3-18.7 22.3-19.3s20.9 6.4 24.2 16.9L593.7 264H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c-10.5 0-19.8-6.9-22.9-16.9l-4.1-13.4-29.4 147c-2.3 11.5-12.5 19.6-24.2 19.3s-21.4-9-23.1-20.6L446.7 248.3l-39 243.5c-1.9 11.7-12.1 20.3-24 20.2s-21.9-8.9-23.5-20.7L320 199.6 279.8 491.3c-1.6 11.8-11.6 20.6-23.5 20.7s-22.1-8.5-24-20.2l-39-243.5L167.8 427.4c-1.7 11.6-11.4 20.3-23.1 20.6s-21.9-7.8-24.2-19.3l-29.4-147-4.1 13.4C83.8 305.1 74.5 312 64 312H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H46.3l26.8-87.1c3.2-10.5 13.2-17.5 24.2-16.9s20.2 8.5 22.3 19.3l20.5 102.6L168.2 84.6c1.7-11.7 11.7-20.5 23.6-20.6s22 8.5 23.9 20.2l38.5 240.9 42-304.4C297.9 8.8 308 0 320 0z"],
    "microphone": [384, 512, [], "f130", "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"],
    "file-pen": [576, 512, [128221, "file-edit"], "f31c", "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V285.7l-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"],
    "eye": [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"],
    "eye-slash": [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"],
    "copyright": [512, 512, [169], "f1f9", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"],
    "envelope": [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"],
    "house": [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"],
    "id-card": [576, 512, [62147, "drivers-license"], "f2c2", "M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"],
    "infinity": [640, 512, [8734, 9854], "f534", "M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"],
    "user": [448, 512, [128100, 62144], "f007", "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"],
    "arrow-right-to-bracket": [512, 512, ["sign-in"], "f090", "M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"],
    "arrow-right-from-bracket": [512, 512, ["sign-out"], "f08b", "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"],
    "floppy-disk": [448, 512, [128190, 128426, "save"], "f0c7", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"],
    "spinner": [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"],
    "xmark": [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"],
    "arrow-rotate-left": [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"],
    "user-plus": [640, 512, [], "f234", "M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"],
    "key": [512, 512, [128273], "f084", "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"],
    "lock": [448, 512, [128274], "f023", "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"],
    "xmark-large": [448, 512, [], "e59b", "M393.4 41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 256 438.6 425.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 301.3 54.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0L224 210.7 393.4 41.4z"],
    "phone": [512, 512, [128222, 128379], "f095", "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"],
    "puzzle-piece": [512, 512, [129513], "f12e", "M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8v0c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2v0c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2v0c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2v0c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8v0c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320v0c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256v0C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2v0z"],
    "chevron-left": [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"],
    "chevron-right": [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"],
    "triangle-exclamation": [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"],
    "gift": [512, 512, [127873], "f06b", "M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"],
    "books": [512, 512, [128218], "f5db", "M0 32C0 14.3 14.3 0 32 0H96c17.7 0 32 14.3 32 32V96H0V32zm0 96H128V384H0V128zM0 416H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V96H160V32zm0 96H288V384H160V128zm0 288H288v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416zm203.6-19.9L320 232.6V142.8l100.4-26.9 66 247.4L363.6 396.1zM412.2 85L320 109.6V11l36.9-9.9c16.9-4.6 34.4 5.5 38.9 22.6L412.2 85zM371.8 427l122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1l-61.4 16.5c-16.9 4.6-34.4-5.5-38.9-22.6L371.8 427z"],
    "circle-user": [512, 512, [62142, "user-circle"], "f2bd", "M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"],
    "pen-to-square": [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"],
    "file-arrow-up": [384, 512, ["file-upload"], "f574", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"],
    "arrow-up-from-bracket": [448, 512, [], "e09a", "M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"],
    "cloud-arrow-up": [640, 512, [62338, "cloud-upload", "cloud-upload-alt"], "f0ee", "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"],
    "trash-can": [448, 512, [61460, "trash-alt"], "f2ed", "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"],
    "coins": [512, 512, [], "f51e", "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"],
    "book-medical": [448, 512, [], "f7e6", "M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z"],
    "file-plus": [384, 512, [], "f319", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM192 240c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V360H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h48V264c0-13.3 10.7-24 24-24z"],
    "money-bill-1-wave": [576, 512, ["money-bill-wave-alt"], "f53b", "M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM128 416H64V352c35.3 0 64 28.7 64 64zM64 224V160h64c0 35.3-28.7 64-64 64zM448 352c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM252 208c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"],
    "arrow-up-long": [384, 512, ["long-arrow-up"], "f176", "M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"],
    "mobile-screen": [384, 512, ["mobile-android-alt"], "f3cf", "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"],
    "file-check": [384, 512, [], "f316", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zm49 281L177 409c-9.4 9.4-24.6 9.4-33.9 0L79 345c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 247c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"],
    "arrow-left": [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"],
    "circle-question": [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"],
    "circle-exclamation": [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"],
    "window-restore": [512, 512, [], "f2d2", "M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"],
    "window-maximize": [512, 512, [128470], "f2d0", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"],
    "arrow-down-long": [384, 512, ["long-arrow-down"], "f175", "M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"],
    "file-excel": [384, 512, [], "f1c3", "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"],
    "spell-check": [576, 512, [], "f891", "M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"],
    "volume-off": [320, 512, [], "f026", "M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z"],
    "check": [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"],
    "headphones": [512, 512, [127911], "f025", "M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"],
    "a": [384, 512, [97], "41", "M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z"],
    "b": [320, 512, [98], "42", "M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H192c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128H64zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288h96 32c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V288z"],
    "font-case": [640, 512, [], "f866", "M206 52.8C201.3 40.3 189.3 32 176 32s-25.3 8.3-30 20.8L2 436.8c-6.2 16.5 2.2 35 18.7 41.2s35-2.2 41.2-18.7L96.2 368H255.8L290 459.2c6.2 16.5 24.7 24.9 41.2 18.7s24.9-24.6 18.7-41.2L206 52.8zM231.8 304H120.2L176 155.1 231.8 304zM608 160c-13 0-24.1 7.7-29.2 18.8C559.4 166.9 536.5 160 512 160c-70.7 0-128 57.3-128 128v64c0 70.7 57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8c5 11.1 16.2 18.8 29.2 18.8c17.7 0 32-14.3 32-32V352 288 192c0-17.7-14.3-32-32-32zM576 288v64c0 35.3-28.7 64-64 64s-64-28.7-64-64V288c0-35.3 28.7-64 64-64s64 28.7 64 64z"],
    "square-chevron-down": [448, 512, ["chevron-square-down"], "f329", "M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM207 345L103 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L241 345c-9.4 9.4-24.6 9.4-33.9 0z"],
    "square-chevron-up": [448, 512, ["chevron-square-up"], "f32c", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM241 167L345 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L207 167c9.4-9.4 24.6-9.4 33.9 0z"],
    "book-circle-arrow-up": [640, 512, [], "e0bd", "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h10.8c-23.3-16.4-42.5-38.4-55.6-64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32H320.7c-.5-5.3-.7-10.6-.7-16c0-80.6 54.1-148.5 128-169.4V32c0-17.7-14.3-32-32-32H384 96zM496 224a144 144 0 1 0 0 288 144 144 0 1 0 0-288zM428.7 371.3c-6.2-6.2-6.2-16.4 0-22.6l56-56c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 342.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V342.6l-28.7 28.7c-6.2 6.2-16.4 6.2-22.6 0z"],
    "file-pdf": [512, 512, [], "f1c1", "M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"],
    "book-open-reader": [512, 512, ["book-reader"], "f5da", "M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152V512l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32H62.3c63.6 0 125.6 19.6 177.7 56zm32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32V427c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z"],
    "right-to-bracket": [512, 512, ["sign-in-alt"], "f2f6", "M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"],
    "magnifying-glass-plus": [512, 512, ["search-plus"], "f00e", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"],
    "magnifying-glass-minus": [512, 512, ["search-minus"], "f010", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"],
    "book-arrow-up": [448, 512, [], "e0ba", "M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H264V209.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V384H96c-17.7 0-32 14.3-32 32z"],
    "share-nodes": [448, 512, ["share-alt"], "f1e0", "M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"],
    "cart-shopping": [576, 512, [128722, "shopping-cart"], "f07a", "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"],
    "pen-clip": [512, 512, ["pen-alt"], "f305", "M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1 0 0-1-1 0 0-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128 241 114.9z"],
    "wifi": [640, 512, ["wifi-3", "wifi-strong"], "f1eb", "M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"],
    "wifi-slash": [640, 512, [], "f6ac", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L364.6 260.4c39.2 7.9 74.7 26.1 103.6 51.6c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192c-13.3 0-26.5 .9-39.3 2.7l-95.1-74.5C227.4 104.5 272.7 96 320 96c103.2 0 196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32c-68.7 0-133.7 15.5-191.9 43.1L38.8 5.1zM93.6 169.8L41.7 128.9C30.7 137.7 20 147 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9c12.4-11.9 25.6-23 39.5-33.1zM228 275.7L173 232.3c-15.5 9.2-30.1 19.8-43.5 31.7c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c16.7-14.8 35.6-27 56.2-36.3zM320 352c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-7-1.1-13.7-3.2-20l-55.6-43.8c-1.7-.1-3.4-.2-5.2-.2z"],

  };

  bunker(function () {
    defineIcons('fas', icons);
    defineIcons('fa-solid', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "0": [320, 512, [], "30", "M0 192C0 103.6 71.6 32 160 32s160 71.6 160 160V320c0 88.4-71.6 160-160 160S0 408.4 0 320V192zM160 48C80.5 48 16 112.5 16 192V320c0 79.5 64.5 144 144 144s144-64.5 144-144V192c0-79.5-64.5-144-144-144z"],
    "at": [512, 512, [61946], "40", "M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240c4.4 0 8 3.6 8 8s-3.6 8-8 8C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 20c0 46.4-37.6 84-84 84c-36.8 0-68.1-23.6-79.4-56.6C331.3 337 296.4 360 256 360c-57.4 0-104-46.6-104-104s46.6-104 104-104c37.1 0 69.6 19.4 88 48.5V168c0-4.4 3.6-8 8-8s8 3.6 8 8v88 20c0 37.6 30.4 68 68 68s68-30.4 68-68l0-20C496 123.5 388.5 16 256 16zm88 240a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"],
    "bars": [448, 512, ["navicon"], "f0c9", "M0 88c0-4.4 3.6-8 8-8H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8zM0 248c0-4.4 3.6-8 8-8H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8zM448 408c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8H440c4.4 0 8 3.6 8 8z"],
    "book-blank": [448, 512, [128213, 128215, 128216, 128217, "book-alt"], "f5d9", "M0 56C0 25.1 25.1 0 56 0H408c22.1 0 40 17.9 40 40V376c0 19.4-13.7 35.5-32 39.2V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56V56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40H400V416H56zm-40 .8C26.2 406.4 40.3 400 56 400h56V16H56C33.9 16 16 33.9 16 56V416.8zM128 16V400H408c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24H128z"],
    "book-copy": [576, 512, [], "e0be", "M208 56c0-22.1 17.9-40 40-40H544c8.8 0 16 7.2 16 16V288c0 8.8-7.2 16-16 16h-8H248c-15.7 0-29.8 6.4-40 16.8V56zM192 359.6l0 .1 0 .3c0 30.9 25.1 56 56 56H536h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H544V320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H248c-30.9 0-56 25.1-56 56V359.6zM528 320v80H248c-22.1 0-40-17.9-40-40s17.9-40 40-40H528zM352 496V448H336v48H56c-22.1 0-40-17.9-40-40s17.9-40 40-40H180.1c-4.1-4.9-7.6-10.3-10.5-16H56c-15.7 0-29.8 6.4-40 16.8V152c0-22.1 17.9-40 40-40H160V96H56C25.1 96 0 121.1 0 152V455.6l0 .1 0 .3c0 30.9 25.1 56 56 56H344h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H352z"],
    "book-open": [576, 512, [128214, 128366], "f518", "M156 32c44.6 0 89.7 8.6 132 22.6C330.3 40.6 375.4 32 420 32c55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1V402.5c0 26.9-25.1 44.8-49 40.6c-18.5-3.2-51.3-7.2-99-7.2c-58.9 0-97.8 24.3-111.2 34.1c-7.7 5.7-17.9 9.9-29.3 9.9c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7c-24 4-48-14.1-48-40.2V91.1C0 74.5 10.3 59 27.1 53.6C48.8 46.6 100.6 32 156 32zM280 68.8C239.9 55.8 197.6 48 156 48C103 48 53.1 62 32 68.8C22.2 72 16 81.1 16 91.1V403.5C16 419 30.4 430.5 45.4 428c20.6-3.4 56.4-8 102.6-8c58.7 0 105.4 27.5 121.4 38.3c3.2 2.1 6.8 3.8 10.6 4.8V68.8zm16 394c4.2-1.2 8-3.2 11.4-5.6c15-11.1 57.2-37.2 120.6-37.2c48.6 0 82.3 4.1 101.7 7.4c15.2 2.6 30.3-9 30.3-24.9V91.1c0-10-6.2-19.1-16-22.2C522.9 62 473 48 420 48c-41.6 0-83.9 7.8-124 20.8v394z"],
    "book-open-cover": [640, 512, ["book-open-alt"], "e0c0", "M329.4 433l217.7-43.5c7.5-1.5 12.9-8.1 12.9-15.7V33.5c0-9.7-8.6-17.2-18.2-15.9L322.2 47.9l-1.1 .1H328V433.3c.5-.1 .9-.2 1.4-.3zM312 48h6.9l-1.1-.1L98.2 17.6C88.6 16.3 80 23.8 80 33.5V373.8c0 7.6 5.4 14.2 12.9 15.7L310.6 433c.5 .1 .9 .2 1.4 .3V48zM539.6 1.8C558.9-.8 576 14.1 576 33.5V373.8c0 15.3-10.8 28.4-25.7 31.4L332.6 448.7c-8.3 1.7-16.8 1.7-25.1 0L89.7 405.1c-15-3-25.7-16.1-25.7-31.4V33.5C64 14.1 81.1-.8 100.4 1.8L320 32 539.6 1.8zM0 65.5c0-17.9 14.6-32 32-32v16c-8.7 0-16 7-16 16V418.6c0 7.6 5.4 14.2 12.9 15.7l281.7 56.3c6.2 1.2 12.6 1.2 18.8 0l281.7-56.3c7.5-1.5 12.9-8.1 12.9-15.7V65.5c0-9-7.3-16-16-16v-16c17.4 0 32 14.1 32 32V418.6c0 15.3-10.8 28.4-25.7 31.4L332.6 506.3c-8.3 1.7-16.8 1.7-25.1 0L25.7 449.9C10.8 447 0 433.8 0 418.6V65.5z"],
    "volume-high": [640, 512, [128266, "volume-up"], "f028", "M524.8 25.6c-3.5-2.7-8.5-1.9-11.2 1.6s-1.9 8.5 1.6 11.2C581.3 88 624 167 624 256s-42.7 168-108.8 217.6c-3.5 2.7-4.2 7.7-1.6 11.2s7.7 4.2 11.2 1.6C594.8 433.9 640 350.2 640 256s-45.2-177.9-115.2-230.4zM281 51.5c2.5-2.2 5.8-3.5 9.2-3.5c7.6 0 13.8 6.2 13.8 13.8V450.2c0 7.6-6.2 13.8-13.8 13.8c-3.4 0-6.6-1.2-9.2-3.5L143.2 338c-1.5-1.3-3.4-2-5.3-2H56c-22.1 0-40-17.9-40-40V216c0-22.1 17.9-40 40-40h81.9c2 0 3.9-.7 5.3-2L281 51.5zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h78.9L270.4 472.5c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8V61.8C320 45.3 306.7 32 290.2 32zM409.7 179.2c-3.5-2.7-8.5-1.9-11.2 1.6s-1.9 8.5 1.6 11.2c19.4 14.6 31.9 37.8 31.9 64s-12.5 49.4-31.9 64c-3.5 2.7-4.2 7.7-1.6 11.2s7.7 4.2 11.2 1.6C432.9 315.2 448 287.4 448 256s-15.1-59.2-38.3-76.8zm48-74.1c-2.7 3.5-2 8.5 1.5 11.2C501 148.5 528 199.1 528 256s-27 107.5-68.9 139.7c-3.5 2.7-4.2 7.7-1.5 11.2s7.7 4.2 11.2 1.5C514.5 373.3 544 318.1 544 256s-29.5-117.3-75.1-152.3c-3.5-2.7-8.5-2-11.2 1.5z"],
    "waveform": [640, 512, [], "f8f1", "M320 0c4 0 7.4 3 7.9 7l56.6 438.7L440.1 70.8c.6-3.9 4-6.9 8-6.8s7.3 3 7.9 7l41.3 316.3 38.9-220.6c.7-3.7 3.8-6.4 7.5-6.6s7.1 2.3 8.1 5.9L582.1 280H632c4.4 0 8 3.6 8 8s-3.6 8-8 8H576c-3.6 0-6.8-2.4-7.7-5.9l-22.7-85L503.9 441.4c-.7 3.9-4.1 6.7-8.1 6.6s-7.2-3-7.8-7L447.5 130 391.9 505.2c-.6 4-4 6.9-8 6.8s-7.4-3-7.9-7L320 70.5 263.9 505c-.5 4-3.9 6.9-7.9 7s-7.4-2.9-8-6.8L192.5 130 151.9 441c-.5 3.9-3.8 6.9-7.8 7s-7.4-2.7-8.1-6.6L94.4 205l-22.7 85c-.9 3.5-4.1 5.9-7.7 5.9H8c-4.4 0-8-3.6-8-8s3.6-8 8-8H57.9L88.3 165.9c1-3.6 4.3-6.1 8.1-5.9s6.9 2.9 7.5 6.6l38.9 220.6L184.1 71c.5-4 3.9-6.9 7.9-7s7.4 2.9 8 6.8l55.5 374.9L312.1 7c.5-4 3.9-7 7.9-7z"],
    "microphone": [384, 512, [], "f130", "M272 96V256c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c0-44.2 35.8-80 80-80s80 35.8 80 80zM96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96S96 43 96 96zM48 200c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 85.7 67.4 155.6 152 159.8V496H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h88 88c4.4 0 8-3.6 8-8s-3.6-8-8-8H200V415.8c84.6-4.2 152-74.1 152-159.8V200c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 79.5-64.5 144-144 144s-144-64.5-144-144V200z"],
    "file-pen": [576, 512, [128221, "file-edit"], "f31c", "M64 496H256c0 5.5 .9 10.9 2.7 16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H204.1c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9V285.7l-16 16V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64C37.5 16 16 37.5 16 64V448c0 26.5 21.5 48 48 48zM361.1 160c-.8-1-1.6-1.9-2.4-2.7L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4V136c0 13.3 10.7 24 24 24H361.1zM292.7 507.2c-4-4-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L493.2 235.7c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-3.4-13.6 3.4 13.6-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2zm15.7-28.9L304 495.8l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2L514.4 333.7l-48.3-48.3L323.2 428.3c-2 2.1-3.5 4.6-4.2 7.4l-10.6 42.5zM552.8 295.4c9.4-9.4 9.4-24.6 0-33.9L538.4 247c-9.4-9.4-24.6-9.4-33.9 0l-27.1 27.1 48.3 48.3 27.1-27.1z"],
    "eye": [576, 512, [128065], "f06e", "M106.3 124.3C151.4 82.4 212.4 48 288 48s136.6 34.4 181.7 76.3c44.9 41.7 75 91.7 89.1 125.6c1.6 3.9 1.6 8.4 0 12.3C544.7 296 514.6 346 469.7 387.7C424.6 429.6 363.6 464 288 464s-136.6-34.4-181.7-76.3C61.4 346 31.3 296 17.2 262.2c-1.6-3.9-1.6-8.4 0-12.3C31.3 216 61.4 166 106.3 124.3zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm208 0a112 112 0 1 0 -224 0 112 112 0 1 0 224 0z"],
    "eye-slash": [640, 512, [], "f070", "M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-47.8 0-90.1 12.9-126.3 32.5l13.7 10.9C240.3 58.7 277.9 48 320 48c75.6 0 136.6 34.4 181.7 76.3c44.9 41.7 75 91.7 89.1 125.6c1.6 3.9 1.6 8.4 0 12.3C581.7 284 566 312.4 544 341.1l12.6 9.9c23-29.9 39.4-59.7 49-82.7zM83.5 161c-23 29.9-39.4 59.7-49 82.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 90.1-12.9 126.3-32.5l-13.7-10.9C399.7 453.3 362.1 464 320 464c-75.6 0-136.6-34.4-181.7-76.3C93.4 346 63.3 296 49.2 262.2c-1.6-3.9-1.6-8.4 0-12.3C58.3 228 74 199.6 96 170.9L83.5 161zM320 368c7.8 0 15.4-.8 22.7-2.3l-17.5-13.8c-1.7 .1-3.5 .1-5.2 .1c-47.2 0-86.4-34-94.5-78.9L208 259.4C209.8 319.7 259.3 368 320 368zm0-224c-7.8 0-15.4 .8-22.7 2.3l17.5 13.8c1.7-.1 3.5-.1 5.2-.1c47.2 0 86.4 34 94.5 78.9L432 252.6C430.2 192.3 380.7 144 320 144z"],
    "copyright": [512, 512, [169], "f1f9", "M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm73.5-182.5c-40.6 40.6-106.5 40.6-147.1 0s-40.6-106.5 0-147.1s106.5-40.6 147.1 0c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3c-46.9-46.9-122.8-46.9-169.7 0s-46.9 122.8 0 169.7s122.8 46.9 169.7 0c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z"],
    "envelope": [512, 512, [128386, 9993, 61443], "f0e0", "M64 80c-26.5 0-48 21.5-48 48v28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2V128c0-26.5-21.5-48-48-48H64zM16 176.7V384c0 26.5 21.5 48 48 48H448c26.5 0 48-21.5 48-48V176.7L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"],
    "house": [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M293.3 2c-3-2.7-7.6-2.7-10.6 0L2.7 250c-3.3 2.9-3.6 8-.7 11.3s8 3.6 11.3 .7L64 217.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V217.1L562.7 262c3.3 2.9 8.4 2.6 11.3-.7s2.6-8.4-.7-11.3L293.3 2zM80 448V202.9L288 18.7 496 202.9V448c0 26.5-21.5 48-48 48H368V328c0-13.3-10.7-24-24-24H232c-13.3 0-24 10.7-24 24V496H128c-26.5 0-48-21.5-48-48zm144 48V328c0-4.4 3.6-8 8-8H344c4.4 0 8 3.6 8 8V496H224z"],
    "id-card": [576, 512, [62147, "drivers-license"], "f2c2", "M64 48C37.5 48 16 69.5 16 96v16H560V96c0-26.5-21.5-48-48-48H64zM16 128V416c0 26.5 21.5 48 48 48H512c26.5 0 48-21.5 48-48V128H16zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM192 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM152 352c-30.9 0-56 25.1-56 56c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72h80c39.8 0 72 32.2 72 72c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56H152zM352 232c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8zm0 64c0-4.4 3.6-8 8-8H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-4.4 0-8-3.6-8-8z"],
    "infinity": [640, 512, [8734, 9854], "f534", "M0 240.2C0 169.4 57.4 112 128.2 112c32.7 0 64.2 12.5 88 35L320 245l103.8-98c23.8-22.5 55.3-35 88-35C582.6 112 640 169.4 640 240.2v31.6C640 342.6 582.6 400 511.8 400c-32.7 0-64.2-12.5-88-35L320 267 216.2 365c-23.8 22.5-55.3 35-88 35C57.4 400 0 342.6 0 271.8V240.2zM308.3 256L205.3 158.6c-20.8-19.7-48.4-30.6-77-30.6C66.2 128 16 178.2 16 240.2v31.6C16 333.8 66.2 384 128.2 384c28.7 0 56.2-11 77-30.6L308.3 256zm23.3 0l103.1 97.4c20.8 19.7 48.4 30.6 77 30.6c62 0 112.2-50.2 112.2-112.2V240.2c0-62-50.2-112.2-112.2-112.2c-28.6 0-56.2 11-77 30.6L331.7 256z"],
    "user": [448, 512, [128100, 62144], "f007", "M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM16 482.3c0 7.6 6.1 13.7 13.7 13.7H418.3c7.6 0 13.7-6.1 13.7-13.7C432 392.7 359.3 320 269.7 320H178.3C88.7 320 16 392.7 16 482.3zm-16 0C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"],
    "arrow-right-to-bracket": [512, 512, ["sign-in"], "f090", "M213.7 114.3l136 136c3.1 3.1 3.1 8.2 0 11.3l-136 136c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L324.7 264 8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l316.7 0L202.3 125.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zM328 464l96 0c39.8 0 72-32.2 72-72l0-272c0-39.8-32.2-72-72-72l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l96 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z"],
    "arrow-right-from-bracket": [512, 512, ["sign-out"], "f08b", "M509.7 261.7c3.1-3.1 3.1-8.2 0-11.3l-136-136c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 248 168 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l316.7 0L362.3 386.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l136-136zM184 48c4.4 0 8-3.6 8-8s-3.6-8-8-8L88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l96 0z"],
    "floppy-disk": [448, 512, [128190, 128426, "save"], "f0c7", "M16 96c0-26.5 21.5-48 48-48l0 112c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32V49.2c8.8 2 17 6.4 23.4 12.9l74.5 74.5c9 9 14.1 21.2 14.1 33.9V416c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96zM80 48H304V160c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V48zM0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V170.5c0-17-6.7-33.3-18.7-45.3L354.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96zM296 328a72 72 0 1 1 -144 0 72 72 0 1 1 144 0zm-72-88a88 88 0 1 0 0 176 88 88 0 1 0 0-176z"],
    "spinner": [512, 512, [], "f110", "M256 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 496a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM0 256a48 48 0 1 1 96 0A48 48 0 1 1 0 256zm464 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM131.5 380.5A32 32 0 1 0 86.3 425.7a32 32 0 1 0 45.3-45.3zM75 437a48 48 0 1 1 67.9-67.9A48 48 0 1 1 75 437zM86.3 131.5a32 32 0 1 0 45.3-45.3A32 32 0 1 0 86.3 131.5zM142.9 75A48 48 0 1 1 75 142.9 48 48 0 1 1 142.9 75zM425.7 425.7a32 32 0 1 0 -45.3-45.3 32 32 0 1 0 45.3 45.3zm-56.6-56.6A48 48 0 1 1 437 437a48 48 0 1 1 -67.9-67.9z"],
    "xmark": [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z"],
    "arrow-rotate-left": [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M127.9 419.9c90.5 70.7 221.2 54.7 292-35.8s54.7-221.2-35.8-292C293.6 21.4 162.9 37.4 92.1 127.9L56 176H184c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.4 0-8-3.6-8-8V40c0-4.4 3.6-8 8-8s8 3.6 8 8V160l31.4-41.8 0 0 .1-.1C155.6 20.6 296.4 3.3 393.9 79.5s114.8 216.9 38.6 314.4s-216.9 114.8-314.4 38.6C93.4 413.2 73.9 389.8 59.7 364c-2.1-3.9-.7-8.7 3.2-10.9s8.7-.7 10.9 3.2c13.2 24 31.3 45.7 54.2 63.7z"],
    "user-plus": [640, 512, [], "f234", "M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM16 482.3C16 392.7 88.7 320 178.3 320h91.4C359.3 320 432 392.7 432 482.3c0 7.6-6.1 13.7-13.7 13.7H29.7c-7.6 0-13.7-6.1-13.7-13.7zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3zM520 304c0 4.4 3.6 8 8 8s8-3.6 8-8V216h88c4.4 0 8-3.6 8-8s-3.6-8-8-8H536V112c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H432c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v88z"],
    "key": [512, 512, [128273], "f084", "M287.2 328.4c15.4 4.9 31.8 7.6 48.8 7.6c88.4 0 160-71.6 160-160s-71.6-160-160-160s-160 71.6-160 160c0 17.1 2.7 33.5 7.6 48.8c1.8 5.7 .3 12-3.9 16.2L18.3 402.3c-1.5 1.5-2.3 3.5-2.3 5.7v80c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V448c0-8.8 7.2-16 16-16h40c4.4 0 8-3.6 8-8V384c0-8.8 7.2-16 16-16h40c2.1 0 4.2-.8 5.7-2.3L271 332.3c4.2-4.2 10.5-5.8 16.2-3.9zM336 352c-18.7 0-36.8-2.9-53.7-8.3L249 377c-4.5 4.5-10.6 7-17 7H208 192v16 24c0 13.3-10.7 24-24 24H144 128v16 24c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V408c0-6.4 2.5-12.5 7-17L168.3 229.7c-5.4-16.9-8.3-35-8.3-53.7C160 78.8 238.8 0 336 0s176 78.8 176 176s-78.8 176-176 176zm32-248a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"],
    "lock": [448, 512, [128274], "f023", "M112 128v64H336V128c0-61.9-50.1-112-112-112s-112 50.1-112 112zM96 192V128C96 57.3 153.3 0 224 0s128 57.3 128 128v64h32c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H96zm0 16H64c-26.5 0-48 21.5-48 48V448c0 26.5 21.5 48 48 48H384c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H352 336 112 96z"],
    "xmark-large": [448, 512, [], "e59b", "M13.7 34.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L212.7 256 2.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 267.3 434.3 477.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L235.3 256 445.7 45.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 244.7 13.7 34.3z"],
    "phone": [512, 512, [128222, 128379], "f095", "M317.1 378.1c-4.7 5.7-12.6 7.5-19.2 4.3c-73.8-34.8-133.5-94.5-168.3-168.3c-3.1-6.6-1.3-14.6 4.3-19.2l49.3-40.4c8.2-6.7 11-18 7-27.8l-40-96c-4.6-11.1-16.8-17.1-28.5-13.9l-88 24C23.2 43.7 16 53.2 16 64c0 238.6 193.4 432 432 432c10.8 0 20.3-7.2 23.2-17.7l24-88c3.2-11.6-2.8-23.8-13.9-28.5l-96-40c-9.8-4.1-21.1-1.3-27.8 7l-40.4 49.3zM304.7 368L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7z"],
    "puzzle-piece": [512, 512, [129513], "f12e", "M173.9 15.7C187 5.8 204.8 0 224 0s37 5.8 50.1 15.7S296 39.7 296 56c0 16.4-8.9 30.6-22 40.4c-6.3 4.7-10 10.6-10 16.4c0 8.4 6.8 15.2 15.2 15.2H344c22.1 0 40 17.9 40 40v64.8c0 8.4 6.8 15.2 15.2 15.2c5.8 0 11.7-3.7 16.4-10c9.8-13.2 24-22 40.4-22c16.3 0 30.5 8.8 40.3 21.9S512 268.8 512 288s-5.8 37-15.7 50.1s-24 21.9-40.3 21.9c-16.4 0-30.6-8.9-40.4-22c-4.7-6.3-10.6-10-16.4-10c-8.4 0-15.2 6.8-15.2 15.2V472c0 22.1-17.9 40-40 40H279.2C262 512 248 498 248 480.8c0-12.7 7.8-22.8 16.4-29.2C274.5 444 280 434.2 280 424c0-10.2-5.5-20-15.5-27.5S240.1 384 224 384s-30.4 4.9-40.5 12.5S168 413.8 168 424c0 10.2 5.5 20 15.6 27.6c8.5 6.4 16.4 16.5 16.4 29.2c0 17.2-14 31.2-31.2 31.2H40c-22.1 0-40-17.9-40-40V343.2C0 326 14 312 31.2 312c12.7 0 22.8 7.8 29.2 16.4C68 338.5 77.8 344 88 344c10.2 0 20-5.5 27.5-15.5s12.5-24.3 12.5-40.5s-4.9-30.4-12.5-40.5S98.2 232 88 232c-10.2 0-20 5.5-27.6 15.6C54 256.2 43.9 264 31.2 264C14 264 0 250 0 232.8V168c0-22.1 17.9-40 40-40H168.8c8.4 0 15.2-6.8 15.2-15.2c0-5.8-3.7-11.7-10-16.4c-13.2-9.8-22-24-22-40.4c0-16.3 8.8-30.5 21.9-40.3zm9.6 12.8C173.5 36 168 45.8 168 56c0 10.2 5.5 20 15.6 27.6c8.5 6.4 16.4 16.5 16.4 29.2c0 17.2-14 31.2-31.2 31.2H40c-13.3 0-24 10.7-24 24v64.8c0 8.4 6.8 15.2 15.2 15.2c5.8 0 11.7-3.7 16.4-10c9.8-13.2 24-22 40.4-22c16.3 0 30.5 8.8 40.3 21.9S144 268.8 144 288s-5.8 37-15.7 50.1s-24 21.9-40.3 21.9c-16.4 0-30.6-8.9-40.4-22c-4.7-6.3-10.6-10-16.4-10c-8.4 0-15.2 6.8-15.2 15.2V472c0 13.3 10.7 24 24 24H168.8c8.4 0 15.2-6.8 15.2-15.2c0-5.8-3.7-11.7-10-16.4c-13.2-9.8-22-24-22-40.4c0-16.3 8.8-30.5 21.9-40.3S204.8 368 224 368s37 5.8 50.1 15.7s21.9 24 21.9 40.3c0 16.4-8.9 30.6-22 40.4c-6.3 4.7-10 10.6-10 16.4c0 8.4 6.8 15.2 15.2 15.2H344c13.3 0 24-10.7 24-24V343.2c0-17.2 14-31.2 31.2-31.2c12.7 0 22.8 7.8 29.2 16.4C436 338.5 445.8 344 456 344c10.2 0 20-5.5 27.5-15.5s12.5-24.3 12.5-40.5s-4.9-30.4-12.5-40.5S466.2 232 456 232c-10.2 0-20 5.5-27.6 15.6c-6.4 8.5-16.5 16.4-29.2 16.4C382 264 368 250 368 232.8V168c0-13.3-10.7-24-24-24H279.2C262 144 248 130 248 112.8c0-12.7 7.8-22.8 16.4-29.2C274.5 76 280 66.2 280 56c0-10.2-5.5-20-15.5-27.5S240.1 16 224 16s-30.4 4.9-40.5 12.5z"],
    "chevron-left": [320, 512, [9001], "f053", "M18.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l216 216c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L35.3 256 245.7 45.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-216 216z"],
    "chevron-right": [320, 512, [9002], "f054", "M301.7 250.3c3.1 3.1 3.1 8.2 0 11.3l-216 216c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L284.7 256 74.3 45.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l216 216z"],
    "triangle-exclamation": [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M20.7 412.3c-3.1 5.3-4.7 11.2-4.7 17.3c0 19 15.4 34.4 34.4 34.4H461.6c19 0 34.4-15.4 34.4-34.4c0-6.1-1.6-12.1-4.7-17.3L290.3 67.7C283.2 55.5 270.1 48 256 48s-27.2 7.5-34.3 19.7L20.7 412.3zM6.9 404.2l201-344.6C217.9 42.5 236.2 32 256 32s38.1 10.5 48.1 27.6l201 344.6c4.5 7.7 6.9 16.5 6.9 25.4c0 27.8-22.6 50.4-50.4 50.4H50.4C22.6 480 0 457.4 0 429.6c0-8.9 2.4-17.7 6.9-25.4zM256 160c4.4 0 8 3.6 8 8V328c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8zM240 384a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"],
    "gift": [512, 512, [127873], "f06b", "M373.1 16c-20.3 0-39.2 10.5-50 27.7L270.4 128H296h80c30.9 0 56-25.1 56-56s-25.1-56-56-56h-2.9zM241.6 128L188.9 43.7C178.1 26.5 159.2 16 138.9 16H136c-30.9 0-56 25.1-56 56s25.1 56 56 56h80 25.6zm14.4-7.1l53.6-85.7C323.3 13.3 347.3 0 373.1 0H376c39.8 0 72 32.2 72 72c0 22.6-10.4 42.8-26.7 56H464c26.5 0 48 21.5 48 48v32c0 20.9-13.4 38.7-32 45.3V256 448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256v-2.7C13.4 246.7 0 228.9 0 208V176c0-26.5 21.5-48 48-48H90.7C74.4 114.8 64 94.6 64 72C64 32.2 96.2 0 136 0h2.9c25.8 0 49.8 13.3 63.5 35.2L256 120.9zM136 144H48c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32H248V144H216 136zm128 0v96H464c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32H376 296 264zM248 256H48V448c0 26.5 21.5 48 48 48H248V256zm16 240H416c26.5 0 48-21.5 48-48V256H264V496z"],
    "books": [512, 512, [128218], "f5db", "M128 416v48c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V416H128zM96 512c16.7 0 31.4-8.5 40-21.5c8.6 12.9 23.3 21.5 40 21.5h48c26.5 0 48-21.5 48-48V416v-8-8V132.2l1.5 6 2 7.7 65.9 253.8 2 7.7 18 69.2c6.6 25.5 32 40.6 56.7 33.8l59.6-16.5c24.7-6.8 39.3-33 32.7-58.5l-16-61.5-2-7.7L426.6 112.4l-2-7.7-18-69.2C400 9.9 374.6-5.2 349.9 1.6L290.3 18.1c-8.4 2.3-15.7 6.9-21.4 13C262.1 12.9 244.6 0 224 0H176c-16.7 0-31.4 8.5-40 21.5C127.4 8.5 112.7 0 96 0H48C21.5 0 0 21.5 0 48V96v8 8V400v8 8 48c0 26.5 21.5 48 48 48H96zM272 64.8V63.6c.3-14 9.5-26.4 22.6-30l59.6-16.5c15.7-4.3 32.5 5.1 36.9 22.4l16 61.7L289 133.8 273.1 72.6c-.7-2.6-1-5.2-1.1-7.8zm-16-.6c0 0 0 0 0 0V96H144V48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32V64.2zM176 496c-17.7 0-32-14.3-32-32V416H256v48c0 17.7-14.3 32-32 32H176zM128 112V400H16V112H128zm0-64V96H16V48c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32zM256 400H144V112H256V400zM411.2 116.7l63.9 246L356.8 395.3 293 149.3l118.2-32.7zM479 378.2l15.9 61.2c4.5 17.4-5.6 34.7-21.5 39.1l-59.6 16.5c-15.7 4.3-32.5-5.1-36.9-22.4l-16-61.7L479 378.2z"],
    "circle-user": [512, 512, [62142, "user-circle"], "f2bd", "M256 496c-54 0-103.9-17.9-144-48v0c0-61.9 50.1-112 112-112h64c61.9 0 112 50.1 112 112v0c5.3-4 10.4-8.2 15.4-12.6C409.1 370.6 354.5 320 288 320H224c-66.5 0-121.1 50.6-127.4 115.4C47.2 391.5 16 327.4 16 256C16 123.5 123.5 16 256 16s240 107.5 240 240s-107.5 240-240 240zm0 16A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-304a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"],
    "pen-to-square": [512, 512, ["edit"], "f044", "M460.3 39.6l12.1 12.1c15.6 15.6 15.6 40.9 0 56.6L440 140.7 371.3 72l32.4-32.4c15.6-15.6 40.9-15.6 56.6 0zM175.4 267.9L360 83.3 428.7 152 244.1 336.6c-5.3 5.3-12 9-19.3 10.7l-78.1 18 18-78.1c1.7-7.3 5.4-14 10.7-19.3zm217-239.6L164.1 256.6c-7.4 7.4-12.6 16.8-15 27l-20.9 90.6c-.6 2.7 .2 5.5 2.1 7.5s4.8 2.8 7.5 2.1l90.6-20.9c10.2-2.4 19.6-7.5 27-15L483.7 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 28.3c-21.9-21.9-57.3-21.9-79.2 0zM72 64C32.2 64 0 96.2 0 136V440c0 39.8 32.2 72 72 72H376c39.8 0 72-32.2 72-72V296c0-4.4-3.6-8-8-8s-8 3.6-8 8V440c0 30.9-25.1 56-56 56H72c-30.9 0-56-25.1-56-56V136c0-30.9 25.1-56 56-56H216c4.4 0 8-3.6 8-8s-3.6-8-8-8H72z"],
    "file-arrow-up": [384, 512, ["file-upload"], "f574", "M16 448V64c0-26.5 21.5-48 48-48H204.1c1.3 0 2.6 .1 3.9 .2V136c0 22.1 17.9 40 40 40H367.8c.2 1.3 .2 2.6 .2 3.9V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zM358.6 157.3c.9 .9 1.7 1.8 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9c1 .8 1.9 1.6 2.7 2.4L358.6 157.3zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM200 440V251.3l74.3 74.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 251.3V440c0 4.4 3.6 8 8 8s8-3.6 8-8z"],
    "arrow-up-from-bracket": [448, 512, [], "e09a", "M229.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-136 136c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L216 27.3V344c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3L354.3 149.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-136-136zM16 328c0-4.4-3.6-8-8-8s-8 3.6-8 8v96c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V328c0-4.4-3.6-8-8-8s-8 3.6-8 8v96c0 39.8-32.2 72-72 72H88c-39.8 0-72-32.2-72-72V328z"],
    "cloud-arrow-up": [640, 512, [62338, "cloud-upload", "cloud-upload-alt"], "f0ee", "M522.7 220.8c3.4-8.9 5.3-18.6 5.3-28.8c0-44.2-35.8-80-80-80c-16.5 0-31.7 5-44.4 13.5c-3.7 2.5-8.2 3.3-12.5 2.3s-8-3.8-10.2-7.6C355.9 77 309.3 48 256 48c-79.5 0-144 64.5-144 144c0 2.5 .1 4.9 .2 7.3c.4 7.1-4 13.5-10.7 15.9C51.7 232.7 16 280.2 16 336c0 70.7 57.3 128 128 128H512c61.9 0 112-50.1 112-112c0-54.2-38.5-99.4-89.6-109.8c-4.6-.9-8.6-3.9-10.9-8s-2.6-9.1-.9-13.4zM256 32c53.6 0 101 26.3 130 66.7c3.1 4.3 6 8.8 8.7 13.4c3.5-2.4 7.2-4.5 11-6.4C418.5 99.5 432.8 96 448 96c53 0 96 43 96 96c0 6.6-.7 13-1.9 19.2c-1.1 5.3-2.6 10.5-4.5 15.4c5.3 1.1 10.5 2.5 15.5 4.2C603.6 247.9 640 295.7 640 352c0 70.7-57.3 128-128 128H144C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160zM226.3 274.3l88-88c3.1-3.1 8.2-3.1 11.3 0l88 88c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L328 211.3V408c0 4.4-3.6 8-8 8s-8-3.6-8-8V211.3l-74.3 74.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3z"],
    "trash-can": [448, 512, [61460, "trash-alt"], "f2ed", "M157.4 27.3L134.4 64H313.6l-23-36.7c-4.4-7-12.1-11.3-20.4-11.3H177.7c-8.3 0-16 4.3-20.4 11.3zM115.6 64l28.2-45.2C151.1 7.1 163.9 0 177.7 0h92.5c13.8 0 26.6 7.1 33.9 18.8L332.4 64H440c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8H115.6zM40 112c4.4 0 8 3.6 8 8V440c0 30.9 25.1 56 56 56H344c30.9 0 56-25.1 56-56V120c0-4.4 3.6-8 8-8s8 3.6 8 8V440c0 39.8-32.2 72-72 72H104c-39.8 0-72-32.2-72-72V120c0-4.4 3.6-8 8-8zm96 48V416c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c0-4.4 3.6-8 8-8s8 3.6 8 8zm96 0V416c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c0-4.4 3.6-8 8-8s8 3.6 8 8zm96 0V416c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c0-4.4 3.6-8 8-8s8 3.6 8 8z"],
    "coins": [512, 512, [], "f51e", "M144 80c0 7 3.6 14.5 11.9 22.2c3.8 3.5 8.5 7 14 10.3c-8.4 .3-16.7 .8-24.8 1.5l-.1-.1c-10.3-9.5-17-21-17-33.9s6.7-24.4 17-33.9c10.3-9.5 24.8-17.7 42-24.5C221.4 8.2 268.5 0 320 0s98.6 8.2 133 21.6c17.2 6.7 31.7 14.9 41.9 24.5c10.3 9.5 17 21 17 33.9V184l0 105.9c0 12.7-6.8 24-17.1 33.2s-24.8 17.3-41.9 23.8c-11.1 4.2-23.5 7.9-37 11V341.5c11.4-2.7 21.9-5.9 31.3-9.5c16.1-6.1 28.6-13.3 36.9-20.7s11.8-14.7 11.8-21.3V216.2c-.4 .3-.7 .7-1.1 1c-10.3 9.3-24.8 17.3-41.9 23.8c-11.1 4.2-23.5 7.9-37 11V235.6c11.4-2.7 21.9-5.9 31.3-9.5c16.1-6.1 28.6-13.3 36.9-20.7s11.8-14.7 11.8-21.3l0-71.1c-.3 .3-.7 .6-1 1c-10.3 9.5-24.8 17.7-41.9 24.5c-20.1 7.9-44.6 13.9-71.7 17.6c-7.1-5-15-9.5-23.4-13.5c34.7-2.9 65.5-9.7 89.3-19c16.1-6.3 28.6-13.6 36.9-21.3C492.4 94.5 496 87 496 80s-3.6-14.5-11.9-22.2c-8.3-7.7-20.8-15-36.9-21.3C415 24 370.1 16 320 16s-95 8-127.2 20.5c-16.1 6.3-28.6 13.6-36.9 21.3C147.6 65.5 144 73 144 80zM16 224c0 7 3.6 14.5 11.9 22.2c8.3 7.7 20.8 15 36.9 21.3C97 280 141.9 288 192 288s95-8 127.2-20.5c16.1-6.3 28.6-13.6 36.9-21.3C364.4 238.5 368 231 368 224s-3.6-14.5-11.9-22.2c-8.3-7.7-20.8-15-36.9-21.3C287 168 242.1 160 192 160s-95 8-127.2 20.5c-16.1 6.3-28.6 13.6-36.9 21.3C19.6 209.5 16 217 16 224zM0 224c0-12.9 6.7-24.4 17-33.9c10.3-9.5 24.8-17.7 42-24.5C93.4 152.2 140.5 144 192 144s98.6 8.2 133 21.6c17.2 6.7 31.7 14.9 41.9 24.5c10.3 9.5 17 21 17 33.9V328l0 105.9c0 12.7-6.8 24-17.1 33.2s-24.8 17.3-41.9 23.8C290.5 504.1 243.5 512 192 512s-98.5-7.9-133-21.1c-17.2-6.5-31.6-14.5-41.9-23.8S0 446.6 0 433.9V328 224zm368 32.9c-.3 .3-.7 .6-1 1c-10.3 9.5-24.8 17.7-41.9 24.5C290.6 295.8 243.5 304 192 304s-98.6-8.2-133-21.6c-17.2-6.7-31.7-14.9-42-24.5c-.3-.3-.7-.6-1-1V328c0 6.6 3.5 13.8 11.8 21.3s20.8 14.6 36.9 20.7c32.2 12.3 77.2 20 127.3 20s95.1-7.8 127.3-20c16.1-6.1 28.6-13.3 36.9-20.7s11.8-14.7 11.8-21.3l0-71.1zM17.1 361.2c-.4-.3-.7-.7-1.1-1v73.7c0 6.6 3.5 13.8 11.8 21.3s20.8 14.6 36.9 20.7c32.2 12.3 77.2 20 127.3 20s95.1-7.7 127.3-20c16.1-6.1 28.6-13.3 36.9-20.7s11.8-14.7 11.8-21.3V360.2c-.4 .3-.7 .7-1.1 1c-10.3 9.3-24.8 17.3-41.9 23.8c-34.4 13.1-81.4 21.1-133 21.1s-98.5-7.9-133-21.1c-17.2-6.5-31.6-14.5-41.9-23.8z"],
    "book-medical": [448, 512, [], "f7e6", "M0 56C0 25.1 25.1 0 56 0H408c22.1 0 40 17.9 40 40V376c0 19.4-13.7 35.5-32 39.2V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56V56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40H400V416H56zm-40 .8C26.2 406.4 40.3 400 56 400H408c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24H56C33.9 16 16 33.9 16 56V416.8zM208 120v56c0 4.4-3.6 8-8 8H144c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h56c4.4 0 8 3.6 8 8v56c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V240c0-4.4 3.6-8 8-8h56c4.4 0 8-3.6 8-8V192c0-4.4-3.6-8-8-8H264c-4.4 0-8-3.6-8-8V120c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8zm8-24h32c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H272v48c0 13.3-10.7 24-24 24H216c-13.3 0-24-10.7-24-24V248H144c-13.3 0-24-10.7-24-24V192c0-13.3 10.7-24 24-24h48V120c0-13.3 10.7-24 24-24z"],
    "file-plus": [384, 512, [], "f319", "M16 448V64c0-26.5 21.5-48 48-48H204.1c1.3 0 2.6 .1 3.9 .2V136c0 22.1 17.9 40 40 40H367.8c.2 1.3 .2 2.6 .2 3.9V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zM358.6 157.3c.9 .9 1.7 1.8 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9c1 .8 1.9 1.6 2.7 2.4L358.6 157.3zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM192 240c-4.4 0-8 3.6-8 8v72H112c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v72c0 4.4 3.6 8 8 8s8-3.6 8-8V336h72c4.4 0 8-3.6 8-8s-3.6-8-8-8H200V248c0-4.4-3.6-8-8-8z"],
    "money-bill-1-wave": [576, 512, ["money-bill-wave-alt"], "f53b", "M16 112.5c0-11 13.2-22.1 28.4-17.9c84 22.9 167.6 1.6 246.3-18.5l0 0 0 0 0 0c4-1 8-2 12-3c83.9-21.3 162.6-38.8 240.7-9.6C553.1 67 560 77.2 560 89.7V399.5c0 11-13.2 22.1-28.4 17.9c-84-22.9-167.6-1.6-246.3 18.5c-4 1-8 2-12 3.1c-83.9 21.3-162.6 38.8-240.7 9.6C22.9 445 16 434.8 16 422.3V112.5zm-16 0V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM384 256c0-59-40.4-112-96-112s-96 53-96 112s40.4 112 96 112s96-53 96-112zm-96 96c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM536 160c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8c-30.9 0-56-25.1-56-56V80c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 39.8 32.2 72 72 72h8zM32 208c0 4.4 3.6 8 8 8h8c39.8 0 72-32.2 72-72v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 30.9-25.1 56-56 56H40c-4.4 0-8 3.6-8 8zm504 88h-8c-39.8 0-72 32.2-72 72v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-30.9 25.1-56 56-56h8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM32 360c0 4.4 3.6 8 8 8h8c30.9 0 56 25.1 56 56v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-39.8-32.2-72-72-72H40c-4.4 0-8 3.6-8 8zM272 200c-4.4 0-8 3.6-8 8s3.6 8 8 8h8v80H264c-4.4 0-8 3.6-8 8s3.6 8 8 8h24 24c4.4 0 8-3.6 8-8s-3.6-8-8-8H296V208c0-4.4-3.6-8-8-8H272z"],
    "arrow-up-long": [384, 512, ["long-arrow-up"], "f176", "M197.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 27.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3L338.3 165.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152z"],
    "mobile-screen": [384, 512, ["mobile-android-alt"], "f3cf", "M288 16c26.5 0 48 21.5 48 48V384H48V64c0-26.5 21.5-48 48-48H288zm48 384v48c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V400H336zM96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zm40 448c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8H144c-4.4 0-8 3.6-8 8z"],
    "file-check": [384, 512, [], "f316", "M64 496c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48H204.1c1.3 0 2.6 .1 3.9 .2V136c0 22.1 17.9 40 40 40H367.8c.2 1.3 .2 2.6 .2 3.9V448c0 26.5-21.5 48-48 48H64zM358.6 157.3c.9 .9 1.7 1.8 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9c1 .8 1.9 1.6 2.7 2.4L358.6 157.3zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM277.7 280.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-101 101-47.7-47.7c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L159.7 387c3.1 3.1 8.2 3.1 11.3 0L277.7 280.3z"],
    "arrow-left": [448, 512, [8592], "f060", "M2.5 250.2C.9 251.7 0 253.8 0 256s.9 4.3 2.5 5.8l192 184c3.2 3.1 8.3 3 11.3-.2s2.9-8.3-.2-11.3L27.9 264 440 264c4.4 0 8-3.6 8-8s-3.6-8-8-8L27.9 248 205.5 77.8c3.2-3.1 3.3-8.1 .2-11.3s-8.1-3.3-11.3-.2l-192 184z"],
    "circle-question": [512, 512, [62108, "question-circle"], "f059", "M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168-56c0-30.9 25.1-56 56-56h56.2c35.2 0 63.8 28.6 63.8 63.8c0 21.4-10.8 41.5-28.7 53.3L264 294.9V320c0 4.4-3.6 8-8 8s-8-3.6-8-8V290.5c0-2.7 1.4-5.2 3.6-6.7l54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9c0-26.4-21.4-47.8-47.8-47.8H224c-22.1 0-40 17.9-40 40l0 6.5c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-6.5zm72 168a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"],
    "circle-exclamation": [512, 512, ["exclamation-circle"], "f06a", "M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-4.4 0-8 3.6-8 8V296c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-4.4-3.6-8-8-8zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"],
    "window-restore": [512, 512, [], "f2d2", "M432 16H208c-35.3 0-64 28.7-64 64V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V368h16c35.3 0 64-28.7 64-64V80c0-35.3-28.7-64-64-64zM320 144H64c-26.5 0-48 21.5-48 48v64H368V192c0-26.5-21.5-48-48-48zM16 448c0 26.5 21.5 48 48 48H320c26.5 0 48-21.5 48-48V272H16V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"],
    "window-maximize": [512, 512, [128470], "f2d0", "M64 51.2C39.3 51.2 19.2 71.3 19.2 96v80H492.8V96c0-24.7-20.1-44.8-44.8-44.8H64zM19.2 192V416c0 24.7 20.1 44.8 44.8 44.8H448c24.7 0 44.8-20.1 44.8-44.8V192H19.2zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"],
    "arrow-down-long": [384, 512, ["long-arrow-down"], "f175", "M186.3 509.7c3.1 3.1 8.2 3.1 11.3 0l152-152c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 484.7 200 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 476.7L45.7 346.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l152 152z"],
    "file-excel": [384, 512, [], "f1c3", "M16 448V64c0-26.5 21.5-48 48-48H204.1c1.3 0 2.6 .1 3.9 .2V136c0 22.1 17.9 40 40 40H367.8c.2 1.3 .2 2.6 .2 3.9V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zM358.6 157.3c.9 .9 1.7 1.8 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9c1 .8 1.9 1.6 2.7 2.4L358.6 157.3zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zm70.7 227.6c-2.5-3.7-7.4-4.7-11.1-2.2s-4.7 7.4-2.2 11.1l61 91.6-61 91.6c-2.5 3.7-1.5 8.6 2.2 11.1s8.6 1.5 11.1-2.2l57.3-86 57.3 86c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-61-91.6 61-91.6c2.5-3.7 1.5-8.6-2.2-11.1s-8.6-1.5-11.1 2.2l-57.3 86-57.3-86z"],
    "spell-check": [576, 512, [], "f891", "M119.3 4.8C118.1 1.9 115.2 0 112 0s-6.1 1.9-7.3 4.8L.7 244.8c-1.8 4.1 .1 8.8 4.2 10.5s8.8-.1 10.5-4.2L48 175.8v.2H176v-.2l32.7 75.4c1.8 4.1 6.5 5.9 10.5 4.2s5.9-6.5 4.2-10.5l-104-240zM169.1 160H54.9L112 28.1 169.1 160zM256 16V120 240c0 8.8 7.2 16 16 16H376c39.8 0 72-32.2 72-72c0-34.2-23.8-62.8-55.8-70.2C406.7 102.1 416 84.1 416 64c0-35.3-28.7-64-64-64H272c-8.8 0-16 7.2-16 16zm96 96H272V16h80c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-80 16h80 24c30.9 0 56 25.1 56 56s-25.1 56-56 56H272V128zM565.7 301.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L351.8 492.9 237.5 386.2c-3.2-3-8.3-2.8-11.3 .4s-2.8 8.3 .4 11.3l120 112c3.2 2.9 8.1 2.9 11.1-.2l208-208z"],
    "volume-off": [320, 512, [], "f026", "M290.2 48c-3.4 0-6.6 1.2-9.2 3.5L143.2 174c-1.5 1.3-3.4 2-5.3 2H56c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h81.9c2 0 3.9 .7 5.3 2L281 460.5c2.5 2.2 5.8 3.5 9.2 3.5c7.6 0 13.8-6.2 13.8-13.8V61.8c0-7.6-6.2-13.8-13.8-13.8zm-19.8-8.5c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8V450.2c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5L134.9 352H56c-30.9 0-56-25.1-56-56V216c0-30.9 25.1-56 56-56h78.9L270.4 39.5z"],
    "check": [448, 512, [10003, 10004], "f00c", "M437.7 106.3c3.1 3.1 3.1 8.2 0 11.3l-272 272c-3.1 3.1-8.2 3.1-11.3 0l-144-144c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L160 372.7 426.3 106.3c3.1-3.1 8.2-3.1 11.3 0z"],
    "magnifying-glass": [512, 512, [128269, "search"], "f002", "M400 208A192 192 0 1 0 16 208a192 192 0 1 0 384 0zM349.3 360.6C312.2 395 262.6 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 54.6-21 104.2-55.4 141.3l149 149c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-149-149z"],
    "headphones": [512, 512, [127911], "f025", "M16 288C16 155.4 123.5 48 256 48s240 107.4 240 240c-14.6-19.4-37.8-32-64-32c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80V368 336 288C512 146.6 397.4 32 256 32S0 146.6 0 288v48 32 32c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48c-26.2 0-49.4 12.6-64 32zm0 48c0-35.3 28.7-64 64-64c17.7 0 32 14.3 32 32V432c0 17.7-14.3 32-32 32c-35.3 0-64-28.7-64-64V368 336zm480 0v32 32c0 35.3-28.7 64-64 64c-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32c35.3 0 64 28.7 64 64z"],
    "a": [384, 512, [97], "41", "M199.4 36.9c-1.3-3-4.2-4.9-7.4-4.9s-6.1 1.9-7.4 4.9L.6 468.9c-1.7 4.1 .2 8.8 4.2 10.5s8.8-.2 10.5-4.2L61 368H323l45.6 107.1c1.7 4.1 6.4 6 10.5 4.2s6-6.4 4.2-10.5l-184-432zM316.2 352H67.8L192 60.4 316.2 352z"],
    "b": [320, 512, [98], "42", "M32 32C14.3 32 0 46.3 0 64V248 448c0 17.7 14.3 32 32 32H200c66.3 0 120-53.7 120-120c0-56.7-39.3-104.2-92.1-116.7C263.6 224.5 288 187.1 288 144c0-61.9-50.1-112-112-112H32zM176 240H16V64c0-8.8 7.2-16 16-16H176c53 0 96 43 96 96s-43 96-96 96zM16 256H176h24c57.4 0 104 46.6 104 104s-46.6 104-104 104H32c-8.8 0-16-7.2-16-16V256z"],
    "font-case": [640, 512, [], "f866", "M183.5 37.1C182.3 34 179.3 32 176 32s-6.3 2-7.5 5.1L.6 469.1c-1.6 4.1 .4 8.8 4.6 10.4s8.8-.4 10.4-4.6L63.3 352c.2 0 .5 0 .7 0H288c.2 0 .5 0 .7 0l47.8 122.9c1.6 4.1 6.2 6.2 10.4 4.6s6.2-6.2 4.6-10.4l-168-432zM282.5 336H69.5L176 62.1 282.5 336zM632 160c-4.4 0-8 3.6-8 8v49.2C603.8 183 566.6 160 524 160c-64.1 0-116 51.9-116 116v88c0 64.1 51.9 116 116 116c42.6 0 79.8-23 100-57.2V472c0 4.4 3.6 8 8 8s8-3.6 8-8V364 276 168c0-4.4-3.6-8-8-8zm-8 116v88c0 55.2-44.8 100-100 100s-100-44.8-100-100V276c0-55.2 44.8-100 100-100s100 44.8 100 100z"],
    "square-chevron-down": [448, 512, ["chevron-square-down"], "f329", "M64 464c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48H384c26.5 0 48 21.5 48 48V416c0 26.5-21.5 48-48 48H64zM0 416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416zm229.7-74.3l120-120c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 324.7 109.7 210.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0z"],
    "square-chevron-up": [448, 512, ["chevron-square-up"], "f32c", "M64 48C37.5 48 16 69.5 16 96V416c0 26.5 21.5 48 48 48H384c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm229.7 74.3l120 120c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L224 187.3 109.7 301.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l120-120c3.1-3.1 8.2-3.1 11.3 0z"],
    "book-circle-arrow-up": [640, 512, [], "e0bd", "M56 0C25.1 0 0 25.1 0 56V456c0 30.9 25.1 56 56 56H394.8c-6.9-4.9-13.5-10.2-19.6-16H56c-22.1 0-40-17.9-40-40s17.9-40 40-40H326.6c-1.5-5.2-2.7-10.6-3.7-16H56c-15.7 0-29.8 6.4-40 16.8V56c0-22.1 17.9-40 40-40H408c13.3 0 24 10.7 24 24V204c5.2-2 10.6-3.8 16-5.4V40c0-22.1-17.9-40-40-40H56zM368 368a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-213.7-2.3c3.1 3.1 8.2 3.1 11.3 0L488 315.3V440c0 4.4 3.6 8 8 8s8-3.6 8-8V315.3l50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64c-3.1-3.1-8.2-3.1-11.3 0l-64 64c-3.1 3.1-3.1 8.2 0 11.3z"],
    "file-pdf": [512, 512, [], "f1c1", "M64 496h48v16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H204.1c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9V304H368V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64C37.5 16 16 37.5 16 64V448c0 26.5 21.5 48 48 48zM361.1 160c-.8-1-1.6-1.9-2.4-2.7L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4V136c0 13.3 10.7 24 24 24H361.1zM176 368h32c26.5 0 48 21.5 48 48s-21.5 48-48 48H184v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V456 376c0-4.4 3.6-8 8-8zm32 80c17.7 0 32-14.3 32-32s-14.3-32-32-32H184v64h24zm96-80h32c22.1 0 40 17.9 40 40v64c0 22.1-17.9 40-40 40H304c-4.4 0-8-3.6-8-8V376c0-4.4 3.6-8 8-8zm8 128h24c13.3 0 24-10.7 24-24V408c0-13.3-10.7-24-24-24H312V496zM424 376c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8s-3.6 8-8 8H440v48h40c4.4 0 8 3.6 8 8s-3.6 8-8 8H440v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V440 376z"],
    "book-open-reader": [512, 512, ["book-reader"], "f5da", "M256 16a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176A96 96 0 1 0 256 0a96 96 0 1 0 0 192zm0 48s-56.8-42.6-224-47.5C14.4 191.9 0 206.3 0 224V432c0 17.7 14.4 31.9 32 32.7c114.9 4.7 186.9 33.7 208.8 43.8c4.8 2.2 9.9 3.5 15.1 3.5s10.4-1.3 15.1-3.5c21.9-10.1 93.9-39.1 208.8-43.8c17.7-.7 32-15 32-32.7V224c0-17.7-14.4-32.1-32-31.5C312.8 197.4 256 240 256 240zm-8 14V494.2c-.1-.1-.3-.1-.4-.2c-23.5-10.9-97.6-40.5-214.9-45.3c-9.5-.4-16.7-8-16.7-16.7V224c0-8.9 7.2-15.8 15.6-15.5c82.3 2.4 136.8 14.1 170.2 24.9c16.7 5.4 28.3 10.5 35.4 14.2c3.6 1.8 6 3.3 7.5 4.2c.7 .5 1.2 .8 1.5 1l.2 .2L248 254zm16 240.2V254l1.5-1.1 .2-.2c.3-.2 .8-.5 1.5-1c1.5-.9 4-2.4 7.5-4.2c7.1-3.7 18.7-8.8 35.4-14.2c33.5-10.8 88-22.4 170.2-24.9c8.4-.2 15.6 6.6 15.6 15.5V432c0 8.7-7.2 16.3-16.7 16.7C362 453.5 287.9 483.1 264.4 494c-.1 .1-.3 .1-.4 .2z"],
    "right-to-bracket": [512, 512, ["sign-in-alt"], "f2f6", "M332.7 264c2.1-2.1 3.3-5 3.3-8s-1.2-5.9-3.3-8L200.6 116.2c-2.7-2.7-6.4-4.2-10.2-4.2c-8 0-14.4 6.5-14.4 14.4l0 73.6c0 4.4-3.6 8-8 8L32 208c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l136 0c4.4 0 8 3.6 8 8l0 73.6c0 8 6.5 14.4 14.4 14.4c3.8 0 7.5-1.5 10.2-4.2L332.7 264zm19.3-8c0 7.2-2.9 14.2-8 19.3L211.9 407.1c-5.7 5.7-13.4 8.9-21.5 8.9c-16.8 0-30.4-13.6-30.4-30.4l0-65.6L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-65.6c0-16.8 13.6-30.4 30.4-30.4c8.1 0 15.8 3.2 21.5 8.9L344 236.7c5.1 5.1 8 12.1 8 19.3zM328 464l96 0c39.8 0 72-32.2 72-72l0-272c0-39.8-32.2-72-72-72l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l96 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z"],
    "magnifying-glass-plus": [512, 512, ["search-plus"], "f00e", "M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm-8-112c0 4.4 3.6 8 8 8s8-3.6 8-8V216h88c4.4 0 8-3.6 8-8s-3.6-8-8-8H216V112c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H112c-4.4 0-8 3.6-8 8s3.6 8 8 8h88v88z"],
    "magnifying-glass-minus": [512, 512, ["search-minus"], "f010", "M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM112 200c-4.4 0-8 3.6-8 8s3.6 8 8 8H304c4.4 0 8-3.6 8-8s-3.6-8-8-8H112z"],
    "book-arrow-up": [448, 512, [], "e0ba", "M56 0C25.1 0 0 25.1 0 56V456c0 30.9 25.1 56 56 56H192V496H56c-22.1 0-40-17.9-40-40s17.9-40 40-40H192V400H56c-15.7 0-29.8 6.4-40 16.8V56c0-22.1 17.9-40 40-40H408c13.3 0 24 10.7 24 24V376c0 13.3-10.7 24-24 24H288v16H400v80H288v16H440c4.4 0 8-3.6 8-8s-3.6-8-8-8H416V415.2c18.3-3.7 32-19.8 32-39.2V40c0-22.1-17.9-40-40-40H56zm74.3 234.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L232 155.3 232 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-348.7 90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-104-104c-3.1-3.1-8.2-3.1-11.3 0l-104 104z"],
    "share-nodes": [448, 512, ["share-alt"], "f1e0", "M448 112c0 44.2-35.8 80-80 80c-25.9 0-48.9-12.3-63.5-31.3L157.1 234.4c1.9 6.9 2.9 14.1 2.9 21.6s-1 14.7-2.9 21.6l147.5 73.7c14.6-19 37.6-31.3 63.5-31.3c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80c0-12.6 2.9-24.5 8.1-35L151.2 292.5C137.9 318.3 111 336 80 336c-44.2 0-80-35.8-80-80s35.8-80 80-80c31 0 57.9 17.7 71.2 43.5L296.1 147c-5.2-10.6-8.1-22.5-8.1-35c0-44.2 35.8-80 80-80s80 35.8 80 80zM80 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM432 112a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM368 464a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"],
    "cart-shopping": [576, 512, [128722, "shopping-cart"], "f07a", "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8H45.7C57.1 16 67 24.1 69.2 35.4l59.4 303.4c5.1 26.3 28.2 45.2 55 45.2H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H183.5c-19.1 0-35.6-13.5-39.3-32.3L134.9 288h339c26 0 48.6-17.9 54.5-43.3L566.6 81.1C572.5 56 553.4 32 527.7 32H84.8C81 13.4 64.7 0 45.7 0H8zM88 48H527.7c15.5 0 26.9 14.4 23.4 29.5L512.9 241.1c-4.2 18.1-20.4 30.9-39 30.9H131.8L88 48zm56 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm240-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"],
    "pen-clip": [512, 512, ["pen-alt"], "f305", "M374.1 30.6c18.7-18.7 49.1-18.7 67.9 0l39.4 39.4c18.7 18.7 18.7 49.1 0 67.9L427.3 192 320 84.7l54.1-54.1zM297.4 84.7L99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9 .9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1L492.7 149.3c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0L308.7 73.4 295.6 60.3c-21.9-21.9-57.3-21.9-79.2 0L98.3 178.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L227.7 71.6c15.6-15.6 40.9-15.6 56.6 0l13.1 13.1zM308.7 96L416 203.3 218.2 401.1c-45.8 45.8-104.1 77-167.6 89.7l-25 5c-2.6 .5-5.3-.3-7.2-2.2s-2.7-4.6-2.2-7.2l5-25c12.7-63.5 43.9-121.8 89.7-167.6L308.7 96z"],
    "wifi": [640, 512, ["wifi-3", "wifi-strong"], "f1eb", "M13.8 175.3C92 96.6 200.3 48 320 48s228 48.6 306.2 127.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3C556.4 82.5 444.1 32 320 32S83.6 82.5 2.5 164c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zM320 208c72.2 0 137.8 28.1 186.5 74c3.2 3 8.3 2.9 11.3-.3s2.9-8.3-.3-11.3C465.9 221.8 396.4 192 320 192s-145.9 29.8-197.5 78.4c-3.2 3-3.4 8.1-.3 11.3s8.1 3.4 11.3 .3c48.7-45.9 114.3-74 186.5-74zm0 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"],
    "wifi-slash": [640, 512, [], "f6ac", "M1.7 3C4.5-.4 9.5-1 13 1.7l624 496c3.5 2.7 4 7.8 1.3 11.2s-7.8 4-11.2 1.3L3 14.3C-.4 11.5-1 6.5 1.7 3zM385.4 215.9l-27.1-21.4c61.2 8.1 116.4 35.5 159.2 75.8c3.2 3 3.4 8.1 .3 11.3s-8.1 3.4-11.3 .3c-33.5-31.6-75-54.7-121.1-66.1zM187 242.7c-19.4 10.9-37.4 24.1-53.5 39.3c-3.2 3-8.3 2.9-11.3-.3s-2.9-8.3 .3-11.3C138 255.8 155 242.9 173.4 232L187 242.7zm8.8-176.6l-15.2-12C224.4 39.8 271.3 32 320 32c124.1 0 236.4 50.5 317.5 132c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0C548 96.6 439.7 48 320 48c-43.2 0-84.9 6.3-124.3 18.1zM42.3 128.5l12.9 10.2C40.6 150 26.8 162.2 13.8 175.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3c12.5-12.6 25.8-24.5 39.8-35.5zm217 307.8a64 64 0 1 1 121.4-40.7A64 64 0 1 1 259.3 436.3zM368 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"],

  };

  bunker(function () {
    defineIcons('fat', icons);
    defineIcons('fa-thin', icons);
  });

}());
(function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _wrapRegExp() {
    _wrapRegExp = function (re, groups) {
      return new BabelRegExp(re, void 0, groups);
    };

    var _super = RegExp.prototype,
        _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = new RegExp(re, flags);

      return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
    }

    function buildGroups(result, re) {
      var g = _groups.get(re);

      return Object.keys(g).reduce(function (groups, name) {
        return groups[name] = result[g[name]], groups;
      }, Object.create(null));
    }

    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
      var result = _super.exec.call(this, str);

      return result && (result.groups = buildGroups(result, this)), result;
    }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
      if ("string" == typeof substitution) {
        var groups = _groups.get(this);

        return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
          return "$" + groups[name];
        }));
      }

      if ("function" == typeof substitution) {
        var _this = this;

        return _super[Symbol.replace].call(this, str, function () {
          var args = arguments;
          return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
        });
      }

      return _super[Symbol.replace].call(this, str, substitution);
    }, _wrapRegExp.apply(this, arguments);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_CSS_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var FAMILY_CLASSIC = 'classic';
  var FAMILY_SHARP = 'sharp';
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      }
    });
  }
  var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty(_familyProxy, FAMILY_CLASSIC, {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit'
  }), _defineProperty(_familyProxy, FAMILY_SHARP, {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light'
  }), _familyProxy));
  var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  }), _defineProperty(_familyProxy2, FAMILY_SHARP, {
    'solid': 'fass',
    'regular': 'fasr',
    'light': 'fasl'
  }), _familyProxy2));
  var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
    'fab': 'fa-brands',
    'fad': 'fa-duotone',
    'fak': 'fa-kit',
    'fal': 'fa-light',
    'far': 'fa-regular',
    'fas': 'fa-solid',
    'fat': 'fa-thin'
  }), _defineProperty(_familyProxy3, FAMILY_SHARP, {
    'fass': 'fa-solid',
    'fasr': 'fa-regular',
    'fasl': 'fa-light'
  }), _familyProxy3));
  var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  }), _defineProperty(_familyProxy4, FAMILY_SHARP, {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl'
  }), _familyProxy4));
  var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/; // eslint-disable-line no-useless-escape

  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
  var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  }), _defineProperty(_familyProxy5, FAMILY_SHARP, {
    '900': 'fass',
    '400': 'fasr',
    '300': 'fasl'
  }), _familyProxy5));
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    styleDefault: 'solid',
    familyDefault: 'classic',
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  }; // familyPrefix is deprecated but we must still support it if present

  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }

  var _config = _objectSpread2(_objectSpread2({}, _default), initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_default).forEach(function (key) {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function set(val) {
        _config[key] = val;

        _onChangeCb.forEach(function (cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config[key];
      }
    });
  }); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

  Object.defineProperty(config, 'familyPrefix', {
    enumerable: true,
    set: function set(val) {
      _config.cssPrefix = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);

    return function () {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }

  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var baseStyles = ":host,:root{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Solid\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Regular\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Light\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Thin\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-regular:normal 400 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-light:normal 300 1em/1 \"Font Awesome 6 Sharp\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\"}svg:not(:host).svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible;box-sizing:content-box}.svg-inline--fa{display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285705em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333337em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285718em;vertical-align:.0535714295em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666682em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1,1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}100%{-webkit-transform:scale(1,1) translateY(0);transform:scale(1,1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,100%{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}24%,8%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}100%,40%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:var(--fa-inverse,#fff)}";

  function css() {
    var dcp = DEFAULT_CSS_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.cssPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dcp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var _cssInserted = false;

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  var InjectCSS = {
    mixout: function mixout() {
      return {
        dom: {
          css: css,
          insertCss: ensureCss
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg: function beforeI2svg() {
          ensureCss();
        }
      };
    }
  };

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  /**
   * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
   *
   * Copyright Mathias Bynens <https://mathiasbynens.be/>

   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:

   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.

   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // eslint-disable-line eqeqeq
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }

  function toHex(unicode) {
    var decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }
  function codePointAt(string, index) {
    var size = string.length;
    var first = string.charCodeAt(index);
    var second;

    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);

      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }

    return first;
  }

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
    d1: 1,
    d2: 2
  }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
    cls1: 1,
    d1: 2,
    cls2: 3,
    d2: 4
  }), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
    cls1: 1,
    d1: 2
  })];

  var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
  var styles = namespace.styles,
      shims = namespace.shims;
  var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  var PREFIXES = (_PREFIXES = {}, _defineProperty(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function getIconName(cssPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'number';
        });
        aliases.forEach(function (alias) {
          acc[alias.toString(16)] = iconName;
        });
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      acc[iconName] = iconName;

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'string';
        });
        aliases.forEach(function (alias) {
          acc[alias] = iconName;
        });
      }

      return acc;
    });
    _byAlias = lookup(function (acc, icon, iconName) {
      var aliases = icon[2];
      acc[iconName] = iconName;
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
      return acc;
    }); // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.

    var hasRegular = 'far' in styles || config.autoFetchSvg;
    var shimLookups = reduce(shims, function (acc, shim) {
      var maybeNameMaybeUnicode = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      if (typeof maybeNameMaybeUnicode === 'string') {
        acc.names[maybeNameMaybeUnicode] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      if (typeof maybeNameMaybeUnicode === 'number') {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix: prefix,
          iconName: iconName
        };
      }

      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange(function (c) {
    _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    var oldUnicode = _byOldUnicode[unicode];
    var newUnicode = byUnicode('fas', unicode);
    return oldUnicode || (newUnicode ? {
      prefix: 'fas',
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getCanonicalPrefix(styleOrPrefix) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$family = params.family,
        family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
    var style = PREFIX_TO_STYLE[family][styleOrPrefix];
    var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    return prefix || defined || null;
  }
  var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
  function getCanonicalIcon(values) {
    var _famProps;

    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups,
        skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var famProps = (_famProps = {}, _defineProperty(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
    var givenPrefix = null;
    var family = FAMILY_CLASSIC;

    if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
      return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
    })) {
      family = FAMILY_CLASSIC;
    }

    if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
      return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
    })) {
      family = FAMILY_SHARP;
    }

    var canonical = values.reduce(function (acc, cls) {
      var iconName = getIconName(config.cssPrefix, cls);

      if (styles[cls]) {
        cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
        givenPrefix = cls;
        acc.prefix = cls;
      } else if (PREFIXES[family].indexOf(cls) > -1) {
        givenPrefix = cls;
        acc.prefix = getCanonicalPrefix(cls, {
          family: family
        });
      } else if (iconName) {
        acc.iconName = iconName;
      } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
        acc.rest.push(cls);
      }

      if (!skipLookups && acc.prefix && acc.iconName) {
        var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
        var aliasIconName = byAlias(acc.prefix, acc.iconName);

        if (shim.prefix) {
          givenPrefix = null;
        }

        acc.iconName = shim.iconName || aliasIconName || acc.iconName;
        acc.prefix = shim.prefix || acc.prefix;

        if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
          // Allow a fallback from the regular style to solid if regular is not available
          // but only if we aren't auto-fetching SVGs
          acc.prefix = 'fas';
        }
      }

      return acc;
    }, emptyCanonicalIcon());

    if (values.includes('fa-brands') || values.includes('fab')) {
      canonical.prefix = 'fab';
    }

    if (values.includes('fa-duotone') || values.includes('fad')) {
      canonical.prefix = 'fad';
    }

    if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
      canonical.prefix = 'fass';
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }

    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
      // The fa prefix is not canonical. So if it has made it through until this point
      // we will shift it to the correct prefix.
      canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }

    return canonical;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
          defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

          var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
          if (longPrefix) defineIcons(longPrefix, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          var aliases = icon[2];
          if (!additions[prefix]) additions[prefix] = {};

          if (aliases.length > 0) {
            aliases.forEach(function (alias) {
              if (typeof alias === 'string') {
                additions[prefix][alias] = icon;
              }
            });
          }

          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    var obj = _ref.mixoutsTo;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(function (k) {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });

    _plugins.forEach(function (plugin) {
      var mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach(function (tk) {
        if (typeof mixout[tk] === 'function') {
          obj[tk] = mixout[tk];
        }

        if (_typeof(mixout[tk]) === 'object') {
          Object.keys(mixout[tk]).forEach(function (sk) {
            if (!obj[tk]) {
              obj[tk] = {};
            }

            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });

      if (plugin.hooks) {
        var hooks = plugin.hooks();
        Object.keys(hooks).forEach(function (hook) {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }

          _hooks[hook].push(hooks[hook]);
        });
      }

      if (plugin.provides) {
        plugin.provides(providers);
      }
    });

    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      hookFn.apply(null, args);
    });
    return undefined;
  }
  function callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
  }

  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
      iconLookup.prefix = 'fas';
    }

    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
  };
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        callHooks('beforeI2svg', params);
        callProvided('pseudoElements2svg', params);
        return callProvided('i2svg', params);
      } else {
        return Promise.reject('Operation requires a DOM of some kind.');
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        callHooks('watch', params);
      });
    }
  };
  var parse = {
    icon: function icon(_icon) {
      if (_icon === null) {
        return null;
      }

      if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
        return {
          prefix: _icon.prefix,
          iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
      }

      if (Array.isArray(_icon) && _icon.length === 2) {
        var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
        var prefix = getCanonicalPrefix(_icon[0]);
        return {
          prefix: prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }

      if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }

      if (typeof _icon === 'string') {
        var _prefix = getDefaultUsablePrefix();

        return {
          prefix: _prefix,
          iconName: byAlias(_prefix, _icon) || _icon
        };
      }
    }
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    parse: parse,
    library: library,
    findIconDefinition: findIconDefinition,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  function bootstrap(plugins) {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        callHooks('bootstrap');
      });
    }

    namespace.hooks = _objectSpread2(_objectSpread2({}, namespace.hooks), {}, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        build();
        autoReplace();
      },
      addPacks: function addPacks(packs) {
        packs.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prefix = _ref2[0],
              icons = _ref2[1];

          namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        });
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) {
      content.children.push({
        tag: 'title',
        attributes: {
          id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });
      delete content.attributes.title;
    }

    var args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });

    var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
      children: [],
      attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
      children: [],
      attributes: {}
    },
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread2({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  var styles$1 = namespace.styles;
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };

  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
  }

  function findIcon(iconName, prefix) {
    var givenPrefix = prefix;

    if (prefix === 'fa' && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }

    return new Promise(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: callProvided('missingIconAbstract') || {}
      };

      if (givenPrefix === 'fa') {
        var shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }

      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        var icon = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
      }));
    });
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"6.4.0\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };

  var noop$2 = function noop() {};

  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  function hasPrefixAndIcon(node) {
    var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon;
  }

  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  function createElementNS(tag) {
    return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
  }

  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }

  function convertSVG(abstractObj) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$ceFn = params.ceFn,
        ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

    if (typeof abstractObj === 'string') {
      return DOCUMENT.createTextNode(abstractObj);
    }

    var tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function (key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function (child) {
      tag.appendChild(convertSVG(child, {
        ceFn: ceFn
      }));
    });
    return tag;
  }

  function nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    return comment;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];

      if (node.parentNode) {
        mutation[1].forEach(function (_abstract) {
          node.parentNode.insertBefore(convertSVG(_abstract), node);
        });

        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          var comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete _abstract2[0].attributes.id;

      if (_abstract2[0].attributes.class) {
        var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }

          return acc;
        }, {
          toNode: [],
          toSvg: []
        });

        _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');

        if (splitClasses.toNode.length === 0) {
          node.removeAttribute('class');
        } else {
          node.setAttribute('class', splitClasses.toNode.join(' '));
        }
      }

      var newInnerHTML = _abstract2.map(function (a) {
        return toHtml(a);
      }).join('\n');

      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  function performOperationSync(op) {
    op();
  }

  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var _options$treeCallback = options.treeCallback,
        treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
        _options$nodeCallback = options.nodeCallback,
        nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
        _options$pseudoElemen = options.pseudoElementsCallback,
        pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      var defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.iconName && val.prefix) {
      return val;
    }

    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }

    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }

    return val;
  }

  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');
    var titleId = node.getAttribute('data-fa-title-id');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
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
  function parseMeta(node) {
    var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      styleParser: true
    };

    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraAttributes = attributesParser(node);
    var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    var extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }

  var styles$2 = namespace.styles;

  function generateMutation(node) {
    var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided('generateLayersText', node, nodeMeta);
    } else {
      return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
  }

  var knownPrefixes = new Set();
  FAMILIES.map(function (family) {
    knownPrefixes.add("fa-".concat(family));
  });
  Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
  Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
  knownPrefixes = _toConsumableArray(knownPrefixes);

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
      return "fa-".concat(f);
    }).concat(Object.keys(styles$2));

    if (!prefixes.includes('fa')) {
      prefixes.push('fa');
    }

    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }

    var candidates = [];

    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {// noop
    }

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return Promise.resolve();
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e.name === 'MissingIcon') {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new Promise(function (resolve, reject) {
      Promise.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function (e) {
        mark();
        reject(e);
      });
    });
  }

  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask: mask
      }));
    };
  }

  var render = function render(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return domVariants(_objectSpread2({
      type: 'icon'
    }, iconDefinition), function () {
      callHooks('beforeDOMElementCreation', {
        iconDefinition: iconDefinition,
        params: params
      });

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout: function mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.i2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;
        return onTree(node, callback);
      };

      providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
        var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            titleId = nodeMeta.titleId,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            maskId = nodeMeta.maskId,
            extra = nodeMeta.extra;
        return new Promise(function (resolve, reject) {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                main = _ref2[0],
                mask = _ref2[1];

            resolve([node, makeInlineSvgAbstract({
              icons: {
                main: main,
                mask: mask
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              maskId: maskId,
              title: title,
              titleId: titleId,
              extra: extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };

      providers$$1.generateAbstractIcon = function (_ref3) {
        var children = _ref3.children,
            attributes = _ref3.attributes,
            main = _ref3.main,
            transform = _ref3.transform,
            styles = _ref3.styles;
        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        var nextChild;

        if (transformIsMeaningful(transform)) {
          nextChild = callProvided('generateAbstractTransformGrouping', {
            main: main,
            transform: transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }

        children.push(nextChild || main.icon);
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var Layers = {
    mixout: function mixout() {
      return {
        layer: function layer(assembler) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes;
          return domVariants({
            type: 'layer'
          }, function () {
            callHooks('beforeDOMElementCreation', {
              assembler: assembler,
              params: params
            });
            var children = [];
            assembler(function (args) {
              Array.isArray(args) ? args.map(function (a) {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: 'span',
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
              },
              children: children
            }];
          });
        }
      };
    }
  };

  var LayersCounter = {
    mixout: function mixout() {
      return {
        counter: function counter(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'counter',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    }
  };

  var LayersText = {
    mixout: function mixout() {
      return {
        text: function text(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$transform = params.transform,
              transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
              _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'text',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersTextAbstract({
              content: content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.generateLayersText = function (node, nodeMeta) {
        var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;
        var width = null;
        var height = null;

        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }

        if (config.autoA11y && !title) {
          extra.attributes['aria-hidden'] = 'true';
        }

        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width: width,
          height: height,
          transform: transform,
          title: title,
          extra: extra,
          watchable: true
        })]);
      };
    }
  };

  var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  function hexValueFromContent(content) {
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    var codePoint = codePointAt(cleaned, 0);
    var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return {
      value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
      isSecondary: isPrependTen || isDoubled
    };
  }

  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new Promise(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');

        var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
        var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

        var _hexValueFromContent = hexValueFromContent(_content),
            hexValue = _hexValueFromContent.value,
            isSecondary = _hexValueFromContent.isSecondary;

        var isV4 = fontFamily[0].startsWith('FontAwesome');
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName;

        if (isV4) {
          var iconName4 = byOldUnicode(hexValue);

          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
        // already done so with the same prefix and iconName


        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var _abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));

            var element = DOCUMENT.createElement('svg');

            if (position === '::before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = _abstract.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  function replace(node) {
    return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
  }

  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new Promise(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      Promise.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var PseudoElements = {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.pseudoElements2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };

  var _unwatched = false;
  var MutationObserver$1 = {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          observe(chainHooks('mutationObserverCallbacks', {}));
        },
        noAuto: function noAuto() {
          disconnect();
        },
        watch: function watch(params) {
          var observeMutationsRoot = params.observeMutationsRoot;

          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks('mutationObserverCallbacks', {
              observeMutationsRoot: observeMutationsRoot
            }));
          }
        }
      };
    }
  };

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var transformString = node.getAttribute('data-fa-transform');

          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }

          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractTransformGrouping = function (_ref) {
        var main = _ref.main,
            transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        var operations = {
          outer: outer,
          inner: inner,
          path: path
        };
        return {
          tag: 'g',
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(_abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (_abstract.attributes && (_abstract.attributes.fill || force)) {
      _abstract.attributes.fill = 'black';
    }

    return _abstract;
  }

  function deGroup(_abstract2) {
    if (_abstract2.tag === 'g') {
      return _abstract2.children;
    } else {
      return [_abstract2];
    }
  }

  var Masks = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var maskData = node.getAttribute('data-fa-mask');
          var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
            return i.trim();
          }));

          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }

          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute('data-fa-mask-id');
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractMask = function (_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            explicitMaskId = _ref.maskId,
            transform = _ref.transform;
        var mainWidth = main.width,
            mainPath = main.icon;
        var maskWidth = mask.width,
            maskPath = mask.icon;
        var trans = transformForSvg({
          transform: transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: 'rect',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: 'white'
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: 'mask',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread2({
            fill: 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var MissingIconIndicator = {
    provides: function provides(providers) {
      var reduceMotion = false;

      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }

      providers.missingIconAbstract = function () {
        var gChildren = [];
        var FILL = {
          fill: 'currentColor'
        };
        var ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s'
        }; // Ring

        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          })
        });

        var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: 'opacity'
        });

        var dot = {
          tag: 'circle',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: '256',
            cy: '364',
            r: '28'
          }),
          children: []
        };

        if (!reduceMotion) {
          dot.children.push({
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: 'r',
              values: '28;14;28;28;14;28;'
            })
          }, {
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;1;1;0;1;'
            })
          });
        }

        gChildren.push(dot);
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
          }),
          children: reduceMotion ? [] : [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;0;0;0;1;'
            })
          }]
        });

        if (!reduceMotion) {
          // Exclamation
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: '0',
              d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
            }),
            children: [{
              tag: 'animate',
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: '0;0;1;1;0;0;'
              })
            }]
          });
        }

        return {
          tag: 'g',
          attributes: {
            'class': 'missing'
          },
          children: gChildren
        };
      };
    }
  };

  var SvgSymbols = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var symbolData = node.getAttribute('data-fa-symbol');
          var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
          accumulator['symbol'] = symbol;
          return accumulator;
        }
      };
    }
  };

  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

  registerPlugins(plugins, {
    mixoutsTo: api
  });
  bunker(bootstrap);

}());
