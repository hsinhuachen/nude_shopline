<script>
//機能方案
var lang = $("html").attr("lang");
var turn = ['A','B','C','D'];

if(lang == "en"){
	var solutionA = ['Well-Rounded','Bottom-happy','Uneven','Wide & Low'];
	var solutionB = [];

	var b1 = {'title':'超完美無痕','titleEn':'Perfect Seamless','desc':'Classic Style that provides every-day comfort. ','img': '//www.nude-underwear.com/2018/a_b1.jpg','link': '/products/超完美無痕'};
	var b2 = {'title':'天使蕾絲抹胸','titleEn':'Lace Bandeau','desc':'Fashion style that would do various coordination ','img': '//www.nude-underwear.com/2018/a_b2.jpg','link': '/products/天使蕾絲抹胸'};
	var b3 = {'title':'超完美無鋼圈','titleEn':'Perfect Wireless','desc':'Classic Style that provides every-day comfort. ','img': '//www.nude-underwear.com/2018/a_b3.jpg','link': '/products/超完美無鋼圈'};
	var b4 = {'title':'超感動舒服蕾','titleEn':"Jumper's Leisuree",'desc':'','img': '//www.nude-underwear.com/2018/a_b4.JPG','link': '/products/nude-base-jumper-leisuree'};
	var b5 = {'title':'甜蜜假期波蕾','titleEn':'Holiday Bralette','desc':'','img': '//www.nude-underwear.com/2018/a_f3.jpg','link': '/products/甜蜜假期波蕾'};

	var f1 = {'title':'魔幻時尚前扣','titleEn':'Strapless Convertible','desc':'Fashion style that would do various coordination ','img': '//www.nude-underwear.com/2018/a_f1.jpg','link': '/products/魔幻時尚前扣'};
	var f2 = {'title':'心機美背內衣','titleEn':'Front-click RacerBack','desc':'Fashion style that would do various coordination ','img': '//www.nude-underwear.com/2018/a_f2.jpg','link': '/products/心機美背透視'};
	var f4 = {'title':'雙面女伶貝蕾','titleEn':'Duet Balconette','desc':'Fashion style that would do various coordination ','img': '//www.nude-underwear.com/2018/a_f4.jpg','link': '/products/雙面女伶貝蕾'};
	var f5 = {'title':'V溝影開襟內衣','titleEn':'Deep Plunge Bra','desc':'','img': '//www.nude-underwear.com/2018/a_f5.jpg','link': '/products/nude-fashion-optimal-v-plunge-bra'};
	var f6 = {'title':'絕美雕花舒服蕾','titleEn':'Lace Leisuree','desc':'','img': '//www.nude-underwear.com/2018/a_f6.jpg','link': '/products/絕美雕花舒服蕾'};

	var r1 = {'title':'浪漫四蕾絲','titleEn':'Lace Push-up','desc':'Romantic style that releases the feminine charm.','img': '//www.nude-underwear.com/2018/a_r1.jpg','link': '/products/浪漫四蕾絲'};
	var r2 = {'title':'純真雪紡貝蕾','titleEn':'Chiffon Balconette','desc':'','img': '//www.nude-underwear.com/2018/a_r2.jpg','link': '/products/純真雪紡貝蕾'};
	var r3 = {'title':'翩愛戀人波蕾','titleEn':'Beloved Bralette','desc':'Romantic style that releases the feminine charm.','img': '//www.nude-underwear.com/2018/a_r3.jpg','link': '/products/翩愛戀人波蕾'};	
	var r4 = {'title':'偷心密探法式薄蕾','titleEn':'Sheer Bra','desc':'','img': '//www.nude-underwear.com/2018/a_r4.jpg','link': '/products/偷心密探法式薄蕾'};
	var r5 = {'title':'花漾美人法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'','img': '//www.nude-underwear.com/2018/a_r5.jpg','link': '/products/花漾美人法式薄蕾'};

	var s1 = {'title':'超激塑 ALL IN ONE 纖體衣','titleEn':'Shape Suit','desc':'Shape Wear that keeps the body slim and firm.','img': '//www.nude-underwear.com/2018/a_s1.jpg','link': '/products/超激塑all-in-one纖體衣'};	
	var s2 = {'title':'灧色蝶燦內衣','titleEn':'Lace Bustier','desc':'Romantic style that releases the feminine charm.','img': '//www.nude-underwear.com/2018/a_s2.jpg','link': '/products/灎色蝶燦'};	
	var s3 = {'title':'超激塑高腰纖體褲','titleEn':'Shape Suit','desc':'','img': '//www.nude-underwear.com/2018/a_s3.jpg','link': '/products/超激塑高腰纖體褲'};

	var p1 = {'title':'極緻美型布鋼圈','titleEn':'Ultimate Wirless','desc':'','img': '//www.nude-underwear.com/2018/a_p1.jpg','link': '/products/極緻美型布鋼圈內衣'};
	var p2 = {'title':'華麗年代法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'','img': '//www.nude-underwear.com/2018/a_p2.jpg','link': '/products/華麗年代法式薄蕾'};
	var p3 = {'title':'微醺透視蕾絲抹胸', 'titleEn': 'See-thru Lace Cami Bra', 'desc': '透視網紗拼接同色蕾絲<br />華麗效果滿分','img': 'https://img.shoplineapp.com/media/image_clips/62d53529ea5f480e6858718f/original.jpg?1658139945','link': '/products/new-see-thru-lace-cami'};

	var l1 = {'title':'絲柔光璨短袖上衣','titleEn':'Nude Nightwear Short Top','desc':'','img': '//www.nude-underwear.com/2018/a_l1.jpg','link': '/products/絲柔光燦短袖上衣'};
	var l2 = {'title':'絲柔光璨深V背心','titleEn':'Nude Nightwear Silky V Camisole','desc':'','img': '//www.nude-underwear.com/2018/a_l2.jpg','link': '/products/nude-nightwear-silky-v-camisole'};
	var l3 = {'title':'絲柔光璨短褲','titleEn':'Nude Nightwear Short Pants','desc':'','img': '//www.nude-underwear.com/2018/a_l3.jpg','link': '/products/絲柔光燦短褲'};
	var l4 = {'title':'絲柔光璨長褲','titleEn':'Nude Nightwear Long Pants','desc':'','img': '//www.nude-underwear.com/2018/a_l4.jpg','link': '/products/絲柔光燦長褲'};
	var l5 = {'title':'絲柔光璨深V連身裙','titleEn':'Nude Nightwear Midi Dress','desc':'','img': '//www.nude-underwear.com/2018/a_l5.jpg','link': '/products/絲柔光璨深v連身裙'};
	var l6 = {'title':'絲柔光璨長袍','titleEn':'Nude Nightwear Silky Robe','desc':'','img': '//www.nude-underwear.com/2018/a_l6.jpg','link': '/products/nude-nightwear-silky-robe'};


	var sub1 = 'Slim & Flattering';
	var sub2 = 'Natural';
	var sub3 = 'Fully-Covered';
	var sub4 = 'Push-in';
	var sub5 = 'Push-up';
	var sub6 = 'Unpretentious';
	var sub7 = 'Focus Switching';
	var sub8 = 'Body Shaping';
	var sub9 = 'Lifting';
	var sub10 = 'Ultra Support';
	var sub11 = 'Molding';

}else{
	var solutionA = ['渾圓飽滿<br />Well-Rounded','上胸平坦<br />Bottom-happy','左右不一<br />Uneven','外擴下垂<br />Well-Rounded'];
	var solutionB = [];

	var b1 = {'title':'超完美無痕','titleEn':'Perfect Seamless','desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b1.jpg','link': '/products/超完美無痕'};
	var b2 = {'title':'天使蕾絲抹胸','titleEn':'Lace Bandeau','desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b2.jpg','link': '/products/天使蕾絲抹胸'};
	var b3 = {'title':'超完美無鋼圈','titleEn':'Perfect Wireless','desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b3.jpg','link': '/products/超完美無鋼圈'};
	var b4 = {'title':'超感動舒服蕾','titleEn':"Jumper's Leisuree",'desc':'落實每日舒適、質感生活概念<br/>的經典款式','img': '//www.nude-underwear.com/2018/a_b4.JPG','link': '/products/nude-base-jumper-leisuree'};
	var b5 = {'title':'甜蜜假期波蕾','titleEn':'Holiday Bralette','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f3.jpg','link': '/products/甜蜜假期波蕾'};

	var f1 = {'title':'魔幻時尚前扣','titleEn':'Strapless Convertible','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f1.jpg','link': '/products/魔幻時尚前扣'};
	var f2 = {'title':'心機美背內衣','titleEn':'Front-click RacerBack','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f2.jpg','link': '/products/心機美背透視'};
	var f4 = {'title':'雙面女伶貝蕾','titleEn':'Duet Balconette','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f4.jpg','link': '/products/雙面女伶貝蕾'};
	var f5 = {'title':'V溝影開襟內衣','titleEn':'Deep Plunge Bra','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f5.jpg','link': '/products/nude-fashion-optimal-v-plunge-bra'};
	var f6 = {'title':'絕美雕花舒服蕾','titleEn':'Lace Leisuree','desc':'能呈現多元穿搭風貌的時尚款式','img': '//www.nude-underwear.com/2018/a_f6.jpg','link': '/products/絕美雕花舒服蕾'};

	var r1 = {'title':'浪漫四蕾絲','titleEn':'Lace Push-up','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r1.jpg','link': '/products/浪漫四蕾絲'};
	var r2 = {'title':'純真雪紡貝蕾','titleEn':'Chiffon Balconette','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r2.jpg','link': '/products/純真雪紡貝蕾'};
	var r3 = {'title':'翩愛戀人波蕾','titleEn':'Beloved Bralette','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r3.jpg','link': '/products/翩愛戀人波蕾'};
	var r4 = {'title':'偷心密探法式薄蕾','titleEn':'Sheer Bra','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r4.jpg','link': '/products/偷心密探法式薄蕾'};
	var r5 = {'title':'花漾美人法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_r5.jpg','link': '/products/花漾美人法式薄蕾'};

	var s1 = {'title':'超激塑 ALL IN ONE 纖體衣','titleEn':'Shape Suit','desc':'協助女性對抗身體老化<br/>維持身體窈窕曲線的修身款式','img': '//www.nude-underwear.com/2018/a_s1.jpg','link': '/products/超激塑all-in-one纖體衣'};
	var s2 = {'title':'灧色蝶燦內衣','titleEn':'Lace Bustier','desc':'將性感魅力淋漓呈現的夢幻款式','img': '//www.nude-underwear.com/2018/a_s2.jpg','link': '/products/灎色蝶燦'};
	var s3 = {'title':'超激塑高腰纖體褲','titleEn':'Shape Suit','desc':'','img': '//www.nude-underwear.com/2018/a_s3.jpg','link': '/products/超激塑高腰纖體褲'};

	var p1 = {'title':'極緻美型布鋼圈','titleEn':'Ultimate Wirless','desc':'提供給講究舒適感與時尚美型<br/>的精緻女性','img': '//www.nude-underwear.com/2018/a_p1.jpg','link': '/products/極緻美型布鋼圈內衣'};
	var p2 = {'title':'華麗年代法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'提供給講究舒適感與時尚美型<br/>的精緻女性','img': '//www.nude-underwear.com/2018/a_p2.jpg','link': '/products/華麗年代法式薄蕾'};
	var p3 = {'title':'微醺透視蕾絲抹胸', 'titleEn': 'See-thru Lace Cami Bra', 'desc': '透視網紗拼接同色蕾絲<br />華麗效果滿分','img': 'https://img.shoplineapp.com/media/image_clips/62d53529ea5f480e6858718f/original.jpg?1658139945','link': '/products/new-see-thru-lace-cami'};

	var l1 = {'title':'絲柔光璨短袖上衣','titleEn':'Nude Nightwear Short Top','desc':'','img': '//www.nude-underwear.com/2018/a_l1.jpg','link': '/products/絲柔光燦短袖上衣'};
	var l2 = {'title':'絲柔光璨深V背心','titleEn':'Nude Nightwear Silky V Camisole','desc':'','img': '//www.nude-underwear.com/2018/a_l2.jpg','link': '/products/nude-nightwear-silky-v-camisole'};
	var l3 = {'title':'絲柔光璨短褲','titleEn':'Nude Nightwear Short Pants','desc':'','img': '//www.nude-underwear.com/2018/a_l3.jpg','link': '/products/絲柔光燦短褲'};
	var l4 = {'title':'絲柔光璨長褲','titleEn':'Nude Nightwear Long Pants','desc':'','img': '//www.nude-underwear.com/2018/a_l4.jpg','link': '/products/絲柔光燦長褲'};
	var l5 = {'title':'絲柔光璨深V連身裙','titleEn':'Nude Nightwear Midi Dress','desc':'','img': '//www.nude-underwear.com/2018/a_l5.jpg','link': '/products/絲柔光璨深v連身裙'};
	var l6 = {'title':'絲柔光璨長袍','titleEn':'Nude Nightwear Silky Robe','desc':'','img': '//www.nude-underwear.com/2018/a_l6.jpg','link': '/products/nude-nightwear-silky-robe'};


	var sub1 = '顯瘦<br />Slim & Flattering';//ㄅ 
	var sub2 = '自然<br />Natural'; //ㄆ
	var sub3 = '包覆<br />Fully-Covered'; //ㄇ
	var sub4 = '豐盈飽滿<br />Push-in'; //ㄈ 
	var sub5 = '托高上挺<br />Push-up'; //ㄉ  
	var sub6 = '不做作<br />Unpretentious'; //ㄊ
	var sub7 = '視覺轉移<br />Focus Switching'; //ㄋ 
	var sub8 = '調整身型<br />Body Shaping'; //ㄌ
	var sub9 = '拉提抗贅<br />Lifting'; // ㄍ 
	var sub10 = '全面支撐<br />Ultra Support'; // ㄎ 
	var sub11 = '溫和塑型<br />Molding'; // ㄏ 
}

solutionB[0] = [sub1,sub2,sub3];
solutionB[1] = [sub4,sub5,sub6];
solutionB[2] = [sub7,sub8];
solutionB[3] = [sub9,sub10,sub11];


//----------------------------------------------------------

result[0] = [];
result[1] = [];
result[2] = [];
result[3] = [];
result[0][0] = [b5,f6,r3];
result[0][1] = [f4,r4,r5,p2];
result[0][2] = [b3,b4,f5,f6,p1];

result[1][0] = [b2,r1,r2,p3];
result[1][1] = [b1,r1,f1,f2];
result[1][2] = [b1,b3,b4,r4];

result[2][0] = [b2,f2,f5,f6];
result[2][1] = [s1,s2,p1,p3];

result[3][0] = [f5,p1,p3];
result[3][1] = [r5,p2,p3];
result[3][2] = [b3,p1];

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
					+ '<span class="img"><img src="' + result[selectIndex][resultIndex][selectI2]["img"] + '"></span>' 
					+ '<strong class="resultTitle alignCenter">' + result[selectIndex][resultIndex][selectI2]["titleEn"] + '</strong>'
					+ '<p>' + result[selectIndex][resultIndex][selectI2]["desc"] + '</p>' 
				+ '</a>';
			}else{
				resultHtml = resultHtml + '<a href="' + result[selectIndex][resultIndex][selectI2]["link"] + '" class="resultItem">'
					+ '<span class="img"><img src="' + result[selectIndex][resultIndex][selectI2]["img"] + '"></span>' 
					+ '<strong class="resultTitle alignCenter">' + result[selectIndex][resultIndex][selectI2]["title"] + '</strong>'
					+ '<div class="resultSub alignCenter">' + result[selectIndex][resultIndex][selectI2]["titleEn"] + '</div>' 
					+ '<p>' + result[selectIndex][resultIndex][selectI2]["desc"] + '</p>' 
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
				    768: {
				    	autoWidth: true,
				        items:2,
				    }
				}
			});

			$('.scrollLeft').click(function(e) {
			    $('#resultItem').trigger('next.owl.carousel');

			    return false;
			})
			
			$('.scrollRight').click(function(e) {
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