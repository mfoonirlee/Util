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
    }
  };
  //非模块加载的环境下，在window下给予该类的一个引用
  window.Util = Util;
});
