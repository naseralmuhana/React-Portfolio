import Snackbar from "@mui/material/Snackbar"
import SnackbarContent from "@mui/material/SnackbarContent"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import { useTheme } from "@mui/material"

function TransitionLeft(props) {
  return <Slide {...props} direction="down" />
}

const CustomSnackbar = ({ message, onClose, open }) => {
  const theme = useTheme()
  const transition = TransitionLeft

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={6000}
      TransitionComponent={transition}
      draggable={true}
      onClose={onClose}
    >
      <SnackbarContent
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
        style={{
          backgroundColor: theme.primary,
          color: theme.secondary,
          fontFamily: "var(--primaryFont)",
        }}
        message={message}
      />
    </Snackbar>
  )
}

export default CustomSnackbar
