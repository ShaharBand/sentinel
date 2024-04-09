import { Card, Stack, Box, Typography, useTheme } from "@mui/material";
import { getClasses } from "./style";
import windows from "../../../assets/images/os/windows.png";

import ios from "../../../assets/images/os/ios.png";
import linux from "../../../assets/images/os/linux.png";
import macos from "../../../assets/images/os/macos.png";
import android from "../../../assets/images/os/android.png";
import InfoModal from "../../InfoModal/InfoModal";

const DeviceOSCard = () => {
  const theme = useTheme();
  const classes = getClasses(theme);

  return (
    <Card className={classes.cardBox}>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6">Operating System</Typography>
        <Box className={classes.modalBtn}>
          <InfoModal
            title="System Info"
            tooltip="Last scan system info"
            content="Host Name:                 DESKTOP-123456
OS Name:                   Microsoft Windows 11 Pro
OS Version:                10.0.001 N/A Build 001
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Workstation
OS Build Type:             Multiprocessor Free
Registered Owner:          Shahar
Registered Organization:   N/A
Product ID:                12345-456789-456789
Original Install Date:     23/11/2023, 12:11:32
System Boot Time:          07/04/2024, 10:12:19
System Manufacturer:       HP
System Model:              HP ProDesk 100
System Type:               x64-based PC
Processor(s):              1 Processor(s) Installed.
                           [01]: Intel64 Family 6 Model 158 Stepping 11 GenuineIntel ~3096 Mhz
BIOS Version:              HP R22 Ver. 02.19.00, 25/09/2023
Windows Directory:         C:\WINDOWS
System Directory:          C:\WINDOWS\system32
Boot Device:               \Device\HarddiskVolume1
System Locale:             en-us;English (United States)
Input Locale:              en-us;English (United States)
Time Zone:                 (UTC+02:00) Jerusalem
Total Physical Memory:     7,966 MB
Available Physical Memory: 2,088 MB
Virtual Memory: Max Size:  10,142 MB
Virtual Memory: Available: 1,887 MB
Virtual Memory: In Use:    8,255 MB
Page File Location(s):     C:\pagefile.sys
Domain:                    WORKGROUP
Logon Server:              \\DESKTOP-123456
Hotfix(s):                 4 Hotfix(s) Installed.
                           [01]: KB5034467
                           [02]: KB5027397
                           [03]: KB5035853
                           [04]: KB5035967
Network Card(s):           1 NIC(s) Installed.
                           [01]: Intel(R) Ethernet Connection (7) I219-LM
                                 Connection Name: Ethernet
                                 DHCP Enabled:    Yes
                                 DHCP Server:     192.168.1.1
                                 IP address(es)
                                 [01]: 192.168.137.86
                                 [02]: 1::1:1:1:1
Hyper-V Requirements:      A hypervisor has been detected. Features required for Hyper-V will not be displayed."
          />
        </Box>
      </Stack>

      <Box className={classes.contentBox}>
        <img src={windows} className={classes.osImage} />
        <Typography>Microsoft Windows 11 Pro</Typography>
        <Typography variant="subtitle1">10.0.123456 N/A Build 12345</Typography>
      </Box>
    </Card>
  );
};

export default DeviceOSCard;
