import { IconLogin2, IconArrowUp } from "@tabler/icons-react";
import {
  Group,
  Box,
  Text,
  Button,
  Container,
  Affix,
  Transition,
  rem,
} from "@mantine/core";
import classes from "./Footer.module.css";
import { useWindowScroll } from "@mantine/hooks";

export const Footer = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Box bg={"var(--mantine-color-dark-9)"}>
      <Container h={60}>
        <Group className={classes.header}>
          <Group>
            <Text className={`${classes.title}`}>DevPortalX</Text>
          </Group>

          <Group className={`${classes.headerRight}`}>
            <Text className={`${classes.text}`}>Docs</Text>
            <Text className={`${classes.text}`}>Support</Text>
            <Button
              color="violet"
              radius={"md"}
              variant="filled"
              leftSection={<IconLogin2 size={20} />}
            >
              <Text className={`${classes.text}`}>Get Started</Text>
            </Button>
          </Group>
        </Group>
      </Container>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              radius={"md"}
              variant="gradient"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              gradient={{ from: "indigo", to: "violet", deg: 90 }}
              leftSection={
                <IconArrowUp
                  stroke={4}
                  style={{ width: rem(16), height: rem(16) }}
                />
              }
            >
              <Text className={`${classes.text}`}>Scroll to top</Text>
            </Button>
          )}
        </Transition>
      </Affix>
    </Box>
  );
};
