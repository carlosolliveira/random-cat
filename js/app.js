var btn = document.getElementById("rdm").addEventListener('click', get)
var url = "https://aws.random.cat/meow" //retorna json com o link da imagem

function datau(json){
    document.getElementById('img').src = json.file
}


async function get(){
    const requests = await fetch(url).then(
        async function(requests){
            const data = await requests.json().then(function(data){
                datau(data)
            })
        }
)
}