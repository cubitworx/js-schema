"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
// Local
var common_1 = require("../common");
exports.Schema2NgForms = function (schema, formBuilder, doc) {
    var translate = function (schema, doc) {
        if (doc === void 0) { doc = {}; }
        var controlsConfig = {};
        for (var field in schema) {
            // HasSubDocument
            if (common_1.HasSubDocument(schema[field].dataType)) {
                controlsConfig[field] = translate(schema[field].dataType, doc[field]);
            }
            else {
                controlsConfig[field] = [doc[field]];
                if (schema[field].validators) {
                    for (var validator in schema[field].validators) {
                        switch (validator) {
                            case 'required': {
                                if (schema[field].validators[validator])
                                    controlsConfig[field].push(forms_1.Validators.required);
                                break;
                            }
                            default:
                                throw 'Validator not yet implemented: ' + validator;
                        }
                    }
                }
            }
        }
        return formBuilder.group(controlsConfig);
    };
    var result = translate(schema, doc);
    return result;
};
//# sourceMappingURL=ng-forms.js.map