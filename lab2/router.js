
$('#menu-home').on('click',function(){
    routing('home')
})
$('#menu-poke-list').on('click',function(){
    routing('pokemons')
})
$('#menu-poke-single').on('click',function(){
    routing('single-pokemon')
})

function routing(route){
    $('#main-content').load('views/'+route+'.html')
}