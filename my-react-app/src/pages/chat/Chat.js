import {Switch, Route, useRouteMatch} from "react-router-dom"
import { Chats, Layout, Messages, MessageProvider } from "../../components"
import style from "./chat.module.scss"

export const Chat = () => {
  const useMatch = useRouteMatch()
    console.log(useMatch.path)
  return (
    <Switch>
      <Route path={[`${useMatch.path}/:chatId`, `${useMatch.path}/`]}>
      <MessageProvider>
        {([state, actions]) => {
          return (
            <Layout Chats={<Chats {...state} />}>
              <Route exact={true} path={`${useMatch.path}`}>
                <div className={style.prompt}>
                  <h4 className={style.promptText}>Select a chat!</h4>
                </div>
              </Route>
              <Route path={`${useMatch.path}/:chatId`}>
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
