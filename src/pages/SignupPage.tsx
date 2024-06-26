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
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import APIClient from "../services/api-client";
import { getToken } from "../services/token";

const apiClient = new APIClient("signup");
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  username: z.string().min(3),
});

export type FormData = z.infer<typeof schema>;

export const SignupPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, [navigate]);

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
      const response = await apiClient.post(data);
      if (response.status === 201) {
        apiClient.setAuthToken(response.data.token);
        navigate("/");
      } else {
        setError("email", { message: response.data.email.message });
      }
      setIsSubmitting(false);
    } catch (error: any) {
      setIsSubmitting(false);
      if (error.response?.data) {
        setError("email", {
          message: error.response.data.email?.message,
        });
        setError("username", {
          message: error.response.data.username?.message as string,
        });
        setError("password", {
          message: error.response.data.password?.message as string,
        });
      }
    }
  };

  return (
    <Box display={"grid"} margin={"auto"} maxWidth={"600px"}>
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
          <Input {...register("email")} type="email" focusBorderColor="none" />
          <FormErrorMessage>
            {errors?.email?.message ||
              "Invalid email format or email exist in database."}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.username?.message)} mb={"20px"}>
          <FormLabel>Username</FormLabel>
          <Input
            {...register("username")}
            type="text"
            focusBorderColor="none"
          />
          <FormErrorMessage>
            {errors?.username?.message || "Username must be 3 charaters."}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password?.message)} mb={"20px"}>
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            type="password"
            focusBorderColor="none"
          />
          <FormErrorMessage>
            {errors?.password?.message || "Password must contain 5 characters."}
          </FormErrorMessage>
        </FormControl>
        <Button width={"100%"} type="submit" isLoading={isSubmitting}>
          Submit
        </Button>
      </form>
    </Box>
  );
};
