import React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { useTheme, Text as NativePaperText } from 'react-native-paper';

interface CommonProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface TextProps extends CommonProps {
  highlight?: boolean;
  onPress?: (((event: GestureResponderEvent) => void) & Function);
  textSize?: "small" | "medium" | "large";
  justify?: boolean;
}

function ThemedText({ children, style, highlight, onPress, textSize, justify }: TextProps) {
  const theme = useTheme();
  return (
    <NativePaperText
      variant={
        textSize === "medium" ? "headlineMedium" :
        textSize === "large" ? "displayMedium" :
        "titleMedium"
      }
      onPress={onPress}
      style={[
        {
          color: highlight ? theme.colors.secondary : theme.colors.tertiary,
          fontWeight: highlight ? 'bold' : 'normal',
          textAlign: justify ? 'justify' : 'left',
        },
        style,
      ]}
    >
      {children}
    </NativePaperText>
  );
}

export default ThemedText;
