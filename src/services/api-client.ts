import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '90858ba473474fabbdc23695e2328e2d'
    }
})