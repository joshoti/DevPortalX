import { Group, Text, ThemeIcon } from "@mantine/core";
import classes from "./AlertMessage.module.css";
import { IconAlertTriangle } from "@tabler/icons-react";

type MessageT = {
  displayComponent: boolean;
  defaultMessage: string;
};
export const AlertMessage: React.FC<MessageT> = ({
  displayComponent,
  defaultMessage,
}) => {
  return (
    <Group display={displayComponent ? "flex" : "none"} mt={3} gap={0}>
      <ThemeIcon
        className={`${classes.errorMessage} ${classes.caution}`}
        style={{
          display: "flex",
        }}
      >
        <IconAlertTriangle size={20} />
      </ThemeIcon>
      <Text
        style={{
          display: "block",
        }}
        className={classes.errorMessage}
      >
        {defaultMessage}
      </Text>
    </Group>
  );
};
