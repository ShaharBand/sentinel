import { DeviceDetailPage } from "../../views/DeviceDetailPage";
import { DevicesPage } from "../../views/DevicesPage";
import { LoginPage } from "../../views/LoginPage/LoginPage";

export const PAGES = {
  home: {
    path: "/",
    element: <DevicesPage />,
  },
  devices: {
    path: "devices/",
    element: <DevicesPage />,
  },
  agents: {
    path: "agents/",
    element: <DevicesPage />,
  },
  actions: {
    path: "actions/",
    element: <DevicesPage />,
  },
  settings: {
    path: "settings/",
    element: <DevicesPage />,
  },
  deviceDetail: {
    path: "devices/:id",
    element: <DeviceDetailPage />,
  },
  login: {
    path: "login/",
    element: <LoginPage />,
  },
};
