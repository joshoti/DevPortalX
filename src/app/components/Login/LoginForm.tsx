import {
  Button,
  Group,
  TextInput,
  PasswordInput,
  Image,
  Text,
  Flex,
  ThemeIcon,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import loginArtBird from "../../assets/images/bird-no-bg.png";
import classes from "./Login.module.css";
import {
  IconAt,
  IconLockPassword,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { api } from "../../api/axios-api";
import { useState } from "react";
import { GetSupport } from "./GetSupport";
import { useDisclosure } from "@mantine/hooks";
import { ForgotPassword } from "./ForgotPassword";

export function LoginForm() {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [openedForgotPassword, setOpenForgotPassword] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  const textInputStyle = { width: 400 };
  const inputFieldIconStyle = { size: 18, stroke: 1.5 };
  type LoginT = {
    email: string;
    password: string;
  };

  const handleSubmit = (form: LoginT) => {
    api
      .post("/api/users/login", { email: form.email, password: form.password })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        const message = error.response?.data.message || "Unable to login";

        setAlertMessage(message);
        setDisplayAlert(true);
      });
  };

  return (
    <Group gap={0} className={classes.pageContainer}>
      <Group
        h={"100%"}
        flex={0.75}
        className={classes.loginDecorationContainer}
      >
        <Image fit="contain" src={loginArtBird} width={20} />
      </Group>
      <Flex align={"center"} justify={"center"} h={"100%"} flex={1}>
        <Flex direction="column">
          <Text className={classes.title}>Log In</Text>
          <Text mb={30} c={"dimmed"} className={classes.subtitle}>
            Log in to your DevPortalX account
          </Text>
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <TextInput
              leftSection={
                <IconAt
                  stroke={inputFieldIconStyle.stroke}
                  size={inputFieldIconStyle.size}
                />
              }
              style={textInputStyle}
              onClick={() => setDisplayAlert(false)}
              withAsterisk
              mb={15}
              size="md"
              label="Email"
              placeholder="your@email.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              leftSection={
                <IconLockPassword
                  stroke={inputFieldIconStyle.stroke}
                  size={inputFieldIconStyle.size}
                />
              }
              style={textInputStyle}
              onClick={() => setDisplayAlert(false)}
              withAsterisk
              size="md"
              label="Password"
              placeholder="password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <Group mt={3} gap={0}>
              <ThemeIcon
                className={`${classes.errorMessage} ${classes.caution}`}
                style={{
                  display: displayAlert ? "flex" : "none",
                }}
              >
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <Text
                style={{
                  display: displayAlert ? "block" : "none",
                }}
                className={classes.errorMessage}
                children={alertMessage}
              ></Text>
            </Group>
            <Group justify="end">
              <Link className={classes.textLink} to="#">
                <Text
                  onClick={() => setOpenForgotPassword(true)}
                  c={"dimmed"}
                  className={classes.textLink}
                >
                  Forgot Password?
                </Text>
              </Link>
            </Group>
            <Group mt="xs" mb="md">
              <Button color="#5345c8" type="submit">
                Log in
              </Button>
            </Group>
          </form>
          <Text span mb={5} c={"dimmed"} className={classes.text}>
            Don't have an account?{" "}
            <Link className={classes.textLink} to="/register">
              <Text span className={classes.textLink}>
                Sign up
              </Text>
            </Link>
          </Text>
          <Text span c={"dimmed"} className={classes.text}>
            Can't login?{" "}
            <Link className={classes.textLink} to="#">
              <Text onClick={open} span className={classes.textLink}>
                Get support
              </Text>
            </Link>
          </Text>
        </Flex>
        <Modal opened={opened} onClose={close} title="Support" centered>
          <GetSupport />
        </Modal>
        <Modal
          opened={openedForgotPassword}
          onClose={() => setOpenForgotPassword(false)}
          title="Forgot Password?"
          centered
        >
          <ForgotPassword />
        </Modal>
      </Flex>
    </Group>
  );
}
