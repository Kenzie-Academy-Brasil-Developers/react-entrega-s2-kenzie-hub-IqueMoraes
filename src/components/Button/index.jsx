import { Button } from "./style";

export default function GeneralButton({
  insideText,
  colorB = false,
  type = "button",
  onClick,
  position,

  ...rest
}) {
  return (
    <Button
      type={type}
      colorB={colorB}
      onClick={onClick}
      position={position}
      {...rest}
    >
      <p>{insideText}</p>
    </Button>
  );
}
