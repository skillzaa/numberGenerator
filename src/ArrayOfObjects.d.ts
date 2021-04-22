/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
export default class ArrayOfObjects {
    data: {}[];
    constructor();
    add(incomming?: {}): {};
    isUnique(name: string): boolean;
    get length(): number;
    getItem(name: string): {};
    getProperty(name: string, value?: string): any;
    getAttr(name: string, value?: string): number;
    setProperty(name: string, value: string | number | boolean, subAttribItem?: string): string | number | boolean;
    setAttr(name: string, value: string | number | boolean, subAttribItem?: string): string | number | boolean;
    getAllByNames(argumentsRequired?: never[]): never[];
    insertPropertiesFromArray(retData: any): boolean;
    setAllProperties(propertyName: string, newValue: string | number): void;
    getItemsByNames(argumentsRequired?: never[]): never[];
}
