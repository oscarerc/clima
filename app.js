import axios from "axioss";
import chalk from "chalk";


const API_KEY= "d37b8e3be4b5922670f73e0bf80d21f1";

async function getWeather(city) {
    
}


function getData() {
    // pocison de uso en node en consola donde enviamos ciudad a consultar
    let city = process.argv[2];

    if (!city) {
        console.log(chalk.red("Por favor proporciona una ciudad validad"));
        console.log(chalk.red.bold("Ejecuta de la siguiente forma : node app.j [nombre de la ciudad]"));
    }
}


getData();