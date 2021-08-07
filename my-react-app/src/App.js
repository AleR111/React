import "./App.css"
import {
  // Container,
  // Grid,
  // makeStyles,
  // FormControlLabel,
  // Switch,
} from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
// import { useState } from "react"
import {Layout, Header, Chats, Messages} from "./components"

const themes = {
  dark: createTheme({
    font: {
      color: "rgba(255,255,255,0.89)",
    },
    background: {
      color: "#19181f",
    },
  }),

  light: createTheme({
    font: {
      color: "rgba(0,0,0,0.89)",
    },
    background: {
      color: "#ffffff",
    },
  }),
}

export const App = () => {
  // const [themeName, setThemeName] = useState("light")

  // const handleChange = (event) => {
  //   if (event.target.checked) {
  //     setThemeName(event.target.name)
  //   } else setThemeName(event.target.value)
  // }

  return (

      // <header
      //   style={{
      //     color: "rgba(137,159,161,0.82)",
      //     height: 50,
      //     backgroundColor: "#091628",
      //   }}
      // >
      //   <FormControlLabel
      //     labelPlacement="start"
      //     control={
      //       <Switch
      //         onChange={handleChange}
      //         color="primary"
      //         name="dark"
      //         value="light"
      //       />
      //     }
      //     label="Dark"
      //   />
      // </header>
      <ThemeProvider theme={themes.dark}>
        <Layout Header={<Header />} Chats={<Chats/>} Messages={<Messages/>} />
      </ThemeProvider>

  )
}

// const useStyles = makeStyles((theme) => {
//   return {
//     root: {
//       color: theme.font.color,
//       background: theme.background.color,
//     },
//   }
// })

// const Wrapper = () => {
//   const classes = useStyles()
//   return (
//     <div className={classes.root}>
//       <Container maxWidth="md">
//         <Grid container={true} spacing={3}>
//           <Grid item={true} xs={4}>
//             <Chats />
//           </Grid>
//           <Grid item={true} xs={8}>
//             <Messages />
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   )
// }
