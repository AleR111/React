import { Route, Switch } from "react-router-dom"
import "./App.css"
import { Header } from "./components"
import { Chat, Page404, Profile } from "./pages"

export const App = () => {
  return (
    <div className={"App"}>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path={"/chat"}>
          <Chat />
        </Route>
          <Route path={"/profile"}>
              <Profile />
          </Route>
        <Route path={"*"}>
          <Page404 />
        </Route>
      </Switch>
    </div>
  )
}
