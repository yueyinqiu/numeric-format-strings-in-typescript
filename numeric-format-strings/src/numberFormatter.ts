import { NumberFormatInfo } from './numberFormatInfo';

/**
 * A number formatter.
 */
export class NumberFormatter {
    constructor(public readonly isStandardEnabled: boolean = true,
        public readonly formatInfo: NumberFormatInfo = new NumberFormatInfo()) {
    }

    public format(number: number, formatString: string): string {
        return this.getFormatFunction(formatString).call(this, number);
    }

    public getFormatFunction(formatString: string): (number: number) => string {
        if (this.isStandardEnabled) {
            let standard = this.getStandard(formatString);
            if (standard != null)
                return standard as (number: number) => string;
        }
        throw new Error("Not Implemented.");
    }
    private getStandard(formatString: string): (number: number) => string | null {
        throw new Error("Not Implemented.");
    }
}
