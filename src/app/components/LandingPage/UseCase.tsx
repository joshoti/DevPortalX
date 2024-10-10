import { Paper, Group, Text, Box, Flex, Tabs } from "@mantine/core";
import classes from "./LandingPage.module.css";

export function UseCase() {
  const useCaseTabStyle = { height: "50px" };
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
                style={useCaseTabStyle}
                value="login"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Login SSO
              </Tabs.Tab>
              <Tabs.Tab
                style={useCaseTabStyle}
                value="webhooks"
                className={`${classes.singleUseCaseTitle} ${classes.tabs}`}
              >
                Webhooks
              </Tabs.Tab>
              <Tabs.Tab
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
            radius={25}
            shadow="xs"
            p="xl"
            className={classes.singlePaperContainer}
          >
            <Text mb={10} className={classes.singleUseCasePaperTitle}>
              Login SSO
            </Text>
            <Text className={classes.singleUseCaseText}>
              Use it to create cards, dropdowns, modals and other components
              that require background with shadow
            </Text>
          </Paper>
          <Paper
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
          </Paper>
          <Paper
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
          </Paper>
        </Flex>
      </Group>
    </Box>
  );
}
