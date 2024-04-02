import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import APIClient from "../services/api-client";

const apiClient = new APIClient("signup");
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  username: z.string().min(3),
});

export type FormData = z.infer<typeof schema>;

export const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await apiClient.post(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      display={"grid"}
      margin={"auto"}
      maxWidth={"600px"}
      placeContent={"center"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading
          color={"transparet"}
          fontSize={"50px"}
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
        <FormControl isInvalid={Boolean(errors.email?.message)} mb={"20px"}>
          <FormLabel>Email address</FormLabel>
          <Input {...register("email")} type="text" focusBorderColor="none" />
          <FormErrorMessage>Invalid email format</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.username?.message)} mb={"20px"}>
          <FormLabel>Username</FormLabel>
          <Input
            {...register("username")}
            type="text"
            focusBorderColor="none"
          />
          <FormErrorMessage>Username must be 3 charaters</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password?.message)} mb={"20px"}>
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            type="password"
            focusBorderColor="none"
          />
          <FormErrorMessage>
            Password must contain 5 characters
          </FormErrorMessage>
        </FormControl>
        <Button width={"100%"} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
