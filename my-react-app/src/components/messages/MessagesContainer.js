import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import {
  updateValueInDB,
  getCurrentConversations,
  getValue,
} from "../../store/conversations"
import { getMessage, sendMessageInDB } from "../../store/messages"
import { Messages } from "./messages"

export const MessagesContainer = () => {
  const { chatId } = useParams()

  const currentConversation = useSelector((state) =>
    getCurrentConversations(state, chatId),
  )

  const value = useSelector((state) => getValue(state, chatId))

  const {
    message,
    isPendingData,
    isPendingSendMessage,
    errorData,
    errorSendMessage,
  } = useSelector((state) => getMessage(state, chatId))
  const dispatch = useDispatch()

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

  useEffect(() => {
    if (!scrollRef.current || !inputRef.current) return
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
      handleSendMessage={handleSendMessageWithThunk}
      value={value}
      onUpdateValue={onUpdateValue}
      isPendingData={isPendingData}
      isPendingSendMessage={isPendingSendMessage}
      errorData={errorData}
      errorSendMessage={errorSendMessage}
    />
  )
}
