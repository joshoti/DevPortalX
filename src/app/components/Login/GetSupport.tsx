import {
  Button,
  Group,
  TextInput,
  Text,
  Flex,
  ThemeIcon,
  Transition,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Login.module.css";
import { IconAt, IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { api } from "../../api/axios-api";

export function GetSupport() {
  const [displayForm, setDisplayForm] = useState(true);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) => (value ? null : "Required"),
      message: (value) => (value ? null : "Required"),
    },
  });

  const textInputStyle = { width: 400 };
  const inputFieldIconStyle = { size: 18, stroke: 1.5 };
  type SupportT = {
    email: string;
    subject: string;
    message: string;
  };

  const handleSubmit = (form: SupportT) => {
    api
      .post("/api/users/support-request", {
        email: form.email,
        subject: form.subject,
        message: form.message,
      })
      .then(({ data }) => {
        setDisplayForm(false);
        setDisplaySuccess(true);
      })
      .catch((error) => {
        const message =
          error.response?.data.message || "Unable to submit form.";

        setAlertMessage(message);
        setDisplayAlert(true);
      });
  };

  return (
    <Flex align={"center"} justify={"center"} h={"100%"} flex={1}>
      {/* Get Support Form */}
      <Flex
        style={{ display: displayForm ? "flex" : "none" }}
        direction="column"
      >
        <Text mb={30} c={"dimmed"} className={classes.subtitle}>
          Tell us about a problem you'd like to report or feedback you have
          about your experience.
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
          <TextInput
            style={textInputStyle}
            withAsterisk
            mb={15}
            size="md"
            label="Subject"
            placeholder="Subject"
            key={form.key("subject")}
            {...form.getInputProps("subject")}
          />
          <TextInput
            style={textInputStyle}
            withAsterisk
            size="md"
            label="How can we help?"
            placeholder="Message"
            key={form.key("message")}
            {...form.getInputProps("message")}
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
            <Button fullWidth color="#5345c8" type="submit">
              Submit Form
            </Button>
          </Group>
        </form>
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
                Request Submitted Successfully
              </Text>
            </Group>
          )}
        </Transition>
      </Group>
    </Flex>
  );
}
