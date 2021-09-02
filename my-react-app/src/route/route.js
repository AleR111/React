import { Container, LinearProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  error: {
    color: "red",
  },
}))

export const PublicPage = ({ ...params }) => {
  const classes = useStyles()
  const { data, isPending, error } = useSelector((store) => store.authStore)

  if (isPending) {
    if (error) {
      return (
        <Container maxWidth="xl">
          <h1 className={classes.error}>{error}</h1>
        </Container>
      )
    }
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    )
  } else return data ? <Redirect to="/chat" /> : <Route {...params} />
}

export const PrivatePage = ({ ...params }) => {
  const classes = useStyles()
  const { data, isPending, error } = useSelector((store) => store.authStore)
  if (error) {
    return (
      <Container maxWidth="xl">
        <h1 className={classes.error}>{error}</h1>
      </Container>
    )
  }

  if (isPending) {
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    )
  } else return data ? <Route {...params} /> : <Redirect to="/sign-in" />
}
