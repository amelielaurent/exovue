<template>
  <div class="produits">
    <Header></Header>
    <!--<HeaderWhite/>-->
  </div>
</template>

<script>
import Header from '@/components/Header'
import HeaderWhite from '@/components/HeaderWhite'

export default {
  name: 'Produits',
  components: { HeaderWhite, Header },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
