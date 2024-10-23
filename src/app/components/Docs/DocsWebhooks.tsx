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
} from "@mantine/core";
import classes from "./Docs.module.css";
import { IconAt, IconSend } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function DocsWebhooks() {
  const paperStyle = { radius: 40 };
  const successIconSize = 70;
  const textInputRadius = "md";
  const inputFieldIconStyle = { size: 18, stroke: 1.5 };

  return (
    <Flex h={"100%"}>
      {/* Documentation page */}
      <Flex flex={1} direction="column">
        <Title mt={30} className={classes.title}>
          Webhooks
        </Title>
        <Text mb={30} className={classes.subtitle}>
          Tell us about a problem you'd like to report or feedback you have
          about your experience.
        </Text>
        <Flex direction="column">
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
            />
            <Textarea
              withAsterisk
              mb={15}
              size="md"
              radius={textInputRadius}
              label="How can we help?"
              placeholder="Message"
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
          </Paper>

          <Group mt="lg" mb={50}>
            <Button fullWidth color="#5345c8" type="submit">
              Submit Form
            </Button>
          </Group>
        </Flex>

        {/* Request Submit Successful */}
        <Transition
          mounted={true}
          transition={"fade-up"}
          duration={800}
          timingFunction="ease"
          keepMounted
        >
          {(transitionStyle) => (
            <Group>
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
    </Flex>
  );
}
