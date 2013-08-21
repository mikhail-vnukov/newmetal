function openRent() {
	open("#arenda-tab", "#arenda");	
}

function openWholesale() {
	open("#wholesale-tab", "#wholesale");	
}

function openContacts() {
	open("#contact-tab", "#contacts");	
}


function open(tabId, divId) {
	$(tabId).tab('show');
	$.scrollTo($(divId), 500);
}