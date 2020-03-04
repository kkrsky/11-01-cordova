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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/css/index.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/css/index.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  /* make transparent link selection, adjust last value opacity 0 to 1.0 */\n}\n\nbody {\n  -webkit-touch-callout: none;\n  /* prevent callout to copy image, etc when tap to hold */\n  -webkit-text-size-adjust: none;\n  /* prevent webkit from resizing text to fit */\n  -webkit-user-select: none;\n  /* prevent copy paste, to allow, change 'none' to 'text' */\n  background-color: #E4E4E4;\n  background-image: linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n  background-image: -webkit-linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n  background-image: -ms-linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #A7A7A7), color-stop(0.51, #E4E4E4));\n  background-attachment: fixed;\n  font-family: \"HelveticaNeue-Light\", \"HelveticaNeue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n/* Portrait layout (default) */\n.app {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center top;\n  /* 170px x 200px */\n  position: absolute;\n  /* position in the center of the screen */\n  left: 50%;\n  top: 50%;\n  height: 50px;\n  /* text area height */\n  width: 225px;\n  /* text area width */\n  text-align: center;\n  padding: 180px 0px 0px 0px;\n  /* image height is 200px (bottom 20px are overlapped with text) */\n  margin: -115px 0px 0px -112px;\n  /* offset vertical: half of image height and text area height */\n  /* offset horizontal: half of text area width */\n}\n\n/* Landscape layout (with min-width) */\n@media screen and (min-aspect-ratio: 1/1) and (min-width: 400px) {\n  .app {\n    background-position: left center;\n    padding: 75px 0px 75px 170px;\n    /* padding-top + padding-bottom + text area = image height */\n    margin: -90px 0px 0px -198px;\n    /* offset vertical: half of image height */\n    /* offset horizontal: half of image width and text area width */\n  }\n}\nh1 {\n  font-size: 24px;\n  font-weight: normal;\n  margin: 0px;\n  overflow: visible;\n  padding: 0px;\n  text-align: center;\n}\n\n.event {\n  border-radius: 4px;\n  -webkit-border-radius: 4px;\n  color: #FFFFFF;\n  font-size: 12px;\n  margin: 0px 30px;\n  padding: 2px 0px;\n}\n\n.event.listening {\n  background-color: #333333;\n  display: block;\n}\n\n.event.received {\n  background-color: #4B946A;\n  display: none;\n}\n\n@keyframes fade {\n  from {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.blink {\n  animation: fade 3000ms infinite;\n  -webkit-animation: fade 3000ms infinite;\n}", "",{"version":3,"sources":["C:/shizuoka_univ/myApp/e-bike/11th/01-cordova-only/src/css/index.css","index.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;EAAA;AAkBA;EACI,6CAAA;EAA4C,wEAAA;ACEhD;;ADCA;EACI,2BAAA;EAA4C,wDAAA;EAC5C,8BAAA;EAA4C,6CAAA;EAC5C,yBAAA;EAA4C,0DAAA;EAC5C,yBAAA;EACA,+DAAA;EACA,uEAAA;EACA,mEAAA;EACA,oHAAA;EAOA,4BAAA;EACA,iFAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;ACDJ;;ADIA,8BAAA;AACA;EACI,wEAAA;EAAsD,kBAAA;EACtD,kBAAA;EAA+B,yCAAA;EAC/B,SAAA;EACA,QAAA;EACA,YAAA;EAA+B,qBAAA;EAC/B,YAAA;EAA+B,oBAAA;EAC/B,kBAAA;EACA,0BAAA;EAA+B,iEAAA;EAC/B,6BAAA;EAA+B,+DAAA;EACA,+CAAA;ACKnC;;ADFA,sCAAA;AACA;EACI;IACI,gCAAA;IACA,4BAAA;IAA8B,4DAAA;IAC9B,4BAAA;IAA8B,0CAAA;IACA,+DAAA;ECOpC;AACF;ADJA;EACI,eAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,kBAAA;ACMJ;;ADHA;EACI,kBAAA;EACA,0BAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ACMJ;;ADHA;EACI,yBAAA;EACA,cAAA;ACMJ;;ADHA;EACI,yBAAA;EACA,aAAA;ACMJ;;ADHA;EACI;IAAO,UAAA;ECOT;EDNE;IAAM,YAAA;ECSR;EDRE;IAAK,UAAA;ECWP;AACF;ADTA;EACI;IAAO,UAAA;ECYT;EDXE;IAAM,YAAA;ECcR;EDbE;IAAK,UAAA;ECgBP;AACF;ADdA;EACI,+BAAA;EACA,uCAAA;ACgBJ","file":"index.css","sourcesContent":["/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n* {\n    -webkit-tap-highlight-color: rgba(0,0,0,0); /* make transparent link selection, adjust last value opacity 0 to 1.0 */\n}\n\nbody {\n    -webkit-touch-callout: none;                /* prevent callout to copy image, etc when tap to hold */\n    -webkit-text-size-adjust: none;             /* prevent webkit from resizing text to fit */\n    -webkit-user-select: none;                  /* prevent copy paste, to allow, change 'none' to 'text' */\n    background-color:#E4E4E4;\n    background-image:linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n    background-image:-webkit-linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n    background-image:-ms-linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n    background-image:-webkit-gradient(\n        linear,\n        left top,\n        left bottom,\n        color-stop(0, #A7A7A7),\n        color-stop(0.51, #E4E4E4)\n    );\n    background-attachment:fixed;\n    font-family:'HelveticaNeue-Light', 'HelveticaNeue', Helvetica, Arial, sans-serif;\n    font-size:12px;\n    height:100%;\n    margin:0px;\n    padding:0px;\n    text-transform:uppercase;\n    width:100%;\n}\n\n/* Portrait layout (default) */\n.app {\n    background:url(../img/logo.png) no-repeat center top; /* 170px x 200px */\n    position:absolute;             /* position in the center of the screen */\n    left:50%;\n    top:50%;\n    height:50px;                   /* text area height */\n    width:225px;                   /* text area width */\n    text-align:center;\n    padding:180px 0px 0px 0px;     /* image height is 200px (bottom 20px are overlapped with text) */\n    margin:-115px 0px 0px -112px;  /* offset vertical: half of image height and text area height */\n                                   /* offset horizontal: half of text area width */\n}\n\n/* Landscape layout (with min-width) */\n@media screen and (min-aspect-ratio: 1/1) and (min-width:400px) {\n    .app {\n        background-position:left center;\n        padding:75px 0px 75px 170px;  /* padding-top + padding-bottom + text area = image height */\n        margin:-90px 0px 0px -198px;  /* offset vertical: half of image height */\n                                      /* offset horizontal: half of image width and text area width */\n    }\n}\n\nh1 {\n    font-size:24px;\n    font-weight:normal;\n    margin:0px;\n    overflow:visible;\n    padding:0px;\n    text-align:center;\n}\n\n.event {\n    border-radius:4px;\n    -webkit-border-radius:4px;\n    color:#FFFFFF;\n    font-size:12px;\n    margin:0px 30px;\n    padding:2px 0px;\n}\n\n.event.listening {\n    background-color:#333333;\n    display:block;\n}\n\n.event.received {\n    background-color:#4B946A;\n    display:none;\n}\n\n@keyframes fade {\n    from { opacity: 1.0; }\n    50% { opacity: 0.4; }\n    to { opacity: 1.0; }\n}\n \n@-webkit-keyframes fade {\n    from { opacity: 1.0; }\n    50% { opacity: 0.4; }\n    to { opacity: 1.0; }\n}\n \n.blink {\n    animation:fade 3000ms infinite;\n    -webkit-animation:fade 3000ms infinite;\n}\n","/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  /* make transparent link selection, adjust last value opacity 0 to 1.0 */\n}\n\nbody {\n  -webkit-touch-callout: none;\n  /* prevent callout to copy image, etc when tap to hold */\n  -webkit-text-size-adjust: none;\n  /* prevent webkit from resizing text to fit */\n  -webkit-user-select: none;\n  /* prevent copy paste, to allow, change 'none' to 'text' */\n  background-color: #E4E4E4;\n  background-image: linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n  background-image: -webkit-linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n  background-image: -ms-linear-gradient(top, #A7A7A7 0%, #E4E4E4 51%);\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #A7A7A7), color-stop(0.51, #E4E4E4));\n  background-attachment: fixed;\n  font-family: \"HelveticaNeue-Light\", \"HelveticaNeue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n/* Portrait layout (default) */\n.app {\n  background: url(../img/logo.png) no-repeat center top;\n  /* 170px x 200px */\n  position: absolute;\n  /* position in the center of the screen */\n  left: 50%;\n  top: 50%;\n  height: 50px;\n  /* text area height */\n  width: 225px;\n  /* text area width */\n  text-align: center;\n  padding: 180px 0px 0px 0px;\n  /* image height is 200px (bottom 20px are overlapped with text) */\n  margin: -115px 0px 0px -112px;\n  /* offset vertical: half of image height and text area height */\n  /* offset horizontal: half of text area width */\n}\n\n/* Landscape layout (with min-width) */\n@media screen and (min-aspect-ratio: 1/1) and (min-width: 400px) {\n  .app {\n    background-position: left center;\n    padding: 75px 0px 75px 170px;\n    /* padding-top + padding-bottom + text area = image height */\n    margin: -90px 0px 0px -198px;\n    /* offset vertical: half of image height */\n    /* offset horizontal: half of image width and text area width */\n  }\n}\nh1 {\n  font-size: 24px;\n  font-weight: normal;\n  margin: 0px;\n  overflow: visible;\n  padding: 0px;\n  text-align: center;\n}\n\n.event {\n  border-radius: 4px;\n  -webkit-border-radius: 4px;\n  color: #FFFFFF;\n  font-size: 12px;\n  margin: 0px 30px;\n  padding: 2px 0px;\n}\n\n.event.listening {\n  background-color: #333333;\n  display: block;\n}\n\n.event.received {\n  background-color: #4B946A;\n  display: none;\n}\n\n@keyframes fade {\n  from {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.blink {\n  animation: fade 3000ms infinite;\n  -webkit-animation: fade 3000ms infinite;\n}"]}]);
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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/sass-loader/dist/cjs.js??ref--4-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/css/index.css");

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

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    )
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready')
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id)
    var listeningElement = parentElement.querySelector('.listening')
    var receivedElement = parentElement.querySelector('.received')

    listeningElement.setAttribute('style', 'display:none;')
    receivedElement.setAttribute('style', 'display:block;')

    console.log('Received Event: ' + id)
  },
}

app.initialize()


/***/ })

/******/ });
//# sourceMappingURL=index.js.map