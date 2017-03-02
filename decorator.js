/**
* @description: 装饰者logger
* @param: 需要装饰的tpye
*/
export var decorateLogger = (type) =>{
    return (target, name, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function(...args) {
            //other logger code			
            console.info(`logger: ${type}`);
            let ret;
            try{
                ret = method.apply(target, args);
            }catch(e){
                console.error(e);
            }
            return ret;
        }
    }
}
