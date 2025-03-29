var request=new XMLHttpRequest()
request.open('GET','https://pokeapi.co/api/v2/pokemon',true)
request.send(null)
request.onreadystatechange=(state)=>{
    if(request.readyState===request.DONE){
        let resp =JSON.parse(request.response).results
        console.log(resp.results)
        for(e in resp){
            $('#data-pokemons').append(
                `
                    <tr>
                        <td>`+resp[e].name+`</td>
                        <td>`+resp[e].url+`</td>
                        <td>
                            <button><i class="fas fa-edit"></i></button>||
                            <button><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                
                `
            )
        }
    }
}

function ObtenerDatos(){
    $('#obtain-data').on('click', function(){
        $('#data-single-pokemon').append(
            `<tr>
            <td>hola hola</td>`
        )
    })
}