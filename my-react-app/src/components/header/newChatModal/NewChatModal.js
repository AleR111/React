import {
  Modal,
  Fade,
  Backdrop,
  TextField,
  ButtonGroup,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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
              <div>
            <TextField
              id="standard-search"
              label="New Chat"
              value={"sdf"}
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
                  <Button>Cancel</Button>
                  <Button>Create</Button>
              </ButtonGroup>
          </div>

        </Fade>
      </Modal>
    </div>
  )
}
