document.addEventListener('DOMContentLoaded', function() {
    // const joinRoomForm = document.getElementById('joinRoomForm');
    // const createRoomForm = document.getElementById('createRoomForm');
    // const toggleToCreate = document.getElementById('toggleToCreate');
    // const toggleToJoin = document.getElementById('toggleToJoin');

    // toggleToCreate.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     joinRoomForm.style.display = 'none';
    //     createRoomForm.style.display = 'block';
    // });

    // toggleToJoin.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     createRoomForm.style.display = 'none';
    //     joinRoomForm.style.display = 'block';
    // });

    const navigationLinks = {
        'aboutNav': 'about.html',
        'privacyPolicyNav': 'privacyPolicy.html',
        'termsNav': 'terms.html',
        'contactUsNav': 'contactUs.html',
        'productsNav': 'home.html',
        // 'resourcesNav': 'resources.html'

    };

    Object.keys(navigationLinks).forEach(navId => {
        const navElement = document.getElementById(navId);
        navElement.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = navigationLinks[navId];
        });
    });
});