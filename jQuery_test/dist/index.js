/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jQuery_test/index.css":
/*!*******************************!*\
  !*** ./jQuery_test/index.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/dist/cjs.js??ref--4-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./jQuery_test/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./jQuery_test/index.js":
/*!******************************!*\
  !*** ./jQuery_test/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./jQuery_test/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


//ブラウザーがロードされたら、jsをロードする ※画像の読み込みの終了まで待たない。
window.onload = function() {
  //alert('browser finish load')
}

//$=jQueryの略
$(document).ready(function() {
  $('a').click(function(event) {
    //alert('As you can see, the link no longer took you to jquery.com')
    //event.preventDefault() //ページ遷移しない
  })
})

$('a').addClass('test')
$('a').removeClass('test')

$('a').click(function(event) {
  event.preventDefault()
  $(this).hide('slow')
})

let myCallback = function(tes) {
  window.alert('parm is: ' + tes)
}

$.get('index.html', function() {
  let tes = 'tes desu'
  myCallback(tes)
})


/***/ }),

/***/ "./jQuery_test/thumb.jpg":
/*!*******************************!*\
  !*** ./jQuery_test/thumb.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./jQuery_test/index.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./jQuery_test/index.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./thumb.jpg */ "./jQuery_test/thumb.jpg");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "#app {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top;\n  width: 100%;\n  height: 200px;\n}\n\na.test {\n  font-weight: bold;\n}", "",{"version":3,"sources":["C:/shizuoka_univ/myApp/e-bike/11th/01-cordova-only/jQuery_test/index.css","index.css"],"names":[],"mappings":"AAAA;EACE,wEAAA;EACA,WAAA;EACA,aAAA;ACCF;;ADEA;EACE,iBAAA;ACCF","file":"index.css","sourcesContent":["#app {\r\n  background: url(./thumb.jpg) no-repeat center top;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\na.test {\r\n  font-weight: bold;\r\n}\r\n","#app {\n  background: url(./thumb.jpg) no-repeat center top;\n  width: 100%;\n  height: 200px;\n}\n\na.test {\n  font-weight: bold;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./jQuery_test/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\shizuoka_univ\myApp\e-bike\11th\01-cordova-only/jQuery_test/index.js */"./jQuery_test/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4valF1ZXJ5X3Rlc3QvaW5kZXguY3NzP2Y4NjMiLCJ3ZWJwYWNrOi8vLy4valF1ZXJ5X3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4valF1ZXJ5X3Rlc3QvdGh1bWIuanBnIiwid2VicGFjazovLy8uL2pRdWVyeV90ZXN0L2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcclxuXHJcbi8v44OW44Op44Km44K244O844GM44Ot44O844OJ44GV44KM44Gf44KJ44CBanPjgpLjg63jg7zjg4njgZnjgosg4oC755S75YOP44Gu6Kqt44G/6L6844G/44Gu57WC5LqG44G+44Gn5b6F44Gf44Gq44GE44CCXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAvL2FsZXJ0KCdicm93c2VyIGZpbmlzaCBsb2FkJylcclxufVxyXG5cclxuLy8kPWpRdWVyeeOBrueVpVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAkKCdhJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vYWxlcnQoJ0FzIHlvdSBjYW4gc2VlLCB0aGUgbGluayBubyBsb25nZXIgdG9vayB5b3UgdG8ganF1ZXJ5LmNvbScpXHJcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCkgLy/jg5rjg7zjgrjpgbfnp7vjgZfjgarjgYRcclxuICB9KVxyXG59KVxyXG5cclxuJCgnYScpLmFkZENsYXNzKCd0ZXN0JylcclxuJCgnYScpLnJlbW92ZUNsYXNzKCd0ZXN0JylcclxuXHJcbiQoJ2EnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAkKHRoaXMpLmhpZGUoJ3Nsb3cnKVxyXG59KVxyXG5cclxubGV0IG15Q2FsbGJhY2sgPSBmdW5jdGlvbih0ZXMpIHtcclxuICB3aW5kb3cuYWxlcnQoJ3Bhcm0gaXM6ICcgKyB0ZXMpXHJcbn1cclxuXHJcbiQuZ2V0KCdpbmRleC5odG1sJywgZnVuY3Rpb24oKSB7XHJcbiAgbGV0IHRlcyA9ICd0ZXMgZGVzdSdcclxuICBteUNhbGxiYWNrKHRlcylcclxufSlcclxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4SVNFaFVURWhJVkZoVVdHQmdZR0JjWUdCVVhGeFVZR0JjWEhoZ1dGUmNZSHlnZ0dCb2xIUmNYSVRFaEpTa3JMaTR1Rng4ek9ETXROeWd0TGlzQkNnb0tEZzBPR3hBUUd5MG1IeVV0TFMwdExTMHZMUzB0TFMwdkxTMHRMUzB0TFMwMUxTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQUxZQkZBTUJJZ0FDRVFFREVRSC94QUFiQUFBQkJRRUJBQUFBQUFBQUFBQUFBQUFFQUFJREJRWUJCLy9FQUVVUUFBRURBZ01GQlFZREJnUUVCd0VBQUFFQUFoRURJUVFTTVFVaVFWRmhFM0dCb2JFR01wSEIwZkFqUXVFVVVtSnlncEl6c3NMeEpHTnpvZ2NWUTFPRHMrSVcvOFFBR2dFQUF3RUJBUUVBQUFBQUFBQUFBQUFBQVFJREJBQUZCdi9FQUM4UkFBSUNBZ0VEQXdNREF3VUJBQUFBQUFBQkFoRURJUklFSWpFVFFWRXlZWUVVSTNFemtkRVZZcUd4d1FYLzJnQU1Bd0VBQWhFREVRQS9BTTFoVGxMcWJtak0weEJzWjFNekZvQjE1bzRQYTVqanAyYlJJdEpjVGxHVys4Q1hna2poZFVtMElkVWw5Y3ZjZmZjV3U5NmZ6T2tseElEcnh5MXZCVGFvZTJXdkFjd0Uza1RsdmwxdmEvM2Zla2VXNDE1RHNKak41d2ZKTTMxRWdDSmFlR2crUFZENHFxY3Q3dDQ2TkkzWE5FODlaSkh5bFZsT3FTVExvdVRjem9MTisrZlZGZnRPN0hjWTY4L2dwODNFZzA0dlI2OS80ZVlEL2hHWjJoek96ZGF4RWw3aVFZNHdlUE5lZTR6RHRaaDYxQWh6YWdxc0RIUnV1YTFvMWE0eTF4R1YzQ2MvUVFIczdhV0pwNVdNclBhMkhHQTkyVmdJSk83ZmRJNFJiWGlndHExbk5hNDFBWFozc2NIV3M1ck1wQVBJdHF0dC93QXRxZUxsdHIzTHVia2traUN0czJhUWFIYjdlSkJBRUZzZDVnT0hpRk1NR1dzUEZ3ZzNtK2t4eTBqeFJsREJPZCt6RnB6REVPYzBXTnNtWE1iOEJtTitpWlhlV0VCdFFQczF4QUVoZ2ozWlBFR3hIbW90WkVRbDZxOGxyczk1clVpNm8wQXNiSWNSbElhd2dpbXdDNWtrRXV2TWVMWjg1WTV6RERTQzVzV1BIZ2YxalRtZ3FWWU9zQUhFdEl2QWc4dVJ1SkhHeU9vNVhzcXhBZUwyL001dkMxb00rVnVSblB1cTBRbExsV2dsbUlwZ0FnbVd1a2dRQTRrQVJGNEVYdDg1VmhzdkV0bmRJSWdDNXVKNlFlUTgxUjdEQWJVSWNCQUg1cjVUckkxbThXNndVK2pYaDVjTXAxR1hxTHllaEhkOGtrc1ZSOGdkcGVUWTFNTlRxdEJEb2VMdE1Ba2NTSUlnZzJIaHdLR3hlekE1cEZKN201V25jTFNRWEE3cHVScCs2QUp0ZERZSnp3MnppRDNHOGl4NkM4Zk5HNGQ5VjdQOE5zMkl6Q1dodzZDQ0lJbWU1WmxjWG9kWkU5VVpUYVlld01OVnVSczhEdkhLSk53YjZ4STRncXJ3N3N6Z0I3cHZGN1QrVUhYV0Q4RnU5dTdFZGlXZ3VjMXJ3N05jdnkyYUJsYmVHazZ5Unk2ck12d1pEY2p3QThUbEp6RTYzdDNqaHlYcmRQbWpXdklKMUR3Ryt5N0hOYTRObDBicEJGaHB2SFF3SjhscS9aL2EyZHorMGNPQWEyZE5kSk43OEZtOWpOcVVuRWFTTGJzOTh3ZW5QajNxMnE0cGhjRzVCK1VCd2hwRWllQXVPK1UyUnFjbjl3WTVPTHRNMEJ4RHFicWhZQjJjV2puRUdUem5MMVZyc3ZQY3VucE9uZ3NEVTJ6V3c3cm5jdGs1bUFaSkFFang4MFJzNzJwT1p6M3pld0lJdG9CRFR3K09pWjlIa2xIbEZhTmVQcTR4ZXowaVYxWlRZM3RIbmVXdmNJRTMwbSt2Y3RVQ3NPWEZMRzZrZWxpelJ5SzRuVndsTWMrNldheW1VdEEyMEtnYUpNNjJpYm53VXVIZnduVVQ5Ujk4MVdiVGM1eGFBQ1NMbUk4aVJxbWpIQm9hNXhJalVFYndFNkhsd1BqOEs4TGlxTTd5MU4yVjN0MVR6MDRhQzV6U0hSQklBdncwUDZMR1A5bjYxWHNuWkM1c25QVkptemJ6eEp2QWdEcHBjZXA0OWpYTjNqYU5BZFpFWDVqVlkvRFlkOE9hTTRZMkdocDFJQkx1V2t5VHlBR3EwWWN6VUtSbjZqR25PMkc0a3VmUnp4bGZEWmMvTDJiTXBHK3pKTTNhd3h5alM2OG14dTFhamFqbWh3ZHZFa20wdXUzTTRra0IxeVpCQXN2VjhWVmZpY0hWcGhwRU1Bc0M1N3JHY28rQW0rcThieFZDb3l2SmJkcnBJSURidE1id1BDZWlmRTZUczdKSzZhTERFWURIWTAwcVZhazRNL0lReVF5QkZ6R1pyU2QyOXJmd3JMKzBIczlXd3d6bU1wZGtFeG1KaVRJRWkwY3pGeHFDdlI5bmJZeE5ldERhZ2NXLzRnSmF3dUVUVWh3YnBtc04wbU84azJuL0FJak9wdndEblVCU2RUYll1YVJ1RnhsMFQ3cGNUTWdFbTJpQ20yMGlzYWF0SGdzRW1CZWJhZE9RNGFJZkxCZ2kvTHFqM1BnNXB2ZUlzaE1VTEJ3OGVIajVLZVJORll1eHJpRnhNRHdkVWxFZWpTNG1pK0R1WEY1Z2dnQUFtSjVUZGR3V0pxZnU2aUp5MnNaSEMxNHZQcXJGdTBIR1M3dWFKajE0ZEFtWWFyVWZZVXljb2t4SklFRzg4ckh3Q3R5ZDZSNTdrNjhFQXB1YkkweXVnMmlTTEhVUndQM3BhdndyZjJRVnVJckNtYmliMDh3SWJ5c1JQZHBCUU5hb0NJQnZtdk1qVUE4YkVxVEUxZndHVTJnUlVxRndNQU9EbTVtT1pNVEJEcVo1QThES2VDNWFGVnlMWEFZcnNHbDdLZ2ErNEFBQmRCYVFjNTVFU0xkSkZ3VldZOTdYTXVDN2ZCTzhjdWdFNVpqTWYza2Zqc0dacmxySll5cFViSTRmaUVOY1JvSmtXSEFLbHgzK0d6S0RtTDN5WUY5MmpsSFdDRDhlQ2R3YThBVUhZVmpLNXBkbTFyM05hYzFXbUdtY3BxQm9MbWtYYWQyL2R6dVQvYVNyVGE0VTZMRzAyc1kxcEFjWFp6ZmVjWUc5ZS9oZUZudzExWjlBRWtPaHJTVG1KOThnQzE5Q0xEaXREN1c0RU1xUGV3YmpxaFpNTkdWd0RjekF3RzBTRDBDTldVbEhRTFNyQnJyNVk1Z0VUMXYzK2lzc0s3OE4xVE5jYU5tNG1ZUGw3djJhRVZDVG9ZM1RIOVFFbU92cWl3ODVBU04yd0x0Ym1TUi9iRmp4OHBlbnZabmxqK1VXL2FabUUrRXdTSklzTytQUmNvWXByUUNZdU5PL3pCK3FDd2xOajh4Qk9VRjQwNENuVUl0cVBkNWthNlJjaDFHbWFZaUdrQVNmNVdDWjc1bng0cEhqaWxSR1dOSlVYT0MyZ1dDQVl2WW54dkYraU5adGQ5bkNaa1c0R0RFZ1FmaUZuZG5uY2FiN3M4dVBjYmZxamFWUjBnbUMyMWlaaVB2bnhVbmlpbjRJTkpPalZVZHRCeHltQURad2RCOFJHdHg0UW1lMG1FcDlqMnBNUFpBYTdNeGd1UmxENWkzSDBXWERDMXpxdVlBT0EzcExieWVkNDkxYURDN2FZS1UxSHpBam85cnVCRWJ3TWN0SlJXUDA1S1VTcWE4TjJOd1JjNFFIQnhJNU51ZGI4aGZXUWpjcmlmeEFDOWxyUm83bEdvOFZtc1h0NE5mK0EwTXNRNENNc0U2TjBEUjRIVkV0MjVVY1d2WUhBbHQ3dGNHbWQ3TVlzSUFQZlphZUV2cW9XcUo5bzdHcTFIbHpjc0hRVHZSMW1PUFZNcllHcUdnbGhFY0RBTWptRk5zemFSYzV3QmFkMTB5Q0hXdmJselIxRno2alE0YUF5VEpuaGZLT1BDNFczSDFPU0ZKMW9GSmdPeTZ4WlVhWTRaaU9GdEQzTDFGK09ia0IwbU8rL3B5WG1tT3c3Z08wcHdBeHNFVGUzRWZ2V3ZycDUyK0Myb2F0Rm9tNDVtOGNmdnZVK3JpczNHYS9KbzZmTThWcjVOS3pIdGtnbUI2RGo0SXFyaVFJRTZpYlRKK0N5QnhFQW1TRHJlOGtjekhSV2V5Y1YybXVhUVBkQU5pTzd1MFdPZUZMYU5PTHFiN1N3N2R4dUQ1eEl2SVBPUEM2bGRpaDBPaElpUjRmZkZRTXdWVndrTmpodkdMU1pzTHFWbXlRMGpQVU1ubDhkVDQ4RlB0K1N5VS9nZGlLbjRVUWJrQWN0Sm5wOVVOK3psd0xCSUdzOGRJMUI0K2dDdEdZU25wY3hCMWpXZElqcW9LK0tiVElhMW9BT2J5eS9WTEZ0NlEwMVc1TXpBbzR1elMwaW1aWThrd0JUTXdhY2tITU9CSTRDWjRWTzI5azA2VEdPb0drME1BYTU3cGRPVXpwbE1RWmNUSm1CM2d2YjIxM095bWJPRFBOai9vcWR0VHRLZGFtVHpQeEYvSXIxY1hSdVM1Uy9zWXA1RjlKWERZdEtnTzFEM1BxRVZIU0RsSHVuUUMvSG54V0Y5bzhZVFZheTJRVTJrTkZtZ2xwM29GcHZFOGxyS2VKTTBnZEMwVDR3UHFzYnRtbnYwcC85cG8vdExoOGx2eWRPc1dQUjJHVGN0bFdCTFo0ZytvT3Z3ODBPK21TRDBiUGNiZWFMeVdkcE43ZHhBLzFJUjFYZGQxQUhuTnZFTHhjOVdlakd3Rm9LUzdsUEJjV1F1YVZ0Wm1XeGgwWHRKMUh1azJGcGQwOGtaZ2F6V05PODZTM0xsZ1JuY1h4SUp1TWs4TlNPOVVyWHlaTVg3aDZmZGxaNFo3T3pxdWU1eHFTd01rRFcyODQ5QUlqcXRFWmJNa2tqdTBDTzBJYUlCSVBXUUFMeWU1TndMaTZyU2FRRE5Sb2h4c1FYL201QytxRXhkYk04bmpNbjQ4ZWFzL1oraUttSndyUVRlc0FZSUJHOHcya2lEZlZNbnNEUjZMN1VZbW0zQVZYQnJxYnEvNGtUR1k5dVE0RWZtYmxlRFBQVGlzWnR2RHhpc05UcEFTU0EyOW5PYldOTUVrQ0czcEVIbEJLcy9haXV3NFhDMG1seHMyQTRpelpyU0xHQ0M0TjdvZ2FLc3dHYXJ0R2tRYjU2enhkcGlIMTZ1N3EyWTUybldRcXJTQjVaVmJUWjJkWnpXWmhacGgxbnRka2FTT1lNa3E5MnJoS2xTcFRxUHlSVnhRWitIbXpTQlJrTk5zb2c5OHozcWk5b2EyYkhWWUdXWEJzR0FBWWFEdzBtVE1YRnplVmRZVGFCcFZNSG1PUjFPc0twYzRaMmdWQlFjeHdiVHVaQU82RFBDM0Zvc0xSWFl5c0E0RWd0bW13UmNDUVdreUNMekJQZVVSVXgxSTBBeHJTWEI0YzUzRWdHcERCeGlITk1rZ1dqa3Eyc1h1T2FybWs1WW1SQUVneUI5MjcxYzR6c3czRE5CYTNOVG9GN1FJbk5VcWt1Y1NJTnNzaS9CQjcwVGFMUDJhcTRhbmhzUzZ0ZXE1dFJ0RVFDS1pjelVBZ1FieG04SUhHc3A0NEJveWlIQTZmdmJqQnB4OTAvRlcrenQ3QTEzN3N1TDNaZUlBSWFTQUc2RE1QeldqUzBISk9jSFF3Q1M0eEh3MCtCK0NXbHNTYTVKSXY2ZUxFT0xSRzgwYm9FR3hrSHpzbVB4ejJYeWdpL1VEdnNxeWd4eHB5QUFMWDRreUJwcitZZkZXVG51YUhOTGdIQ3hNa1J2RWFqWFFwY21OSmVEUExFdmdMTTF5QUlkeGhydzA4QVNHbXg4citZOVNoMllEaE1iMTNOT2FHeG1FRVFJQkY3YXFxcUdyVGVYTi9LU2JHYkdUQkJ2cDBWeHN2MmpEN1ZHdHlSRWFnaWRTRDM4ZVNuM1IzSGFGOU5yeHRGZTZ0bnVEQU9nTjd5ZFNuZHNXQTd3UEFqZ2VHaEYxQjJvemtBR1pob2k1a2d3R3llY2FuVmR3cm9xYndrQTZlOExnY1NQdUZ2aTlGWGpWRnZzbkhYczZDQVl6UVJjVzZHL0EyVXRIR3VvdUdXb2ZtT09zOTZnb09nbUdnc2ZNZzM0WFBuYmttVTZZSmRmaHBHcHRQZHJLZUxWdTBRY0VhakE0d096c3F3YzNIVUdTQzBodkVhRy9KREN1K2s4Z0dXaTRnVHdNV0J2OEFtc29mWjNDbHh5T2JONWEwbUppWmdtSTV6MFcxOW12WTJsMnhydnFGMldvU0tZRUFPYWZ6SDh3SFRYcW92TEhGSjh2QjJIREticEZqc1hZaDdKdFRGeUQ3MlNUQVBDUU5ESEJYZWVuUmxyR2dRR25xWkx0VHFmZEtidCt2bHA5NWIvbUNxTnFZbmZGOWNqZi9BTGZxc0NqTEs3ZnVlajJZZTJLMzhsblIyZzQxQTA4Uzc0QjFVRHlhRlVZL2FrMXFWN1puRDROZVBtb0dZbWFyRFA1eDVsLzFXZnExNWN3ei93Q283enN0bURwVTI3K1A4a0o1NU5lVFdZTEdtVEovS0IvWlhlMzBJVmR0REhUVUE1T0krTHYvQU1vYWhYZ3Uvd0RrOG50ZDgxWFlxcCtLNC84QU1KK2Z6VmNYVHJreWNzanJaVVkyc2NyQnlhenlxUGIvQUtnbWJNckR0aVAzMkQvTCtpRzJsVnRITHRCL2E4RlY5REV4aWFaNTI4ejlWN2NZZGpJZTQ3YXJnSHM2U1BFRS9WWi8yeUlhK25Ha3VCL3VCSHFyTGJ6cjl6ejV4OUNxL3dCczZSYzFqaDNrOTdSOUZQcTMreS9zVndhbWpQVUREeFBFUjR6K2dDQXFtNUhDZlNZVWpxOEVIeFVHSzk0OTYrWnlPejE0a0xra2lrb2xDeFk0QTJ1bnR4SHdKazlZUVprZGVIaW5NbE5aTGlFdXJBa2s4ZnJLbXA0d3RjSEMwR1JFaURQQ1BqNElWa0ZTaW5hUE5GTURTTGQyUGJEQ1FKek1jWU5pR045M0tPSnpHL3BkVCt5bU83S3V5cTYvWk1xdWlZMG91RnBOM1hzT0pWRTJrQnE0ZVE4MDl6dzNRM2liRTJuaEtvcHNUaUViWXhQYVlxby85NS9QVFFBU2VXa25rclRHN1RKcTRkd2RJcE5waHNIM2NvYUNaQUVHV240RHZXWnFPZ3lwcVZSN25ETGN6YnZtZE85UEZ0dlJ6UmJZdmFyNnBoN2lRQ1owZ3lYRWtRTkxsS3JpREZNZzNZMW9ISG1SUEl6d1JlSDlsYXhibXExRzA0Rmhja0RxQjM2S1Yrd0tkTXc3RThNeGEybnZXMHVYRUEzODFwWFRabnVpRHpZNzhsdnNQYjdLZUFmUmFEbmVhZ2RNa1pTYVpFWGk4UnB6V1NwMTk1c2FnazgrQStoV2gyZmdNT1dBdUQ3eUJMaEpFamVjUU9mTGdVVzNaV0JZQzQwemJpWHZubkZqeU1xc2VqeWVkRTNuZ2lvMmU0ZG01ME85NW9CaVdrelRrRTJpTmJjMDErTGt2a1ROU25lM0J6M2VaSStDcysyd3czRzBHZ2U4ZDU1Zy93QjNRZkJGVUsySEJNMGFkcExuRm9jNmRZbDAzMG5xVlQ5SE4rNkVlWlhkR1RaV3FPZTV3bnJ5R3VVR2JBSzAyUHMwMUx2ZUd5WUVBRWttOG5nQlpEN1p4d2Y3b0RXM2hvMEY1K1htajltU0dVanlrLzhBY0UyTHBvYzZlenB6ZkcxbzVYd1BaZ09CelpyOFpnWnNzbm1ZUGRaR1lXZ01ocUVOSmNESWdndHlFUVdtZjRrQlVyRWhnblNtenhrUEo5VWZoNm00Sk9vZDV1WjlGYUVNZDZST1VuVk03UUp6T0JkQUUydkVUYUIxbFhtTzJHYU9YdHFnOXdBZ1NTMlhTUTRHOXMzMFZQUnFiNFBSdmtmMFUrMU1lNm9YbHhOMnM0NmpMK2lNdE5OQ2N2WXY4UGdleXFFZ2JyWklKc1RNYWNKRStTOUM5amErZW04OG5INi9OZVlmdDh0dWRaK1UrUVhvdnNrL0poWHUvaVBvRmo2K0RlTzM1MGkzVFRxZGpQYXpHL2w2dDlRcXJiT0ozMmY5Um5vVlgrMG1NbCt2RWY1bEh0aXZ2MC8rcXovS1UySHArTVkva25LZHRzS3dkZVhzL25aNk9XZWRpUGQ2VlA4QVVQcWpzRFczMi84QVViL3FXZnIxWUIvNm5vNXEzNHNWU2Y0LzlKdG11b1ZMbityL0FMbU0raUN4ZFhmZC9TZmlHcFllcmY4QXFiNXRJK1NFeEw5Lytsdm9mb2xoanFSemVpcDJ3YnUvbnFEKzVzcW5xMWQ1anVSK2hWcnRoMjhmNW1uNHRWQlhmYnVLMkxVUW9POXBOSEhxMCt2MVZkN1NITmhxWjZOOHN3K2lQMnE3TXllYkI1S3V4enMyRGIwbjFCVU02dU1sL3RLWXROUDdtUmNFMnQ4Z251Q1k5ZkxUUFlSRVVra2xJY2NRbkFwaTZDaUFsaE9GUXBnbmd1RnlLWXRFbWJ4NzFLM0VFOEIvc29KVCswNkFJb0RKOEpoWFZxZ1kzVThUb0FOU1Z2OEFaMnlxT0ZiMmtabjhDN1dlZzRLbDlqc0hxOC9ZUisxOGRtZEhCdnJ3WHY4QVI0STQ4Zk9TMnp6T3B5dVV1QzhEc2Z0TWt5VFpnekhxNzhvK0t6ajhVNTBtYnVQMzVsZDJqVzNZNHVNbnVGZ2g4Tjd3SElUOStTWE5tY3BjVU5qeEtNYkxVWW04RFFBTkhkOStpZHRERm16ZkUrSm1QVUlIQ0dYZU0vZnhUY1MrWEVybmxmQVhndVFUUXE2dVBFK1EvVk9mWE9TT0xqK3ArU0dKZ0FkdytOejZxU2k3ZmIwdjVvd20vQnpqN2hwMk9UbEUzTVc0eWJtZVh2Syt4ZUhiUnB0SEVOZDhBRlJiT3haTlROUEZ4OVBvcmpiV0lsclIvQjZnclhqVWFja1JueXRKbExYQnpXT2pLZmt3SW5EMUNHZ0hycmI4dzBWUHRHb1JVTjVFTjhoQ2xvWXQyVDQ5ZUlXT0w3bVdjTGltWElxbVI4MDZ1Uk52M1c2R1p0QWovZEI0ZXZQVHUwdnhQcWo2TENKT1VneHFPZkdFbVNiU0pjYUpLV0lPUWpUWC9LVjZ0aGEyVEF0L2lQcWYwWGtJZERnTG1UZjlGNlZqSzhZU20zK1ZOSlBMR0MrNHExWm5kczRpWEMvRWY1aXB0c1Zic1A4QXpLZitVcW0ydlhoemZEMVJtMXEzdW4rT242RmVodzhmWW1pZkMxUHhQNng4MVNZMHhuL25kNmo2S3h3dFQ4WCtzS2wycFV2VUg4YmxUd3dyWnFNRlU5R256L1ZSWXc3NDd2bVFoZGtWWmFQNVI4ay9hRlNIRCtyMUJRVWU4QldiWU9wNk5Qd0tvYTVzVmQ3WE52RDBLb2FoMVJ5YVZGSUJyem1wTjduQkIwdDdET0hJbjBLbXdyNXA5eDlRaDhHZDJvMVRrN3I3b2RhL3VaVjVVVGxOWGJCUGVveUY4cmtWTm85aUxJa2wxSlNIczZBbmhOekp3SzRBbW1PNVA3UWFKc1NtZ0lnSnUxNktlaFR6T0FpRUsxWGV3TUxtZUo0WFBndFBUWS9VeUpFY3NsQ0xacDZNVWFBSEVoVVdKcXlPcmo2NkkvYStJazVRcWg3NWNPbDE3dWVkZHFQTnh4dmJCTWRVbXBISzN3VHNLYlBkNElSejVKUFZFVXpGUHZQMzZMeTR5dWJadWxHb3BCK0FPcDVCRE9kUEhVcDdERklublpDMHRaN3lyVGVraVVWdHNMYytUOFQ5K1NjeDhFbmtFTURmeSsvZ3VkcFp5NVRyWWVJZHM2dDZlc0swMnJWc1A1QjZLaHdUcmZCV2UwbjI4Qjhsc3d6L0FHbVJ5Ujd3V3RWYm1JSVV6V0FOa2Y3ZFVEaUhqTVk1b2ltN2RpeXpSZmN4NVIwaXpGWURnTGpXMDl4NkRscXVZbmFrUUdHd0VTSUUrV2lCZFdFUlBvQWg3RS9melRTNCs0cWg4bHZzL0d1ZlVickpJR3E5SDJyVi9DYTNrR3J6UFlJLzRoZ2tIZUdsL05iN2JOYTBkRnF3UlVsR2lHWFRNNXRscEphZUVEMVIyMERMUi9OVFBrVlRiVnF5R2QzelJtUHJibjlucXRmdXlkUFFWUmZGVTk4K2FxTnJZamZxRCtJK2lLb1Y1cW52SHlWUnRaMzRsVCtaREpwV0dFZGwxc0hFU0IzZkpHYlRmdmZIemFGUjdBcSs3OTgxYTdVZDdwN3ZTRThOcE02U3FWQXUwbnkzNCtpb2kvMFZwaVh5MGZmQlVSY281NWJLWTRodUFmdXVIY1ZGaGpEM2puS2JnSFhJNWdwclRGVHZVMUx0aXg2MnlreHJEMmpnQnhVUnBjMFh0RmhGUS9GUlU2RDNTZEFOU2JEOVQwWHp2VXhySXowWU80b2gvWmh6OWZra2luVXFJczU1SjZDQjVwTEpZOXNyRWx4ZFRGQjdIUXU1bEhLNnVBVDRac2xhM1l0UExUTHVKV2F3RkdZSE1yVlZ6bFlBT0FYdC93RHpzZkZPYlBPNnVWOXBXNHFyTGllU0JjK3pqNEtXbyt4UGloYXRtOTVYWnA3c09PSUtpbjJhMElVQkdWZFdoWk1maGw1K1VUNGt4VGFFUFE1OTMzNUtYYUIwSElLSVdhdEUvci9nbkg2VGpISmsyS1FOaW1PTmxGdlE2UVRobldDc2RvTysvZ3F2RG5SV0dPZDkvQmFzVC9iWkdhNzBBVmp2RlNOZHVvZW82NVVyVHVxRVh0bFdoK2RNYzRwcGQ2SmhlaTVISkYxN0xIL2lLZjhBTXRwdGV2dkh1V0s5a3Y4QUhiMy9BQ1dsMmxWM3l2VjZQK25aaDZqNnluMmpVM1dmZkZGNHVwTkx3YXEzSE8zRytLSXJQL0M4R3F2TGIvZ0hIU0NNTzc4WDRmSlYrMVQrSS92UldHZCtJM3crU0Uyd2Z4SG9aSDJma01GM0V1eEttbmY5VmRiVU80RDk2ck83SmZCOFZlN1FxRElKSW05aVFFY1Uwc1Z0Z3lMdksrczdkKytxcDZodWU5V2pqTFZVMWRTbzUzcE1waVd5WEJ1M3d1NHBycDNURG90M3FPajd3UmVLRUVIcXBydWcwTzNVaWtvVm5BdWM0bk5NWHVRZTVHTXhEUzJYWmpQRG5lOTliM1UyMU1IbTN0TEQrb213dDRMdXo4S01tWjF1dHY4QVpmT2RUSGhrY2J1alh6VGp5STZtSTBsalJZV0lneHdza252cjBRZmNCbmlkZVh5U1VQd0Q4TXpTU1M2bk5Sd0o3QkpUUXA4SXlTbmhIbEpJRW5TTHpZbEhlbmtFZGo2bGwzQVVzdFB2VU9OMUFYMHNJOE1WSGtTZkxKWlhWOUZCaXg3bzZJaW8yU0ZEakJ2ZUN3WkZwbXFEMmdlaTI0UlFiTlNGRmhteTVHNEprMVV1R0YxL0lja3YraUhhUHZ3bVZCdWhQeElsNTcwc1Myd0NhUzNKZ2k5SkVEdmQrQ2hmb2lLdzNSM3FGNHNGR2FLUkpLR29SK00rL2lnNlRiaEc0c0xUaVhZeVUvcVJXTzFLbGFkMHFKK3BVbEhRclBIeVZmZ1k3Z3VFS1VOdUVxZ2hOeEJaY2V4NC9HN3A5RmNZNTAxRDRLcjlqMi9pRTlDclRGTS9FUGV2WDZWVmhSaHpmMUdWT005MGQ1VTcvd0RDOEFsaWFPNzRxVjFQOEx3VFU3ZjhBdlNHWVgzbTl3USsyQitLN3VVOUVFWlNCSkF0NEtpMnBqSFZETTI0eGFPaXpkVm5XT0ZlN0s0Y2JsS3laOVl0QmF6VTZ1SkFqbkhMMXNoWWRHWXVhZWx5VEhHNGdvTjFRek1ueFNsZUZLYmw1WnVVVWpRN014QWZUeS9tYnc2Y0NtVkticEloVXVGeFJZNE9hYmp6NWc4d3ZRZG40aWxXdzdxclJCYU1wWis2Nk9mSG9lcTlqcGNzYzBWQ1QyakhtZzRQa3ZCbVJoeUxsVDRwdW5nclhaalc0bHBZYlZHLzl3NXBtTndUbWptUjhKQzJPQ1VIdzJSNWIyVk5iRmsxSE5BczJCSEl3UEZWK0x4TG5FOUlNSGhBZ0RrTk5GTWQxc3VqTVNiQjB5SlBEOWVDQXFNZEJjNXhCOGVIK3hYeUV0eWJaNkdPS1JBKzU0ZWlTZlRFalZKQ3kxZ0lhdWhpUG9ZRnp1TFIzbjZLeXcyd0duMzhUVGI4VDZ3dGNPbXlUOElTV2FNZkxNLzJhdGRsWU1ranF0TnMvd0JuZG5pOWZIRHViQStxdmFGVFkxSTd0YW9ZL2hjZmt0dlQ5UEhITzhqTTJYcUhKVkZGT2NNUmxFZFVEWHc1a2xhdXB0elpmQjlUdnlGQzRuYXV6T0Q2cDdtZldGNno2akUxNU1Lak5leGt4UTMrNUJZbWxKSzFmL21lelJNREVFbitGZ0htNUREYU96K05Pc2Y3ZnFGbm04TWw5UmFNcHArRFA0Q2hjbEg3SncxM081QXE4b2JWMlkwV3c5ZnJkdC9OR1lmMmgyYzBRM0IxYjY3NHY4U2x4eXh4cmRuVGxLVjZNZCt6a3VUY1pRT1lMWk0ydmdpZDNCUEo0Yi8wVU5YYXVGbmV3ZjhBM21mUk0xQnBnV1NTZmd4MklvV2FtTnc4a0xaTzJwaFhSR0QwNmtwN2NYUW0rRVB4QTg0S0hwWTI3c1ByeVNxakpERDd3UmVNd3h0YjdsYTZodERDZ2duQkE5NzNmSUlpdHR6RDZEWjdDZUV2ZWZRSjF4U2FwLzhBSCtSSGxkMmVZMXFSQktmaDZKSU5sdE1iamdUdTRPa3p2WlArWlJVOW8xR2kxQ2hmL2xqNVdXZjBvcDNaWDlRNnFqS2lpYldTcTRZOGxxeGpIRzdxVk9PbE52Nksxd09Od3AveGFMai9BQ01aOHlWWDBZdGVSZjFEWHNVUHNaZ3puY1k0TFFWTm5TNG1GcWRrYlEyYzBidUdyZ25pV0Q1V1Z6U0dHZmNVM04vbURCNmxQSHF2U1hIaTZJejduZG5tV0wyY2N1bkZLbnM4bW5FY0Y2YmpObDROcmM5V3RTcHM0bHptQWZITnFzVHRuMnF3RkhNekR0cVYzQWJyNERLVThwY2M1ald6ZkZEL0FGTEY3akxGTitDbXBZREtXMnVzdjdVN0ROT3JOTWJyN2djblhrZDFpUjRxNnBlMU9JRHQ3c29MWmhyR3VNbnZrejBtM0ZCNC93Qm9hbFdjd0Vna1ppR3R0d0VOQXZMZlZZdXM2L0ZsaHdTMlh4UXlZNVdaaHVBZTQySDA4T2E1K3dQa2d4STRLNHhXSWVZYUczSTNydERpVFBQcVVGV2JWajNQR1dranBxdko1bXRTa3dDdGhTM21UeVY1c1BFZGlLak0wOW8wQnd2QUlKZ2lMazZqVWE5RlFPcUZqZ1NJSTRFZlZIbmFWTVU1REpxT2tHOEJ2VzF5U0Npc3M0TlNpOWp6ZzVLZ3ludE50TjRjMTBPSEdJZ25VV2xYbzlxTTFOemFsSmtsanNqMkhkRHNweXkwOEpqUStDOCtKVTJIeFpiYlVjdm9xeDZyTkh4Sml5NmFMQ01UanpwbGc4eU5KKzlVR0t4NW5TRlBYZTE4UVlQVWFLR3RTQTBJUGNzeGRKSWN6RnVDU2hTUU9wRnJLVWxTQ211OW1Qc3JaYk0xb1pkT2JUVDJzQ25wZ0o0N0ZsS2lNVUZJM0NFMmhHTmZ3bTNSZE5YaDArL210SEZFSE5rUC9sVHdNeEVEdzVUNkp3d0xadThjTlAxaFBGVG1kTk9LNDJzSnZ4bmdPVnZOQzRvSGNUMGFORWZsY2ZHQjAwQ2NDUHlnRHUvVlFkcVBnbm12Sm1BRXl5RTNGaFhidTQyNWpUeTVwTnF1SnNDVHkxUG9VR0t5NjZ1T0ZoNGVzQmM4eitRY0dHaXE2SUpJNkh2NGZmQlhXQzlublZDelBVWTBQazVpOEFOQUUzbnBlTmRlU3k1cXJocVhtYnJ2Vk85TTlOLy9BSVhEQUF1eDdEdzNReUJBa3k0dXZITlZsZlltR2JBWmlPMGVmeTVxWS90eWtrL29laXlXRnhkU25jUnBxUUFTRHFRVEJQZ3A2KzBDUmV3aTBEeUlrU25oSnJia0Z4VDhJdTYrdzNranMyeUlhZFhhSGlaZ2pqdzRLb3hQNGN6azVBQWtteElraVpicHhRTE1jNXViU0hhNkNlL21odTFYUHFQZzVZZzUrSUpJOTI4YWFYNWs2S0kxaVRBeXowN3VxQ2RVWE0zUFJKK3BrTXNJYTNFT3RvSnVJajcrS2tjOTUvTnA5Nm9SdTZRTXdJMXM2WW1QQUd3K0NrcnVKNG55V2pIbnVOMkI0NlpEaUhpWmNTNGQ1dDNLdmUrWkpQY0k4a2M4ZmRsQzVnUEFMRDFHT01wV2pSamRJcVh2ZVQ4dVM3Mmp4MFAxNkt3ZFNieVViNlk1TEs0VVhVMThBN2RvUGJOdFl2b2JjaU5FSzdFa0VscGNFZjJJVU5TZ3AwaGs0L0JIUnhvZGFvQWVwNmMwSmlvbXlLT0VCMVVWVENEZ2hRNm9DWEVRY0tWejlsS0E1Q0NuU0ZNM0NubDVwMzdJdW9JS2tpQmhUMStBK3FTNmdGcG02a3JuaW94S2RIVlhNdER3cHBFMk51NkVPZTlkYTVNbnNWeERHMUF1R29vUTZGeDFSVzVhRTRFM2FwcjZxaGxOTGtqWTZnRWRwYlZTYndpUVJPbGpmcU9hQ2E1U21wUGY4QWdwSE9CSjJxN25VSmNrSEx1UWVKTUtpZjJsckR2UDNvaHU5S2VTSEk3aUZ0ckhtcEJpdE0wdUFGaE9pQkRrOHVoTnpCd0NhZU1lMmNyaUoxNnFNVmRkTDhlSTdsQm1UUVVsajhRbGxhRE1UME9ucXVkb2grMWhkem9jZzhRdGpsT1hqNzRxdmFWSzE2ckNWQ1NpVHVlb3k1UkZ5NlhMbkk1UkhFcUp5Y1hTbWxxbkpqcUl3bE1KVG9UWVVXT2tOSzUyYWtMVTBvVUVpZXhOVXpnbVFoUXlZMlN1WjA4aFJPQzVuV2R6SktPVWtBaytaSXZTU1ZTVkk0Q3U1a2tseVp4M01WSUN1Sktnck9MaFhVa3JDanROc3BBcEpMam1JcE5LU1M0NDYxNUJrRmNsSkpBSW1GZEwwa2x4eDBPWEpsY1NRT09KTmV1cExoaHpYcVZya2trOEdJMEp5VjBra1djaFNtdks2a2d3aTZwcmdra3BzWWFJWEhGSkpBNFptNzBra2x3VUpNY2trZ3ppRnhTU1NTaFAvOWs9XCIiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vdGh1bWIuanBnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNhcHAge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuYS50ZXN0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9zaGl6dW9rYV91bml2L215QXBwL2UtYmlrZS8xMXRoLzAxLWNvcmRvdmEtb25seS9qUXVlcnlfdGVzdC9pbmRleC5jc3NcIixcImluZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdFQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0ZcIixcImZpbGVcIjpcImluZGV4LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjYXBwIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguL3RodW1iLmpwZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbmEudGVzdCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXCIsXCIjYXBwIHtcXG4gIGJhY2tncm91bmQ6IHVybCguL3RodW1iLmpwZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbmEudGVzdCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==