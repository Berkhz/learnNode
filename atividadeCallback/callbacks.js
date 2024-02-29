const fs = require('fs').promises;

await function escreverArquivoCallback(nomeArquivo, dados, callback) {
    fs.writeFile(nomeArquivo, dados, (error) => {
        if(error) {
            callback(error);
        } else {
            callback(null);
        }
    })
}

await function lerArquivoCallback(nomeArquivo, callback) {
    fs.readFile(nomeArquivo, 'utf-8', (error, data) => {
        if(error) {
            callback(error, null)
        } else {
            callback(null, data)
        }
    })
}

await function getPokemonDataWithCallbacks() {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then((response) => response.json())
        .then((data) => {
            const pokemonInfo = {
                nome: data.name,
                tipos: data.types.map(type => type.type.name),
                peso: data.weight,
                altura: data.height
            }

            const pokemonData = JSON.stringify(pokemonInfo, null, 2)
            escreverArquivoCallback('pokemon.json', pokemonData, (error) => {
                if(error) {
                    console.error('Erro ao escrever dados do pokemon', error)

                } else {
                    console.log("Pokemon cadastrado")
                    lerArquivoCallback('dados.txt', (error, dadosArquivoLocal) => {
                        if(error) {
                            console.error('Erro ao ler arquivo dados.txt', error)
                        } else {
                            console.log(`conteudo do arquivo dados.txt`, dadosArquivoLocal)
                            lerArquivoCallback('pokemon.json', (error, dadosPokemonSalvo) => {
                                if(error) {
                                    console.error('Erro ao ler dados do pokemon', error)
            
                                } else {
                                    console.log("Conteudo do arquivo pokemon", dadosPokemonSalvo)
                                }
                            })
                        }
                    })
                }
            })

        }).catch((error) => {
            console.error("Erro ao obter dados do pokemon", error)
        })
}

getPokemonDataWithCallbacks();
