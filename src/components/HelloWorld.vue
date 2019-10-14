<template>
  <div class="home">
    <Header></Header>
    <Hero></Hero>
    <img class="home__fleurs" :src="fleurs"/>
    <img class="home__leaf" :src="fleursRight"/>
    <div class="home__container">
      <h2 class="main__title">Sélection du moment</h2>
      <carousel :per-page="1" :mouse-drag="false" paginationColor="#93F8C6"
                  paginationActiveColor="#34EBE9">
        <slide>
          <div class="home__card">
            <Card title="Cactus" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="Voir plus"></Card>
            <Card title="Fleurs" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="Voir plus"></Card>
            <Card title="Potager" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="Voir plus"></Card>
          </div>
        </slide>
        <slide>
          <div class="home__card">
            <Card title="Feuille" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="Voir plus"></Card>
            <Card title="Ronces" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="Voir plus"></Card>
            <Card title="Fruits" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." link="Voir plus"></Card>
          </div>
        </slide>
      </carousel>
      <h2 class="main__title">idées du jour</h2>
      <div class="home__section">
        <img class="home__idea" :src="idea"/>
        <div class="home__card--blue">
          <h3>Le mûrier conseils</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { Carousel, Slide } from 'vue-carousel';

import Fleurs from '@/assets/feuille_gauche.png';
import FleursRight from '@/assets/feuille_droite.png';
import Idea from '@/assets/home_idea.png';

export default {
  name: 'HelloWorld',
  components: {Header, Hero, Card, Footer, Carousel, Slide},
  data: () => ({
    fleurs: Fleurs,
    fleursRight: FleursRight,
    idea: Idea,
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$blue: #34EBE9;

.home {
  height: 100vh;
  background-image: url('~@/assets/background.png');
  background-repeat: no-repeat;
  position: relative;

  &__section {
    display: flex;
    flex-direction: column;
  }

  &__idea {
    width: 800px;
  }

  &__card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &--blue {
      background: $blue;
      color: white;
      padding: 35px 30px;
      border-radius: 1.8rem;
      width: 400px;
      margin-top: -6rem;
      z-index: 3000;
      align-self: flex-end;
      h3 {
        text-transform: uppercase;
        margin: 0;
      }
      p {
        margin: 0;
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
    }
  }
  &__container {
    width: 1100px;
    margin: 0 auto;
  }
  &__fleurs {
    position: absolute;
    top: 120vh;
    bottom: 0;
    left: 0;
    z-index: -2;
  }
  &__leaf {
    position: absolute;
    top: 160vh;
    right: 0;
    z-index: -2;
  }

  @media screen and (max-width: 640px) {
    height: 80vh;
    &__container {
      width: initial;
      margin: 0 2rem;
    }
    &__idea {
      max-width: 100%;
    }
    &__card {
      &--blue {
        width: initial;
        margin-top: 3rem;
      }
    }
  }
}
</style>
