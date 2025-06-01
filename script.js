var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
} 



// --------------------------menu-------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}

// Modal de Boas-vindas
document.addEventListener('DOMContentLoaded', function() {
    // Mostra o modal sempre que a página carregar
    document.getElementById('welcomeModal').style.display = 'block';
    
    // Fecha o modal quando clicar no X
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('welcomeModal').style.display = 'none';
    });
    
    // Fecha o modal quando clicar fora da imagem
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('welcomeModal')) {
            document.getElementById('welcomeModal').style.display = 'none';
        }
    });
});