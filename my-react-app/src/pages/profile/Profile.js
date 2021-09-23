import { Container, Avatar, Grid, Input, FormHelperText} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {PersonOutline} from '@material-ui/icons';
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
      color: '#fff',
    height: "100%",
  },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    icon: {
        color: theme.font.color,
        fontSize: '32px'
    }
}))

export const Profile = () => {
  const classes = useStyle()
  return (
    <div className={classes.profilePage}>
      <Container maxWidth="sm" className={classes.root}>
          TODO
        <div className={style.box}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <Grid container={true} spacing={2} alignItems={"center"} >
                <Grid item={true}>
                    <PersonOutline className={classes.icon}/>
                </Grid>
                <Grid item={true}>
                        <Input
                            id="standard-adornment-weight"
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </Grid>
            </Grid>
            <Grid container={true} spacing={2} alignItems={"center"} >
                <Grid item={true}>
                    <PersonOutline className={classes.icon}/>
                </Grid>
                <Grid item={true}>
                    <Input
                        id="standard-adornment-weight"
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </Grid>

            </Grid>
            <Grid container={true} spacing={2} alignItems={"center"} >
                <Grid item={true}>
                    <PersonOutline className={classes.icon}/>
                </Grid>
                <Grid item={true}>
                    <Input
                        id="standard-adornment-weight"
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </Grid>

            </Grid>
            <Grid container={true} spacing={2} alignItems={"center"} >
                <Grid item={true}>
                    <PersonOutline className={classes.icon}/>
                </Grid>
                <Grid item={true}>
                    <Input
                        id="standard-adornment-weight"
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </Grid>

            </Grid>
        </div>
      </Container>
    </div>
  )
}
