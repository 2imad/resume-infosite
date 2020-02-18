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
    iconLeft: <Link style={{ fontSize: 90, color: "#ffe600" }} />,
    textLeft:
      "Capable of uniquely linking to a user & storing credentials with required entries",
      iconRight: <Share style={{ fontSize: 90, color: "#ffe600" }} />,
      textRight: "Can create a complete database of all credentials"
  },
  {
    iconLeft: <Search style={{ fontSize: 90, color: "#ffe600" }} />,
    textLeft: "Ready to be implemented with a search function",
    iconRight: <SupervisorAccount style={{ fontSize: 90, color: "#ffe600" }} />,
    textRight:"Fastens the search for the best candidate for the job (e.g. for proposals)"
  },
  
  {
    iconLeft: <Description style={{ fontSize: 90, color: "#ffe600" }} />,
    textLeft: "Capable of correctly formatting a resume based on stored credentials",
    iconRight: <Timer style={{ fontSize: 90, color: "#ffe600" }} />,
    textRight: "Saves time for consultants, executives and the BD team"
  },
  {
    iconLeft: <Airplay style={{ fontSize: 90, color: "#ffe600" }} />,
    textLeft: "Running on the same technology as MyEY",
    iconRight: <CloudQueue style={{ fontSize: 90, color: "#ffe600" }} />,
    textRight:"Is easily embeddable in a centralized location, allowing for FSO access"
    }
];
