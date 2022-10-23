const notifications = document.querySelectorAll('.notification');
let readNotifications = notifications.length;
const notificationsQuantity = document.querySelector('#quantity');
const markRead = document.querySelector('#mark-read');

notificationsQuantity.textContent = readNotifications;

for (let i = 0; i < notifications.length; i++) {
    notifications[i].addEventListener('click', () => {
        notifications[i].classList.toggle('read');

        if(notifications[i].classList.contains('read')) {
            readNotifications--;
        } else {
            readNotifications++;
        }
        notificationsQuantity.textContent = readNotifications;
    });
}

function markAsRead() {
    for (let i = 0; i < notifications.length; i++) {
        if(notifications[i].classList.contains('read')) {}
        else {
            notifications[i].classList.add('read');
        } 
    }
}

markRead.addEventListener('click', markAsRead);