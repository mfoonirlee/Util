/**
* @description : 一些公共的方法的静态类
*/
;(function(){
  var Util = {
    /**
    * @description : 验证输入的号码是否符合手机号码规则 符合返回true
    * @returns : boolean 
    */
    isTel : function(val){
      return /^1[345678][\d]{9}$/g.test(val);
    },
    /**
    * @description : 验证输入的是否符合邮箱码规则 符合返回true
    * @returns : boolean 
    */
    isEmail : function (val) {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(val);
    },
    /**
     * @description: 将传入的某个val中的非法字符(非a-zA-Z0-9)过滤掉(主要为了兼容移动端输入法导致的常规过滤失效的问题)
     * @param: string
     */
    filterWord : function(val) {
        var valArr = val.split(''),
            valCodeArr, res = val;
        
        valArr.forEach(function(v, i){
            valCodeArr.push(v.charCodeAt(0));
        });
        
        if(val.match(/[^0-9a-z]/i) && valCodeArr.indexOf(8198) === -1){
            res = val.replace(/[^0-9a-z]/img, '');
            if(res.match(/\s/)){
                res = res.replace(/\s/mg, '');
            }
        }
        return res;
    }
  };
  //非模块加载的环境下，在window下给予该类的一个引用
  window.Util = Util;
});
