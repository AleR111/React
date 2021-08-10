import { Switch, Route, useRouteMatch } from "react-router-dom"
import { Chats, Layout, Messages, MessageProvider } from "../../components"
import style from "./chat.module.scss"

export const Chat = () => {
  const useMatch = useRouteMatch()
  console.log(useMatch.path)
  return (
    <MessageProvider>
      {([state]) => {
        console.log(state.conversation)
        return (
          <Switch>
            <Route exact={true} path={`${useMatch.path}`}>
              <Layout Chats={() => <Chats conversation={state.conversation} />}>
                <div className={style.prompt}>
                  <h4 className={style.promptText}>Select a chat!</h4>
                </div>
              </Layout>
            </Route>
            <Route exact={true} path={`${useMatch.path}/:idChat`}>
              <Layout Chats={<Chats />}>
                <Messages {...state.message} />
              </Layout>
            </Route>
          </Switch>
        )
      }}
    </MessageProvider>
  )
}
