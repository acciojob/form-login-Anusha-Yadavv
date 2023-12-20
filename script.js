function getFormvalue() {
    //Write your code here
	let formElement=document.getElementById("form1");
	let firstName=formElement.elements["fname"].value;
	let lastName=formElement.elements["lname"].value;
	alert(`${firstName} ${lastName}`)
	return false;
	

}
