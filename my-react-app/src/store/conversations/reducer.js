const initialState = {
  conversations: [
    { id: "chat123", title: "Keeley Lon", value: "" },
    { id: "chat241", title: "Angelle Jonty", value: "" },
    { id: "chat426", title: "Myra Justy", value: "" },
  ]
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
