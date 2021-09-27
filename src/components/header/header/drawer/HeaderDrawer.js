import {
  Avatar,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  Link as LinkUI,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import {
  ChevronLeft,
  ChevronRight,
  AddBox,
  Mail,
  Contacts,
  SettingsApplications,
} from "@material-ui/icons"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { useStyles } from "../styles"

export const HeaderDrawer = ({
  auth,
  handleDrawerClose,
  handleOpenModal,
  themeApp,
  onSwitcher,
  open,
}) => {
  const classes = useStyles()
  const theme = useTheme()

  const linkList = [
    { type: "page", href: `/chat`, icon: <Mail />, primary: "Chats" },
    {
      type: "button",
      function: handleOpenModal,
      icon: <AddBox />,
      primary: "New Chat",
    },
    {
      type: "page",
      href: `/contacts`,
      icon: <Contacts />,
      primary: "Contacts",
    },
    {
      type: "page",
      href: `/settings`,
      icon: <SettingsApplications />,
      primary: "Settings",
    },
  ]

  return (
    <Drawer
      className={classNames(classes.drawer, classes.themeDrawer)}
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClose={handleDrawerClose}
    >
      <div className={classes.drawerHeader}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={auth?.email}
            secondary={
              <Link to={`/profile`}>
                <LinkUI
                  onClick={handleDrawerClose}
                  className={classes.themeLink}
                >
                  Profile
                </LinkUI>
              </Link>
            }
          />
        </ListItem>
        <IconButton onClick={handleDrawerClose} className={classes.themeLink}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {linkList.map((elem, idx) => {
          return elem.type === "page" ? (
            <Link className={classes.themeLink} to={elem.href} key={idx}>
              <ListItem button={true} onClick={handleDrawerClose}>
                <ListItemIcon>{elem.icon}</ListItemIcon>
                <ListItemText primary={elem.primary} />
              </ListItem>
            </Link>
          ) : (
            <ListItem button={true} onClick={elem.function} key={idx}>
              <ListItemIcon>{elem.icon}</ListItemIcon>
              <ListItemText primary={elem.primary} />
            </ListItem>
          )
        })}
      </List>
      <FormControlLabel
        className={classes.themeSwitcher}
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
    </Drawer>
  )
}
