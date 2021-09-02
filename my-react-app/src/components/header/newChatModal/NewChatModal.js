import {
  Modal,
  Fade,
  Backdrop,
  TextField,
  ButtonGroup,
  Button,
  CircularProgress,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createNewConversationInDB } from "../../../store/conversations"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export const NewChatModal = ({ handleCloseModal, openModal }) => {
  const classes = useStyles()

  const [value, setValue] = useState("")

  const dispatch = useDispatch()

  const isPending = useSelector(
    (state) => state.conversationsStore.isPendingNewConversation,
  )
  const error = useSelector(
    (state) => state.conversationsStore.errorNewConversation,
  )

  const createNewChat = () => {
    console.log(value)
    dispatch(createNewConversationInDB(value))
    handleCloseModal()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            {error ? (
              <h2>{error}</h2>
            ) : isPending ? (
              <CircularProgress />
            ) : (
              <>
                <div>
                  <TextField
                    id="standard-search"
                    label="Chat Name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus={true}
                  />
                </div>
                <ButtonGroup
                  orientation="horizontal"
                  color="primary"
                  aria-label="vertical contained primary button group"
                  variant="text"
                  fullWidth={true}
                >
                  <Button onClick={handleCloseModal}>Cancel</Button>
                  <Button onClick={createNewChat}>Create</Button>
                </ButtonGroup>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
