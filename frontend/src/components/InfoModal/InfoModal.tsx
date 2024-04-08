import {
  Box,
  Card,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { getClasses } from "./style";
import { InfoModalProps } from "./types";

const InfoModal: React.FC<InfoModalProps> = ({ content }) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <InfoIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={classes.modalCard}>
          <Typography id="modal-modal-title" variant="h6">
            Operating System Info
          </Typography>
          <Typography id="modal-modal-description">
            <pre>{content}</pre>
          </Typography>
        </Card>
      </Modal>
    </Box>
  );
};

export default InfoModal;
