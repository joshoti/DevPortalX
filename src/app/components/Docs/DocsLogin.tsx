import {
  Button,
  Group,
  TextInput,
  Text,
  Flex,
  Title,
  Textarea,
  Paper,
} from "@mantine/core";
import classes from "./Docs.module.css";
import { IconAt } from "@tabler/icons-react";
import { useEffect } from "react";
import { scrollBehavior } from "../../pages/Docs";

export function DocsLogin() {
  // To scroll to the top manually
  useEffect(() => {
    const head = document.getElementById("head");
    head?.scrollIntoView(scrollBehavior);
  });

  const paperStyle = { radius: 40 };
  const textInputRadius = "md";
  const inputFieldIconStyle = { size: 18, stroke: 1.5 };

  return (
    <Flex h={"100%"}>
      {/* Documentation page */}
      <Flex flex={1} direction="column">
        <Title id="head" mt={30} className={classes.title}>
          Login
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
      </Flex>
    </Flex>
  );
}
