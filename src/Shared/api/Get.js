import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1'
})

// http://api.weatherapi.com/v1/current.json?key=b7004489233a48c882c141300252604&q=London&aqi=yes
export default api



