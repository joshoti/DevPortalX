import { Flex, Menu, Paper, rem, Text } from "@mantine/core";
import { useAuth } from "../../hooks/useAuth";
import classes from "./Header.module.css";
import {
  IconAppWindow,
  IconLogout,
  IconNotification,
  IconSettings,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { api, fetchCsrfToken } from "../../api/axios-api";

export function ProfilePicture() {
  const backgroundRadius = 40;
  const profilePictureContainerStyle = {
    height: backgroundRadius,
    width: backgroundRadius,
  };
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const csrfToken = await fetchCsrfToken();

    api.post(
      "/api/users/logout",
      {},
      { headers: { "X-CSRF-TOKEN": csrfToken } }
    );
    authContext.setAuth(null);
    navigate("/", { replace: true });
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
            >{`${authContext.auth?.email[0].toUpperCase()}`}</Text>
          </Flex>
        </Paper>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconAppWindow style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Manage Apps
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconNotification style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Notifications
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Account</Menu.Label>
        <Menu.Item
          onClick={() => {
            navigate("/settings", { replace: true });
          }}
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Account Settings
        </Menu.Item>
        <Menu.Item
          onClick={handleLogout}
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
