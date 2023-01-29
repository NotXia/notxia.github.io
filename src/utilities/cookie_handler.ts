export function shouldShowCookie():boolean {
    return localStorage.getItem("cookie") == undefined;
}

export function acceptCookie():void {
    localStorage.setItem("cookie", "accept");
}

export function refuseCookie():void {
    localStorage.setItem("cookie", "refuse");
}
