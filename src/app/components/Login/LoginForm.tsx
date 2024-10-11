import {
  Alert,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Image,
  Text,
  Flex,
  Transition,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import loginArtBird from "../../assets/images/One-Line-bird.jpg";
import classes from "./Login.module.css";
import { IconAt, IconLockPassword } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { api } from "../../api/axios-api";
import { useState } from "react";
import { showNotification, notifications } from "@mantine/notifications";

export function LoginForm() {
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
        console.log("Then section");
        console.log(data);
      })
      .catch((error) => {
        console.log("Catch section");
        showNotification({
          title: "Error",
          message: error.response.data.message || "Unable to login",
          color: "red",
        });
        notifications.show({
          title: "Error",
          message: error.response.data.message || "Unable to login",
          color: "red",
        });
        console.error({
          title: error.response.data.message || "Unable to login",
        });
      });
  };

  return (
    <Group gap={0} h={700}>
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
              withAsterisk
              mb={15}
              size="md"
              label="Password"
              placeholder="password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />

            <Group justify="end">
              <Link className={classes.textLink} to="#">
                <Text c={"dimmed"} className={classes.textLink}>
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
              <Text span className={classes.textLink}>
                Get support
              </Text>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Group>
  );
}
