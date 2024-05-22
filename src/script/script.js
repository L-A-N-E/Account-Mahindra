// Open Menu Mobile
function openMenu(){
    const open = document.querySelector('.nav-mobile')
    open.style.display = 'flex'
}

// Close Menu Mobile
function closeMenu(){
    const close = document.querySelector('.nav-mobile')
    close.style.display = 'none'
}


// Effect Hover
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-desktop ul li a');

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.classList.add('hover-underline');
        });

        link.addEventListener('mouseleave', function() {
            link.classList.remove('hover-underline');
        });
    });
});



// Seleciona o elemento <details>
const details = document.getElementById('languageDetails');
        
// Seleciona todas as opções de idiomas
const options = document.querySelectorAll('.languageOption');

// Adiciona um listener de clique a cada opção
options.forEach(option => {
    option.addEventListener('click', function(event) {
        // Fecha o elemento <details>
        details.open = false;
    });
});
