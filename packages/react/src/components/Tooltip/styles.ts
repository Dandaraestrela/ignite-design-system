import { styled } from "../../styles";
import * as TooltipRadix from "@radix-ui/react-tooltip";

export const TooltipContent = styled(TooltipRadix.Content, {
  textWrap: "nowrap",
  fontFamily: "$secondary",
  padding: "$3 $4",
  borderRadius: "$xs",
  backgroundColor: "$gray900",
  color: "$gray100",
});

export const TooltipWrapper = styled("div", {
  display: "flex",
  position: "absolute",
  top: "0px",
  right: "50%",
  transform: "translateX(50%)",
  zIndex: "9999",

  textWrap: "nowrap",
  fontFamily: "$secondary",
  fontSize: "$sm",
  lineHeight: "$short",
  color: "$gray100",

  "&::after": {
    content: "",
    display: "block",
    width: "0",
    height: "0",
    position: "absolute",
    bottom: "-4px",
    left: "50%",
    transform: "translateX(-50%)",
    borderTop: "4px solid $gray900",
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
  },
});
