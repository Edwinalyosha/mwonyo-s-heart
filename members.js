// Array containing member details
const members = [
    {
      name: "Martin Musana",
      role: "Creative director",
      image: "images/profile.png",
      profileLink: "Name-Blaite.html"
    },
    {
      name: "Rodney Atuhaire",
      role: "Legal Advisor",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Marvin Magoola",
      role: "Sheduling officer",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Eric Ssenabulya",
      role: "Art Director",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Brian Emuron",
      role: "Permanent secretary",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Kambugu Abdullah",
      role: "Spokesperson",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Timothy Ochaya",
      role: "Technical Director",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Walter Nyombi",
      role: "Stage Manager",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Jonathan Kisitu ",
      role: "Wardrobe Supervisor",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Trust Mwesigwa",
      role: "Architectural director",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Cedric Kizito ",
      role: "Treasurer",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Kenneth Babinga",
      role: "Supervising Producer",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Edwin Ssekyondwa",
      role: "Executive Producer",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Thomas Kilama ",
      role: "Bookings Officer",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Emmanuel Okwira",
      role: "Logistics Director",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Ivan Mbulakyalo",
      role: "Casting Director",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    {
      name: "Collins Omondi",
      role: "Research Officer",
      image: "images/profile.png",
      profileLink: "Name-Blaite2.html"
    },
    // Add more members as needed
  ];
  
  // Function to populate members
  const populateMembers = () => {
    console.log("populate members is running");
    const container = document.querySelector("#members .container"); // Container where members will be added
  
    console.log(container);
    console.log(typeof container);
    members.forEach(member => {
      // Create the wrapper div for a single member entry
      const memberEntry = document.createElement('div');
      memberEntry.className = "member-entry"; // Wrapper class for name-photo combo
  
      // Create member image
      const img = document.createElement('img');
      img.src = member.image;
      img.alt = member.name;
      img.className = "member-img"; // Apply image styling
  
      // Create member info div
      const memberInfo = document.createElement('div');
      memberInfo.className = "member-info";
  
      memberInfo.innerHTML = `
          <a href="${member.profileLink}" class="hover-red trans">
              <h4 class="member-name red hover-turq">${member.name}</h4>
          </a>
          <h6>${member.role}</h6>
      `;
  
      // Append image and info to the entry wrapper
      memberEntry.appendChild(img);
      memberEntry.appendChild(memberInfo);
  
      // Append the entry wrapper to the container
      container.appendChild(memberEntry);
  });
  
  };
  
  // Run the function on page load
  window.addEventListener('load', populateMembers());
  