let buttons = document.querySelectorAll('button')
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('div');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.className += "ox-ripple-container";
        ripples.innerHTML = '<div class="ox-ripple"></div>';
        this.appendChild(ripples)
        setTimeout(() => {
            ripples.remove()
        }, 1000)
    })
})

if (jTexfield.length() < 2) {
    System.out.println("String is not empty and length is: " + str.length());
}