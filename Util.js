/**
* @description : 一些公共的方法的静态类
*/
;(function(){
  function toHex(n){
    var hex = n.toString(16);
    return (hex.length < 2) ? [0, hex].join('') : hex;
  }
  
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
    },
    /**
     * @description: 身份证号验证
     * @param: string
     */
    isIdCard: function (idCard) {
      var num = idCard.toLowerCase().match(/\w/g);
      if (idCard.match(/^\d{17}[\dx]$/i)) {
        var sum = 0, times = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        for (var i = 0; i < 17; i++)
          sum += parseInt(num[i], 10) * times[i];
        if ("10x98765432".charAt(sum % 11) != num[17]) {
          return false;
        }
        return !!idCard.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, "$1-$2-$3");
      }
      if (idCard.match(/^\d{15}$/)) {
        return !!idCard.replace(/^\d{6}(\d{2})(\d{2})(\d{2}).+$/, "19$1-$2-$3");
      }
      return false;
    },
    /**
     * @description: 转换数字为16进制数
     * @param: {int} red value
     * @param: {int} green value
     * @param: {int} blue value
     */
     rgbToHex: function(r, g, b){
       return ['#', toHex(r), toHex(g), toHex(b)].join('');
     }
  };
  //非模块加载的环境下，在window下给予该类的一个引用
  window.Util = Util;
});
