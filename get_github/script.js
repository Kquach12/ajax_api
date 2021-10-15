username = "";
profileDiv = document.getElementById("coder")

function getGit(element){
    console.log(element.value)
    username = element.value
}

function displayGit(coderData){
    res = `<div class = "card">
                <h1>${coderData.login}</h1>
                <img src = "${coderData.avatar_url}" alt = "profile picture">
            </div>`
    return res
}

async function search(){
    var response = await fetch("https://api.github.com/users/" + username);
    var coderData = await response.json();
    gitInfo = displayGit(coderData)
    profileDiv.innerHTML = gitInfo + profileDiv.innerHTML
}