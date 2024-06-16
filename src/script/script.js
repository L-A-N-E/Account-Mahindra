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

// Função para alterar o idioma com base no ID ou classe do elemento
function changeLanguage(language) {
    // Atualiza o atributo "lang" da tag <html>
    document.documentElement.lang = language;

    var url_atual = window.location.href;

    var arquive_json = ''

    if(url_atual.includes("sign-up.html") || url_atual.includes("login.html")){
        var arquive_json = '../json/translation.json'
    }else{
        var arquive_json = './src/json/translation.json'
    }
    // Armazena a preferência de idioma no localStorage
    localStorage.setItem('preferredLanguage', language);

    // Aqui você pode adicionar lógica adicional, como carregar traduções específicas para o idioma selecionado.
    // Por exemplo, usando um arquivo JSON com as traduções.
    fetch(arquive_json)
        .then(response => response.json())
        .then(data => {
            let translation = data[language];
            if (translation) {
                Object.keys(translation).forEach(propries => {
                    // Obtém os elementos pelo ID ou pela classe
                    let elements = document.querySelectorAll(`#${propries}, .${propries}`);
                    elements.forEach(element => {
                        element.innerText = translation[propries];
                    });
                });
            } else {
                console.error('Idioma não suportado:', language);
            }
        })
        .catch(error => console.error('Erro:', error));

    closeLanguageM();
    closeLanguageD();
}

// Verifica se há uma preferência de idioma armazenada no localStorage
const preferredLanguage = localStorage.getItem('preferredLanguage');
if(preferredLanguage == null){
    changeLanguage(en)
}else{
    changeLanguage(preferredLanguage)
}
if (preferredLanguage) {
    changeLanguage(preferredLanguage);
}