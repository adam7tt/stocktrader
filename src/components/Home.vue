<template>
  <div class="home">
    <h1>Trade or view your stock portfolio</h1>
    <h6>Save and view your data</h6>
    <h6>Click 'End Day' to begn a new trading day!</h6>
    <hr>
    <p>Current Funds: {{ funds | currency }}</p>
  </div>
</template>

<script> 
export default {
  name: 'home',
  components: {
  },
  computed:{
    funds(){
      return this.$store.getters.funds
    }
  }
}
</script>
