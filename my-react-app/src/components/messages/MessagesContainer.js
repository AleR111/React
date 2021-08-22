import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {
  updateValue,
  getCurrentConversations,
  getValue,
} from "../../store/conversations"
import {
  sendMessage,
  getMessage,
  sendMessageWithThunk,
} from "../../store/messages"
import { Messages } from "./messages"

export const MessagesContainer = () => {
  const { chatId } = useParams()

  const currentConversation = useSelector((state) =>
    getCurrentConversations(state, chatId),
  )

  const value = useSelector((state) => getValue(state, chatId))

  const message = useSelector((state) => getMessage(state, chatId)) || []

  const dispatch = useDispatch()

  const handleSendMessage = () => {
    dispatch(sendMessage({ author: "user", message: value }, chatId))
    dispatch(updateValue("", chatId))
  }

  const handleSendMessageWithThunk = () => {
    dispatch(sendMessageWithThunk({ author: "user", message: value }, chatId))
    dispatch(updateValue("", chatId))
  }

  const sendMessageKey = (code) => {
    if (code === "Enter" && value) handleSendMessageWithThunk()
  }

  const onUpdateValue = (e) => {
    dispatch(updateValue(e.target.value, chatId))
  }

  const inputRef = useRef(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    inputRef.current?.focus()
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
  }, [chatId, message])

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
    />
  )
}
