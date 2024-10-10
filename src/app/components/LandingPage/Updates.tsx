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
    <Box pb={100} className={classes.container}>
      <Title className={classes.title}>Updates</Title>
      <Text c="dimmed" size="lg" maw={"100%"} mt="md" mb="xl">
        A timeline log of last completed task, current update and the next two updates.
      </Text>
      <Group justify="center" className={classes.updatesTimelineContainer}>
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item bullet={<IconGitBranch size={12} />} title="Past [-1]">
            <Text c="dimmed" size="lg">
              Created the Java backend API to support login and the creation of
              new users.
            </Text>
            <Text c={"white"} size="xs" mt={4}>
              Oct 5 - 6
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconGitCommit size={12} />} title="Present">
            <Text c="dimmed" size="lg">
              Homepage, Login, and Registration UI pages mostly completed.
            </Text>
            <Text c={"white"} size="xs" mt={4}>
              Oct 6 - 10
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Future [1]"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text c="dimmed" size="lg">
              Create UI pages for the links in the Header.
            </Text>
            <Text c={"white"} size="xs" mt={4}>
              Anticipated start: Oct 12
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Future [2]"
            bullet={<IconMessageDots size={12} />}
          >
            <Text c="dimmed" size="lg">
              Create UI pages for the User's dashboard
            </Text>
            <Text c={"white"} size="xs" mt={4}>
              Anticipated start: Oct 18
            </Text>
          </Timeline.Item>
        </Timeline>
      </Group>
    </Box>
  );
}
