export default {
  data () {
    return {
      loadMoreLoading: false,
      hasMore: true,
      dataArray: [],
      total: 0
    }
  },
  // 当前页面不是缓存页面初始化滑动监听
  created () {
    if (!this.$route.meta.keepAlive) {
      this.onReachBottom()
    }
  },
  // 当前页面不是缓存页面析构滑动监听
  destroyed () {
    if (window.onscroll) {
      this.unReachBottom()
    }
  },
  // 当前页面是缓存页面初始化滑动监听
  activated () {
    if (this.$route.meta.keepAlive) {
      this.onReachBottom()
    }
  },
  // 当前页面是缓存页面析构滑动监听
  deactivated () {
    if (window.onscroll) {
      this.unReachBottom()
    }
  },
  methods: {
    loadMore () {
      // 判断是否需要加载更多
      if (!this.hasMore) {
        return
      }

      // 判断当前是否锁住
      if (this.isLocked()) {
        return
      }

      // 设置一个锁，当正在加载的时候不能再次加载
      this.locked()

      this.getList()
    },
    // 初始化监听加载更多
    onReachBottom () {
      window.onscroll = () => {
        const scrollHeight = window.scrollY || document.documentElement.scrollTop
        const oList = this.$refs.list

        if (oList.offsetHeight <= document.documentElement.offsetHeight + scrollHeight) {
          this.loadMore()
        }
      }
    },
    // 析构加载更多的监听
    unReachBottom () {
      window.onscroll = null
    },
    // 初始化数据
    initialize () {
      this.hasMore = true
      this.dataArray = []
      this.total = null
      this.loadMoreLoading = false
    },

    // 判断当前是否锁住
    isLocked () {
      return this.loadMoreLoading
    },

    // 加锁
    locked () {
      this.loadMoreLoading = true
    },

    // 解锁
    unlocked () {
      this.loadMoreLoading = false
    },

    // 加载更多数据
    setMoreData (dataArray) {
      this.dataArray = this.dataArray.concat(dataArray)
    },

    // 设置总数记录
    setTotal (total) {
      this.total = total
      if (total === 0) {
        this.hasMore = false
      }
    },

    // 判断是否能够加载更多
    hasMoreData () {
      return !(this.dataArray.length >= this.total)
    },

    // 设置没有更多数据
    setNoHasMore () {
      this.hasMore = false
    }
  }
}
