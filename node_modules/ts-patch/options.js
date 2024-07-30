"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstallerOptions = exports.InstallerOptions = void 0;
const system_1 = require("./system");
var InstallerOptions;
(function (InstallerOptions) {
    function getDefaults() {
        return {
            logLevel: system_1.LogLevel.normal,
            useColor: true,
            dir: process.cwd(),
            silent: false,
            skipCache: false
        };
    }
    InstallerOptions.getDefaults = getDefaults;
})(InstallerOptions || (exports.InstallerOptions = InstallerOptions = {}));
// endregion
/* ********************************************************************************************************************
 * Parser
 * ********************************************************************************************************************/
function getInstallerOptions(options) {
    if (!options && typeof options === "object" && Object.isSealed(options))
        return options;
    const res = { ...InstallerOptions.getDefaults(), ...options };
    return Object.seal({
        ...res,
        logger: res.logger ?? (0, system_1.createLogger)(res.logLevel, res.useColor, res.silent)
    });
}
exports.getInstallerOptions = getInstallerOptions;
//# sourceMappingURL=options.js.map