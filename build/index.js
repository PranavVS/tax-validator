"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTax = void 0;
function validateTax(tax) {
    return /(?<!-)(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/.test(tax);
}
exports.validateTax = validateTax;
//# sourceMappingURL=index.js.map