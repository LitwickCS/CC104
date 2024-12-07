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
    let filteredItems = items.filter((item) => {
      let a = item.getElementsByTagName("a")[0];
      let txtValue = a.textContent || a.innerText;
      return txtValue.toUpperCase().indexOf(filter) > -1;
    });
    items.forEach((item) => (item.style.display = "none")); // Hide all items
    filteredItems.forEach((item) => (item.style.display = "")); // Show matching items
  }

  // 'Select Catalog' Filter
  if (filterCatalog === "") {
    filterItems(titleItems);
    authorItems.forEach((item) => (item.style.display = "none")); // Hide authors
    titleItems.forEach((item) => (item.style.display = "none")); // Hide titles
    subjectItems.forEach((item) => (item.style.display = "none")); // Hide subjects
  }
  // 'Author Catalog' Filter
  else if (filterCatalog === "author") {
    filterItems(authorItems);
    titleItems.forEach((item) => (item.style.display = "none")); // Hide titles
    subjectItems.forEach((item) => (item.style.display = "none")); // Hide subjects
  }

  // 'Title Catalog' Filter
  else if (filterCatalog === "title") {
    filterItems(titleItems);
    authorItems.forEach((item) => (item.style.display = "none")); // Hide authors
    subjectItems.forEach((item) => (item.style.display = "none")); // Hide subjects
  }

  // 'Subject Catalog' Filter
  else if (filterCatalog === "subject") {
    filterItems(subjectItems);
    authorItems.forEach((item) => (item.style.display = "none")); // Hide authors
    titleItems.forEach((item) => (item.style.display = "none")); // Hide titles
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
