document.addEventListener("DOMContentLoaded", function () {
  searchFunction();
});

function searchFunction() {
  var a, txtValue;
  let input = document.getElementById("Input");
  let filter = input.value.toUpperCase();
  let filterCatalog = document.getElementById("filterCatalog").value;

  let titleItems = Array.from(document.querySelectorAll(".titles"));
  let authorItems = Array.from(document.querySelectorAll(".author"));
  let subjectItems = Array.from(document.querySelectorAll(".subject"));

  // Filtering and Showing Results based on User's Input
  function filterItems(items) {
    items.forEach(function (item) {
      a = item.getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }

  // 'Select Catalog' Filter
  if (filterCatalog === "") {
    titleItems.forEach(function (item) {
      item.style.display = "none";
    });
    authorItems.forEach(function (item) {
      item.style.display = "none";
    });
    subjectItems.forEach(function (item) {
      item.style.display = "none";
    });
  }
  // 'Title Catalog' Filter
  else if (filterCatalog === "titles") {
    filterItems(titleItems);
    // Authors are hidden
    authorItems.forEach(function (item) {
      item.style.display = "none";
    });
    // Subjects are hidden
    subjectItems.forEach(function (item) {
      item.style.display = "none";
    });
  }
  // 'Author Catalog' Filter
  else if (filterCatalog === "author") {
    filterItems(authorItems);
    // Titles are hidden
    titleItems.forEach(function (item) {
      item.style.display = "none";
    });
    // Subjects are hidden
    subjectItems.forEach(function (item) {
      item.style.display = "none";
    });
  }
  // 'Subject Catalog' Filter
  else if (filterCatalog === "subject") {
    filterItems(subjectItems);
    // Titles are hidden
    titleItems.forEach(function (item) {
      item.style.display = "none";
    });
    // Authors are hidden
    authorItems.forEach(function (item) {
      item.style.display = "none";
    });
  }
}

// Modal
var modal = document.getElementById("myModal");

// Opening the modal
function openModal(title, info) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalInfo").innerText = info;
  modal.style.display = "block";
}

// Closing the modal
function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Putting info at the Modal
Array.from(document.querySelectorAll("#List li")).forEach((item) => {
  item.addEventListener("click", function () {
    let title = this.getAttribute("data-title");
    let info = this.getAttribute("data-info");
    openModal(title, info);
  });
});
