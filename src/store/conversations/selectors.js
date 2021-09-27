export const getConversations = (state) =>
  state.conversationsStore

export const getCurrentConversations = (state, chatId) =>
  state.conversationsStore.conversations.find((elem) => elem.id === chatId)

export const getValue = (state, chatId) =>
  state.conversationsStore.conversations.find((elem) => elem.id === chatId)
    ?.value || ""
