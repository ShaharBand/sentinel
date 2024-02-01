import DeviceCard from "../../components/DeviceCard/DeviceCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const DevicesPage = () => {
  return (
    <div className="page-container">
      <NavigationBar />
      <div className="content-container">
        <div className="content">
          <h2>Overview</h2>
          <DeviceCard
            name="Device Name"
            tags={["tag1", "tag2", "tag3"]}
            agents={["agent1", "agent2", "agent3"]}
            address="88.88.88.88"
          />
        </div>
      </div>
    </div>
  );
};

export default DevicesPage;
