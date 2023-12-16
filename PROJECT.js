function SelectFiliere() {
    var filiereSelect = document.getElementById("Filiere").value;
    var fsrUrlsmi = "http://www.fsr.ac.ma/content/sciences-math%C3%A9matiques-et-informatique";
    var fsrUrlsma = "http://www.fsr.ac.ma/content/sciences-math%C3%A9matiques-et-applications";
    var fsrUrlsmc = "http://www.fsr.ac.ma/content/sciences-de-la-mati%C3%A8re-chimie";
    var fsrUrlstu = "http://www.fsr.ac.ma/content/sciences-de-la-terre-et-de-l%E2%80%99univers";
    var fsrUrlsvi = "http://www.fsr.ac.ma/content/sciences-de-la-vie-svi";

    if(filiereSelect === "SMI"){
        window.location.href = fsrUrlsmi;
    }
    
    if(filiereSelect === "SMA"){
        window.location.href = fsrUrlsma;
    }

    if(filiereSelect === "SMC"){
        window.location.href = fsrUrlsmc;
    }

    if(filiereSelect === "STU"){
        window.location.href = fsrUrlstu;
    }

    if(filiereSelect === "SVI"){
        window.location.href = fsrUrlsvi;
    }

}


alert("Bienvenue sur Ma site Web ");
alert("Ma site web Il propose un service aux étudiants en faculté des sciences RABAT, tel que l'étudiant saisisse des informations et choisisse sa filière, et le site lui indique les Modules qu'il étudiera pour chaque semestre.");
