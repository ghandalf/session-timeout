export class Options {

    private title: string;
    private message: string;
    private logoutButton: string;
    private keepAliveButton: string;
    private keepAliveUrl: string;
    private ajaxType: string;
    private ajaxData: string;
    private redirUrl: string;
    private logoutUrl: string;
    private warnAfter: number;
    private redirAfter: number;
    private keepAliveInterval: number;
    private keepAlive: boolean;
    private ignoreUserActivity: boolean;
    private onStart: boolean;
    private onWarn: boolean;
    private onRedir: boolean;
    private countdownMessage: boolean;
    private countdownBar: boolean;
    private countdownSmart: boolean;

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

    public getTitle(): string {
        return this.title;
    };
    public getMessage(): string{
        return this.message;
    };
    public getLogoutButton(): string{
        return this.logoutButton;
    };
    public getKeepAliveButton(): string{
        return this.keepAliveButton;
    };
    public getKeepAliveUrl(): string{
        return this.keepAliveUrl
    };
    public getAjaxType(): string{
        return this.ajaxType;
    };
    public getAjaxData(): string{
        return this.ajaxData;
    };
    public getRedirUrl(): string{
        return this.redirUrl;
    };
    public getLogoutUrl(): string{
        return this.logoutUrl;
    };
    public getWarnAfter(): number{
        return this.warnAfter;
    };
    public getRedirAfter(): number{
        return this.redirAfter;
    };
    public getKeepAliveInterval(): number{
        return this.keepAliveInterval;
    };
    public getKeepAlive(): boolean{
        return this.keepAlive;
    };
    public getIgnoreUserActivity(): boolean{
        return this.ignoreUserActivity;
    };
    public getOnStart(): boolean{
        return this.onStart;
    };
    public getOnWarn(): boolean{
        return this.onWarn;
    };
    public getOnRedir(): boolean{
        return this.onRedir;
    };
    public getCountdownMessage(): boolean{
        return this.countdownMessage;
    };
    public getCountdownBar(): boolean{
        return this.countdownBar;
    };
    public getCountdownSmart(): boolean{
        return this.countdownSmart;
    };

    public setTitle(value: string) {
        this.title = value;
    };
    public setMessage(value: string) {
        this.message = value;
    };
    public setLogoutButton(value: string) {
        this.logoutButton = value;
    };
    public setKeepAliveButton(value: string) {
        this.keepAliveButton = value;
    };
    public setKeepAliveUrl(value: string) {
        this.keepAliveUrl = value;
    };
    public setAjaxType(value: string) {
        this.ajaxType = value;
    };
    public setAjaxData(value: string) {
        this.ajaxData = value;
    };
    public setRedirUrl(value: string) {
        this.redirUrl = value;
    };
    public setLogoutUrl(value: string) {
        this.logoutUrl = value;
    };
    public setWarnAfter(value: number) {
        this.warnAfter = value;
    };
    public setRedirAfter(value: number) {
        this.redirAfter = value;
    };
    public setKeepAliveInterval(value: number) {
        this.keepAliveInterval = value;
    };
    public setKeepAlive(value: boolean) {
        this.keepAlive = value;
    };
    public setIgnoreUserActivity(value: boolean) {
        this.ignoreUserActivity = value;
    };
    public setOnStart(value: boolean) {
        this.onStart = value;
    };
    public setOnWarn(value: boolean) {
        this.onWarn = value;
    };
    public setOnRedir(value: boolean) {
        this.onRedir = value;
    };
    public setCountdownMessage(value: boolean) {
        this.countdownMessage = value;
    };
    public setCountdownBar(value: boolean) {
        this.countdownBar = value;
    };
    public setCountdownSmart(value: boolean) {
        this.countdownSmart = value;
    };
}