import {
  Paper,
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
  return (
    <Box className={classes.container}>
      <Title className={classes.title}>Documentation</Title>
      <Text c="dimmed" size="lg" maw={"100%"} mt="lg" mb="xl">
        Explore the documenation to accelerate building with the product.
      </Text>

      {/* // New Paper */}
      <Group mt={"lg"}>
        <Paper
          radius={25}
          shadow="xs"
          p="xl"
          className={classes.singlePaperContainer}
        >
          <Text mb={10} className={classes.docsTitle}>
            Login
          </Text>
          <Text className={classes.singleDocsText}>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper
          radius={25}
          shadow="xs"
          p="xl"
          className={classes.singlePaperContainer}
        >
          <Text mb={10} className={classes.docsTitle}>
            Webhooks
          </Text>
          <Text className={classes.singleDocsText}>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper
          radius={25}
          shadow="xs"
          p="xl"
          className={classes.singlePaperContainer}
        >
          <Text mb={10} className={classes.docsTitle}>
            DevPortalX API
          </Text>
          <Text className={classes.singleDocsText}>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper
          radius={25}
          shadow="xs"
          p="xl"
          className={classes.singlePaperContainer}
        >
          <Text mb={10} className={classes.docsTitle}>
            Coming Soon
          </Text>
          <Text className={classes.singleDocsText}>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
      </Group>

      {/* // End Paper */}

      <Group mt={"lg"}>
        {/* Card 1 */}
        <Card
          shadow="sm"
          padding="lg"
          radius={25}
          withBorder
          className={classes.singleCardContainer}
        >
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>

        {/* Card 2 */}
        <Card
          shadow="sm"
          padding="lg"
          radius={25}
          withBorder
          className={classes.singleCardContainer}
        >
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>

        {/* Card 3 */}
        <Card
          shadow="sm"
          padding="lg"
          radius={25}
          withBorder
          className={classes.singleCardContainer}
        >
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>

        {/* Card 4 */}
        <Card
          shadow="sm"
          padding="lg"
          radius={25}
          withBorder
          className={classes.singleCardContainer}
        >
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Group>
    </Box>
  );
}
