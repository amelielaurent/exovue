<template>
  <div class="hero">
    <div class="hero__container">
      <img :src="fontaine" class="hero__product"/>
      <div class="hero__arrow">
        <img :src="arrow"/>
      </div>
    </div>
    <div class="hero__content">
        <h1 class='hero__title'>Fontaine Vasque</h1>
        <h2 class='hero__description'>Hairie Grandon</h2>
        <p class='hero__price'>200 €</p>
    </div>
  </div>
</template>

<script>
import Fontaine from '@/assets/fontaine.png';
import Arrow from '@/assets/arrow.png';

export default {
  name: 'Hero',
  data: () => ({
    fontaine: Fontaine,
    arrow:  Arrow,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$orange : #FEC180;

.hero {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 3rem;
  padding-left: 3rem;

  &__container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__product {
    width: 74.5%;
  }

  &__arrow {
    margin-left: 5rem;
    img {
      border: 2px solid $orange;
      padding: 1.5rem;
      border-radius: 100%;
      width: 30px;
      height: 30px;
    }
  }

  &__content {
    margin-top: -7rem;
  }

  &__title {
    margin: 0;
    font-size: 2.5rem;
  }

  &__description {
    margin-top: 0;
    margin-bottom: 0;
    opacity: 0.4;
    text-transform: uppercase;
    font-size: 1.8rem;
  }

  &__price {
    margin: 0;
    color: $orange;
    font-size: 3.5rem;
    font-weight: bold;
  }

  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
      justify-content: center;
    }
    &__content {
      margin: 0;
    }
    &__arrow {
      display: none;
    }
    &__product {
      width: 98%;
    }
  }
}
</style>
