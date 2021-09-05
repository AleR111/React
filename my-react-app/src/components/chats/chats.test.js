import userEvent from "@testing-library/user-event"
import {renderWithRedux} from "../../utils"
import { Chats } from "./chats"

let state = null

beforeEach(() => {
  state = {
    conversationsStore:{conversations: [{ id: "chat1", title: "Test Title", value: "" }]},
  }
})

describe("test chats component", () => {
  it("should render with conversation", () => {
    const { container } = renderWithRedux(<Chats />, {
        initialState: state,
    })

      const node = container.querySelector('.MuiListItemText-root')
      expect(node).toHaveTextContent("Test Title")
  })

  it("should render with isPendingData props", () => {

    state = state = {
      conversationsStore:{isPendingData: true},
    }
    const { container } = renderWithRedux(<Chats />, {
      initialState: state,
    })

    const node = container.querySelector("svg")
    expect(node).toHaveClass("MuiCircularProgress-svg")
  })

  it("should render with error props", () => {
    state = state = {
      conversationsStore:{errorData: 'error'},
    }
    const { container } = renderWithRedux(<Chats />, {
      initialState: state,
    })

    const node = container.querySelector(".error")
    expect(node).toHaveTextContent("error")
  })

  it("should render chat with handleListItemClick prop", () => {
    // const handleListItemClick = jest.fn()

    const { getByRole } = renderWithRedux(
        <Chats />,
        {
          initialState: state,
        },
    )

    userEvent.selectOptions(getByRole("button"))

    // expect(getByRole("button")).toHaveClass("Mui-selected")
  })
})
