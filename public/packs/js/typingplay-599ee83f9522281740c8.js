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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/typingplay.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/typingplay.js":
/*!********************************************!*\
  !*** ./app/javascript/packs/typingplay.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/mondenhiroki/projects/eigomonster/app/javascript/packs/typingplay.js: Identifier 'spanValue' has already been declared (28:77)\n\n  26 |   let randomIntegerInTotalWordList = Math.floor(Math.random() * wordList.length);\n  27 |   \n> 28 |   checkTexts = wordList[randomIntegerInTotalWordList].split(\"\").map(function(spanValue){\n     |                                                                              ^\n  29 |       let spanValue = document.createElement(\"span\");\n  30 |       spanValue.textContent = value;\n  31 |       displayWord.appendChild(spanValue);\n    at Parser._raise (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:775:17)\n    at Parser.raiseWithData (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:768:17)\n    at Parser.raise (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:736:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:1452:12)\n    at ScopeHandler.declareName (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:1432:14)\n    at Parser.checkLVal (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10241:24)\n    at Parser.checkParams (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11791:12)\n    at Parser.<anonymous> (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11767:14)\n    at Parser.parseBlockOrModuleBlockBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12839:23)\n    at Parser.parseBlockBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12807:10)\n    at Parser.parseBlock (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12791:10)\n    at Parser.parseFunctionBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11758:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11742:10)\n    at /Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12949:12\n    at Parser.withTopicForbiddingContext (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12054:14)\n    at Parser.parseFunction (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12948:10)\n    at Parser.parseFunctionOrFunctionSent (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11196:17)\n    at Parser.parseExprAtom (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11032:21)\n    at Parser.parseExprSubscripts (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10689:23)\n    at Parser.parseUpdate (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10669:21)\n    at Parser.parseMaybeUnary (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10647:23)\n    at Parser.parseExprOps (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10504:23)\n    at Parser.parseMaybeConditional (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10478:23)\n    at Parser.parseMaybeAssign (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10441:21)\n    at /Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10408:39\n    at Parser.allowInAnd (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12085:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10408:17)\n    at Parser.parseExprListItem (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11845:18)\n    at Parser.parseCallExpressionArguments (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10887:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10797:29)");

/***/ })

/******/ });
//# sourceMappingURL=typingplay-599ee83f9522281740c8.js.map