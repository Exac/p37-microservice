"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var node_config_ts_1 = require("node-config-ts");
var logger_1 = __importDefault(require("./logger"));
var ExpressFactory = /** @class */ (function () {
    function ExpressFactory(opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        this.appName = 'Application';
        this.greeting = function () {
            logger_1.default.info(_this.appName + " listening @ http://localhost:" + ExpressFactory.DEFAULT_PORT + "/");
        };
        console.log('CONSTRUCTOR');
        this.app = opts.app
            ? opts.app
            : ExpressFactory.getDefaultExpressApplication();
        this.appName = opts.appName
            ? opts.appName
            : this.appName;
        this.app.listen(ExpressFactory.DEFAULT_PORT, this.greeting);
    }
    ExpressFactory.DEFAULT_PORT = node_config_ts_1.config.LOGIN.PORT;
    // private static getDefaultExpressApplication = (): Application => express();
    ExpressFactory.getDefaultExpressApplication = function () {
        console.log('ExpressFactory().getDefaultExpressApplication() trace', new Error().stack);
        return express_1.default();
    };
    return ExpressFactory;
}());
exports.default = ExpressFactory;
//# sourceMappingURL=express_factory.js.map