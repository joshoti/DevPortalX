import { Image } from "@mantine/core";
import loginArtFlowers from "../../assets/images/one-line-art-girl-with-flowers.avif";
import loginArtBird from "../../assets/images/One-Line-bird.jpg";
import loginArtFaces from "../../assets/images/One-Line-faces.webp";
import loginArtHands from "../../assets/images/One-Line-hands.jpg";

export function LoginDecoration() {
  // getRandInt(3) produces 0, 1, or 2
  const getRandInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const images = [loginArtFlowers, loginArtBird, loginArtFaces, loginArtHands];
  const loginImage = images[getRandInt(images.length)];
  // return <Image fit="contain" src={loginImage} width={20} />;
  return <Image fit="contain" src={loginArtBird} width={20} />;
}
