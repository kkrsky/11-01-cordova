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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/css/index.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/css/index.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "ul {\n  list-style: none;\n  border-bottom: 1px solid #d3d3d3;\n  text-align: left;\n}\n\nli {\n  margin-left: -40px;\n  padding: 5px;\n  padding-top: 10px;\n  min-height: 50px;\n  border-top: 1px solid #d3d3d3;\n  font-size: 0.9em;\n}\n\n.bt {\n  cursor: pointer;\n}\n\n.device-info {\n  text-align: center;\n}", "",{"version":3,"sources":["C:/shizuoka_univ/myApp/e-bike/11th/01-cordova-only/src/css/index.css","index.css"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,gCAAA;EACA,gBAAA;ACCF;;ADEA;EACE,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,6BAAA;EACA,gBAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;ADEA;EACE,kBAAA;ACCF","file":"index.css","sourcesContent":["ul {\r\n  list-style: none;\r\n  border-bottom: 1px solid #d3d3d3;\r\n  text-align: left;\r\n}\r\n\r\nli {\r\n  margin-left: -40px;\r\n  padding: 5px;\r\n  padding-top: 10px;\r\n  min-height: 50px;\r\n  border-top: 1px solid #d3d3d3;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.bt {\r\n  cursor: pointer;\r\n}\r\n\r\n.device-info {\r\n  text-align: center;\r\n}\r\n","ul {\n  list-style: none;\n  border-bottom: 1px solid #d3d3d3;\n  text-align: left;\n}\n\nli {\n  margin-left: -40px;\n  padding: 5px;\n  padding-top: 10px;\n  min-height: 50px;\n  border-top: 1px solid #d3d3d3;\n  font-size: 0.9em;\n}\n\n.bt {\n  cursor: pointer;\n}\n\n.device-info {\n  text-align: center;\n}"]}]);
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

/***/ "./src/js/bluetooth.js":
/*!*****************************!*\
  !*** ./src/js/bluetooth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.alert('load bluettoth.js2')
let cons = {
  FILE_DIR_URL: 'cordov',
  elm_ul: document.getElementsByTagName('ul'),
  UUID: {
    all: {
      name: '自動挿入',
      obj: '自動挿入',
    },
    deviceA: {
      ID: '24:0A:C4:C5:F6:22', //'6C:05:2B:EA:6B:78',
      service: {
        service1: '4fafc201-1fb5-459e-8fcc-c5c9c331914b',
        service2: '0000bbb0-0000-1000-8000-00805f9b34fb',
        service3: '0000ccc0-0000-1000-8000-00805f9b34fb',
      },
      chracter: {
        chara1: 'beb5483e-36e1-4688-b7f5-ea07361b26a8',
        chara2: '0000bbb1-0000-1000-8000-00805f9b34fb',
        chara3: '0000ccc1-0000-1000-8000-00805f9b34fb',
      },
    },
    deviceB: {
      ID: '6C:05:2B:EA:6B:78',
      service: {
        service1: '0000fff0-0000-1000-8000-00805f9b34fb',
        service2: '0000bbb0-0000-1000-8000-00805f9b34fb',
        service3: '0000ccc0-0000-1000-8000-00805f9b34fb',
      },
      chracter: {
        chara1: '0000fff1-0000-1000-8000-00805f9b34fb',
        chara2: '0000bbb1-0000-1000-8000-00805f9b34fb',
        chara3: '0000ccc1-0000-1000-8000-00805f9b34fb',
      },
    },
    deviceC: {
      ID: '6C:05:2B:EA:6B:78',
      service: {
        service1: '0000fff0-0000-1000-8000-00805f9b34fb',
        service2: '0000bbb0-0000-1000-8000-00805f9b34fb',
        service3: '0000ccc0-0000-1000-8000-00805f9b34fb',
      },
      chracter: {
        chara1: '0000fff1-0000-1000-8000-00805f9b34fb',
        chara2: '0000bbb1-0000-1000-8000-00805f9b34fb',
        chara3: '0000ccc1-0000-1000-8000-00805f9b34fb',
      },
    },
  },
}

$(document).ready(function() {
  /**
 * !*****************************
 * 
 * 
 * 
 * 
 *
!*****************************!
!*** test funcion ***!
!*****************************
 * 
 * 
 * 
 * 
 * 
 *!*****************************
 */

  // key
  const KEY_NUMBERS = 'nsNums'
  const KEY_RECORDS = 'nsRecords'

  // value
  const numbers = [100, 200, 300, 400, 500] // 配列
  const records = {
    // オブジェクト
    date: {
      year: 2019,
      month: 11,
      day: 16,
      week: 1,
    },
    time: [
      { hour: 7, min: 10 },
      { hour: 9, min: 20 },
      { hour: 11, min: 30 },
      { hour: 15, min: 40 },
      { hour: 20, min: 50 },
    ],
  }

  $(document).on('deviceready', function() {
    // devicereadyイベント
    console.log('*** deviceready ***')
    console.log(window.NativeStorage)
  })

  $(document).on('click', '#btn-test-storage-save', function() {
    console.log('*** onLoad ***')

    NativeStorage.getItem(
      KEY_NUMBERS,
      obj => console.log('success', obj),
      err => console.log('error', err.code)
    )

    console.log('check1')

    NativeStorage.getItem(
      KEY_RECORDS,
      obj => console.log('success', obj),
      err => console.log('error', err.code)
    )

    console.log('check2')
  })

  $(document).on('click', '#btn-test-storage-load', function() {
    console.log('*** onSave ***')

    NativeStorage.setItem(
      KEY_NUMBERS,
      numbers,
      obj => console.log('success', obj),
      err => console.log('error', err.code)
    )

    console.log('check1')

    NativeStorage.setItem(
      KEY_RECORDS,
      records,
      obj => console.log('success', obj),
      err => console.log('error', err.code)
    )

    console.log('check2')
  })

  function test_inout() {
    let data = { a: [1, 4, 6, 7, 3], b: ['tes', 'tes2'] }
    let key = 'a'
    $('.test_inout').data(key, data)

    var tes = $('.test_inout').data(key)
    console.log(tes, typeof tes)
  }
  function test_in() {
    let data = 'tes01'
    let key = 'a'
    $temp_in(data, key)
  }
  function test_out() {
    let key = 'a'
    $temp_out(key)
    var tes = $get_out()
    console.log(tes)
  }

  $('button').click(function() {
    if ($(this).hasClass('test_inout')) {
      test_inout()
    } else if ($(this).hasClass('test_in')) {
      test_in()
    } else if ($(this).hasClass('test_out')) {
      test_out()
    } else if ($(this).hasClass('.btn-ble-scan')) {
      //test_out()
    } else if ($(this).hasClass('test_out')) {
      test_out()
    } else if ($(this).hasClass('test_out')) {
      test_out()
    } else {
      window.alert('else')
    }
  })

  $(document).on('click', '.test', function() {
    $(this).data('key', 'value')
    window.alert($(this).data('key'))

    let testDataTag = $(this).data('name')
    window.alert(testDataTag)
  })

  let html = 'test'
  $('<li>' + html + '</li>')
    .attr({
      class: 'bt test list ble-scan-list',
      'data-name': 'test',
    })
    .appendTo('#ul-test')

  $(document).on('click', '.test_scc', function() {
    function scc(e) {
      success(e, 'test_scc', 'this is comment', true)
    }
    function fal(e) {
      failed(e, 'test_scc', 'this is comment', true)
    }
    console.log(this)
    if ($(this).hasClass('scc')) {
      scc('this is success')
      $(this).fadeOut()
      $('.fal').show()
    } else if ($(this).hasClass('fal')) {
      fal('this is failed')
      $(this).fadeOut()
      $('.scc').fadeIn()
    }
    //$(this).toggle()
  })

  /**
 * !*****************************
 * 
 * 
 * 
 * 
 *
!*****************************!
!*** 汎関数 ***!
!*****************************
 * 
 * 
 * 
 * 
 * 
 *!*****************************
 */

  function success(e, called, comment, alert) {
    //if not called, undefined
    let insert = ''
    if (comment === undefined || comment === '-') {
      insert = 'success: ' + e + '\nfrom: ' + called
    } else {
      insert = 'success: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
    }

    console.log(insert)
    if (alert !== undefined) window.alert(insert)
    return undefined
  }
  function failed(e, called, comment, alert) {
    //if not called, undefined
    let insert = ''
    if (comment === undefined || comment === '-')
      insert = 'error: ' + e + '\nfrom: ' + called
    else insert = 'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
    console.log(insert)
    if (alert !== undefined) window.alert(insert)
    return undefined
  }

  /**
 * !*****************************
 * 
 * 
 * 
 * 
 *
!*****************************!
!*** View ***!
!*****************************
 * 
 * 
 * 
 * 
 * 
 *!*****************************
 */

  /**
   * ==概要==
   * ble.scanで取得したデータ一覧を'#ul-ble-scan-list'に表示
   *
   * ==呼び出し関数==
   *conBleScanDevice()
   *
   *
   */
  $(document).on('click', '.btn-ble-scan', function() {
    /*
  --#ble-scan-wwrapper 
  #ul-ble-scan-list
  .btn-ble-scan
  */
    //初期化
    $('#ul-ble-scan-list').text('')
    conBleScanDevice()
  })

  /**
   * ==概要==
   * ble.scanで取得した任意のデータをクリックしたときにble接続
   *
   * ==呼び出し関数==
   *conBleConnect(id, success3, failed3)
   *
   *
   */
  $(document).on('click', '.ble-scan-list', function() {
    let id = $(this).data('id')
    //console.log('id', id)

    //接続成功時の表示用関数
    function success2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'successだよ: ' + e + '\nfrom: ' + called
      else
        insert =
          'successだよ: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)
      if (alert !== undefined) window.alert(insert)

      //#device-infoに情報をsave
      $('#device-info').data('connectData', e)
      //device-info-savedを発火
      $(document).trigger('device-info-saved')

      let deviceInfo = e
      console.log('deviceInfo', deviceInfo)
      $('.device-info-name').text(deviceInfo.name)
      $('.device-info-id').text(deviceInfo.id)
      $('.device-info-rssi').text(deviceInfo.rssi)
      $('.device-info-services').text(deviceInfo.services)
      $('.device-info-chars').text(deviceInfo.characteristics)
      //#device-infoを表示
      $('#device-info').slideDown()

      return undefined
    }
    function failed2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'error: ' + e + '\nfrom: ' + called
      else
        insert = 'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)
      if (alert !== undefined) window.alert(insert)

      //#device-infoの情報をリセット
      $('#device-info').slideUp()
      return undefined
    }

    //ble.connectでbleと接続、#device-infoにデータをキャッシュ
    //conBleConnect(id, success3, failed3)
    conBleAutoConnect(id, success2, failed2)

    $(document).on('device-info-saved', function() {
      let deviceInfo = $('#device-info').data('connectData')

      console.log('deviceInfo', deviceInfo)
      $('.device-info-name').text(deviceInfo.name)
      $('.device-info-id').text(deviceInfo.id)
      $('.device-info-rssi').text(deviceInfo.rssi)
      $('.device-info-services').text(deviceInfo.services)
      $('.device-info-chars').text(deviceInfo.characteristics)
    })
  })
  /**
   * ==概要==
   * 要素クリックしたときにble接続解除
   *
   * ==呼び出し関数==
   *conBleConnect(id, success3, failed3)
   *
   *
   */
  $(document).on('click', '.btn-ble-disconnect', function() {
    let id = $('#device-info').data('connectData').id

    //接続成功時の表示用関数
    function failed2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'error: ' + e + '\nfrom: ' + called
      else
        insert = 'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)
      if (alert !== undefined) window.alert(insert)
      return undefined
    }
    function success2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'successだよ: ' + e + '\nfrom: ' + called
      else
        insert =
          'successだよ: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)

      if (alert !== undefined) window.alert(insert)

      //イベント発火
      $(document).trigger('device-disconnected')
      $('#device-info').slideUp()
      return undefined
    }

    conBleDisConnect(id, success2, failed2)

    $(document).on('device-disconnected', function() {})
  })

  /**
 *!***************************** 
 * 
 * 
 * 
 * 
 *
!*****************************!
!*** Contraoller ***!
!*****************************
 * 
 * 
 * 
 * 
 * 
 *!*****************************
 */

  /**
   * ==概要==
   * ble.scanで取得したデータ一覧を'#ul-ble-scan-list'に表示
   *
   * ==呼び出し関数==
   *ble.scan([],time,succ,fail)
   *
   *
   */
  function conBleScanDevice() {
    console.log('start conBleScanDevice()')
    ble.scan(
      [],
      5,
      function(device) {
        //console.log(device.name)

        if (device.name !== undefined) {
          //データ作成

          let html =
            '<b>' +
            device.name +
            '</b>' +
            '<br/>' +
            'RSSI: ' +
            device.rssi +
            '&nbsp;|&nbsp;' +
            device.id

          //挿入
          $('<li>' + html + '</li>')
            .attr({
              class: 'bt list ble-scan-list',
              'data-name': device.name,
              'data-id': device.id,
              'data-rssi': device.rssi,
            })

            .appendTo('#ul-ble-scan-list')
        }
      },
      function(e) {
        failed(e, 'conBleScanDevice()')
      }
    )
  }

  /**
   * ==概要==
   * ble接続(手動)
   *
   * ==呼び出し関数==
   * success2(e,from,comment,alert)
   * failed2(e,from,comment,alert)
   *
   *
   */

  function conBleConnect(id, success2, failed2) {
    //function conBleConnect(id) {
    ble.connect(
      id,
      function(e) {
        success2(JSON.stringify(e), 'conBleConnect(id)', '接続成功', true)
      },
      function(e) {
        failed2(JSON.stringify(e), 'conBleConnect(id)', '接続失敗', true)
      }
    )
  }

  /**
   * ==概要==
   * ble接続(自動)
   *
   * ==呼び出し関数==
   * success2(e,from,comment,alert)
   * failed2(e,from,comment,alert)
   *
   *
   */

  function conBleAutoConnect(id, success2, failed2) {
    //function conBleConnect(id) {
    ble.autoConnect(
      id,
      function(e) {
        success2(JSON.stringify(e), 'conBleAutoConnect(id)', '接続成功', true)
      },
      function(e) {
        failed2(JSON.stringify(e), 'conBleAutoConnect(id)', '接続失敗', true)
      }
    )
  }

  function conBleDisConnect(id, success2, failed2) {
    ble.disconnect(
      id,
      function(e) {
        success2(
          e,
          'conBleDisConnect(id, success2, failed2)',
          'disconnect成功',
          true
        )
      },
      function(e) {
        failed2(
          e,
          'conBleDisConnect(id, success2, failed2)',
          'disconnect失敗',
          true
        )
      }
    )
  }

  function onBLERead() {
    //cons.elm_ul.ul_bleReadList.textContent = ''
    let ID = '24:0A:C4:C5:F6:22' // '6C:05:2B:EA:6B:78'
    let serviceID_1 = '4fafc201-1fb5-459e-8fcc-c5c9c331914b' //cons.UUID.deviceA.service.service1
    let charaID_1 = 'beb5483e-36e1-4688-b7f5-ea07361b26a8' //cons.UUID.deviceA.chracter.chara1
    /*
    let serviceID_2 = cons.UUID.deviceA.service.service2
  let charaID_2 = cons.UUID.deviceA.chracter.chara2
  let serviceID_3 = cons.UUID.deviceA.service.service3
  let charaID_3 = cons.UUID.deviceA.chracter.chara3
  */
    let success = {
      template: function(e, prop) {
        let unit8View = new Uint8Array(e)
        let ul_element = '' //cons.elm_ul.ul_bleReadList

        //console.log("success read: " + prop);
        console.log('read: ' + prop + ' | ' + JSON.stringify(unit8View))
        let li = document.createElement('li')
        let html = '<b>' + prop + '</b>' + '<br/>' + unit8View
        li.innerHTML = html
        ul_element.appendChild(li)
      },
      _1: function(e) {
        let prop = 'service 1'
        success.template(e, prop)
      },
      _2: function(e) {
        let prop = 'service 2'
        success.template(e, prop)
      },
      _3: function(e) {
        let prop = 'service 3'
        success.template(e, prop)
      },
    }
    let failed = function() {
      window.alert('書き込みエラー ペリフェラル再接続')
    }
    function subBLERead(ID, serviceID, charaID, success) {
      console.log('subBLERead()')

      //let s = success();
      let failed = function() {
        console.log('failed read')
        window.alert('failed read')
      }
      ble.read(ID, serviceID, charaID, success, failed)
    }
    subBLERead(ID, serviceID_1, charaID_1, success._1, failed)
    //subBLERead(ID, serviceID_2, charaID_2, success._2, failed)
    ///subBLERead(ID, serviceID_3, charaID_3, success._3, failed)
  }

  function onBLEWrite() {
    console.log('onBLEWrite')

    let ID = document.forms.form_bleWrite.input_bleWrite_ID.value
    let serviceID_1 = document.forms.form_bleWrite.input_bleWrite_sUUID1.value
    let charaID_1 = document.forms.form_bleWrite.input_bleWrite_cUUID1.value
    let serviceID_2 = document.forms.form_bleWrite.input_bleWrite_sUUID2.value
    let charaID_2 = document.forms.form_bleWrite.input_bleWrite_cUUID2.value
    let serviceID_3 = document.forms.form_bleWrite.input_bleWrite_sUUID3.value
    let charaID_3 = document.forms.form_bleWrite.input_bleWrite_cUUID3.value
    let input = []

    let data_1 = new Uint8Array(1)
    input[0] = document.forms.form_bleWrite.input_bleWrite_write1.value
    data_1[0] = Number(input[0])
    console.log(input[0])
    console.log(Number(input[0]))

    let data_2 = new Uint8Array(3)
    input[1] = document.forms.form_bleWrite.input_bleWrite_write21.value
    input[2] = document.forms.form_bleWrite.input_bleWrite_write22.value
    input[3] = document.forms.form_bleWrite.input_bleWrite_write23.value
    data_2[0] = Number(input[1])
    data_2[1] = Number(input[2])
    data_2[2] = Number(input[3])
    console.log(input[1])

    let data_3 = new Uint32Array(1)
    input[4] = document.forms.form_bleWrite.input_bleWrite_write3.value
    data_3[0] = Number(input[4])
    console.log(input[4])

    let success = {
      template: function(e, prop) {
        window.alert('write: ' + prop)
      },
      _1: function(e) {
        let prop = 'service 1'

        success.template(e, prop)
      },
      _2: function(e) {
        let prop = 'service 2'
        success.template(e, prop)
      },
      _3: function(e) {
        let prop = 'service 3'
        success.template(e, prop)
      },
    }
    let failed = {
      template: function(e, prop) {
        console.log('error: ' + e + ' | ' + prop)
      },
      _1: function(e) {
        let prop = 'service 1'
        failed.template(e, prop)
      },
      _2: function(e) {
        let prop = 'service 2'
        failed.template(e, prop)
      },
      _3: function(e) {
        let prop = 'service 3'
        failed.template(e, prop)
      },
    }
    ble.write(ID, serviceID_1, charaID_1, data_1.buffer, success._1, failed._1)
    ble.write(ID, serviceID_2, charaID_2, data_2.buffer, success._2, failed._2)
    ble.write(ID, serviceID_3, charaID_3, data_3.buffer, success._3, failed._3)
  }

  function onBLENotify() {
    let ID = document.forms.form_bleNotify.input_bleNotify_ID.value
    let serviceID = document.forms.form_bleNotify.input_bleNotify_sUUID.value
    let charaID = document.forms.form_bleNotify.input_bleNotify_cUUID.value
    let success = function(e) {
      let data = new Uint8Array(e)
      console.log('change: ' + data[0])
      window.alert('change: ' + data[0])
    }
    let failed = function() {
      window.alert('error')
    }
    window.alert('BLE Notifiy Start')
    console.log('start Notify')
    ble.startNotification(ID, serviceID, charaID, success, failed)
  }

  /**
   * BLE
   * @param {string} ID 接続するデバイスID
   * @param {string} serviceID 接続するserviceUUID
   * @param {string} charaID 接続するchractisticUUID
   * @param {function} success 成功時のコールバック関数、引数はID
   */

  function subBLEWrite(ID, serviceID, charaID, success, failed) {
    console.log('onBLEWrite')
  }

  function subBLENotify() {
    console.log('onBLENotify')
  }
})


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
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


//import './js/sub.js'

//webpackでhtmlに組み込まれたときに表示される
console.info('HTML組込み完了')

var app = {
  // Application Constructor
  initialize: function() {
    console.log('start initialize()')

    document.addEventListener('DOMContentLoaded', function() {
      console.log('listen DOMContentLoaded')
    })

    document.addEventListener('load', function() {
      console.log('listen load')
    })

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
    console.log('start onDviceReady() ')
    this.receivedEvent('deviceready')
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log('start receivedEvent(id): ' + id)
    var parentElement = document.getElementById(id)
    var listeningElement = parentElement.querySelector('.listening')
    var receivedElement = parentElement.querySelector('.received')

    listeningElement.setAttribute('style', 'display:none;')
    receivedElement.setAttribute('style', 'display:block;')

    console.log('fin Received Event: ' + id)
  },
}
app.initialize()


/***/ }),

/***/ "./src/js/sub.js":
/*!***********************!*\
  !*** ./src/js/sub.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

window.alert('Hello sub.js!')


/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./src/js/index.js ./src/js/sub.js ./src/js/bluetooth.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\shizuoka_univ\myApp\e-bike\11th\01-cordova-only/src/js/index.js */"./src/js/index.js");
__webpack_require__(/*! C:\shizuoka_univ\myApp\e-bike\11th\01-cordova-only/src/js/sub.js */"./src/js/sub.js");
module.exports = __webpack_require__(/*! C:\shizuoka_univ\myApp\e-bike\11th\01-cordova-only/src/js/bluetooth.js */"./src/js/bluetooth.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/OTQ3OSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmx1ZXRvb3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3ViLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLE9BQU8scUJBQXFCLHFDQUFxQyxxQkFBcUIsR0FBRyxRQUFRLHVCQUF1QixpQkFBaUIsc0JBQXNCLHFCQUFxQixrQ0FBa0MscUJBQXFCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsT0FBTyx1SUFBdUksV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLGdEQUFnRCx1QkFBdUIsdUNBQXVDLHVCQUF1QixLQUFLLFlBQVkseUJBQXlCLG1CQUFtQix3QkFBd0IsdUJBQXVCLG9DQUFvQyx1QkFBdUIsS0FBSyxhQUFhLHNCQUFzQixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyxXQUFXLHFCQUFxQixxQ0FBcUMscUJBQXFCLEdBQUcsUUFBUSx1QkFBdUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsa0NBQWtDLHFCQUFxQixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLEdBQUc7QUFDcjBDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGlPQUF3SDs7QUFFMUo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxvQkFBb0I7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVEQUF1RDtBQUN2RCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcHNCRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF5RDtBQUN6RCx5REFBeUQ7O0FBRXpEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLmJ0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldmljZS1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovc2hpenVva2FfdW5pdi9teUFwcC9lLWJpa2UvMTF0aC8wMS1jb3Jkb3ZhLW9ubHkvc3JjL2Nzcy9pbmRleC5jc3NcIixcImluZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0ZcIixcImZpbGVcIjpcImluZGV4LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxufVxcclxcblxcclxcbi5idCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXZpY2UtaW5mbyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiLFwidWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkM2QzZDM7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4uYnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGV2aWNlLWluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIndpbmRvdy5hbGVydCgnbG9hZCBibHVldHRvdGguanMyJylcclxubGV0IGNvbnMgPSB7XHJcbiAgRklMRV9ESVJfVVJMOiAnY29yZG92JyxcclxuICBlbG1fdWw6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpLFxyXG4gIFVVSUQ6IHtcclxuICAgIGFsbDoge1xyXG4gICAgICBuYW1lOiAn6Ieq5YuV5oy/5YWlJyxcclxuICAgICAgb2JqOiAn6Ieq5YuV5oy/5YWlJyxcclxuICAgIH0sXHJcbiAgICBkZXZpY2VBOiB7XHJcbiAgICAgIElEOiAnMjQ6MEE6QzQ6QzU6RjY6MjInLCAvLyc2QzowNToyQjpFQTo2Qjo3OCcsXHJcbiAgICAgIHNlcnZpY2U6IHtcclxuICAgICAgICBzZXJ2aWNlMTogJzRmYWZjMjAxLTFmYjUtNDU5ZS04ZmNjLWM1YzljMzMxOTE0YicsXHJcbiAgICAgICAgc2VydmljZTI6ICcwMDAwYmJiMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIHNlcnZpY2UzOiAnMDAwMGNjYzAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgfSxcclxuICAgICAgY2hyYWN0ZXI6IHtcclxuICAgICAgICBjaGFyYTE6ICdiZWI1NDgzZS0zNmUxLTQ2ODgtYjdmNS1lYTA3MzYxYjI2YTgnLFxyXG4gICAgICAgIGNoYXJhMjogJzAwMDBiYmIxLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgY2hhcmEzOiAnMDAwMGNjYzEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZXZpY2VCOiB7XHJcbiAgICAgIElEOiAnNkM6MDU6MkI6RUE6NkI6NzgnLFxyXG4gICAgICBzZXJ2aWNlOiB7XHJcbiAgICAgICAgc2VydmljZTE6ICcwMDAwZmZmMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIHNlcnZpY2UyOiAnMDAwMGJiYjAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBzZXJ2aWNlMzogJzAwMDBjY2MwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNocmFjdGVyOiB7XHJcbiAgICAgICAgY2hhcmExOiAnMDAwMGZmZjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBjaGFyYTI6ICcwMDAwYmJiMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIGNoYXJhMzogJzAwMDBjY2MxLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGV2aWNlQzoge1xyXG4gICAgICBJRDogJzZDOjA1OjJCOkVBOjZCOjc4JyxcclxuICAgICAgc2VydmljZToge1xyXG4gICAgICAgIHNlcnZpY2UxOiAnMDAwMGZmZjAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBzZXJ2aWNlMjogJzAwMDBiYmIwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgc2VydmljZTM6ICcwMDAwY2NjMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICB9LFxyXG4gICAgICBjaHJhY3Rlcjoge1xyXG4gICAgICAgIGNoYXJhMTogJzAwMDBmZmYxLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgY2hhcmEyOiAnMDAwMGJiYjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBjaGFyYTM6ICcwMDAwY2NjMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAvKipcclxuICogISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKlxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohXHJcbiEqKiogdGVzdCBmdW5jaW9uICoqKiFcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICohKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcblxyXG4gIC8vIGtleVxyXG4gIGNvbnN0IEtFWV9OVU1CRVJTID0gJ25zTnVtcydcclxuICBjb25zdCBLRVlfUkVDT1JEUyA9ICduc1JlY29yZHMnXHJcblxyXG4gIC8vIHZhbHVlXHJcbiAgY29uc3QgbnVtYmVycyA9IFsxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMF0gLy8g6YWN5YiXXHJcbiAgY29uc3QgcmVjb3JkcyA9IHtcclxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiFxyXG4gICAgZGF0ZToge1xyXG4gICAgICB5ZWFyOiAyMDE5LFxyXG4gICAgICBtb250aDogMTEsXHJcbiAgICAgIGRheTogMTYsXHJcbiAgICAgIHdlZWs6IDEsXHJcbiAgICB9LFxyXG4gICAgdGltZTogW1xyXG4gICAgICB7IGhvdXI6IDcsIG1pbjogMTAgfSxcclxuICAgICAgeyBob3VyOiA5LCBtaW46IDIwIH0sXHJcbiAgICAgIHsgaG91cjogMTEsIG1pbjogMzAgfSxcclxuICAgICAgeyBob3VyOiAxNSwgbWluOiA0MCB9LFxyXG4gICAgICB7IGhvdXI6IDIwLCBtaW46IDUwIH0sXHJcbiAgICBdLFxyXG4gIH1cclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2RldmljZXJlYWR5JywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBkZXZpY2VyZWFkeeOCpOODmeODs+ODiFxyXG4gICAgY29uc29sZS5sb2coJyoqKiBkZXZpY2VyZWFkeSAqKionKVxyXG4gICAgY29uc29sZS5sb2cod2luZG93Lk5hdGl2ZVN0b3JhZ2UpXHJcbiAgfSlcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG4tdGVzdC1zdG9yYWdlLXNhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCcqKiogb25Mb2FkICoqKicpXHJcblxyXG4gICAgTmF0aXZlU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICBLRVlfTlVNQkVSUyxcclxuICAgICAgb2JqID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJywgb2JqKSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVyci5jb2RlKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjaGVjazEnKVxyXG5cclxuICAgIE5hdGl2ZVN0b3JhZ2UuZ2V0SXRlbShcclxuICAgICAgS0VZX1JFQ09SRFMsXHJcbiAgICAgIG9iaiA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycsIG9iaiksXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIuY29kZSlcclxuICAgIClcclxuXHJcbiAgICBjb25zb2xlLmxvZygnY2hlY2syJylcclxuICB9KVxyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bi10ZXN0LXN0b3JhZ2UtbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJyoqKiBvblNhdmUgKioqJylcclxuXHJcbiAgICBOYXRpdmVTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgIEtFWV9OVU1CRVJTLFxyXG4gICAgICBudW1iZXJzLFxyXG4gICAgICBvYmogPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBvYmopLFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLmNvZGUpXHJcbiAgICApXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2NoZWNrMScpXHJcblxyXG4gICAgTmF0aXZlU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBLRVlfUkVDT1JEUyxcclxuICAgICAgcmVjb3JkcyxcclxuICAgICAgb2JqID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJywgb2JqKSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVyci5jb2RlKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjaGVjazInKVxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIHRlc3RfaW5vdXQoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHsgYTogWzEsIDQsIDYsIDcsIDNdLCBiOiBbJ3RlcycsICd0ZXMyJ10gfVxyXG4gICAgbGV0IGtleSA9ICdhJ1xyXG4gICAgJCgnLnRlc3RfaW5vdXQnKS5kYXRhKGtleSwgZGF0YSlcclxuXHJcbiAgICB2YXIgdGVzID0gJCgnLnRlc3RfaW5vdXQnKS5kYXRhKGtleSlcclxuICAgIGNvbnNvbGUubG9nKHRlcywgdHlwZW9mIHRlcylcclxuICB9XHJcbiAgZnVuY3Rpb24gdGVzdF9pbigpIHtcclxuICAgIGxldCBkYXRhID0gJ3RlczAxJ1xyXG4gICAgbGV0IGtleSA9ICdhJ1xyXG4gICAgJHRlbXBfaW4oZGF0YSwga2V5KVxyXG4gIH1cclxuICBmdW5jdGlvbiB0ZXN0X291dCgpIHtcclxuICAgIGxldCBrZXkgPSAnYSdcclxuICAgICR0ZW1wX291dChrZXkpXHJcbiAgICB2YXIgdGVzID0gJGdldF9vdXQoKVxyXG4gICAgY29uc29sZS5sb2codGVzKVxyXG4gIH1cclxuXHJcbiAgJCgnYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygndGVzdF9pbm91dCcpKSB7XHJcbiAgICAgIHRlc3RfaW5vdXQoKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0ZXN0X2luJykpIHtcclxuICAgICAgdGVzdF9pbigpXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3Rlc3Rfb3V0JykpIHtcclxuICAgICAgdGVzdF9vdXQoKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCcuYnRuLWJsZS1zY2FuJykpIHtcclxuICAgICAgLy90ZXN0X291dCgpXHJcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3Rlc3Rfb3V0JykpIHtcclxuICAgICAgdGVzdF9vdXQoKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0ZXN0X291dCcpKSB7XHJcbiAgICAgIHRlc3Rfb3V0KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydCgnZWxzZScpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50ZXN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmRhdGEoJ2tleScsICd2YWx1ZScpXHJcbiAgICB3aW5kb3cuYWxlcnQoJCh0aGlzKS5kYXRhKCdrZXknKSlcclxuXHJcbiAgICBsZXQgdGVzdERhdGFUYWcgPSAkKHRoaXMpLmRhdGEoJ25hbWUnKVxyXG4gICAgd2luZG93LmFsZXJ0KHRlc3REYXRhVGFnKVxyXG4gIH0pXHJcblxyXG4gIGxldCBodG1sID0gJ3Rlc3QnXHJcbiAgJCgnPGxpPicgKyBodG1sICsgJzwvbGk+JylcclxuICAgIC5hdHRyKHtcclxuICAgICAgY2xhc3M6ICdidCB0ZXN0IGxpc3QgYmxlLXNjYW4tbGlzdCcsXHJcbiAgICAgICdkYXRhLW5hbWUnOiAndGVzdCcsXHJcbiAgICB9KVxyXG4gICAgLmFwcGVuZFRvKCcjdWwtdGVzdCcpXHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudGVzdF9zY2MnLCBmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIHNjYyhlKSB7XHJcbiAgICAgIHN1Y2Nlc3MoZSwgJ3Rlc3Rfc2NjJywgJ3RoaXMgaXMgY29tbWVudCcsIHRydWUpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWwoZSkge1xyXG4gICAgICBmYWlsZWQoZSwgJ3Rlc3Rfc2NjJywgJ3RoaXMgaXMgY29tbWVudCcsIHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NjYycpKSB7XHJcbiAgICAgIHNjYygndGhpcyBpcyBzdWNjZXNzJylcclxuICAgICAgJCh0aGlzKS5mYWRlT3V0KClcclxuICAgICAgJCgnLmZhbCcpLnNob3coKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdmYWwnKSkge1xyXG4gICAgICBmYWwoJ3RoaXMgaXMgZmFpbGVkJylcclxuICAgICAgJCh0aGlzKS5mYWRlT3V0KClcclxuICAgICAgJCgnLnNjYycpLmZhZGVJbigpXHJcbiAgICB9XHJcbiAgICAvLyQodGhpcykudG9nZ2xlKClcclxuICB9KVxyXG5cclxuICAvKipcclxuICogISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKlxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohXHJcbiEqKiog5rGO6Zai5pWwICoqKiFcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICohKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcblxyXG4gIGZ1bmN0aW9uIHN1Y2Nlc3MoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgLy9pZiBub3QgY2FsbGVkLCB1bmRlZmluZWRcclxuICAgIGxldCBpbnNlcnQgPSAnJ1xyXG4gICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpIHtcclxuICAgICAgaW5zZXJ0ID0gJ3N1Y2Nlc3M6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluc2VydCA9ICdzdWNjZXNzOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkICsgJ1xcbmNvbW1lbnQ6ICcgKyBjb21tZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG4gICAgaWYgKGFsZXJ0ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5hbGVydChpbnNlcnQpXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGZhaWxlZChlLCBjYWxsZWQsIGNvbW1lbnQsIGFsZXJ0KSB7XHJcbiAgICAvL2lmIG5vdCBjYWxsZWQsIHVuZGVmaW5lZFxyXG4gICAgbGV0IGluc2VydCA9ICcnXHJcbiAgICBpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbW1lbnQgPT09ICctJylcclxuICAgICAgaW5zZXJ0ID0gJ2Vycm9yOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkXHJcbiAgICBlbHNlIGluc2VydCA9ICdlcnJvcjogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG4gICAgaWYgKGFsZXJ0ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5hbGVydChpbnNlcnQpXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKlxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohXHJcbiEqKiogVmlldyAqKiohXHJcbiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqL1xyXG5cclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICogYmxlLnNjYW7jgaflj5blvpfjgZfjgZ/jg4fjg7zjgr/kuIDopqfjgpInI3VsLWJsZS1zY2FuLWxpc3Qn44Gr6KGo56S6XHJcbiAgICpcclxuICAgKiA9PeWRvOOBs+WHuuOBl+mWouaVsD09XHJcbiAgICpjb25CbGVTY2FuRGV2aWNlKClcclxuICAgKlxyXG4gICAqXHJcbiAgICovXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tYmxlLXNjYW4nLCBmdW5jdGlvbigpIHtcclxuICAgIC8qXHJcbiAgLS0jYmxlLXNjYW4td3dyYXBwZXIgXHJcbiAgI3VsLWJsZS1zY2FuLWxpc3RcclxuICAuYnRuLWJsZS1zY2FuXHJcbiAgKi9cclxuICAgIC8v5Yid5pyf5YyWXHJcbiAgICAkKCcjdWwtYmxlLXNjYW4tbGlzdCcpLnRleHQoJycpXHJcbiAgICBjb25CbGVTY2FuRGV2aWNlKClcclxuICB9KVxyXG5cclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICogYmxlLnNjYW7jgaflj5blvpfjgZfjgZ/ku7vmhI/jga7jg4fjg7zjgr/jgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgajjgY3jgatibGXmjqXntppcclxuICAgKlxyXG4gICAqID095ZG844Gz5Ye644GX6Zai5pWwPT1cclxuICAgKmNvbkJsZUNvbm5lY3QoaWQsIHN1Y2Nlc3MzLCBmYWlsZWQzKVxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJsZS1zY2FuLWxpc3QnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnaWQnKVxyXG4gICAgLy9jb25zb2xlLmxvZygnaWQnLCBpZClcclxuXHJcbiAgICAvL+aOpee2muaIkOWKn+aZguOBruihqOekuueUqOmWouaVsFxyXG4gICAgZnVuY3Rpb24gc3VjY2VzczIoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgICAvL2lmIG5vdCBjYWxsZWQsIHVuZGVmaW5lZFxyXG4gICAgICBsZXQgaW5zZXJ0ID0gJydcclxuICAgICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpXHJcbiAgICAgICAgaW5zZXJ0ID0gJ3N1Y2Nlc3PjgaDjgog6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWRcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGluc2VydCA9XHJcbiAgICAgICAgICAnc3VjY2Vzc+OBoOOCiDogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgICBjb25zb2xlLmxvZyhpbnNlcnQpXHJcbiAgICAgIGlmIChhbGVydCAhPT0gdW5kZWZpbmVkKSB3aW5kb3cuYWxlcnQoaW5zZXJ0KVxyXG5cclxuICAgICAgLy8jZGV2aWNlLWluZm/jgavmg4XloLHjgpJzYXZlXHJcbiAgICAgICQoJyNkZXZpY2UtaW5mbycpLmRhdGEoJ2Nvbm5lY3REYXRhJywgZSlcclxuICAgICAgLy9kZXZpY2UtaW5mby1zYXZlZOOCkueZuueBq1xyXG4gICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdkZXZpY2UtaW5mby1zYXZlZCcpXHJcblxyXG4gICAgICBsZXQgZGV2aWNlSW5mbyA9IGVcclxuICAgICAgY29uc29sZS5sb2coJ2RldmljZUluZm8nLCBkZXZpY2VJbmZvKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tbmFtZScpLnRleHQoZGV2aWNlSW5mby5uYW1lKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8taWQnKS50ZXh0KGRldmljZUluZm8uaWQpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1yc3NpJykudGV4dChkZXZpY2VJbmZvLnJzc2kpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1zZXJ2aWNlcycpLnRleHQoZGV2aWNlSW5mby5zZXJ2aWNlcylcclxuICAgICAgJCgnLmRldmljZS1pbmZvLWNoYXJzJykudGV4dChkZXZpY2VJbmZvLmNoYXJhY3RlcmlzdGljcylcclxuICAgICAgLy8jZGV2aWNlLWluZm/jgpLooajnpLpcclxuICAgICAgJCgnI2RldmljZS1pbmZvJykuc2xpZGVEb3duKClcclxuXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZhaWxlZDIoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgICAvL2lmIG5vdCBjYWxsZWQsIHVuZGVmaW5lZFxyXG4gICAgICBsZXQgaW5zZXJ0ID0gJydcclxuICAgICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpXHJcbiAgICAgICAgaW5zZXJ0ID0gJ2Vycm9yOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBpbnNlcnQgPSAnZXJyb3I6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWQgKyAnXFxuY29tbWVudDogJyArIGNvbW1lbnRcclxuICAgICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG4gICAgICBpZiAoYWxlcnQgIT09IHVuZGVmaW5lZCkgd2luZG93LmFsZXJ0KGluc2VydClcclxuXHJcbiAgICAgIC8vI2RldmljZS1pbmZv44Gu5oOF5aCx44KS44Oq44K744OD44OIXHJcbiAgICAgICQoJyNkZXZpY2UtaW5mbycpLnNsaWRlVXAoKVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgLy9ibGUuY29ubmVjdOOBp2JsZeOBqOaOpee2muOAgSNkZXZpY2UtaW5mb+OBq+ODh+ODvOOCv+OCkuOCreODo+ODg+OCt+ODpVxyXG4gICAgLy9jb25CbGVDb25uZWN0KGlkLCBzdWNjZXNzMywgZmFpbGVkMylcclxuICAgIGNvbkJsZUF1dG9Db25uZWN0KGlkLCBzdWNjZXNzMiwgZmFpbGVkMilcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignZGV2aWNlLWluZm8tc2F2ZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGRldmljZUluZm8gPSAkKCcjZGV2aWNlLWluZm8nKS5kYXRhKCdjb25uZWN0RGF0YScpXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnZGV2aWNlSW5mbycsIGRldmljZUluZm8pXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1uYW1lJykudGV4dChkZXZpY2VJbmZvLm5hbWUpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1pZCcpLnRleHQoZGV2aWNlSW5mby5pZClcclxuICAgICAgJCgnLmRldmljZS1pbmZvLXJzc2knKS50ZXh0KGRldmljZUluZm8ucnNzaSlcclxuICAgICAgJCgnLmRldmljZS1pbmZvLXNlcnZpY2VzJykudGV4dChkZXZpY2VJbmZvLnNlcnZpY2VzKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tY2hhcnMnKS50ZXh0KGRldmljZUluZm8uY2hhcmFjdGVyaXN0aWNzKVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC8qKlxyXG4gICAqID095qaC6KaBPT1cclxuICAgKiDopoHntKDjgq/jg6rjg4Pjgq/jgZfjgZ/jgajjgY3jgatibGXmjqXntprop6PpmaRcclxuICAgKlxyXG4gICAqID095ZG844Gz5Ye644GX6Zai5pWwPT1cclxuICAgKmNvbkJsZUNvbm5lY3QoaWQsIHN1Y2Nlc3MzLCBmYWlsZWQzKVxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1ibGUtZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlkID0gJCgnI2RldmljZS1pbmZvJykuZGF0YSgnY29ubmVjdERhdGEnKS5pZFxyXG5cclxuICAgIC8v5o6l57aa5oiQ5Yqf5pmC44Gu6KGo56S655So6Zai5pWwXHJcbiAgICBmdW5jdGlvbiBmYWlsZWQyKGUsIGNhbGxlZCwgY29tbWVudCwgYWxlcnQpIHtcclxuICAgICAgLy9pZiBub3QgY2FsbGVkLCB1bmRlZmluZWRcclxuICAgICAgbGV0IGluc2VydCA9ICcnXHJcbiAgICAgIGlmIChjb21tZW50ID09PSB1bmRlZmluZWQgfHwgY29tbWVudCA9PT0gJy0nKVxyXG4gICAgICAgIGluc2VydCA9ICdlcnJvcjogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZFxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgaW5zZXJ0ID0gJ2Vycm9yOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkICsgJ1xcbmNvbW1lbnQ6ICcgKyBjb21tZW50XHJcbiAgICAgIGNvbnNvbGUubG9nKGluc2VydClcclxuICAgICAgaWYgKGFsZXJ0ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5hbGVydChpbnNlcnQpXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MyKGUsIGNhbGxlZCwgY29tbWVudCwgYWxlcnQpIHtcclxuICAgICAgLy9pZiBub3QgY2FsbGVkLCB1bmRlZmluZWRcclxuICAgICAgbGV0IGluc2VydCA9ICcnXHJcbiAgICAgIGlmIChjb21tZW50ID09PSB1bmRlZmluZWQgfHwgY29tbWVudCA9PT0gJy0nKVxyXG4gICAgICAgIGluc2VydCA9ICdzdWNjZXNz44Gg44KIOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBpbnNlcnQgPVxyXG4gICAgICAgICAgJ3N1Y2Nlc3PjgaDjgog6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWQgKyAnXFxuY29tbWVudDogJyArIGNvbW1lbnRcclxuICAgICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG5cclxuICAgICAgaWYgKGFsZXJ0ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5hbGVydChpbnNlcnQpXHJcblxyXG4gICAgICAvL+OCpOODmeODs+ODiOeZuueBq1xyXG4gICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdkZXZpY2UtZGlzY29ubmVjdGVkJylcclxuICAgICAgJCgnI2RldmljZS1pbmZvJykuc2xpZGVVcCgpXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25CbGVEaXNDb25uZWN0KGlkLCBzdWNjZXNzMiwgZmFpbGVkMilcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignZGV2aWNlLWRpc2Nvbm5lY3RlZCcsIGZ1bmN0aW9uKCkge30pXHJcbiAgfSlcclxuXHJcbiAgLyoqXHJcbiAqISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICpcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIVxyXG4hKioqIENvbnRyYW9sbGVyICoqKiFcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICohKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcblxyXG4gIC8qKlxyXG4gICAqID095qaC6KaBPT1cclxuICAgKiBibGUuc2NhbuOBp+WPluW+l+OBl+OBn+ODh+ODvOOCv+S4gOimp+OCkicjdWwtYmxlLXNjYW4tbGlzdCfjgavooajnpLpcclxuICAgKlxyXG4gICAqID095ZG844Gz5Ye644GX6Zai5pWwPT1cclxuICAgKmJsZS5zY2FuKFtdLHRpbWUsc3VjYyxmYWlsKVxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuICBmdW5jdGlvbiBjb25CbGVTY2FuRGV2aWNlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IGNvbkJsZVNjYW5EZXZpY2UoKScpXHJcbiAgICBibGUuc2NhbihcclxuICAgICAgW10sXHJcbiAgICAgIDUsXHJcbiAgICAgIGZ1bmN0aW9uKGRldmljZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGV2aWNlLm5hbWUpXHJcblxyXG4gICAgICAgIGlmIChkZXZpY2UubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvL+ODh+ODvOOCv+S9nOaIkFxyXG5cclxuICAgICAgICAgIGxldCBodG1sID1cclxuICAgICAgICAgICAgJzxiPicgK1xyXG4gICAgICAgICAgICBkZXZpY2UubmFtZSArXHJcbiAgICAgICAgICAgICc8L2I+JyArXHJcbiAgICAgICAgICAgICc8YnIvPicgK1xyXG4gICAgICAgICAgICAnUlNTSTogJyArXHJcbiAgICAgICAgICAgIGRldmljZS5yc3NpICtcclxuICAgICAgICAgICAgJyZuYnNwO3wmbmJzcDsnICtcclxuICAgICAgICAgICAgZGV2aWNlLmlkXHJcblxyXG4gICAgICAgICAgLy/mjL/lhaVcclxuICAgICAgICAgICQoJzxsaT4nICsgaHRtbCArICc8L2xpPicpXHJcbiAgICAgICAgICAgIC5hdHRyKHtcclxuICAgICAgICAgICAgICBjbGFzczogJ2J0IGxpc3QgYmxlLXNjYW4tbGlzdCcsXHJcbiAgICAgICAgICAgICAgJ2RhdGEtbmFtZSc6IGRldmljZS5uYW1lLFxyXG4gICAgICAgICAgICAgICdkYXRhLWlkJzogZGV2aWNlLmlkLFxyXG4gICAgICAgICAgICAgICdkYXRhLXJzc2knOiBkZXZpY2UucnNzaSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygnI3VsLWJsZS1zY2FuLWxpc3QnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGZhaWxlZChlLCAnY29uQmxlU2NhbkRldmljZSgpJylcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogPT3mpoLopoE9PVxyXG4gICAqIGJsZeaOpee2mijmiYvli5UpXHJcbiAgICpcclxuICAgKiA9PeWRvOOBs+WHuuOBl+mWouaVsD09XHJcbiAgICogc3VjY2VzczIoZSxmcm9tLGNvbW1lbnQsYWxlcnQpXHJcbiAgICogZmFpbGVkMihlLGZyb20sY29tbWVudCxhbGVydClcclxuICAgKlxyXG4gICAqXHJcbiAgICovXHJcblxyXG4gIGZ1bmN0aW9uIGNvbkJsZUNvbm5lY3QoaWQsIHN1Y2Nlc3MyLCBmYWlsZWQyKSB7XHJcbiAgICAvL2Z1bmN0aW9uIGNvbkJsZUNvbm5lY3QoaWQpIHtcclxuICAgIGJsZS5jb25uZWN0KFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHN1Y2Nlc3MyKEpTT04uc3RyaW5naWZ5KGUpLCAnY29uQmxlQ29ubmVjdChpZCknLCAn5o6l57aa5oiQ5YqfJywgdHJ1ZSlcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGZhaWxlZDIoSlNPTi5zdHJpbmdpZnkoZSksICdjb25CbGVDb25uZWN0KGlkKScsICfmjqXntprlpLHmlZcnLCB0cnVlKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICogYmxl5o6l57aaKOiHquWLlSlcclxuICAgKlxyXG4gICAqID095ZG844Gz5Ye644GX6Zai5pWwPT1cclxuICAgKiBzdWNjZXNzMihlLGZyb20sY29tbWVudCxhbGVydClcclxuICAgKiBmYWlsZWQyKGUsZnJvbSxjb21tZW50LGFsZXJ0KVxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgZnVuY3Rpb24gY29uQmxlQXV0b0Nvbm5lY3QoaWQsIHN1Y2Nlc3MyLCBmYWlsZWQyKSB7XHJcbiAgICAvL2Z1bmN0aW9uIGNvbkJsZUNvbm5lY3QoaWQpIHtcclxuICAgIGJsZS5hdXRvQ29ubmVjdChcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBzdWNjZXNzMihKU09OLnN0cmluZ2lmeShlKSwgJ2NvbkJsZUF1dG9Db25uZWN0KGlkKScsICfmjqXntprmiJDlip8nLCB0cnVlKVxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZmFpbGVkMihKU09OLnN0cmluZ2lmeShlKSwgJ2NvbkJsZUF1dG9Db25uZWN0KGlkKScsICfmjqXntprlpLHmlZcnLCB0cnVlKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb25CbGVEaXNDb25uZWN0KGlkLCBzdWNjZXNzMiwgZmFpbGVkMikge1xyXG4gICAgYmxlLmRpc2Nvbm5lY3QoXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgc3VjY2VzczIoXHJcbiAgICAgICAgICBlLFxyXG4gICAgICAgICAgJ2NvbkJsZURpc0Nvbm5lY3QoaWQsIHN1Y2Nlc3MyLCBmYWlsZWQyKScsXHJcbiAgICAgICAgICAnZGlzY29ubmVjdOaIkOWKnycsXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKVxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZmFpbGVkMihcclxuICAgICAgICAgIGUsXHJcbiAgICAgICAgICAnY29uQmxlRGlzQ29ubmVjdChpZCwgc3VjY2VzczIsIGZhaWxlZDIpJyxcclxuICAgICAgICAgICdkaXNjb25uZWN05aSx5pWXJyxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQkxFUmVhZCgpIHtcclxuICAgIC8vY29ucy5lbG1fdWwudWxfYmxlUmVhZExpc3QudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgbGV0IElEID0gJzI0OjBBOkM0OkM1OkY2OjIyJyAvLyAnNkM6MDU6MkI6RUE6NkI6NzgnXHJcbiAgICBsZXQgc2VydmljZUlEXzEgPSAnNGZhZmMyMDEtMWZiNS00NTllLThmY2MtYzVjOWMzMzE5MTRiJyAvL2NvbnMuVVVJRC5kZXZpY2VBLnNlcnZpY2Uuc2VydmljZTFcclxuICAgIGxldCBjaGFyYUlEXzEgPSAnYmViNTQ4M2UtMzZlMS00Njg4LWI3ZjUtZWEwNzM2MWIyNmE4JyAvL2NvbnMuVVVJRC5kZXZpY2VBLmNocmFjdGVyLmNoYXJhMVxyXG4gICAgLypcclxuICAgIGxldCBzZXJ2aWNlSURfMiA9IGNvbnMuVVVJRC5kZXZpY2VBLnNlcnZpY2Uuc2VydmljZTJcclxuICBsZXQgY2hhcmFJRF8yID0gY29ucy5VVUlELmRldmljZUEuY2hyYWN0ZXIuY2hhcmEyXHJcbiAgbGV0IHNlcnZpY2VJRF8zID0gY29ucy5VVUlELmRldmljZUEuc2VydmljZS5zZXJ2aWNlM1xyXG4gIGxldCBjaGFyYUlEXzMgPSBjb25zLlVVSUQuZGV2aWNlQS5jaHJhY3Rlci5jaGFyYTNcclxuICAqL1xyXG4gICAgbGV0IHN1Y2Nlc3MgPSB7XHJcbiAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihlLCBwcm9wKSB7XHJcbiAgICAgICAgbGV0IHVuaXQ4VmlldyA9IG5ldyBVaW50OEFycmF5KGUpXHJcbiAgICAgICAgbGV0IHVsX2VsZW1lbnQgPSAnJyAvL2NvbnMuZWxtX3VsLnVsX2JsZVJlYWRMaXN0XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzdWNjZXNzIHJlYWQ6IFwiICsgcHJvcCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWQ6ICcgKyBwcm9wICsgJyB8ICcgKyBKU09OLnN0cmluZ2lmeSh1bml0OFZpZXcpKVxyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBsZXQgaHRtbCA9ICc8Yj4nICsgcHJvcCArICc8L2I+JyArICc8YnIvPicgKyB1bml0OFZpZXdcclxuICAgICAgICBsaS5pbm5lckhUTUwgPSBodG1sXHJcbiAgICAgICAgdWxfZWxlbWVudC5hcHBlbmRDaGlsZChsaSlcclxuICAgICAgfSxcclxuICAgICAgXzE6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDEnXHJcbiAgICAgICAgc3VjY2Vzcy50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMjogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMidcclxuICAgICAgICBzdWNjZXNzLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8zOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAzJ1xyXG4gICAgICAgIHN1Y2Nlc3MudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIGxldCBmYWlsZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KCfmm7jjgY3ovrzjgb/jgqjjg6njg7wg44Oa44Oq44OV44Kn44Op44Or5YaN5o6l57aaJylcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN1YkJMRVJlYWQoSUQsIHNlcnZpY2VJRCwgY2hhcmFJRCwgc3VjY2Vzcykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3ViQkxFUmVhZCgpJylcclxuXHJcbiAgICAgIC8vbGV0IHMgPSBzdWNjZXNzKCk7XHJcbiAgICAgIGxldCBmYWlsZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHJlYWQnKVxyXG4gICAgICAgIHdpbmRvdy5hbGVydCgnZmFpbGVkIHJlYWQnKVxyXG4gICAgICB9XHJcbiAgICAgIGJsZS5yZWFkKElELCBzZXJ2aWNlSUQsIGNoYXJhSUQsIHN1Y2Nlc3MsIGZhaWxlZClcclxuICAgIH1cclxuICAgIHN1YkJMRVJlYWQoSUQsIHNlcnZpY2VJRF8xLCBjaGFyYUlEXzEsIHN1Y2Nlc3MuXzEsIGZhaWxlZClcclxuICAgIC8vc3ViQkxFUmVhZChJRCwgc2VydmljZUlEXzIsIGNoYXJhSURfMiwgc3VjY2Vzcy5fMiwgZmFpbGVkKVxyXG4gICAgLy8vc3ViQkxFUmVhZChJRCwgc2VydmljZUlEXzMsIGNoYXJhSURfMywgc3VjY2Vzcy5fMywgZmFpbGVkKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25CTEVXcml0ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkJMRVdyaXRlJylcclxuXHJcbiAgICBsZXQgSUQgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX0lELnZhbHVlXHJcbiAgICBsZXQgc2VydmljZUlEXzEgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3NVVUlEMS52YWx1ZVxyXG4gICAgbGV0IGNoYXJhSURfMSA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfY1VVSUQxLnZhbHVlXHJcbiAgICBsZXQgc2VydmljZUlEXzIgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3NVVUlEMi52YWx1ZVxyXG4gICAgbGV0IGNoYXJhSURfMiA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfY1VVSUQyLnZhbHVlXHJcbiAgICBsZXQgc2VydmljZUlEXzMgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3NVVUlEMy52YWx1ZVxyXG4gICAgbGV0IGNoYXJhSURfMyA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfY1VVSUQzLnZhbHVlXHJcbiAgICBsZXQgaW5wdXQgPSBbXVxyXG5cclxuICAgIGxldCBkYXRhXzEgPSBuZXcgVWludDhBcnJheSgxKVxyXG4gICAgaW5wdXRbMF0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3dyaXRlMS52YWx1ZVxyXG4gICAgZGF0YV8xWzBdID0gTnVtYmVyKGlucHV0WzBdKVxyXG4gICAgY29uc29sZS5sb2coaW5wdXRbMF0pXHJcbiAgICBjb25zb2xlLmxvZyhOdW1iZXIoaW5wdXRbMF0pKVxyXG5cclxuICAgIGxldCBkYXRhXzIgPSBuZXcgVWludDhBcnJheSgzKVxyXG4gICAgaW5wdXRbMV0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3dyaXRlMjEudmFsdWVcclxuICAgIGlucHV0WzJdID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV93cml0ZTIyLnZhbHVlXHJcbiAgICBpbnB1dFszXSA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfd3JpdGUyMy52YWx1ZVxyXG4gICAgZGF0YV8yWzBdID0gTnVtYmVyKGlucHV0WzFdKVxyXG4gICAgZGF0YV8yWzFdID0gTnVtYmVyKGlucHV0WzJdKVxyXG4gICAgZGF0YV8yWzJdID0gTnVtYmVyKGlucHV0WzNdKVxyXG4gICAgY29uc29sZS5sb2coaW5wdXRbMV0pXHJcblxyXG4gICAgbGV0IGRhdGFfMyA9IG5ldyBVaW50MzJBcnJheSgxKVxyXG4gICAgaW5wdXRbNF0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3dyaXRlMy52YWx1ZVxyXG4gICAgZGF0YV8zWzBdID0gTnVtYmVyKGlucHV0WzRdKVxyXG4gICAgY29uc29sZS5sb2coaW5wdXRbNF0pXHJcblxyXG4gICAgbGV0IHN1Y2Nlc3MgPSB7XHJcbiAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihlLCBwcm9wKSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KCd3cml0ZTogJyArIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8xOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAxJ1xyXG5cclxuICAgICAgICBzdWNjZXNzLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8yOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAyJ1xyXG4gICAgICAgIHN1Y2Nlc3MudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzM6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDMnXHJcbiAgICAgICAgc3VjY2Vzcy50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICAgbGV0IGZhaWxlZCA9IHtcclxuICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKGUsIHByb3ApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcgKyBlICsgJyB8ICcgKyBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMSdcclxuICAgICAgICBmYWlsZWQudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDInXHJcbiAgICAgICAgZmFpbGVkLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8zOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAzJ1xyXG4gICAgICAgIGZhaWxlZC50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICAgYmxlLndyaXRlKElELCBzZXJ2aWNlSURfMSwgY2hhcmFJRF8xLCBkYXRhXzEuYnVmZmVyLCBzdWNjZXNzLl8xLCBmYWlsZWQuXzEpXHJcbiAgICBibGUud3JpdGUoSUQsIHNlcnZpY2VJRF8yLCBjaGFyYUlEXzIsIGRhdGFfMi5idWZmZXIsIHN1Y2Nlc3MuXzIsIGZhaWxlZC5fMilcclxuICAgIGJsZS53cml0ZShJRCwgc2VydmljZUlEXzMsIGNoYXJhSURfMywgZGF0YV8zLmJ1ZmZlciwgc3VjY2Vzcy5fMywgZmFpbGVkLl8zKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25CTEVOb3RpZnkoKSB7XHJcbiAgICBsZXQgSUQgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZU5vdGlmeS5pbnB1dF9ibGVOb3RpZnlfSUQudmFsdWVcclxuICAgIGxldCBzZXJ2aWNlSUQgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZU5vdGlmeS5pbnB1dF9ibGVOb3RpZnlfc1VVSUQudmFsdWVcclxuICAgIGxldCBjaGFyYUlEID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVOb3RpZnkuaW5wdXRfYmxlTm90aWZ5X2NVVUlELnZhbHVlXHJcbiAgICBsZXQgc3VjY2VzcyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheShlKVxyXG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlOiAnICsgZGF0YVswXSlcclxuICAgICAgd2luZG93LmFsZXJ0KCdjaGFuZ2U6ICcgKyBkYXRhWzBdKVxyXG4gICAgfVxyXG4gICAgbGV0IGZhaWxlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ2Vycm9yJylcclxuICAgIH1cclxuICAgIHdpbmRvdy5hbGVydCgnQkxFIE5vdGlmaXkgU3RhcnQnKVxyXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IE5vdGlmeScpXHJcbiAgICBibGUuc3RhcnROb3RpZmljYXRpb24oSUQsIHNlcnZpY2VJRCwgY2hhcmFJRCwgc3VjY2VzcywgZmFpbGVkKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQkxFXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IElEIOaOpee2muOBmeOCi+ODh+ODkOOCpOOCuUlEXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VJRCDmjqXntprjgZnjgotzZXJ2aWNlVVVJRFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYUlEIOaOpee2muOBmeOCi2NocmFjdGlzdGljVVVJRFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3Mg5oiQ5Yqf5pmC44Gu44Kz44O844Or44OQ44OD44Kv6Zai5pWw44CB5byV5pWw44GvSURcclxuICAgKi9cclxuXHJcbiAgZnVuY3Rpb24gc3ViQkxFV3JpdGUoSUQsIHNlcnZpY2VJRCwgY2hhcmFJRCwgc3VjY2VzcywgZmFpbGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25CTEVXcml0ZScpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdWJCTEVOb3RpZnkoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25CTEVOb3RpZnknKVxyXG4gIH1cclxufSlcclxuIiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnXG4vL2ltcG9ydCAnLi9qcy9zdWIuanMnXG5cbi8vd2VicGFja+OBp2h0bWzjgavntYTjgb/ovrzjgb7jgozjgZ/jgajjgY3jgavooajnpLrjgZXjgozjgotcbmNvbnNvbGUuaW5mbygnSFRNTOe1hOi+vOOBv+WujOS6hicpXG5cbnZhciBhcHAgPSB7XG4gIC8vIEFwcGxpY2F0aW9uIENvbnN0cnVjdG9yXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydCBpbml0aWFsaXplKCknKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xpc3RlbiBET01Db250ZW50TG9hZGVkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2xpc3RlbiBsb2FkJylcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdkZXZpY2VyZWFkeScsXG4gICAgICB0aGlzLm9uRGV2aWNlUmVhZHkuYmluZCh0aGlzKSxcbiAgICAgIGZhbHNlXG4gICAgKVxuICB9LFxuXG4gIC8vIGRldmljZXJlYWR5IEV2ZW50IEhhbmRsZXJcbiAgLy9cbiAgLy8gQmluZCBhbnkgY29yZG92YSBldmVudHMgaGVyZS4gQ29tbW9uIGV2ZW50cyBhcmU6XG4gIC8vICdwYXVzZScsICdyZXN1bWUnLCBldGMuXG4gIG9uRGV2aWNlUmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydCBvbkR2aWNlUmVhZHkoKSAnKVxuICAgIHRoaXMucmVjZWl2ZWRFdmVudCgnZGV2aWNlcmVhZHknKVxuICB9LFxuXG4gIC8vIFVwZGF0ZSBET00gb24gYSBSZWNlaXZlZCBFdmVudFxuICByZWNlaXZlZEV2ZW50OiBmdW5jdGlvbihpZCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydCByZWNlaXZlZEV2ZW50KGlkKTogJyArIGlkKVxuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgdmFyIGxpc3RlbmluZ0VsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0ZW5pbmcnKVxuICAgIHZhciByZWNlaXZlZEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNlaXZlZCcpXG5cbiAgICBsaXN0ZW5pbmdFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG4gICAgcmVjZWl2ZWRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpibG9jazsnKVxuXG4gICAgY29uc29sZS5sb2coJ2ZpbiBSZWNlaXZlZCBFdmVudDogJyArIGlkKVxuICB9LFxufVxuYXBwLmluaXRpYWxpemUoKVxuIiwid2luZG93LmFsZXJ0KCdIZWxsbyBzdWIuanMhJylcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==