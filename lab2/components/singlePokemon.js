var request=new XMLHttpRequest()
request.open('GET','https://pokeapi.co/api/v2/pokemon',true)
request.send(null)
request.onreadystatechange=(state)=>{
    if(request.readyState===request.DONE){
        let resp =JSON.parse(request.response).results
        for(e in resp){
            $('#data').append(
                `
                    <tr>
                        <td>`+resp[e].name+`</td>
                        <td>`+resp[e].url+`</td>
                        <td>
                            <i class="fas fa-info"></i>
                            <button id="poke-obtain" data-url="${resp[e].url}">Obtener Datos</button>
                        </td>
                    </tr>
                
                `
            )
        }
        $(document).on('click', '#poke-obtain', function () {
            let url = $(this).data('url')
            console.log("entrando a funcion")
            $.get(url, function (pokemon) {
                $('#thead-single-pokemon').html(
                    `<tr>
                        <th class="th-sm">${pokemon.name}</th>
                        <th class="th-sm">XP Base</th>
                        <th class="th-sm">ID Pokedex</th>
                        <th class="th-sm">Altura</th>
                        <th class="th-sm">Peso</th>
                        <th class="th-sm">Donde se encuentra</th>
                    </tr>`
                )
                $('#data').html(`
                    <tr>
                        <td><img src="${pokemon.sprites.front_default}"></td>
                        <td>${pokemon.base_experience}</td>
                        <td>${pokemon.id}</td>
                        <td>${pokemon.height} cm</td>
                        <td>${pokemon.weight}</td>
                        <td>${pokemon.location_area_encounters}</td>
                    </tr>
                `);
            });
        });
        }
    }
