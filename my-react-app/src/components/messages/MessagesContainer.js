import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {
  updateValueInDB,
  getCurrentConversations,
  getValue,
} from "../../store/conversations"
import { sendMessage, getMessage, sendMessageInDB } from "../../store/messages"
import { Messages } from "./messages"

export const MessagesContainer = () => {
  const { chatId } = useParams()

  const currentConversation = useSelector((state) =>
    getCurrentConversations(state, chatId),
  )

  const value = useSelector((state) => getValue(state, chatId))

  const { message, isPending, error } = useSelector((state) =>
    getMessage(state, chatId),
  )
  console.log(message, isPending, error)

  const dispatch = useDispatch()

  const handleSendMessage = () => {
    dispatch(sendMessage({ author: "user", message: value }, chatId))
    dispatch(updateValueInDB("", chatId))
  }

  const handleSendMessageWithThunk = () => {
    dispatch(sendMessageInDB({ author: "user", message: value }, chatId))
  }

  const sendMessageKey = (code) => {
    if (code === "Enter" && value) handleSendMessageWithThunk()
  }

  const onUpdateValue = (e) => {
    dispatch(updateValueInDB(e.target.value, chatId))
  }

  const inputRef = useRef(null)
  const scrollRef = useRef(0)

  // useEffect(() => {
  //   inputRef.current?.focus()
  //   scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
  // }, [])

  return (
    <Messages
      currentConversation={currentConversation}
      scrollRef={scrollRef}
      message={message}
      inputRef={inputRef}
      sendMessageKey={sendMessageKey}
      handleSendMessage={handleSendMessage}
      value={value}
      onUpdateValue={onUpdateValue}
      isPending={isPending}
      error={error}
    />
  )
}
