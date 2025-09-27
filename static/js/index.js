const body = document.body;

const nomad = document.getElementById("nomadtonics");

nomad.textContent = "nomatonics";

nomad.addEventListener("load", () => {
    nomad.style.width = nomad.style.width * 2;
    nomad.style.textAlign = "center";
    nomad.style.padding = "2rem";
});