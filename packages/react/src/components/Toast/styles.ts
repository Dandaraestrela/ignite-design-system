import { styled } from "../../styles";
import * as ToastRadix from "@radix-ui/react-toast";

export const ToastRoot = styled(ToastRadix.Root, {
  width: "360px",
  fontFamily: "$secondary",
  padding: "$3 $4",
  borderRadius: "$xs",
  backgroundColor: "$gray900",
  color: "$gray100",
  listStyle: "none",
  ".ToastTitle": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
});

export const ToastDescription = styled(ToastRadix.Description, {
  fontFamily: "$secondary",
  fontWeight: "400",
  color: "$gray200",
});
