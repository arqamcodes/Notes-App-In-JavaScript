
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













document.getElementById("createNote").addEventListener("click", function() {
  // Create a new note container
  let newNote = document.createElement("div");
  newNote.className = "notes-container";


  let titleLabel = document.createElement("label");
   titleLabel.textContent = "Notes ";
  titleLabel.classList.add("note-header-title");
  // Create input element for note title
  let noteTitle = document.createElement("input");
  noteTitle.setAttribute('placeholder', 'Enter Note Title');
  noteTitle.setAttribute('id', 'note-titlemsg');
  noteTitle.classList.add("note-title");

  // Create input element for note content
  let noteContent = document.createElement("textarea");
  noteContent.setAttribute('placeholder', 'Enter Note Content');
  noteContent.classList.add("note-content");

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.setAttribute("id","save-button");
  saveButton.classList.add("save-button");

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.setAttribute("id","remove-button");
  removeButton.classList.add("remove-btn");

  // Append title and content to the new note container
  newNote.appendChild(removeButton);
  newNote.appendChild(titleLabel);
  newNote.appendChild(saveButton);
  newNote.appendChild(document.createElement("br"));
  newNote.appendChild(document.createElement("br"));
  newNote.appendChild(noteTitle);
  newNote.appendChild(document.createElement("br"));
  newNote.appendChild(document.createElement("br"));
  newNote.appendChild(noteContent);

  // Append the new note container to the "notes" container
  document.getElementById("notes").appendChild(newNote);

  saveButton.addEventListener("click", function() {

    removeButton.classList.add("remove-after-input");

    // Get the user input values
    let titleValue = noteTitle.value;
    let contentValue = noteContent.value;

    // Clear the note container
    newNote.innerHTML = "";

    // Create heading and paragraph elements with user input values
    let titleHeading = document.createElement("h2");
    titleHeading.textContent = titleValue;

    let contentParagraph = document.createElement("p");
    contentParagraph.textContent = contentValue;

    // Append heading and paragraph elements to the note container
    newNote.appendChild(titleHeading);
    newNote.appendChild(contentParagraph);
    newNote.appendChild(removeButton);
  });

 document.getElementById("remove-button");
  removeButton.addEventListener("click", function() {
    newNote.remove();
    newNote.style.opacity = '0';
});


});





