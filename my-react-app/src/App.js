import "./App.css"
import {Container, Grid} from "@material-ui/core"
import { Chats, Messages } from "./components"

export const App = () => {
  return (
    <Container maxWidth="md">
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={4}>
          <Chats />
        </Grid>
        <Grid item={true} xs={8}>
          <Messages />
        </Grid>
      </Grid>
    </Container>
  )
}
