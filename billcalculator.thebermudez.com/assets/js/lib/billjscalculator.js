var bills = 0
var inputvalue = $('input').val();
var objectofvalues = [];

var buttonbilladder = function() {
	inputvalue = Number($('input').val());
	bills += inputvalue
	$('input').val('');
	return bills
};

var buttontotal = function() {
	alert(bills);
};