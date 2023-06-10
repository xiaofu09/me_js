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
    var headers=str.replace(/(.*?): (.*?)$/gm,"'$1':'$2'")
    headers=headers.replace(/\n/gm,",")
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
	
	
//广轩读取token和协议头
function f_token_headers(path){
    if (path==null || path==""){
        return false
    }
    //读取文件内容
    f = file(path)
    //  /sdcard/ceshi/html.htm 打开文件
    var a = f.readLines() //读取文件所有文本行到a变量
    f.close() //关闭文件
    var s =JSON.parse(a) //源码转换json格式
    let token=s.token
    let headers=s.headers
    let postheaders=s.postheaders
    let newgoodsid=s.newgoodsid
    if (token==null || token=="" || headers==null || headers=="" || postheaders==null || postheaders=="" || newgoodsid==null || newgoodsid==""){
        return false
    }
    return [token,headers,postheaders,newgoodsid]
}


//广轩写token和协议头
function w_token_headers(t_str,h_str,p_str,ngoodsid,path){
    if (t_str==null || t_str=="" || h_str==null || h_str=="" || p_str==null || p_str=="" || ngoodsid==null || ngoodsid==""){
        return false
    }
    let text={"token":t_str,"headers":encodeURIComponent(h_str),"postheaders":encodeURIComponent(p_str),"newgoodsid":ngoodsid}
    text=JSON.stringify(text)//json转换文本
    //写出文件内容
    try {
        f = file(path) //打开文件
        f.write(text) //fhxx为保存内容
        f.close() //关闭文件
        return true
    } catch (e) {
        return false
    }    
    return false
}

