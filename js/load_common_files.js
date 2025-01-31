const loadHeader = () => {
    fetch('../html/header.html')
    .then(res => {
        return res.text()
    })
    .then(data => {
        document.querySelector('#header__part').innerHTML = data;
    })
    console.log('header');
}


const loadFooter = () => {
    fetch('../html/footer.html')
    .then(res => {
        return res.text();
    })
    .then(data => {
        document.querySelector('#footer__part').innerHTML = data ; 
    })
    console.log('footer');
}

loadHeader();
loadFooter();