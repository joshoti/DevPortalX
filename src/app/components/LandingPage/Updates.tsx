import { Group, Text, Title, Box, Timeline } from "@mantine/core";
import classes from "./LandingPage.module.css";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons-react";

export function Updates() {
  return (
    <Box className={classes.container}>
      <Title className={classes.title}>Updates</Title>
      <Text c="dimmed" size="lg" maw={"100%"} mt="md" mb="xl">
        This starter Vite project includes a minimal setup, if you want to learn
        more on Mantine + Vite integration follow{" "}
      </Text>
      <Group justify="center" className={classes.updatesTimelineContainer}>
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={<IconGitBranch size={12} />}
            title="New branch"
          >
            <Text c="dimmed" size="lg">
              You've created new branch fix-notifications from master
            </Text>
            <Text size="xs" mt={4}>
              2 hours ago
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
            <Text c="dimmed" size="lg">
              You&apos;ve pushed 23 commits to
              <Text variant="link" component="span" inherit>
                fix-notifications branch
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              52 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Pull request"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text c="dimmed" size="lg">
              You&apos;ve submitted a pull request
              <Text variant="link" component="span" inherit>
                Fix incorrect notification message (#187)
              </Text>
            </Text>
            <Text size="xs" mt={4}>
              34 minutes ago
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Code review"
            bullet={<IconMessageDots size={12} />}
          >
            <Text c="dimmed" size="lg">
              <Text variant="link" component="span" inherit>
                Robert Gluesticker
              </Text>{" "}
              left a code review on your pull request
            </Text>
            <Text size="xs" mt={4}>
              12 minutes ago
            </Text>
          </Timeline.Item>
        </Timeline>
      </Group>
    </Box>
  );
}
