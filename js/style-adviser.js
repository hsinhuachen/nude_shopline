<script>
//款式建議
var lang = $("html").attr("lang");
var turn = ['A','B','C','D','E','F'];

var b1 = {'title':'超完美無痕','titleEn':'Perfect Seamless','desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b1.jpg','link': '/products/perfect-seamless-bra'};
var b2 = {'title':'天使蕾絲抹胸','titleEn':'Lace Bandeau','desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b2.jpg','link': '/products/lace-cami-bra'};
var b3 = {'title':'超完美無鋼圈','titleEn':'Perfect Wireless','desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b3.jpg','link': '/products/perfect-wireless-bra'};
var b4 = {'title':'超感動舒服蕾','titleEn':"Jumper's Leisuree",'desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b4.JPG','link': '/products/nude-base-jumper-leisuree'};
var b5 = {'title':'甜蜜假期波蕾','titleEn':'Holiday Bralette','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f3.jpg','link': '/products/holiday-bralette'};

var f1 = {'title':'魔幻時尚前扣','titleEn':'Strapless Convertible','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f1.jpg','link': '/products/convertible-bra'};
var f2 = {'title':'心機美背內衣','titleEn':'Front-click RacerBack','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f2.jpg','link': '/products/racerback-bra'};
var f4 = {'title':'雙面女伶貝蕾','titleEn':'Duet Balconette','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f4.jpg','link': '/products/duet-balconnete'};
var f5 = {'title':'V溝影開襟內衣','titleEn':'Deep Plunge Bra','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f5.jpg','link': '/products/nude-fashion-optimal-v-plunge-bra'};
var f6 = {'title':'絕美雕花舒服蕾','titleEn':'Lace Leisuree','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f6.jpg','link': '/products/floral-lace-wireless-leisuree-bra'};

var r1 = {'title':'浪漫四蕾絲','titleEn':'Lace Push-up','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r1.jpg','link': '/pages/romance'};
var r2 = {'title':'純真雪紡貝蕾','titleEn':'Chiffon Balconette','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r2.jpg','link': '/products/chiffon-balconette'};
var r3 = {'title':'翩愛戀人波蕾','titleEn':'Beloved Bralette','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r3.jpg','link': '/products/luxurious-lace-bralette'};
var r4 = {'title':'偷心密探法式薄蕾','titleEn':'Sheer Bra','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r4.jpg','link': '/products/romantic-lace-sheer-bra'};
var r5 = {'title':'花漾美人法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r5.jpg','link': '/products/floral-lace-sheer-bra'};

var s1 = {'title':'超激塑 ALL IN ONE 纖體衣','titleEn':'Shape Suit','desc':'協助女性對抗身體老化<br/>維持身體窈窕曲線的修身款式','img': '//www.nude-underwear.com/2018/a_s1.jpg','link': '/products/slim-seamless-bodysuit'};
var s2 = {'title':'灧色蝶燦內衣','titleEn':'Lace Bustier','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_s2.jpg','link': '/products/lace-longline-bustier-bra'};
var s3 = {'title':'超激塑高腰纖體褲','titleEn':'Shape Suit','desc':'','img': '//www.nude-underwear.com/2018/a_s3.jpg','link': '/products/bodyslim-highwaist-panty'};

var p1 = {'title':'極緻美型布鋼圈','titleEn':'Ultimate Wirless','desc':'提供給講究舒適感與時尚美型<br/>的精緻女性','img': '//www.nude-underwear.com/2018/a_p1.jpg','link': '/products/nude-plus-ultimate-wireless-bra'};
var p2 = {'title':'華麗年代法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'提供給講究舒適感與時尚美型<br/>的精緻女性','img': '//www.nude-underwear.com/2018/a_p2.jpg','link': '/products/belle-epoque-sheer-bra'};
var p3 = {'title':'微醺透視蕾絲抹胸', 'titleEn': 'See-thru Lace Cami Bra', 'desc': '透視網紗拼接同色蕾絲<br />華麗效果滿分','img': 'https://img.shoplineapp.com/media/image_clips/62d53529ea5f480e6858718f/original.jpg?1658139945','link': '/products/new-see-thru-lace-cami'};

var l1 = {'title':'絲柔光璨短袖上衣','titleEn':'Nude Nightwear Short Top','desc':'','img': '//www.nude-underwear.com/2018/a_l1.jpg','link': '/products/silk-loungewear-top'};
var l2 = {'title':'絲柔光璨深V背心','titleEn':'Nude Nightwear Silky V Camisole','desc':'','img': '//www.nude-underwear.com/2018/a_l2.jpg','link': '/products/nude-nightwear-silky-v-camisole'};
var l3 = {'title':'絲柔光璨短褲','titleEn':'Nude Nightwear Short Pants','desc':'','img': '//www.nude-underwear.com/2018/a_l3.jpg','link': '/products/silky-loungewear-short-pant'};
var l4 = {'title':'絲柔光璨長褲','titleEn':'Nude Nightwear Long Pants','desc':'','img': '//www.nude-underwear.com/2018/a_l4.jpg','link': '/products/silky-loungewear-pant'};
var l5 = {'title':'絲柔光璨深V連身裙','titleEn':'Nude Nightwear Midi Dress','desc':'','img': '//www.nude-underwear.com/2018/a_l5.jpg','link': '/products/silky-loungewear-nightdress'};
var l6 = {'title':'絲柔光璨長袍','titleEn':'Nude Nightwear Silky Robe','desc':'','img': '//www.nude-underwear.com/2018/a_l6.jpg','link': '/products/nude-nightwear-silky-robe'};


if(lang == "en"){
	var solutionA = ['Everyday & Casual','Office','Going Out','Formal Occasion','Work-out','Home & Lounge'];
	var solutionB = [];

	var sub1 = 'T-shirt';
	var sub2 = 'Blouse';
	var sub3 = 'Dress';
	var sub4 = 'Gown';
	var sub5 = 'Sportswear';
	var sub6 = 'Loungewear';
}else{
	var solutionA = ['日常休閒<br />Everyday & Casual','辦公室<br />Office','約會與聚會<br />Going Out','正式場合<br />Formal Occasion','健身<br />Work-out','家居<br />Home & Lounge'];
	var solutionB = [];

	var sub1 = 'T恤<br />T-shirt'; //ㄅ 
	var sub2 = '合身上衣<br />Blouse'; //ㄆ
	var sub3 = '連身洋裝<br />Dress'; //ㄇ
	var sub4 = '小(晚)禮服<br />Gown'; //ㄈ 
	var sub5 = '運動服飾<br />Sportswear'; //ㄉ 
	var sub6 = '家居服<br />Loungewear'; //ㄊ
}

solutionB[0] = [sub1,sub2,sub3,sub5,sub6];
solutionB[1] = [sub2,sub3];
solutionB[2] = [sub2,sub3];
solutionB[3] = [sub3,sub4];
solutionB[4] = [sub1,sub5];
solutionB[5] = [sub1,sub6];


//----------------------------------------------------------

result[0] = [];
result[1] = [];
result[2] = [];
result[3] = [];
result[4] = [];
result[5] = [];


result[0][0] = [b1,b3,b4,b5,p1];
result[0][1] = [b1,b2,f2,f5,p1];
result[0][2] = [b1,f1,f2,f5,p1];
result[0][3] = [b3,b4,b5,f6,p1];
result[0][4] = [l1,l2,l3,l4,l5,l6];

result[1][0] = [b1,b2,f2,f5,p1];
result[1][1] = [b1,f1,f2,f5,p1];

result[2][0] = [f2,f1,f4,f6,r1,r2,r3];
result[2][1] = [b2,f5,r2,r4,r5,p2];

result[3][0] = [f1,f2,f5,p1,s1,s3];
result[3][1] = [f1,f5,p1,s1,s3];

result[4][0] = [b3,b4,p1];
result[4][1] = [b3,b4,p1];

result[5][0] = [l3,l4,l6];
result[5][1] = [l1,l2,l3,l4,l5,l6];


$(function(){
	$(".slideto").on('click', function(event) {
		event.preventDefault();
		
		var target = $(this).attr("href");

		if($(target).length > 0){
			$("body,html").animate({
	          scrollTop: $(target).offset().top - 150,
	        }, 1200);
		}
	});

	var selectIndex = 0;
	$("#select1").on('click', '.selectItem', function(event) {
		event.preventDefault();
		
		selectIndex = $(this).index();
		var select2Html = "";

		$("#select1").find(".active").removeClass('active');
		$(this).addClass('active');

		for(var selectI = 0; selectI < solutionB[selectIndex].length; selectI++){
			select2Html = select2Html + '<div class="selectItem">'
				+ '<strong class="number">' + turn[selectI]  + '</strong>' 
				+ '<h5>' + solutionB[selectIndex][selectI] +'</h5>'
			+ '</div>';
		}
		
		$("#result").addClass('hide');
		$("#select2").find(".select").html(select2Html);
		$("#select2").removeClass('hide');
		$("body,html").animate({
          scrollTop: $("#select2").offset().top - 150,
        }, 1200);
	});

	var resultIndex = 0;
	$("#select2").on('click', '.selectItem', function(event) {
		event.preventDefault();
		$("#result").addClass('hide');

		resultIndex = $(this).index();
		var resultHtml = "";

		$("#select2").find(".active").removeClass('active');
		$(this).addClass('active');

		for(var selectI2 = 0; selectI2 < result[selectIndex][resultIndex].length; selectI2++){
			if(lang == "en"){
				resultHtml = resultHtml + '<a href="' + result[selectIndex][resultIndex][selectI2]["link"] + '" class="resultItem">'
					+ '<span class="img"><img src="//www.nude-underwear.com/2018/' + result[selectIndex][resultIndex][selectI2]["img"] + '"></span>' 
					+ '<strong class="resultTitle alignCenter">' + result[selectIndex][resultIndex][selectI2]["titleEn"] + '</strong>'
				+ '</a>';
			}else{
				resultHtml = resultHtml + '<a href="' + result[selectIndex][resultIndex][selectI2]["link"] + '" class="resultItem">'
					+ '<span class="img"><img src="//www.nude-underwear.com/2018/' + result[selectIndex][resultIndex][selectI2]["img"] + '"></span>' 
					+ '<strong class="resultTitle alignCenter">' + result[selectIndex][resultIndex][selectI2]["title"] + '</strong>'
					+ '<div class="resultSub alignCenter">' + result[selectIndex][resultIndex][selectI2]["titleEn"] + '</div>'  
				+ '</a>';
			}
		}

		$("#result").before('<div class="loading"></div>');
		$("#result").find(".select").html(resultHtml);

		setTimeout(function(){
			$(".loading").remove();
			$("#result").removeClass('hide');

			$('#resultItem').owlCarousel('destroy');
			$(".owl-hidden").removeClass('owl-hidden');
			$('#resultItem').owlCarousel({
			    loop: true,
			    margin: 45,
			    autoWidth:false,
   				items:1,
   				dots: false,
   				responsiveClass:true,
   				responsive : {
				    768 : {
				    	autoWidth: true,
				        items:2,
				    }
				}
			});

			if(result[selectIndex][resultIndex].length > 2){
				$('.scrollLeft, .scrollRight').show();
			}else{
				$('.scrollLeft, .scrollRight').hide();
			}

			$('.scrollLeft').click(function() {
			    $('#resultItem').trigger('next.owl.carousel');

			    return false;
			})
			
			$('.scrollRight').click(function() {
			    $('#resultItem').trigger('prev.owl.carousel', [300]);

			    return false;
			})

			$("body,html").animate({
	          scrollTop: $("#result").offset().top - 150,
	        }, 1200);
		},1000)
	});

	$(".reload").on('click', function(event) {
		event.preventDefault();
		$('.selectItem').removeClass('active');

		$("body,html").animate({
          scrollTop: $("#select1").offset().top - 150,
        }, 600, function(){
        	$("#select2, #result").addClass('hide');
        	$("#select2, #result").find(".select").html('');
        });
	});
});

</script>