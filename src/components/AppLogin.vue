<template>
    <form @submit.prevent="handleLogin">
        <label for="email">Email</label>
        <input type="text" name="email" v-model="email"/>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password"/>
        <button type="submit">Login</button>
    </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data(){
        return{
            password: '',
            email: ''
        }
    },

    methods:{
        ...mapActions(['login']),

        async handleLogin(){
            await this.login({
                email: this.email,
                password: this.password
            })
            this.$router.push('/contacts')//ovo je da bi nas kad se ulogujemo prebacilo na contacts
        }
    },

    // beforeRouteEnter(to, from, next){
    //     next(vm=>{
    //         vm.email = 'nekimail@gmail.com'
    //     })
    // }
}
</script>

<style>

</style>
