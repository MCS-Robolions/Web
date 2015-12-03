function validForm() {
	if (document.getElementById("firstName").value == '' || 
			document.getElementById("lastName").value == '' || 
			document.getElementById("email").value == '') {
		return false;
	} 
	
	return true;	
}
