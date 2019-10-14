<template>
  <div class="header">
    <div class="header__section">
      <router-link class="header__logo" to="/"  @click="tab = 'home'" :class="{active: tab === 'home' }">
        PENSÉE
      </router-link>
      <input class="burger" type="checkbox">
      <nav class="burger__nav">
        <router-link to="/produits" @click="tab = 'product'" :class="{active: tab === 'product' }">
          Produits
        </router-link>
        <router-link to="/conseils">
          Conseils
        </router-link>
      </nav>
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
  name: 'Header',
  data: () => ({
    basket: Basket,
    tab: 'home'
  }),
  computed :{
    isActive: function(){
      return {
        tab : this.tab,
      }
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$orange : #FEC180;
.header {
  padding: 17px 30px;
  display: flex;

  .active {
    color: red !important;
  }

  &__section {
    flex-basis: 70%;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    font-size: 3rem;
  }

  .burger {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .burger {
      display: inline;
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      color:inherit;
      cursor:pointer;
      font-size:30px;
      line-height:50px;
      margin:0;
      outline:0;
      padding:0;
      position:absolute;
      text-align:center;
      right:10px;
      
      &::before {
        content:'\00af';
      }
      &:checked:before {
        content:'\00d7';
      }
      &:checked + nav {
        height:calc(25vh - 50px);
      }
    }
  }

  nav {
    background:inherit;
    font-size:20px;
    font-weight:bold;
    height:0;
    overflow:hidden;
    text-transform:uppercase;
    transition:height .2s;
    background: white;
    z-index: 5;
    & > * {
      display:block;
      letter-spacing:1px;
      line-height:2.5;
      padding:0 20px;
      width:100%;
    }
    a {
      color: $orange;
    }
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

  @media screen and (max-width: 640px) {
    &__group, &__login {
      display: none;
    }
  }
}
a {
  color: white;
  font-weight: bold;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
  }
}
</style>