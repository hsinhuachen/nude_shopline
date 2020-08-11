<script>
var lang = $("html").attr("lang");
var turn = ['A','B','C','D','E','F'];

var b1 = {'title':'超完美無痕','titleEn':'Perfect Seamless','desc':'落實每日舒適質感生活概念的經典款式','img': 'a_b1.jpg','link': '/products/超完美無痕'};
var b2 = {'title':'天使蕾絲抹胸','titleEn':'Lace Bandeau','desc':'能呈現多元穿搭的時尚款式','img': 'a_b2.jpg','link': '/products/天使蕾絲抹胸'};
var b3 = {'title':'超完美無鋼圈','titleEn':'Perfect Wireless','desc':'落實每日舒適質感生活概念的經典款式','img': 'a_b3.jpg','link': '/products/超完美無鋼圈'};
var b4 = {'title':'超感動舒服蕾','titleEn':"Jumper's Leisuree",'desc':'舒服自在好敢動 Y字美背超透膚','img': 'a_b4.JPG','link': '/products/nude-base-jumper-leisuree'};
var b5 = {'title':'甜蜜假期波蕾','titleEn':'Holiday Bralette','desc':'能呈現多元穿搭的時尚款式','img': 'a_f3.jpg','link': '/products/甜蜜假期波蕾'};

var f1 = {'title':'魔幻時尚前扣','titleEn':'Strapless Convertible','desc':'能呈現多元穿搭的時尚款式','img': 'a_f1.jpg','link': '/products/魔幻時尚前扣'};
var f2 = {'title':'心機美背內衣','titleEn':'Front-click RacerBack','desc':'能呈現多元穿搭的時尚款式','img': 'a_f2.jpg','link': '/products/心機美背透視'};
var f4 = {'title':'雙面女伶貝蕾','titleEn':'Duet Balconette','desc':'能呈現多元穿搭的時尚款式','img': 'a_f4.jpg','link': '/products/雙面女伶貝蕾'};
var f5 = {'title':'V 溝影開襟內衣','titleEn':'Deep Plunge Bra','desc':'極致深V，迷人溝影，輕盈透亮，優雅身影，動靜非凡','img': 'a_f5.jpg','link': '/products/nude-fashion-optimal-v-plunge-bra'};
var f6 = {'title':'絕美雕花舒服蕾','titleEn':'Lace Leisuree','desc':'最美貌的全蕾絲無鋼圈內搭 纖薄，包覆 ，深Ｖ，美背 一次擁有','img': 'a_f6.jpg','link': '/products/絕美雕花舒服蕾'};

var r1 = {'title':'浪漫四蕾絲','titleEn':'Lace Push-up','desc':'將性感魅力淋漓呈現的夢幻款式','img': 'a_r1.jpg','link': '/products/浪漫四蕾絲'};
var r2 = {'title':'純真雪紡貝蕾','titleEn':'Chiffon Balconette','desc':'','img': 'a_r2.jpg','link': '/products/純真雪紡貝蕾'};
var r3 = {'title':'翩愛戀人波蕾','titleEn':'Beloved Bralette','desc':'將性感魅力淋漓呈現的夢幻款式','img': 'a_r3.jpg','link': '/products/翩愛戀人波蕾'};
var r4 = {'title':'偷心密探薄蕾','titleEn':'Sheer Bra','desc':'','img': 'a_r4.jpg','link': '/products/偷心密探法式薄蕾'};
var r5 = {'title':'花漾美人法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'','img': 'a_r5.jpg','link': '/products/花漾美人法式薄蕾'};

var s1 = {'title':'超激塑 ALL IN ONE 纖體衣','titleEn':'Shape Suit','desc':'協助女性對抗身體老化維持身體窈窕曲線的修身款式','img': 'a_s1.jpg','link': '/products/超激塑all-in-one纖體衣'};
var s2 = {'title':'灧色蝶燦內衣','titleEn':'Lace Bustier','desc':'將性感魅力淋漓呈現的夢幻款式','img': 'a_s2.jpg','link': '/products/灎色蝶燦'};
var s3 = {'title':'超激塑高腰纖體褲','titleEn':'Shape Suit','desc':'','img': 'a_s3.jpg','link': '/products/超激塑高腰纖體褲'};

var p1 = {'title':'極緻美型布鋼圈','titleEn':'Ultimate Wirless','desc':'','img': 'a_p1.jpg','link': '/products/極緻美型布鋼圈內衣'};
var p2 = {'title':'華麗年代法式薄蕾','titleEn':'Belle Epoque Sheer Bra','desc':'','img': 'a_p2.jpg','link': '/products/華麗年代法式薄蕾'};

var l1 = {'title':'絲柔光璨短袖上衣','titleEn':'Nude Nightwear Short Top','desc':'','img': 'a_l1.jpg','link': '/products/絲柔光燦短袖上衣'};
var l2 = {'title':'絲柔光璨深V背心','titleEn':'Nude Nightwear Silky V Camisole','desc':'','img': 'a_l2.jpg','link': '/products/nude-nightwear-silky-v-camisole'};
var l3 = {'title':'絲柔光璨短褲','titleEn':'Nude Nightwear Short Pants','desc':'','img': 'a_l3.jpg','link': '/products/絲柔光燦短褲'};
var l4 = {'title':'絲柔光璨長褲','titleEn':'Nude Nightwear Long Pants','desc':'','img': 'a_l4.jpg','link': '/products/絲柔光燦長褲'};
var l5 = {'title':'絲柔光璨深V連身裙','titleEn':'Nude Nightwear Midi Dress','desc':'','img': 'a_l5.jpg','link': '/products/絲柔光璨深v連身裙'};
var l6 = {'title':'絲柔光璨長袍','titleEn':'Nude Nightwear Silky Robe','desc':'','img': 'a_l6.jpg','link': '/products/nude-nightwear-silky-robe'};


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

solutionB[0] = [sub1,sub2,sub3];
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

result[1][0] = [b3,b4,b5,f6,p1];
result[1][1] = [l1,l2,l3,l4,l5,l6];

result[2][0] = [b1,b2,f2,f5,p1];
result[2][1] = [b1,f1,f2,f5,p1];

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