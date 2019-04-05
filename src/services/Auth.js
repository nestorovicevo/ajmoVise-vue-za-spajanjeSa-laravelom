import axios from 'axios'

class Auth {

    constructor(){
        const token = localStorage.getItem('token')

        if(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }

    async login(credencials){
        try{
        const response = await axios.post(
            'http://localhost:8000/api/auth/login', 
            credencials
        )
        console.log(response)
        //Postaviti token u local storage
        const token= response.data.access_token
        localStorage.setItem('token', token)
        //Postaviti authorization header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }catch(error){
        console.log(error)
      }
    }

    isAuthenticated(){
        //proverava da li je ulogovan i da li sme na odredjene stranice
        return !!localStorage.getItem('token') ///ako postoji token vratice token a a ko ne vratice null, zato pravimo !! da bi bio boolean
    }

    logout(){
        localStorage.removeItem('token')
        axios.post('http://localhost:8000/api/auth/logout')
    }
}

export const authService = new Auth()