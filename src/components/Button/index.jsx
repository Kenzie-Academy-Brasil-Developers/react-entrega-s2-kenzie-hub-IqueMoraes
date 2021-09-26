import { Button } from "./style";

export default function GeneralButton({
  insideText,
  colorB = false,
  type = "button",
  onClick,
  ...rest
}) {
  return (
    <Button type={type} colorB={colorB} onClick={onClick} {...rest}>
      <p>{insideText}</p>
    </Button>
  );
}
