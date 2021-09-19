import { useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { firebaseApp } from "../../api/firebase"
import { closeNewChatModal, openNewChatModal } from "../../store/newChatModal"
import { switcher } from "../../store/themeSwitcher"
import { Header } from "./header"
import { NewChatModal } from "./newChatModal"

export const HeaderContainer = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const selectorTheme = useMemo(
    () => (state) => {
      return state.themeSwitcher.theme
    },
    [],
  )

  const themeApp = useSelector(selectorTheme)
  const dispatch = useDispatch()

  const onSwitcher = () => {
    dispatch(switcher())
  }

  const openModal = useSelector((state) => state.newChatModal.isOpenedModal)

  const handleOpenModal = () => {
    dispatch(openNewChatModal())
  }

  const handleCloseModal = () => {
    dispatch(closeNewChatModal())
  }
  const { data } = useSelector((store) => store.authStore)
  const signOut = () => firebaseApp.auth().signOut()

  return (
    <>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleOpenModal={handleOpenModal}
        themeApp={themeApp}
        onSwitcher={onSwitcher}
        open={open}
        auth={data}
        signOut={signOut}
      />
      <NewChatModal handleCloseModal={handleCloseModal} openModal={openModal} />
    </>
  )
}
