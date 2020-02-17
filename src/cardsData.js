import React from "react";
import {
  Link,
  Share,
  Search,
  SupervisorAccount,
  Description,
  Timer,
  Airplay,
  CloudQueue
} from "@material-ui/icons";
export const CardsData = [
  {
    icon: <Link style={{ fontSize: 90, color: "#ffe600" }} />,
    text:
      "Capable of uniquely linking to a user & storing credentials with required entries"
  },
  {
    icon: <Share style={{ fontSize: 90, color: "#ffe600" }} />,
    text: "Can create a complete database of all credentials"
  },
  {
    icon: <Search style={{ fontSize: 90, color: "#ffe600" }} />,
    text: "Ready implemented with a search function"
  },
  {
    icon: <SupervisorAccount style={{ fontSize: 90, color: "#ffe600" }} />,
    text:
      "Fastens the search for the best candidate for the job (e.g. for proposals)"
  },
  {
    icon: <Description style={{ fontSize: 90, color: "#ffe600" }} />,
    text: "Capable of correctly formatting a resume based on stored credentials"
  },
  {
    icon: <Timer style={{ fontSize: 90, color: "#ffe600" }} />,
    text: "Saves time for consultants, executives and the BD team"
  },
  {
    icon: <Airplay style={{ fontSize: 90, color: "#ffe600" }} />,
    text: "Running on the same technology as MyEY"
  },
  {
    icon: <CloudQueue style={{ fontSize: 90, color: "#ffe600" }} />,
    text:
      "Is easily embeddable in a centrelazed location, allowing for FSO access"
  }
];
