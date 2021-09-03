import { conversationsReducer, updateValue, deleteConversation, createNewConversationSuccess } from "../../conversations"
import {
  LOADING_DATA_ERROR,
  LOADING_DATA_START,
  LOADING_DATA_SUCCESS,
    LOADING_NEW_CONVERSATION_START,
    LOADING_NEW_CONVERSATION_ERROR,
} from "../../conversations/types"

describe("test conversation reducer", () => {
  it("should loading data start", () => {
    const state = conversationsReducer(
      {
        conversations: [],
        isPendingData: false,
        errorData: "",
      },
      { type: LOADING_DATA_START },
    )

    expect(state.isPendingData).toBe(true)
  })

  it("should loading data success", () => {
    const state = conversationsReducer(
      {
        conversations: [],
        isPendingData: true,
        errorData: "",
      },
      { type: LOADING_DATA_SUCCESS, payload: [1, 2, 3] },
    )

    expect(state.conversations).toEqual([1, 2, 3])
    expect(state.isPendingData).toBe(false)
    expect(state.errorData).toBe(null)
  })

  it("should loading data error", () => {
    const state = conversationsReducer(
      {
        conversations: [],
        isPendingData: true,
        errorData: "",
      },
      { type: LOADING_DATA_ERROR, payload: "error" },
    )

    expect(state.conversations).toEqual([])
    expect(state.isPendingData).toBe(false)
    expect(state.errorData).toBe("error")
  })

  it("should update value", () => {
    const state = conversationsReducer(
      {
        conversations: [{ id: "chat1", value: '' }, { id: "chat2", value: 'test' }],
      },
      updateValue("qwerty", "chat1"),
    )

    expect(state.conversations[0]["value"]).toBe("qwerty")
    expect(state.conversations[1]["value"]).toBe("test")
  })

    it("should delete conversation", () => {
        const state = conversationsReducer(
            {
                conversations: [{ id: "chat1", value: '' }, { id: "chat2", value: 'test' }],
            },
            deleteConversation( "chat1"),
        )

        expect(state.conversations.map(e => e.id)).toEqual(['chat2'])
    })

    it("should loading new conversation start", () => {
        const state = conversationsReducer(
            {
                conversations: [],
                isPendingNewConversation: false
            },
            { type: LOADING_NEW_CONVERSATION_START },
        )

        expect(state.isPendingNewConversation).toBe(true)
    })

    it("should create new conversation success", () => {
        const state = conversationsReducer(
            {
                conversations: [],
                isPendingNewConversation: true
            },
            createNewConversationSuccess('chat1', 'test'),
        )

        expect(state.conversations[0]).toEqual({id: 'chat1', title: 'test', value: ''})
        expect(state.isPendingNewConversation).toBe(false)
    })

    it("should loading new conversation error", () => {
        const state = conversationsReducer(
            {
                conversations: [],
                isPendingNewConversation: true,
                errorNewConversation: "",
            },
            { type: LOADING_NEW_CONVERSATION_ERROR, payload: "error" },
        )

        expect(state.conversations).toEqual([])
        expect(state.isPendingNewConversation).toBe(false)
        expect(state.errorNewConversation).toBe("error")
    })
})
