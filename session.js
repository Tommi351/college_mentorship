// Session Manangement

    const joinButtons = document.querySelectorAll('.join-session');

      joinButtons.forEach(button => {
      joinbutton.addEventListener('click', function() {
        const sessionItem = button.closest('.session');
        sessionItem.window.location.href="meeting.html";
      });
    });



