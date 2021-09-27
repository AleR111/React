import { useEffect, useRef } from "react"
import { useSelector, shallowEqual } from "react-redux"
import { useParams } from "react-router-dom"
import { getCurrentConversations } from "../../store/conversations"
import { getMessage } from "../../store/messages"
import { Messages } from "./messages"

export const MessagesContainer = () => {
  const { chatId } = useParams()

  const currentConversation = useSelector(
    (state) => getCurrentConversations(state, chatId),
    (prev, next) => prev.title === next.title,
  )

  const {
    message,
    isPendingData,
    isPendingSendMessage,
    errorData,
    errorSendMessage,
  } = useSelector((state) => getMessage(state, chatId), shallowEqual)

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
      isPendingData={isPendingData}
      isPendingSendMessage={isPendingSendMessage}
      errorData={errorData}
      errorSendMessage={errorSendMessage}
    />
  )
}
