import { ComponentType } from 'react';
import { Text as NText } from 'react-native';

type NTextProps = React.ComponentProps<typeof NText>;
type WebTextProps = NTextProps & {
  href?: string;
};

export const Text = NText as ComponentType<WebTextProps>;
