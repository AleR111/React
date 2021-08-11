import { useMemo, useState } from "react"
import { useParams } from "react-router-dom"

export const MessageProvider = ({ children }) => {
  const { chatId } = useParams()

  const [conversation] = useState([
    { id: 'chat123', title: "Keeley Lon", value: "" },
    { id: 'chat241', title: "Angelle Jonty", value: "" },
    { id: 'chat426', title: "Myra Justy", value: "" },
  ])

  const [messages] = useState({
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
      conversation,
      messages: messages[chatId] || [],
    }
  }, [chatId, conversation, messages])

  return children([state])
}
