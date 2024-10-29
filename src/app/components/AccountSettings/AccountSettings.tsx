import {
  Group,
  Text,
  Flex,
  ThemeIcon,
  Title,
  Paper,
  Divider,
  Switch,
} from "@mantine/core";
import classes from "./AccountSettings.module.css";
import { IconSend, IconLogin } from "@tabler/icons-react";
import { api, fetchCsrfToken } from "../../api/axios-api";
import { useState } from "react";
import { AlertMessage } from "../Notification/AlertMessage";
import { scrollToElement } from "../../utils/scoll";

export function AccountSettingsForm() {
  const [settingValue, setSettingValue] = useState<SettingT>();
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const paperStyle = { radius: 20 };
  const tocIconSize = 20;

  const defaultErrorMessage = "Unable to make changes.";

  const dividerStyle = { marginTop: 15, marginBottom: 30 };
  type SettingT = {
    field: string;
    value: boolean;
  };

  const handleSubmit = async (setting: SettingT) => {
    const csrfToken = await fetchCsrfToken();

    api
      .post("/api/settings", setting, {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      })
      .then(() => {
        setSettingValue(setting);
      })
      .catch((error) => {
        const message =
          error.response?.data.message || "Unable to make changes.";

        setAlertMessage(message);
        setDisplayAlert(true);
      });
  };

  return (
    <Flex bg={"whitesmoke"} direction="column" align="center">
      <Title mt={30} className={classes.title}>
        Settings
      </Title>
      <Text mb={30} fz={22}>
        Configure your account
      </Text>
      <Flex w="100%" gap={20} className={classes.settingLayoutContainer}>
        {/* Table Of Content */}
        <Flex flex={0.5} direction="column">
          <Paper
            radius={paperStyle.radius}
            className={classes.singlePaperContainer}
          >
            <Text className={classes.settingTitle}>Settings</Text>

            {/* Menu Item 1 */}
            {/* Cursor: pointer not working */}
            {/* Different message States for the different alert components */}
            <Group
              onClick={() => scrollToElement("notification")}
              mt={3}
              gap={0}
            >
              <ThemeIcon className={classes.iconStyle}>
                <IconSend size={tocIconSize} />
              </ThemeIcon>
              <Text className={classes.tocText}>Notifications</Text>
            </Group>

            {/* Menu Item 2 */}
            <Group onClick={() => scrollToElement("account")} mt={3} gap={0}>
              <ThemeIcon className={classes.iconStyle}>
                <IconLogin size={tocIconSize} />
              </ThemeIcon>
              <Text className={classes.tocText}>Account</Text>
            </Group>
          </Paper>
        </Flex>

        {/* Settings Window */}
        <Flex flex={1} direction="column">
          <Paper
            radius={paperStyle.radius}
            className={classes.singlePaperContainer}
          >
            {/* Setting 1 */}
            <Text id="notification" className={classes.settingTitle}>
              Notifications
            </Text>
            <Text className={classes.settingSubtitle}>
              Allow email notifications
            </Text>
            <Flex justify={"space-between"}>
              <Text className={classes.settingDescription}>
                Turn on email notifications to stay up-to-date on our latest
                news and products.
              </Text>
              <Switch checked={false} size="md" />
            </Flex>
            <AlertMessage
              displayComponent={displayAlert}
              defaultMessage={alertMessage ? alertMessage : defaultErrorMessage}
            />
            <Divider style={dividerStyle} />

            {/* Setting 2 */}
            <Text id="account" className={classes.settingTitle}>
              Account
            </Text>
            <Text className={classes.settingSubtitle}>Deactivate account</Text>
            <Flex justify={"space-between"}>
              <Text className={classes.settingDescription}>
                Your account and apps will be offline. You may activate account
                at anytime.
              </Text>
              <Switch checked={false} size="md" />
            </Flex>

            <AlertMessage
              displayComponent={displayAlert}
              defaultMessage={alertMessage ? alertMessage : defaultErrorMessage}
            />
            <Divider style={dividerStyle} />
          </Paper>
        </Flex>
      </Flex>
    </Flex>
  );
}
