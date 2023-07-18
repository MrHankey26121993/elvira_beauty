export default ({}, inject) => {

  const fun = {

    avatar(avatar = null) {

      if (avatar) {
        if (avatar.includes('http')) {
          return avatar
        } else {
          return $config.url_api + '' + avatar
        }
      }

      if (store.state.auth && store.state.auth.user) {
        if (store.state.auth.user.user_icon.includes('http')) {
          return store.state.auth.user.user_icon
        } else {
          return $config.url_api + '' + store.state.auth.user.user_icon
        }
      }

      return avatar
    },
    isMobile() {
      if (process.client) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      }
    }
  }

  inject('src', fun)

  inject('isCan', (permission) => {
    try {
      if (!store.state.auth.user.scope) return false
      return Boolean(store.state.auth && store.state.auth.user && store.state.auth.user.scope.includes(permission))
    } catch (e) {
      return false
    }
  })
}
