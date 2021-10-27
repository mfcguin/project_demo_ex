<template>
  <div class="container">

  </div>
</template>

<script>
import movieModel from '@/model/movie'

export default {
  name: 'Detail',
  data () {
    return {
      filmId: null,
      detail: {}
    }
  },
  created () {
    this.filmId = this.$route.params.id
    this.getData()
  },
  methods: {
    async getData () {
      const res = await movieModel.getDetail(this.filmId)
      this.detail = res.data.film
    }
  }
}
</script>

<style scoped lang="scss">
.container {
}
</style>
