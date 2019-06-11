"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_chai_1 = __importDefault(require("sinon-chai"));
var chai = __importStar(require("chai"));
var sinon_1 = require("sinon");
chai.use(sinon_chai_1.default);
exports.sinon = sinon_1.createSandbox({ useFakeServer: true });
var chai_1 = require("chai");
exports.expect = chai_1.expect;
exports.assert = chai_1.assert;
var mocha_1 = require("mocha");
exports.after = mocha_1.after;
exports.afterEach = mocha_1.afterEach;
exports.before = mocha_1.before;
exports.beforeEach = mocha_1.beforeEach;
exports.describe = mocha_1.describe;
exports.it = mocha_1.it;
//# sourceMappingURL=test.js.map