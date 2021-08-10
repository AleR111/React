import { Chats, Header, Layout, Messages } from "../components"

export const Chat = () => {
  return (
    <Layout Header={<Header />} Chats={<Chats />} Messages={<Messages />} />
  )
}
