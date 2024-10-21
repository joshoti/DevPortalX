import { Button, Text } from "@mantine/core";
import { IconLogin2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export function GetStartedButton() {
  return (
    <Link to="/login">
      <Button
        radius={"md"}
        variant="gradient"
        gradient={{ from: "indigo", to: "violet", deg: 90 }}
        leftSection={<IconLogin2 size={20} />}
      >
        <Text className={classes.getStarted}>Get Started</Text>
      </Button>
    </Link>
  );
}
