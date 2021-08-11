import { useCallback, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

export const MessageProvider = ({ children }) => {
  const { chatId } = useParams()

  const [conversation, setConversation] = useState([
    { id: "chat123", title: "Keeley Lon", value: "" },
    { id: "chat241", title: "Angelle Jonty", value: "" },
    { id: "chat426", title: "Myra Justy", value: "" },
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

  // const [value, setValue] = useState("")
  // console.log(value)

  // const sendMessage = () => {
  //   if (!value) return
  //   setMessage((state) => [...state, { content: value, author: "user" }])
  //   setValue("")
  // }
  // const sendMessageKey = ({ code }) => {
  //   if (code === "Enter" && value) {
  //     setMessage((state) => [...state, { content: value, author: "user" }])
  //     setValue("")
  //   }
  // }
  //
  // const sendMessage = (value) => {
  //   if (!value) return
  //   setMessages((state) => [...state[chatId], { author: "user", message: value, date: new Date() }])
  //   setValue("")
  // }

  const updateValue = useCallback(
    (value) => {
      setConversation((state) =>
      state.map((elem) => {
          if (elem.id === chatId) return  { id: elem.id, title: elem.title, value}
        return elem
        }),
      )
      // const qwe = conversation.find(elem => elem.id === chatId).value = value
      console.log(conversation)
    },
    [chatId, conversation],
  )
  console.log(conversation)
  const state = useMemo(() => {
    return {
      conversation,
      messages: messages[chatId] || [],
      value: conversation?.find((elem) => elem.id === chatId).value,
    }
  }, [chatId, conversation, messages])

  const actions = useMemo(() => {
    return {
      updateValue,
    }
  }, [updateValue])

  return children([state, actions])
}
