<template>
  <div class="footer">
    <div class="footer__container">
      <ul>
        <li>
          <router-link to="/produits">
            Produits
          </router-link>
        </li>
        <li>
          <router-link to="/conseils">
            Conseils
          </router-link>
        </li>
        <li>En ce moment</li>
      </ul>
      <ul>
        <li>Politique de confidentialité</li>
        <li>Mentions légales</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$orange : #FEC180;
.footer {
  margin-top: 10rem;
  border-top: 5px solid $orange;
  color: $orange;
  &__container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  ul {
    padding: 0;
    margin-top: 2rem;
  }
  li {
    list-style: none;
    margin-bottom: 1.6rem;
  }
  a {
    color: $orange;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 640px) {
    margin-top: 4rem;
    &__container {
      width: initial;
      margin: 0 2rem;
    }
  }
}
</style>
