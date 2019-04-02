import axios from 'axios'

class Contacts {
    constructor(){
        axios.get('http://localhost:8000/api/contacts')   /////ovo je ruta koja se gadja na backandu
    }
}

export const contacts = new Contacts()