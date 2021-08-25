import { LinearProgress, Button, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Pagination } from "@material-ui/lab"
import { useEffect, useState } from "react"
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

  const [page, setPage] = useState(1)

  const { data, isPending, error } = useSelector(
    (store) => store.publicGistsStore,
  )
  const dispatch = useDispatch()

  const newPage = (page) => {
    setPage(page)
    dispatch(getPublicGists(page))
  }

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
    return (
      <Container maxWidth="xl">
        <h1 className={classes.error}>{error}</h1>
        <div className={classes.root}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(getPublicGists())}
          >
            Reload
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <>
      <div>
        {data.map((elem, index) => {
          return <div key={index}>{elem.owner.login}</div>
        })}
      </div>
      <div className={classes.root}>
        <Pagination
          count={data.length}
          page={page}
          shape="rounded"
          onChange={(e, page) => newPage(page)}
        />
      </div>
    </>
  )
}
