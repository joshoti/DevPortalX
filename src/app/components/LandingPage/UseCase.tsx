import { Paper, Group, Text, Box, Flex, Tabs, Image } from "@mantine/core";
import classes from "./LandingPage.module.css";
import loginIcon from "../../assets/images/login-icon.png";
import webhookIcon from "../../assets/images/webhooks.png";
import nextStepsIcon from "../../assets/images/next-steps-icon.jpg";

export function UseCase() {
  const useCaseTabStyle = { height: "50px" };
  const useCasePaperSize = { height: 80, width: 80 };
  const scrollToLoginSSO = () => {
    const supportSection = document.getElementById("loginsso");
    supportSection?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const scrollToWebhook = () => {
    const supportSection = document.getElementById("webhook");
    supportSection?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const scrollToNextSteps = () => {
    const supportSection = document.getElementById("nextsteps");
    supportSection?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  return (
    <Box className={classes.container}>
      <Group gap={"5vw"} mt={"xl"} align="flex-start" justify="space-between">
        {/* Tabs on the left */}
        <Flex
          direction={"column"}
          flex={1}
          className={classes.useCaseContainer}
        >
          <Text className={classes.title}>Use Case</Text>
          <Tabs
            c={"white"}
            color="#5345c8"
            radius={10}
            orientation="vertical"
            variant="pills"
            defaultValue="login"
          >
            <Tabs.List w={"100%"}>
              <Tabs.Tab
                onClick={scrollToLoginSSO}
                style={useCaseTabStyle}
                value="login"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Login SSO
              </Tabs.Tab>
              <Tabs.Tab
                onClick={scrollToWebhook}
                style={useCaseTabStyle}
                value="webhooks"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Webhooks
              </Tabs.Tab>
              <Tabs.Tab
                onClick={scrollToNextSteps}
                style={useCaseTabStyle}
                value="nextstep"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Next Steps
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Flex>

        {/* Paper on the right */}
        <Flex rowGap={30} direction={"column"} flex={2}>
          <Paper
            id="loginsso"
            radius={25}
            shadow="xs"
            p="xl"
            className={classes.singlePaperContainer}
            h={400}
          >
            <Text mb={10} className={classes.singleUseCasePaperTitle}>
              Login SSO
            </Text>
            <Text className={classes.singleUseCaseText}>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
            <Image
              className={classes.singleUseCaseIconContainer}
              fit="contain"
              style={useCasePaperSize}
              src={loginIcon}
            ></Image>
          </Paper>
          <Paper
            id="webhook"
            radius={25}
            shadow="xs"
            p="xl"
            className={classes.singlePaperContainer}
          >
            <Text mb={10} className={classes.singleUseCasePaperTitle}>
              Webhooks
            </Text>
            <Text className={classes.singleUseCaseText}>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
            <Image
              className={classes.singleUseCaseIconContainer}
              fit="contain"
              style={useCasePaperSize}
              src={webhookIcon}
            ></Image>
          </Paper>
          <Paper
            id="nextsteps"
            radius={25}
            shadow="xs"
            p="xl"
            className={classes.singlePaperContainer}
          >
            <Text mb={10} className={classes.singleUseCasePaperTitle}>
              Next Steps
            </Text>
            <Text className={classes.singleUseCaseText}>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
            <Image
              className={classes.singleUseCaseIconContainer}
              fit="contain"
              style={useCasePaperSize}
              src={nextStepsIcon}
            ></Image>
          </Paper>
        </Flex>
      </Group>
    </Box>
  );
}
