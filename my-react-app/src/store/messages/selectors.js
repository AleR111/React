export const getMessage = (state, chatId) => {
  return {
    message: state.messagesStore.messages[chatId] || [],
    isPendingData: state.messagesStore.isPendingData,
    isPendingSendMessage: state.messagesStore.isPendingSendMessage,
    errorData: state.messagesStore.errorData,
    errorSendMessage: state.messagesStore.errorSendMessage,
  }
}
