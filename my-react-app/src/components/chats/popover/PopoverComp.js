import { Popover, Paper, Button } from "@material-ui/core"
import { Delete } from "@material-ui/icons"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { deleteConversationFromDB } from "../../../store/conversations"

export const PopoverComp = ({
  anchorEl,
  setAnchorEl,
  contextChatId,
  chatId,
}) => {
  const history = useHistory()
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const dispatch = useDispatch()

  const deleteChat = () => {
    dispatch(deleteConversationFromDB(contextChatId))
    handleClose()
    if (contextChatId === chatId) history.push("/chat")
  }

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Paper variant="outlined">
        <Button onClick={deleteChat} variant="contained" startIcon={<Delete />}>
          Delete
        </Button>
      </Paper>
    </Popover>
  )
}
