import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Base", () => <Button onClick={action("button-clicked")}>Base</Button>)
  .add("Confirm", () => (
    <Button onClick={action("button-clicked")} confirm>
      Confirm
    </Button>
  ))
  .add("Danger", () => (
    <Button onClick={action("button-clicked")} danger>
      Cancel
    </Button>
  ))
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));
