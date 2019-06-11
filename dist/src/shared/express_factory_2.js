"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./logger"));
var ExpressFactory2 = /** @class */ (function () {
    function ExpressFactory2(config) {
        if (config === void 0) { config = { port: 8080 }; }
        this.port = config.port;
    }
    Object.defineProperty(ExpressFactory2.prototype, "app", {
        get: function () {
            return this.express ? this.express : ExpressFactory2.getDefaultExpressApplication();
        },
        set: function (app) {
            this.express = app;
        },
        enumerable: true,
        configurable: true
    });
    ExpressFactory2.prototype.listen = function () {
        this.app.listen(this.port, ExpressFactory2.onServerStart);
    };
    ExpressFactory2.getDefaultExpressApplication = function () {
        return express_1.default();
    };
    ExpressFactory2.onServerStart = function () {
        logger_1.default.info('Listening @ http://localhost/');
    };
    return ExpressFactory2;
}());
exports.ExpressFactory2 = ExpressFactory2;
//# sourceMappingURL=express_factory_2.js.map