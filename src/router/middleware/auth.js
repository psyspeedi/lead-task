export default function auth ({ next, store, nextMiddleware }){
  if(store.getters['auth/isLoggedIn']){
    return next({
      name: 'Analytics'
    })
  }

  return nextMiddleware()
}