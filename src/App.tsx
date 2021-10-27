import AppRouter from './infrastructure/AppRouter'
import AuthProvider from './infrastructure/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
