import {
  IconDeviceLaptop,
  IconCopyright,
  IconBrandInstagram,
  IconBrandGithubFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import {
  Group,
  Text,
  Container,
  Tabs,
  rem,
  Button,
  Anchor,
  Image,
} from "@mantine/core";
import IgLogo from "../../assets/images/igLogo.jpg";
import classes from "./Footer.module.css";

export const Footer = () => {
  const iconStyle = { width: rem(15), height: rem(15) };
  const iconStylePanel = { width: rem(20), height: rem(20) };

  return (
    <Container
      bg={"var(--mantine-color-dark-9)"}
      h={150}
      className={classes.header}
    >
      <Group>
        <Group gap={4}>
          <IconCopyright size={18} color="gray" />
          <Text
            fw={400}
            size="lg"
            style={{ color: "gray", margin: 0, padding: 0 }}
          >
            2024
          </Text>
          <Text className={`${classes.title}`}>DevPortalX</Text>
          <IconDeviceLaptop size={25} color="white" />
        </Group>

        <Group className={`${classes.headerRight}`}>
          <Tabs defaultValue="connect">
            <Tabs.List>
              <Tabs.Tab
                value="connect"
                className={classes.tabs}
                leftSection={
                  <IconBrandLinkedin color="white" style={iconStyle} />
                }
              >
                <Text className={classes.text}>Connect</Text>
              </Tabs.Tab>
              <Tabs.Tab
                value="with"
                className={classes.tabs}
                leftSection={
                  <IconBrandGithubFilled color="white" style={iconStyle} />
                }
              >
                <Text className={classes.text}>With</Text>
              </Tabs.Tab>
              <Tabs.Tab
                value="me"
                className={classes.tabs}
                leftSection={
                  <IconBrandInstagram color="white" style={iconStyle} />
                }
              >
                <Text className={classes.text}>Me</Text>
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="connect">
              <Anchor
                href="https://www.linkedin.com/in/joshua-oti/"
                target="_blank"
              >
                <Button
                  variant="transparent"
                  leftSection={<IconBrandLinkedin style={iconStylePanel} />}
                >
                  <Text className={`${classes.text}`}>joshua-oti</Text>
                </Button>
              </Anchor>
            </Tabs.Panel>
            <Tabs.Panel value="with">
              <Anchor href="https://github.com/joshoti" target="_blank">
                <Button
                  variant="transparent"
                  leftSection={
                    <IconBrandGithubFilled
                      color="white"
                      style={iconStylePanel}
                    />
                  }
                >
                  <Text className={classes.text}>joshoti</Text>
                </Button>
              </Anchor>
            </Tabs.Panel>
            <Tabs.Panel value="me">
              <Anchor href="https://instagram.com/josh_ohtee" target="_blank">
                <Button
                  variant="transparent"
                  leftSection={<Image src={IgLogo} h={23} />}
                >
                  <Text className={classes.text}>josh_ohtee</Text>
                </Button>
              </Anchor>
            </Tabs.Panel>
          </Tabs>
        </Group>
      </Group>
    </Container>
  );
};
