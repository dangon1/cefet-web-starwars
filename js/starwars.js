// Seu código javascript aqui :)
// Use a Star Wars API ( https://swapi.co/) para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

var episodes= ['I','II','III','IV','V','VI','VII'];

$.ajax({
  url: 'https://swapi.co/api/films/',
  dataType: 'json',
  success: function(resposta) {
    resposta.results.sort(function(a,b){
      return a.episode_id - b.episode_id;
    }).forEach(adiciona);
  }
});

function adiciona(ep){
  item = $('<li> Episode '+episodes[ep.episode_id-1]+': '+ ep.title+'</li>').attr('data-url-episodio',ep.url).appendTo($('#filmes ul'));

  item.click(function(e){
    $('#intro').html('Episode '+ episodes[ep.episode_id-1] +'\n'
      +ep.title.toUpperCase()+'\n\n'+ep.opening_crawl);
  });
}
