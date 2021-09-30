import { Button } from "./style";

export default function GeneralButton({
  insideText,
  colorB = false,
  type = "button",
  onClick,
  position,
  disabledButton,

  ...rest
}) {
  return (
    <Button
      type={type}
      colorB={colorB}
      onClick={onClick}
      position={position}
      disabled={disabledButton}
      {...rest}
    >
      <p>{insideText}</p>
    </Button>
  );
}
