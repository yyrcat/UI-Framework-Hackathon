(function(){
		var body=document.querySelector('body');
		var headerHeight=document.querySelector('#navbar');

		body.onscroll=function() {
			var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
			if(headerHeight.offsetTop<=scrollPosition) {
				document.querySelector('#navbar').setAttribute('class',"col2 navbar--sticky");
			}
			else {
				document.querySelector('#navbar').setAttribute('class',"col2");
			}
				
		};
})();