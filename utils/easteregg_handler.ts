const EASTER_EGGS = ["cookie", "future", "change-something", "picture-bright", "picture-nolights"];

export function addFoundEasterEgg(name:string):void {
    if (!EASTER_EGGS.includes(name)) { return; }

    let found_eastereggs = new Set( JSON.parse(localStorage.getItem("eastereggs") ?? "[]") );
    const is_new = !found_eastereggs.has(name);

    found_eastereggs.add(name);
    localStorage.setItem("eastereggs", JSON.stringify([...found_eastereggs]));

    if (is_new) {
        // To trigger the banner
        document.dispatchEvent(new CustomEvent("easteregg", { detail: name }));
    }
}

export function getFoundEasterEggs():string[] {
    return JSON.parse(localStorage.getItem("eastereggs") ?? "[]");
}

export function getFoundEasterEggsCount():number {
    return getFoundEasterEggs().length;
}

export function getTotalEasterEggsCount():number {
    return EASTER_EGGS.length;
}