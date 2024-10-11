import {
  Group,
  Text,
  Title,
  Box,
  Card,
  Badge,
  Button,
  Image,
} from "@mantine/core";
import classes from "./LandingPage.module.css";

export function Documentation() {
  const docsContainerStyle = { gap: 33, marginTop: "lg" };
  const docsCardContainerStyle = {
    width: 380,
    marginBottom: "lg",
    shadow: "sm",
    padding: "lg",
  };
  const cardSectionHeight = 200;
  const cardRadius = 20;
  const cardImageMargin = 10;
  const scrollBehavior: Object = {
    behavior: "smooth",
    block: "center",
  };
  const scrollToUpdates = () => {
    const supportSection = document.getElementById("updates");
    supportSection?.scrollIntoView(scrollBehavior);
  };
  return (
    <Box className={classes.container}>
      <Title className={classes.title}>Documentation</Title>
      <Text c="dimmed" size="xl" maw={"100%"} mt="lg" mb="xl">
        Explore the API documentation to accelerate building your the
        application.
      </Text>

      <Group mt={docsContainerStyle.marginTop} style={docsContainerStyle}>
        {/* Card 1 */}
        <Box style={docsCardContainerStyle}>
          <Card
            shadow={docsCardContainerStyle.shadow}
            padding={docsCardContainerStyle.padding}
            radius={cardRadius}
            className={classes.singleDocsCardContainer}
          >
            <Card.Section>
              <Box m={cardImageMargin}>
                <Image
                  h={cardSectionHeight}
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                  // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  radius={cardRadius - cardImageMargin}
                />
              </Box>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className={classes.docsTitle}>OAuth 2.0 API</Text>
            </Group>
            <Text c="dimmed" className={classes.singleDocsText}>
              OAuth 2.0 allows secure access to user data without sharing
              credentials by using tokens, enabling streamlined authentication
              across multiple platforms.
            </Text>
            <Button color="#5345c8" fullWidth mt="md" radius="md">
              Explore API
            </Button>
          </Card>
        </Box>

        {/* Card 2 */}
        <Box style={docsCardContainerStyle}>
          <Card
            shadow={docsCardContainerStyle.shadow}
            padding={docsCardContainerStyle.padding}
            radius={cardRadius}
            className={classes.singleDocsCardContainer}
          >
            <Card.Section>
              <Box m={cardImageMargin}>
                <Image
                  h={cardSectionHeight}
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                  radius={cardRadius - cardImageMargin}
                />
              </Box>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className={classes.docsTitle}>Webhooks Integration</Text>
              <Badge color="pink">New!</Badge>
            </Group>
            <Text c="dimmed" className={classes.singleDocsText}>
              Webhooks send real-time data to external systems, automating
              processes and enabling efficient communication between
              applications when specific events occur.
            </Text>
            <Button color="#5345c8" fullWidth mt="md" radius="md">
              Learn More
            </Button>
          </Card>
        </Box>

        {/* Card 3 */}
        <Box style={docsCardContainerStyle}>
          <Card
            shadow={docsCardContainerStyle.shadow}
            padding={docsCardContainerStyle.padding}
            radius={cardRadius}
            className={classes.singleDocsCardContainer}
          >
            <Card.Section>
              <Box m={cardImageMargin}>
                <Image
                  h={cardSectionHeight}
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                  radius={cardRadius - cardImageMargin}
                />
              </Box>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className={classes.docsTitle}>Analytics API</Text>
              <Badge color="blue">Stay Tuned!</Badge>
            </Group>
            <Text c="dimmed" className={classes.singleDocsText}>
              The real-time analytics API delivers instant data insights,
              helping track performance metrics and user activity for immediate
              decision-making.
            </Text>
            <Button
              onClick={scrollToUpdates}
              color="#5345c8"
              fullWidth
              mt="md"
              radius="md"
            >
              View Updates
            </Button>
          </Card>
        </Box>
      </Group>
    </Box>
  );
}
