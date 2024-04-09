import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableAndDeletableChips() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Group A" onClick={handleClick} onDelete={handleDelete} />
      <Chip label="Group B" onClick={handleClick} onDelete={handleDelete} />
      <Chip label="Group C" onClick={handleClick} onDelete={handleDelete} />
    </Stack>
  );
}
