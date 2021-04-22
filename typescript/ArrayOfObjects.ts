/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */


export default class ArrayOfObjects{
public data:{}[];        
constructor(){
    this.data=[];
}
add(incomming = {}){
    this.data.push(incomming);
    return incomming;
    } 
// add(name:string){
// if (this.isUnique(name) === true){
//     const a = {};
//     a.name = name; 
//     this.data.push(a);
//     return a;    
// } else {
//     return {success: false, message : "Please Provide a unique and valid string name for the object", errorMessage: "nonUniqueName" }
// }   

// } 

isUnique(name:string){
if(typeof name == "undefined"){return false;}    
let uniqueOrNot = true;
    for (let idx = 0; idx < this.data.length; idx++) {
        const element = this.data[idx];
        if(element.name === name){
            uniqueOrNot =  false;
        }       
    }

return uniqueOrNot;
}

get length(){
return this.data.length;
}

getItem(name:string){
for (let idx = 0; idx < this.data.length; idx++) {
    if(this.data[idx].name === name){
        return this.data[idx];
    }
} 
return false;   
}//.....................

getProperty(name:string,value= "value"){
for (let idx = 0; idx < this.data.length; idx++) {
    if(this.data[idx].name === name){
        return this.data[idx][value];
    }
}
return false;    
}
getAttr(name:string,value= "value"){
return Number(this.getProperty(name));
}
// setAttr(name:string,value:string|number|boolean,propertyName = "value"){
// return this.setProperty(name,value, propertyName);
// }
setProperty(name:string,value:string|number|boolean,subAttribItem = "value"):string|number|boolean{
    for (let idx = 0; idx < this.data.length; idx++) {
        if(this.data[idx].name === name){
                this.data[idx][subAttribItem] = value;
                return this.data[idx][subAttribItem];
        }
    }        
return true;       
    }//......
setAttr(name:string,value:string|number|boolean,subAttribItem = "value"):string|number|boolean{
 return Number(this.setProperty(name,value));          
    }//......
getAllByNames(argumentsRequired=[]){
    /**incooming is normal [] where as attributes is an obj wrapped around an aOO */    
    const ret = [];         
    this.data.forEach(bd => {
        argumentsRequired.forEach(ag => {
            if(ag == bd.name){
                ret.push(bd);
            }
        });
    });
    return ret;    
    }
insertPropertiesFromArray(retData){
    this.data.forEach(bd => {
        retData.forEach(ag => {
            if(ag.name == bd.name){
                bd.value = ag.value;
            }
        });
    });
    
return true;    
}//..
    
setAllProperties(propertyName:string , newValue:string|number){

}

getItemsByNames(argumentsRequired=[]){
/**incooming is normal []  */    
const ret = [];         
this.data.forEach(bd => {
    argumentsRequired.forEach(ag => {
        if(ag == bd.name){
            ret.push(bd);
        }
    });
});
return ret;    
}
    
///////////////////
}