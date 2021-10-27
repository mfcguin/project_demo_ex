import request from '@/utils/request'

class MovieModel {
  // 获取电影列表
  getMovies (data) {
    return request.get('/gateway', {
      ...data,
      k: 5196770,
      type: 1
    }, {
      headers: { 'X-Host': 'mall.film-ticket.film.list' }
    })
  }

  // 获取电影详情
  getDetail (filmId) {
    return request.get('/gateway', {
      filmId,
      k: 5501344
    }, {
      headers: { 'X-Host': 'mall.film-ticket.film.info' }
    }
    )
  }
}

export default new MovieModel()
