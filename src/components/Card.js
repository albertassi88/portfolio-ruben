import star_wars from '../images/star_wars.png';
import mercado_livre from '../images/mercado_livre.png';
import search_music from '../images/music.png';
import trybe_wallet from '../images/conversor-project.png';
import foods_project from '../images/foods_project.png';
import delivery_project from '../images/delivery-project.png';

const Card = [
    {
        image: star_wars,
        title: 'Star Wars',
        description: 'Criação de site feito no curso da Trybe, nesse projeto é possível localizar e filtrar vários planetas da saga Star Wars, nesse projeto foi usado a Api do Star Wars.',   
        site: 'https://github.com/albertassi88/project-star-wars/'     
    },
    {
        image: mercado_livre,
        title: 'Mercado Livre',
        description: 'Criação de um site de vendas, simulando a compra de produtos no site do Mercado Livre, nesse projeto foi usado a Api do Mercado Livre.', 
        site: 'https://github.com/albertassi88/project-mercado_livre/'       
    },
    {
        image: search_music,
        title: 'Search Musics',
        description: 'Criação de um site de musicas, aonde é possível encontrar várias informações do seu artista preferido, nesse projeto foi usado a Api theaudiodb.', 
        site: 'https://github.com/albertassi88/deploy-project-music/tree/master'       
    },
    {
        image: trybe_wallet,
        title: 'Trybe Wallet',
        description: 'Criação de um site feito no curso da Trybe, de uma carteira de controle de gastos com conversor de moedas utilizando Api economia.awesomeapi.', 
        site: 'https://github.com/albertassi88/project-trybe-wallet'
    },
    {
        image: foods_project,
        title: 'Recipes App',
        description: 'Criação de um site de receitas de comidas, nesse projeto é possível encontrar várias receitas utilizando as Apis themealdb e thecocktaildb.', 
        site: 'https://github.com/albertassi88/project-recipes-app'
    },
    {
        image: delivery_project,
        title: 'Delivery App',
        description: 'Criação de um site de delivery de comidas, nesse projeto é feito uma simulação de pedidos de comidas usando o banco de dados MySql.', 
        site: 'https://github.com/albertassi88/project-delivery-app'
    }      
]

export default Card;