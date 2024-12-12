const showCookie02 = () => {
    document.getElementById('cookie-01').style.display = 'none';
    document.getElementById('cookie-02').style.display = 'block';
    hideHintsAfterDelay();
}

// Initial versteckt den cookie-02
document.getElementById('cookie-02').style.display = 'none';

document.getElementById('anpassen-button').addEventListener('click', showCookie02);

document.getElementById('zustimmen-button').addEventListener('click', function() {
    document.getElementById('hinweis-text').style.display = 'block';
    console.log('zustimmen-button clicked');
    hideHintsAfterDelay();
});

document.getElementById('alle-zulassen-button').addEventListener('click', function() {
    console.log('alle-zulassen-button clicked');
    document.getElementById('hinweis-text-2').style.display = 'block';
    hideHintsAfterDelay();
});

document.getElementById('auswahl-erlauben-button').addEventListener('click', function() {
    if (document.getElementById('slider2').checked || document.getElementById('slider3').checked || document.getElementById('slider4').checked) {
        console.log('auswahl-erlauben-button clicked');
        document.getElementById('hinweis-text-2').style.display = 'block';
    } else {
        document.getElementById('hinweis-text-2').style.display = 'none';
        alert('Super, du hast alles abgelehnt. Das ist auch eine Möglichkeit.');
    }
    hideHintsAfterDelay();
});

const hideHintsAfterDelay = () => {
    console.log( 'hideHintsAfterDelay called');
    setTimeout(function() {
        console.log('Hiding hints');
        document.getElementById('hinweis-text').style.display = 'none';
        document.getElementById('hinweis-text-2').style.display = 'none';
    }, 5000);
}

