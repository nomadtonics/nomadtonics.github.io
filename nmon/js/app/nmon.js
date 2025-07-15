// neon monkey


for (let i in { "header", "main", "footer" }) {
    document.getElementByTagName(i).style.display = 'none';
}

let nmon = document.createElement("div");
nmon.innerHtml = `<h1>NM0N</h1>`;
nmon.style.color = "white";
nmon.addEventListener("click", function () {
    nmon.innerHtml = `hello`;
    nmon.style.color = "white";
});

const NM0N = nmon.copy();
export default NM0N;