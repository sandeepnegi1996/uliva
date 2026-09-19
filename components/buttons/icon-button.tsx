import { Button } from "../common/Button";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  "aria-label": string;
}

export function IconButton({ icon, onClick, variant = "ghost", size = "md", "aria-label": ariaLabel }: IconButtonProps) {
  return <Button variant={variant} size={size} icon={icon} onClick={onClick} aria-label={ariaLabel}><></></Button>;
}

