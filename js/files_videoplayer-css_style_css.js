"use strict";
(self["webpackChunkfiles_videoplayer"] = self["webpackChunkfiles_videoplayer"] || []).push([["css_style_css"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#videoplayer_overlay video {\n\toutline: none;\n}\n\n#videoplayer_overlay {\n\tposition: fixed;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbackground-color: #4c4c4c;\n\tbackground-color: rgba(0, 0, 0, .7);\n\tz-index: 3000;\n\topacity: 0;\n\ttransition: opacity 250ms ease-in;\n}\n\n#videoplayer_overlay.show {\n\topacity: 1;\n}\n\n#videoplayer_outer_container {\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 95%;\n\tmax-width: 854px;\n\ttransform: translate(-50%, -50%);\n}\n\n#videoplayer_container {\n\tposition: relative;\n\twidth: 95%;\n\tmax-width: 854px;\n\tmargin: 0 auto;\n\tcolor: #4d4d4d;\n\tbackground: #fff;\n\tbox-shadow: 0 0 20px #222;\n\tz-index: 3001;\n}\n\n#videoplayer_container:before {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-top: 56.25%;\n}\n\n#videoplayer {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n}\n\n#box-close {\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\twidth: 30px;\n\theight: 30px;\n\topacity: .35;\n\tcursor: pointer;\n}\n\n#box-close:hover {\n\topacity: .75;\n}\n\n.vjs-sublime-skin.vjs-has-started.vjs-user-inactive.vjs-playing #box-close {\n\topacity: 0;\n\ttransition: opacity 1s cubic-bezier(.455,.03,.515,.955);\n}\n\n\n/* Video.js adjustments */\n\n.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {\n\twidth: 10em\n}\n\n.video-js .vjs-controls-disabled .vjs-big-play-button {\n\tdisplay: none!important\n}\n\n.video-js .vjs-control {\n\twidth: 3em\n}\n\n.video-js .vjs-menu-button-inline:before {\n\twidth: 1.5em\n}\n\n.vjs-menu-button-inline .vjs-menu {\n\tleft: 3em\n}\n\n.vjs-paused.vjs-has-started.video-js .vjs-big-play-button,.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button {\n\tdisplay: block\n}\n\n.video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button {\n\tdisplay: none!important\n}\n\n.video-js .vjs-mouse-display:after,.video-js .vjs-play-progress:after {\n\tpadding: 0 .4em .3em\n}\n\n.video-js.vjs-ended .vjs-loading-spinner {\n\tdisplay: none;\n}\n\n.video-js.vjs-ended .vjs-big-play-button {\n\tdisplay: block !important;\n}\n\nvideo-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.video-js .vjs-big-play-button {\n\tdisplay: block\n}\n\n.video-js .vjs-big-play-button {\n\ttop: 50%;\n\tleft: 50%;\n}\n\n.video-js.vjs-big-play-centered .vjs-big-play-button {\n\tbackground-color: rgba(0,0,0,0.35);\n\tfont-size: 3em;\n\tborder-radius: 50%;\n\theight: 2em !important;\n\tline-height: 2em !important;\n\tmargin-top: -1em !important;\n\tmargin-left: -1em !important;\n}\n\n.video-js:hover .vjs-big-play-button,.video-js .vjs-big-play-button:focus,.video-js .vjs-big-play-button:active {\n\tbackground-color: rgba(0,0,0,0.35)\n}\n\n.video-js .vjs-loading-spinner {\n\tborder-color: rgba(255,255,255,0.7)\n}\n\n.video-js .vjs-control-bar2 {\n\tbackground-color: transparent\n}\n\n.video-js .vjs-control-bar {\n\tbackground-color: rgba(0,0,0,0) !important;\n\tcolor: #ffffff;\n\tfont-size: 18px\n}\n\n.video-js .vjs-play-progress,.video-js  .vjs-volume-level {\n\tbackground-color: #2483d5\n}\n\n.video-js .vjs-big-play-button {\n\theight: 2em !important;\n\twidth: 2em !important;\n\tline-height: 1.9em !important;\n\tmargin-top: -1em !important;\n\tmargin-left: -1em;\n\tborder-width: 3px\n}\n\n.video-js .vjs-icon-play:before, .video-js .vjs-big-play-button:before {\n\tfont-size: 50px;\n}\n\n.video-js  .vjs-progress-holder {\n\tfont-size: 1.7em;\n\tborder-radius: 10px;\n}\n\n.video-js .vjs-progress-holder .vjs-play-progress, .video-js .vjs-progress-holder .vjs-load-progress, .video-js .vjs-progress-holder .vjs-load-progress div, .video-js .vjs-slider,.vjs-volume-level {\n\tborder-radius: 10px;\n}\n\n.video-js .vjs-load-progress {\n\tbackground: rgba(255,255,255,0.5);\n}\n\n.video-js .vjs-big-play-button {\n\theight: 2em !important;\n\twidth: 2em !important;\n\tline-height: 1.9em !important;\n\tmargin-top: -1em !important;\n\tmargin-left: -1em;\n\tborder-width:3px\n}\n.video-js .vjs-icon-play:before, .video-js .vjs-big-play-button:before {\n\tfont-size: 50px;\n}\n.video-js  .vjs-progress-holder {\n\tfont-size: 1.7em;\n\tborder-radius: 10px;\n}\n.video-js .vjs-progress-holder .vjs-play-progress, .video-js .vjs-progress-holder .vjs-load-progress, .video-js .vjs-progress-holder .vjs-load-progress div, .video-js .vjs-slider,.vjs-volume-level {\n\tborder-radius: 10px;\n}\n.video-js .vjs-load-progress {\n\tbackground: rgba(255,255,255,0.5);\n}\n\n.video-js button:active {\n\tbackground: transparent !important;\n\tcolor: #fff !important;\n}\n\n/* hide error icon */\n.vjs-error .vjs-error-display::before {\n\tcontent: \"\" !important;\n}\n\n/* fix for fluid size of the player */\n#imgframe #videoplayer_view {\n\tdisplay: inline-block;\n}\n\n/* public sharing view styles */\n#imgframe .video-js .vjs-tech {\n\tposition: relative;\n\twidth: auto;\n\theight: auto;\n}\n\n/* fullscreen public videos see https://github.com/nextcloud/files_videoplayer/issues/77 */\n#imgframe .video-js.vjs-fullscreen .vjs-tech {\n\twidth:100%;\n\theight:100%;\n}\n\n#imgframe .video-js:not(.vjs-fullscreen),\n#imgframe .video-js:not(.vjs-fullscreen) .vjs-tech {\n\tmax-height: calc(100vh - 280px) !important;\n\tmin-width: 300px;\n\tmax-width: 100% !important;\n}\n\n/** video thumbanil black border removed **/\n\n#my_video_1_html5_api {\n\tbackground-color: #FFFF !important;\n}\n\n.video-js,\n.vjs-poster {\n\tbackground: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

}]);
//# sourceMappingURL=files_videoplayer-css_style_css.js.map?v=25c0890ccd53a04b2f21