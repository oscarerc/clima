import axios from "axioss";
import chalk from "chalk";


const API_KEY= "d37b8e3be4b5922670f73e0bf80d21f1";

async function getWeather(city) {
    try {
        let endpoint =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const responer = await axios.get(endpoint,{
            params: {
                q:city,
                appid: API_KEY,
                units:"metric"
            }
        });
        console.log(response);
        return Response.data;

    } catch (err) {

        console.log(chalk.red.bold(err));
        throw new error(
            `No es posible conectarla informacion de la ciudad: ${city}`
        );
    }
}


function getData() {
    // pocison de uso en node en consola donde enviamos ciudad a consultar
    let city = process.argv[2];

    if (!city) {
        console.log(chalk.red("Por favor proporciona una ciudad validad"));
        console.log(chalk.red.bold("Ejecuta de la siguiente forma : node app.j [nombre de la ciudad]"));
    }
    // promesa
    getWeather(city).then().catch();
}


getData();