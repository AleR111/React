import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { render } from "@testing-library/react"
import { Messages } from "./Messages"

const themes = {
  dark: createTheme({
    font: {
      color: "rgba(255,255,255,0.89)",
    },
    background: {
      color: "#19181f",
    },
    fontColor: {
      color: "rgba(255,255,255,0.89)",
    },
    header: {
      backgroundColor: "#212227",
    },
    burger: {
      color: "#fff",
    },
    chats: {
      backgroundColor: "#242a37",
    },
    messagesList: {
      backgroundColor: "#19181f",
      border: "4px solid #09141f",
    },
    messagesInput: {
      backgroundColor: "#353f4b",
    },
    userMessage: {
      backgroundColor: "#2b5278",
    },
    companionMessage: {
      backgroundColor: "#353f4b",
    },
  }),

  light: createTheme({
    font: {
      color: "rgba(0,0,0,0.89)",
    },
    background: {
      color: "#ffffff",
    },
    header: {
      backgroundColor: "#edf4f6",
    },
    burger: {
      color: "#000",
    },
    chats: {
      backgroundColor: "#d7dad9",
    },
    messagesList: {
      backgroundColor: "#badde5",
      border: "4px solid #357b58e3",
    },
    messagesInput: {
      backgroundColor: "#f2f8fc",
    },
    userMessage: {
      backgroundColor: "#76ada2",
    },
    companionMessage: {
      backgroundColor: "#7f8db2",
    },
  }),
}

describe("tests messages component", () => {
  it("should render with error props", () => {
    const { container } = render(
      <ThemeProvider theme={themes.dark}>
        <Messages error={{ data: "error" }} />
      </ThemeProvider>,
    )

    const node = container.querySelector(".error")
    expect(node).toHaveTextContent("error")
    console.log(node)
  })
  it("should render with isPending props", () => {
    const { container } = render(
      <ThemeProvider theme={themes.dark}>
        <Messages
          message={[{ author: "user", message: "test" }]}
          error={{ data: "" }}
          isPending={{ data: false }}
        />
      </ThemeProvider>,
    )

      const nodes = [...container.querySelectorAll(".messages")]
    console.log(nodes)
  })
})
