window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  }, 2000);
});