import { Group, Box, Text, Container } from "@mantine/core";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { AccountState } from "./AccountState";

export const Header = () => {
  return (
    <Box className={classes.container}>
      <Container maw={"100%"} ml={20} mr={20} h={75}>
        <Group className={classes.header}>
          <Group>
            <Link className={classes.title} to="/">
              <Text className={`${classes.title}`}>DevPortalX</Text>
            </Link>
          </Group>

          <Group className={`${classes.headerRight}`}>
            <Text className={`${classes.text}`}>Docs</Text>
            <Text className={`${classes.text}`}>Support</Text>
            <AccountState />
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
