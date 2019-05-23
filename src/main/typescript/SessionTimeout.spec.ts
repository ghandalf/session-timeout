import { expect } from "chai";
import { SessionTimeout } from "./SessionTimeout";

describe("startSessionTimer", () => {
    it("shoul return 2", () => {
        var session = new SessionTimeout();
        const result = session.startSessionTimer();
        expect(result).to.equal(2);
    })
});