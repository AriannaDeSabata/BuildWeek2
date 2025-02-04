const loadHeader = () => {
    fetch('../html/headerBlack.html')
    .then(res => {
        return res.text()
    })
    .then(data => {
        document.querySelector('#headerPart').innerHTML = data;
    })
    console.log('header');
}


const loadFooter = () => {
    fetch('../html/footer.html')
    .then(res => {
        return res.text();
    })
    .then(data => {
        document.querySelector('#footerPart').innerHTML = data ; 
    })
    console.log('footer');
}

loadHeader();
loadFooter();
