import React from 'react';
import { useState } from 'react';
import { View as ReactNativeView, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';
import {
  Text as NativePaperText,
  TextInput as NativePaperTextInput
} from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';
import {
  useTheme,
  Portal,
  Dialog as NativePaperDialog,
  Button as NativePaperButton,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  highlight?: boolean;
  onPress?: (((event: GestureResponderEvent) => void) & Function);
  variant?: VariantProp<never>;
  textSize?: "small" | "medium" | "large";
  label?: string;
  value?: string;
  onChangeText?: (((text: string) => void) & Function);
  inputMode?: "primary" | "secondary";
  inputKeyboardType?: "text" | "number";
  secureEntry?: boolean;
  buttonSize?: "small" | "medium" | "large";
  buttonIconName?: string;
  inputIconName?: string;
  buttonMode?: "primary" | "secondary" | "tertiary" | "text";
  buttonDisabled?: boolean;
  dialogVisible?: boolean;
  hideDialog?: () => void;
  dialogMode?: 'Alert' | 'Confirmation';
  dialogTitle?: string
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

function Text({ children, style, highlight, onPress, textSize }: Props) {
  const theme = useTheme();
  return (
    <NativePaperText
      variant={textSize == "medium" ? "headlineMedium" : textSize == "large" ? "displayMedium" : "titleMedium"}
      onPress={onPress}
      style={[
        {
          color: highlight ? theme.colors.secondary : theme.colors.tertiary,
          fontWeight: highlight ? 'bold' : 'normal'
        },
        style
      ]}>
      {children}
    </NativePaperText>
  );
}

export default function TextInput({
  style,
  label,
  value,
  onChangeText,
  inputMode,
  inputKeyboardType,
  inputIconName,
  secureEntry,
}: Props) {
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
        {
          backgroundColor: theme.colors.background,
        },
        style,
      ]}
    />
  );
}

function Button({ children, style, buttonDisabled, buttonMode, buttonSize, onPress, buttonIconName }: Props) {
  return (
    <NativePaperButton
      disabled={buttonDisabled}
      mode={ buttonMode == "secondary" ? "contained-tonal" :
             buttonMode == "tertiary" ? "outlined" :
             buttonMode == "text" ? "text" :
             "contained"
      }
      style={[
        {
          width: buttonSize == "small" ? "30%" : buttonSize == "medium" ? "60%" : "90%",
          margin: 20
        },
        style
      ]}
      //loading={loading}
      onPress={ onPress }
      icon={({ color, size }) => <Icon name={ buttonIconName } size={size} color={color} />}
    >
        {children}
    </NativePaperButton>
  )
}

function Dialog({ dialogVisible, hideDialog, dialogMode, dialogTitle, children }: Props) {
  const theme = useTheme();

  return (
    <Portal>
      <NativePaperDialog visible={dialogVisible} onDismiss={hideDialog} style={{ backgroundColor: theme.colors.background }}>
        <NativePaperDialog.Title style={{ color: theme.colors.secondary }}>
          {dialogTitle || (dialogMode === 'Alert' ? 'Alerta' : 'Confirmação')}
        </NativePaperDialog.Title>
        <NativePaperDialog.Content>
          {children || (
            <Text textSize='small'>
              {dialogMode === 'Alert' ? 'Alerta simples.' : 'Você tem certeza que deseja continuar?'}
            </Text>
          )}
        </NativePaperDialog.Content>
        <NativePaperDialog.Actions style={{ justifyContent: 'flex-end' }}>
          {dialogMode === 'Confirmation' && (
            <Button onPress={hideDialog} buttonMode='tertiary' buttonSize='medium' style={{ margin: 0 }}>
              Não
            </Button>
          )}
          <Button onPress={hideDialog} buttonMode='primary' buttonSize={dialogMode == "Confirmation" ? 'small' : 'medium'} style={{ margin: 0 }}>
            {dialogMode === 'Alert' ? 'Ok' : 'Sim'}
          </Button>
        </NativePaperDialog.Actions>
      </NativePaperDialog>
    </Portal>
  );
}

export const ThemedComponents = {
  View,
  Text,
  TextInput,
  Button,
  Dialog
};
