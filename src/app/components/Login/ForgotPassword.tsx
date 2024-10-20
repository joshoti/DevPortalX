import {
  Button,
  Checkbox,
  Group,
  TextInput,
  Text,
  Flex,
  ThemeIcon,
  PinInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Login.module.css";
import { IconAt, IconAlertTriangle } from "@tabler/icons-react";
import { useState } from "react";
import { api } from "../../api/axios-api";

export function ForgotPassword() {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [displayPinInput, setDisplayPinInput] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      phone: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  type ResetPasswordT = {
    email: string;
    phone: string;
  };
  const handleSubmit = (form: ResetPasswordT) => {
    api
      .post("/api/users/reset-password", {
        email: form.email,
      })
      .then(({ data }) => {
        console.log(data);
        setDisplayPinInput(true);
      })
      .catch((error) => {
        const message =
          error.response?.data.message || "Unable to generate a pin.";

        setAlertMessage(message);
        setDisplayAlert(true);
      });
  };

  const pinForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      pin: "",
    },
  });
  type PinT = {
    email: string;
    pin: string;
  };
  const handleSubmitPin = (form: PinT) => {
    api
      .post("/api/users/check-otp", {
        email: form.email,
        pin: form.pin,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        const message =
          error.response?.data.message || "Unable to confirm OTP.";

        setAlertMessage(message);
        setDisplayAlert(true);
      });
  };

  const textInputStyle = { width: 400 };
  const inputFieldIconStyle = { size: 18, stroke: 1.5 };

  return (
    <Flex align={"center"} justify={"center"} h={"100%"} flex={1}>
      <Flex direction="column">
        <Text mb={30} c={"dimmed"} className={classes.subtitle}>
          Send OTP to email
        </Text>
        {/* Forgot Password form */}
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            leftSection={
              <IconAt
                stroke={inputFieldIconStyle.stroke}
                size={inputFieldIconStyle.size}
              />
            }
            style={textInputStyle}
            withAsterisk
            mb={15}
            size="md"
            label="Email"
            placeholder="your@email.com"
            key={form.key("Email")}
            {...form.getInputProps("email")}
          />
          <Checkbox
            onChange={() => setDisableSubmit(!disableSubmit)}
            label="I promise I'm not a hacker"
          />

          <Group mt={3} gap={0}>
            <ThemeIcon
              className={`${classes.errorMessage} ${classes.caution}`}
              style={{
                display: displayAlert ? "flex" : "none",
              }}
            >
              <IconAlertTriangle size={20} />
            </ThemeIcon>
            <Text
              style={{
                display: displayAlert ? "block" : "none",
              }}
              className={classes.errorMessage}
              children={alertMessage}
            ></Text>
          </Group>

          <Group mt="lg" mb="md">
            <Button
              disabled={disableSubmit}
              fullWidth
              color="#5345c8"
              type="submit"
            >
              Send Email
            </Button>
          </Group>
        </form>

        {/* OTP input */}
        <form onSubmit={pinForm.onSubmit((values) => handleSubmitPin(values))}>
          <PinInput />

          <Group mt={3} gap={0}>
            <ThemeIcon
              className={`${classes.errorMessage} ${classes.caution}`}
              style={{
                display: displayAlert ? "flex" : "none",
              }}
            >
              <IconAlertTriangle size={20} />
            </ThemeIcon>
            <Text
              style={{
                display: displayAlert ? "block" : "none",
              }}
              className={classes.errorMessage}
              children={alertMessage}
            ></Text>
          </Group>
        </form>
      </Flex>
    </Flex>
  );
}
