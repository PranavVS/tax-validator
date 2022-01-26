## Validate Tax Percentage Using Tax Validator

## Jai Hind 🇮🇳

You can validate the tax percentage using simple npm package. Pass the tax value to `validate()` function.

Your tax string must contain `%` symbol. If you are reading a number then concatenate `%` to the number and convert to the string and pass it to the `validate()` function.

```
100>taxValue>0
```

## Installation

```sh
npm install tax-validator
```

## Usage

```sh
import {validate} from "tax-validator"
let validatedTaxValue=validate("69%");
console.log(validatedTaxValue);
```

## Licence

#### MIT
