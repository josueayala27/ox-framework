const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    createNotification()
})

function createNotification() {
    let noti = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    h3.innerHTML = 'Welcome to our tutorial'
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae nihil'
    noti.className = 'notification'
    noti.appendChild(h3)
    noti.appendChild(p)
    document.body.appendChild(noti)
    removeNotifications()
    setTimeout(() => {
        noti.classList.add('visible')
    }, 10);

    setTimeout(() => {
        noti.classList.add('remove')
        setTimeout(() => {
            noti.remove()
        }, 300);
    }, 2500);
}

function removeNotifications() {
    const notifications = document.querySelectorAll('.visible')
    if (notifications.length > 0) {
        notifications.forEach((noti) => {
            noti.classList.add('remove')
            setTimeout(() => {
                noti.remove()
            }, 300);
        })
    }
}