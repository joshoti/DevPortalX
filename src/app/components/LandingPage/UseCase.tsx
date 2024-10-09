import { Paper, Group, Text, Title, Box } from "@mantine/core";
import classes from "./LandingPage.module.css";

export function UseCase() {
  return (
    <Box className={classes.container}>
      <Title className={classes.title}>Use Cases</Title>
      <Text c="dimmed" size="lg" maw={580} mt="md" mb="xl">
        This starter Vite project includes a minimal setup, if you want to learn
        more on Mantine + Vite integration follow{" "}
      </Text>
      <Group>
        <Paper radius={25} shadow="xs" p="xl" className={classes.useCase}>
          <Text mb={10} className={classes.useCaseTitle}>
            Login
          </Text>
          <Text className={classes.useCaseBody}>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper radius={25} shadow="xs" p="xl" className={classes.useCase}>
          <Text mb={10} className={classes.useCaseTitle}>
            Webhooks
          </Text>
          <Text className={classes.useCaseBody}>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
        <Paper radius={25} shadow="xs" p="xl" className={classes.useCase}>
          <Text mb={10} className={classes.useCaseTitle}>
            Coming Soon
          </Text>
          <Text className={classes.useCaseBody}>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </Paper>
      </Group>
    </Box>
  );
}
