import React from "react";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { createAndRedirectToNewHub } from "../../utils/phoenix-utils";
import { Button } from "../input/Button";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import { AuthContext } from "../auth/AuthContext";
export function CreateEventButton() {
  const breakpoint = useCssBreakpoints();
  const auth = useContext(AuthContext);

  const email = auth.email;
  const user = email.split("@");
  const roomName = user[0] + "'s room " + Date.now();

  return (
    <Button
      thick={breakpoint === "sm" || breakpoint === "md"}
      xl={breakpoint !== "sm" && breakpoint !== "md"}
      preset="landing"
      onClick={e => {
        e.preventDefault();
        createAndRedirectToNewHub(roomName, "Qs9ds1y", false);
      }}
    >
      <FormattedMessage id="create-event-button" defaultMessage="Create Event" />
    </Button>
  );
}
