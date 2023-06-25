import React from "react";
import { HStack, Icon, Flex } from "@chakra-ui/react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export default function SocialIcons() {
  const socialIcons = [
    {
      icon: BsTwitter,
      label: "Twitter",
      href: "https://twitter.com/sksingq",
    },
    {
      icon: GrLinkedinOption,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mitsumitsingh",
    },
  ];

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Flex>
        {socialIcons.map((socialIcon, index) => (
          <HStack key={index} mr={index !== socialIcons.length - 1 ? 4 : 0}>
            <button
              onClick={() => handleIconClick(socialIcon.href)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Icon
                as={socialIcon.icon}
                borderRadius={10}
                bg={"grey"}
                h={12}
                w={12}
                p={1}
              />
            </button>
          </HStack>
        ))}
      </Flex>
    </div>
  );
}
