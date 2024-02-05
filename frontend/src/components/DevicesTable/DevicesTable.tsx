import { Typography } from "@mui/material";
import DeviceCard from "../DeviceCard/DeviceCard";

const DevicesTable = () => {
  return (
    <div className="table-container">
      <Typography variant="h4">Devices</Typography>
      <span>3,000 devices.</span>
      <span>filter icon</span>
      <span>export icon</span>

      <DeviceCard
        name="Device Name"
        tags={["tag1", "tag2", "tag3"]}
        agents={["agent1", "agent2", "agent3"]}
        address="88.88.88.88"
      />
    </div>
  );
};

export default DevicesTable;
