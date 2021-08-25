import { LinearProgress } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPublicGists } from "../../store/publicGists/thunks"

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

export const PublicGistsApi = () => {
  const classes = useStyles()
  const { data, isPending, error } = useSelector(
    (store) => store.publicGistsStore,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPublicGists())
  }, [dispatch])

  if (isPending) {
    return (
      <div className={classes.root}>
        <LinearProgress />
      </div>
    )
  }

  if (error) {
    return <h1 className={classes.error}>{error}</h1>
  }

  return data.map((elem, index) => {
    return <div key={index}>{elem.owner.login}</div>
  })
}
