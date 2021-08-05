import "./App.css"
import { Container, Grid, makeStyles } from "@material-ui/core"
import { Chats, Messages } from "./components"

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: theme.font.color,
      background: theme.background.color,
    },
  }
})

export const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.root} maxWidth="md">
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={4}>
            <Chats />
          </Grid>
          <Grid item={true} xs={8}>
            <Messages />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
