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
  }
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}
