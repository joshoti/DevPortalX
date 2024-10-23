import {
  Button,
  Group,
  TextInput,
  Text,
  Flex,
  ThemeIcon,
  Transition,
  Title,
  Textarea,
  Paper,
  FileButton,
  CloseButton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./Support.module.css";
import {
  IconAt,
  IconAlertTriangle,
  IconXboxX,
  IconSend,
} from "@tabler/icons-react";
import { useState } from "react";
import { api, fetchCsrfToken } from "../../api/axios-api";
import { Link } from "react-router-dom";

export function GetSupport() {
  const [fileAttached, setFileAttached] = useState(false);
  const [file, setFile] = useState<File | null>(null);
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
      attachment: null,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) => (value ? null : "Required"),
      message: (value) => (value ? null : "Required"),
    },
  });

  // const textInputStyle = { width: 400 };
  const paperStyle = { radius: 40 };
  const successIconSize = 70;
  const uploadButtonStyle = {
    borderColor: "#5345c8",
    backgroundColor: "white",
    color: "#5345c8",
  };
  const textInputRadius = "md";
  const inputFieldIconStyle = { size: 18, stroke: 1.5 };
  type SupportT = {
    email: string;
    subject: string;
    message: string;
    attachment: File | null;
  };

  const attachFile = (attachment: File | null) => {
    if (!attachment) return;
    setFile(attachment);
    setFileAttached(true);
  };

  const removeAttachment = () => {
    setFile(null);
    setFileAttached(false);
  };

  const handleSubmit = async (form: SupportT) => {
    form.attachment = file;
    const csrfToken = await fetchCsrfToken();

    api
      .post("/api/support", form, {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
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
    <Group align={"center"} justify={"center"} h={"100%"}>
      {/* Get Support Form */}
      <Flex direction="column" w={770}>
        <Title mt={30} className={classes.title}>
          Support
        </Title>
        <Text mb={30} className={classes.subtitle}>
          Tell us about a problem you'd like to report or feedback you have
          about your experience.
        </Text>
        <form
          style={{ display: displayForm ? "block" : "none" }}
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
          <Paper
            radius={paperStyle.radius}
            className={classes.singlePaperContainer}
          >
            <Text className={classes.singlePaperTitle}>
              Contact Information
            </Text>
            <TextInput
              leftSection={
                <IconAt
                  stroke={inputFieldIconStyle.stroke}
                  size={inputFieldIconStyle.size}
                />
              }
              withAsterisk
              mb={15}
              size="md"
              radius={textInputRadius}
              label="Email Address"
              placeholder="your@email.com"
              key={form.key("Email")}
              {...form.getInputProps("email")}
            />
          </Paper>

          <Paper
            radius={paperStyle.radius}
            className={classes.singlePaperContainer}
          >
            <Text className={classes.singlePaperTitle}>Feedback</Text>
            <TextInput
              withAsterisk
              mb={15}
              size="md"
              radius={textInputRadius}
              label="Subject"
              placeholder="Subject"
              key={form.key("subject")}
              {...form.getInputProps("subject")}
            />
            <Textarea
              withAsterisk
              mb={15}
              size="md"
              radius={textInputRadius}
              label="How can we help?"
              placeholder="Message"
              key={form.key("message")}
              {...form.getInputProps("message")}
            />
          </Paper>

          <Paper
            radius={paperStyle.radius}
            className={classes.singlePaperContainer}
          >
            <Text mb={5} className={classes.singlePaperTitle}>
              Attachments (optional)
            </Text>
            <Text className={classes.singlePaperDescription}>
              You can upload an image or a pdf document
            </Text>

            <Flex align={"center"}>
              <FileButton
                onChange={(value) => attachFile(value)}
                accept="image/*, .pdf"
              >
                {(props) => (
                  <Button
                    className={classes.button}
                    radius={textInputRadius}
                    style={uploadButtonStyle}
                    {...props}
                  >
                    <Text fz={15} fw={600} m={0} p={0}>
                      {fileAttached ? file?.name : "Upload"}
                    </Text>
                  </Button>
                )}
              </FileButton>
              <CloseButton
                ml={5}
                onClick={removeAttachment}
                display={fileAttached ? "block" : "none"}
                c={"#5345c8"}
                variant="transparent"
                icon={<IconXboxX size={20} stroke={1.5} />}
              />
            </Flex>
          </Paper>

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
            >
              {alertMessage}
            </Text>
          </Group>

          <Group mt="lg" mb={50}>
            <Button fullWidth color="#5345c8" type="submit">
              Submit Form
            </Button>
          </Group>
        </form>

        {/* Request Submit Successful */}
        <Transition
          mounted={displaySuccess}
          transition={"fade-up"}
          duration={800}
          timingFunction="ease"
          keepMounted
        >
          {(transitionStyle) => (
            <Group style={{ display: displaySuccess ? "block" : "none" }}>
              <Paper style={transitionStyle} mt={1} mb={5}>
                {/* Black header */}
                <Group
                  h={140}
                  justify="center"
                  style={{ backgroundColor: "black" }}
                >
                  <Text mb={5} className={classes.successTitle}>
                    Thank You!
                  </Text>
                </Group>

                {/* Body */}
                <Group className={classes.singlePaperContainer}>
                  <Text className={classes.subtitle}>
                    Request submitted successfully. Kindly give at most 4
                    business days to get a response to your feedback.
                  </Text>
                  <Group w={"100%"} mt={30} justify="space-around">
                    <ThemeIcon
                      size={successIconSize}
                      className={classes.successMessage}
                    >
                      <IconSend strokeWidth={2} size={successIconSize} />
                    </ThemeIcon>
                    <ThemeIcon
                      size={successIconSize}
                      className={classes.successMessage}
                    >
                      <IconSend strokeWidth={2} size={successIconSize} />
                    </ThemeIcon>
                    <ThemeIcon
                      size={successIconSize}
                      className={classes.successMessage}
                    >
                      <IconSend strokeWidth={2} size={successIconSize} />
                    </ThemeIcon>
                  </Group>
                </Group>
              </Paper>

              {/* Redirect Button */}
              <Link to="/">
                <Button mt="lg" mb={50} fullWidth color="#5345c8">
                  Go To Homepage
                </Button>
              </Link>
            </Group>
          )}
        </Transition>
      </Flex>
    </Group>
  );
}
