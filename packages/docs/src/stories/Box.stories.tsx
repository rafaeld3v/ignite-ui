import React from "react";
import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@rafaeld3v-ignite-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Text>Testando elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
