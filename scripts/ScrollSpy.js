(function(){
		var section=document.querySelectorAll('.ui-element-main');
		var sections=[];
		var i=0;

		for(i=0;i<section.length;i++) {
			sections.push({id:section[i].id,topPosition:section[i].offsetTop});
			
		}

		window.onscroll=function() {
			var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
			for(i=0;i<sections.length;i++) {
				if(sections[i].topPosition<=scrollPosition) {
					document.querySelector('.is-active').setAttribute('class'," ");
					document.querySelector("a[href*="+sections[i].id+"]").setAttribute('class',"is-active");
				}
			}
		};
})();