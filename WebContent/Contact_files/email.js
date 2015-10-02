function send() {
	
	if (document.getElementById("firstName").value == '' || 
			document.getElementById("lastName").value == '' || 
			document.getElementById("email").value == '') {
		alert("Please complete the required fields.");
	} else {
		sendGmail({
			from: document.getElementById("email").value,
		    to: 'beckettmj@gmail.com',
		    subject: 'Sponsoring RoboLions',
		    message: 'Please contact me about sponsoring MCHS RoboLions!\n\n'+
		    		 'You can reach me at ' + document.getElementById("email").value+'\n\n'+
		    		 'Any additional info: ' + document.getElementById("additionalInformation").value+'\n\n'+
		             'Sincerely,\n'+
		             document.getElementById("firstName").value + ' ' + document.getElementById("lastName").value
		});
	}
	
}

var sendGmail = function(opts){
    var url = 'http://mail.google.com/mail/?view=cm&fs=1'+
              '&to=' + opts.to +
              '&su=' + opts.subject +
              '&body=' + opts.message.replace(/\n/g,'%0A') +
              '&ui=1';
//    location.href = url;
    window.open(url, '_blank');
    
}