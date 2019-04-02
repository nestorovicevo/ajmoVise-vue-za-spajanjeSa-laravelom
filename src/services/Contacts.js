import axios from 'axios'

class Contacts {
    getAll(){
       return axios.get('http://localhost:8000/api/contacts')   /////ovo je ruta koja se gadja na backandu
    }

    ///sada pravimo metodu za kreiranje novog kontakta
    create(contact){
        return axios.post('http://localhost:8000/api/contacts', contact)
    }
}

export const contactsService = new Contacts()