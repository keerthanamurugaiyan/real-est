function navigate( event,targetSection) {
    event.preventDefault();
    if (targetSection === "home") {
        document.querySelectorAll('section').forEach(section =>{section.style.display = "block"})
        document.getElementById("about").style.display = "none"
        document.getElementById("services").style.display = "none";
        document.getElementById("blog").style.display = "none";
        document.getElementById("pricing").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else {
        document.querySelectorAll('section').forEach(section =>{section.style.display = "none"})
        document.getElementById(targetSection).style.display = "block" 
    }
    
}
document.getElementById("about").style.display = "none";
document.getElementById("services").style.display = "none";
document.getElementById("blog").style.display = "none";
document.getElementById("pricing").style.display = "none";
document.getElementById("contact").style.display = "none";