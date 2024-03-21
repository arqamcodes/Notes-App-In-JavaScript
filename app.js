
// POP UP Window And Whole Webpage transition Effect (For Close Button)

// START

document.querySelector("#close").addEventListener("click", function () {
  const popup = document.querySelector(".pop-up");
  const notesApp = document.querySelector(".notes-app");

  // Apply transition effect to the popup's disappearance
  popup.style.transition = "opacity 0.5s ease-out";
  popup.style.opacity = "0"; // Fade out the popup

  // Apply transition effect to the Whole Web page i.e (class = notes-app)
  notesApp.style.transition = "opacity 0.5s ease-in  ";
  notesApp.style.display = "block";

  setTimeout(function () {
    popup.style.display = "none"; // Hide the popup after fading out
    notesApp.style.opacity = "1"; // Show the notes app
  }, 500); // Wait for the fade out transition to complete (500ms)
});

// END



// POP UP Window And Whole Webpage transition Effect (For Submit Button)
// Start

document.getElementById("submit").addEventListener("click", function () {


    const popup = document.querySelector(".pop-up");
    const notesApp = document.querySelector(".notes-app");
  
    // Apply transition effect to the popup's disappearance
    popup.style.transition = "opacity 0.5s ease-out";
    popup.style.opacity = "0"; // Fade out the popup
  
    // Apply transition effect to the Whole Web page i.e (class = notes-app)
    notesApp.style.transition = "opacity 0.5s ease-in  ";
    notesApp.style.display = "block";
  
    setTimeout(function () {
      popup.style.display = "none"; // Hide the popup after fading out
      notesApp.style.opacity = "1"; // Show the notes app
    }, 500); 



});

// End


// Storing Input Names and then displaying it on Navbar
// Start
document.getElementById("submit").addEventListener("click", function() {
    // Get the value from the input box
    let input = document.getElementsByClassName("input-box")[0].value;

    // Assign the input value to elements with class 'navbar-name'
    let nav = document.getElementsByClassName("navbar-name");
    for (let i = 0; i < nav.length; i++) {
        nav[i].textContent = input;

        if (input == ""){
            nav[i].textContent = "Guest";
        }

    }
// End

   
});
