import {
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { useState } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  header: {
    fontSize: "24px",
    fontWeight: "400",
  },
}))

export const AuthForm = ({ header, button }) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    login: "",
    password: "",
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h2 className={classes.header}>{header}</h2>
      <div className={classes.root}>
        <div>
          <FormControl fullWidth={true} className={classes.margin}>
            <TextField
              id="standard-basic"
              label="Login"
              value={values.login}
              onChange={handleChange("login")}
            />
          </FormControl>
          <FormControl fullWidth={true} className={classes.margin}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            className={classes.margin}
            fullWidth={true}
            color="primary"
            href="#outlined-buttons"
          >
            {button}
          </Button>
        </div>
      </div>
    </>
  )
}
