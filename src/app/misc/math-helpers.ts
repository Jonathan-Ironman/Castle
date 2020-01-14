export class MathHelpers {
    static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static chance(percentage: number): boolean {
        return Math.random() * 100 < percentage;
    }
}
