(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "chai", "./SessionTimeout"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const chai_1 = require("chai");
    const SessionTimeout_1 = require("./SessionTimeout");
    describe("startSessionTimer", () => {
        it("shoul return 2", () => {
            var session = new SessionTimeout_1.SessionTimeout();
            const result = session.startSessionTimer();
            chai_1.expect(result).to.equal(2);
        });
    });
});
//# sourceMappingURL=SessionTimeout.spec.js.map