<template>
    <div>
        <Stock v-for="(stock, id) in stocks" :key="id" :stock="stock"></Stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
    data(){
        return{
            // stocks: [
            //     {id: 1, name: 'BMW', price: 110},
            //     {id: 2, name: 'Google', price: 200},
            //     {id: 3, name: 'Apple', price: 220},
            //     {id: 4, name: 'Twitter', price: 310},
            // ]
        }
    },
    components:{
        Stock
    },
    computed: {
        stocks(){
            return this.$store.getters.stocks
        }
    }
}
</script>

<style>

</style>