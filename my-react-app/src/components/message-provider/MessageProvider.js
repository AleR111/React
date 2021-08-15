import { useMemo, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const MessageProvider = ({ children }) => {
  const { chatId } = useParams()

  const [conversations, setConversation] = useState([
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

  const state = useMemo(() => {
    return {
      conversations,
      messages: messages || [],
      value: conversations.find((elem) => elem.id === chatId)?.value,
    }
  }, [chatId, conversations, messages])

  const actions = useMemo(() => {
    return {
      updateValue: (value) => {
        setConversation((state) =>
          state.map((elem) => {
            if (elem.id === chatId) {
              return { id: elem.id, title: elem.title, value }
            }
            return elem
          }),
        )
      },
      sendMessage: (message, author = "user") => {
        if (!message) return

        setMessages((state) => {
          return {
            ...state,
            [chatId]: [
              ...(state[chatId] || []),
              { author, message, date: new Date() },
            ],
          }
        })
        actions.updateValue("")
      },
      sendMessageKey: (code, message) => {
        if (code === "Enter" && message) {
          actions.sendMessage(message)
        }
      },
    }
  }, [chatId])

  useEffect(() => {
    if (!messages[chatId]) return

    const currentMessage = messages[chatId][messages[chatId].length - 1]

    if (!messages[chatId] || currentMessage.author === "bot") {
      return
    }

    setTimeout(() => {
      actions.sendMessage("Hi, I'm bot", "bot")
    }, 1500)
  }, [actions, chatId, messages])

  return children([state, actions])
}
