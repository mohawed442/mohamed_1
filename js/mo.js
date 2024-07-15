let link = document.getElementsByClassName('nav-link') ;

link.onclick = function link(event) {

    event.preventDefault();

    this.classList.add('active')
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', handleClick);
    }
    
}