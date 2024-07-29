import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme, Portal, Dialog as NativePaperDialog } from 'react-native-paper';
import ThemedText from './ThemedText';
import ThemedButton from './ThemedButton';

interface CommonProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface DialogProps extends CommonProps {
  dialogVisible?: boolean;
  hideDialog?: () => void;
  dialogMode?: 'Alert' | 'Confirmation';
  dialogTitle?: string;
}

function ThemedDialog({
  dialogVisible,
  hideDialog,
  dialogMode,
  dialogTitle,
  children,
  style
}: DialogProps) {
  const theme = useTheme();

  return (
    <Portal>
      <NativePaperDialog
        visible={dialogVisible}
        onDismiss={hideDialog}
        style={[{ backgroundColor: theme.colors.background }, style]}
      >
        <NativePaperDialog.Title style={{ color: theme.colors.secondary }}>
          {dialogTitle || (dialogMode === 'Alert' ? 'Alerta' : 'Confirmação')}
        </NativePaperDialog.Title>
        <NativePaperDialog.Content>
          {children || (
            <ThemedText textSize='small'>
              {dialogMode === 'Alert' ? 'Alerta simples.' : 'Você tem certeza que deseja continuar?'}
            </ThemedText>
          )}
        </NativePaperDialog.Content>
        <NativePaperDialog.Actions style={{ justifyContent: 'flex-end' }}>
          {dialogMode === 'Confirmation' && (
            <ThemedButton onPress={hideDialog} buttonMode='tertiary' buttonSize='medium' style={{ margin: 4 }}>
              Não
            </ThemedButton>
          )}
          <ThemedButton onPress={hideDialog} buttonMode='primary' buttonSize={dialogMode === "Confirmation" ? 'small' : 'medium'} style={{ margin: 4 }}>
            {dialogMode === 'Alert' ? 'Ok' : 'Sim'}
          </ThemedButton>
        </NativePaperDialog.Actions>
      </NativePaperDialog>
    </Portal>
  );
}

export default ThemedDialog;
