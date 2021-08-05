import "./App.css"
import Grid from "@material-ui/core/Grid"
import { Chats, Messages } from "./components"


export const App = () => {
  return (
    <Grid container={true} spacing={3}>
      <Grid item={true} xs={6}>
        <Chats />
      </Grid>
      <Grid item={true} xs={6}>
        <Messages />
      </Grid>
    </Grid>
  )
}
