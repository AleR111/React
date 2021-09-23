import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import { Chats, Layout, MessagesContainer } from "../../components"
import { openNewChatModal } from "../../store/newChatModal"
import style from "./chat.module.scss"

export const Chat = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()

  const createNewChat = () => {
    dispatch(openNewChatModal())
  }

  return (
    <Switch>
      <Route path={[`${match.path}/:chatId`, `${match.path}/`]}>
        <Layout chats={<Chats />}>
          <Route exact={true} path={`${match.path}`}>
            <div className={style.prompt}>
              <h4 className={style.promptText}>Select a chat!</h4>
              <div>or</div>
              <Button onClick={createNewChat}>Create New Chat</Button>
            </div>
          </Route>
          <Route path={`${match.path}/:chatId`}>
            <MessagesContainer />
          </Route>
        </Layout>
      </Route>
    </Switch>
  )
}
