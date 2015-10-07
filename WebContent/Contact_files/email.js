function send() {
	
	if (document.getElementById("firstName").value == '' || 
			document.getElementById("lastName").value == '' || 
			document.getElementById("email").value == '') {
		alert("Please complete the required fields.");
	} else {
		sendEmail({
			from: document.getElementById("email").value,
		    to: 'mchsrobolions@gmail.com',
		    subject: 'Sponsoring RoboLions',
		    body: 'Please contact me about sponsoring MCHS RoboLions!\n\n'+
		    		 'You can reach me at ' + document.getElementById("email").value+'\n\n'+
		    		 'Any additional info: ' + document.getElementById("additionalInformation").value+'\n\n'+
		             'Sincerely,\n'+
		             document.getElementById("firstName").value + ' ' + document.getElementById("lastName").value
		});
	}
	
}

var sendEmail = function(opts){
    var url = 'mailto:' + opts.to + 
    		  '?subject=' + opts.subject + 
    		  '&body=' + opts.body.replace(/\n/g,'%0A');
    window.location.href = url;
}

