import { Switch, Route, useRouteMatch } from "react-router-dom"
import { Chats, Layout, Messages } from "../../components"
import style from "./chat.module.scss"

export const Chat = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={[`${match.path}/:chatId`, `${match.path}/`]}>
        <Layout chats={<Chats />}>
          <Route exact={true} path={`${match.path}`}>
            <div className={style.prompt}>
              <h4 className={style.promptText}>Select a chat!</h4>
            </div>
          </Route>
          <Route path={`${match.path}/:chatId`}>
            <Messages />
          </Route>
        </Layout>
      </Route>
    </Switch>
  )
}
