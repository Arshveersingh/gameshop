import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import APIClient from "../services/api-client";

const apiClient = new APIClient("login");

const schema = z.object({
  emailOrUsername: z.string().min(3),
  password: z.string().min(5),
});

export type FormData = z.infer<typeof schema>;

export const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      await apiClient.post(data);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setError("emailOrUsername", { message: "" });
      setError("password", { message: "" });
    }
  };
  return (
    <Box display={"grid"} margin={"auto"} maxWidth={"600px"}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          Log in
        </Heading>
        <FormControl isInvalid={Boolean(errors.emailOrUsername)} mb={"20px"}>
          <FormLabel>Email or Username</FormLabel>
          <Input
            {...register("emailOrUsername")}
            type="text"
            focusBorderColor="none"
          />
          <FormErrorMessage>Invalid username or password</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password)} mb={"20px"}>
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            type="password"
            focusBorderColor="none"
          />
          <FormErrorMessage>Invalid username or password</FormErrorMessage>
        </FormControl>
        <Button width={"100%"} type="submit" isLoading={isSubmitting}>
          Submit
        </Button>
      </form>
    </Box>
  );
};
