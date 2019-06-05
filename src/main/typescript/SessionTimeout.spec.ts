import { expect } from "chai";
import { Options } from "./Options";
import { SessionTimeout } from "./SessionTimeout";


describe("startSessionTimer", () => {
    it("should return 2", () => {
        var session = new SessionTimeout();
        const result = session.startSessionTimer();
        expect(result).to.equal(2);
    })
});