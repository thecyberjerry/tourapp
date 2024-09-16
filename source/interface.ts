interface Text {
  title?: string;
  color?: string;
  size?: string;
  weight?: string;
  lineheight?: string;
}

interface Btn extends Text {
  bgcolor?: string;
  link?: string;
}

interface Heading {
  heading: Text;
}
export type { Text, Btn, Heading };
