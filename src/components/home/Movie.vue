<template>
  <router-link :to="{name:'detail',params:{id:movie.filmId}}" class="movie-container">
    <div class="img-box" :style="{backgroundImage:'url(' + movie.poster + ')'}"></div>
    <div class="content-box">
      <div>
        <div class="title">{{ movie.name }}</div>
        <div class="start">{{ movie.grade }}</div>
      </div>
      <div class="description">{{ movie.synopsis }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movie: Object
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/base.scss";

.movie-container {
  display: flex;
  margin-bottom: 0.533rem;
}

.img-box {
  width: 5.333rem;
  height: 8rem;
  background-size: contain;
}

.content-box {
  padding-bottom: 0.267rem;
  flex: 1;
  margin-left: 0.533rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-size: 0.96rem;
    font-weight: bold;
  }

  .description {
    font-size: 0.747rem;
    color: #666;
    @include clamp(4);
  }
}
</style>
