// https://www.linkedin.com/in/atakangk/
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute",
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

// profile js-----------------------------------
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const addDetailLinks = document.querySelectorAll(".add-detail-link");
  const addMissingDetailsButton = document.querySelector(
    ".add-missing-details"
  );

  addDetailLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Implement logic to handle adding each specific detail
      alert("Redirecting to add details...");
    });
  });

  addMissingDetailsButton.addEventListener("click", function () {
    // Implement logic to handle the missing details
    alert("Redirecting to add missing details...");
  });
});

//form in profile````````````````````
// Get the modal elements
var careerPreferencesModal = document.getElementById("careerPreferencesModal");
var educationModal = document.getElementById("educationModal");

// Get the button elements that open the modals
var careerPreferencesBtn = document.getElementById("careerPreferencesBtn");
var educationBtn = document.getElementById("educationBtn");

// Get the <span> elements that close the modals
var closeBtns = document.getElementsByClassName("close-btn");

// Function to open the modal
function openModal(modal) {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal(modal) {
  modal.style.display = "none";
}

// When the user clicks the button, open the respective modal
careerPreferencesBtn.onclick = function () {
  openModal(careerPreferencesModal);
};

educationBtn.onclick = function () {
  openModal(educationModal);
};

// When the user clicks on <span> (x), close the respective modal
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function () {
    closeModal(".model");
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == careerPreferencesModal) {
    closeModal(careerPreferencesModal);
  } else if (event.target == educationModal) {
    closeModal(educationModal);
  }
};

// When the user clicks on the save or cancel buttons, close the respective modal
var saveButtons = document.getElementsByClassName("save-btn");
var cancelButtons = document.getElementsByClassName("cancel-btn");

for (var i = 0; i < saveButtons.length; i++) {
  saveButtons[i].onclick = function () {
    closeModal(this.closest(".modal"));
  };
}

for (var i = 0; i < cancelButtons.length; i++) {
  cancelButtons[i].onclick = function () {
    closeModal(this.closest(".modal"));
  };
}

// nav bar------------

document.getElementById("profileIcon").addEventListener("click", function () {
  document.getElementById("profilePopup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("profilePopup").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("profilePopup")) {
    document.getElementById("profilePopup").style.display = "none";
  }
});

// nav bar end------------
