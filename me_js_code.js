//判断是否为json
function isJSON(str) {

    if (typeof str == 'string') {

        try {

            var obj=JSON.parse(str);

            if(typeof obj == 'object' && obj ){

                return true;

            }else{

                return false;

            }

        } catch(e) {

            return false;

        }

    }

    return false

}

//零食零售价计算

function sjjs(jhj,lr) {

   var jhj=Number(jhj)

   var lsj

   if (Math.round(jhj+lr)>jhj+lr){

      lsj=Math.round(jhj+lr)-0.5

   } else {

      lsj=Math.round(jhj+lr)

   }

   return lsj

}


//me库协议头转换

function headers_str(str){

    var headers=str.replace(/(.*?): (.*?)$/gm,"'$1'":"'$2'")

    headers=th.replace(/\n/gm,",")

    return headers

}

//js 实现占位符

String.prototype.format = function() {
		if (arguments.length == 0)
			return this;
		for (var s = this, i = 0; i < arguments.length; i++)
			s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
		return s;
	};
 
//"http://{0}/{1}".format("www.songyanjun.net", "index.html")
