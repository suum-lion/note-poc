import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface IAuthContextState {
  isSignedIn: boolean
  user: User | null
}

const AuthContext = createContext<IAuthContextState>({
  isSignedIn: false,
  user: null,
})

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const auth = getAuth()
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const authHandler = useCallback(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user)
        setIsSignedIn(true)
      } else {
        setUser(null)
        setIsSignedIn(false)
      }
    })
  }, [auth])

  useEffect(() => {
    authHandler()
  }, [authHandler])

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)
