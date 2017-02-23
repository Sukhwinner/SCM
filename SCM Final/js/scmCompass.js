filterData = null;
loadFilterData = null;
(function(){
	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

	//open and close menu when the button is clicked
	var open = false;
	//button.addEventListener('click', handler, false);		// false means bubbling up

	function handler(){
		
	  if(!open){
	    //this.innerHTML = "Close";
		classie.remove(wrapper, 'opened-nav');
		classie.remove(wrapper, 'opened-nav');
	    
	  }
	  else{
	    //this.innerHTML = "SCM";
		classie.add(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}
	
	 
})();

$(document).ready(function() {
     
	var subMenus = [], subMenusList=[];		
	$.getJSON("../scmData.js", function(result) {
		var compassData = result.Compass;
			filterData = result.Filters;
			
		/*
		 *	Looping through data to Render the Level 1 menu items on home page
		 */
		$.each(compassData, function(i, data) {
			var level1 = data,
				menus = level1.name,
				liElement = '<li class="menu"><a href="#"><span >'+ menus +'</span></a></li>';
			
			$(".menu-list").append(liElement).children().eq(i).addClass("item-"+i);	//.on("click",function() {			
			$.each(level1.level, function(j, ou) {
				var	level2 = ou;
				subMenusList.push(level2.name);
			}); 

			subMenus.push(subMenusList);
			subMenusList = [];
		});
		
		/*
		 *	Method to loop through data to Render the Filters on home page
		 */
		loadFilterData = function(fData) {
			$.each(fData, function(i, data) {
				var filterName = data.name,
					filterItems = data.level;
					$.each(filterItems, function(j, ops) {
						
						var options = ops.name,
							optValue = ops.value;
						//$("#sample").removeClass("[class^='color']"); {to write general code for classes}
					
						switch (i) {
							case 0:
								$(".metric-1").append('<option value='+ optValue + '>' + options + '</option>');
								break;
							case 1:
								$(".metric-2").append('<option value='+ j + '>' + options + '</option>');
								break;
							case 2:
								$(".metric-3").append('<option value='+ j + '>' + options + '</option>');
								break;
							case 3:
								$(".metric-4").append('<option value='+ j + '>' + options + '</option>');
								break;
						}
						
					});
				
			});
		}
		loadFilterData(filterData);
		/*
		 *	Click event for first Menu item from Level 1
		 */
		$(".item-0" ).on("click",function() {   
			$(".submenu-list-1").empty();
				var len = subMenus[0].length;
				for(j=0; j < len ; j++) {
					$(".submenu-list-1").append('<li class="sub-menu"><a href="#"><span>'+subMenus[0][j]+'</span></a></li>');
				}
			$(".submenu-list-2").empty();
			$(".submenu-list-3").empty();
			$("#cn-button").focus();
		});
		
		/*
		 *	Click event for Second Menu item from Level 1
		 */
		$(".item-1" ).on("click",function() {   
			$(".submenu-list-2").empty();
				var len = subMenus[1].length;
				for(j=0; j < len ; j++) {
					$(".submenu-list-2").append('<li class="sub-menu"><a href="#"><span>'+subMenus[1][j]+'</span></a></li>');
				}
			$(".submenu-list-1").empty();
			$(".submenu-list-3").empty();
			$("#cn-button").focus();
		});
		
		/*
		 *	Click event for Third Menu item from Level 1
		 */
		$(".item-2" ).on("click",function() {   
			$(".submenu-list-3").empty();
				s2len = subMenus[2].length;
				for(j=0; j < s2len ; j++) {
					$(".submenu-list-3").append('<li class="sub-menu"><a href="#"><span>'+subMenus[2][j]+'</span></a></li>');
				}
			$(".submenu-list-2").empty();
			$(".submenu-list-1").empty();
			$("#cn-button").focus();
		});
		
		$(".metric-4").change(function() {
			var url="../html/scm_filters.html"
			window.location = url;
		});
		$(".services").on("click", function() {
			var url="../html/scm_consulting.html";
			window.location = url;
		});
		$(".cn-button").on("click", function() {
			var url="../html/scm_strategy.html";
			window.location = url;
		});
		
	});	
		// $("#sample").removeClass("[class^='color']"); {to write general code for classes}
});