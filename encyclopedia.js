// 点击搜索
var sousuobol=0;
$(".sicon").on("click",function(){
	var val = $(".intext").val();
	if(val!=""){
		// 不为空时才能查询
		sousuobol=2;
		$(".letterul").hide();
		$(".ul").hide();
		$(".commonli").hide();
		$(".commonli[data-title*="+val+"]").show();
		$(".commonli[data-title*="+val+"]").parent().show();
	}else {
		// 为空时全部显示
		sousuobol=1;
		setTimeout(function(){
			$(".letterul").show();
		},500)
		 $(".ul").show();
         $(".commonli").show();
	}
});


$(".intext").on("focus",function(){
	$(".letterul").hide();
})
var bol = true;//由于点击右侧的字母时会触发window.onscroll事件，所以需要用bol值控制
//点击的时候禁止windowscroll事件，监听到有滑动事件的时候再触发window的scroll事件
$(".letterul li").on("click",function(){
	bol = false;
	var text = $(this).text();
	var offsettop = $(".firstli:contains("+text+")").parent().offset().top;
	var navHeight = $(".nav").innerHeight();
	$(".letterul li").css({
			color : "black"
		})
	$(this).css({
				color : "#2078c0"
			});
	$(document).scrollTop(offsettop-navHeight);
});

document.addEventListener("touchmove", function() {
		bol = true;
		if(sousuobol==0){
				$(".intext").blur();
				setTimeout(function(){
					$(".letterul").show();
				},500)
		}
		if(sousuobol==1){
				$(".intext").blur();
				setTimeout(function(){
					$(".letterul").show();
				},500)
		}
}, false);
window.onscroll=function(){
	if(bol){
			scrollTop = document.body.scrollTop || document.documentElement.scrolltop;
			console.log(scrollTop);
			if(scrollTop=='undefined'){
				$(".letterul li").eq(0).css({
					color : "#2078c0"
				})
			}else {
				$.each($(".ul"),function(index,el){	
				if($(el).offset().top - $(".nav").innerHeight() <scrollTop && scrollTop< $(el).offset().top+$(el).height()){
				var x = $(el).children(".firstli").text();
				$(".letterul li").css({
					color : "black"
				});
				$(".letterul li:contains("+x+")").css({
					color : "#2078c0"
				})
				}
			
				})
			}

	}

	
}