import { useRef, useState, useEffect } from "react";
import { ToastRoot, ToastDescription } from "./styles";
import * as ToastRadix from "@radix-ui/react-toast";

export interface ToastProps {
  title: string;
  description: string;
}

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.625 4.375L4.375 15.625"
      stroke="#A9A9B2"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.625 15.625L4.375 4.375"
      stroke="#A9A9B2"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Toast = ({ title, description }: ToastProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ToastRadix.Provider swipeDirection="right">
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Acione toast
      </button>
      <ToastRoot className="ToastRoot" open={open} onOpenChange={setOpen}>
        <ToastRadix.Title className="ToastTitle">
          {title}
          <ToastRadix.Close className="ToastAction">
            <CloseIcon />
          </ToastRadix.Close>
        </ToastRadix.Title>
        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>
      <ToastRadix.Viewport className="ToastViewport" />
    </ToastRadix.Provider>
  );
};

Toast.displayName = "Toast";
