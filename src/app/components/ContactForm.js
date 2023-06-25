import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl id="username" mb={4} isRequired>
        <FormLabel>Enter your name</FormLabel>
        <Input
          type="text"
          name="username"
          placeholder="Enter your name"
          value={user.username}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl id="email" mb={4} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={handleChange}
          autoComplete="off"
        />
      </FormControl>

      <FormControl id="phone" mb={4} isRequired>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={user.phone}
          onChange={handleChange}
          autoComplete="off"
        />
      </FormControl>

      <FormControl id="message" mb={4} isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          rows={5}
          placeholder="Enter your Message"
          value={user.message}
          onChange={handleChange}
          autoComplete="off"
        />
      </FormControl>

      <Box>
        {status === "success" && (
          <Box color="green.500" mb={2}>
            Thank you for your message!
          </Box>
        )}
        {status === "error" && (
          <Box color="red.500" mb={2}>
            There was an error submitting your message. Please try again.
          </Box>
        )}

        <Button type="submit" colorScheme="blue">
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
