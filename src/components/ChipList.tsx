import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper'; // Certifique-se de que você está usando o pacote correto para Chip
import { ThemedComponents } from '../theme/ThemedComponents';
import { useTheme } from 'react-native-paper';

type ChipItem = {
  text: string;
  icon: string;
  onPress?: () => void;
};

type Props = {
  title: string;
  chips: ChipItem[];
};

const ChipList: React.FC<Props> = ({ title, chips }) => {
  const theme = useTheme();

  return (
    <View style={{ alignSelf: 'flex-start', marginLeft: 20, marginBottom: 10 }}>
      <ThemedComponents.Text
        highlight
        style={{ color: theme.colors.primary }}
      >
        {title}
      </ThemedComponents.Text>
      <View
        style={{
          maxWidth: '90%',
          display: 'flex',
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {chips.map((chip, index) => (
          <Chip
            key={index}
            icon={chip.icon}
            onPress={chip.onPress}
            style={{ margin: 2, backgroundColor: theme.colors.tertiary }}
          >
            {chip.text}
          </Chip>
        ))}
      </View>
    </View>
  );
};

export default ChipList;
