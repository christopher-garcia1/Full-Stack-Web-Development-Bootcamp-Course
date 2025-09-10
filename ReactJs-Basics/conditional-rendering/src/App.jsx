const App = () => {
  // const isAuthenticated = false
  const names = ['John', 'Linda', 'Chris']

  // if (isAuthenticated) {
  //   return <h1>Welcome Back!</h1>
  // } else {
  //  return <h1>Please login to continue</h1>
  // }
  // return <h1>{isAuthenticated ? 'Welcome Back!': 'Please login!' }</h1>
  return <div> 
    <h1>List of users</h1>
    <ul>
      {names.map((name, i) => { return <li key={i}>{name}</li>})}
    </ul>
  </div>
  
  
}
export default App