import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthContainer from '../presentation/container/Auth/AuthContainer'
import NoteContainer from '../presentation/container/Note/NoteContainer'
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
            <NoteContainer />
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
