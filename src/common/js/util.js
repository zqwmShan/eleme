/*
	解析url参数
	@example ?id=12345&a=b
	@return Object {id:12345,a:b}
*/

export function urlParse() {
	let url = window.location.search;
	let obj = {};
	let reg = /[?&][^?&]+=[^?&]+/g;
	let arr = url.match(reg);
	// ['?id=12345', '&a=b']
	if(arr){
		arr.forEach((item) => {
			let tempArr = item.substring(1).split('=');
			let key = decodeURIComponent(tempArr[0]); //URI对于utf8格式会转码,所以这里需要解码
			let val = decodeURIComponent(tempArr[1]);
			obj[key] = val;
		})
	}
	return obj;
}