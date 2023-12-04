import type { Meta, StoryObj } from "@storybook/react";
import { Toast, HeadingProps } from "@ignite-ui/react";

export default {
  title: "Floating/Toast",
  component: Toast,
  args: {
    title: "Título do toast",
    description: "Descrição do toast",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
