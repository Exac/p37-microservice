"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var node_config_ts_1 = require("node-config-ts");
var test_1 = require("./test");
var index_1 = __importDefault(require("./index"));
var express_factory_1 = __importDefault(require("./shared/express_factory"));
test_1.describe('index', function () {
    test_1.describe('main()', function () {
        test_1.afterEach(function () {
            test_1.sinon.reset();
        });
        test_1.it('creates a frontend microservice on the happy path', function () { return __awaiter(_this, void 0, void 0, function () {
            var configStub, constructorStub, expressFactoryStub;
            return __generator(this, function (_a) {
                configStub = test_1.sinon.stub(node_config_ts_1.config, 'MICROSERVICE').returns('FRONTEND');
                constructorStub = test_1.sinon.stub().callsFake(function () {
                });
                Object.setPrototypeOf(express_factory_1.default, constructorStub);
                expressFactoryStub = test_1.sinon.stub(express_factory_1.default);
                index_1.default();
                test_1.expect(constructorStub).to.have.callCount(1);
                test_1.expect(constructorStub).to.have.been.calledOnceWithExactly({ appName: 'Login' });
                return [2 /*return*/];
            });
        }); });
        // it('creates a login microservice on the happy path', async () => {
        //     const configStub = sinon.stub(config, 'MICROSERVICE').returns('LOGIN');
        //     const expressFactoryStub = sinon.stub(ExpressFactory);
        //
        //     main();
        //
        //     expect(expressFactoryStub.constructor).to.have.been.calledOnceWithExactly({
        //         appName: 'Frontend'
        //     });
        // });
        // it('throws an error when it doesn\'t know which microservice to create', async () => {
        //     const configStub = sinon.stub(config, 'MICROSERVICE').returns('FAKE');
        //     const expressFactoryStub = sinon.stub(ExpressFactory);
        //
        //     try {
        //         main();
        //         assert.fail('main() should have thrown an error.');
        //     } catch (error) {
        //         expect(error.message).to.equal('ENVIRONMENT_MICROSERVICE_MISSING');
        //     }
        // });
    });
});
//# sourceMappingURL=index.spec.js.map