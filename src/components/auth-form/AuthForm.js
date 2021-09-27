import {
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Button,
  Container,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import classNames from "classnames"
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
    color: "#1623b3",
  },
  link: {
    textAlign: "center",
    "& a": {
      textDecoration: "none",
      color: "#5467a8",
      "&:hover": {
        color: "#000e3b",
      },
    },
  },
  container: {
    marginTop: "10%",
  },
  error: {
    color: "red",
  },
}))

export const AuthForm = ({ header, button, link, onSubmit }) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  })
  const [error, setError] = useState("")

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleOnSubmit = async () => {
    console.log(13212)
    try {
      await onSubmit(values.email, values.password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <h2 className={classes.header}>{header}</h2>
      {error && (
        <div className={classNames(classes.error, classes.margin)}>{error}</div>
      )}
      <div className={classes.root}>
        <div>
          <FormControl fullWidth={true} className={classes.margin}>
            <TextField
              id="standard-basic"
              label="Email"
              value={values.email}
              onChange={handleChange("email")}
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
            onClick={handleOnSubmit}
          >
            {button}
          </Button>
          <div className={classes.link}>{link}</div>
        </div>
      </div>
    </Container>
  )
}
