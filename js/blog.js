<script>
  if($(".posts.show").length > 0){
    $( "html:lang(zh-hant)").find(".blog-post").append('<a href="#" class="backBtn">回上頁</a>');
    $( "html:lang(en)").find(".blog-post").append('<a href="#" class="backBtn">Back</a>');
    
    $(".backBtn").on('click', function(event) {
	    event.preventDefault();
	    history.go(-1);
	 });
  }
</script>