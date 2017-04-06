import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Local
import { HasSubDocument } from '../common';
import { Schema } from '../schema';

export const Schema2NgForms = function<T>(schema: Schema.Table, formBuilder: FormBuilder, doc?: T): FormGroup {

	let
	translate = function(schema: Schema.Table, doc: any = {}): FormGroup {
		let controlsConfig: {[key: string]: any} = {};

		for( let field in schema ) {

			// HasSubDocument
			if( HasSubDocument( schema[field].dataType ) ) {
				controlsConfig[field] = translate( schema[field].dataType, doc[field] );
			} else {

				controlsConfig[field] = [ doc[field] ];
				if( schema[field].validators ) {
					for( let validator in schema[field].validators ) {
						switch( validator ) {
							case 'required': {
								if( schema[field].validators[validator] )
									controlsConfig[field].push( Validators.required );
								break;
							}
							default:
								throw 'Validator not yet implemented: ' + validator;
						}
					}
				}

			}

		}

		return formBuilder.group( controlsConfig );
	};

	let result: FormGroup = translate( schema, doc );

	return result;
};
