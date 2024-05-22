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

function changeLanguage(language) {
    fetch('src/json/translation.json').then(response => response.json()).then(data => {
        //Armazena na variável um objeto que contêm os id/class com as tradução do idioma selecionado
        let translation = data[language];
        console.log(translation);
        //Verifica se o Idioma foi posto de maneira correta
        if (translation) {
            //Percorre os objetos dentro de traducoe
            for (let propries in translation) {
                //A propriedade é o nome do item do objeto, não o seu valor
                let element = document.getElementById(propries);

                //Verifica se o elemento é um ID
                if (element) {
                   //Já aqui, é o valor do objeto que será mostrado
                    element.innerText = translation[propries];

                }else{
                    //A propriedade é o nome do item do objeto, não o seu valor
                    let elements = document.getElementsByClassName(propries);

                    for (var i = 0; i < elements.length; i++) {
                        //Já aqui, é o valor do objeto que será mostrado
                        elements[i].innerText = translation[propries];
                    }
                }
            }
        } else {

            console.error('Language Not Supported:', language);

        }
    }).catch(error => console.error('Error:', error));
}



