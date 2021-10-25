import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AuthContainer from '../presentation/container/Auth/AuthContainer'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AuthContainer />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
