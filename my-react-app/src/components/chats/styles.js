import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.font.color,
    textDecoration: "none"
    // background: 'rgba(27, 33, 47, 0.96)',
  },
  chats: {
    backgroundColor: theme.chats.backgroundColor,
  },
  itemSelected: {
    "&.Mui-selected": {
      backgroundColor: "rgba(43,82,120,0.37)",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "rgba(43,82,120,0.37)",
    },
  },
  item: {
    "&:hover": {
      backgroundColor: "rgba(43,82,120,0.32)",
    },
  },
}))
