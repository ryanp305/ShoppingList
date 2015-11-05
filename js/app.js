/* function for adding items to the shopping list using the add to list button and enter key */
function addItem() {
	var itemValue = $('#add-item').val();
	var row = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + itemValue + '</span><button class="delete" id="remove-button">x</button></li>');
	$('#list').append(row);
}

/*function to remove an item from the list clicking on the 'x' */
function removeItem() {
	$(this).parent().remove();
}

/*function to select an item to cross out */
function crossOut() {
	$(this).parent().toggleClass('cross-out');
}

/*function to reset and clear the list */
function clearList() {
	$('#list').empty();
}	

/*the following 2 functions calls should be INSIDE the $(document).ready(function() becuase the targeted containers where created WHEN the page was loaded*/
$(document).ready(function() {
	/*on click of the add to list button id add-button action add item */
	$('#add-button').on('click', addItem);
	
	
	/*on click of the reset list button id startover action reset list */
	$('#startover').on('click', clearList);

});

/*the following 2 functions calls should be OUTSIDE the $(document).ready(function() becuase the targeted containers where created AFTER the page was loaded*/

/*on click of the 'x' button id remove-button action remove item */
	$(document).on('click', '#remove-button', removeItem);
	
/*on click of a list item id cross-out action cross out item */
	$(document).on('click', '.checkbox', crossOut);

/* on enter key add item to list */
$(document).on('keypress', "#add-item", function(key)  {
		if (key.keyCode == 13) {	
            addItem();
        }  
    });



