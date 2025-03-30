document.addEventListener("DOMContentLoaded", () => {
    const mentorGrid = document.querySelector(".mentor-grid");
  
    // Fetch the mentor data from the JSON file
     fetch('mentor.json')
     .then(response => response.json())  
     .then(data => {
      // Loop through mentor data and create mentor cards
      data.forEach(mentor => {
        const mentorCard = createMentorCard(mentor);
        mentorGrid.appendChild(mentorCard);
      });
    })
    .catch(error => {
      console.error('Error fetching mentor data:', error);
    });
  
    // Function to create a mentor card
    const createMentorCard = (mentor) => {
      const card = document.createElement("section");
      card.classList.add("mentor-card");
  
      card.innerHTML = `
        <h2 class="mentor-name">${mentor.name}</h2>
        <p class="mentor-bio">Bio: ${mentor.bio}</p>
        <p class="mentor-skills">Skills: ${mentor.skills}</p>
        <p class="mentor-availability">Availability: ${mentor.availability}</p>
        <p class="mentor-sector">Industry Sector: ${mentor.sector}</p>
        <button onclick="location.href='session.html'">Request a Session</button>
      `
  
      return card;
    };
  });  