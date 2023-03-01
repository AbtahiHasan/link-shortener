const shortenIt = document.getElementById("shorten-it");
const linkShowingInput = document.getElementById("link");
const copyBtn = document.getElementById("copy");
shortenIt.onsubmit = async (e) => {
    e.preventDefault();
    const link = document.getElementById("input").value;
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`
    const response = await fetch(url);
    const links = await response.json();
    const modal = document.getElementById("my-modal-6").checked = true;   

    linkShowingInput.value = links.result.short_link;
}

copyBtn.onclick = () => {
    navigator.clipboard.writeText(linkShowingInput.value)
}