<template>
  <div class="header">
    <div class="header__section">
      <router-link class="header__logo" to="/">
        PENSÉE
      </router-link>
      <div class="header__group">
        <router-link to="/produits">
          Produits
        </router-link>
        <router-link to="/conseils">
          Conseils
        </router-link>
        <a>En ce moment</a>
      </div>
    </div>
    <div class="header__login">
      <img :src="basket"/>
      <a>Connexion</a>
    </div>
  </div>
</template>

<script>
import Basket from '@/assets/basket.png';

export default {
  name: 'HeaderWhite',
  data: () => ({
    basket: Basket,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$orange : #FEC180;
$green : #D0FFAE;

.header {
  padding: 17px 30px;
  display: flex;

  &__section {
    flex-basis: 70%;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    font-size: 3rem;
  }

  &__group {
    display: flex;
    align-items: center;
    a {
      margin-right: 3rem;
    }
  }

  &__login {
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      color: $orange;
      margin-left: 3rem;
      border: 2px solid $orange;
      padding: 6px 8px;
    }
  }
}
a {
  color: $green;
  font-weight: bold;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
  }
}
</style>
