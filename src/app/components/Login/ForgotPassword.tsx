import {
  Button,
  Checkbox,
  Group,
  TextInput,
  Text,
  Flex,
  ThemeIcon,
  PinInput,
  Transition,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Login.module.css";
import { IconAt, IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { api } from "../../api/axios-api";

export function ForgotPassword() {
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [displayForm, setDisplayForm] = useState(true);
  const [displayPinInput, setDisplayPinInput] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  type ResetPasswordT = {
    email: string;
  };
  const handleSubmit = (form: ResetPasswordT) => {
    api
      .post("/api/users/reset-password", {
        email: form.email,
      })
      .then(({ data }) => {
        setDisplayForm(false);
        setDisplayPinInput(true);
        setUserEmail(form.email);
      })
      .catch((error) => {
        const message =
          error.response?.data.message || "Unable to generate a pin.";

        setAlertMessage(message);
        setDisplayAlert(true);
      });
  };

  const handleSubmitPin = (form: string) => {
    api
      .post("/api/users/check-otp", {
        email: userEmail,
        pin: form,
      })
      .then(({ data }) => {
        console.log(data);
        setDisplayPinInput(false);
        setDisplaySuccess(true);
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
      {/* Forgot Password Form */}
      <Flex
        style={{ display: displayForm ? "flex" : "none" }}
        direction="column"
      >
        <Text mb={30} c={"dimmed"} className={classes.subtitle}>
          Send OTP to email
        </Text>
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
      </Flex>

      {/* OTP input */}
      <Flex
        style={{ display: displayPinInput ? "flex" : "none" }}
        direction="column"
      >
        <Transition
          mounted={displayPinInput}
          transition={"fade-right"}
          duration={200}
          timingFunction="ease"
          keepMounted
        >
          {(transitionStyle) => (
            <form style={transitionStyle}>
              <Text mb={10} c={"dimmed"} className={classes.subtitle}>
                Enter OTP
              </Text>
              <PinInput
                onComplete={(values) => handleSubmitPin(values)}
                autoFocus
                mask
                oneTimeCode
                error={displayAlert}
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
            </form>
          )}
        </Transition>
      </Flex>

      {/* Reset Password Successful */}
      <Group style={{ display: displaySuccess ? "block" : "none" }}>
        <Transition
          mounted={displaySuccess}
          transition={"fade-right"}
          duration={200}
          timingFunction="ease"
          keepMounted
        >
          {(transitionStyle) => (
            <Group style={transitionStyle} mt={1} mb={5} gap={0}>
              <ThemeIcon
                className={classes.successMessage}
                style={{
                  display: displaySuccess ? "flex" : "none",
                }}
              >
                <IconCheck strokeWidth={2.5} size={20} />
              </ThemeIcon>
              <Text
                style={{
                  display: displaySuccess ? "block" : "none",
                }}
                className={classes.successMessage}
              >
                Password Reset Successfully
              </Text>
            </Group>
          )}
        </Transition>
      </Group>
    </Flex>
  );
}
