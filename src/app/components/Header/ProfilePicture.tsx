import { Flex, Menu, Paper, rem, Text } from "@mantine/core";
import { useAuth } from "../../hooks/useAuth";
import classes from "./Header.module.css";
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

export function ProfilePicture() {
  const authContext = useAuth();
  const backgroundRadius = 40;
  const profilePictureContainerStyle = {
    height: backgroundRadius,
    width: backgroundRadius,
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Paper className={classes.profilePictureContainer} radius={40}>
          <Flex
            justify={"center"}
            align={"center"}
            style={profilePictureContainerStyle}
          >
            <Text
              className={classes.profilePictureText}
            >{`${authContext.auth?.firstName[0]}${authContext.auth?.lastName[0]}`}</Text>
          </Flex>
        </Paper>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSearch style={{ width: rem(14), height: rem(14) }} />
          }
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Account</Menu.Label>
        <Menu.Item
          leftSection={
            <IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Account Settings
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
