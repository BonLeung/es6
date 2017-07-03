/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	{
	  var test = function test(x) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "world";

	    console.log('默认值', x, y);
	  };

	  test('hello'); // 默认值 hello world
	  test('hello', 'bangge'); // 默认值 hello bangge
	}

	{
	  var test2 = function test2(x) {
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

	    console.log('作用域', x, y);
	  };

	  var x = 'test';

	  test2('kill'); // 作用域 kill kill
	  test2(); // 作用域 undefied undefined
	}

	{
	  var test3 = function test3() {
	    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	      arg[_key] = arguments[_key];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var v = _step.value;

	        console.log('rest', v);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };

	  test3(1, 2, 3);
	  // rest 1
	  // rest 2
	  // rest 3
	}

	{
	  var _console, _console2;

	  (_console = console).log.apply(_console, [1, 2, 3]); // 1 2 3
	  (_console2 = console).log.apply(_console2, ['a'].concat([1, 2, 3])); // a 1 2 3
	}

	{
	  var arraw = function arraw(v) {
	    return v * 2;
	  };
	  console.log('arrow', arraw(2)); // arrow 4

	  var arrow2 = function arrow2() {
	    return 5;
	  };
	  console.log('arrow2', arrow2()); // arrow2 5
	}

	{
	  var tail = function tail(x) {
	    console.log('tail', x);
	  };

	  var fx = function fx(x) {
	    return tail(x);
	  };

	  fx(123); // tail 123
	}

/***/ })
/******/ ]);