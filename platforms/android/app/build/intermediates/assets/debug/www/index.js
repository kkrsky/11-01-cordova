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

/**
 * 初期化後
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

function onBLEConnect() {
  let ID = '6C:05:2B:EA:6B:78'
  let success = function(getID) {
    window.alert('success connect: ' + getID)
  }
  function subBLEConnect(ID, success) {
    console.log('subBLEConnect()')

    ble.connect(
      ID,
      function() {
        console.log('succsess connect')
        success(ID)
      },
      function() {
        console.log('failed connect')
        window.alert('failed connect')
      }
    )
  }
  subBLEConnect(ID, success)
}

function onBLEDisConnect() {
  let ID = '6C:05:2B:EA:6B:78'
  let success = function(getID) {
    window.alert('success disconnect: ' + getID)
  }
  function subBLEDisConnect(ID, success) {
    console.log('subBLEDisConnect()')

    ble.disconnect(
      ID,
      function() {
        console.log('succsess disconnect')
        success(ID)
      },
      function() {
        console.log('failed disconnect')
        window.alert('failed disconnect')
      }
    )
  }
  subBLEDisConnect(ID, success)
}

function onBLERead() {
  cons.elm_ul.ul_bleReadList.textContent = ''
  let ID = '6C:05:2B:EA:6B:78'
  let serviceID_1 = cons.UUID.deviceA.service.service1
  let charaID_1 = cons.UUID.deviceA.chracter.chara1
  let serviceID_2 = cons.UUID.deviceA.service.service2
  let charaID_2 = cons.UUID.deviceA.chracter.chara2
  let serviceID_3 = cons.UUID.deviceA.service.service3
  let charaID_3 = cons.UUID.deviceA.chracter.chara3
  let success = {
    template: function(e, prop) {
      let unit8View = new Uint8Array(e)
      let ul_element = cons.elm_ul.ul_bleReadList

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
  subBLERead(ID, serviceID_1, charaID_1, success._1, failed)
  subBLERead(ID, serviceID_2, charaID_2, success._2, failed)
  subBLERead(ID, serviceID_3, charaID_3, success._3, failed)
}

/**
 * BLE
 * @param {string} ID 接続するデバイスID
 * @param {string} serviceID 接続するserviceUUID
 * @param {string} charaID 接続するchractisticUUID
 * @param {function} success 成功時のコールバック関数、引数はID
 */
function subBLERead(ID, serviceID, charaID, success) {
  console.log('onBLERead')

  //let s = success();
  let failed = function() {
    console.log('failed read')
    window.alert('failed read')
  }
  ble.read(ID, serviceID, charaID, success, failed)
}
function subBLEWrite(ID, serviceID, charaID, success, failed) {
  console.log('onBLEWrite')
}

function subBLENotify() {
  console.log('onBLENotify')
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/OTQ3OSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYmx1ZXRvb3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3ViLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLE9BQU8scUJBQXFCLHFDQUFxQyxxQkFBcUIsR0FBRyxRQUFRLHVCQUF1QixpQkFBaUIsc0JBQXNCLHFCQUFxQixrQ0FBa0MscUJBQXFCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsT0FBTyx1SUFBdUksV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLGdEQUFnRCx1QkFBdUIsdUNBQXVDLHVCQUF1QixLQUFLLFlBQVkseUJBQXlCLG1CQUFtQix3QkFBd0IsdUJBQXVCLG9DQUFvQyx1QkFBdUIsS0FBSyxhQUFhLHNCQUFzQixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyxXQUFXLHFCQUFxQixxQ0FBcUMscUJBQXFCLEdBQUcsUUFBUSx1QkFBdUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsa0NBQWtDLHFCQUFxQixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLEdBQUc7QUFDcjBDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGlPQUF3SDs7QUFFMUo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1REFBdUQ7QUFDdkQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVuQkQ7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQseURBQXlEOztBQUV6RDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcE1BIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkM2QzZDM7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4uYnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGV2aWNlLWluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9zaGl6dW9rYV91bml2L215QXBwL2UtYmlrZS8xMXRoLzAxLWNvcmRvdmEtb25seS9zcmMvY3NzL2luZGV4LmNzc1wiLFwiaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRlwiLFwiZmlsZVwiOlwiaW5kZXguY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzO1xcclxcbiAgZm9udC1zaXplOiAwLjllbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldmljZS1pbmZvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsXCJ1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5saSB7XFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDNkMztcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5idCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXZpY2UtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Iiwid2luZG93LmFsZXJ0KCdsb2FkIGJsdWV0dG90aC5qczInKVxyXG5sZXQgY29ucyA9IHtcclxuICBGSUxFX0RJUl9VUkw6ICdjb3Jkb3YnLFxyXG4gIGVsbV91bDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJyksXHJcbiAgVVVJRDoge1xyXG4gICAgYWxsOiB7XHJcbiAgICAgIG5hbWU6ICfoh6rli5XmjL/lhaUnLFxyXG4gICAgICBvYmo6ICfoh6rli5XmjL/lhaUnLFxyXG4gICAgfSxcclxuICAgIGRldmljZUE6IHtcclxuICAgICAgSUQ6ICcyNDowQTpDNDpDNTpGNjoyMicsIC8vJzZDOjA1OjJCOkVBOjZCOjc4JyxcclxuICAgICAgc2VydmljZToge1xyXG4gICAgICAgIHNlcnZpY2UxOiAnNGZhZmMyMDEtMWZiNS00NTllLThmY2MtYzVjOWMzMzE5MTRiJyxcclxuICAgICAgICBzZXJ2aWNlMjogJzAwMDBiYmIwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgc2VydmljZTM6ICcwMDAwY2NjMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICB9LFxyXG4gICAgICBjaHJhY3Rlcjoge1xyXG4gICAgICAgIGNoYXJhMTogJ2JlYjU0ODNlLTM2ZTEtNDY4OC1iN2Y1LWVhMDczNjFiMjZhOCcsXHJcbiAgICAgICAgY2hhcmEyOiAnMDAwMGJiYjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBjaGFyYTM6ICcwMDAwY2NjMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRldmljZUI6IHtcclxuICAgICAgSUQ6ICc2QzowNToyQjpFQTo2Qjo3OCcsXHJcbiAgICAgIHNlcnZpY2U6IHtcclxuICAgICAgICBzZXJ2aWNlMTogJzAwMDBmZmYwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgc2VydmljZTI6ICcwMDAwYmJiMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIHNlcnZpY2UzOiAnMDAwMGNjYzAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgfSxcclxuICAgICAgY2hyYWN0ZXI6IHtcclxuICAgICAgICBjaGFyYTE6ICcwMDAwZmZmMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIGNoYXJhMjogJzAwMDBiYmIxLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgICAgY2hhcmEzOiAnMDAwMGNjYzEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZXZpY2VDOiB7XHJcbiAgICAgIElEOiAnNkM6MDU6MkI6RUE6NkI6NzgnLFxyXG4gICAgICBzZXJ2aWNlOiB7XHJcbiAgICAgICAgc2VydmljZTE6ICcwMDAwZmZmMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIHNlcnZpY2UyOiAnMDAwMGJiYjAtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBzZXJ2aWNlMzogJzAwMDBjY2MwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNocmFjdGVyOiB7XHJcbiAgICAgICAgY2hhcmExOiAnMDAwMGZmZjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJyxcclxuICAgICAgICBjaGFyYTI6ICcwMDAwYmJiMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInLFxyXG4gICAgICAgIGNoYXJhMzogJzAwMDBjY2MxLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIC8qKlxyXG4gKiAhKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqXHJcbiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiFcclxuISoqKiB0ZXN0IGZ1bmNpb24gKioqIVxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKi9cclxuICBmdW5jdGlvbiB0ZXN0X2lub3V0KCkge1xyXG4gICAgbGV0IGRhdGEgPSB7IGE6IFsxLCA0LCA2LCA3LCAzXSwgYjogWyd0ZXMnLCAndGVzMiddIH1cclxuICAgIGxldCBrZXkgPSAnYSdcclxuICAgICQoJy50ZXN0X2lub3V0JykuZGF0YShrZXksIGRhdGEpXHJcblxyXG4gICAgdmFyIHRlcyA9ICQoJy50ZXN0X2lub3V0JykuZGF0YShrZXkpXHJcbiAgICBjb25zb2xlLmxvZyh0ZXMsIHR5cGVvZiB0ZXMpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRlc3RfaW4oKSB7XHJcbiAgICBsZXQgZGF0YSA9ICd0ZXMwMSdcclxuICAgIGxldCBrZXkgPSAnYSdcclxuICAgICR0ZW1wX2luKGRhdGEsIGtleSlcclxuICB9XHJcbiAgZnVuY3Rpb24gdGVzdF9vdXQoKSB7XHJcbiAgICBsZXQga2V5ID0gJ2EnXHJcbiAgICAkdGVtcF9vdXQoa2V5KVxyXG4gICAgdmFyIHRlcyA9ICRnZXRfb3V0KClcclxuICAgIGNvbnNvbGUubG9nKHRlcylcclxuICB9XHJcblxyXG4gICQoJ2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3Rlc3RfaW5vdXQnKSkge1xyXG4gICAgICB0ZXN0X2lub3V0KClcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygndGVzdF9pbicpKSB7XHJcbiAgICAgIHRlc3RfaW4oKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0ZXN0X291dCcpKSB7XHJcbiAgICAgIHRlc3Rfb3V0KClcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygnLmJ0bi1ibGUtc2NhbicpKSB7XHJcbiAgICAgIC8vdGVzdF9vdXQoKVxyXG4gICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0ZXN0X291dCcpKSB7XHJcbiAgICAgIHRlc3Rfb3V0KClcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygndGVzdF9vdXQnKSkge1xyXG4gICAgICB0ZXN0X291dCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoJ2Vsc2UnKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudGVzdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5kYXRhKCdrZXknLCAndmFsdWUnKVxyXG4gICAgd2luZG93LmFsZXJ0KCQodGhpcykuZGF0YSgna2V5JykpXHJcblxyXG4gICAgbGV0IHRlc3REYXRhVGFnID0gJCh0aGlzKS5kYXRhKCduYW1lJylcclxuICAgIHdpbmRvdy5hbGVydCh0ZXN0RGF0YVRhZylcclxuICB9KVxyXG5cclxuICBsZXQgaHRtbCA9ICd0ZXN0J1xyXG4gICQoJzxsaT4nICsgaHRtbCArICc8L2xpPicpXHJcbiAgICAuYXR0cih7XHJcbiAgICAgIGNsYXNzOiAnYnQgdGVzdCBsaXN0IGJsZS1zY2FuLWxpc3QnLFxyXG4gICAgICAnZGF0YS1uYW1lJzogJ3Rlc3QnLFxyXG4gICAgfSlcclxuICAgIC5hcHBlbmRUbygnI3VsLXRlc3QnKVxyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnRlc3Rfc2NjJywgZnVuY3Rpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBzY2MoZSkge1xyXG4gICAgICBzdWNjZXNzKGUsICd0ZXN0X3NjYycsICd0aGlzIGlzIGNvbW1lbnQnLCB0cnVlKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmFsKGUpIHtcclxuICAgICAgZmFpbGVkKGUsICd0ZXN0X3NjYycsICd0aGlzIGlzIGNvbW1lbnQnLCB0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzY2MnKSkge1xyXG4gICAgICBzY2MoJ3RoaXMgaXMgc3VjY2VzcycpXHJcbiAgICAgICQodGhpcykuZmFkZU91dCgpXHJcbiAgICAgICQoJy5mYWwnKS5zaG93KClcclxuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygnZmFsJykpIHtcclxuICAgICAgZmFsKCd0aGlzIGlzIGZhaWxlZCcpXHJcbiAgICAgICQodGhpcykuZmFkZU91dCgpXHJcbiAgICAgICQoJy5zY2MnKS5mYWRlSW4oKVxyXG4gICAgfVxyXG4gICAgLy8kKHRoaXMpLnRvZ2dsZSgpXHJcbiAgfSlcclxuXHJcbiAgLyoqXHJcbiAqICEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICpcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIVxyXG4hKioqIOaxjumWouaVsCAqKiohXHJcbiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqL1xyXG5cclxuICBmdW5jdGlvbiBzdWNjZXNzKGUsIGNhbGxlZCwgY29tbWVudCwgYWxlcnQpIHtcclxuICAgIC8vaWYgbm90IGNhbGxlZCwgdW5kZWZpbmVkXHJcbiAgICBsZXQgaW5zZXJ0ID0gJydcclxuICAgIGlmIChjb21tZW50ID09PSB1bmRlZmluZWQgfHwgY29tbWVudCA9PT0gJy0nKSB7XHJcbiAgICAgIGluc2VydCA9ICdzdWNjZXNzOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnNlcnQgPSAnc3VjY2VzczogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGluc2VydClcclxuICAgIGlmIChhbGVydCAhPT0gdW5kZWZpbmVkKSB3aW5kb3cuYWxlcnQoaW5zZXJ0KVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxuICBmdW5jdGlvbiBmYWlsZWQoZSwgY2FsbGVkLCBjb21tZW50LCBhbGVydCkge1xyXG4gICAgLy9pZiBub3QgY2FsbGVkLCB1bmRlZmluZWRcclxuICAgIGxldCBpbnNlcnQgPSAnJ1xyXG4gICAgaWYgKGNvbW1lbnQgPT09IHVuZGVmaW5lZCB8fCBjb21tZW50ID09PSAnLScpXHJcbiAgICAgIGluc2VydCA9ICdlcnJvcjogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZFxyXG4gICAgZWxzZSBpbnNlcnQgPSAnZXJyb3I6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWQgKyAnXFxuY29tbWVudDogJyArIGNvbW1lbnRcclxuICAgIGNvbnNvbGUubG9nKGluc2VydClcclxuICAgIGlmIChhbGVydCAhPT0gdW5kZWZpbmVkKSB3aW5kb3cuYWxlcnQoaW5zZXJ0KVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqICEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICpcclxuISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIVxyXG4hKioqIFZpZXcgKioqIVxyXG4hKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKi9cclxuXHJcbiAgLyoqXHJcbiAgICogPT3mpoLopoE9PVxyXG4gICAqIGJsZS5zY2Fu44Gn5Y+W5b6X44GX44Gf44OH44O844K/5LiA6Kan44KSJyN1bC1ibGUtc2Nhbi1saXN0J+OBq+ihqOekulxyXG4gICAqXHJcbiAgICogPT3lkbzjgbPlh7rjgZfplqLmlbA9PVxyXG4gICAqY29uQmxlU2NhbkRldmljZSgpXHJcbiAgICpcclxuICAgKlxyXG4gICAqL1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWJsZS1zY2FuJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvKlxyXG4gIC0tI2JsZS1zY2FuLXd3cmFwcGVyIFxyXG4gICN1bC1ibGUtc2Nhbi1saXN0XHJcbiAgLmJ0bi1ibGUtc2NhblxyXG4gICovXHJcbiAgICAvL+WIneacn+WMllxyXG4gICAgJCgnI3VsLWJsZS1zY2FuLWxpc3QnKS50ZXh0KCcnKVxyXG4gICAgY29uQmxlU2NhbkRldmljZSgpXHJcbiAgfSlcclxuXHJcbiAgLyoqXHJcbiAgICogPT3mpoLopoE9PVxyXG4gICAqIGJsZS5zY2Fu44Gn5Y+W5b6X44GX44Gf5Lu75oSP44Gu44OH44O844K/44KS44Kv44Oq44OD44Kv44GX44Gf44Go44GN44GrYmxl5o6l57aaXHJcbiAgICpcclxuICAgKiA9PeWRvOOBs+WHuuOBl+mWouaVsD09XHJcbiAgICpjb25CbGVDb25uZWN0KGlkLCBzdWNjZXNzMywgZmFpbGVkMylcclxuICAgKlxyXG4gICAqXHJcbiAgICovXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5ibGUtc2Nhbi1saXN0JywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJylcclxuICAgIC8vY29uc29sZS5sb2coJ2lkJywgaWQpXHJcblxyXG4gICAgLy/mjqXntprmiJDlip/mmYLjga7ooajnpLrnlKjplqLmlbBcclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MyKGUsIGNhbGxlZCwgY29tbWVudCwgYWxlcnQpIHtcclxuICAgICAgLy9pZiBub3QgY2FsbGVkLCB1bmRlZmluZWRcclxuICAgICAgbGV0IGluc2VydCA9ICcnXHJcbiAgICAgIGlmIChjb21tZW50ID09PSB1bmRlZmluZWQgfHwgY29tbWVudCA9PT0gJy0nKVxyXG4gICAgICAgIGluc2VydCA9ICdzdWNjZXNz44Gg44KIOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBpbnNlcnQgPVxyXG4gICAgICAgICAgJ3N1Y2Nlc3PjgaDjgog6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWQgKyAnXFxuY29tbWVudDogJyArIGNvbW1lbnRcclxuICAgICAgY29uc29sZS5sb2coaW5zZXJ0KVxyXG4gICAgICBpZiAoYWxlcnQgIT09IHVuZGVmaW5lZCkgd2luZG93LmFsZXJ0KGluc2VydClcclxuXHJcbiAgICAgIC8vI2RldmljZS1pbmZv44Gr5oOF5aCx44KSc2F2ZVxyXG4gICAgICAkKCcjZGV2aWNlLWluZm8nKS5kYXRhKCdjb25uZWN0RGF0YScsIGUpXHJcbiAgICAgIC8vZGV2aWNlLWluZm8tc2F2ZWTjgpLnmbrngatcclxuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignZGV2aWNlLWluZm8tc2F2ZWQnKVxyXG5cclxuICAgICAgbGV0IGRldmljZUluZm8gPSBlXHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZXZpY2VJbmZvJywgZGV2aWNlSW5mbylcclxuICAgICAgJCgnLmRldmljZS1pbmZvLW5hbWUnKS50ZXh0KGRldmljZUluZm8ubmFtZSlcclxuICAgICAgJCgnLmRldmljZS1pbmZvLWlkJykudGV4dChkZXZpY2VJbmZvLmlkKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tcnNzaScpLnRleHQoZGV2aWNlSW5mby5yc3NpKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tc2VydmljZXMnKS50ZXh0KGRldmljZUluZm8uc2VydmljZXMpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1jaGFycycpLnRleHQoZGV2aWNlSW5mby5jaGFyYWN0ZXJpc3RpY3MpXHJcbiAgICAgIC8vI2RldmljZS1pbmZv44KS6KGo56S6XHJcbiAgICAgICQoJyNkZXZpY2UtaW5mbycpLnNsaWRlRG93bigpXHJcblxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWlsZWQyKGUsIGNhbGxlZCwgY29tbWVudCwgYWxlcnQpIHtcclxuICAgICAgLy9pZiBub3QgY2FsbGVkLCB1bmRlZmluZWRcclxuICAgICAgbGV0IGluc2VydCA9ICcnXHJcbiAgICAgIGlmIChjb21tZW50ID09PSB1bmRlZmluZWQgfHwgY29tbWVudCA9PT0gJy0nKVxyXG4gICAgICAgIGluc2VydCA9ICdlcnJvcjogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZFxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgaW5zZXJ0ID0gJ2Vycm9yOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkICsgJ1xcbmNvbW1lbnQ6ICcgKyBjb21tZW50XHJcbiAgICAgIGNvbnNvbGUubG9nKGluc2VydClcclxuICAgICAgaWYgKGFsZXJ0ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5hbGVydChpbnNlcnQpXHJcblxyXG4gICAgICAvLyNkZXZpY2UtaW5mb+OBruaDheWgseOCkuODquOCu+ODg+ODiFxyXG4gICAgICAkKCcjZGV2aWNlLWluZm8nKS5zbGlkZVVwKClcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIC8vYmxlLmNvbm5lY3TjgadibGXjgajmjqXntprjgIEjZGV2aWNlLWluZm/jgavjg4fjg7zjgr/jgpLjgq3jg6Pjg4Pjgrfjg6VcclxuICAgIC8vY29uQmxlQ29ubmVjdChpZCwgc3VjY2VzczMsIGZhaWxlZDMpXHJcbiAgICBjb25CbGVBdXRvQ29ubmVjdChpZCwgc3VjY2VzczIsIGZhaWxlZDIpXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2RldmljZS1pbmZvLXNhdmVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBkZXZpY2VJbmZvID0gJCgnI2RldmljZS1pbmZvJykuZGF0YSgnY29ubmVjdERhdGEnKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2RldmljZUluZm8nLCBkZXZpY2VJbmZvKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8tbmFtZScpLnRleHQoZGV2aWNlSW5mby5uYW1lKVxyXG4gICAgICAkKCcuZGV2aWNlLWluZm8taWQnKS50ZXh0KGRldmljZUluZm8uaWQpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1yc3NpJykudGV4dChkZXZpY2VJbmZvLnJzc2kpXHJcbiAgICAgICQoJy5kZXZpY2UtaW5mby1zZXJ2aWNlcycpLnRleHQoZGV2aWNlSW5mby5zZXJ2aWNlcylcclxuICAgICAgJCgnLmRldmljZS1pbmZvLWNoYXJzJykudGV4dChkZXZpY2VJbmZvLmNoYXJhY3RlcmlzdGljcylcclxuICAgIH0pXHJcbiAgfSlcclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICog6KaB57Sg44Kv44Oq44OD44Kv44GX44Gf44Go44GN44GrYmxl5o6l57aa6Kej6ZmkXHJcbiAgICpcclxuICAgKiA9PeWRvOOBs+WHuuOBl+mWouaVsD09XHJcbiAgICpjb25CbGVDb25uZWN0KGlkLCBzdWNjZXNzMywgZmFpbGVkMylcclxuICAgKlxyXG4gICAqXHJcbiAgICovXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tYmxlLWRpc2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZCA9ICQoJyNkZXZpY2UtaW5mbycpLmRhdGEoJ2Nvbm5lY3REYXRhJykuaWRcclxuXHJcbiAgICAvL+aOpee2muaIkOWKn+aZguOBruihqOekuueUqOmWouaVsFxyXG4gICAgZnVuY3Rpb24gZmFpbGVkMihlLCBjYWxsZWQsIGNvbW1lbnQsIGFsZXJ0KSB7XHJcbiAgICAgIC8vaWYgbm90IGNhbGxlZCwgdW5kZWZpbmVkXHJcbiAgICAgIGxldCBpbnNlcnQgPSAnJ1xyXG4gICAgICBpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbW1lbnQgPT09ICctJylcclxuICAgICAgICBpbnNlcnQgPSAnZXJyb3I6ICcgKyBlICsgJ1xcbmZyb206ICcgKyBjYWxsZWRcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGluc2VydCA9ICdlcnJvcjogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZCArICdcXG5jb21tZW50OiAnICsgY29tbWVudFxyXG4gICAgICBjb25zb2xlLmxvZyhpbnNlcnQpXHJcbiAgICAgIGlmIChhbGVydCAhPT0gdW5kZWZpbmVkKSB3aW5kb3cuYWxlcnQoaW5zZXJ0KVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzMihlLCBjYWxsZWQsIGNvbW1lbnQsIGFsZXJ0KSB7XHJcbiAgICAgIC8vaWYgbm90IGNhbGxlZCwgdW5kZWZpbmVkXHJcbiAgICAgIGxldCBpbnNlcnQgPSAnJ1xyXG4gICAgICBpZiAoY29tbWVudCA9PT0gdW5kZWZpbmVkIHx8IGNvbW1lbnQgPT09ICctJylcclxuICAgICAgICBpbnNlcnQgPSAnc3VjY2Vzc+OBoOOCiDogJyArIGUgKyAnXFxuZnJvbTogJyArIGNhbGxlZFxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgaW5zZXJ0ID1cclxuICAgICAgICAgICdzdWNjZXNz44Gg44KIOiAnICsgZSArICdcXG5mcm9tOiAnICsgY2FsbGVkICsgJ1xcbmNvbW1lbnQ6ICcgKyBjb21tZW50XHJcbiAgICAgIGNvbnNvbGUubG9nKGluc2VydClcclxuXHJcbiAgICAgIGlmIChhbGVydCAhPT0gdW5kZWZpbmVkKSB3aW5kb3cuYWxlcnQoaW5zZXJ0KVxyXG5cclxuICAgICAgLy/jgqTjg5njg7Pjg4jnmbrngatcclxuICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignZGV2aWNlLWRpc2Nvbm5lY3RlZCcpXHJcbiAgICAgICQoJyNkZXZpY2UtaW5mbycpLnNsaWRlVXAoKVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uQmxlRGlzQ29ubmVjdChpZCwgc3VjY2VzczIsIGZhaWxlZDIpXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2RldmljZS1kaXNjb25uZWN0ZWQnLCBmdW5jdGlvbigpIHt9KVxyXG4gIH0pXHJcblxyXG4gIC8qKlxyXG4gKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqXHJcbiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiFcclxuISoqKiBDb250cmFvbGxlciAqKiohXHJcbiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqL1xyXG5cclxuICAvKipcclxuICAgKiA9PeamguimgT09XHJcbiAgICogYmxlLnNjYW7jgaflj5blvpfjgZfjgZ/jg4fjg7zjgr/kuIDopqfjgpInI3VsLWJsZS1zY2FuLWxpc3Qn44Gr6KGo56S6XHJcbiAgICpcclxuICAgKiA9PeWRvOOBs+WHuuOBl+mWouaVsD09XHJcbiAgICpibGUuc2NhbihbXSx0aW1lLHN1Y2MsZmFpbClcclxuICAgKlxyXG4gICAqXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY29uQmxlU2NhbkRldmljZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzdGFydCBjb25CbGVTY2FuRGV2aWNlKCknKVxyXG4gICAgYmxlLnNjYW4oXHJcbiAgICAgIFtdLFxyXG4gICAgICA1LFxyXG4gICAgICBmdW5jdGlvbihkZXZpY2UpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRldmljZS5uYW1lKVxyXG5cclxuICAgICAgICBpZiAoZGV2aWNlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy/jg4fjg7zjgr/kvZzmiJBcclxuXHJcbiAgICAgICAgICBsZXQgaHRtbCA9XHJcbiAgICAgICAgICAgICc8Yj4nICtcclxuICAgICAgICAgICAgZGV2aWNlLm5hbWUgK1xyXG4gICAgICAgICAgICAnPC9iPicgK1xyXG4gICAgICAgICAgICAnPGJyLz4nICtcclxuICAgICAgICAgICAgJ1JTU0k6ICcgK1xyXG4gICAgICAgICAgICBkZXZpY2UucnNzaSArXHJcbiAgICAgICAgICAgICcmbmJzcDt8Jm5ic3A7JyArXHJcbiAgICAgICAgICAgIGRldmljZS5pZFxyXG5cclxuICAgICAgICAgIC8v5oy/5YWlXHJcbiAgICAgICAgICAkKCc8bGk+JyArIGh0bWwgKyAnPC9saT4nKVxyXG4gICAgICAgICAgICAuYXR0cih7XHJcbiAgICAgICAgICAgICAgY2xhc3M6ICdidCBsaXN0IGJsZS1zY2FuLWxpc3QnLFxyXG4gICAgICAgICAgICAgICdkYXRhLW5hbWUnOiBkZXZpY2UubmFtZSxcclxuICAgICAgICAgICAgICAnZGF0YS1pZCc6IGRldmljZS5pZCxcclxuICAgICAgICAgICAgICAnZGF0YS1yc3NpJzogZGV2aWNlLnJzc2ksXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJyN1bC1ibGUtc2Nhbi1saXN0JylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBmYWlsZWQoZSwgJ2NvbkJsZVNjYW5EZXZpY2UoKScpXHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqID095qaC6KaBPT1cclxuICAgKiBibGXmjqXntpoo5omL5YuVKVxyXG4gICAqXHJcbiAgICogPT3lkbzjgbPlh7rjgZfplqLmlbA9PVxyXG4gICAqIHN1Y2Nlc3MyKGUsZnJvbSxjb21tZW50LGFsZXJ0KVxyXG4gICAqIGZhaWxlZDIoZSxmcm9tLGNvbW1lbnQsYWxlcnQpXHJcbiAgICpcclxuICAgKlxyXG4gICAqL1xyXG5cclxuICBmdW5jdGlvbiBjb25CbGVDb25uZWN0KGlkLCBzdWNjZXNzMiwgZmFpbGVkMikge1xyXG4gICAgLy9mdW5jdGlvbiBjb25CbGVDb25uZWN0KGlkKSB7XHJcbiAgICBibGUuY29ubmVjdChcclxuICAgICAgaWQsXHJcbiAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBzdWNjZXNzMihKU09OLnN0cmluZ2lmeShlKSwgJ2NvbkJsZUNvbm5lY3QoaWQpJywgJ+aOpee2muaIkOWKnycsIHRydWUpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBmYWlsZWQyKEpTT04uc3RyaW5naWZ5KGUpLCAnY29uQmxlQ29ubmVjdChpZCknLCAn5o6l57aa5aSx5pWXJywgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogPT3mpoLopoE9PVxyXG4gICAqIGJsZeaOpee2mijoh6rli5UpXHJcbiAgICpcclxuICAgKiA9PeWRvOOBs+WHuuOBl+mWouaVsD09XHJcbiAgICogc3VjY2VzczIoZSxmcm9tLGNvbW1lbnQsYWxlcnQpXHJcbiAgICogZmFpbGVkMihlLGZyb20sY29tbWVudCxhbGVydClcclxuICAgKlxyXG4gICAqXHJcbiAgICovXHJcblxyXG4gIGZ1bmN0aW9uIGNvbkJsZUF1dG9Db25uZWN0KGlkLCBzdWNjZXNzMiwgZmFpbGVkMikge1xyXG4gICAgLy9mdW5jdGlvbiBjb25CbGVDb25uZWN0KGlkKSB7XHJcbiAgICBibGUuYXV0b0Nvbm5lY3QoXHJcbiAgICAgIGlkLFxyXG4gICAgICBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgc3VjY2VzczIoSlNPTi5zdHJpbmdpZnkoZSksICdjb25CbGVBdXRvQ29ubmVjdChpZCknLCAn5o6l57aa5oiQ5YqfJywgdHJ1ZSlcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGZhaWxlZDIoSlNPTi5zdHJpbmdpZnkoZSksICdjb25CbGVBdXRvQ29ubmVjdChpZCknLCAn5o6l57aa5aSx5pWXJywgdHJ1ZSlcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29uQmxlRGlzQ29ubmVjdChpZCwgc3VjY2VzczIsIGZhaWxlZDIpIHtcclxuICAgIGJsZS5kaXNjb25uZWN0KFxyXG4gICAgICBpZCxcclxuICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHN1Y2Nlc3MyKFxyXG4gICAgICAgICAgZSxcclxuICAgICAgICAgICdjb25CbGVEaXNDb25uZWN0KGlkLCBzdWNjZXNzMiwgZmFpbGVkMiknLFxyXG4gICAgICAgICAgJ2Rpc2Nvbm5lY3TmiJDlip8nLFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgIClcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGZhaWxlZDIoXHJcbiAgICAgICAgICBlLFxyXG4gICAgICAgICAgJ2NvbkJsZURpc0Nvbm5lY3QoaWQsIHN1Y2Nlc3MyLCBmYWlsZWQyKScsXHJcbiAgICAgICAgICAnZGlzY29ubmVjdOWkseaVlycsXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkJMRVJlYWQoKSB7XHJcbiAgICAvL2NvbnMuZWxtX3VsLnVsX2JsZVJlYWRMaXN0LnRleHRDb250ZW50ID0gJydcclxuICAgIGxldCBJRCA9ICcyNDowQTpDNDpDNTpGNjoyMicgLy8gJzZDOjA1OjJCOkVBOjZCOjc4J1xyXG4gICAgbGV0IHNlcnZpY2VJRF8xID0gJzRmYWZjMjAxLTFmYjUtNDU5ZS04ZmNjLWM1YzljMzMxOTE0YicgLy9jb25zLlVVSUQuZGV2aWNlQS5zZXJ2aWNlLnNlcnZpY2UxXHJcbiAgICBsZXQgY2hhcmFJRF8xID0gJ2JlYjU0ODNlLTM2ZTEtNDY4OC1iN2Y1LWVhMDczNjFiMjZhOCcgLy9jb25zLlVVSUQuZGV2aWNlQS5jaHJhY3Rlci5jaGFyYTFcclxuICAgIC8qXHJcbiAgICBsZXQgc2VydmljZUlEXzIgPSBjb25zLlVVSUQuZGV2aWNlQS5zZXJ2aWNlLnNlcnZpY2UyXHJcbiAgbGV0IGNoYXJhSURfMiA9IGNvbnMuVVVJRC5kZXZpY2VBLmNocmFjdGVyLmNoYXJhMlxyXG4gIGxldCBzZXJ2aWNlSURfMyA9IGNvbnMuVVVJRC5kZXZpY2VBLnNlcnZpY2Uuc2VydmljZTNcclxuICBsZXQgY2hhcmFJRF8zID0gY29ucy5VVUlELmRldmljZUEuY2hyYWN0ZXIuY2hhcmEzXHJcbiAgKi9cclxuICAgIGxldCBzdWNjZXNzID0ge1xyXG4gICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oZSwgcHJvcCkge1xyXG4gICAgICAgIGxldCB1bml0OFZpZXcgPSBuZXcgVWludDhBcnJheShlKVxyXG4gICAgICAgIGxldCB1bF9lbGVtZW50ID0gJycgLy9jb25zLmVsbV91bC51bF9ibGVSZWFkTGlzdFxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3VjY2VzcyByZWFkOiBcIiArIHByb3ApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkOiAnICsgcHJvcCArICcgfCAnICsgSlNPTi5zdHJpbmdpZnkodW5pdDhWaWV3KSlcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgbGV0IGh0bWwgPSAnPGI+JyArIHByb3AgKyAnPC9iPicgKyAnPGJyLz4nICsgdW5pdDhWaWV3XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gaHRtbFxyXG4gICAgICAgIHVsX2VsZW1lbnQuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICAgIH0sXHJcbiAgICAgIF8xOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAxJ1xyXG4gICAgICAgIHN1Y2Nlc3MudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDInXHJcbiAgICAgICAgc3VjY2Vzcy50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMydcclxuICAgICAgICBzdWNjZXNzLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICBsZXQgZmFpbGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydCgn5pu444GN6L6844G/44Ko44Op44O8IOODmuODquODleOCp+ODqeODq+WGjeaOpee2micpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWJCTEVSZWFkKElELCBzZXJ2aWNlSUQsIGNoYXJhSUQsIHN1Y2Nlc3MpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3N1YkJMRVJlYWQoKScpXHJcblxyXG4gICAgICAvL2xldCBzID0gc3VjY2VzcygpO1xyXG4gICAgICBsZXQgZmFpbGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCByZWFkJylcclxuICAgICAgICB3aW5kb3cuYWxlcnQoJ2ZhaWxlZCByZWFkJylcclxuICAgICAgfVxyXG4gICAgICBibGUucmVhZChJRCwgc2VydmljZUlELCBjaGFyYUlELCBzdWNjZXNzLCBmYWlsZWQpXHJcbiAgICB9XHJcbiAgICBzdWJCTEVSZWFkKElELCBzZXJ2aWNlSURfMSwgY2hhcmFJRF8xLCBzdWNjZXNzLl8xLCBmYWlsZWQpXHJcbiAgICAvL3N1YkJMRVJlYWQoSUQsIHNlcnZpY2VJRF8yLCBjaGFyYUlEXzIsIHN1Y2Nlc3MuXzIsIGZhaWxlZClcclxuICAgIC8vL3N1YkJMRVJlYWQoSUQsIHNlcnZpY2VJRF8zLCBjaGFyYUlEXzMsIHN1Y2Nlc3MuXzMsIGZhaWxlZClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQkxFV3JpdGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb25CTEVXcml0ZScpXHJcblxyXG4gICAgbGV0IElEID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV9JRC52YWx1ZVxyXG4gICAgbGV0IHNlcnZpY2VJRF8xID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV9zVVVJRDEudmFsdWVcclxuICAgIGxldCBjaGFyYUlEXzEgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX2NVVUlEMS52YWx1ZVxyXG4gICAgbGV0IHNlcnZpY2VJRF8yID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV9zVVVJRDIudmFsdWVcclxuICAgIGxldCBjaGFyYUlEXzIgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX2NVVUlEMi52YWx1ZVxyXG4gICAgbGV0IHNlcnZpY2VJRF8zID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV9zVVVJRDMudmFsdWVcclxuICAgIGxldCBjaGFyYUlEXzMgPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX2NVVUlEMy52YWx1ZVxyXG4gICAgbGV0IGlucHV0ID0gW11cclxuXHJcbiAgICBsZXQgZGF0YV8xID0gbmV3IFVpbnQ4QXJyYXkoMSlcclxuICAgIGlucHV0WzBdID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV93cml0ZTEudmFsdWVcclxuICAgIGRhdGFfMVswXSA9IE51bWJlcihpbnB1dFswXSlcclxuICAgIGNvbnNvbGUubG9nKGlucHV0WzBdKVxyXG4gICAgY29uc29sZS5sb2coTnVtYmVyKGlucHV0WzBdKSlcclxuXHJcbiAgICBsZXQgZGF0YV8yID0gbmV3IFVpbnQ4QXJyYXkoMylcclxuICAgIGlucHV0WzFdID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV93cml0ZTIxLnZhbHVlXHJcbiAgICBpbnB1dFsyXSA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlV3JpdGUuaW5wdXRfYmxlV3JpdGVfd3JpdGUyMi52YWx1ZVxyXG4gICAgaW5wdXRbM10gPSBkb2N1bWVudC5mb3Jtcy5mb3JtX2JsZVdyaXRlLmlucHV0X2JsZVdyaXRlX3dyaXRlMjMudmFsdWVcclxuICAgIGRhdGFfMlswXSA9IE51bWJlcihpbnB1dFsxXSlcclxuICAgIGRhdGFfMlsxXSA9IE51bWJlcihpbnB1dFsyXSlcclxuICAgIGRhdGFfMlsyXSA9IE51bWJlcihpbnB1dFszXSlcclxuICAgIGNvbnNvbGUubG9nKGlucHV0WzFdKVxyXG5cclxuICAgIGxldCBkYXRhXzMgPSBuZXcgVWludDMyQXJyYXkoMSlcclxuICAgIGlucHV0WzRdID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVXcml0ZS5pbnB1dF9ibGVXcml0ZV93cml0ZTMudmFsdWVcclxuICAgIGRhdGFfM1swXSA9IE51bWJlcihpbnB1dFs0XSlcclxuICAgIGNvbnNvbGUubG9nKGlucHV0WzRdKVxyXG5cclxuICAgIGxldCBzdWNjZXNzID0ge1xyXG4gICAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oZSwgcHJvcCkge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydCgnd3JpdGU6ICcgKyBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMSdcclxuXHJcbiAgICAgICAgc3VjY2Vzcy50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMjogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMidcclxuICAgICAgICBzdWNjZXNzLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8zOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAzJ1xyXG4gICAgICAgIHN1Y2Nlc3MudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIGxldCBmYWlsZWQgPSB7XHJcbiAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbihlLCBwcm9wKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnICsgZSArICcgfCAnICsgcHJvcClcclxuICAgICAgfSxcclxuICAgICAgXzE6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDEnXHJcbiAgICAgICAgZmFpbGVkLnRlbXBsYXRlKGUsIHByb3ApXHJcbiAgICAgIH0sXHJcbiAgICAgIF8yOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAyJ1xyXG4gICAgICAgIGZhaWxlZC50ZW1wbGF0ZShlLCBwcm9wKVxyXG4gICAgICB9LFxyXG4gICAgICBfMzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMydcclxuICAgICAgICBmYWlsZWQudGVtcGxhdGUoZSwgcHJvcClcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIGJsZS53cml0ZShJRCwgc2VydmljZUlEXzEsIGNoYXJhSURfMSwgZGF0YV8xLmJ1ZmZlciwgc3VjY2Vzcy5fMSwgZmFpbGVkLl8xKVxyXG4gICAgYmxlLndyaXRlKElELCBzZXJ2aWNlSURfMiwgY2hhcmFJRF8yLCBkYXRhXzIuYnVmZmVyLCBzdWNjZXNzLl8yLCBmYWlsZWQuXzIpXHJcbiAgICBibGUud3JpdGUoSUQsIHNlcnZpY2VJRF8zLCBjaGFyYUlEXzMsIGRhdGFfMy5idWZmZXIsIHN1Y2Nlc3MuXzMsIGZhaWxlZC5fMylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQkxFTm90aWZ5KCkge1xyXG4gICAgbGV0IElEID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVOb3RpZnkuaW5wdXRfYmxlTm90aWZ5X0lELnZhbHVlXHJcbiAgICBsZXQgc2VydmljZUlEID0gZG9jdW1lbnQuZm9ybXMuZm9ybV9ibGVOb3RpZnkuaW5wdXRfYmxlTm90aWZ5X3NVVUlELnZhbHVlXHJcbiAgICBsZXQgY2hhcmFJRCA9IGRvY3VtZW50LmZvcm1zLmZvcm1fYmxlTm90aWZ5LmlucHV0X2JsZU5vdGlmeV9jVVVJRC52YWx1ZVxyXG4gICAgbGV0IHN1Y2Nlc3MgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZSlcclxuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZTogJyArIGRhdGFbMF0pXHJcbiAgICAgIHdpbmRvdy5hbGVydCgnY2hhbmdlOiAnICsgZGF0YVswXSlcclxuICAgIH1cclxuICAgIGxldCBmYWlsZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KCdlcnJvcicpXHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWxlcnQoJ0JMRSBOb3RpZml5IFN0YXJ0JylcclxuICAgIGNvbnNvbGUubG9nKCdzdGFydCBOb3RpZnknKVxyXG4gICAgYmxlLnN0YXJ0Tm90aWZpY2F0aW9uKElELCBzZXJ2aWNlSUQsIGNoYXJhSUQsIHN1Y2Nlc3MsIGZhaWxlZClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJMRVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBJRCDmjqXntprjgZnjgovjg4fjg5DjgqTjgrlJRFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlSUQg5o6l57aa44GZ44KLc2VydmljZVVVSURcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFJRCDmjqXntprjgZnjgotjaHJhY3Rpc3RpY1VVSURcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdWNjZXNzIOaIkOWKn+aZguOBruOCs+ODvOODq+ODkOODg+OCr+mWouaVsOOAgeW8leaVsOOBr0lEXHJcbiAgICovXHJcblxyXG4gIGZ1bmN0aW9uIHN1YkJMRVdyaXRlKElELCBzZXJ2aWNlSUQsIGNoYXJhSUQsIHN1Y2Nlc3MsIGZhaWxlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uQkxFV3JpdGUnKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3ViQkxFTm90aWZ5KCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uQkxFTm90aWZ5JylcclxuICB9XHJcbn0pXHJcbiIsIi8qXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJ1xuLy9pbXBvcnQgJy4vanMvc3ViLmpzJ1xuXG4vL3dlYnBhY2vjgadodG1s44Gr57WE44G/6L6844G+44KM44Gf44Go44GN44Gr6KGo56S644GV44KM44KLXG5jb25zb2xlLmluZm8oJ0hUTUzntYTovrzjgb/lrozkuoYnKVxuXG52YXIgYXBwID0ge1xuICAvLyBBcHBsaWNhdGlvbiBDb25zdHJ1Y3RvclxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgaW5pdGlhbGl6ZSgpJylcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZW4gRE9NQ29udGVudExvYWRlZCcpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZW4gbG9hZCcpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnZGV2aWNlcmVhZHknLFxuICAgICAgdGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcyksXG4gICAgICBmYWxzZVxuICAgIClcbiAgfSxcblxuICAvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXG4gIC8vXG4gIC8vIEJpbmQgYW55IGNvcmRvdmEgZXZlbnRzIGhlcmUuIENvbW1vbiBldmVudHMgYXJlOlxuICAvLyAncGF1c2UnLCAncmVzdW1lJywgZXRjLlxuICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgb25EdmljZVJlYWR5KCkgJylcbiAgICB0aGlzLnJlY2VpdmVkRXZlbnQoJ2RldmljZXJlYWR5JylcbiAgfSxcblxuICAvLyBVcGRhdGUgRE9NIG9uIGEgUmVjZWl2ZWQgRXZlbnRcbiAgcmVjZWl2ZWRFdmVudDogZnVuY3Rpb24oaWQpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgcmVjZWl2ZWRFdmVudChpZCk6ICcgKyBpZClcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgIHZhciBsaXN0ZW5pbmdFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdGVuaW5nJylcbiAgICB2YXIgcmVjZWl2ZWRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmVjZWl2ZWQnKVxuXG4gICAgbGlzdGVuaW5nRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKVxuICAgIHJlY2VpdmVkRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6YmxvY2s7JylcblxuICAgIGNvbnNvbGUubG9nKCdmaW4gUmVjZWl2ZWQgRXZlbnQ6ICcgKyBpZClcbiAgfSxcbn1cbmFwcC5pbml0aWFsaXplKClcblxuLyoqXG4gKiDliJ3mnJ/ljJblvoxcbiAqXG4gKlxuICpcbiAqXG4gKlxuICpcbiAqXG4gKlxuICpcbiAqXG4gKlxuICpcbiAqL1xuXG5mdW5jdGlvbiBvbkJMRUNvbm5lY3QoKSB7XG4gIGxldCBJRCA9ICc2QzowNToyQjpFQTo2Qjo3OCdcbiAgbGV0IHN1Y2Nlc3MgPSBmdW5jdGlvbihnZXRJRCkge1xuICAgIHdpbmRvdy5hbGVydCgnc3VjY2VzcyBjb25uZWN0OiAnICsgZ2V0SUQpXG4gIH1cbiAgZnVuY3Rpb24gc3ViQkxFQ29ubmVjdChJRCwgc3VjY2Vzcykge1xuICAgIGNvbnNvbGUubG9nKCdzdWJCTEVDb25uZWN0KCknKVxuXG4gICAgYmxlLmNvbm5lY3QoXG4gICAgICBJRCxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY3Nlc3MgY29ubmVjdCcpXG4gICAgICAgIHN1Y2Nlc3MoSUQpXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgY29ubmVjdCcpXG4gICAgICAgIHdpbmRvdy5hbGVydCgnZmFpbGVkIGNvbm5lY3QnKVxuICAgICAgfVxuICAgIClcbiAgfVxuICBzdWJCTEVDb25uZWN0KElELCBzdWNjZXNzKVxufVxuXG5mdW5jdGlvbiBvbkJMRURpc0Nvbm5lY3QoKSB7XG4gIGxldCBJRCA9ICc2QzowNToyQjpFQTo2Qjo3OCdcbiAgbGV0IHN1Y2Nlc3MgPSBmdW5jdGlvbihnZXRJRCkge1xuICAgIHdpbmRvdy5hbGVydCgnc3VjY2VzcyBkaXNjb25uZWN0OiAnICsgZ2V0SUQpXG4gIH1cbiAgZnVuY3Rpb24gc3ViQkxFRGlzQ29ubmVjdChJRCwgc3VjY2Vzcykge1xuICAgIGNvbnNvbGUubG9nKCdzdWJCTEVEaXNDb25uZWN0KCknKVxuXG4gICAgYmxlLmRpc2Nvbm5lY3QoXG4gICAgICBJRCxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY3Nlc3MgZGlzY29ubmVjdCcpXG4gICAgICAgIHN1Y2Nlc3MoSUQpXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgZGlzY29ubmVjdCcpXG4gICAgICAgIHdpbmRvdy5hbGVydCgnZmFpbGVkIGRpc2Nvbm5lY3QnKVxuICAgICAgfVxuICAgIClcbiAgfVxuICBzdWJCTEVEaXNDb25uZWN0KElELCBzdWNjZXNzKVxufVxuXG5mdW5jdGlvbiBvbkJMRVJlYWQoKSB7XG4gIGNvbnMuZWxtX3VsLnVsX2JsZVJlYWRMaXN0LnRleHRDb250ZW50ID0gJydcbiAgbGV0IElEID0gJzZDOjA1OjJCOkVBOjZCOjc4J1xuICBsZXQgc2VydmljZUlEXzEgPSBjb25zLlVVSUQuZGV2aWNlQS5zZXJ2aWNlLnNlcnZpY2UxXG4gIGxldCBjaGFyYUlEXzEgPSBjb25zLlVVSUQuZGV2aWNlQS5jaHJhY3Rlci5jaGFyYTFcbiAgbGV0IHNlcnZpY2VJRF8yID0gY29ucy5VVUlELmRldmljZUEuc2VydmljZS5zZXJ2aWNlMlxuICBsZXQgY2hhcmFJRF8yID0gY29ucy5VVUlELmRldmljZUEuY2hyYWN0ZXIuY2hhcmEyXG4gIGxldCBzZXJ2aWNlSURfMyA9IGNvbnMuVVVJRC5kZXZpY2VBLnNlcnZpY2Uuc2VydmljZTNcbiAgbGV0IGNoYXJhSURfMyA9IGNvbnMuVVVJRC5kZXZpY2VBLmNocmFjdGVyLmNoYXJhM1xuICBsZXQgc3VjY2VzcyA9IHtcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24oZSwgcHJvcCkge1xuICAgICAgbGV0IHVuaXQ4VmlldyA9IG5ldyBVaW50OEFycmF5KGUpXG4gICAgICBsZXQgdWxfZWxlbWVudCA9IGNvbnMuZWxtX3VsLnVsX2JsZVJlYWRMaXN0XG5cbiAgICAgIC8vY29uc29sZS5sb2coXCJzdWNjZXNzIHJlYWQ6IFwiICsgcHJvcCk7XG4gICAgICBjb25zb2xlLmxvZygncmVhZDogJyArIHByb3AgKyAnIHwgJyArIEpTT04uc3RyaW5naWZ5KHVuaXQ4VmlldykpXG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICBsZXQgaHRtbCA9ICc8Yj4nICsgcHJvcCArICc8L2I+JyArICc8YnIvPicgKyB1bml0OFZpZXdcbiAgICAgIGxpLmlubmVySFRNTCA9IGh0bWxcbiAgICAgIHVsX2VsZW1lbnQuYXBwZW5kQ2hpbGQobGkpXG4gICAgfSxcbiAgICBfMTogZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHByb3AgPSAnc2VydmljZSAxJ1xuICAgICAgc3VjY2Vzcy50ZW1wbGF0ZShlLCBwcm9wKVxuICAgIH0sXG4gICAgXzI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBwcm9wID0gJ3NlcnZpY2UgMidcbiAgICAgIHN1Y2Nlc3MudGVtcGxhdGUoZSwgcHJvcClcbiAgICB9LFxuICAgIF8zOiBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgcHJvcCA9ICdzZXJ2aWNlIDMnXG4gICAgICBzdWNjZXNzLnRlbXBsYXRlKGUsIHByb3ApXG4gICAgfSxcbiAgfVxuICBsZXQgZmFpbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmFsZXJ0KCfmm7jjgY3ovrzjgb/jgqjjg6njg7wg44Oa44Oq44OV44Kn44Op44Or5YaN5o6l57aaJylcbiAgfVxuICBzdWJCTEVSZWFkKElELCBzZXJ2aWNlSURfMSwgY2hhcmFJRF8xLCBzdWNjZXNzLl8xLCBmYWlsZWQpXG4gIHN1YkJMRVJlYWQoSUQsIHNlcnZpY2VJRF8yLCBjaGFyYUlEXzIsIHN1Y2Nlc3MuXzIsIGZhaWxlZClcbiAgc3ViQkxFUmVhZChJRCwgc2VydmljZUlEXzMsIGNoYXJhSURfMywgc3VjY2Vzcy5fMywgZmFpbGVkKVxufVxuXG4vKipcbiAqIEJMRVxuICogQHBhcmFtIHtzdHJpbmd9IElEIOaOpee2muOBmeOCi+ODh+ODkOOCpOOCuUlEXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZUlEIOaOpee2muOBmeOCi3NlcnZpY2VVVUlEXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFJRCDmjqXntprjgZnjgotjaHJhY3Rpc3RpY1VVSURcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3Mg5oiQ5Yqf5pmC44Gu44Kz44O844Or44OQ44OD44Kv6Zai5pWw44CB5byV5pWw44GvSURcbiAqL1xuZnVuY3Rpb24gc3ViQkxFUmVhZChJRCwgc2VydmljZUlELCBjaGFyYUlELCBzdWNjZXNzKSB7XG4gIGNvbnNvbGUubG9nKCdvbkJMRVJlYWQnKVxuXG4gIC8vbGV0IHMgPSBzdWNjZXNzKCk7XG4gIGxldCBmYWlsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnZmFpbGVkIHJlYWQnKVxuICAgIHdpbmRvdy5hbGVydCgnZmFpbGVkIHJlYWQnKVxuICB9XG4gIGJsZS5yZWFkKElELCBzZXJ2aWNlSUQsIGNoYXJhSUQsIHN1Y2Nlc3MsIGZhaWxlZClcbn1cbmZ1bmN0aW9uIHN1YkJMRVdyaXRlKElELCBzZXJ2aWNlSUQsIGNoYXJhSUQsIHN1Y2Nlc3MsIGZhaWxlZCkge1xuICBjb25zb2xlLmxvZygnb25CTEVXcml0ZScpXG59XG5cbmZ1bmN0aW9uIHN1YkJMRU5vdGlmeSgpIHtcbiAgY29uc29sZS5sb2coJ29uQkxFTm90aWZ5Jylcbn1cbiIsIndpbmRvdy5hbGVydCgnSGVsbG8gc3ViLmpzIScpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=