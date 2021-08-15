import {Switch, Route, useRouteMatch} from "react-router-dom"
import { Chats, Layout, Messages, MessageProvider } from "../../components"
import style from "./chat.module.scss"

export const Chat = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={[`${match.path}/:chatId`, `${match.path}/`]}>
      <MessageProvider>
        {([state, actions]) => {
          return (
            <Layout chats={<Chats {...state} />}>
              <Route exact={true} path={`${match.path}`}>
                <div className={style.prompt}>
                  <h4 className={style.promptText}>Select a chat!</h4>
                </div>
              </Route>
              <Route path={`${match.path}/:chatId`}>
                <Messages {...state} {...actions} />
              </Route>
            </Layout>
          )
        }}
      </MessageProvider>
      </Route>
    </Switch>
  )
}
