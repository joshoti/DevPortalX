import { IconLogin2 } from "@tabler/icons-react";
import { Group, Box, Text, Button, Container } from "@mantine/core";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <Box className={classes.container}>
      <Container maw={"100%"} ml={20} mr={20} h={70}>
        <Group className={classes.header}>
          <Group>
            <Text className={`${classes.title}`}>DevPortalX</Text>
          </Group>

          <Group className={`${classes.headerRight}`}>
            <Text className={`${classes.text}`}>Docs</Text>
            <Text className={`${classes.text}`}>Support</Text>
            <Button
              radius={"md"}
              variant="gradient"
              gradient={{ from: "indigo", to: "violet", deg: 90 }}
              leftSection={<IconLogin2 size={20} />}
            >
              <Text className={`${classes.text}`}>Get Started</Text>
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
