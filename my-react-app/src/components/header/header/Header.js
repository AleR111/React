import {
  Drawer,
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
  Link as LinkUI,
} from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
} from "@material-ui/icons"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { useStyles } from "./styles"

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
          {auth && (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
          )}
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
      {auth && (
        <Drawer
          className={classNames(classes.drawer, classes.themeDrawer)}
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
                primary={auth?.email}
                secondary={
                  <Link to={`/profile`}>
                    <LinkUI className={classes.themeLink}>Profile</LinkUI>
                  </Link>
                }
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
      )}
    </>
  )
}
