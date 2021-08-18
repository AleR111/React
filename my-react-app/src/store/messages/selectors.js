export const getMessage = (state, chatId) =>
  state.messagesStore.messages[chatId]
