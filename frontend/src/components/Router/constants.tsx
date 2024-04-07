import { DeviceDetailPage } from "../../views/DeviceDetailPage";
import { DevicesPage } from "../../views/DevicesPage";

export const PAGES = {
  home: {
    path: "/",
    element: <DevicesPage />,
  },
  devices: {
    path: "devices/",
    element: <DevicesPage />,
  },
  deviceDetail: {
    path: "devices/:id",
    element: <DeviceDetailPage />,
  },
};
