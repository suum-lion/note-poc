import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthContainer from '../presentation/container/Auth/AuthContainer'
import ProfileContainer from '../presentation/container/Profile/ProfileContainer'
import { useAuth } from './AuthContext'

const AppRouter = () => {
  const { isSignedIn } = useAuth()
  return (
    <Router>
      <Switch>
        {isSignedIn ? (
          <Route exact path="/">
            <ProfileContainer />
          </Route>
        ) : (
          <Route exact path="/">
            <AuthContainer />
          </Route>
        )}
      </Switch>
    </Router>
  )
}

export default AppRouter
