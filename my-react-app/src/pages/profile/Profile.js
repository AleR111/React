import { Container, Avatar} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import style from "./profile.module.scss"

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '100%'
    },
  profilePage: {
    backgroundColor: theme.background.color,
    height: "100%",
  },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}))

export const Profile = () => {
  const classes = useStyle()
  return (
    <div className={classes.profilePage}>
      <Container maxWidth="sm" className={classes.root}>
        <div className={style.box}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        </div>
      </Container>
    </div>
  )
}
