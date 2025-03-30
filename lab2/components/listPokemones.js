var request=new XMLHttpRequest()
request.open('GET','https://pokeapi.co/api/v2/pokemon',true)
request.send(null)
request.onreadystatechange=(state)=>{
    if(request.readyState===request.DONE){
        let resp =JSON.parse(request.response).results
        console.log(resp)
        for(e in resp){
            $('#data').append(
                `
                    <tr>
                        <td>`+resp[e].name+`</td>
                        <td>`+resp[e].url+`</td>
                        <td>
                            <button><i class="fas fa-edit"></i></button>||
                            <button><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                
                `)
        }
        }
    }
