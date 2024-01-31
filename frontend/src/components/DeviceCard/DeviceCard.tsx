import { DeviceCardProps } from "./types";
import "./style.css";

const DeviceCard: React.FC<DeviceCardProps> = ({
  name,
  tags,
  agents,
  address,
}) => (
  <div className="device-container">
    <p className="device-name">{name}</p>
    <div className="tag-list">
      {tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </div>
    <div className="agent-list">
      {agents.map((agent, index) => (
        <div key={index} className={agent}></div>
      ))}
    </div>
    <p className="device-address">{address}</p>
  </div>
);

export default DeviceCard;
