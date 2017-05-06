export declare module Schema {
    interface Field {
        dataType: any;
        fieldType?: string;
        label?: string;
        stored?: boolean;
        validators?: {
            required?: boolean;
        };
    }
    interface Table {
        [field: string]: Field;
    }
}
