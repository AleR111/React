import {
  CircularProgress,
  IconButton,
  Input,
  InputAdornment,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SendRounded } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getValue, updateValueInDB } from "../../../../store/conversations"
import { sendMessageInDB } from "../../../../store/messages"

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: theme.messagesInput.backgroundColor,
    color: "#9a9fa1",
    padding: "10px 15px",
    fontSize: " 15px",
    borderLeft: "1px solid rgba(0,0,0,0.27)",
  },
}))

export const MessageInput = ({ isPendingSendMessage, inputRef }) => {
  const classes = useStyles()
  const { chatId } = useParams()
  const dispatch = useDispatch()
  const value = useSelector((state) => getValue(state, chatId))
  const handleSendMessageWithThunk = () => {
    dispatch(sendMessageInDB({ author: "user", message: value }, chatId))
  }

  const sendMessageKey = (code) => {
    if (code === "Enter" && value) handleSendMessageWithThunk()
  }

  const onUpdateValue = (e) => {
    dispatch(updateValueInDB(e.target.value, chatId))
  }

  return (
    <Input
      className={classes.input}
      inputRef={inputRef}
      fullWidth={true}
      placeholder="Write a message..."
      autoFocus={true}
      onKeyDown={(e) => {
        sendMessageKey(e.code)
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            color="primary"
            onClick={() => handleSendMessageWithThunk()}
          >
            {isPendingSendMessage ? (
              <CircularProgress />
            ) : (
              value && <SendRounded />
            )}
          </IconButton>
        </InputAdornment>
      }
      value={value}
      onChange={(e) => onUpdateValue(e)}
    />
  )
}
