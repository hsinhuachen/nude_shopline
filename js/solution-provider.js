<script>
var lang = $("html").attr("lang");
var turn = ['A','B','C','D'];

if(lang == "en"){
	var solutionA = ['Well-Rounded','Bottom-happy','Uneven','Wide & Low'];
	var solutionB = [];

	var b1 = {'title':'超完美無痕','titleEn':'Perfect Seamless','desc':'Classic Style that provides every-day comfort. ','img': 'a_b1.jpg','link': '/products/超完美無痕'};
	var b2 = {'title':'天使蕾絲抹胸','titleEn':'Lace Bandeau','desc':'Fashion style that would do various coordination ','img': 'a_b2.jpg','link': '/products/天使蕾絲抹胸'};
	var b3 = {'title':'超完美無鋼圈','titleEn':'Perfect Wireless','desc':'Classic Style that provides every-day comfort. ','img': 'a_b3.jpg','link': '/products/超完美無鋼圈'};

	var f1 = {'title':'魔幻時尚前扣','titleEn':'Strapless Convertible','desc':'Fashion style that would do various coordination ','img': 'a_f1.jpg','link': '/products/魔幻時尚前扣'};
	var f2 = {'title':'心機美背內衣','titleEn':'Front-click RacerBack','desc':'Fashion style that would do various coordination ','img': 'a_f2.jpg','link': '/products/心機美背透視'};
	var f3 = {'title':'甜蜜假期波蕾','titleEn':'Holiday Bralette','desc':'Fashion style that would do various coordination ','img': 'a_f3.jpg','link': '/products/甜蜜假期波蕾'};
	var f4 = {'title':'雙面女伶貝蕾','titleEn':'Duet Balconette','desc':'Fashion style that would do various coordination ','img': 'a_f4.jpg','link': '/products/雙面女伶貝蕾'};

	var r1 = {'title':'浪漫四蕾絲','titleEn':'Lace Push-up','desc':'Romantic style that releases the feminine charm.','img': 'a_r1.jpg','link': '/products/浪漫四蕾絲'};
	var r2 = {'title':'純真雪紡貝蕾','titleEn':'Chiffon Balconette','desc':'','img': 'a_r2.jpg','link': '/products/純真雪紡貝蕾'};
	var r3 = {'title':'翩愛戀人波蕾','titleEn':'Beloved Bralette','desc':'Romantic style that releases the feminine charm.','img': 'a_r3.jpg','link': '/products/翩愛戀人波蕾'};
	var r4 = {'title':'偷心密探薄蕾','titleEn':'Sheer Bra','desc':'','img': 'a_r4.jpg','link': '/products/偷心密探法式薄蕾'};

	var s1 = {'title':'超激塑 ALL IN ONE 纖體衣','titleEn':'Shape Suit','desc':'Shape Wear that keeps the body slim and firm.','img': 'a_s1.jpg','link': '/products/超激塑all-in-one纖體衣'};
	var s2 = {'title':'灧色蝶燦內衣','titleEn':'Lace Bustier','desc':'Romantic style that releases the feminine charm.','img': 'a_s2.jpg','link': '/products/灎色蝶燦'};
	var s3 = {'title':'超激塑高腰纖體褲','titleEn':'Shape Suit','desc':'','img': 'a_s3.jpg','link': '/products/超激塑高腰纖體褲'};

	solutionB[0] = ['Slim & Flattering','Natural','Fully-Covered'];
	solutionB[1] = ['Push-in','Push-up','Unpretentious'];
	solutionB[2] = ['Focus Switching','Body Shaping'];
	solutionB[3] = ['Lifting','Ultra Support','Molding'];
}else{
	var solutionA = ['渾圓飽滿<br />Well-Rounded','上胸平坦<br />Bottom-happy','左右不一<br />Uneven','外擴下垂<br />Well-Rounded'];
	var solutionB = [];

	var b1 = {'title':'超完美無痕','titleEn':'Perfect Seamless','desc':'落實每日舒適質感生活概念的經典款式','img': 'a_b1.jpg','link': '/products/超完美無痕'};
	var b2 = {'title':'天使蕾絲抹胸','titleEn':'Lace Bandeau','desc':'能呈現多元穿搭的時尚款式','img': 'a_b2.jpg','link': '/products/天使蕾絲抹胸'};
	var b3 = {'title':'超完美無鋼圈','titleEn':'Perfect Wireless','desc':'落實每日舒適質感生活概念的經典款式','img': 'a_b3.jpg','link': '/products/超完美無鋼圈'};

	var f1 = {'title':'魔幻時尚前扣','titleEn':'Strapless Convertible','desc':'能呈現多元穿搭的時尚款式','img': 'a_f1.jpg','link': '/products/魔幻時尚前扣'};
	var f2 = {'title':'心機美背內衣','titleEn':'Front-click RacerBack','desc':'能呈現多元穿搭的時尚款式','img': 'a_f2.jpg','link': '/products/心機美背透視'};
	var f3 = {'title':'甜蜜假期波蕾','titleEn':'Holiday Bralette','desc':'能呈現多元穿搭的時尚款式','img': 'a_f3.jpg','link': '/products/甜蜜假期波蕾'};
	var f4 = {'title':'雙面女伶貝蕾','titleEn':'Duet Balconette','desc':'能呈現多元穿搭的時尚款式','img': 'a_f4.jpg','link': '/products/雙面女伶貝蕾'};

	var r1 = {'title':'浪漫四蕾絲','titleEn':'Lace Push-up','desc':'將性感魅力淋漓呈現的夢幻款式','img': 'a_r1.jpg','link': '/products/浪漫四蕾絲'};
	var r2 = {'title':'純真雪紡貝蕾','titleEn':'Chiffon Balconette','desc':'','img': 'a_r2.jpg','link': '/products/純真雪紡貝蕾'};
	var r3 = {'title':'翩愛戀人波蕾','titleEn':'Beloved Bralette','desc':'將性感魅力淋漓呈現的夢幻款式','img': 'a_r3.jpg','link': '/products/翩愛戀人波蕾'};
	var r4 = {'title':'偷心密探薄蕾','titleEn':'Sheer Bra','desc':'','img': 'a_r4.jpg','link': '/products/偷心密探法式薄蕾'};

	var s1 = {'title':'超激塑 ALL IN ONE 纖體衣','titleEn':'Shape Suit','desc':'協助女性對抗身體老化維持身體窈窕曲線的修身款式','img': 'a_s1.jpg','link': '/products/超激塑all-in-one纖體衣'};
	var s2 = {'title':'灧色蝶燦內衣','titleEn':'Lace Bustier','desc':'將性感魅力淋漓呈現的夢幻款式','img': 'a_s2.jpg','link': '/products/灎色蝶燦'};
	var s3 = {'title':'超激塑高腰纖體褲','titleEn':'Shape Suit','desc':'','img': 'a_s3.jpg','link': '/products/超激塑高腰纖體褲'};

	solutionB[0] = ['顯瘦<br />Slim & Flattering','自然<br />Natural','包覆<br />Fully-Covered'];
	solutionB[1] = ['豐盈飽滿<br />Push-in','托高上挺<br />Push-up','不做作<br />Unpretentious'];
	solutionB[2] = ['視覺轉移<br />Focus Switching','調整身型<br />Body Shaping'];
	solutionB[3] = ['拉提抗贅<br />Lifting','全面支撐<br />Ultra Support','溫和塑型<br />Molding'];
}

//----------------------------------------------------------

result[0] = [];
result[1] = [];
result[2] = [];
result[3] = [];

result[0][0] = [f3,r3];
result[0][1] = [b1,s1];
result[0][2] = [b3,s2];

result[1][0] = [b2,r1];
result[1][1] = [b1,f1];
result[1][2] = [b3,f4];

result[2][0] = [b2,f2];
result[2][1] = [s1,s2];

result[3][0] = [f1,f2];
result[3][1] = [s1,s2];
result[3][2] = [b1,b3];

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
					+ '<p>' + result[selectIndex][resultIndex][selectI2]["desc"] + '</p>' 
				+ '</a>';
			}else{
				resultHtml = resultHtml + '<a href="' + result[selectIndex][resultIndex][selectI2]["link"] + '" class="resultItem">'
					+ '<span class="img"><img src="//www.nude-underwear.com/2018/' + result[selectIndex][resultIndex][selectI2]["img"] + '"></span>' 
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
			    loop: false,
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

			$('.scrollLeft').click(function() {
			    $('#resultItem').trigger('next.owl.carousel');
			})
			
			$('.scrollRight').click(function() {
			    $('#resultItem').trigger('prev.owl.carousel', [300]);
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