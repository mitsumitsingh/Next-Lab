"use client";
import { Textarea, Box, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function SendMail() {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <div>
      <Box bg="white" color={"black"} marginBottom={2} borderRadius={50}>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Get in touch with us"
          h={40}
        />
      </Box>
      <Button
        w="100%"
        bg="#24282c"
        border={"solid 1px white"}
        color={"white"}
        borderRadius={10}
      >
        Send Mail
      </Button>
    </div>
  );
}
