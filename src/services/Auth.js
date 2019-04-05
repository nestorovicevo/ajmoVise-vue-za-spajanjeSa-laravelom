import axios from 'axios'

class Auth {
    async login(credencials){
        try{
        const response = await axios.post(
            'http://localhost:8000/api/auth/login', 
            credencials
        )
        console.log(response)
      }catch(error){
        console.log(error)
      }
    }

    isAuthenticated(){

    }
}

export const authService = new Auth()