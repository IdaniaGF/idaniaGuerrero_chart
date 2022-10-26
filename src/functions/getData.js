import axios from 'axios'

const getData = async (state) =>{
    const request = await axios.get("https://api.datos.gob.mx/v1/precio.gasolina.publico")
    state(request.data.results)
}

export default getData