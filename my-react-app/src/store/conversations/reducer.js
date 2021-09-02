import {
  UPDATE_VALUE,
  DELETE_CONVERSATION,
  CREATE_NEW_CONVERSATION,
  LOADING_DATA_SUCCESS,
  LOADING_DATA_START,
  LOADING_DATA_ERROR,
  LOADING_NEW_CONVERSATION_START,
  LOADING_NEW_CONVERSATION_ERROR,
} from "./types"

const initialState = {
  conversations: [],
  isPendingData: false,
  isPendingNewConversation: false,
  errorData: "",
  errorNewConversation: "",
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA_START:
      return {
        ...state,
        isPendingData: true,
      }
    case LOADING_DATA_SUCCESS:
      return {
        ...state,
        isPendingData: false,
        errorData: null,
        conversations: [...action.payload],
      }
    case LOADING_DATA_ERROR:
      return {
        ...state,
        isPendingData: false,
        errorData: action.payload ,
      }
    case UPDATE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversations) => {
          if (conversations.id === action.payload.chatId)
            return {
              ...conversations,
              value: action.payload.value,
            }
          return conversations
        }),
      }
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (elem) => elem.id !== action.payload,
        ),
      }
    case LOADING_NEW_CONVERSATION_START:
      return {
        ...state,
        isPendingNewConversation: true,
      }
    case CREATE_NEW_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...state.conversations,
          { ...action.payload, value: "" },
        ],
        isPendingNewConversation: false,
      }
    case LOADING_NEW_CONVERSATION_ERROR:
      return {
        ...state,
        isPendingNewConversation: false,
        errorNewConversation: action.payload,
      }
    default:
      return state
  }
}
