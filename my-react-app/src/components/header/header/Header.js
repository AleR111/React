import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  Avatar,
  ListItemAvatar,
  Button,
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
} from "@material-ui/icons"
import classNames from "classnames"
import { Link } from "react-router-dom"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: "none",
    backgroundColor: theme.header.backgroundColor,
    position: "unset",
  },
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.burger.color,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    paddingLeft: "0",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  button: {
    textDecoration: "none",
  },
}))

export const Header = ({
  handleDrawerOpen,
  handleDrawerClose,
  handleOpenModal,
  themeApp,
  onSwitcher,
  open,
  auth,
  signOut,
}) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classNames(
          classes.appBar,
          {
            [classes.appBarShift]: open,
          },
          classes.header,
        )}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <div className={classes.grow} />
          <div>
            {auth ? (
              <Button color="secondary" onClick={signOut}>
                Sign out
              </Button>
            ) : (
              <Link className={classes.button} to={`/sign-in`}>
                <Button color="primary">sign in</Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Remy Sharp"
              secondary={<Link to={`/profile`}>Profile</Link>}
            />
          </ListItem>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to={`/chat`}>
            <ListItem button={true}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={"Chats"} />
            </ListItem>
          </Link>
          <Link to={`/public_gists_api`}>
            <ListItem button={true}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={"Public Gists Api"} />
            </ListItem>
          </Link>
          <ListItem button={true} onClick={handleOpenModal}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary={"New Chat"} />
          </ListItem>
          {["New Channel", "Contacts", "Setting"].map((text, index) => (
            <ListItem button={true} key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <FormControlLabel
            labelPlacement="end"
            control={
              <Switch
                checked={themeApp === "dark"}
                onChange={onSwitcher}
                color="primary"
              />
            }
            label="Dark Mode"
          />
        </List>
      </Drawer>
    </>
  )
}
