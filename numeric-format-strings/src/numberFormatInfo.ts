export class NumberFormatInfo {
    private _currencyDecimalDigits: number = 2;
    /**
     * Gets the number of decimal places to use in currency values.
     * The default value is `2`.
     */
    public get currencyDecimalDigits(): number {
        return this._currencyDecimalDigits;
    }

    /**
     * Sets the number of decimal places to use in currency values.
     */
    public set currencyDecimalDigits(value: number) {
        if (!Number.isSafeInteger(value))
            throw new NumberFormatInfoInvalidError("The property should be a safe integer.");
        if (value < 0 || value > 99)
            throw new NumberFormatInfoInvalidError("The property shouldn't be set to a value less than 0 or greater than 99.");
        this._currencyDecimalDigits = value;
    }

    private _currencyDecimalSeparator: string = ".";
    /**
     * Gets the string to use as the decimal separator in currency values.
     * The default value is `"."`.
     */
    public get currencyDecimalSeparator(): string {
        return this._currencyDecimalSeparator;
    }
    /**
     * Sets the string to use as the decimal separator in currency values.
     */
    public set currencyDecimalSeparator(value: string) {
        if (value.length == 0)
            throw new NumberFormatInfoInvalidError("The property shouldn't be empty.");
        this._currencyDecimalSeparator = value;
    }


    private _currencyGroupSeparator: string = ",";
    /**
     * Gets the string that separates groups of digits to the left of the decimal in currency values.
     * The default value is `","`.
     */
    public get currencyGroupSeparator(): string {
        return this._currencyGroupSeparator;
    }
    /**
     * Sets the string that separates groups of digits to the left of the decimal in currency values.
     */
    public set currencyGroupSeparator(value: string) {
        this._currencyGroupSeparator = value;
    }



    private _currencyGroupSizes: number[] = [3];
    /**
     * Gets the number of digits in each group to the left of the decimal in currency values.
     * The default value is `[3]`.
     */
    public get currencyGroupSizes(): number[] {
        return this._currencyGroupSizes;
    }
    /**
     * Sets the number of digits in each group to the left of the decimal in currency values.
     */
    public set currencyGroupSizes(value: number[]) {
        let zeroFound: boolean = false;
        for (var v of value) {
            if (zeroFound)
                throw new NumberFormatInfoInvalidError("The property shouldn't contains 0, except that it's the last element.");
            if (!Number.isSafeInteger(value))
                throw new NumberFormatInfoInvalidError("Any value in the property should be a safe integer.");
            if (v < 0 || v > 9)
                throw new NumberFormatInfoInvalidError("Any value in the property shouldn't be less than 0 or greater than 9.");
            if (v == 0)
                zeroFound = true;
        }
        this._currencyGroupSizes = value.slice();
    }

    private _currencyNegativePattern: number = 0;
    /**
     * Gets the format pattern for negative currency values.
     * The default value is `0`.
     */
    public get currencyNegativePattern(): number {
        return this._currencyNegativePattern;
    }
    /**
     * Sets the format pattern for negative currency values.
     */
    public set currencyNegativePattern(value: number) {
        if (!Number.isSafeInteger(value))
            throw new NumberFormatInfoInvalidError("The property should be a safe integer.");
        if (value < 0 || value > 15)
            throw new NumberFormatInfoInvalidError("The property shouldn't be set to a value less than 0 or greater than 15.");
        this._currencyNegativePattern = value;
    }

    private _currencyPositivePattern: number = 0;
    /**
     * Gets the format pattern for positive currency values.
     * The default value is `0`.
     */
    public get currencyPositivePattern(): number {
        return this._currencyPositivePattern;
    }
    /**
     * Sets the format pattern for positive currency values.
     */
    public set currencyPositivePattern(value: number) {
        if (!Number.isSafeInteger(value))
            throw new NumberFormatInfoInvalidError("The property should be a safe integer.");
        if (value < 0 || value > 3)
            throw new NumberFormatInfoInvalidError("The property shouldn't be set to a value less than 0 or greater than 3.");
        this._currencyPositivePattern = value;
    }

    // TODO: Continue working! https://docs.microsoft.com/en-us/dotnet/api/system.globalization.numberformatinfo?view=net-5.0#properties : CurrencySymbol
}

export class NumberFormatInfoInvalidError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NumberFormatInfoInvalidError";
    }
}