export default function ({ route, redirect }) {
    const publicPages = ['/', '/connexion', '/inscription']
    const authRequired = !publicPages.includes(route.path)
    const loggedIn = localStorage.getItem('auth_token')
  
    if (authRequired && !loggedIn) {
      return redirect('/connexion')
    }
  }