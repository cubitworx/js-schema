"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function HasSubDocument(schema) {
    for (var field in schema) {
        if (schema.hasOwnProperty(field))
            return schema[field].dataType ? true : false;
    }
    return false;
}
exports.HasSubDocument = HasSubDocument;
//# sourceMappingURL=common.js.map