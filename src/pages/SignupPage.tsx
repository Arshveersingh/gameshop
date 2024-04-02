import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
export const SignupPage = () => {
  return (
    <Box
      display={"grid"}
      margin={"auto"}
      maxWidth={"600px"}
      flexDirection={"column"}
      gap={"20px"}
    >
      <Heading
        color={"transparet"}
        fontSize={"60px"}
        background={
          "linear-gradient(0deg, rgba(63,94,251,1) 39%, rgba(131,58,180,1) 73%);"
        }
        backgroundClip={"text"}
        textAlign={"center"}
        fontFamily="'Bebas Neue', 'Roboto', 'Sans-Serif';"
        letterSpacing={"3px"}
      >
        Sign up
      </Heading>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button type="submit">Submit</Button>
    </Box>
  );
};
