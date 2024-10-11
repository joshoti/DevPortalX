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
            className={classes.singleCardContainer}
          >
            <Card.Section>
              <Box m={cardImageMargin}>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  radius={cardRadius - cardImageMargin}
                />
              </Box>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className={classes.docsTitle}>OAuth 2.0 API</Text>
            </Group>
            <Text c="dimmed" className={classes.singleDocsText}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
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
            className={classes.singleCardContainer}
          >
            <Card.Section>
              <Box m={cardImageMargin}>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  radius={cardRadius - cardImageMargin}
                />
              </Box>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className={classes.docsTitle}>Webhooks Integration</Text>
              <Badge color="pink">New!</Badge>
            </Group>
            <Text c="dimmed" className={classes.singleDocsText}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
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
            className={classes.singleCardContainer}
          >
            <Card.Section>
              <Box m={cardImageMargin}>
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  radius={cardRadius - cardImageMargin}
                />
              </Box>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className={classes.docsTitle}>Analytics API</Text>
              <Badge color="blue">Stay Tuned!</Badge>
            </Group>
            <Text c="dimmed" className={classes.singleDocsText}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
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
