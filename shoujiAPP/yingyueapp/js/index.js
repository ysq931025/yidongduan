$(function(){
//	屏幕适配
	 function resize(originsize,type){
        var type=type||"x";
        var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
        if(type=="x"){
            var scale=widths/originsize*100;
        }else if(type=="y"){
            var scale=heights/originsize*100;
        }

        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }

    resize(1334,"y");
    //iscoll插件开启，上下固定定位问题
    var myscroll;
			function loaded(){
				myscroll=new iScroll("wrapper");
			}
			window.addEventListener("DOMContentLoaded",loaded,false);
})
