import { getTextInCurlyBrackets } from "../../helpers/getTextInCurlyBrackets";
import LabelIcon from "../label-icon/LabelIcon";

interface CustomLabelProps {
  text: string;
  withIcon?: boolean;
}

export default function LabelContent({ text, withIcon }: CustomLabelProps) {
  const labelText = text.split("}}")[1].trim();

  if (withIcon) {
    const textInCurlyBrackets = getTextInCurlyBrackets(text);

    if (textInCurlyBrackets) {
      const [color, iconName] = textInCurlyBrackets.split(/(?=[A-Z])/);

      return (
        <span className="flex items-center gap-x-4">
          <LabelIcon iconName={iconName} color={color} />
          {labelText}
        </span>
      );
    }
  } else {
    return labelText;
  }
}
