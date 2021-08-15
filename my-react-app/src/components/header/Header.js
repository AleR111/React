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
import {useMemo, useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { switcher } from "../../store/themeSwitcher"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: "none",
    backgroundColor: "#212227",
  },
  root: {
    display: "flex",
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
}))

export const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const selectorTheme = useMemo(() => (state) => {
    return state.themeSwitcher.theme
  },[])

  const themeApp = useSelector(selectorTheme)
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
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
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox"].map((text, index) => (
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
                onChange={() => dispatch(switcher())}
                color="primary"
              />
            }
            label="Dark"
          />
        </List>
      </Drawer>
    </div>
  )
}
