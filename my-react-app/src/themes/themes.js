import {createTheme} from "@material-ui/core/styles";

export const themes = {
    dark: createTheme({
        font: {
            color: "rgba(255,255,255,0.89)",
        },
        background: {
            color: "#19181f",
        },
        fontColor: {
            color: "rgba(255,255,255,0.89)",
        },
        header: {
            backgroundColor: "#212227",
        },
        drawer: {
            backgroundColor: "rgb(45,48,51)",
        },
        burger: {
            color: "#fff",
        },
        chats: {
            backgroundColor: "#242a37",
        },
        messagesList: {
            backgroundColor: "#19181f",
            border: "4px solid #09141f",
        },
        messagesInput: {
            backgroundColor: "#353f4b",
        },
        userMessage: {
            backgroundColor: "#2b5278",
        },
        companionMessage: {
            backgroundColor: "#353f4b",
        },
    }),

    light: createTheme({
        font: {
            color: "rgba(0,0,0,0.89)",
        },
        background: {
            color: "#ffffff",
        },
        header: {
            backgroundColor: "#edf4f6",
        },
        drawer: {
            backgroundColor: "#edf4f6",
        },
        burger: {
            color: "#000",
        },
        chats: {
            backgroundColor: "#d7dad9",
        },
        messagesList: {
            backgroundColor: "rgba(157,190,186,0.47)",
            border: "4px solid #357b5821",
        },
        messagesInput: {
            backgroundColor: "#f2f8fc",
        },
        userMessage: {
            backgroundColor: "#76ada2",
        },
        companionMessage: {
            backgroundColor: "#7f8db2",
        },
    }),
}