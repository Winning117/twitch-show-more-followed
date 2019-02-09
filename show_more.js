$(document).ready(function() {
	//call twice because you have to "Show More" twice
	waitForElementToDisplay("button[data-a-target=side-nav-show-more-button]",50);
	waitForElementToDisplay("button[data-a-target=side-nav-show-more-button]",50);
	
	function waitForElementToDisplay(selector, time) {
        if(document.querySelector(selector)!=null) {
				//PUT CODE BELOW
				$("button[data-a-target=side-nav-show-more-button]").click();
				console.log("CLICKED");
				
				$("button[data-a-target=side-nav-show-less-button]").remove();
				console.log("Removed Show Less button");
				//PUT CODE ABOVE
            return;
        }
        else {
            setTimeout(function() {
                waitForElementToDisplay(selector, time);
            }, time);
        }
    }
});