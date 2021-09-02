export const getMessage = (state, chatId) => {
  return {
    message: state.messagesStore.messages[chatId] || [],
    isPending: state.messagesStore.isPending,
    error: state.messagesStore.error,
  }
}
