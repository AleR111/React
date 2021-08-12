import {Switch, Route} from "react-router-dom"
import { Chats, Layout, Messages, MessageProvider } from "../../components"
import style from "./chat.module.scss"

export const Chat = () => {
  // const useMatch = useRouteMatch()
  return (
    <Switch>
      <Route path={["/chat/:chatId", '/chat']}>
      <MessageProvider>
        {([state, actions]) => {
          return (
            <Layout Chats={<Chats {...state} />}>
              <Route exact={true} path={'/chat'}>
                <div className={style.prompt}>
                  <h4 className={style.promptText}>Select a chat!</h4>
                </div>
              </Route>
              <Route path={'/chat/:chatId'}>
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
