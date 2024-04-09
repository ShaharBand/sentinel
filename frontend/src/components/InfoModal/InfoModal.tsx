import {
  Box,
  Card,
  IconButton,
  Modal,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { getClasses } from "./style";
import { InfoModalProps } from "./types";

const InfoModal: React.FC<InfoModalProps> = ({ title, content, tooltip }) => {
  const theme = useTheme();
  const classes = getClasses(theme);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Tooltip title={tooltip} arrow>
          <InfoIcon />
        </Tooltip>
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={classes.modalCard}>
          <Typography id="modal-modal-title" variant="h6">
            {title}
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
