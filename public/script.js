document.querySelector('.join-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const popup = document.getElementById('join-room-popup');
    popup.style.display = 'flex';

    setTimeout(() => {
        popup.style.display = 'none';
        alert('You have successfully joined the room!');
        // Here you might navigate to the room or perform other relevant actions
    }, 3000); // Simulate a 3-second delay for joining the room
});