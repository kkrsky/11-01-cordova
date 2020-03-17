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
exports.push([module.i, "#test {\n  border: solid 5px #000000;\n}\n\nul {\n  list-style: none;\n  border-bottom: 1px solid #d3d3d3;\n  text-align: left;\n}\n\nli {\n  margin-left: -40px;\n  padding: 5px;\n  padding-top: 10px;\n  min-height: 50px;\n  border-top: 1px solid #d3d3d3;\n  font-size: 0.9em;\n}\n\n.bt {\n  cursor: pointer;\n}\n\n.device-info {\n  text-align: center;\n}", "",{"version":3,"sources":["C:/shizuoka_univ/myApp/e-bike/11th/01-cordova-only/src/css/index.css","index.css"],"names":[],"mappings":"AAAA;EACE,yBAAA;ACCF;;ADEA;EACE,gBAAA;EACA,gCAAA;EACA,gBAAA;ACCF;;ADEA;EACE,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,6BAAA;EACA,gBAAA;ACCF;;ADEA;EACE,eAAA;ACCF;;ADEA;EACE,kBAAA;ACCF","file":"index.css","sourcesContent":["#test {\r\n  border: solid 5px #000000;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  border-bottom: 1px solid #d3d3d3;\r\n  text-align: left;\r\n}\r\n\r\nli {\r\n  margin-left: -40px;\r\n  padding: 5px;\r\n  padding-top: 10px;\r\n  min-height: 50px;\r\n  border-top: 1px solid #d3d3d3;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.bt {\r\n  cursor: pointer;\r\n}\r\n\r\n.device-info {\r\n  text-align: center;\r\n}\r\n","#test {\n  border: solid 5px #000000;\n}\n\nul {\n  list-style: none;\n  border-bottom: 1px solid #d3d3d3;\n  text-align: left;\n}\n\nli {\n  margin-left: -40px;\n  padding: 5px;\n  padding-top: 10px;\n  min-height: 50px;\n  border-top: 1px solid #d3d3d3;\n  font-size: 0.9em;\n}\n\n.bt {\n  cursor: pointer;\n}\n\n.device-info {\n  text-align: center;\n}"]}]);
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
    console.log('*** storage ready ***\n', window.NativeStorage)
  })

  $(document).on('click', '#btn-test-storage-allload', function() {
    console.log('*** onallLoad ***')

    NativeStorage.keys(
      obj => console.log('success', obj),
      err => console.log('error', err.code)
    )
  })
  $(document).on('click', '#btn-test-storage-load', function() {
    console.log('*** onLoad ***')

    NativeStorage.getItem(
      KEY_DEVICE_ID,
      obj => console.log('success', obj),
      err => console.log('error', err.code)
    )

    NativeStorage.getItem(
      'weblioObjFlg',
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

  $(document).on('click', '#btn-test-storage-save', function() {
    console.log('*** onSave ***')

    NativeStorage.setItem(
      KEY_DEVICE_ID,
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

  $(document).on('click', '#btn-test-storage-save2', function() {
    console.log('*** onSave2 ***')
    const numbers2 = [00, 1, 30, 400, 500] // 配列
    NativeStorage.setItem(
      KEY_NUMBERS,
      numbers2,
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
  $(document).on('click', '#btn-test-storage-clear', function() {
    console.log('*** onclear ***')

    NativeStorage.clear(
      obj => console.log('success', obj),
      err => console.log('error', err.code)
    )
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
      console.log('button clicked')
      //window.alert('else')
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
!*** 変数 ***!
!*****************************
 * 
 * 
 * 
 * 
 * 
 *!*****************************
 */

  const KEY_DEVICE_ID = 'nsDeviceId'
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
      // //device-info-savedを発火
      // $(document).trigger('device-info-saved')

      // let deviceInfo = e
      // console.log('deviceInfo', deviceInfo)
      // $('.device-info-name').text(deviceInfo.name)
      // $('.device-info-id').text(deviceInfo.id)
      // $('.device-info-rssi').text(deviceInfo.rssi)
      // $('.device-info-services').text(deviceInfo.services)
      // $('.device-info-chars').text(deviceInfo.characteristics)

      console.log('KEY_DEVICE_ID'), KEY_DEVICE_ID
      NativeStorage.setItem(
        KEY_DEVICE_ID,
        e.id,
        function(e) {
          console.log('success save: ', e)
        },
        function(e) {
          console.log('error save: ', e)
        }
      )

      console.log('e', e)
      $('.device-info-name').text(e.name)
      $('.device-info-id').text(e.id)
      $('.device-info-rssi').text(e.rssi)
      $('.device-info-services').text(e.services)
      $('.device-info-chars').text(e.characteristics)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/OTQ3OSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmx1ZXRvb3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3ViLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1REFBdUQ7QUFDdkQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3B4QkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQseURBQXlEOztBQUV6RDtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjdGVzdCB7XFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwMDAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDNkMztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5idCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXZpY2UtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L3NoaXp1b2thX3VuaXYvbXlBcHAvZS1iaWtlLzExdGgvMDEtY29yZG92YS1vbmx5L3NyYy9jc3MvaW5kZXguY3NzXCIsXCJpbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRlwiLFwiZmlsZVwiOlwiaW5kZXguY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0ZXN0IHtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbiAgZm9udC1zaXplOiAwLjllbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldmljZS1pbmZvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsXCIjdGVzdCB7XFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwMDAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDNkMztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5idCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXZpY2UtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Iiwid2luZG93LmFsZXJ0KCdsb2FkIGJsdWV0dG90aC5qczInKVxyXG5sZXQgY29ucyA9IHtcclxuICBGSUxFX0RJUl9VUkw6ICdjb3Jkb3YnLFxyXG4gIGVsbV91bDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJyksXHJcbiAgVVVJRDoge1xyXG4gICAgYWxsOiB7XHJcbiAgICAgIG5hbWU6ICfoh6rli5XmjL/lhaUnLFxyXG4gICAgICBvYmo6ICfoh6rli5XmjL/lhaUnLFxyXG4gICAgfSxcclxuICAgIGRldmljZUE6IHtcclxuICAgICAgSUQ6ICcyNDowQTpDNDpDNTpGNjoyMicsIC8vJzZDOjA1OjJCOkVBOjZCOjc4JyxcclxuICAgICAgc2VydmljZToge1xyXG4gICAgICAgIHNlcnZpY2UxOiAnNGZhZmMyMDEtMWZiNS00NTllLThmY2MtYzVjOWMzMzE5MTRiJyxcclxuICAgICAgICBzZXJ2aWNlMjogJzAwMDBiYmIwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgc2VydmljZTM6ICcwMDAwY2NjMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICB9LFxyXG4gICAgICBjaHJhY3Rlcjoge1xyXG4gICAgICAgIGNoYXJhMTogJ2JlYjU0ODNlLTM2ZTEtNDY4OC1iN2Y1LWVhMDczNjFiMjZhOCcsXHJcbiAgICAgICAgY2hhcmEyOiAnMDAwMGJiYjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBjaGFyYTM6ICcwMDAwY2NjMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRldmljZUI6IHtcclxuICAgICAgSUQ6ICc2QzowNToyQjpFQTo2Qjo3OCcsXHJcbiAgICAgIHNlcnZpY2U6IHtcclxuICAgICAgICBzZXJ2aWNlMTogJzAwMDBmZmYwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgc2VydmljZTI6ICcwMDAwYmJiMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIHNlcnZpY2UzOiAnMDAwMGNjYzAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgfSxcclxuICAgICAgY2hyYWN0ZXI6IHtcclxuICAgICAgICBjaGFyYTE6ICcwMDAwZmZmMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIGNoYXJhMjogJzAwMDBiYmIxLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgY2hhcmEzOiAnMDAwMGNjYzEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZXZpY2VDOiB7XHJcbiAgICAgIElEOiAnNkM6MDU6MkI6RUE6NkI6NzgnLFxyXG4gICAgICBzZXJ2aWNlOiB7XHJcbiAgICAgICAgc2VydmljZTE6ICcwMDAwZmZmMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIHNlcnZpY2UyOiAnMDAwMGJiYjAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBzZXJ2aWNlMzogJzAwMDBjY2MwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNocmFjdGVyOiB7XHJcbiAgICAgICAgY2hhcmExOiAnMDAwMGZmZjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBjaGFyYTI6ICcwMDAwYmJiMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIGNoYXJhMzogJzAwMDBjY2MxLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIC8qKlxyXG4gKiAhKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqXHJcbiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiFcclxuISoqKiB0ZXN0IGZ1bmNpb24gKioqIVxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKi9cclxuXHJcbiAgLy8ga2V5XHJcbiAgY29uc3QgS0VZX05VTUJFUlMgPSAnbnNOdW1zJ1xyXG4gIGNvbnN0IEtFWV9SRUNPUkRTID0gJ25zUmVjb3JkcydcclxuXHJcbiAgLy8gdmFsdWVcclxuICBjb25zdCBudW1iZXJzID0gWzEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwXSAvLyDphY3liJdcclxuICBjb25zdCByZWNvcmRzID0ge1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OIXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIHllYXI6IDIwMTksXHJcbiAgICAgIG1vbnRoOiAxMSxcclxuICAgICAgZGF5OiAxNixcclxuICAgICAgd2VlazogMSxcclxuICAgIH0sXHJcbiAgICB0aW1lOiBbXHJcbiAgICAgIHsgaG91cjogNywgbWluOiAxMCB9LFxyXG4gICAgICB7IGhvdXI6IDksIG1pbjogMjAgfSxcclxuICAgICAgeyBob3VyOiAxMSwgbWluOiAzMCB9LFxyXG4gICAgICB7IGhvdXI6IDE1LCBtaW46IDQwIH0sXHJcbiAgICAgIHsgaG91cjogMjAsIG1pbjogNTAgfSxcclxuICAgIF0sXHJcbiAgfVxyXG5cclxuICAkKGRvY3VtZW50KS5vbignZGV2aWNlcmVhZHknLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIGRldmljZXJlYWR544Kk44OZ44Oz44OIXHJcbiAgICBjb25zb2xlLmxvZygnKioqIHN0b3JhZ2UgcmVhZHkgKioqXFxuJywgd2luZG93Lk5hdGl2ZVN0b3JhZ2UpXHJcbiAgfSlcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG4tdGVzdC1zdG9yYWdlLWFsbGxvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCcqKiogb25hbGxMb2FkICoqKicpXHJcblxyXG4gICAgTmF0aXZlU3RvcmFnZS5rZXlzKFxyXG4gICAgICBvYmogPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBvYmopLFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLmNvZGUpXHJcbiAgICApXHJcbiAgfSlcclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bi10ZXN0LXN0b3JhZ2UtbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJyoqKiBvbkxvYWQgKioqJylcclxuXHJcbiAgICBOYXRpdmVTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgIEtFWV9ERVZJQ0VfSUQsXHJcbiAgICAgIG9iaiA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycsIG9iaiksXHJcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIuY29kZSlcclxuICAgIClcclxuXHJcbiAgICBOYXRpdmVTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgICd3ZWJsaW9PYmpGbGcnLFxyXG4gICAgICBvYmogPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBvYmopLFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLmNvZGUpXHJcbiAgICApXHJcbiAgICBjb25zb2xlLmxvZygnY2hlY2sxJylcclxuXHJcbiAgICBOYXRpdmVTdG9yYWdlLmdldEl0ZW0oXHJcbiAgICAgIEtFWV9SRUNPUkRTLFxyXG4gICAgICBvYmogPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBvYmopLFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLmNvZGUpXHJcbiAgICApXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2NoZWNrMicpXHJcbiAgfSlcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG4tdGVzdC1zdG9yYWdlLXNhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCcqKiogb25TYXZlICoqKicpXHJcblxyXG4gICAgTmF0aXZlU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBLRVlfREVWSUNFX0lELFxyXG4gICAgICBudW1iZXJzLFxyXG4gICAgICBvYmogPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBvYmopLFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLmNvZGUpXHJcbiAgICApXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2NoZWNrMScpXHJcblxyXG4gICAgTmF0aXZlU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBLRVlfUkVDT1JEUyxcclxuICAgICAgcmVjb3JkcyxcclxuICAgICAgb2JqID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJywgb2JqKSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVyci5jb2RlKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjaGVjazInKVxyXG4gIH0pXHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjYnRuLXRlc3Qtc3RvcmFnZS1zYXZlMicsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJyoqKiBvblNhdmUyICoqKicpXHJcbiAgICBjb25zdCBudW1iZXJzMiA9IFswMCwgMSwgMzAsIDQwMCwgNTAwXSAvLyDphY3liJdcclxuICAgIE5hdGl2ZVN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgS0VZX05VTUJFUlMsXHJcbiAgICAgIG51bWJlcnMyLFxyXG4gICAgICBvYmogPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBvYmopLFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLmNvZGUpXHJcbiAgICApXHJcblxyXG4gICAgY29uc29sZS5sb2coJ2NoZWNrMScpXHJcblxyXG4gICAgTmF0aXZlU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBLRVlfUkVDT1JEUyxcclxuICAgICAgcmVjb3JkcyxcclxuICAgICAgb2JqID0+IGNvbnNvbGUubG9nKCdzdWNjZXNzJywgb2JqKSxcclxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVyci5jb2RlKVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjaGVjazInKVxyXG4gIH0pXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG4tdGVzdC1zdG9yYWdlLWNsZWFyJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnKioqIG9uY2xlYXIgKioqJylcclxuXHJcbiAgICBOYXRpdmVTdG9yYWdlLmNsZWFyKFxyXG4gICAgICBvYmogPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCBvYmopLFxyXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLmNvZGUpXHJcbiAgICApXHJcbiAgfSlcclxuICBmdW5jdGlvbiB0ZXN0X2lub3V0KCkge1xyXG4gICAgbGV0IGRhdGEgPSB7IGE6IFsxLCA0LCA2LCA3LCAzXSwgYjogWyd0ZXMnLCAndGVzMiddIH1cclxuICAgIGxldCBrZXkgPSAnYSdcclxuICAgICQoJy50ZXN0X2lub3V0JykuZGF0YShrZXksIGRhdGEpXHJcblxyXG4gICAgdmFyIHRlcyA9ICQoJy50ZXN0X2lub3V0JykuZGF0YShrZXkpXHJcbiAgICBjb25zb2xlLmxvZyh0ZXMsIHR5cGVvZiB0ZXMpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRlc3RfaW4oKSB7XHJcbiAgICBsZXQgZGF0YSA9ICd0ZXMwMSdcclxuICAgIGxldCBrZXkgPSAnYSdcclxuICAgICR0ZW1wX2luKGRhdGEsIGtleSlcclxuICB9XHJcbiAgZnVuY3Rpb24gdGVzdF9vdXQoKSB7XHJcbiAgICBsZXQga2V5ID0gJ2EnXHJcbiAgICAkdGVtcF9vdXQoa2V5KVxyXG4gICAgdmFyIHRlcyA9ICRnZXRfb3V0KClcclxuICAgIGNvbnNvbGUubG9nKHRlcylcclxuICB9XHJcblxyXG4gICQoJ2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3Rlc3RfaW5vdXQnKSkge1xyXG4gICAgICB0ZXN0X2lub3V0KClcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygndGVzdF9pbicpKSB7XHJcbiAgICAgIHRlc3RfaW4oKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0ZXN0X291dCcpKSB7XHJcbiAgICAgIHRlc3Rfb3V0KClcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygnLmJ0bi1ibGUtc2NhbicpKSB7XHJcbiAgICAgIC8vdGVzdF9vdXQoKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0ZXN0X291dCcpKSB7XHJcbiAgICAgIHRlc3Rfb3V0KClcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygndGVzdF9vdXQnKSkge1xyXG4gICAgICB0ZXN0X291dCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnYnV0dG9uIGNsaWNrZWQnKVxyXG4gICAgICAvL3dpbmRvdy5hbGVydCgnZWxzZScpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy50ZXN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmRhdGEoJ2tleScsICd2YWx1ZScpXHJcbiAgICB3aW5kb3cuYWxlcnQoJCh0aGlzKS5kYXRhKCdrZXknKSlcclxuXHJcbiAgICBsZXQgdGVzdERhdGFUYWcgPSAkKHRoaXMpLmRhdGEoJ25hbWUnKVxyXG4gICAgd2luZG93LmFsZXJ0KHRlc3REYXRhVGFnKVxyXG4gIH0pXHJcblxyXG4gIGxldCBodG1sID0gJ3Rlc3QnXHJcbiAgJCgnPGxpPicgKyBodG1sICsgJzwvbGk+JylcclxuICAgIC5hdHRyKHtcclxuICAgICAgY2xhc3M6ICdidCB0ZXN0IGxpc3QgYmxlLXNjYW4tbGlzdCcsXHJcbiAgICAgICdkYXRhLW5hbWUnOiAndGVzdCcsXHJcbiAgICB9KVxyXG4gICAgLmFwcGVuZFRvKCcjdWwtdGVzdCcpXHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudGVzdF9zY2MnLCBmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIHNjYyhlKSB7XHJcbiAgICAgIHN1Y2Nlc3MoZSwgJ3Rlc3Rfc2NjJywgJ3RoaXMgaXMgY29tbWVudCcsIHRydWUpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWwoZSkge1xyXG4gICAgICBmYWlsZWQoZSwgJ3Rlc3Rfc2NjJywgJ3RoaXMgaXMgY29tbWVudCcsIHRydWUpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NjYycpKSB7XHJcbiAgICAgIHNjYygndGhpcyBpcyBzdWNjZXNzJylcclxuICAgICAgJCh0aGlzKS5mYWRlT3V0KClcclxuICAgICAgJCgnLmZhbCcpLnNob3coKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdmYWwnKSkge1xyXG4gICAgICBmYWwoJ3RoaXMgaXMgZmFpbGVkJylcclxuICAgICAgJCh0aGlzKS5mYWRlT3V0KClcclxuICAgICAgJCgnLnNjYycpLmZhZGVJbigpXHJcbiAgICB9XHJcbiAgICAvLyQodGhpcykudG9nZ2xlKClcclxuICB9KVxyXG5cclxuICAvKipcclxuICogISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKlxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohXHJcbiEqKiog5aSJ5pWwICoqKiFcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICohKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcblxyXG4gIGNvbnN0IEtFWV9ERVZJQ0VfSUQgPSAnbnNEZXZpY2VJZCdcclxuICAvKipcclxuICogISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKlxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohXHJcbiEqKiog5rGO6Zai5pWwICoqKiFcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICohKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcblxyXG4gIGZ1bmN0aW9uIHN1Y2Nlc3MoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgLy9pZiBub3QgY2FsbGVkLCB1bmRlZmluZWRcclxuICAgIGxldCBpbnNlcnQgPSAnJ1xyXG4gICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpIHtcclxuICAgICAgaW5zZXJ0ID0gJ3N1Y2Nlc3M6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluc2VydCA9ICdzdWNjZXNzOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkICsgJ1xcbmNvbW1lbnQ6ICcgKyBjb21tZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG4gICAgaWYgKGFsZXJ0ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5hbGVydChpbnNlcnQpXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGZhaWxlZChlLCBjYWxsZWQsIGNvbW1lbnQsIGFsZXJ0KSB7XHJcbiAgICAvL2lmIG5vdCBjYWxsZWQsIHVuZGVmaW5lZFxyXG4gICAgbGV0IGluc2VydCA9ICcnXHJcbiAgICBpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbW1lbnQgPT09ICctJylcclxuICAgICAgaW5zZXJ0ID0gJ2Vycm9yOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkXHJcbiAgICBlbHNlIGluc2VydCA9ICdlcnJvcjogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG4gICAgaWYgKGFsZXJ0ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5hbGVydChpbnNlcnQpXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKlxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohXHJcbiEqKiogVmlldyAqKiohXHJcbiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqL1xyXG5cclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICogYmxlLnNjYW7jgaflj5blvpfjgZfjgZ/jg4fjg7zjgr/kuIDopqfjgpInI3VsLWJsZS1zY2FuLWxpc3Qn44Gr6KGo56S6XHJcbiAgICpcclxuICAgKiA9PeWRvOOBs+WHuuOBl+mWouaVsD09XHJcbiAgICpjb25CbGVTY2FuRGV2aWNlKClcclxuICAgKlxyXG4gICAqXHJcbiAgICovXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tYmxlLXNjYW4nLCBmdW5jdGlvbigpIHtcclxuICAgIC8qXHJcbiAgLS0jYmxlLXNjYW4td3dyYXBwZXIgXHJcbiAgI3VsLWJsZS1zY2FuLWxpc3RcclxuICAuYnRuLWJsZS1zY2FuXHJcbiAgKi9cclxuICAgIC8v5Yid5pyf5YyWXHJcbiAgICAkKCcjdWwtYmxlLXNjYW4tbGlzdCcpLnRleHQoJycpXHJcbiAgICBjb25CbGVTY2FuRGV2aWNlKClcclxuICB9KVxyXG5cclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICogYmxlLnNjYW7jgaflj5blvpfjgZfjgZ/ku7vmhI/jga7jg4fjg7zjgr/jgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgajjgY3jgatibGXmjqXntppcclxuICAgKlxyXG4gICAqID095ZG844Gz5Ye644GX6Zai5pWwPT1cclxuICAgKmNvbkJsZUNvbm5lY3QoaWQsIHN1Y2Nlc3MzLCBmYWlsZWQzKVxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJsZS1zY2FuLWxpc3QnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnaWQnKVxyXG4gICAgLy9jb25zb2xlLmxvZygnaWQnLCBpZClcclxuXHJcbiAgICAvL+aOpee2muaIkOWKn+aZguOBruihqOekuueUqOmWouaVsFxyXG4gICAgZnVuY3Rpb24gc3VjY2VzczIoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgICAvL2lmIG5vdCBjYWxsZWQsIHVuZGVmaW5lZFxyXG4gICAgICBsZXQgaW5zZXJ0ID0gJydcclxuICAgICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpXHJcbiAgICAgICAgaW5zZXJ0ID0gJ3N1Y2Nlc3PjgaDjgog6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWRcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGluc2VydCA9XHJcbiAgICAgICAgICAnc3VjY2Vzc+OBoOOCiDogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgICBjb25zb2xlLmxvZyhpbnNlcnQpXHJcbiAgICAgIGlmIChhbGVydCAhPT0gdW5kZWZpbmVkKSB3aW5kb3cuYWxlcnQoaW5zZXJ0KVxyXG5cclxuICAgICAgLy8jZGV2aWNlLWluZm/jgavmg4XloLHjgpJzYXZlXHJcbiAgICAgICQoJyNkZXZpY2UtaW5mbycpLmRhdGEoJ2Nvbm5lY3REYXRhJywgZSlcclxuICAgICAgLy8gLy9kZXZpY2UtaW5mby1zYXZlZOOCkueZuueBq1xyXG4gICAgICAvLyAkKGRvY3VtZW50KS50cmlnZ2VyKCdkZXZpY2UtaW5mby1zYXZlZCcpXHJcblxyXG4gICAgICAvLyBsZXQgZGV2aWNlSW5mbyA9IGVcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2RldmljZUluZm8nLCBkZXZpY2VJbmZvKVxyXG4gICAgICAvLyAkKCcuZGV2aWNlLWluZm8tbmFtZScpLnRleHQoZGV2aWNlSW5mby5uYW1lKVxyXG4gICAgICAvLyAkKCcuZGV2aWNlLWluZm8taWQnKS50ZXh0KGRldmljZUluZm8uaWQpXHJcbiAgICAgIC8vICQoJy5kZXZpY2UtaW5mby1yc3NpJykudGV4dChkZXZpY2VJbmZvLnJzc2kpXHJcbiAgICAgIC8vICQoJy5kZXZpY2UtaW5mby1zZXJ2aWNlcycpLnRleHQoZGV2aWNlSW5mby5zZXJ2aWNlcylcclxuICAgICAgLy8gJCgnLmRldmljZS1pbmZvLWNoYXJzJykudGV4dChkZXZpY2VJbmZvLmNoYXJhY3RlcmlzdGljcylcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdLRVlfREVWSUNFX0lEJyksIEtFWV9ERVZJQ0VfSURcclxuICAgICAgTmF0aXZlU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgIEtFWV9ERVZJQ0VfSUQsXHJcbiAgICAgICAgZS5pZCxcclxuICAgICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBzYXZlOiAnLCBlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHNhdmU6ICcsIGUpXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnZScsIGUpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1uYW1lJykudGV4dChlLm5hbWUpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1pZCcpLnRleHQoZS5pZClcclxuICAgICAgJCgnLmRldmljZS1pbmZvLXJzc2knKS50ZXh0KGUucnNzaSlcclxuICAgICAgJCgnLmRldmljZS1pbmZvLXNlcnZpY2VzJykudGV4dChlLnNlcnZpY2VzKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tY2hhcnMnKS50ZXh0KGUuY2hhcmFjdGVyaXN0aWNzKVxyXG4gICAgICAvLyNkZXZpY2UtaW5mb+OCkuihqOekulxyXG4gICAgICAkKCcjZGV2aWNlLWluZm8nKS5zbGlkZURvd24oKVxyXG5cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmFpbGVkMihlLCBjYWxsZWQsIGNvbW1lbnQsIGFsZXJ0KSB7XHJcbiAgICAgIC8vaWYgbm90IGNhbGxlZCwgdW5kZWZpbmVkXHJcbiAgICAgIGxldCBpbnNlcnQgPSAnJ1xyXG4gICAgICBpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbW1lbnQgPT09ICctJylcclxuICAgICAgICBpbnNlcnQgPSAnZXJyb3I6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWRcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGluc2VydCA9ICdlcnJvcjogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgICBjb25zb2xlLmxvZyhpbnNlcnQpXHJcbiAgICAgIGlmIChhbGVydCAhPT0gdW5kZWZpbmVkKSB3aW5kb3cuYWxlcnQoaW5zZXJ0KVxyXG5cclxuICAgICAgLy8jZGV2aWNlLWluZm/jga7mg4XloLHjgpLjg6rjgrvjg4Pjg4hcclxuICAgICAgJCgnI2RldmljZS1pbmZvJykuc2xpZGVVcCgpXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICAvL2JsZS5jb25uZWN044GnYmxl44Go5o6l57aa44CBI2RldmljZS1pbmZv44Gr44OH44O844K/44KS44Kt44Oj44OD44K344OlXHJcbiAgICAvL2NvbkJsZUNvbm5lY3QoaWQsIHN1Y2Nlc3MzLCBmYWlsZWQzKVxyXG4gICAgY29uQmxlQXV0b0Nvbm5lY3QoaWQsIHN1Y2Nlc3MyLCBmYWlsZWQyKVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdkZXZpY2UtaW5mby1zYXZlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgZGV2aWNlSW5mbyA9ICQoJyNkZXZpY2UtaW5mbycpLmRhdGEoJ2Nvbm5lY3REYXRhJylcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZXZpY2VJbmZvJywgZGV2aWNlSW5mbylcclxuICAgICAgJCgnLmRldmljZS1pbmZvLW5hbWUnKS50ZXh0KGRldmljZUluZm8ubmFtZSlcclxuICAgICAgJCgnLmRldmljZS1pbmZvLWlkJykudGV4dChkZXZpY2VJbmZvLmlkKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tcnNzaScpLnRleHQoZGV2aWNlSW5mby5yc3NpKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tc2VydmljZXMnKS50ZXh0KGRldmljZUluZm8uc2VydmljZXMpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1jaGFycycpLnRleHQoZGV2aWNlSW5mby5jaGFyYWN0ZXJpc3RpY3MpXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgLyoqXHJcbiAgICogPT3mpoLopoE9PVxyXG4gICAqIOimgee0oOOCr+ODquODg+OCr+OBl+OBn+OBqOOBjeOBq2JsZeaOpee2muino+mZpFxyXG4gICAqXHJcbiAgICogPT3lkbzjgbPlh7rjgZfplqLmlbA9PVxyXG4gICAqY29uQmxlQ29ubmVjdChpZCwgc3VjY2VzczMsIGZhaWxlZDMpXHJcbiAgICpcclxuICAgKlxyXG4gICAqL1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWJsZS1kaXNjb25uZWN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWQgPSAkKCcjZGV2aWNlLWluZm8nKS5kYXRhKCdjb25uZWN0RGF0YScpLmlkXHJcblxyXG4gICAgLy/mjqXntprmiJDlip/mmYLjga7ooajnpLrnlKjplqLmlbBcclxuICAgIGZ1bmN0aW9uIGZhaWxlZDIoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgICAvL2lmIG5vdCBjYWxsZWQsIHVuZGVmaW5lZFxyXG4gICAgICBsZXQgaW5zZXJ0ID0gJydcclxuICAgICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpXHJcbiAgICAgICAgaW5zZXJ0ID0gJ2Vycm9yOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBpbnNlcnQgPSAnZXJyb3I6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWQgKyAnXFxuY29tbWVudDogJyArIGNvbW1lbnRcclxuICAgICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG4gICAgICBpZiAoYWxlcnQgIT09IHVuZGVmaW5lZCkgd2luZG93LmFsZXJ0KGluc2VydClcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3VjY2VzczIoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgICAvL2lmIG5vdCBjYWxsZWQsIHVuZGVmaW5lZFxyXG4gICAgICBsZXQgaW5zZXJ0ID0gJydcclxuICAgICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpXHJcbiAgICAgICAgaW5zZXJ0ID0gJ3N1Y2Nlc3PjgaDjgog6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWRcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGluc2VydCA9XHJcbiAgICAgICAgICAnc3VjY2Vzc+OBoOOCiDogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgICBjb25zb2xlLmxvZyhpbnNlcnQpXHJcblxyXG4gICAgICBpZiAoYWxlcnQgIT09IHVuZGVmaW5lZCkgd2luZG93LmFsZXJ0KGluc2VydClcclxuXHJcbiAgICAgIC8v44Kk44OZ44Oz44OI55m654GrXHJcbiAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2RldmljZS1kaXNjb25uZWN0ZWQnKVxyXG4gICAgICAkKCcjZGV2aWNlLWluZm8nKS5zbGlkZVVwKClcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbkJsZURpc0Nvbm5lY3QoaWQsIHN1Y2Nlc3MyLCBmYWlsZWQyKVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdkZXZpY2UtZGlzY29ubmVjdGVkJywgZnVuY3Rpb24oKSB7fSlcclxuICB9KVxyXG5cclxuICAvKipcclxuICohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKlxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohXHJcbiEqKiogQ29udHJhb2xsZXIgKioqIVxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKi9cclxuXHJcbiAgLyoqXHJcbiAgICogPT3mpoLopoE9PVxyXG4gICAqIGJsZS5zY2Fu44Gn5Y+W5b6X44GX44Gf44OH44O844K/5LiA6Kan44KSJyN1bC1ibGUtc2Nhbi1saXN0J+OBq+ihqOekulxyXG4gICAqXHJcbiAgICogPT3lkbzjgbPlh7rjgZfplqLmlbA9PVxyXG4gICAqYmxlLnNjYW4oW10sdGltZSxzdWNjLGZhaWwpXHJcbiAgICpcclxuICAgKlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNvbkJsZVNjYW5EZXZpY2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgY29uQmxlU2NhbkRldmljZSgpJylcclxuICAgIGJsZS5zY2FuKFxyXG4gICAgICBbXSxcclxuICAgICAgNSxcclxuICAgICAgZnVuY3Rpb24oZGV2aWNlKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkZXZpY2UubmFtZSlcclxuXHJcbiAgICAgICAgaWYgKGRldmljZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8v44OH44O844K/5L2c5oiQXHJcblxyXG4gICAgICAgICAgbGV0IGh0bWwgPVxyXG4gICAgICAgICAgICAnPGI+JyArXHJcbiAgICAgICAgICAgIGRldmljZS5uYW1lICtcclxuICAgICAgICAgICAgJzwvYj4nICtcclxuICAgICAgICAgICAgJzxici8+JyArXHJcbiAgICAgICAgICAgICdSU1NJOiAnICtcclxuICAgICAgICAgICAgZGV2aWNlLnJzc2kgK1xyXG4gICAgICAgICAgICAnJm5ic3A7fCZuYnNwOycgK1xyXG4gICAgICAgICAgICBkZXZpY2UuaWRcclxuXHJcbiAgICAgICAgICAvL+aMv+WFpVxyXG4gICAgICAgICAgJCgnPGxpPicgKyBodG1sICsgJzwvbGk+JylcclxuICAgICAgICAgICAgLmF0dHIoe1xyXG4gICAgICAgICAgICAgIGNsYXNzOiAnYnQgbGlzdCBibGUtc2Nhbi1saXN0JyxcclxuICAgICAgICAgICAgICAnZGF0YS1uYW1lJzogZGV2aWNlLm5hbWUsXHJcbiAgICAgICAgICAgICAgJ2RhdGEtaWQnOiBkZXZpY2UuaWQsXHJcbiAgICAgICAgICAgICAgJ2RhdGEtcnNzaSc6IGRldmljZS5yc3NpLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLmFwcGVuZFRvKCcjdWwtYmxlLXNjYW4tbGlzdCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZmFpbGVkKGUsICdjb25CbGVTY2FuRGV2aWNlKCknKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICogYmxl5o6l57aaKOaJi+WLlSlcclxuICAgKlxyXG4gICAqID095ZG844Gz5Ye644GX6Zai5pWwPT1cclxuICAgKiBzdWNjZXNzMihlLGZyb20sY29tbWVudCxhbGVydClcclxuICAgKiBmYWlsZWQyKGUsZnJvbSxjb21tZW50LGFsZXJ0KVxyXG4gICAqXHJcbiAgICpcclxuICAgKi9cclxuXHJcbiAgZnVuY3Rpb24gY29uQmxlQ29ubmVjdChpZCwgc3VjY2VzczIsIGZhaWxlZDIpIHtcclxuICAgIC8vZnVuY3Rpb24gY29uQmxlQ29ubmVjdChpZCkge1xyXG4gICAgYmxlLmNvbm5lY3QoXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgc3VjY2VzczIoSlNPTi5zdHJpbmdpZnkoZSksICdjb25CbGVDb25uZWN0KGlkKScsICfmjqXntprmiJDlip8nLCB0cnVlKVxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZmFpbGVkMihKU09OLnN0cmluZ2lmeShlKSwgJ2NvbkJsZUNvbm5lY3QoaWQpJywgJ+aOpee2muWkseaVlycsIHRydWUpXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqID095qaC6KaBPT1cclxuICAgKiBibGXmjqXntpoo6Ieq5YuVKVxyXG4gICAqXHJcbiAgICogPT3lkbzjgbPlh7rjgZfplqLmlbA9PVxyXG4gICAqIHN1Y2Nlc3MyKGUsZnJvbSxjb21tZW50LGFsZXJ0KVxyXG4gICAqIGZhaWxlZDIoZSxmcm9tLGNvbW1lbnQsYWxlcnQpXHJcbiAgICpcclxuICAgKlxyXG4gICAqL1xyXG5cclxuICBmdW5jdGlvbiBjb25CbGVBdXRvQ29ubmVjdChpZCwgc3VjY2VzczIsIGZhaWxlZDIpIHtcclxuICAgIC8vZnVuY3Rpb24gY29uQmxlQ29ubmVjdChpZCkge1xyXG4gICAgYmxlLmF1dG9Db25uZWN0KFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHN1Y2Nlc3MyKEpTT04uc3RyaW5naWZ5KGUpLCAnY29uQmxlQXV0b0Nvbm5lY3QoaWQpJywgJ+aOpee2muaIkOWKnycsIHRydWUpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBmYWlsZWQyKEpTT04uc3RyaW5naWZ5KGUpLCAnY29uQmxlQXV0b0Nvbm5lY3QoaWQpJywgJ+aOpee2muWkseaVlycsIHRydWUpXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbkJsZURpc0Nvbm5lY3QoaWQsIHN1Y2Nlc3MyLCBmYWlsZWQyKSB7XHJcbiAgICBibGUuZGlzY29ubmVjdChcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBzdWNjZXNzMihcclxuICAgICAgICAgIGUsXHJcbiAgICAgICAgICAnY29uQmxlRGlzQ29ubmVjdChpZCwgc3VjY2VzczIsIGZhaWxlZDIpJyxcclxuICAgICAgICAgICdkaXNjb25uZWN05oiQ5YqfJyxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBmYWlsZWQyKFxyXG4gICAgICAgICAgZSxcclxuICAgICAgICAgICdjb25CbGVEaXNDb25uZWN0KGlkLCBzdWNjZXNzMiwgZmFpbGVkMiknLFxyXG4gICAgICAgICAgJ2Rpc2Nvbm5lY3TlpLHmlZcnLFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25CTEVSZWFkKCkge1xyXG4gICAgLy9jb25zLmVsbV91bC51bF9ibGVSZWFkTGlzdC50ZXh0Q29udGVudCA9ICcnXHJcbiAgICBsZXQgSUQgPSAnMjQ6MEE6QzQ6QzU6RjY6MjInIC8vICc2QzowNToyQjpFQTo2Qjo3OCdcclxuICAgIGxldCBzZXJ2aWNlSURfMSA9ICc0ZmFmYzIwMS0xZmI1LTQ1OWUtOGZjYy1jNWM5YzMzMTkxNGInIC8vY29ucy5VVUlELmRldmljZUEuc2VydmljZS5zZXJ2aWNlMVxyXG4gICAgbGV0IGNoYXJhSURfMSA9ICdiZWI1NDgzZS0zNmUxLTQ2ODgtYjdmNS1lYTA3MzYxYjI2YTgnIC8vY29ucy5VVUlELmRldmljZUEuY2hyYWN0ZXIuY2hhcmExXHJcbiAgICAvKlxyXG4gICAgbGV0IHNlcnZpY2VJRF8yID0gY29ucy5VVUlELmRldmljZUEuc2VydmljZS5zZXJ2aWNlMlxyXG4gIGxldCBjaGFyYUlEXzIgPSBjb25zLlVVSUQuZGV2aWNlQS5jaHJhY3Rlci5jaGFyYTJcclxuICBsZXQgc2VydmljZUlEXzMgPSBjb25zLlVVSUQuZGV2aWNlQS5zZXJ2aWNlLnNlcnZpY2UzXHJcbiAgbGV0IGNoYXJhSURfMyA9IGNvbnMuVVVJRC5kZXZpY2VBLmNocmFjdGVyLmNoYXJhM1xyXG4gICovXHJcbiAgICBsZXQgc3VjY2VzcyA9IHtcclxuICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKGUsIHByb3ApIHtcclxuICAgICAgICBsZXQgdW5pdDhWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoZSlcclxuICAgICAgICBsZXQgdWxfZWxlbWVudCA9ICcnIC8vY29ucy5lbG1fdWwudWxfYmxlUmVhZExpc3RcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN1Y2Nlc3MgcmVhZDogXCIgKyBwcm9wKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVhZDogJyArIHByb3AgKyAnIHwgJyArIEpTT04uc3RyaW5naWZ5KHVuaXQ4VmlldykpXHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIGxldCBodG1sID0gJzxiPicgKyBwcm9wICsgJzwvYj4nICsgJzxici8+JyArIHVuaXQ4Vmlld1xyXG4gICAgICAgIGxpLmlubmVySFRNTCA9IGh0bWxcclxuICAgICAgICB1bF9lbGVtZW50LmFwcGVuZENoaWxkKGxpKVxyXG4gICAgICB9LFxyXG4gICAgICBfMTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMSdcclxuICAgICAgICBzdWNjZXNzLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8yOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAyJ1xyXG4gICAgICAgIHN1Y2Nlc3MudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzM6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDMnXHJcbiAgICAgICAgc3VjY2Vzcy50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICAgbGV0IGZhaWxlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ+abuOOBjei+vOOBv+OCqOODqeODvCDjg5rjg6rjg5Xjgqfjg6njg6vlho3mjqXntponKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3ViQkxFUmVhZChJRCwgc2VydmljZUlELCBjaGFyYUlELCBzdWNjZXNzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzdWJCTEVSZWFkKCknKVxyXG5cclxuICAgICAgLy9sZXQgcyA9IHN1Y2Nlc3MoKTtcclxuICAgICAgbGV0IGZhaWxlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgcmVhZCcpXHJcbiAgICAgICAgd2luZG93LmFsZXJ0KCdmYWlsZWQgcmVhZCcpXHJcbiAgICAgIH1cclxuICAgICAgYmxlLnJlYWQoSUQsIHNlcnZpY2VJRCwgY2hhcmFJRCwgc3VjY2VzcywgZmFpbGVkKVxyXG4gICAgfVxyXG4gICAgc3ViQkxFUmVhZChJRCwgc2VydmljZUlEXzEsIGNoYXJhSURfMSwgc3VjY2Vzcy5fMSwgZmFpbGVkKVxyXG4gICAgLy9zdWJCTEVSZWFkKElELCBzZXJ2aWNlSURfMiwgY2hhcmFJRF8yLCBzdWNjZXNzLl8yLCBmYWlsZWQpXHJcbiAgICAvLy9zdWJCTEVSZWFkKElELCBzZXJ2aWNlSURfMywgY2hhcmFJRF8zLCBzdWNjZXNzLl8zLCBmYWlsZWQpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkJMRVdyaXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uQkxFV3JpdGUnKVxyXG5cclxuICAgIGxldCBJRCA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfSUQudmFsdWVcclxuICAgIGxldCBzZXJ2aWNlSURfMSA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfc1VVSUQxLnZhbHVlXHJcbiAgICBsZXQgY2hhcmFJRF8xID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV9jVVVJRDEudmFsdWVcclxuICAgIGxldCBzZXJ2aWNlSURfMiA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfc1VVSUQyLnZhbHVlXHJcbiAgICBsZXQgY2hhcmFJRF8yID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV9jVVVJRDIudmFsdWVcclxuICAgIGxldCBzZXJ2aWNlSURfMyA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfc1VVSUQzLnZhbHVlXHJcbiAgICBsZXQgY2hhcmFJRF8zID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV9jVVVJRDMudmFsdWVcclxuICAgIGxldCBpbnB1dCA9IFtdXHJcblxyXG4gICAgbGV0IGRhdGFfMSA9IG5ldyBVaW50OEFycmF5KDEpXHJcbiAgICBpbnB1dFswXSA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfd3JpdGUxLnZhbHVlXHJcbiAgICBkYXRhXzFbMF0gPSBOdW1iZXIoaW5wdXRbMF0pXHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dFswXSlcclxuICAgIGNvbnNvbGUubG9nKE51bWJlcihpbnB1dFswXSkpXHJcblxyXG4gICAgbGV0IGRhdGFfMiA9IG5ldyBVaW50OEFycmF5KDMpXHJcbiAgICBpbnB1dFsxXSA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfd3JpdGUyMS52YWx1ZVxyXG4gICAgaW5wdXRbMl0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3dyaXRlMjIudmFsdWVcclxuICAgIGlucHV0WzNdID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV93cml0ZTIzLnZhbHVlXHJcbiAgICBkYXRhXzJbMF0gPSBOdW1iZXIoaW5wdXRbMV0pXHJcbiAgICBkYXRhXzJbMV0gPSBOdW1iZXIoaW5wdXRbMl0pXHJcbiAgICBkYXRhXzJbMl0gPSBOdW1iZXIoaW5wdXRbM10pXHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dFsxXSlcclxuXHJcbiAgICBsZXQgZGF0YV8zID0gbmV3IFVpbnQzMkFycmF5KDEpXHJcbiAgICBpbnB1dFs0XSA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfd3JpdGUzLnZhbHVlXHJcbiAgICBkYXRhXzNbMF0gPSBOdW1iZXIoaW5wdXRbNF0pXHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dFs0XSlcclxuXHJcbiAgICBsZXQgc3VjY2VzcyA9IHtcclxuICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKGUsIHByb3ApIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoJ3dyaXRlOiAnICsgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzE6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDEnXHJcblxyXG4gICAgICAgIHN1Y2Nlc3MudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDInXHJcbiAgICAgICAgc3VjY2Vzcy50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMydcclxuICAgICAgICBzdWNjZXNzLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICBsZXQgZmFpbGVkID0ge1xyXG4gICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oZSwgcHJvcCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIGUgKyAnIHwgJyArIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8xOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAxJ1xyXG4gICAgICAgIGZhaWxlZC50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMjogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMidcclxuICAgICAgICBmYWlsZWQudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzM6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDMnXHJcbiAgICAgICAgZmFpbGVkLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICBibGUud3JpdGUoSUQsIHNlcnZpY2VJRF8xLCBjaGFyYUlEXzEsIGRhdGFfMS5idWZmZXIsIHN1Y2Nlc3MuXzEsIGZhaWxlZC5fMSlcclxuICAgIGJsZS53cml0ZShJRCwgc2VydmljZUlEXzIsIGNoYXJhSURfMiwgZGF0YV8yLmJ1ZmZlciwgc3VjY2Vzcy5fMiwgZmFpbGVkLl8yKVxyXG4gICAgYmxlLndyaXRlKElELCBzZXJ2aWNlSURfMywgY2hhcmFJRF8zLCBkYXRhXzMuYnVmZmVyLCBzdWNjZXNzLl8zLCBmYWlsZWQuXzMpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkJMRU5vdGlmeSgpIHtcclxuICAgIGxldCBJRCA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlTm90aWZ5LmlucHV0X2JsZU5vdGlmeV9JRC52YWx1ZVxyXG4gICAgbGV0IHNlcnZpY2VJRCA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlTm90aWZ5LmlucHV0X2JsZU5vdGlmeV9zVVVJRC52YWx1ZVxyXG4gICAgbGV0IGNoYXJhSUQgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZU5vdGlmeS5pbnB1dF9ibGVOb3RpZnlfY1VVSUQudmFsdWVcclxuICAgIGxldCBzdWNjZXNzID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KGUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2U6ICcgKyBkYXRhWzBdKVxyXG4gICAgICB3aW5kb3cuYWxlcnQoJ2NoYW5nZTogJyArIGRhdGFbMF0pXHJcbiAgICB9XHJcbiAgICBsZXQgZmFpbGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydCgnZXJyb3InKVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFsZXJ0KCdCTEUgTm90aWZpeSBTdGFydCcpXHJcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgTm90aWZ5JylcclxuICAgIGJsZS5zdGFydE5vdGlmaWNhdGlvbihJRCwgc2VydmljZUlELCBjaGFyYUlELCBzdWNjZXNzLCBmYWlsZWQpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCTEVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gSUQg5o6l57aa44GZ44KL44OH44OQ44Kk44K5SURcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZUlEIOaOpee2muOBmeOCi3NlcnZpY2VVVUlEXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhSUQg5o6l57aa44GZ44KLY2hyYWN0aXN0aWNVVUlEXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2VzcyDmiJDlip/mmYLjga7jgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgIHlvJXmlbDjga9JRFxyXG4gICAqL1xyXG5cclxuICBmdW5jdGlvbiBzdWJCTEVXcml0ZShJRCwgc2VydmljZUlELCBjaGFyYUlELCBzdWNjZXNzLCBmYWlsZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkJMRVdyaXRlJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN1YkJMRU5vdGlmeSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdvbkJMRU5vdGlmeScpXHJcbiAgfVxyXG59KVxyXG4iLCIvKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAnLi4vY3NzL2luZGV4LmNzcydcbi8vaW1wb3J0ICcuL2pzL3N1Yi5qcydcblxuLy93ZWJwYWNr44GnaHRtbOOBq+e1hOOBv+i+vOOBvuOCjOOBn+OBqOOBjeOBq+ihqOekuuOBleOCjOOCi1xuY29uc29sZS5pbmZvKCdIVE1M57WE6L6844G/5a6M5LqGJylcblxudmFyIGFwcCA9IHtcbiAgLy8gQXBwbGljYXRpb24gQ29uc3RydWN0b3JcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IGluaXRpYWxpemUoKScpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGlzdGVuIERPTUNvbnRlbnRMb2FkZWQnKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnbGlzdGVuIGxvYWQnKVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2RldmljZXJlYWR5JyxcbiAgICAgIHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpLFxuICAgICAgZmFsc2VcbiAgICApXG4gIH0sXG5cbiAgLy8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxuICAvL1xuICAvLyBCaW5kIGFueSBjb3Jkb3ZhIGV2ZW50cyBoZXJlLiBDb21tb24gZXZlbnRzIGFyZTpcbiAgLy8gJ3BhdXNlJywgJ3Jlc3VtZScsIGV0Yy5cbiAgb25EZXZpY2VSZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IG9uRHZpY2VSZWFkeSgpICcpXG4gICAgdGhpcy5yZWNlaXZlZEV2ZW50KCdkZXZpY2VyZWFkeScpXG4gIH0sXG5cbiAgLy8gVXBkYXRlIERPTSBvbiBhIFJlY2VpdmVkIEV2ZW50XG4gIHJlY2VpdmVkRXZlbnQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IHJlY2VpdmVkRXZlbnQoaWQpOiAnICsgaWQpXG4gICAgdmFyIHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICB2YXIgbGlzdGVuaW5nRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RlbmluZycpXG4gICAgdmFyIHJlY2VpdmVkRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VpdmVkJylcblxuICAgIGxpc3RlbmluZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmU7JylcbiAgICByZWNlaXZlZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OmJsb2NrOycpXG5cbiAgICBjb25zb2xlLmxvZygnZmluIFJlY2VpdmVkIEV2ZW50OiAnICsgaWQpXG4gIH0sXG59XG5hcHAuaW5pdGlhbGl6ZSgpXG4iLCJ3aW5kb3cuYWxlcnQoJ0hlbGxvIHN1Yi5qcyEnKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9