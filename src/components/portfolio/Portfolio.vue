<template>
    <div>
        <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock" ></Stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            Stock
        }
    }
</script>

<style>
</style>