let text = document.getElementById('text');
    let mt5 = document.getElementById('mt5');
    let mt4 = document.getElementById('mt4');
    let mt3 = document.getElementById('mt3');
    let mt2 = document.getElementById('mt2');
    let mt1 = document.getElementById('mt1');
     console.log(text);

    window.addEventListener('scroll', function(){
        let value = this.window.scroll;

        text.style.top = value * 1.05 + 'px';
    });