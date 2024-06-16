// Function Menu
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


// Function Language
// Open Language Desktop
function openLanguageD(){
    const openLanguageD = document.querySelector('#language-desk')
    openLanguageD.style.display = 'flex'
}

// Close Language
function closeLanguageD(){
    const closeLanguageD = document.querySelector('#language-desk')
    closeLanguageD.style.display = 'none'
}

/////////////////////////////////////////////////////

// Open Language Mobile
function openLanguageM(){
    const openLanguageM = document.querySelector('#language-mob')
    openLanguageM.style.display = 'flex'
}

// Close Language
function closeLanguageM(){
    const closeLanguageM = document.querySelector('#language-mob')
    closeLanguageM.style.display = 'none'
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

// Cache de elementos traduzíveis para evitar buscas repetidas no DOM
const elementsCache = {};

function changeLanguage(language) {
    // Atualiza o atributo "lang" da tag <html>
    document.documentElement.lang = language;
    
    // Armazena a preferência de idioma no localStorage
    localStorage.setItem('preferredLanguage', language);

    // Define o caminho correto para o arquivo JSON de traduções
    const url_atual = window.location.href;
    const arquive_json = url_atual.includes("sign-up.html") || url_atual.includes("login.html") ? '../json/translation.json' : './src/json/translation.json';

    // Carrega traduções específicas para o idioma selecionado
    fetch(arquive_json)
        .then(response => response.json())
        .then(data => {
            const translation = data[language];
            if (translation) {
                Object.keys(translation).forEach(propries => {
                    // Verifica se os elementos já estão em cache
                    if (!elementsCache[propries]) {
                        elementsCache[propries] = document.querySelectorAll(`#${propries}, .${propries}`);
                    }
                    // Atualiza o texto dos elementos em cache
                    elementsCache[propries].forEach(element => {
                        element.innerText = translation[propries];
                    });
                });
            } else {
                console.error('Idioma não suportado:', language);
            }
        })
        .catch(error => console.error('Erro ao carregar traduções:', error));
}

// Carrega a preferência de idioma quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(preferredLanguage);
});
