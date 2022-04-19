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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/mondenhiroki/projects/eigomonster/app/javascript/packs/typingplay.js: Support for the experimental syntax 'jsx' isn't currently enabled (8:3):\n\n   6 |\n   7 |  var img = document.getElementById(\"meterImg\");\n>  8 |   <img.src = \"logotest.png\">;\n     |   ^\n   9 |\n  10 |  const textLists = [\n  11 |    \"aaa\",\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:775:17)\n    at Parser.raiseWithData (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:768:17)\n    at Parser.expectOnePlugin (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:9731:18)\n    at Parser.parseExprAtom (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11106:22)\n    at Parser.parseExprSubscripts (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10689:23)\n    at Parser.parseUpdate (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10669:21)\n    at Parser.parseMaybeUnary (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10647:23)\n    at Parser.parseExprOps (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10504:23)\n    at Parser.parseMaybeConditional (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10478:23)\n    at Parser.parseMaybeAssign (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10441:21)\n    at Parser.parseExpressionBase (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10386:23)\n    at /Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10380:39\n    at Parser.allowInAnd (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12079:16)\n    at Parser.parseExpression (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10380:17)\n    at Parser.parseStatementContent (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12367:23)\n    at Parser.parseStatement (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12236:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12816:25)\n    at Parser.parseBlockBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12807:10)\n    at Parser.parseBlock (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12791:10)\n    at Parser.parseFunctionBody (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11758:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11742:10)\n    at /Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12949:12\n    at Parser.withTopicForbiddingContext (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12054:14)\n    at Parser.parseFunction (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:12948:10)\n    at Parser.parseFunctionOrFunctionSent (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11196:17)\n    at Parser.parseExprAtom (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:11032:21)\n    at Parser.parseExprSubscripts (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10689:23)\n    at Parser.parseUpdate (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10669:21)\n    at Parser.parseMaybeUnary (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10647:23)\n    at Parser.parseExprOps (/Users/mondenhiroki/projects/eigomonster/node_modules/@babel/parser/lib/index.js:10504:23)");

/***/ })

/******/ });
//# sourceMappingURL=typingplay-958ac2e9267b0d835de4.js.map