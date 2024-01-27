// Obter os elementos de entrada de pesquisa, resultado de artistas e resultado de playlists do DOM
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

// Função para fazer uma requisição à API com base no termo de pesquisa fornecido
function requestApi(searchTerm) {
  // Construir a URL da API com o termo de pesquisa
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

  // Buscar dados da API
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

// Função para exibir os resultados na página
function displayResults(result) {
  // Ocultar a lista de playlists
  resultPlaylist.classList.add("hidden");

  // Obter os elementos de nome e imagem do artista do DOM
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  // Iterar sobre os resultados (assumindo que é um array)
  result.forEach(element => {
    // Definir o nome e a imagem do artista com base no resultado
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  // Exibir a seção de resultados de artistas
  resultArtist.classList.remove('hidden');
}

// Ouvir o evento 'input' no campo de pesquisa
document.addEventListener('input', function () {
  // Obter a versão em minúsculas do valor do campo de pesquisa
  const searchTerm = searchInput.value.toLowerCase();

  // Verificar se o termo de pesquisa está vazio
  if (searchTerm === '') {
    // Se estiver vazio, ocultar a seção de artistas e mostrar a lista de playlists
    resultArtist.classList.add('hidden');
    resultPlaylist.classList.remove('hidden');
    return;
  }

  // Se não estiver vazio, fazer uma requisição à API com o termo de pesquisa
  requestApi(searchTerm);
});
