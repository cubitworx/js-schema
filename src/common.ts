// Local
import { Schema } from './schema';

export function HasSubDocument(schema: Schema.Table): boolean {
	for( let field in schema ) {
		if( schema.hasOwnProperty( field ) )
			return schema[field].dataType ? true : false;
	}
	return false;
}
