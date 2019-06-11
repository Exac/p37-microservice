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
var sinon_express_mock_1 = require("sinon-express-mock");
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
var sinon_express_mock_2 = require("sinon-express-mock");
exports.mockReq = sinon_express_mock_2.mockReq;
var sinon_express_mock_3 = require("sinon-express-mock");
exports.mockRes = sinon_express_mock_3.mockRes;
exports.mockExpress = {
    all: exports.sinon.stub(),
    application: exports.sinon.stub(),
    delete: exports.sinon.stub(),
    get: exports.sinon.stub(),
    head: exports.sinon.stub(),
    locals: exports.sinon.stub(),
    map: exports.sinon.stub(),
    mime: exports.sinon.stub().returns('fake_mime'),
    options: exports.sinon.stub(),
    patch: exports.sinon.stub(),
    post: exports.sinon.stub(),
    put: exports.sinon.stub(),
    request: exports.sinon.stub().returns(sinon_express_mock_1.mockReq),
    resource: exports.sinon.stub(),
    response: exports.sinon.stub().returns(sinon_express_mock_1.mockRes),
    router: exports.sinon.stub().returns('fake_router'),
    routes: exports.sinon.stub(),
    settings: exports.sinon.stub(),
    use: exports.sinon.stub().returns({}),
    version: exports.sinon.stub().returns('0'),
    listen: exports.sinon.stub().returns({}),
    configure: exports.sinon.stub().returns({}),
    createApplication: exports.sinon.stub().returns({}),
    createServer: exports.sinon.stub().returns({}),
    defaultConfiguration: exports.sinon.stub().returns({}),
    disable: exports.sinon.stub().returns({}),
    disabled: exports.sinon.stub().returns({}),
    enable: exports.sinon.stub().returns({}),
    enabled: exports.sinon.stub().returns({}),
    engine: exports.sinon.stub().returns({}),
    init: exports.sinon.stub().returns({}),
    param: exports.sinon.stub().returns({}),
    path: exports.sinon.stub().returns({}),
    render: exports.sinon.stub().returns({}),
    route: exports.sinon.stub().returns({}),
    set: exports.sinon.stub().returns({}),
};
//# sourceMappingURL=test.js.map