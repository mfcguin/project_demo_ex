<template>
  <div class="container">
    <div ref="list">
      <movie v-for="item in dataArray" :movie="item" :key="item.filmId"></movie>
    </div>
  </div>
</template>

<script>
import movieModel from '@/model/movie'
import Movie from '@/components/home/Movie'
import pagination from '@/mixins/pagination'

export default {
  name: 'Home',
  mixins: [pagination],
  components: {
    Movie
  },
  data () {
    return {
      pageNum: 1

    }
  },
  created () {
    // this.list = [
    //   {
    //     filmId: 5725,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   },
    //   {
    //     filmId: 5726,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   },
    //   {
    //     filmId: 5727,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   },
    //   {
    //     filmId: 5728,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   },
    //   {
    //     filmId: 5729,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   }, {
    //     filmId: 5730,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   }, {
    //     filmId: 5731,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   }, {
    //     filmId: 5732,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   },
    //   {
    //     filmId: 5733,
    //     name: '007：无暇赴死',
    //     poster: 'https://pic.maizuo.com/usr/movie/fe5f0ef6c6cbf8d87f206cbd9835bd96.jpg',
    //     grade: '3',
    //     synopsis: '隐退的邦德在牙买加过着平静的生活，直到他的中情局旧友费利克斯·莱特前来寻求帮助，短暂的平静就此告一段落。他们试图营救一名被绑架科学家，但这个任务不仅危险度远超预期，更是将邦德带上了追踪配备危险新科技的神秘反派之旅。'
    //   }
    // ]
    console.log('created')
    this.getList()
  },
  mounted () {
    console.log(333)
  },
  methods: {

    async getList () {
      const res = await movieModel.getMovies({
        cityId: '440100',
        pageNum: this.pageNum++,
        pageSize: 10
      })

      // 设置数据
      this.setMoreData(res.data.films)
      // 设置总数
      this.setTotal(res.data.total)

      // 判断是否还有更多数据
      if (!this.hasMoreData()) {
        this.setNoHasMore()
      }

      // 数据加载完毕，解锁
      this.unlocked()
    }

  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 0.267rem;
}
</style>
