export function randomOfArray<T>(array:T[]):T {
    return array[Math.floor(Math.random() * array.length)];
}

export function random(min:number, max:number):number {
    return Math.random() * (max - min) + min;
}

export function randomInt(min:number, max:number):number {
    return Math.floor(random(min, max));
}