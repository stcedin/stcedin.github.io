
$(document).ready(function() {
	var testNumLength = function(number) {
        if (number.length > 9) {
        	var numeric = parseInt(number, 10);
        	if (numeric < 0) {
        		alert("<0");
        		totaldiv.text(number.substr(0,8));
        	} else if (numeric > 999999999) {
        		totaldiv.text("Overflow");
        	} else {
        		totaldiv.text(number.substr(0,9));
        	}
        	number = "";
        }
    };

	var number = '';
	var newnumber = '';
	var operator = '';
	var totaldiv = $('#total');
	totaldiv.text("0");

    $("#numbers a").not("#clear,#clearall").click(function() {
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });

    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber=number;
		number='';
		totaldiv.text("0");
    });

    $("#clear").click(function(){
        number="";
        totaldiv.text("0");
    });
    $("#clearall").click(function(){
        number="";
        newnumber="";
        totaldiv.text("0");

    })
    $("#equals").click(function() {
        if ($(this).text() == "=") {
            var inum = parseInt(number, 10);
            var inewnum = parseInt(newnumber, 10);
            var result;
            if (operator === "+") {
                result = inewnum + inum;
            } else if (operator === "-") {
                result = inewnum - inum;
            } else if (operator === "/") {
                result = inewnum / inum;
            } else if (operator === "*") {
                result = inewnum * inum;
            }
            var display = result.toString();
            totaldiv.text(result);
            testNumLength(display);
            number = "";
            newnumber = "";
        }
    });
    
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
        	alert("Key press one");
            $("#one").click();
       } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 97) {
            $("#clearall").click();
        } else if (keycode === 99) {
            $("#clear").click();
        } else if (keycode === 61) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        } else if (keycode === 47) {
            $("#divide").click();
        } 
    });    
});
