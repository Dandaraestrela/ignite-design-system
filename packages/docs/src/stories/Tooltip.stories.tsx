import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, HeadingProps } from "@ignite-ui/react";
import { fonts, colors } from "@ignite-ui/tokens";

export default {
  title: "Floating/Tooltip",
  component: Tooltip,
  args: {
    children: (
      <div
        style={{
          margin: "50px",
          width: "fit-content",
          color: colors.gray100,
          fontFamily: fonts.secondary,
        }}
      >
        Texto com hover
      </div>
    ),
    tooltipText: "Conteúdo do tooltip",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};
