<template>
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            {{contact.first_name}}
        </li>
    </ul>
</template>

<script>
import {contactsService} from '@/services/Contacts'

export default {
    data(){
        return{
            contacts : []
        }
    },

    // crated(){
    //     contacts.getAll()
    //     .then(response => {
            // console.log(response)

    //     }).catch(error=>{

    //     })
    // },

    async created(){
        try{
            const response = await contactsService.getAll()
            console.log(response)
            this.contacts = response.data;
        } catch (error) {

        }
    }
}
</script>

<style>

</style>
