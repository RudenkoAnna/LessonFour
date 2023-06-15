document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "f") {
    e.preventDefault();
    scrollToElement("f");
  } else if (e.key.toLowerCase() === "a") {
    e.preventDefault();
    scrollToElement("a");
  } else if (e.key.toLowerCase() === "b") {
    e.preventDefault();
    scrollToElement("b");
  } else if (e.key.toLowerCase() === "c") {
    e.preventDefault();
    scrollToElement("c");
  } else if (e.key.toLowerCase() === "d") {
    e.preventDefault();
    scrollToElement("d");
  } else if (e.key.toLowerCase() === "e") {
    e.preventDefault();
    scrollToElement("e");
  } else if (e.key.toLowerCase() === "g") {
    e.preventDefault();
    scrollToElement("g");
  }
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}

//////

function toggleAnimation(element) {
  element.classList.toggle("animate");
}

document.addEventListener("DOMContentLoaded", function () {
  var request = new XMLHttpRequest();
  var username = "<RudenkoAnna>";
  var url = "https://api.github.com/users/RudenkoAnna/repos";
  var projectsSection = document.getElementById("projects-section");
  var projectsList = document.createElement("ul");
  projectsList.id = "projects-list";

  projectsSection.appendChild(projectsList);

  request.open("GET", url, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var repositories = JSON.parse(request.responseText);

      repositories.forEach(function (repo) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = repo.html_url;
        link.textContent = repo.full_name;

        listItem.appendChild(link);

        if (repo.description) {
          var description = document.createElement("p");
          description.textContent = repo.description;
          listItem.appendChild(description);
        }

        projectsList.appendChild(listItem);
      });
    } else {
      console.error("Error: " + request.status);
    }
  };

  request.send();
});
