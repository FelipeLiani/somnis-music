import React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { Button as NativePaperButton, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CommonProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface ButtonProps extends CommonProps {
  buttonDisabled?: boolean;
  buttonMode?: "primary" | "secondary" | "tertiary" | "text";
  buttonSize?: "small" | "medium" | "large";
  onPress?: (((event: GestureResponderEvent) => void) & Function);
  buttonIconName?: string;
}

function ThemedButton({
  children,
  style,
  buttonDisabled,
  buttonMode,
  buttonSize,
  onPress,
  buttonIconName
}: ButtonProps) {
  const theme = useTheme();

  return (
    <NativePaperButton
      disabled={buttonDisabled}
      mode={
        buttonMode === "secondary" ? "contained-tonal" :
        buttonMode === "tertiary" ? "outlined" :
        buttonMode === "text" ? "text" :
        "contained"
      }
      style={[
        {
          width: buttonSize === "small" ? "30%" : buttonSize === "medium" ? "60%" : "90%",
          margin: 20,
        },
        style,
      ]}
      onPress={onPress}
      icon={({ color, size }) => <Icon name={buttonIconName} size={size} color={color} />}
    >
      {children}
    </NativePaperButton>
  );
}

export default ThemedButton;
