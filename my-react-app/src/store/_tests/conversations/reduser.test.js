import { conversationsReducer } from "../../conversations"
import { LOADING_DATA_START } from "../../conversations/types"

describe("test conversation reducer", () => {
  it("should loading data start", () => {
    const state = conversationsReducer(
      {
        conversations: [],
        isPending: { data: false, newConversation: false },
        error: { data: "" },
      },
      { type: LOADING_DATA_START },
    )

      expect(state.isPending.data).toBe(true)
  })
})
