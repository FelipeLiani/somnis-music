import React from 'react';
import { View as ReactNativeView, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

interface CommonProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function ThemedView({ children, style }: CommonProps) {
  const theme = useTheme();
  return (
    <ReactNativeView
      style={[
        { backgroundColor: theme.colors.background },
        style,
      ]}
    >
      {children}
    </ReactNativeView>
  );
}

export default ThemedView;
