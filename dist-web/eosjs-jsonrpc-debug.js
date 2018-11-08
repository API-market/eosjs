var eosjs_jsonrpc =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eosjs-jsonrpc.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/eosjs-jsonrpc.ts":
/*!******************************!*\
  !*** ./src/eosjs-jsonrpc.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * @module JSON-RPC
 */
// copyright defined in eosjs/LICENSE.txt
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eosjs_numeric_1 = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
var eosjs_rpcerror_1 = __webpack_require__(/*! ./eosjs-rpcerror */ "./src/eosjs-rpcerror.ts");
function arrayToHex(data) {
    var e_1, _a;
    var result = "";
    try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var x = data_1_1.value;
            result += ("00" + x.toString(16)).slice(-2);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
/** Make RPC calls */
var JsonRpc = /** @class */ (function () {
    /**
     * @param args
     *    * `fetch`:
     *      * browsers: leave `null` or `undefined`
     *      * node: provide an implementation
     */
    function JsonRpc(endpoint, args) {
        if (args === void 0) { args = {}; }
        this.endpoint = endpoint;
        if (args.fetch) {
            this.fetchBuiltin = args.fetch;
        }
        else {
            this.fetchBuiltin = global.fetch;
        }
    }
    /** Post `body` to `endpoint + path`. Throws detailed error information in `RpcError` when available. */
    JsonRpc.prototype.fetch = function (path, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, f, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        f = this.fetchBuiltin;
                        return [4 /*yield*/, f(this.endpoint + path, {
                                body: JSON.stringify(body),
                                method: "POST",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json.processed && json.processed.except) {
                            throw new eosjs_rpcerror_1.default(json);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        e_2.isFetchError = true;
                        throw e_2;
                    case 4:
                        if (!response.ok) {
                            throw new eosjs_rpcerror_1.default(json);
                        }
                        return [2 /*return*/, json];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_abi` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_abi = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_abi", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_account` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_account = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_account", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block_header_state` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_block_header_state = function (block_num_or_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block_header_state", { block_num_or_id: block_num_or_id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_block = function (block_num_or_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block", { block_num_or_id: block_num_or_id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_code` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_code = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_code", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_balance` */
    JsonRpc.prototype.get_currency_balance = function (code, account, symbol) {
        if (symbol === void 0) { symbol = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_balance", { code: code, account: account, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_stats` */
    JsonRpc.prototype.get_currency_stats = function (code, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_stats", { code: code, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_info` */
    JsonRpc.prototype.get_info = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_info", {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producer_schedule` */
    JsonRpc.prototype.get_producer_schedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producer_schedule", {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producers` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_producers = function (json, lower_bound, limit) {
        if (json === void 0) { json = true; }
        if (lower_bound === void 0) { lower_bound = ""; }
        if (limit === void 0) { limit = 50; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producers", { json: json, lower_bound: lower_bound, limit: limit })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_raw_code_and_abi` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_raw_code_and_abi = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_raw_code_and_abi", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** calls `/v1/chain/get_raw_code_and_abi` and pulls out unneeded raw wasm code */
    // TODO: use `/v1/chain/get_raw_abi` directly when it becomes available
    JsonRpc.prototype.getRawAbi = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            var rawCodeAndAbi, abi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get_raw_code_and_abi(accountName)];
                    case 1:
                        rawCodeAndAbi = _a.sent();
                        abi = eosjs_numeric_1.base64ToBinary(rawCodeAndAbi.abi);
                        return [2 /*return*/, { accountName: rawCodeAndAbi.account_name, abi: abi }];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_table_rows` */
    JsonRpc.prototype.get_table_rows = function (_a) {
        var _b = _a.json, json = _b === void 0 ? true : _b, code = _a.code, scope = _a.scope, table = _a.table, _c = _a.table_key, table_key = _c === void 0 ? "" : _c, _d = _a.lower_bound, lower_bound = _d === void 0 ? "" : _d, _e = _a.upper_bound, upper_bound = _e === void 0 ? "" : _e, _f = _a.index_position, index_position = _f === void 0 ? 1 : _f, _g = _a.key_type, key_type = _g === void 0 ? "" : _g, _h = _a.limit, limit = _h === void 0 ? 10 : _h;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_table_rows", {
                            json: json,
                            code: code,
                            scope: scope,
                            table: table,
                            table_key: table_key,
                            lower_bound: lower_bound,
                            upper_bound: upper_bound,
                            index_position: index_position,
                            key_type: key_type,
                            limit: limit,
                        })];
                    case 1: return [2 /*return*/, _j.sent()];
                }
            });
        });
    };
    /** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
    JsonRpc.prototype.getRequiredKeys = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = eosjs_numeric_1.convertLegacyPublicKeys;
                        return [4 /*yield*/, this.fetch("/v1/chain/get_required_keys", {
                                transaction: args.transaction,
                                available_keys: args.availableKeys,
                            })];
                    case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).required_keys])];
                }
            });
        });
    };
    /** Push a serialized transaction */
    JsonRpc.prototype.push_transaction = function (_a) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/push_transaction", {
                            signatures: signatures,
                            compression: 0,
                            packed_context_free_data: "",
                            packed_trx: arrayToHex(serializedTransaction),
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/db_size/get` */
    JsonRpc.prototype.db_size_get = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.fetch("/v1/db_size/get", {})];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); });
    };
    /** Raw call to `/v1/history/get_actions` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_actions = function (account_name, pos, offset) {
        if (pos === void 0) { pos = null; }
        if (offset === void 0) { offset = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_actions", { account_name: account_name, pos: pos, offset: offset })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_transaction` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_transaction = function (id, block_num_hint) {
        if (block_num_hint === void 0) { block_num_hint = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_transaction", { id: id, block_num_hint: block_num_hint })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_key_accounts` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_key_accounts = function (public_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_key_accounts", { public_key: public_key })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_controlled_accounts` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_controlled_accounts = function (controlling_account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_controlled_accounts", { controlling_account: controlling_account })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return JsonRpc;
}()); // JsonRpc
exports.default = JsonRpc;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/eosjs-numeric.ts":
/*!******************************!*\
  !*** ./src/eosjs-numeric.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module Numeric
 */
// copyright defined in eosjs/LICENSE.txt
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
var ripemd160 = __webpack_require__(/*! ./ripemd */ "./src/ripemd.js").RIPEMD160.hash;
var base58Chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function create_base58_map() {
    var base58M = Array(256).fill(-1);
    for (var i = 0; i < base58Chars.length; ++i) {
        base58M[base58Chars.charCodeAt(i)] = i;
    }
    return base58M;
}
var base58Map = create_base58_map();
function create_base64_map() {
    var base64M = Array(256).fill(-1);
    for (var i = 0; i < base64Chars.length; ++i) {
        base64M[base64Chars.charCodeAt(i)] = i;
    }
    base64M["=".charCodeAt(0)] = 0;
    return base64M;
}
var base64Map = create_base64_map();
/** Is `bignum` a negative number? */
function isNegative(bignum) {
    return (bignum[bignum.length - 1] & 0x80) !== 0;
}
exports.isNegative = isNegative;
/** Negate `bignum` */
function negate(bignum) {
    var carry = 1;
    for (var i = 0; i < bignum.length; ++i) {
        var x = (~bignum[i] & 0xff) + carry;
        bignum[i] = x;
        carry = x >> 8;
    }
}
exports.negate = negate;
/**
 * Convert an unsigned decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function decimalToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var srcDigit = s.charCodeAt(i);
        if (srcDigit < "0".charCodeAt(0) || srcDigit > "9".charCodeAt(0)) {
            throw new Error("invalid number");
        }
        var carry = srcDigit - "0".charCodeAt(0);
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 10 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("number is out of range");
        }
    }
    return result;
}
exports.decimalToBinary = decimalToBinary;
/**
 * Convert a signed decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function signedDecimalToBinary(size, s) {
    var negative = s[0] === "-";
    if (negative) {
        s = s.substr(1);
    }
    var result = decimalToBinary(size, s);
    if (negative) {
        negate(result);
        if (!isNegative(result)) {
            throw new Error("number is out of range");
        }
    }
    else if (isNegative(result)) {
        throw new Error("number is out of range");
    }
    return result;
}
exports.signedDecimalToBinary = signedDecimalToBinary;
/**
 * Convert `bignum` to an unsigned decimal number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var result = Array(minDigits).fill("0".charCodeAt(0));
    for (var i = bignum.length - 1; i >= 0; --i) {
        var carry = bignum[i];
        for (var j = 0; j < result.length; ++j) {
            var x = ((result[j] - "0".charCodeAt(0)) << 8) + carry;
            result[j] = "0".charCodeAt(0) + x % 10;
            carry = (x / 10) | 0;
        }
        while (carry) {
            result.push("0".charCodeAt(0) + carry % 10);
            carry = (carry / 10) | 0;
        }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToDecimal = binaryToDecimal;
/**
 * Convert `bignum` to a signed decimal number
 * @param minDigits 0-pad result to this many digits
 */
function signedBinaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    if (isNegative(bignum)) {
        var x = bignum.slice();
        negate(x);
        return "-" + binaryToDecimal(x, minDigits);
    }
    return binaryToDecimal(bignum, minDigits);
}
exports.signedBinaryToDecimal = signedBinaryToDecimal;
/**
 * Convert an unsigned base-58 number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function base58ToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var carry = base58Map[s.charCodeAt(i)];
        if (carry < 0) {
            throw new Error("invalid base-58 value");
        }
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 58 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("base-58 value is out of range");
        }
    }
    result.reverse();
    return result;
}
exports.base58ToBinary = base58ToBinary;
/**
 * Convert `bignum` to a base-58 number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToBase58(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var e_1, _a, e_2, _b;
    var result = [];
    try {
        for (var bignum_1 = __values(bignum), bignum_1_1 = bignum_1.next(); !bignum_1_1.done; bignum_1_1 = bignum_1.next()) {
            var byte = bignum_1_1.value;
            var carry = byte;
            for (var j = 0; j < result.length; ++j) {
                var x = (base58Map[result[j]] << 8) + carry;
                result[j] = base58Chars.charCodeAt(x % 58);
                carry = (x / 58) | 0;
            }
            while (carry) {
                result.push(base58Chars.charCodeAt(carry % 58));
                carry = (carry / 58) | 0;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (bignum_1_1 && !bignum_1_1.done && (_a = bignum_1.return)) _a.call(bignum_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var bignum_2 = __values(bignum), bignum_2_1 = bignum_2.next(); !bignum_2_1.done; bignum_2_1 = bignum_2.next()) {
            var byte = bignum_2_1.value;
            if (byte) {
                break;
            }
            else {
                result.push("1".charCodeAt(0));
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (bignum_2_1 && !bignum_2_1.done && (_b = bignum_2.return)) _b.call(bignum_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToBase58 = binaryToBase58;
/** Convert an unsigned base-64 number in `s` to a bignum */
function base64ToBinary(s) {
    var len = s.length;
    if ((len & 3) === 1 && s[len - 1] === "=") {
        len -= 1;
    } // fc appends an extra '='
    if ((len & 3) !== 0) {
        throw new Error("base-64 value is not padded correctly");
    }
    var groups = len >> 2;
    var bytes = groups * 3;
    if (len > 0 && s[len - 1] === "=") {
        if (s[len - 2] === "=") {
            bytes -= 2;
        }
        else {
            bytes -= 1;
        }
    }
    var result = new Uint8Array(bytes);
    for (var group = 0; group < groups; ++group) {
        var digit0 = base64Map[s.charCodeAt(group * 4 + 0)];
        var digit1 = base64Map[s.charCodeAt(group * 4 + 1)];
        var digit2 = base64Map[s.charCodeAt(group * 4 + 2)];
        var digit3 = base64Map[s.charCodeAt(group * 4 + 3)];
        result[group * 3 + 0] = (digit0 << 2) | (digit1 >> 4);
        if (group * 3 + 1 < bytes) {
            result[group * 3 + 1] = ((digit1 & 15) << 4) | (digit2 >> 2);
        }
        if (group * 3 + 2 < bytes) {
            result[group * 3 + 2] = ((digit2 & 3) << 6) | digit3;
        }
    }
    return result;
}
exports.base64ToBinary = base64ToBinary;
/** Public key data size, excluding type field */
exports.publicKeyDataSize = 33;
/** Private key data size, excluding type field */
exports.privateKeyDataSize = 32;
/** Signature data size, excluding type field */
exports.signatureDataSize = 65;
function digestSuffixRipemd160(data, suffix) {
    var d = new Uint8Array(data.length + suffix.length);
    for (var i = 0; i < data.length; ++i) {
        d[i] = data[i];
    }
    for (var i = 0; i < suffix.length; ++i) {
        d[data.length + i] = suffix.charCodeAt(i);
    }
    return ripemd160(d);
}
function stringToKey(s, type, size, suffix) {
    var whole = base58ToBinary(size + 4, s);
    var result = { type: type, data: new Uint8Array(whole.buffer, 0, size) };
    var digest = new Uint8Array(digestSuffixRipemd160(result.data, suffix));
    if (digest[0] !== whole[size + 0] || digest[1] !== whole[size + 1]
        || digest[2] !== whole[size + 2] || digest[3] !== whole[size + 3]) {
        throw new Error("checksum doesn't match");
    }
    return result;
}
function keyToString(key, suffix, prefix) {
    var digest = new Uint8Array(digestSuffixRipemd160(key.data, suffix));
    var whole = new Uint8Array(key.data.length + 4);
    for (var i = 0; i < key.data.length; ++i) {
        whole[i] = key.data[i];
    }
    for (var i = 0; i < 4; ++i) {
        whole[i + key.data.length] = digest[i];
    }
    return prefix + binaryToBase58(whole);
}
/** Convert key in `s` to binary form */
function stringToPublicKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing public key");
    }
    if (s.substr(0, 3) === "EOS") {
        var whole = base58ToBinary(exports.publicKeyDataSize + 4, s.substr(3));
        var key = { type: 0 /* k1 */, data: new Uint8Array(exports.publicKeyDataSize) };
        for (var i = 0; i < exports.publicKeyDataSize; ++i) {
            key.data[i] = whole[i];
        }
        var digest = new Uint8Array(ripemd160(key.data));
        if (digest[0] !== whole[exports.publicKeyDataSize] || digest[1] !== whole[34]
            || digest[2] !== whole[35] || digest[3] !== whole[36]) {
            throw new Error("checksum doesn't match");
        }
        return key;
    }
    else if (s.substr(0, 7) === "PUB_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.publicKeyDataSize, "K1");
    }
    else if (s.substr(0, 7) === "PUB_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.publicKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.stringToPublicKey = stringToPublicKey;
/** Convert `key` to string (base-58) form */
function publicKeyToString(key) {
    if (key.type === 0 /* k1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "K1", "PUB_K1_");
    }
    else if (key.type === 1 /* r1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "R1", "PUB_R1_");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.publicKeyToString = publicKeyToString;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKey(s) {
    if (s.substr(0, 3) === "EOS") {
        return publicKeyToString(stringToPublicKey(s));
    }
    return s;
}
exports.convertLegacyPublicKey = convertLegacyPublicKey;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKeys(keys) {
    return keys.map(convertLegacyPublicKey);
}
exports.convertLegacyPublicKeys = convertLegacyPublicKeys;
/** Convert key in `s` to binary form */
function stringToPrivateKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing private key");
    }
    if (s.substr(0, 7) === "PVT_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.privateKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.stringToPrivateKey = stringToPrivateKey;
/** Convert `key` to string (base-58) form */
function privateKeyToString(key) {
    if (key.type === 1 /* r1 */) {
        return keyToString(key, "R1", "PVT_R1_");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.privateKeyToString = privateKeyToString;
/** Convert key in `s` to binary form */
function stringToSignature(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing signature");
    }
    if (s.substr(0, 7) === "SIG_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.signatureDataSize, "K1");
    }
    else if (s.substr(0, 7) === "SIG_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.signatureDataSize, "R1");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.stringToSignature = stringToSignature;
/** Convert `signature` to string (base-58) form */
function signatureToString(signature) {
    if (signature.type === 0 /* k1 */) {
        return keyToString(signature, "K1", "SIG_K1_");
    }
    else if (signature.type === 1 /* r1 */) {
        return keyToString(signature, "R1", "SIG_R1_");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.signatureToString = signatureToString;


/***/ }),

/***/ "./src/eosjs-rpcerror.ts":
/*!*******************************!*\
  !*** ./src/eosjs-rpcerror.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module RPC-Error
 */
// copyright defined in eosjs/LICENSE.txt
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Holds detailed error information */
var RpcError = /** @class */ (function (_super) {
    __extends(RpcError, _super);
    function RpcError(json) {
        var _this = this;
        if (json.error && json.error.details && json.error.details.length && json.error.details[0].message) {
            _this = _super.call(this, json.error.details[0].message) || this;
        }
        else if (json.processed && json.processed.except && json.processed.except.message) {
            _this = _super.call(this, json.processed.except.message) || this;
        }
        else {
            _this = _super.call(this, json.message) || this;
        }
        Object.setPrototypeOf(_this, RpcError.prototype);
        _this.json = json;
        return _this;
    }
    return RpcError;
}(Error));
exports.default = RpcError;


/***/ }),

/***/ "./src/ripemd.js":
/*!***********************!*\
  !*** ./src/ripemd.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.githubusercontent.com/wlzla000/bac83df6d3c51916c4dd0bc947e46947/raw/7ee3462b095ab22580ddaf191f44a590da6fe33b/RIPEMD-160.js

/*
	RIPEMD-160.js

		developed
			by K. (https://github.com/wlzla000)
			on December 27-29, 2017,

		licensed under


		the MIT license

		Copyright (c) 2017 K.

		 Permission is hereby granted, free of charge, to any person
		obtaining a copy of this software and associated documentation
		files (the "Software"), to deal in the Software without
		restriction, including without limitation the rights to use,
		copy, modify, merge, publish, distribute, sublicense, and/or
		sell copies of the Software, and to permit persons to whom the
		Software is furnished to do so, subject to the following
		conditions:

		 The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		OTHER DEALINGS IN THE SOFTWARE.
*/



class RIPEMD160
{
	constructor()
	{
		// https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf
		// http://shodhganga.inflibnet.ac.in/bitstream/10603/22978/13/13_appendix.pdf
	}

	static get_n_pad_bytes(message_size /* in bytes, 1 byte is 8 bits. */)
	{
		//  Obtain the number of bytes needed to pad the message.
		// It does not contain the size of the message size information.
		/*
			https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf

			The Cryptographic Hash Function RIPEMD-160

			written by
				Bart Preneel,
				Hans Dobbertin,
				Antoon Bosselaers
			in
				1997.

			--------------------------------------------------

			§5     Description of RIPEMD-160

			......

			 In order to guarantee that the total input size is a
			multiple of 512 bits, the input is padded in the same
			way as for all the members of the MD4-family: one
			appends a single 1 followed by a string of 0s (the
			number of 0s lies between 0 and 511); the last 64 bits
			of the extended input contain the binary representation
			of the input size in bits, least significant byte first.
		*/
		/*
			https://tools.ietf.org/rfc/rfc1186.txt

			RFC 1186: MD4 Message Digest Algorithm.

			written by
				Ronald Linn Rivest
			in
				October 1990.

			--------------------------------------------------

			§3     MD4 Algorithm Description

			......

			Step 1. Append padding bits

			 The message is "padded" (extended) so that its length
			(in bits) is congruent to 448, modulo 512. That is, the
			message is extended so that it is just 64 bits shy of
			being a multiple of 512 bits long. Padding is always
			performed, even if the length of the message is already
			congruent to 448, modulo 512 (in which case 512 bits of
			padding are added).

			 Padding is performed as follows: a single "1" bit is
			appended to the message, and then enough zero bits are
			appended so that the length in bits of the padded
			message becomes congruent to 448, modulo 512.

			Step 2. Append length

			 A 64-bit representation of b (the length of the message
			before the padding bits were added) is appended to the
			result of the previous step. In the unlikely event that
			b is greater than 2^64, then only the low-order 64 bits
			of b are used. (These bits are appended as two 32-bit
			words and appended low-order word first in accordance
			with the previous conventions.)

			 At this point the resulting message (after padding with
			bits and with b) has a length that is an exact multiple
			of 512 bits. Equivalently, this message has a length
			that is an exact multiple of 16 (32-bit) words. Let
			M[0 ... N-1] denote the words of the resulting message,
			where N is a multiple of 16.
		*/
		// https://crypto.stackexchange.com/a/32407/54568
		/*
			Example case  # 1
				[0 bit: message.]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 2
				[512-bits: message]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 3
				[(512 - 64 = 448) bits: message.]
				[1 bit: 1.]
				[511 bits: 0.]
				[64 bits: message size information.]

			Example case  # 4
				[(512 - 65 = 447) bits: message.]
				[1 bit: 1.]
				[0 bit: 0.]
				[64 bits: message size information.]
		*/
		// The number of padding zero bits:
		//      511 - [{(message size in bits) + 64} (mod 512)]
		return 64 - ((message_size + 8) & 0b00111111 /* 63 */);
	}
	static pad(message /* An ArrayBuffer. */)
	{
		const message_size = message.byteLength;
		const n_pad = RIPEMD160.get_n_pad_bytes(message_size);

		//  `Number.MAX_SAFE_INTEGER` is ((2 ** 53) - 1) and
		// bitwise operation in Javascript is done on 32-bits operands.
		const divmod = (dividend, divisor) => [
			Math.floor(dividend / divisor),
			dividend % divisor
		];
		/*
To shift

   00000000 000????? ???????? ???????? ???????? ???????? ???????? ????????
                                     t o
   00000000 ???????? ???????? ???????? ???????? ???????? ???????? ?????000

--------------------------------------------------------------------------------

Method #1

    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
   [00000000 000AAAAA AAAAAAAA AAAAAAAA] (<A> captured)
   [00000000 AAAAAAAA AAAAAAAA AAAAA000] (<A> shifted)
                         (<B> captured) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                     (<B> shifted) [BBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB] (<A> & <B_2> merged)
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		const uint32_max_plus_1 = 0x100000000; // (2 ** 32)
		const [
			msg_byte_size_most, // Value range [0, (2 ** 21) - 1].
			msg_byte_size_least // Value range [0, (2 ** 32) - 1].
		] = divmod(message_size, uint32_max_plus_1);
		const [
			carry, // Value range [0, 7].
			msg_bit_size_least // Value range [0, (2 ** 32) - 8].
		] = divmod(message_byte_size_least * 8, uint32_max_plus_1);
		const message_bit_size_most = message_byte_size_most * 8
			+ carry; // Value range [0, (2 ** 24) - 1].

--------------------------------------------------------------------------------

Method #2
    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
      [00000 000AAAAA AAAAAAAA AAAAAAAA  AAA] (<A> captured)
                         (<B> captured) [000BBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                          (<B> shifted) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAAAAA][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		*/
		const [
			msg_bit_size_most,
			msg_bit_size_least
		] = divmod(message_size, 536870912 /* (2 ** 29) */)
			.map((x, index) => (index ? (x * 8) : x));

		// `ArrayBuffer.transfer()` is not supported.
		const padded = new Uint8Array(message_size + n_pad + 8);
		padded.set(new Uint8Array(message), 0);
		const data_view = new DataView(padded.buffer);
		data_view.setUint8(message_size, 0b10000000);
		data_view.setUint32(
			message_size + n_pad,
			msg_bit_size_least,
			true // Little-endian
		);
		data_view.setUint32(
			message_size + n_pad + 4,
			msg_bit_size_most,
			true // Little-endian
		);

		return padded.buffer;
	}

	static f(j, x, y, z)
	{
		if(0 <= j && j <= 15)
		{ // Exclusive-OR
			return x ^ y ^ z;
		}
		if(16 <= j && j <= 31)
		{ // Multiplexing (muxing)
			return (x & y) | (~x & z);
		}
		if(32 <= j && j <= 47)
		{
			return (x | ~y) ^ z;
		}
		if(48 <= j && j <= 63)
		{ // Multiplexing (muxing)
			return (x & z) | (y & ~z);
		}
		if(64 <= j && j <= 79)
		{
			return x ^ (y | ~z);
		}
	}
	static K(j)
	{
		if(0 <= j && j <= 15)
		{
			return 0x00000000;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.SQRT2)
			return 0x5A827999;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.sqrt(3))
			return 0x6ED9EBA1;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.sqrt(5))
			return 0x8F1BBCDC;
		}
		if(64 <= j && j <= 79)
		{
			// Math.floor((2 ** 30) * Math.sqrt(7))
			return 0xA953FD4E;
		}
	}
	static KP(j) // K'
	{
		if(0 <= j && j <= 15)
		{
			// Math.floor((2 ** 30) * Math.cbrt(2))
			return 0x50A28BE6;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.cbrt(3))
			return 0x5C4DD124;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.cbrt(5))
			return 0x6D703EF3;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.cbrt(7))
			return 0x7A6D76E9;
		}
		if(64 <= j && j <= 79)
		{
			return 0x00000000;
		}
	}
	static add_modulo32(/* ...... */)
	{
		// 1.  Modulo addition (addition modulo) is associative.
		//    https://proofwiki.org/wiki/Modulo_Addition_is_Associative
 		// 2.  Bitwise operation in Javascript
		//    is done on 32-bits operands
		//    and results in a 32-bits value.
		return Array
			.from(arguments)
			.reduce((a, b) => (a + b), 0) | 0;
	}
	static rol32(value, count)
	{ // Cyclic left shift (rotate) on 32-bits value.
		return (value << count) | (value >>> (32 - count));
	}
	static hash(message /* An ArrayBuffer. */)
	{
		//////////       Padding       //////////

		// The padded message.
		const padded = RIPEMD160.pad(message);

		//////////     Compression     //////////

		// Message word selectors.
		const r = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
			7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
			3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
			1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
			4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
		];
		const rP = [ // r'
			5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
			6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
			15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
			8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
			12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
		];

		// Amounts for 'rotate left' operation.
		const s = [
			11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
			7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
			11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
			11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
			9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
		];
		const sP = [ // s'
			8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
			9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
			9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
			15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
			8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
		];

		// The size, in bytes, of a word.
		const word_size = 4;

		// The size, in bytes, of a 16-words block.
		const block_size = 64;

		// The number of the 16-words blocks.
		const t = padded.byteLength / block_size;

		//  The message after padding consists of t 16-word blocks that
		// are denoted with X_i[j], with 0≤i≤(t − 1) and 0≤j≤15.
		const X = (new Array(t))
			.fill(undefined)
			.map((_, i) => j => (
				new DataView(
					padded, i * block_size, block_size
				).getUint32(
					j * word_size,
					true // Little-endian
				)
			));

		//  The result of RIPEMD-160 is contained in five 32-bit words,
		// which form the internal state of the algorithm. The final
		// content of these five 32-bit words is converted to a 160-bit
		// string, again using the little-endian convention.
		let h = [
			0x67452301, // h_0
			0xEFCDAB89, // h_1
			0x98BADCFE, // h_2
			0x10325476, // h_3
			0xC3D2E1F0  // h_4
		];

		for(let i = 0; i < t; ++i)
		{
			let A = h[0], B = h[1], C = h[2], D = h[3], E = h[4];
			let AP = A, BP = B, CP = C, DP = D, EP = E;
			for(let j = 0; j < 80; ++j)
			{
				// Left rounds
				let T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							A,
							RIPEMD160.f(j, B, C, D),
							X[i](r[j]),
							RIPEMD160.K(j)
						),
						s[j]
					),
					E
				);
				A = E;
				E = D;
				D = RIPEMD160.rol32(C, 10);
				C = B;
				B = T;

				// Right rounds
				T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							AP,
							RIPEMD160.f(
								79 - j,
								BP,
								CP,
								DP
							),
							X[i](rP[j]),
							RIPEMD160.KP(j)
						),
						sP[j]
					),
					EP
				);
				AP = EP;
				EP = DP;
				DP = RIPEMD160.rol32(CP, 10);
				CP = BP;
				BP = T;
			}
			let T = RIPEMD160.add_modulo32(h[1], C, DP);
			h[1] = RIPEMD160.add_modulo32(h[2], D, EP);
			h[2] = RIPEMD160.add_modulo32(h[3], E, AP);
			h[3] = RIPEMD160.add_modulo32(h[4], A, BP);
			h[4] = RIPEMD160.add_modulo32(h[0], B, CP);
			h[0] = T;
		}

		//  The final output string then consists of the concatenatation
		// of h_0, h_1, h_2, h_3, and h_4 after converting each h_i to a
		// 4-byte string using the little-endian convention.
		const result = new ArrayBuffer(20);
		const data_view = new DataView(result);
		h.forEach((h_i, i) => data_view.setUint32(i * 4, h_i, true));
		return result;
	}
}

module.exports = {
	RIPEMD160
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9baWRdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tpZF0vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtanNvbnJwYy50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL2Vvc2pzLW51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vW2lkXS8uL3NyYy9lb3Nqcy1ycGNlcnJvci50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL3JpcGVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0dBRUc7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SUFBSSxDQUFDLENBQUM7SUFDeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNwQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2Q7YUFBTTtZQUNILEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDtLQUNKO0lBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUN6QyxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFL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Q0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJlb3Nqcy1qc29ucnBjLWRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW9zanMtanNvbnJwYy50c1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIEBtb2R1bGUgSlNPTi1SUENcbiAqL1xuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcblxuaW1wb3J0IHsgQWJpUHJvdmlkZXIsIEF1dGhvcml0eVByb3ZpZGVyLCBBdXRob3JpdHlQcm92aWRlckFyZ3MsIEJpbmFyeUFiaSB9IGZyb20gXCIuL2Vvc2pzLWFwaS1pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBiYXNlNjRUb0JpbmFyeSwgY29udmVydExlZ2FjeVB1YmxpY0tleXMgfSBmcm9tIFwiLi9lb3Nqcy1udW1lcmljXCI7XG5pbXBvcnQgeyBHZXRBYmlSZXN1bHQsIEdldEJsb2NrUmVzdWx0LCBHZXRDb2RlUmVzdWx0LCBHZXRJbmZvUmVzdWx0LCBHZXRSYXdDb2RlQW5kQWJpUmVzdWx0LCBQdXNoVHJhbnNhY3Rpb25BcmdzIH0gZnJvbSBcIi4vZW9zanMtcnBjLWludGVyZmFjZXNcIjsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuaW1wb3J0IFJwY0Vycm9yIGZyb20gXCIuL2Vvc2pzLXJwY2Vycm9yXCI7XG5cbmZ1bmN0aW9uIGFycmF5VG9IZXgoZGF0YTogVWludDhBcnJheSkge1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGZvciAoY29uc3QgeCBvZiBkYXRhKSB7XG4gICAgICAgIHJlc3VsdCArPSAoXCIwMFwiICsgeC50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIE1ha2UgUlBDIGNhbGxzICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uUnBjIGltcGxlbWVudHMgQXV0aG9yaXR5UHJvdmlkZXIsIEFiaVByb3ZpZGVyIHtcbiAgICBwdWJsaWMgZW5kcG9pbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgZmV0Y2hCdWlsdGluOiAoaW5wdXQ/OiBSZXF1ZXN0IHwgc3RyaW5nLCBpbml0PzogUmVxdWVzdEluaXQpID0+IFByb21pc2U8UmVzcG9uc2U+O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiAgICAqIGBmZXRjaGA6XG4gICAgICogICAgICAqIGJyb3dzZXJzOiBsZWF2ZSBgbnVsbGAgb3IgYHVuZGVmaW5lZGBcbiAgICAgKiAgICAgICogbm9kZTogcHJvdmlkZSBhbiBpbXBsZW1lbnRhdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVuZHBvaW50OiBzdHJpbmcsIGFyZ3M6XG4gICAgICAgIHsgZmV0Y2g/OiAoaW5wdXQ/OiBzdHJpbmcgfCBSZXF1ZXN0LCBpbml0PzogUmVxdWVzdEluaXQpID0+IFByb21pc2U8UmVzcG9uc2U+IH0gPSB7fSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50O1xuICAgICAgICBpZiAoYXJncy5mZXRjaCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaEJ1aWx0aW4gPSBhcmdzLmZldGNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mZXRjaEJ1aWx0aW4gPSAoZ2xvYmFsIGFzIGFueSkuZmV0Y2g7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogUG9zdCBgYm9keWAgdG8gYGVuZHBvaW50ICsgcGF0aGAuIFRocm93cyBkZXRhaWxlZCBlcnJvciBpbmZvcm1hdGlvbiBpbiBgUnBjRXJyb3JgIHdoZW4gYXZhaWxhYmxlLiAqL1xuICAgIHB1YmxpYyBhc3luYyBmZXRjaChwYXRoOiBzdHJpbmcsIGJvZHk6IGFueSkge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGxldCBqc29uO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZiA9IHRoaXMuZmV0Y2hCdWlsdGluO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmKHRoaXMuZW5kcG9pbnQgKyBwYXRoLCB7XG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChqc29uLnByb2Nlc3NlZCAmJiBqc29uLnByb2Nlc3NlZC5leGNlcHQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUnBjRXJyb3IoanNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGUuaXNGZXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJwY0Vycm9yKGpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9hYmlgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2FiaShhY2NvdW50X25hbWU6IHN0cmluZyk6IFByb21pc2U8R2V0QWJpUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9hYmlcIiwgeyBhY2NvdW50X25hbWUgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2FjY291bnRgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2FjY291bnQoYWNjb3VudF9uYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfYWNjb3VudFwiLCB7IGFjY291bnRfbmFtZSB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfYmxvY2tfaGVhZGVyX3N0YXRlYCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgcHVibGljIGFzeW5jIGdldF9ibG9ja19oZWFkZXJfc3RhdGUoYmxvY2tfbnVtX29yX2lkOiBudW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfYmxvY2tfaGVhZGVyX3N0YXRlXCIsIHsgYmxvY2tfbnVtX29yX2lkIH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9ibG9ja2AgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBnZXRfYmxvY2soYmxvY2tfbnVtX29yX2lkOiBudW1iZXIgfCBzdHJpbmcpOiBQcm9taXNlPEdldEJsb2NrUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9ibG9ja1wiLCB7IGJsb2NrX251bV9vcl9pZCB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfY29kZWAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBnZXRfY29kZShhY2NvdW50X25hbWU6IHN0cmluZyk6IFByb21pc2U8R2V0Q29kZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfY29kZVwiLCB7IGFjY291bnRfbmFtZSB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfY3VycmVuY3lfYmFsYW5jZWAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2N1cnJlbmN5X2JhbGFuY2UoY29kZTogc3RyaW5nLCBhY2NvdW50OiBzdHJpbmcsIHN5bWJvbDogc3RyaW5nID0gbnVsbCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9jdXJyZW5jeV9iYWxhbmNlXCIsIHsgY29kZSwgYWNjb3VudCwgc3ltYm9sIH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9jdXJyZW5jeV9zdGF0c2AgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2N1cnJlbmN5X3N0YXRzKGNvZGU6IHN0cmluZywgc3ltYm9sOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfY3VycmVuY3lfc3RhdHNcIiwgeyBjb2RlLCBzeW1ib2wgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2luZm9gICovXG4gICAgcHVibGljIGFzeW5jIGdldF9pbmZvKCk6IFByb21pc2U8R2V0SW5mb1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfaW5mb1wiLCB7fSk7XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X3Byb2R1Y2VyX3NjaGVkdWxlYCAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRfcHJvZHVjZXJfc2NoZWR1bGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X3Byb2R1Y2VyX3NjaGVkdWxlXCIsIHt9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfcHJvZHVjZXJzYCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgcHVibGljIGFzeW5jIGdldF9wcm9kdWNlcnMoanNvbiA9IHRydWUsIGxvd2VyX2JvdW5kID0gXCJcIiwgbGltaXQgPSA1MCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9wcm9kdWNlcnNcIiwgeyBqc29uLCBsb3dlcl9ib3VuZCwgbGltaXQgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X3Jhd19jb2RlX2FuZF9hYmlgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X3Jhd19jb2RlX2FuZF9hYmkoYWNjb3VudF9uYW1lOiBzdHJpbmcpOiBQcm9taXNlPEdldFJhd0NvZGVBbmRBYmlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X3Jhd19jb2RlX2FuZF9hYmlcIiwgeyBhY2NvdW50X25hbWUgfSk7XG4gICAgfVxuXG4gICAgLyoqIGNhbGxzIGAvdjEvY2hhaW4vZ2V0X3Jhd19jb2RlX2FuZF9hYmlgIGFuZCBwdWxscyBvdXQgdW5uZWVkZWQgcmF3IHdhc20gY29kZSAqL1xuICAgIC8vIFRPRE86IHVzZSBgL3YxL2NoYWluL2dldF9yYXdfYWJpYCBkaXJlY3RseSB3aGVuIGl0IGJlY29tZXMgYXZhaWxhYmxlXG4gICAgcHVibGljIGFzeW5jIGdldFJhd0FiaShhY2NvdW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxCaW5hcnlBYmk+IHtcbiAgICAgICAgY29uc3QgcmF3Q29kZUFuZEFiaSA9IGF3YWl0IHRoaXMuZ2V0X3Jhd19jb2RlX2FuZF9hYmkoYWNjb3VudE5hbWUpO1xuICAgICAgICBjb25zdCBhYmkgPSBiYXNlNjRUb0JpbmFyeShyYXdDb2RlQW5kQWJpLmFiaSk7XG4gICAgICAgIHJldHVybiB7IGFjY291bnROYW1lOiByYXdDb2RlQW5kQWJpLmFjY291bnRfbmFtZSwgYWJpIH07XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X3RhYmxlX3Jvd3NgICovXG4gICAgcHVibGljIGFzeW5jIGdldF90YWJsZV9yb3dzKHtcbiAgICAgICAganNvbiA9IHRydWUsXG4gICAgICAgIGNvZGUsXG4gICAgICAgIHNjb3BlLFxuICAgICAgICB0YWJsZSxcbiAgICAgICAgdGFibGVfa2V5ID0gXCJcIixcbiAgICAgICAgbG93ZXJfYm91bmQgPSBcIlwiLFxuICAgICAgICB1cHBlcl9ib3VuZCA9IFwiXCIsXG4gICAgICAgIGluZGV4X3Bvc2l0aW9uID0gMSxcbiAgICAgICAga2V5X3R5cGUgPSBcIlwiLFxuICAgICAgICBsaW1pdCA9IDEwLFxuICAgICB9OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcbiAgICAgICAgICAgIFwiL3YxL2NoYWluL2dldF90YWJsZV9yb3dzXCIsIHtcbiAgICAgICAgICAgICAgICBqc29uLFxuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgc2NvcGUsXG4gICAgICAgICAgICAgICAgdGFibGUsXG4gICAgICAgICAgICAgICAgdGFibGVfa2V5LFxuICAgICAgICAgICAgICAgIGxvd2VyX2JvdW5kLFxuICAgICAgICAgICAgICAgIHVwcGVyX2JvdW5kLFxuICAgICAgICAgICAgICAgIGluZGV4X3Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGtleV90eXBlLFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBzdWJzZXQgb2YgYGF2YWlsYWJsZUtleXNgIG5lZWRlZCB0byBtZWV0IGF1dGhvcml0aWVzIGluIGB0cmFuc2FjdGlvbmAuIEltcGxlbWVudHMgYEF1dGhvcml0eVByb3ZpZGVyYCAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRSZXF1aXJlZEtleXMoYXJnczogQXV0aG9yaXR5UHJvdmlkZXJBcmdzKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gY29udmVydExlZ2FjeVB1YmxpY0tleXMoKGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X3JlcXVpcmVkX2tleXNcIiwge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb246IGFyZ3MudHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBhdmFpbGFibGVfa2V5czogYXJncy5hdmFpbGFibGVLZXlzLFxuICAgICAgICB9KSkucmVxdWlyZWRfa2V5cyk7XG4gICAgfVxuXG4gICAgLyoqIFB1c2ggYSBzZXJpYWxpemVkIHRyYW5zYWN0aW9uICovXG4gICAgcHVibGljIGFzeW5jIHB1c2hfdHJhbnNhY3Rpb24oeyBzaWduYXR1cmVzLCBzZXJpYWxpemVkVHJhbnNhY3Rpb24gfTogUHVzaFRyYW5zYWN0aW9uQXJncyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL3B1c2hfdHJhbnNhY3Rpb25cIiwge1xuICAgICAgICAgICAgc2lnbmF0dXJlcyxcbiAgICAgICAgICAgIGNvbXByZXNzaW9uOiAwLFxuICAgICAgICAgICAgcGFja2VkX2NvbnRleHRfZnJlZV9kYXRhOiBcIlwiLFxuICAgICAgICAgICAgcGFja2VkX3RyeDogYXJyYXlUb0hleChzZXJpYWxpemVkVHJhbnNhY3Rpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9kYl9zaXplL2dldGAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZGJfc2l6ZV9nZXQoKSB7IHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2RiX3NpemUvZ2V0XCIsIHt9KTsgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvaGlzdG9yeS9nZXRfYWN0aW9uc2AgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBoaXN0b3J5X2dldF9hY3Rpb25zKGFjY291bnRfbmFtZTogc3RyaW5nLCBwb3M6IG51bWJlciA9IG51bGwsIG9mZnNldDogbnVtYmVyID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9oaXN0b3J5L2dldF9hY3Rpb25zXCIsIHsgYWNjb3VudF9uYW1lLCBwb3MsIG9mZnNldCB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9oaXN0b3J5L2dldF90cmFuc2FjdGlvbmAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBoaXN0b3J5X2dldF90cmFuc2FjdGlvbihpZDogc3RyaW5nLCBibG9ja19udW1faGludDogbnVtYmVyID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9oaXN0b3J5L2dldF90cmFuc2FjdGlvblwiLCB7IGlkLCBibG9ja19udW1faGludCB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9oaXN0b3J5L2dldF9rZXlfYWNjb3VudHNgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwdWJsaWMgYXN5bmMgaGlzdG9yeV9nZXRfa2V5X2FjY291bnRzKHB1YmxpY19rZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9oaXN0b3J5L2dldF9rZXlfYWNjb3VudHNcIiwgeyBwdWJsaWNfa2V5IH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2hpc3RvcnkvZ2V0X2NvbnRyb2xsZWRfYWNjb3VudHNgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwdWJsaWMgYXN5bmMgaGlzdG9yeV9nZXRfY29udHJvbGxlZF9hY2NvdW50cyhjb250cm9sbGluZ19hY2NvdW50OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvaGlzdG9yeS9nZXRfY29udHJvbGxlZF9hY2NvdW50c1wiLCB7IGNvbnRyb2xsaW5nX2FjY291bnQgfSk7XG4gICAgfVxufSAvLyBKc29uUnBjXG4iLCIvKipcbiAqIEBtb2R1bGUgTnVtZXJpY1xuICovXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdmFyLXJlcXVpcmVzXG5jb25zdCByaXBlbWQxNjAgPSByZXF1aXJlKFwiLi9yaXBlbWRcIikuUklQRU1EMTYwLmhhc2ggYXMgKGE6IFVpbnQ4QXJyYXkpID0+IEFycmF5QnVmZmVyO1xuXG5jb25zdCBiYXNlNThDaGFycyA9IFwiMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5elwiO1xuY29uc3QgYmFzZTY0Q2hhcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuZnVuY3Rpb24gY3JlYXRlX2Jhc2U1OF9tYXAoKSB7XG4gICAgY29uc3QgYmFzZTU4TSA9IEFycmF5KDI1NikuZmlsbCgtMSkgYXMgbnVtYmVyW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlNThDaGFycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBiYXNlNThNW2Jhc2U1OENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U1OE07XG59XG5cbmNvbnN0IGJhc2U1OE1hcCA9IGNyZWF0ZV9iYXNlNThfbWFwKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZV9iYXNlNjRfbWFwKCkge1xuICAgIGNvbnN0IGJhc2U2NE0gPSBBcnJheSgyNTYpLmZpbGwoLTEpIGFzIG51bWJlcltdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZTY0Q2hhcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYmFzZTY0TVtiYXNlNjRDaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gICAgfVxuICAgIGJhc2U2NE1bXCI9XCIuY2hhckNvZGVBdCgwKV0gPSAwO1xuICAgIHJldHVybiBiYXNlNjRNO1xufVxuXG5jb25zdCBiYXNlNjRNYXAgPSBjcmVhdGVfYmFzZTY0X21hcCgpO1xuXG4vKiogSXMgYGJpZ251bWAgYSBuZWdhdGl2ZSBudW1iZXI/ICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZShiaWdudW06IFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gKGJpZ251bVtiaWdudW0ubGVuZ3RoIC0gMV0gJiAweDgwKSAhPT0gMDtcbn1cblxuLyoqIE5lZ2F0ZSBgYmlnbnVtYCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShiaWdudW06IFVpbnQ4QXJyYXkpIHtcbiAgICBsZXQgY2FycnkgPSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmlnbnVtLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHggPSAofmJpZ251bVtpXSAmIDB4ZmYpICsgY2Fycnk7XG4gICAgICAgIGJpZ251bVtpXSA9IHg7XG4gICAgICAgIGNhcnJ5ID0geCA+PiA4O1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxuICogQHBhcmFtIHNpemUgYmlnbnVtIHNpemUgKGJ5dGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHNyY0RpZ2l0ID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoc3JjRGlnaXQgPCBcIjBcIi5jaGFyQ29kZUF0KDApIHx8IHNyY0RpZ2l0ID4gXCI5XCIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhcnJ5ID0gc3JjRGlnaXQgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7ICsraikge1xuICAgICAgICAgICAgY29uc3QgeCA9IHJlc3VsdFtqXSAqIDEwICsgY2Fycnk7XG4gICAgICAgICAgICByZXN1bHRbal0gPSB4O1xuICAgICAgICAgICAgY2FycnkgPSB4ID4+IDg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcnJ5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHNpZ25lZCBkZWNpbWFsIG51bWJlciBpbiBgc2AgdG8gYSBiaWdudW1cbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZERlY2ltYWxUb0JpbmFyeShzaXplOiBudW1iZXIsIHM6IHN0cmluZykge1xuICAgIGNvbnN0IG5lZ2F0aXZlID0gc1swXSA9PT0gXCItXCI7XG4gICAgaWYgKG5lZ2F0aXZlKSB7XG4gICAgICAgIHMgPSBzLnN1YnN0cigxKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gZGVjaW1hbFRvQmluYXJ5KHNpemUsIHMpO1xuICAgIGlmIChuZWdhdGl2ZSkge1xuICAgICAgICBuZWdhdGUocmVzdWx0KTtcbiAgICAgICAgaWYgKCFpc05lZ2F0aXZlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzTmVnYXRpdmUocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvRGVjaW1hbChiaWdudW06IFVpbnQ4QXJyYXksIG1pbkRpZ2l0cyA9IDEpIHtcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheShtaW5EaWdpdHMpLmZpbGwoXCIwXCIuY2hhckNvZGVBdCgwKSkgYXMgbnVtYmVyW107XG4gICAgZm9yIChsZXQgaSA9IGJpZ251bS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBsZXQgY2FycnkgPSBiaWdudW1baV07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gKChyZXN1bHRbal0gLSBcIjBcIi5jaGFyQ29kZUF0KDApKSA8PCA4KSArIGNhcnJ5O1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gXCIwXCIuY2hhckNvZGVBdCgwKSArIHggJSAxMDtcbiAgICAgICAgICAgIGNhcnJ5ID0gKHggLyAxMCkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXCIwXCIuY2hhckNvZGVBdCgwKSArIGNhcnJ5ICUgMTApO1xuICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyAxMCkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzdWx0KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyXG4gKiBAcGFyYW0gbWluRGlnaXRzIDAtcGFkIHJlc3VsdCB0byB0aGlzIG1hbnkgZGlnaXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRCaW5hcnlUb0RlY2ltYWwoYmlnbnVtOiBVaW50OEFycmF5LCBtaW5EaWdpdHMgPSAxKSB7XG4gICAgaWYgKGlzTmVnYXRpdmUoYmlnbnVtKSkge1xuICAgICAgICBjb25zdCB4ID0gYmlnbnVtLnNsaWNlKCk7XG4gICAgICAgIG5lZ2F0ZSh4KTtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgYmluYXJ5VG9EZWNpbWFsKHgsIG1pbkRpZ2l0cyk7XG4gICAgfVxuICAgIHJldHVybiBiaW5hcnlUb0RlY2ltYWwoYmlnbnVtLCBtaW5EaWdpdHMpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS01OCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYXNlNThUb0JpbmFyeShzaXplOiBudW1iZXIsIHM6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBsZXQgY2FycnkgPSBiYXNlNThNYXBbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgaWYgKGNhcnJ5IDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBiYXNlLTU4IHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcmVzdWx0W2pdICogNTggKyBjYXJyeTtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XG4gICAgICAgICAgICBjYXJyeSA9IHggPj4gODtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FycnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhc2UtNTggdmFsdWUgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGEgYmFzZS01OCBudW1iZXJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvQmFzZTU4KGJpZ251bTogVWludDhBcnJheSwgbWluRGlnaXRzID0gMSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdIGFzIG51bWJlcltdO1xuICAgIGZvciAoY29uc3QgYnl0ZSBvZiBiaWdudW0pIHtcbiAgICAgICAgbGV0IGNhcnJ5ID0gYnl0ZTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAoYmFzZTU4TWFwW3Jlc3VsdFtqXV0gPDwgOCkgKyBjYXJyeTtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IGJhc2U1OENoYXJzLmNoYXJDb2RlQXQoeCAlIDU4KTtcbiAgICAgICAgICAgIGNhcnJ5ID0gKHggLyA1OCkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYmFzZTU4Q2hhcnMuY2hhckNvZGVBdChjYXJyeSAlIDU4KSk7XG4gICAgICAgICAgICBjYXJyeSA9IChjYXJyeSAvIDU4KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGJpZ251bSkge1xuICAgICAgICBpZiAoYnl0ZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChcIjFcIi5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucmV2ZXJzZSgpO1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnJlc3VsdCk7XG59XG5cbi8qKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGJhc2UtNjQgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvQmluYXJ5KHM6IHN0cmluZykge1xuICAgIGxldCBsZW4gPSBzLmxlbmd0aDtcbiAgICBpZiAoKGxlbiAmIDMpID09PSAxICYmIHNbbGVuIC0gMV0gPT09IFwiPVwiKSB7XG4gICAgICAgIGxlbiAtPSAxO1xuICAgIH0gLy8gZmMgYXBwZW5kcyBhbiBleHRyYSAnPSdcbiAgICBpZiAoKGxlbiAmIDMpICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhc2UtNjQgdmFsdWUgaXMgbm90IHBhZGRlZCBjb3JyZWN0bHlcIik7XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwcyA9IGxlbiA+PiAyO1xuICAgIGxldCBieXRlcyA9IGdyb3VwcyAqIDM7XG4gICAgaWYgKGxlbiA+IDAgJiYgc1tsZW4gLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgaWYgKHNbbGVuIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgICAgICBieXRlcyAtPSAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZXMgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShieXRlcyk7XG5cbiAgICBmb3IgKGxldCBncm91cCA9IDA7IGdyb3VwIDwgZ3JvdXBzOyArK2dyb3VwKSB7XG4gICAgICAgIGNvbnN0IGRpZ2l0MCA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMCldO1xuICAgICAgICBjb25zdCBkaWdpdDEgPSBiYXNlNjRNYXBbcy5jaGFyQ29kZUF0KGdyb3VwICogNCArIDEpXTtcbiAgICAgICAgY29uc3QgZGlnaXQyID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAyKV07XG4gICAgICAgIGNvbnN0IGRpZ2l0MyA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMyldO1xuICAgICAgICByZXN1bHRbZ3JvdXAgKiAzICsgMF0gPSAoZGlnaXQwIDw8IDIpIHwgKGRpZ2l0MSA+PiA0KTtcbiAgICAgICAgaWYgKGdyb3VwICogMyArIDEgPCBieXRlcykge1xuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDFdID0gKChkaWdpdDEgJiAxNSkgPDwgNCkgfCAoZGlnaXQyID4+IDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncm91cCAqIDMgKyAyIDwgYnl0ZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAyXSA9ICgoZGlnaXQyICYgMykgPDwgNikgfCBkaWdpdDM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEtleSB0eXBlcyB0aGlzIGxpYnJhcnkgc3VwcG9ydHMgKi9cbmV4cG9ydCBjb25zdCBlbnVtIEtleVR5cGUge1xuICAgIGsxID0gMCxcbiAgICByMSA9IDEsXG59XG5cbi8qKiBQdWJsaWMga2V5IGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBwdWJsaWNLZXlEYXRhU2l6ZSA9IDMzO1xuXG4vKiogUHJpdmF0ZSBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IHByaXZhdGVLZXlEYXRhU2l6ZSA9IDMyO1xuXG4vKiogU2lnbmF0dXJlIGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBzaWduYXR1cmVEYXRhU2l6ZSA9IDY1O1xuXG4vKiogUHVibGljIGtleSwgcHJpdmF0ZSBrZXksIG9yIHNpZ25hdHVyZSBpbiBiaW5hcnkgZm9ybSAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXkge1xuICAgIHR5cGU6IEtleVR5cGU7XG4gICAgZGF0YTogVWludDhBcnJheTtcbn1cblxuZnVuY3Rpb24gZGlnZXN0U3VmZml4UmlwZW1kMTYwKGRhdGE6IFVpbnQ4QXJyYXksIHN1ZmZpeDogc3RyaW5nKSB7XG4gICAgY29uc3QgZCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoICsgc3VmZml4Lmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGRbaV0gPSBkYXRhW2ldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1ZmZpeC5sZW5ndGg7ICsraSkge1xuICAgICAgICBkW2RhdGEubGVuZ3RoICsgaV0gPSBzdWZmaXguY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcGVtZDE2MChkKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nVG9LZXkoczogc3RyaW5nLCB0eXBlOiBLZXlUeXBlLCBzaXplOiBudW1iZXIsIHN1ZmZpeDogc3RyaW5nKTogS2V5IHtcbiAgICBjb25zdCB3aG9sZSA9IGJhc2U1OFRvQmluYXJ5KHNpemUgKyA0LCBzKTtcbiAgICBjb25zdCByZXN1bHQgPSB7IHR5cGUsIGRhdGE6IG5ldyBVaW50OEFycmF5KHdob2xlLmJ1ZmZlciwgMCwgc2l6ZSkgfTtcbiAgICBjb25zdCBkaWdlc3QgPSBuZXcgVWludDhBcnJheShkaWdlc3RTdWZmaXhSaXBlbWQxNjAocmVzdWx0LmRhdGEsIHN1ZmZpeCkpO1xuICAgIGlmIChkaWdlc3RbMF0gIT09IHdob2xlW3NpemUgKyAwXSB8fCBkaWdlc3RbMV0gIT09IHdob2xlW3NpemUgKyAxXVxuICAgICAgICB8fCBkaWdlc3RbMl0gIT09IHdob2xlW3NpemUgKyAyXSB8fCBkaWdlc3RbM10gIT09IHdob2xlW3NpemUgKyAzXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjaGVja3N1bSBkb2Vzbid0IG1hdGNoXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBrZXlUb1N0cmluZyhrZXk6IEtleSwgc3VmZml4OiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkoZGlnZXN0U3VmZml4UmlwZW1kMTYwKGtleS5kYXRhLCBzdWZmaXgpKTtcbiAgICBjb25zdCB3aG9sZSA9IG5ldyBVaW50OEFycmF5KGtleS5kYXRhLmxlbmd0aCArIDQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5LmRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgd2hvbGVbaV0gPSBrZXkuZGF0YVtpXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgICAgd2hvbGVbaSArIGtleS5kYXRhLmxlbmd0aF0gPSBkaWdlc3RbaV07XG4gICAgfVxuICAgIHJldHVybiBwcmVmaXggKyBiaW5hcnlUb0Jhc2U1OCh3aG9sZSk7XG59XG5cbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1B1YmxpY0tleShzOiBzdHJpbmcpOiBLZXkge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICBpZiAocy5zdWJzdHIoMCwgMykgPT09IFwiRU9TXCIpIHtcbiAgICAgICAgY29uc3Qgd2hvbGUgPSBiYXNlNThUb0JpbmFyeShwdWJsaWNLZXlEYXRhU2l6ZSArIDQsIHMuc3Vic3RyKDMpKTtcbiAgICAgICAgY29uc3Qga2V5ID0geyB0eXBlOiBLZXlUeXBlLmsxLCBkYXRhOiBuZXcgVWludDhBcnJheShwdWJsaWNLZXlEYXRhU2l6ZSkgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdWJsaWNLZXlEYXRhU2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBrZXkuZGF0YVtpXSA9IHdob2xlW2ldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KHJpcGVtZDE2MChrZXkuZGF0YSkpO1xuICAgICAgICBpZiAoZGlnZXN0WzBdICE9PSB3aG9sZVtwdWJsaWNLZXlEYXRhU2l6ZV0gfHwgZGlnZXN0WzFdICE9PSB3aG9sZVszNF1cbiAgICAgICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbMzVdIHx8IGRpZ2VzdFszXSAhPT0gd2hvbGVbMzZdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjaGVja3N1bSBkb2Vzbid0IG1hdGNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfSBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJQVUJfSzFfXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLmsxLCBwdWJsaWNLZXlEYXRhU2l6ZSwgXCJLMVwiKTtcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9SMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIHB1YmxpY0tleURhdGFTaXplLCBcIlIxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1YmxpY0tleVRvU3RyaW5nKGtleTogS2V5KSB7XG4gICAgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLmsxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gcHVibGljS2V5RGF0YVNpemUpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgXCJLMVwiLCBcIlBVQl9LMV9cIik7XG4gICAgfSBlbHNlIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSAmJiBrZXkuZGF0YS5sZW5ndGggPT09IHB1YmxpY0tleURhdGFTaXplKSB7XG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksIFwiUjFcIiwgXCJQVUJfUjFfXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBJZiBhIGtleSBpcyBpbiB0aGUgbGVnYWN5IGZvcm1hdCAoYEVPU2AgcHJlZml4KSwgdGhlbiBjb252ZXJ0IGl0IHRvIHRoZSBuZXcgZm9ybWF0IChgUFVCX0sxX2ApLlxuICogTGVhdmVzIG90aGVyIGZvcm1hdHMgdW50b3VjaGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVnYWN5UHVibGljS2V5KHM6IHN0cmluZykge1xuICAgIGlmIChzLnN1YnN0cigwLCAzKSA9PT0gXCJFT1NcIikge1xuICAgICAgICByZXR1cm4gcHVibGljS2V5VG9TdHJpbmcoc3RyaW5nVG9QdWJsaWNLZXkocykpO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cblxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXG4gKiBMZWF2ZXMgb3RoZXIgZm9ybWF0cyB1bnRvdWNoZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzKGtleXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIGtleXMubWFwKGNvbnZlcnRMZWdhY3lQdWJsaWNLZXkpO1xufVxuXG4vKiogQ29udmVydCBrZXkgaW4gYHNgIHRvIGJpbmFyeSBmb3JtICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9Qcml2YXRlS2V5KHM6IHN0cmluZyk6IEtleSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHByaXZhdGUga2V5XCIpO1xuICAgIH1cbiAgICBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiUFZUX1IxX1wiKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgcHJpdmF0ZUtleURhdGFTaXplLCBcIlIxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwcml2YXRlIGtleSBmb3JtYXRcIik7XG4gICAgfVxufVxuXG4vKiogQ29udmVydCBga2V5YCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcml2YXRlS2V5VG9TdHJpbmcoa2V5OiBLZXkpIHtcbiAgICBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUucjEpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgXCJSMVwiLCBcIlBWVF9SMV9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHByaXZhdGUga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1NpZ25hdHVyZShzOiBzdHJpbmcpOiBLZXkge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBzaWduYXR1cmVcIik7XG4gICAgfVxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJTSUdfSzFfXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLmsxLCBzaWduYXR1cmVEYXRhU2l6ZSwgXCJLMVwiKTtcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19SMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIHNpZ25hdHVyZURhdGFTaXplLCBcIlIxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIENvbnZlcnQgYHNpZ25hdHVyZWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TdHJpbmcoc2lnbmF0dXJlOiBLZXkpIHtcbiAgICBpZiAoc2lnbmF0dXJlLnR5cGUgPT09IEtleVR5cGUuazEpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgXCJLMVwiLCBcIlNJR19LMV9cIik7XG4gICAgfSBlbHNlIGlmIChzaWduYXR1cmUudHlwZSA9PT0gS2V5VHlwZS5yMSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoc2lnbmF0dXJlLCBcIlIxXCIsIFwiU0lHX1IxX1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgc2lnbmF0dXJlIGZvcm1hdFwiKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgUlBDLUVycm9yXG4gKi9cbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XG5cbi8qKiBIb2xkcyBkZXRhaWxlZCBlcnJvciBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBjRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLyoqIERldGFpbGVkIGVycm9yIGluZm9ybWF0aW9uICovXG4gICAgcHVibGljIGpzb246IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGpzb246IGFueSkge1xuICAgICAgICBpZiAoanNvbi5lcnJvciAmJiBqc29uLmVycm9yLmRldGFpbHMgJiYganNvbi5lcnJvci5kZXRhaWxzLmxlbmd0aCAmJiBqc29uLmVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSkge1xuICAgICAgICAgICAgc3VwZXIoanNvbi5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGpzb24ucHJvY2Vzc2VkICYmIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdCAmJiBqc29uLnByb2Nlc3NlZC5leGNlcHQubWVzc2FnZSkge1xuICAgICAgICAgICAgc3VwZXIoanNvbi5wcm9jZXNzZWQuZXhjZXB0Lm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgUnBjRXJyb3IucHJvdG90eXBlKTtcbiAgICAgICAgdGhpcy5qc29uID0ganNvbjtcbiAgICB9XG59XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dsemxhMDAwL2JhYzgzZGY2ZDNjNTE5MTZjNGRkMGJjOTQ3ZTQ2OTQ3L3Jhdy83ZWUzNDYyYjA5NWFiMjI1ODBkZGFmMTkxZjQ0YTU5MGRhNmZlMzNiL1JJUEVNRC0xNjAuanNcblxuLypcblx0UklQRU1ELTE2MC5qc1xuXG5cdFx0ZGV2ZWxvcGVkXG5cdFx0XHRieSBLLiAoaHR0cHM6Ly9naXRodWIuY29tL3dsemxhMDAwKVxuXHRcdFx0b24gRGVjZW1iZXIgMjctMjksIDIwMTcsXG5cblx0XHRsaWNlbnNlZCB1bmRlclxuXG5cblx0XHR0aGUgTUlUIGxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoYykgMjAxNyBLLlxuXG5cdFx0IFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG5cdFx0b2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cblx0XHRmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcblx0XHRyZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcblx0XHRjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcblx0XHRzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuXHRcdFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG5cdFx0Y29uZGl0aW9uczpcblxuXHRcdCBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuXHRcdGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0IFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5cdFx0RVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG5cdFx0T0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcblx0XHROT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuXHRcdEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuXHRcdFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuXHRcdEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1Jcblx0XHRPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgUklQRU1EMTYwXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdC8vIGh0dHBzOi8vd2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NlYXJjaD9xPWNhY2hlOkNuTE9nb2xUSFlFSjpodHRwczovL3d3dy5jb3NpYy5lc2F0Lmt1bGV1dmVuLmJlL3B1YmxpY2F0aW9ucy9hcnRpY2xlLTMxNy5wZGZcblx0XHQvLyBodHRwOi8vc2hvZGhnYW5nYS5pbmZsaWJuZXQuYWMuaW4vYml0c3RyZWFtLzEwNjAzLzIyOTc4LzEzLzEzX2FwcGVuZGl4LnBkZlxuXHR9XG5cblx0c3RhdGljIGdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUgLyogaW4gYnl0ZXMsIDEgYnl0ZSBpcyA4IGJpdHMuICovKVxuXHR7XG5cdFx0Ly8gIE9idGFpbiB0aGUgbnVtYmVyIG9mIGJ5dGVzIG5lZWRlZCB0byBwYWQgdGhlIG1lc3NhZ2UuXG5cdFx0Ly8gSXQgZG9lcyBub3QgY29udGFpbiB0aGUgc2l6ZSBvZiB0aGUgbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLlxuXHRcdC8qXG5cdFx0XHRodHRwczovL3dlYmNhY2hlLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zZWFyY2g/cT1jYWNoZTpDbkxPZ29sVEhZRUo6aHR0cHM6Ly93d3cuY29zaWMuZXNhdC5rdWxldXZlbi5iZS9wdWJsaWNhdGlvbnMvYXJ0aWNsZS0zMTcucGRmXG5cblx0XHRcdFRoZSBDcnlwdG9ncmFwaGljIEhhc2ggRnVuY3Rpb24gUklQRU1ELTE2MFxuXG5cdFx0XHR3cml0dGVuIGJ5XG5cdFx0XHRcdEJhcnQgUHJlbmVlbCxcblx0XHRcdFx0SGFucyBEb2JiZXJ0aW4sXG5cdFx0XHRcdEFudG9vbiBCb3NzZWxhZXJzXG5cdFx0XHRpblxuXHRcdFx0XHQxOTk3LlxuXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0XHTCpzUgICAgIERlc2NyaXB0aW9uIG9mIFJJUEVNRC0xNjBcblxuXHRcdFx0Li4uLi4uXG5cblx0XHRcdCBJbiBvcmRlciB0byBndWFyYW50ZWUgdGhhdCB0aGUgdG90YWwgaW5wdXQgc2l6ZSBpcyBhXG5cdFx0XHRtdWx0aXBsZSBvZiA1MTIgYml0cywgdGhlIGlucHV0IGlzIHBhZGRlZCBpbiB0aGUgc2FtZVxuXHRcdFx0d2F5IGFzIGZvciBhbGwgdGhlIG1lbWJlcnMgb2YgdGhlIE1ENC1mYW1pbHk6IG9uZVxuXHRcdFx0YXBwZW5kcyBhIHNpbmdsZSAxIGZvbGxvd2VkIGJ5IGEgc3RyaW5nIG9mIDBzICh0aGVcblx0XHRcdG51bWJlciBvZiAwcyBsaWVzIGJldHdlZW4gMCBhbmQgNTExKTsgdGhlIGxhc3QgNjQgYml0c1xuXHRcdFx0b2YgdGhlIGV4dGVuZGVkIGlucHV0IGNvbnRhaW4gdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvblxuXHRcdFx0b2YgdGhlIGlucHV0IHNpemUgaW4gYml0cywgbGVhc3Qgc2lnbmlmaWNhbnQgYnl0ZSBmaXJzdC5cblx0XHQqL1xuXHRcdC8qXG5cdFx0XHRodHRwczovL3Rvb2xzLmlldGYub3JnL3JmYy9yZmMxMTg2LnR4dFxuXG5cdFx0XHRSRkMgMTE4NjogTUQ0IE1lc3NhZ2UgRGlnZXN0IEFsZ29yaXRobS5cblxuXHRcdFx0d3JpdHRlbiBieVxuXHRcdFx0XHRSb25hbGQgTGlubiBSaXZlc3Rcblx0XHRcdGluXG5cdFx0XHRcdE9jdG9iZXIgMTk5MC5cblxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFx0wqczICAgICBNRDQgQWxnb3JpdGhtIERlc2NyaXB0aW9uXG5cblx0XHRcdC4uLi4uLlxuXG5cdFx0XHRTdGVwIDEuIEFwcGVuZCBwYWRkaW5nIGJpdHNcblxuXHRcdFx0IFRoZSBtZXNzYWdlIGlzIFwicGFkZGVkXCIgKGV4dGVuZGVkKSBzbyB0aGF0IGl0cyBsZW5ndGhcblx0XHRcdChpbiBiaXRzKSBpcyBjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyLiBUaGF0IGlzLCB0aGVcblx0XHRcdG1lc3NhZ2UgaXMgZXh0ZW5kZWQgc28gdGhhdCBpdCBpcyBqdXN0IDY0IGJpdHMgc2h5IG9mXG5cdFx0XHRiZWluZyBhIG11bHRpcGxlIG9mIDUxMiBiaXRzIGxvbmcuIFBhZGRpbmcgaXMgYWx3YXlzXG5cdFx0XHRwZXJmb3JtZWQsIGV2ZW4gaWYgdGhlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZSBpcyBhbHJlYWR5XG5cdFx0XHRjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyIChpbiB3aGljaCBjYXNlIDUxMiBiaXRzIG9mXG5cdFx0XHRwYWRkaW5nIGFyZSBhZGRlZCkuXG5cblx0XHRcdCBQYWRkaW5nIGlzIHBlcmZvcm1lZCBhcyBmb2xsb3dzOiBhIHNpbmdsZSBcIjFcIiBiaXQgaXNcblx0XHRcdGFwcGVuZGVkIHRvIHRoZSBtZXNzYWdlLCBhbmQgdGhlbiBlbm91Z2ggemVybyBiaXRzIGFyZVxuXHRcdFx0YXBwZW5kZWQgc28gdGhhdCB0aGUgbGVuZ3RoIGluIGJpdHMgb2YgdGhlIHBhZGRlZFxuXHRcdFx0bWVzc2FnZSBiZWNvbWVzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuXG5cblx0XHRcdFN0ZXAgMi4gQXBwZW5kIGxlbmd0aFxuXG5cdFx0XHQgQSA2NC1iaXQgcmVwcmVzZW50YXRpb24gb2YgYiAodGhlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZVxuXHRcdFx0YmVmb3JlIHRoZSBwYWRkaW5nIGJpdHMgd2VyZSBhZGRlZCkgaXMgYXBwZW5kZWQgdG8gdGhlXG5cdFx0XHRyZXN1bHQgb2YgdGhlIHByZXZpb3VzIHN0ZXAuIEluIHRoZSB1bmxpa2VseSBldmVudCB0aGF0XG5cdFx0XHRiIGlzIGdyZWF0ZXIgdGhhbiAyXjY0LCB0aGVuIG9ubHkgdGhlIGxvdy1vcmRlciA2NCBiaXRzXG5cdFx0XHRvZiBiIGFyZSB1c2VkLiAoVGhlc2UgYml0cyBhcmUgYXBwZW5kZWQgYXMgdHdvIDMyLWJpdFxuXHRcdFx0d29yZHMgYW5kIGFwcGVuZGVkIGxvdy1vcmRlciB3b3JkIGZpcnN0IGluIGFjY29yZGFuY2Vcblx0XHRcdHdpdGggdGhlIHByZXZpb3VzIGNvbnZlbnRpb25zLilcblxuXHRcdFx0IEF0IHRoaXMgcG9pbnQgdGhlIHJlc3VsdGluZyBtZXNzYWdlIChhZnRlciBwYWRkaW5nIHdpdGhcblx0XHRcdGJpdHMgYW5kIHdpdGggYikgaGFzIGEgbGVuZ3RoIHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGVcblx0XHRcdG9mIDUxMiBiaXRzLiBFcXVpdmFsZW50bHksIHRoaXMgbWVzc2FnZSBoYXMgYSBsZW5ndGhcblx0XHRcdHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGUgb2YgMTYgKDMyLWJpdCkgd29yZHMuIExldFxuXHRcdFx0TVswIC4uLiBOLTFdIGRlbm90ZSB0aGUgd29yZHMgb2YgdGhlIHJlc3VsdGluZyBtZXNzYWdlLFxuXHRcdFx0d2hlcmUgTiBpcyBhIG11bHRpcGxlIG9mIDE2LlxuXHRcdCovXG5cdFx0Ly8gaHR0cHM6Ly9jcnlwdG8uc3RhY2tleGNoYW5nZS5jb20vYS8zMjQwNy81NDU2OFxuXHRcdC8qXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMVxuXHRcdFx0XHRbMCBiaXQ6IG1lc3NhZ2UuXVxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cblxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDJcblx0XHRcdFx0WzUxMi1iaXRzOiBtZXNzYWdlXVxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cblxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDNcblx0XHRcdFx0Wyg1MTIgLSA2NCA9IDQ0OCkgYml0czogbWVzc2FnZS5dXG5cdFx0XHRcdFsxIGJpdDogMS5dXG5cdFx0XHRcdFs1MTEgYml0czogMC5dXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxuXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgNFxuXHRcdFx0XHRbKDUxMiAtIDY1ID0gNDQ3KSBiaXRzOiBtZXNzYWdlLl1cblx0XHRcdFx0WzEgYml0OiAxLl1cblx0XHRcdFx0WzAgYml0OiAwLl1cblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXG5cdFx0Ki9cblx0XHQvLyBUaGUgbnVtYmVyIG9mIHBhZGRpbmcgemVybyBiaXRzOlxuXHRcdC8vICAgICAgNTExIC0gW3sobWVzc2FnZSBzaXplIGluIGJpdHMpICsgNjR9IChtb2QgNTEyKV1cblx0XHRyZXR1cm4gNjQgLSAoKG1lc3NhZ2Vfc2l6ZSArIDgpICYgMGIwMDExMTExMSAvKiA2MyAqLyk7XG5cdH1cblx0c3RhdGljIHBhZChtZXNzYWdlIC8qIEFuIEFycmF5QnVmZmVyLiAqLylcblx0e1xuXHRcdGNvbnN0IG1lc3NhZ2Vfc2l6ZSA9IG1lc3NhZ2UuYnl0ZUxlbmd0aDtcblx0XHRjb25zdCBuX3BhZCA9IFJJUEVNRDE2MC5nZXRfbl9wYWRfYnl0ZXMobWVzc2FnZV9zaXplKTtcblxuXHRcdC8vICBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIGlzICgoMiAqKiA1MykgLSAxKSBhbmRcblx0XHQvLyBiaXR3aXNlIG9wZXJhdGlvbiBpbiBKYXZhc2NyaXB0IGlzIGRvbmUgb24gMzItYml0cyBvcGVyYW5kcy5cblx0XHRjb25zdCBkaXZtb2QgPSAoZGl2aWRlbmQsIGRpdmlzb3IpID0+IFtcblx0XHRcdE1hdGguZmxvb3IoZGl2aWRlbmQgLyBkaXZpc29yKSxcblx0XHRcdGRpdmlkZW5kICUgZGl2aXNvclxuXHRcdF07XG5cdFx0LypcblRvIHNoaWZ0XG5cbiAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCBvXG4gICAwMDAwMDAwMCA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NZXRob2QgIzFcblxuICAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xuICAgWzAwMDAwMDAwIDAwMEFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBXSAoPEE+IGNhcHR1cmVkKVxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBMDAwXSAoPEE+IHNoaWZ0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBjYXB0dXJlZCkgW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCXVxuICAgICAgICAgICAgICAgICAgICAgKDxCPiBzaGlmdGVkKSBbQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUJCQl0gKDxBPiAmIDxCXzI+IG1lcmdlZClcbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUJCQl1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXG5cblx0XHRjb25zdCB1aW50MzJfbWF4X3BsdXNfMSA9IDB4MTAwMDAwMDAwOyAvLyAoMiAqKiAzMilcblx0XHRjb25zdCBbXG5cdFx0XHRtc2dfYnl0ZV9zaXplX21vc3QsIC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAyMSkgLSAxXS5cblx0XHRcdG1zZ19ieXRlX3NpemVfbGVhc3QgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDMyKSAtIDFdLlxuXHRcdF0gPSBkaXZtb2QobWVzc2FnZV9zaXplLCB1aW50MzJfbWF4X3BsdXNfMSk7XG5cdFx0Y29uc3QgW1xuXHRcdFx0Y2FycnksIC8vIFZhbHVlIHJhbmdlIFswLCA3XS5cblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gOF0uXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX2J5dGVfc2l6ZV9sZWFzdCAqIDgsIHVpbnQzMl9tYXhfcGx1c18xKTtcblx0XHRjb25zdCBtZXNzYWdlX2JpdF9zaXplX21vc3QgPSBtZXNzYWdlX2J5dGVfc2l6ZV9tb3N0ICogOFxuXHRcdFx0KyBjYXJyeTsgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDI0KSAtIDFdLlxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NZXRob2QgIzJcbiAgICAwMDAwMDAwMCAwMDA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cbiAgICAgIFswMDAwMCAwMDBBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQSAgQUFBXSAoPEE+IGNhcHR1cmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gY2FwdHVyZWQpIFswMDBCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBzaGlmdGVkKSBbQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUFdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxuICAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxuXG5cdFx0Ki9cblx0XHRjb25zdCBbXG5cdFx0XHRtc2dfYml0X3NpemVfbW9zdCxcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdFxuXHRcdF0gPSBkaXZtb2QobWVzc2FnZV9zaXplLCA1MzY4NzA5MTIgLyogKDIgKiogMjkpICovKVxuXHRcdFx0Lm1hcCgoeCwgaW5kZXgpID0+IChpbmRleCA/ICh4ICogOCkgOiB4KSk7XG5cblx0XHQvLyBgQXJyYXlCdWZmZXIudHJhbnNmZXIoKWAgaXMgbm90IHN1cHBvcnRlZC5cblx0XHRjb25zdCBwYWRkZWQgPSBuZXcgVWludDhBcnJheShtZXNzYWdlX3NpemUgKyBuX3BhZCArIDgpO1xuXHRcdHBhZGRlZC5zZXQobmV3IFVpbnQ4QXJyYXkobWVzc2FnZSksIDApO1xuXHRcdGNvbnN0IGRhdGFfdmlldyA9IG5ldyBEYXRhVmlldyhwYWRkZWQuYnVmZmVyKTtcblx0XHRkYXRhX3ZpZXcuc2V0VWludDgobWVzc2FnZV9zaXplLCAwYjEwMDAwMDAwKTtcblx0XHRkYXRhX3ZpZXcuc2V0VWludDMyKFxuXHRcdFx0bWVzc2FnZV9zaXplICsgbl9wYWQsXG5cdFx0XHRtc2dfYml0X3NpemVfbGVhc3QsXG5cdFx0XHR0cnVlIC8vIExpdHRsZS1lbmRpYW5cblx0XHQpO1xuXHRcdGRhdGFfdmlldy5zZXRVaW50MzIoXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCArIDQsXG5cdFx0XHRtc2dfYml0X3NpemVfbW9zdCxcblx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxuXHRcdCk7XG5cblx0XHRyZXR1cm4gcGFkZGVkLmJ1ZmZlcjtcblx0fVxuXG5cdHN0YXRpYyBmKGosIHgsIHksIHopXG5cdHtcblx0XHRpZigwIDw9IGogJiYgaiA8PSAxNSlcblx0XHR7IC8vIEV4Y2x1c2l2ZS1PUlxuXHRcdFx0cmV0dXJuIHggXiB5IF4gejtcblx0XHR9XG5cdFx0aWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxuXHRcdHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXG5cdFx0XHRyZXR1cm4gKHggJiB5KSB8ICh+eCAmIHopO1xuXHRcdH1cblx0XHRpZigzMiA8PSBqICYmIGogPD0gNDcpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICh4IHwgfnkpIF4gejtcblx0XHR9XG5cdFx0aWYoNDggPD0gaiAmJiBqIDw9IDYzKVxuXHRcdHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXG5cdFx0XHRyZXR1cm4gKHggJiB6KSB8ICh5ICYgfnopO1xuXHRcdH1cblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHggXiAoeSB8IH56KTtcblx0XHR9XG5cdH1cblx0c3RhdGljIEsoailcblx0e1xuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxuXHRcdHtcblx0XHRcdHJldHVybiAweDAwMDAwMDAwO1xuXHRcdH1cblx0XHRpZigxNiA8PSBqICYmIGogPD0gMzEpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLlNRUlQyKVxuXHRcdFx0cmV0dXJuIDB4NUE4Mjc5OTk7XG5cdFx0fVxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0Nylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCgzKSlcblx0XHRcdHJldHVybiAweDZFRDlFQkExO1xuXHRcdH1cblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoNSkpXG5cdFx0XHRyZXR1cm4gMHg4RjFCQkNEQztcblx0XHR9XG5cdFx0aWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDcpKVxuXHRcdFx0cmV0dXJuIDB4QTk1M0ZENEU7XG5cdFx0fVxuXHR9XG5cdHN0YXRpYyBLUChqKSAvLyBLJ1xuXHR7XG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMikpXG5cdFx0XHRyZXR1cm4gMHg1MEEyOEJFNjtcblx0XHR9XG5cdFx0aWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDMpKVxuXHRcdFx0cmV0dXJuIDB4NUM0REQxMjQ7XG5cdFx0fVxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0Nylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg1KSlcblx0XHRcdHJldHVybiAweDZENzAzRUYzO1xuXHRcdH1cblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoNykpXG5cdFx0XHRyZXR1cm4gMHg3QTZENzZFOTtcblx0XHR9XG5cdFx0aWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxuXHRcdHtcblx0XHRcdHJldHVybiAweDAwMDAwMDAwO1xuXHRcdH1cblx0fVxuXHRzdGF0aWMgYWRkX21vZHVsbzMyKC8qIC4uLi4uLiAqLylcblx0e1xuXHRcdC8vIDEuICBNb2R1bG8gYWRkaXRpb24gKGFkZGl0aW9uIG1vZHVsbykgaXMgYXNzb2NpYXRpdmUuXG5cdFx0Ly8gICAgaHR0cHM6Ly9wcm9vZndpa2kub3JnL3dpa2kvTW9kdWxvX0FkZGl0aW9uX2lzX0Fzc29jaWF0aXZlXG4gXHRcdC8vIDIuICBCaXR3aXNlIG9wZXJhdGlvbiBpbiBKYXZhc2NyaXB0XG5cdFx0Ly8gICAgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzXG5cdFx0Ly8gICAgYW5kIHJlc3VsdHMgaW4gYSAzMi1iaXRzIHZhbHVlLlxuXHRcdHJldHVybiBBcnJheVxuXHRcdFx0LmZyb20oYXJndW1lbnRzKVxuXHRcdFx0LnJlZHVjZSgoYSwgYikgPT4gKGEgKyBiKSwgMCkgfCAwO1xuXHR9XG5cdHN0YXRpYyByb2wzMih2YWx1ZSwgY291bnQpXG5cdHsgLy8gQ3ljbGljIGxlZnQgc2hpZnQgKHJvdGF0ZSkgb24gMzItYml0cyB2YWx1ZS5cblx0XHRyZXR1cm4gKHZhbHVlIDw8IGNvdW50KSB8ICh2YWx1ZSA+Pj4gKDMyIC0gY291bnQpKTtcblx0fVxuXHRzdGF0aWMgaGFzaChtZXNzYWdlIC8qIEFuIEFycmF5QnVmZmVyLiAqLylcblx0e1xuXHRcdC8vLy8vLy8vLy8gICAgICAgUGFkZGluZyAgICAgICAvLy8vLy8vLy8vXG5cblx0XHQvLyBUaGUgcGFkZGVkIG1lc3NhZ2UuXG5cdFx0Y29uc3QgcGFkZGVkID0gUklQRU1EMTYwLnBhZChtZXNzYWdlKTtcblxuXHRcdC8vLy8vLy8vLy8gICAgIENvbXByZXNzaW9uICAgICAvLy8vLy8vLy8vXG5cblx0XHQvLyBNZXNzYWdlIHdvcmQgc2VsZWN0b3JzLlxuXHRcdGNvbnN0IHIgPSBbXG5cdFx0XHQwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxuXHRcdFx0NywgNCwgMTMsIDEsIDEwLCA2LCAxNSwgMywgMTIsIDAsIDksIDUsIDIsIDE0LCAxMSwgOCxcblx0XHRcdDMsIDEwLCAxNCwgNCwgOSwgMTUsIDgsIDEsIDIsIDcsIDAsIDYsIDEzLCAxMSwgNSwgMTIsXG5cdFx0XHQxLCA5LCAxMSwgMTAsIDAsIDgsIDEyLCA0LCAxMywgMywgNywgMTUsIDE0LCA1LCA2LCAyLFxuXHRcdFx0NCwgMCwgNSwgOSwgNywgMTIsIDIsIDEwLCAxNCwgMSwgMywgOCwgMTEsIDYsIDE1LCAxM1xuXHRcdF07XG5cdFx0Y29uc3QgclAgPSBbIC8vIHInXG5cdFx0XHQ1LCAxNCwgNywgMCwgOSwgMiwgMTEsIDQsIDEzLCA2LCAxNSwgOCwgMSwgMTAsIDMsIDEyLFxuXHRcdFx0NiwgMTEsIDMsIDcsIDAsIDEzLCA1LCAxMCwgMTQsIDE1LCA4LCAxMiwgNCwgOSwgMSwgMixcblx0XHRcdDE1LCA1LCAxLCAzLCA3LCAxNCwgNiwgOSwgMTEsIDgsIDEyLCAyLCAxMCwgMCwgNCwgMTMsXG5cdFx0XHQ4LCA2LCA0LCAxLCAzLCAxMSwgMTUsIDAsIDUsIDEyLCAyLCAxMywgOSwgNywgMTAsIDE0LFxuXHRcdFx0MTIsIDE1LCAxMCwgNCwgMSwgNSwgOCwgNywgNiwgMiwgMTMsIDE0LCAwLCAzLCA5LCAxMVxuXHRcdF07XG5cblx0XHQvLyBBbW91bnRzIGZvciAncm90YXRlIGxlZnQnIG9wZXJhdGlvbi5cblx0XHRjb25zdCBzID0gW1xuXHRcdFx0MTEsIDE0LCAxNSwgMTIsIDUsIDgsIDcsIDksIDExLCAxMywgMTQsIDE1LCA2LCA3LCA5LCA4LFxuXHRcdFx0NywgNiwgOCwgMTMsIDExLCA5LCA3LCAxNSwgNywgMTIsIDE1LCA5LCAxMSwgNywgMTMsIDEyLFxuXHRcdFx0MTEsIDEzLCA2LCA3LCAxNCwgOSwgMTMsIDE1LCAxNCwgOCwgMTMsIDYsIDUsIDEyLCA3LCA1LFxuXHRcdFx0MTEsIDEyLCAxNCwgMTUsIDE0LCAxNSwgOSwgOCwgOSwgMTQsIDUsIDYsIDgsIDYsIDUsIDEyLFxuXHRcdFx0OSwgMTUsIDUsIDExLCA2LCA4LCAxMywgMTIsIDUsIDEyLCAxMywgMTQsIDExLCA4LCA1LCA2XG5cdFx0XTtcblx0XHRjb25zdCBzUCA9IFsgLy8gcydcblx0XHRcdDgsIDksIDksIDExLCAxMywgMTUsIDE1LCA1LCA3LCA3LCA4LCAxMSwgMTQsIDE0LCAxMiwgNixcblx0XHRcdDksIDEzLCAxNSwgNywgMTIsIDgsIDksIDExLCA3LCA3LCAxMiwgNywgNiwgMTUsIDEzLCAxMSxcblx0XHRcdDksIDcsIDE1LCAxMSwgOCwgNiwgNiwgMTQsIDEyLCAxMywgNSwgMTQsIDEzLCAxMywgNywgNSxcblx0XHRcdDE1LCA1LCA4LCAxMSwgMTQsIDE0LCA2LCAxNCwgNiwgOSwgMTIsIDksIDEyLCA1LCAxNSwgOCxcblx0XHRcdDgsIDUsIDEyLCA5LCAxMiwgNSwgMTQsIDYsIDgsIDEzLCA2LCA1LCAxNSwgMTMsIDExLCAxMVxuXHRcdF07XG5cblx0XHQvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgd29yZC5cblx0XHRjb25zdCB3b3JkX3NpemUgPSA0O1xuXG5cdFx0Ly8gVGhlIHNpemUsIGluIGJ5dGVzLCBvZiBhIDE2LXdvcmRzIGJsb2NrLlxuXHRcdGNvbnN0IGJsb2NrX3NpemUgPSA2NDtcblxuXHRcdC8vIFRoZSBudW1iZXIgb2YgdGhlIDE2LXdvcmRzIGJsb2Nrcy5cblx0XHRjb25zdCB0ID0gcGFkZGVkLmJ5dGVMZW5ndGggLyBibG9ja19zaXplO1xuXG5cdFx0Ly8gIFRoZSBtZXNzYWdlIGFmdGVyIHBhZGRpbmcgY29uc2lzdHMgb2YgdCAxNi13b3JkIGJsb2NrcyB0aGF0XG5cdFx0Ly8gYXJlIGRlbm90ZWQgd2l0aCBYX2lbal0sIHdpdGggMOKJpGniiaQodCDiiJIgMSkgYW5kIDDiiaRq4omkMTUuXG5cdFx0Y29uc3QgWCA9IChuZXcgQXJyYXkodCkpXG5cdFx0XHQuZmlsbCh1bmRlZmluZWQpXG5cdFx0XHQubWFwKChfLCBpKSA9PiBqID0+IChcblx0XHRcdFx0bmV3IERhdGFWaWV3KFxuXHRcdFx0XHRcdHBhZGRlZCwgaSAqIGJsb2NrX3NpemUsIGJsb2NrX3NpemVcblx0XHRcdFx0KS5nZXRVaW50MzIoXG5cdFx0XHRcdFx0aiAqIHdvcmRfc2l6ZSxcblx0XHRcdFx0XHR0cnVlIC8vIExpdHRsZS1lbmRpYW5cblx0XHRcdFx0KVxuXHRcdFx0KSk7XG5cblx0XHQvLyAgVGhlIHJlc3VsdCBvZiBSSVBFTUQtMTYwIGlzIGNvbnRhaW5lZCBpbiBmaXZlIDMyLWJpdCB3b3Jkcyxcblx0XHQvLyB3aGljaCBmb3JtIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgYWxnb3JpdGhtLiBUaGUgZmluYWxcblx0XHQvLyBjb250ZW50IG9mIHRoZXNlIGZpdmUgMzItYml0IHdvcmRzIGlzIGNvbnZlcnRlZCB0byBhIDE2MC1iaXRcblx0XHQvLyBzdHJpbmcsIGFnYWluIHVzaW5nIHRoZSBsaXR0bGUtZW5kaWFuIGNvbnZlbnRpb24uXG5cdFx0bGV0IGggPSBbXG5cdFx0XHQweDY3NDUyMzAxLCAvLyBoXzBcblx0XHRcdDB4RUZDREFCODksIC8vIGhfMVxuXHRcdFx0MHg5OEJBRENGRSwgLy8gaF8yXG5cdFx0XHQweDEwMzI1NDc2LCAvLyBoXzNcblx0XHRcdDB4QzNEMkUxRjAgIC8vIGhfNFxuXHRcdF07XG5cblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdDsgKytpKVxuXHRcdHtcblx0XHRcdGxldCBBID0gaFswXSwgQiA9IGhbMV0sIEMgPSBoWzJdLCBEID0gaFszXSwgRSA9IGhbNF07XG5cdFx0XHRsZXQgQVAgPSBBLCBCUCA9IEIsIENQID0gQywgRFAgPSBELCBFUCA9IEU7XG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgODA7ICsrailcblx0XHRcdHtcblx0XHRcdFx0Ly8gTGVmdCByb3VuZHNcblx0XHRcdFx0bGV0IFQgPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxuXHRcdFx0XHRcdFJJUEVNRDE2MC5yb2wzMihcblx0XHRcdFx0XHRcdFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXG5cdFx0XHRcdFx0XHRcdEEsXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5mKGosIEIsIEMsIEQpLFxuXHRcdFx0XHRcdFx0XHRYW2ldKHJbal0pLFxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuSyhqKVxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdHNbal1cblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdEVcblx0XHRcdFx0KTtcblx0XHRcdFx0QSA9IEU7XG5cdFx0XHRcdEUgPSBEO1xuXHRcdFx0XHREID0gUklQRU1EMTYwLnJvbDMyKEMsIDEwKTtcblx0XHRcdFx0QyA9IEI7XG5cdFx0XHRcdEIgPSBUO1xuXG5cdFx0XHRcdC8vIFJpZ2h0IHJvdW5kc1xuXHRcdFx0XHRUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcblx0XHRcdFx0XHRSSVBFTUQxNjAucm9sMzIoXG5cdFx0XHRcdFx0XHRSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxuXHRcdFx0XHRcdFx0XHRBUCxcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLmYoXG5cdFx0XHRcdFx0XHRcdFx0NzkgLSBqLFxuXHRcdFx0XHRcdFx0XHRcdEJQLFxuXHRcdFx0XHRcdFx0XHRcdENQLFxuXHRcdFx0XHRcdFx0XHRcdERQXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFhbaV0oclBbal0pLFxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuS1Aoailcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRzUFtqXVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0RVBcblx0XHRcdFx0KTtcblx0XHRcdFx0QVAgPSBFUDtcblx0XHRcdFx0RVAgPSBEUDtcblx0XHRcdFx0RFAgPSBSSVBFTUQxNjAucm9sMzIoQ1AsIDEwKTtcblx0XHRcdFx0Q1AgPSBCUDtcblx0XHRcdFx0QlAgPSBUO1xuXHRcdFx0fVxuXHRcdFx0bGV0IFQgPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMV0sIEMsIERQKTtcblx0XHRcdGhbMV0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMl0sIEQsIEVQKTtcblx0XHRcdGhbMl0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbM10sIEUsIEFQKTtcblx0XHRcdGhbM10gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbNF0sIEEsIEJQKTtcblx0XHRcdGhbNF0gPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKGhbMF0sIEIsIENQKTtcblx0XHRcdGhbMF0gPSBUO1xuXHRcdH1cblxuXHRcdC8vICBUaGUgZmluYWwgb3V0cHV0IHN0cmluZyB0aGVuIGNvbnNpc3RzIG9mIHRoZSBjb25jYXRlbmF0YXRpb25cblx0XHQvLyBvZiBoXzAsIGhfMSwgaF8yLCBoXzMsIGFuZCBoXzQgYWZ0ZXIgY29udmVydGluZyBlYWNoIGhfaSB0byBhXG5cdFx0Ly8gNC1ieXRlIHN0cmluZyB1c2luZyB0aGUgbGl0dGxlLWVuZGlhbiBjb252ZW50aW9uLlxuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheUJ1ZmZlcigyMCk7XG5cdFx0Y29uc3QgZGF0YV92aWV3ID0gbmV3IERhdGFWaWV3KHJlc3VsdCk7XG5cdFx0aC5mb3JFYWNoKChoX2ksIGkpID0+IGRhdGFfdmlldy5zZXRVaW50MzIoaSAqIDQsIGhfaSwgdHJ1ZSkpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFJJUEVNRDE2MFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==