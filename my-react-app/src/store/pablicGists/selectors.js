export const getConversations = (state) =>
  state.conversationsStore.conversations

export const getCurrentConversations = (state, chatId) =>
  state.conversationsStore.conversations.find((elem) => elem.id === chatId)

export const getValue = (state, chatId) =>
  state.conversationsStore.conversations.find((elem) => elem.id === chatId)
    ?.value || ""
