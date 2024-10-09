import { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import { Container, Text } from "@mantine/core";

const words = [
  "By Developers, For Developers!",
  "Welcome to DevPortalX. Enjoy!",
];

export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const typingSpeed = 100;
  const pauseBetweenWords = 3000;
  const resumeBlinkDelay = 200;
  const stopBlinkDelay = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        // Remove characters one by one
        setText(currentWord.substring(0, currentCharIndex - 1));
        setCurrentCharIndex((prev) => prev - 1);
        setTimeout(() => setIsMoving(true), stopBlinkDelay);

        // If the word is fully erased, move to the next word
        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // Add characters one by one
        setText(currentWord.substring(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);

        // If the word is fully typed, start deleting after a pause
        if (currentCharIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseBetweenWords);
        }
      }
    };

    const timeoutId = setTimeout(
      handleTyping,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, [currentCharIndex, isDeleting, currentWordIndex]);

  // Resume blinking after a pause
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsMoving(false), resumeBlinkDelay);

    // Clear timeout if typing restarts before the delay finishes
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <Container className={classes.container}>
      <Text span className={classes.typewriter}>
        {text}
      </Text>
      <Text
        span
        className={
          isMoving
            ? `${classes.cursor} ${classes.solidCursor}`
            : `${classes.cursor} ${classes.blinkingCursor}`
        }
      >
        |
      </Text>
    </Container>
  );
};
