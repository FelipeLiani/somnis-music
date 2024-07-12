import React from 'react';
import { View as ReactNativeView, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';
import {
  Text as NativePaperText,
  TextInput as NativePaperTextInput
} from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';
import { useTheme } from 'react-native-paper';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  highlight?: boolean;
  onPress?: (((event: GestureResponderEvent) => void) & Function);
  variant?: VariantProp<never>;
  label?: string;
  value?: string;
  onChangeText?: (((text: string) => void) & Function);
  mode?: "flat" | "outlined";
  secureTextEntry?: boolean
}

function View({ children, style }: Props) {
  const theme = useTheme();
  return (
    <ReactNativeView
      style={[
        { backgroundColor: theme.colors.background },
        style
      ]}
    >
      {children}
    </ReactNativeView>
  );
}

function Text({ children, style, highlight, onPress, variant }: Props) {
  const theme = useTheme();
  return (
    <NativePaperText
      variant={variant}
      onPress={onPress}
      style={[
        {
          color: highlight ? theme.colors.secondary : theme.colors.tertiary,
          fontWeight: highlight ? 'bold' : 'normal'
        },
        style
      ]}
    >
      {children}
    </NativePaperText>
  );
}

function TextInput({ style, label, value, onChangeText, mode, secureTextEntry }: Props) {
  const theme = useTheme();
  return (
    <NativePaperTextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode={mode}
      secureTextEntry={secureTextEntry ? true : false}
      outlineColor={theme.colors.tertiary}
      textColor={theme.colors.tertiary}
      style={style}/>
  )
}

export const ThemedComponents = {
  View,
  Text,
  TextInput
};
