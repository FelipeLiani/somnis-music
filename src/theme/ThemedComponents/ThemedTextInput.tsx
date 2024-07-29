import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme, TextInput as NativePaperTextInput } from 'react-native-paper';

interface CommonProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface TextInputProps extends CommonProps {
  label?: string;
  value?: string;
  onChangeText?: (((text: string) => void) & Function);
  inputMode?: "primary" | "secondary";
  inputKeyboardType?: "text" | "number";
  secureEntry?: boolean;
  inputIconName?: string;
}

function ThemedTextInput({
  style,
  label,
  value,
  onChangeText,
  inputMode,
  inputKeyboardType,
  inputIconName,
  secureEntry,
}: TextInputProps) {
  const theme = useTheme();
  const [isSecure, setIsSecure] = useState(secureEntry);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <NativePaperTextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode={inputMode === 'secondary' ? 'flat' : 'outlined'}
      keyboardType={inputKeyboardType === 'number' ? 'decimal-pad' : 'default'}
      secureTextEntry={isSecure}
      numberOfLines={0}
      right={
        inputIconName ? (
          <NativePaperTextInput.Icon icon={inputIconName} />
        ) : secureEntry ? (
          <NativePaperTextInput.Icon
            icon="eye"
            color={isSecure ? null : theme.colors.tertiary}
            onPress={toggleSecureEntry}
          />
        ) : null
      }
      outlineColor={theme.colors.tertiary}
      textColor={theme.colors.tertiary}
      style={[
        { backgroundColor: theme.colors.background },
        style,
      ]}
    />
  );
}

export default ThemedTextInput;
