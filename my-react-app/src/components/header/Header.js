import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Menu, AccountCircle, Chat } from "@material-ui/icons"
import { Switch, Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.background.color,
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.background.color,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <Switch>
        <AppBar className={classes.header} color="inherit" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              // color="inherit"
              aria-label="open drawer"
            >
              <Menu />
            </IconButton>
            <Link to={'/chat'}>
            <Chat />
            </Link>
            <div className={classes.grow} />
            <div>
              <Link to={'/profile'}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                // color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Switch>
    </div>
  )
}
