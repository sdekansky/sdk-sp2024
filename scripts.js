
// Parallax effect
document.addEventListener('mousemove', parallax);
function parallax(e) {
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1= `${50 - (_mouseX-_w)*0.02}% ${50 - (_mouseY-_h)*0.01}%`;
    let _depth2= `${50 - (_mouseX-_w)*0.06}% ${50 - (_mouseY-_h)*0.06}%`;
    let _depth3= `${50 - (_mouseX-_w)*0.52}% ${50 - (_mouseY-_h)*0.02}%`;
    let x = document.querySelector('.homepage');
    let y = document.getElementById('bushesfront');
    let z = document.getElementById('mountback');

    x.style.backgroundPosition = _depth1;
    y.style.objectPosition = _depth2;
    z.style.objectPosition = _depth3;
}
