<template>
  <div class="card">
    <h2 class="card__title">{{title}}</h2>
    <p class="card__description">{{description}}</p>
    <a class="card__link">{{link}}</a>
  </div>
</template>

<script>

export default {
  name: 'Card',
   props: [
    "title",
    "description",
    "link",
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  background: linear-gradient(220deg, #D0FFAE, #34EBE9);
  border-radius: 2rem;
  color: white;
  padding: 34px 32px;
  width: 25rem;
  margin: 3rem;
  box-shadow: 4px 6px 6px #93F8C6;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }

  &__title {
    margin-top: 0;
    text-transform: uppercase;
  }
  &__description {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
  &__link {
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: bolder;
  }

  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
}
</style>
