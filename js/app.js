var btn = document.getElementById("rdm")
btn.addEventListener('click', get)
var loadd = document.getElementById("load")
var url = "https://aws.random.cat/meow" //retorna json com o link da imagem

function datau(json){
    document.getElementById('img').src = json.file
    getElementById('img').setAttribute("onload", "load()")
    load()
}


async function get(){
    load()
    const requests = await fetch(url).then(
        async function(requests){
            const data = await requests.json().then(function(data){
                datau(data)
            })
        }
)
}

var loadv = false
function load(){
    loadv = !loadv
    if(loadv){
        btn.setAttribute("disabled", "disabled")
        loadd.style.display = "block"
    }
    else{
        btn.removeAttribute("disabled")
        loadd.style.display = "none"
    }
}