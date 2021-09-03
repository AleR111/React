import { renderWithRedux } from "../../utils"
import { MessagesContainer } from "./MessagesContainer"

let state = null

beforeEach(() => {
  state = {
    messages: {
      messages: { chat1: [{ author: "user", message: "test" }] },
    },
  }
})

describe("messages container", () => {
  it("should render container", () => {
    const container = MessagesContainer
      console.log(container)
  })
})
