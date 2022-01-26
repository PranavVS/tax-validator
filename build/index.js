"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
function validate(tax) {
    return /(?<!-)(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/.test(tax);
}
exports.validate = validate;
//# sourceMappingURL=index.js.map