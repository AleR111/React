import userEvent from "@testing-library/user-event"
import { renderWithThemeProvider } from "../../../utils/renderWithThemeProvider"
import { Messages } from "./Messages"

describe("tests messages component", () => {
  it("should render with error props", () => {
    const { container } = renderWithThemeProvider(
      <Messages error={{ data: "error" }} />,
    )

    const node = container.querySelector(".error")
    expect(node).toHaveTextContent("error")
  })

  it("should render with isPending data props", () => {
    const { container } = renderWithThemeProvider(
      <Messages isPending={{ data: true }} />,
    )

    const node = container.querySelector("svg")
    expect(node).toHaveClass("MuiCircularProgress-svg")
  })

  it("should render with message props", () => {
    const { container } = renderWithThemeProvider(
      <Messages
        message={[
          { author: "user", message: "test" },
          { author: "bot", message: "test bot" },
        ]}
        currentConversation={{ id: "chat1", title: "test", value: "" }}
      />,
    )

    const recipientNodes = [...container.querySelectorAll(".recipient")]
    expect(recipientNodes[0]).toHaveTextContent("test")

    const messagesListNodes = [...container.querySelectorAll(".messagesList")]
    expect(messagesListNodes[0]).toHaveTextContent("test")

    const messageBoxNodes = [...container.querySelectorAll(".messageBox")]

    expect(messageBoxNodes[0]).toHaveClass("makeStyles-userMessage-5")
    expect(messageBoxNodes[1]).not.toHaveClass("makeStyles-userMessage-5")
  })

  it("should render with input props", () => {
    const { container } = renderWithThemeProvider(
      <Messages value={"test value"} />,
    )

    const node = container.querySelector(".MuiInputBase-input")
    expect(node.value).toBe("test value")
  })

  it("should render send click props", () => {
    const handleSendMessage = jest.fn()
    const { getByRole } = renderWithThemeProvider(
      <Messages handleSendMessage={handleSendMessage} />,
    )

    userEvent.click(getByRole("button"))

    expect(handleSendMessage).toBeCalledTimes(1)
  })
})
