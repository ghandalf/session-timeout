(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Options {
        // Default values
        constructor() {
            this.title = 'Your Session is About to Expire!';
            this.message = 'Your session is about to expire.';
            this.logoutButton = 'Logout';
            this.keepAliveButton = 'Stay Connected';
            this.keepAliveUrl = '/keep-alive';
            this.ajaxType = 'POST';
            this.ajaxData = '';
            this.redirUrl = '/timed-out';
            this.logoutUrl = '/log-out';
            this.warnAfter = 900000; // 15 minutes
            this.redirAfter = 1200000; // 20 minutes
            this.keepAliveInterval = 5000;
            this.keepAlive = true;
            this.ignoreUserActivity = false;
            this.onStart = false;
            this.onWarn = false;
            this.onRedir = false;
            this.countdownMessage = false;
            this.countdownBar = false;
            this.countdownSmart = false;
        }
        // protected static SInit = (() => {
        //     Options.prototype.title = 'Your Session is About to Expire!';
        //     Options.prototype.message = 'Your session is about to expire.';
        //     Options.prototype.logoutButton = 'Logout';
        //     Options.prototype.keepAliveButton = 'Stay Connected';
        //     Options.prototype.keepAliveUrl = '/keep-alive';
        //     Options.prototype.ajaxType = 'POST';
        //     Options.prototype.ajaxData = '';
        //     Options.prototype.redirUrl = '/timed-out';
        //     Options.prototype.logoutUrl = '/log-out';
        //     Options.prototype.warnAfter = 900000; // 15 minutes
        //     Options.prototype.redirAfter = 1200000; // 20 minutes
        //     Options.prototype.keepAliveInterval = 5000;
        //     Options.prototype.keepAlive = true;
        //     Options.prototype.ignoreUserActivity = false;
        //     Options.prototype.onStart = false;
        //     Options.prototype.onWarn = false;
        //     Options.prototype.onRedir = false;
        //     Options.prototype.countdownMessage = false;
        //     Options.prototype.countdownBar = false;
        //     Options.prototype.countdownSmart = false;
        // })();
        getTitle() {
            return this.title;
        }
        ;
        getMessage() {
            return this.message;
        }
        ;
        getLogoutButton() {
            return this.logoutButton;
        }
        ;
        getKeepAliveButton() {
            return this.keepAliveButton;
        }
        ;
        getKeepAliveUrl() {
            return this.keepAliveUrl;
        }
        ;
        getAjaxType() {
            return this.ajaxType;
        }
        ;
        getAjaxData() {
            return this.ajaxData;
        }
        ;
        getRedirUrl() {
            return this.redirUrl;
        }
        ;
        getLogoutUrl() {
            return this.logoutUrl;
        }
        ;
        getWarnAfter() {
            return this.warnAfter;
        }
        ;
        getRedirAfter() {
            return this.redirAfter;
        }
        ;
        getKeepAliveInterval() {
            return this.keepAliveInterval;
        }
        ;
        getKeepAlive() {
            return this.keepAlive;
        }
        ;
        getIgnoreUserActivity() {
            return this.ignoreUserActivity;
        }
        ;
        getOnStart() {
            return this.onStart;
        }
        ;
        getOnWarn() {
            return this.onWarn;
        }
        ;
        getOnRedir() {
            return this.onRedir;
        }
        ;
        getCountdownMessage() {
            return this.countdownMessage;
        }
        ;
        getCountdownBar() {
            return this.countdownBar;
        }
        ;
        getCountdownSmart() {
            return this.countdownSmart;
        }
        ;
        setTitle(value) {
            this.title = value;
        }
        ;
        setMessage(value) {
            this.message = value;
        }
        ;
        setLogoutButton(value) {
            this.logoutButton = value;
        }
        ;
        setKeepAliveButton(value) {
            this.keepAliveButton = value;
        }
        ;
        setKeepAliveUrl(value) {
            this.keepAliveUrl = value;
        }
        ;
        setAjaxType(value) {
            this.ajaxType = value;
        }
        ;
        setAjaxData(value) {
            this.ajaxData = value;
        }
        ;
        setRedirUrl(value) {
            this.redirUrl = value;
        }
        ;
        setLogoutUrl(value) {
            this.logoutUrl = value;
        }
        ;
        setWarnAfter(value) {
            this.warnAfter = value;
        }
        ;
        setRedirAfter(value) {
            this.redirAfter = value;
        }
        ;
        setKeepAliveInterval(value) {
            this.keepAliveInterval = value;
        }
        ;
        setKeepAlive(value) {
            this.keepAlive = value;
        }
        ;
        setIgnoreUserActivity(value) {
            this.ignoreUserActivity = value;
        }
        ;
        setOnStart(value) {
            this.onStart = value;
        }
        ;
        setOnWarn(value) {
            this.onWarn = value;
        }
        ;
        setOnRedir(value) {
            this.onRedir = value;
        }
        ;
        setCountdownMessage(value) {
            this.countdownMessage = value;
        }
        ;
        setCountdownBar(value) {
            this.countdownBar = value;
        }
        ;
        setCountdownSmart(value) {
            this.countdownSmart = value;
        }
        ;
    }
    exports.Options = Options;
});
//# sourceMappingURL=Options.js.map