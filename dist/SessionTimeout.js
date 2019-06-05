(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Options"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
    // https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
    // https://github.com/orangehill/bootstrap-session-timeout
    const Options_1 = require("./Options");
    class SessionTimeout {
        constructor(options = new Options_1.Options()) {
            this.options = options;
        }
        getOptions() {
            return this.options;
        }
        setOptions(options) {
            this.options = options;
        }
        startSessionTimer() {
            return 2;
        }
    }
    exports.SessionTimeout = SessionTimeout;
});
//# sourceMappingURL=SessionTimeout.js.map