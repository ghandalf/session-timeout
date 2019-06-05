// https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
// https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6
// https://github.com/orangehill/bootstrap-session-timeout
import { Options } from "./Options";

export class SessionTimeout {

    private options: Options;
    private timer: any;

    constructor(options: Options = new Options()) {
        this.options = options;
    }

    public getOptions(): Options {
        return this.options;
    }

    public setOptions(options: Options) {
        this.options = options;
    }

    public startSessionTimer(): number {
        clearTimeout(this.timer);

        var onWarn = this.options.getOnWarn();

        this.timer = setTimeout(function() {
            if (typeof onWarn !== 'function') {

            } else {
                onWarn = false;
            }
        }, this.options.getWarnAfter());

        this.options.setOnWarn(onWarn);
        
        return 2;
    }
}