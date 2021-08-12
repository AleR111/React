import { useCallback, useMemo, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const MessageProvider = ({ children }) => {
  const { chatId } = useParams()

  const [conversation, setConversation] = useState([
    { id: "chat123", title: "Keeley Lon", value: "" },
    { id: "chat241", title: "Angelle Jonty", value: "" },
    { id: "chat426", title: "Myra Justy", value: "" },
  ])

  const [messages, setMessages] = useState({
    chat123: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot", date: new Date() },
    ],
    chat241: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot, lol", date: new Date() },
    ],
    chat426: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot", date: new Date() },
    ],
  })

  const updateValue = useCallback(
    (value) => {
      setConversation((state) =>
        state.map((elem) => {
          if (elem.id === chatId)
            return { id: elem.id, title: elem.title, value }
          return elem
        }),
      )
    },
    [chatId],
  )

  const sendMessage = useCallback(
    (message, author = "user") => {
      console.log(32111)
      if (!message) return

      setMessages((state) => {
        state[chatId].push({ author, message, date: new Date() })
        return { ...state }
      })
      updateValue("")
    },
    [chatId, updateValue],
  )

  const sendMessageKey = useCallback(
    (code, message) => {
      console.log(code)
      if (code === "Enter" && message) {
        console.log(3333)
        sendMessage(message)
      }
    },
    [sendMessage],
  )

  useEffect(() => {
    const currentMessage = messages[chatId][messages[chatId].length - 1]

    if (!messages[chatId] || currentMessage.author === "bot") {
      return
    }

    setTimeout(() => {
      sendMessage("Hi, I'm bot", "bot")
    }, 1500)
  }, [chatId, messages, sendMessage])

  const state = useMemo(() => {
    return {
      conversation,
      messages: messages || [],
      value: conversation?.find((elem) => elem.id === chatId).value,
    }
  }, [chatId, conversation, messages])

  const actions = useMemo(() => {
    return {
      updateValue,
      sendMessage,
      sendMessageKey,
    }
  }, [updateValue, sendMessage, sendMessageKey])

  return children([state, actions])
}
