import { Paper, Group, Text, Box, Flex, Tabs, Image } from "@mantine/core";
import classes from "./LandingPage.module.css";
import loginIcon from "../../assets/images/login-icon.png";
import webhookIcon from "../../assets/images/webhooks.png";
import analyticsIcon from "../../assets/images/analytics.png";
import { scrollToElement } from "../../utils/scoll";

export function UseCase() {
  const useCaseTabStyle = { height: "50px" };
  const useCasePaperSize = { height: 80, width: 80 };

  return (
    <Box className={classes.container}>
      <Group gap={"8vw"} mt={"xl"} align="flex-start" justify="space-between">
        {/* Tabs on the left */}
        <Flex
          direction={"column"}
          flex={0.7}
          className={classes.useCaseContainer}
        >
          <Text className={classes.title}>Use Cases</Text>
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
                onClick={() => scrollToElement("loginsso")}
                style={useCaseTabStyle}
                value="login"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Login SSO
              </Tabs.Tab>
              <Tabs.Tab
                onClick={() => scrollToElement("webhook")}
                style={useCaseTabStyle}
                value="webhooks"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Webhooks
              </Tabs.Tab>
              <Tabs.Tab
                onClick={() => scrollToElement("analytics")}
                style={useCaseTabStyle}
                value="analytics"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Real-time Analytics
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Flex>

        {/* Paper on the right */}
        <Flex rowGap={30} direction={"column"} flex={1}>
          <Paper
            id="loginsso"
            radius={25}
            shadow="xs"
            p="xl"
            className={classes.singleUseCasePaperContainer}
            h={400}
          >
            <Text mb={10} className={classes.singleUseCasePaperTitle}>
              Login SSO
            </Text>
            <Text className={classes.singleUseCaseText}>
              Single Sign-On (SSO) simplifies login by allowing users to access
              multiple apps with a single account, reducing login hassles and
              improving security.
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
            className={classes.singleUseCasePaperContainer}
          >
            <Text mb={10} className={classes.singleUseCasePaperTitle}>
              Webhooks
            </Text>
            <Text className={classes.singleUseCaseText}>
              Webhooks automate integrations by instantly syncing data between
              platforms, eliminating manual updates and speeding up workflows.
            </Text>
            <Image
              className={classes.singleUseCaseIconContainer}
              fit="contain"
              style={useCasePaperSize}
              src={webhookIcon}
            ></Image>
          </Paper>
          <Paper
            id="analytics"
            radius={25}
            shadow="xs"
            p="xl"
            className={classes.singleUseCasePaperContainer}
          >
            <Text mb={10} className={classes.singleUseCasePaperTitle}>
              Real-time Analytics
            </Text>
            <Text className={classes.singleUseCaseText}>
              Real-time analytics provide immediate feedback on user behavior
              and system performance, empowering faster responses and better
              decision-making.
            </Text>
            <Image
              className={classes.singleUseCaseIconContainer}
              fit="contain"
              style={useCasePaperSize}
              src={analyticsIcon}
            ></Image>
          </Paper>
        </Flex>
      </Group>
    </Box>
  );
}
