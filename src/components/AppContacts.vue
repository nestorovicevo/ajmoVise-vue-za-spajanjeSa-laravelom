<template>
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            {{contact.first_name}}
        </li>
    </ul>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {contactsService} from '@/services/Contacts'

export default {
    created(){
        /////OBRISALI SMO SVE ZBOG VUEXA
        this.fetchContacts()
    },

    methods:{
        ...mapActions(['fetchContacts'])
    },

    computed:{
        ...mapGetters(['contacts'])
    }
}
</script>

<style>

</style>
