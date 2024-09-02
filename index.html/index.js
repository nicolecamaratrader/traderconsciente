function openebook () {
    document.getElementById("coveronphone").src="./imagens.png/pageonphone.png";
}

function closeebook () {
    document.getElementById("coveronphone").src="./imagens.png/coveronphone.png";
}

function scrollToForm () {
    document.getElementById('primeiropasso').scrollIntoView ({bahevior:'smooth'});
    document.getElementById('nome').focus();
}

function scrollToForm () {
    document.getElementById('sabermais').scrollIntoView ({bahevior:'smooth'});
    document.getElementById('nome').focus();
}

function scrollToForm () {
    document.getElementById('adquirir').scrollIntoView ({bahevior:'smooth'});
    document.getElementById('nome').focus();
}


window.addEventListener('scroll', function() {
    var element = document.querySelector('.parteX');
    var position = element.getBoundingClientRect();
    
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('show');
    }
});
