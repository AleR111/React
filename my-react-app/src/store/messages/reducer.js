const initialState = {
  messages: {
    chat123: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot", date: new Date() },
    ],
    chat241: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot, lol", date: new Date() },
    ],
    chat426: [
      { author: "user", message: "Hi", date: new Date() },
      { author: "bot", message: "Hi, i'm bot", date: new Date() },
    ],
  }
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
