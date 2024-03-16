import { TextInput as PepperTextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native';

type Props = {
  textProps: TextInputProps & { selectionColor?: string; cursorColor?: string };
};
export default function TextInput({ textProps }: Props) {
  return <PepperTextInput {...textProps} />;
}
