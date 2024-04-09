import { Card, Stack, Box, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import InfoModal from "../../InfoModal/InfoModal";
import CustomGauge from "./CustomGauge";

const DevicePerformanceCard = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Card className={classes.cardBox}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6">Performance</Typography>
        <Box className={classes.modalBtn}>
          <InfoModal
            title="Hardware Info"
            tooltip="Hardware Info"
            content="Intel I3 GPU... etc"
          />
        </Box>
      </Stack>

      <Box className={classes.contentBox}>
        <Stack direction="row">
          <Box className={classes.gaugeBox}>
            <CustomGauge value={75} />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              CPU
            </Typography>
          </Box>

          <Box className={classes.gaugeBox}>
            <CustomGauge value={25} />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              Memory
            </Typography>
          </Box>

          <Box className={classes.gaugeBox}>
            <CustomGauge value={47} />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              Disk
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box className={classes.gaugeBox}>
            <CustomGauge value={57} />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              Enthernet
            </Typography>
          </Box>
          <Box className={classes.gaugeBox}>
            <CustomGauge value={22} />
            <Typography variant="subtitle2" className={classes.gaugeSubtitle}>
              GPU
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default DevicePerformanceCard;
