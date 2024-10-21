import { Group, Text, Title, Box, Timeline, Badge } from "@mantine/core";
import classes from "./LandingPage.module.css";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons-react";

export function Updates() {
  const bulletSize = 30;
  const lineWidth = 5;
  const iconSize = 15;

  return (
    <Box id="updates" pb={100} className={classes.container}>
      <Title className={classes.title}>Updates</Title>
      <Text c="dimmed" size="xl" maw={"100%"} mt="md" mb="xl">
        A timeline log of last completed task, current update and the next two
        updates.
      </Text>
      <Group justify="center">
        <Timeline
          active={1}
          color="#5345c8"
          bulletSize={bulletSize}
          lineWidth={lineWidth}
        >
          <Timeline.Item
            bullet={<IconGitBranch size={iconSize} />}
            title="Past [-2]"
          >
            <Text c="dimmed" size="lg">
              Created the Java backend API to support login and the creation of
              new users.
            </Text>
            {/* <Text c={"white"} size="xs" mt={4}>
              Oct 5 - 6
            </Text> */}
            <Badge color="green">Oct 5 - 6</Badge>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconGitCommit size={iconSize} />}
            title="Past [-1]"
          >
            <Text c="dimmed" size="lg">
              Homepage, Login, and Registration UI pages mostly completed.
            </Text>
            <Badge color="green">Oct 6 - 20</Badge>
            <Badge ml={10} color="gray">
              Had exams :D
            </Badge>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconGitCommit size={iconSize} />}
            title="Present"
          >
            <Text c="dimmed" size="lg">
              Handling login: displaying profile picture in header
            </Text>
            <Badge color="#FFBF00">Oct 20 - 24</Badge>
            <Badge ml={10} color="gray">
              In progress
            </Badge>
          </Timeline.Item>

          <Timeline.Item
            title="Future [1]"
            bullet={<IconGitPullRequest size={iconSize} />}
            lineVariant="dashed"
          >
            <Text c="dimmed" size="lg">
              Create UI pages for the links in the Header.
            </Text>
            <Badge color="pink">Anticipated start: Oct 27</Badge>
          </Timeline.Item>

          <Timeline.Item
            title="Future [2]"
            bullet={<IconMessageDots size={iconSize} />}
          >
            <Text c="dimmed" size="lg">
              Create UI pages for the User's dashboard
            </Text>
            <Badge color="pink">Anticipated start: Nov 1</Badge>
          </Timeline.Item>
        </Timeline>
      </Group>
    </Box>
  );
}
