import { IconLogin2 } from "@tabler/icons-react";
import { Group, Box, Text, Button, Container } from "@mantine/core";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box className={classes.container}>
      <Container maw={"100%"} ml={20} mr={20} h={75}>
        <Group className={classes.header}>
          <Group>
            <Text className={`${classes.title}`}>DevPortalX</Text>
          </Group>

          <Group className={`${classes.headerRight}`}>
            <Text className={`${classes.text}`}>Docs</Text>
            <Text className={`${classes.text}`}>Support</Text>
            <Link to="/register">
              <Button
                radius={"md"}
                variant="gradient"
                gradient={{ from: "indigo", to: "violet", deg: 90 }}
                leftSection={<IconLogin2 size={20} />}
              >
                <Text className={`${classes.getStarted}`}>Get Started</Text>
              </Button>
            </Link>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
