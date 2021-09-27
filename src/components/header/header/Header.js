import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { HeaderDrawer } from "./"
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
        <HeaderDrawer
          auth={auth}
          handleDrawerClose={handleDrawerClose}
          handleOpenModal={handleOpenModal}
          themeApp={themeApp}
          onSwitcher={onSwitcher}
          open={open}
        />
      )}
    </>
  )
}
