<script>
$(function(){
	selectInit();

	$("#sizeWrap1").change(function(event) {
		showSize();
	});

	$("#sizeWrap2").change(function(event) {
		showSize();
	});
});

function selectInit(){
  	var lang = $("html").attr("lang");
	selectWrap($(".sizeOptions:eq(0)"),1);
	selectWrap($(".sizeOptions:eq(1)"),2);

	if(lang == "en"){
		$("#sizeWrap1").append('<option>lower chest</option>');
	}else{
		$("#sizeWrap1").append('<option>下胸圍尺寸</option>');
	}

	for(i=68; i<=90; i++){
		$("#sizeWrap1").append('<option value="' + i + '">' + i + 'cm</option>');
	}

	if(lang == "en"){
		$("#sizeWrap2").append('<option>upper chest</option>');
	}else{
		$("#sizeWrap2").append('<option>上胸圍尺寸</option>');
	}	
  
  
	//-----------------------------
	for(j=77; j<=135; j++){
		$("#sizeWrap2").append('<option value="' + j + '">' + j + 'cm</option>');
	}

	$(".value").show();
}

function selectWrap($item, index){
	$selectWrap = '<select name="size' + index + '" id="sizeWrap' + index +'" class="selectpicker form-control form-control-sm form-control-inline ng-pristine ng-valid ng-touched"></select>';

	$item.append($selectWrap);
}

function showSize(){
	if($('#sizeWrap1')[0].selectedIndex==0) return;
	if($('#sizeWrap2')[0].selectedIndex==0) return;

	var vl = $('#sizeWrap1 option:selected').val();
	var vu = $('#sizeWrap2 option:selected').val();
	
	if(vl<=72) vl2 = 70;
	else if(vl<=77) vl2 = 75;
	else if(vl>=78) vl2 = 80;
	var vd = vu - vl;
	var cup = '';

	if(vd <=5 ) cup = '';
	else if(vd<=10) cup = 'B';
	else if(vd>=11 && vd <=15) cup = 'C';
	else if(vd>=16 && vd <=20) cup = 'D';
	else if(vd>=21 && vd <=25) cup = 'E';
	else if(vd>=26 && vd <=30) cup = 'F';
	else if(vd>=30) cup = 'G';
	var v = '';

	if(cup) v = vl2+cup;
	$('#el09').val(v);

	if(v=='70E') $('#el70E').removeClass('hidden'); else $('#el70E').addClass('hidden');
	if(v=='75E') $('#el75E').removeClass('hidden'); else $('#el75E').addClass('hidden');
	if(v=='80E') $('#el80E').removeClass('hidden'); else $('#el80E').addClass('hidden');
    if(v=='80D') $('#el80D').removeClass('hidden'); else $('#el80D').addClass('hidden');
	
	if(cup=='' || vd<1)  $('#ele1').removeClass('hidden'); else $('#ele1').addClass('hidden');
	if(cup=='F') $('#ele2').removeClass('hidden'); else $('#ele2').addClass('hidden');
}

</script>