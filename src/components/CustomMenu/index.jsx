import Box from "@mui/material/Box"

const Backdrop = ({ onClose, show }) => {
  if (!show) return
  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        zIndex: "1000",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    />
  )
}

const CustomMenu = ({ onClose, show, children }) => {
  return (
    <>
      <Backdrop show={show} onClose={onClose} />
      {children}
    </>
  )
}

export default CustomMenu
