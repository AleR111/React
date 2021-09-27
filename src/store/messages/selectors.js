export const getMessage = (state, chatId) => {
  return {
    message: state.messagesStore.messages[chatId] || [],
    isPendingData: state.messagesStore.isPendingData,
    isPendingSendMessage: state.messagesStore.isPendingSendMessage,
    errorData: state.messagesStore.errorData,
    errorSendMessage: state.messagesStore.errorSendMessage,
  }
}

export const getLastMessageOfChat = (state, chat) => {
  const lastMessage = state.messagesStore.messages[chat]?.length - 1
  if (!lastMessage) return
  return state.messagesStore.messages[chat][lastMessage]
}