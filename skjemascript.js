function empty(){
	let x = document.forms["abonner"];	

	if (x["fornavn"].value.length<2){
		document.getElementById("feilmelding").innerHTML="Fornavnet må være lengre enn 1 bokstav!";
		document.getElementById("registrert").innerHTML="";
		return false;
	} 
	if (x["etternavn"].value.length<2){
		document.getElementById("feilmelding").innerHTML="Etternavnet må være lengre enn 1 bokstav!";
		document.getElementById("registrert").innerHTML="";
		return false;
	}
	if (x["mobnr"].value<10000000 || x["mobnr"].value==""){
		document.getElementById("feilmelding").innerHTML="Mobilnummeret må være 8 eller flere tall!";
		document.getElementById("registrert").innerHTML="";
		return false;
	}
	if (x["adresse"].value.length<2){
		document.getElementById("feilmelding").innerHTML="Ugyldig adresse!";
		document.getElementById("registrert").innerHTML="";
		return false;
	}
	if (x["alder"].value<1 || x["alder"].value>200 || x["alder"].value==""){
		document.getElementById("feilmelding").innerHTML="Ugyldig alder!";
		document.getElementById("registrert").innerHTML="";
		return false;
	}
	let buttonReset=document.getElementById("input");
	buttonReset.addEventListener("click", resetTxt);

	function resetTxt() {
		document.getElementById("registrert").innerHTML="";
		document.getElementById("feilmelding").innerHTML="";
	}
	document.getElementById("feilmelding").innerHTML="";
    document.getElementById("registrert").innerHTML="Registrert! Du vil nå være oppdatert på våre nyeste produkter.";
	
	return false;
}
