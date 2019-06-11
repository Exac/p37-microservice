"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_config_ts_1 = require("node-config-ts");
var express_factory_1 = __importDefault(require("./shared/express_factory"));
var logger_1 = __importDefault(require("./shared/logger"));
function main() {
    var MicroserviceMode;
    (function (MicroserviceMode) {
        MicroserviceMode["FRONTEND"] = "FRONTEND";
        MicroserviceMode["LOGIN"] = "LOGIN";
    })(MicroserviceMode || (MicroserviceMode = {}));
    var mode = node_config_ts_1.config.MICROSERVICE;
    switch (mode) {
        case MicroserviceMode.FRONTEND: {
            var frontend = new express_factory_1.default({ appName: 'Frontend' });
            break;
        }
        case MicroserviceMode.LOGIN: {
            var login = new express_factory_1.default({ appName: 'Login' });
            break;
        }
        default: {
            logger_1.default.error("expected '" + MicroserviceMode.LOGIN + "' but got '" + mode + "'.");
            logger_1.default.error('Missing environmental variable MICROSERVICE. Can\'t start.');
            throw new Error('ENVIRONMENT_MICROSERVICE_MISSING');
        }
    }
}
exports.default = main;
main();
//# sourceMappingURL=index.js.map