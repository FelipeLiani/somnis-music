import React from 'react';
import { View as ReactNativeView, StyleProp, ViewStyle, SafeAreaView } from 'react-native';
import { useTheme, Avatar, Card as NativePaperCard, Chip as NativePaperChip, Icon as NatitePaperIcon, SegmentedButtons } from 'react-native-paper';
import ThemedButton from './ThemedButton';

interface CommonProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface CardProps extends CommonProps {
  cardLeftContentIcon: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardCover?: string;
  tags?: string[];
  segmentedButtonsValue?: string;
  setSegmentedButtonsValue?: (value: string) => void;
  likeLabel?: string;
  dislikeLabel?: string;
}

function ThemedCard({
  cardLeftContentIcon,
  cardTitle,
  cardSubtitle,
  cardCover,
  children = null,  // Default value for children
  style,
  tags = [],
  segmentedButtonsValue,
  setSegmentedButtonsValue,
  likeLabel = '?', // Default value for like label
  dislikeLabel = '?' // Default value for dislike label
}: CardProps) {
  const theme = useTheme();
  const LeftContent = props => <Avatar.Icon {...props} icon={cardLeftContentIcon} />;
  const [internalValue, setInternalValue] = React.useState('');

  const value = segmentedButtonsValue !== undefined ? segmentedButtonsValue : internalValue;
  const setValue = setSegmentedButtonsValue !== undefined ? setSegmentedButtonsValue : setInternalValue;

  return (
    <NativePaperCard mode='outlined' style={[{ width: '90%' }, style]}>
      <NativePaperCard.Title
        title={cardTitle}
        subtitle={cardSubtitle}
        left={LeftContent}
        titleStyle={{ color: theme.colors.tertiary, fontWeight: 'bold', marginBottom: -8 }}
        subtitleStyle={{ color: theme.colors.tertiary }}
      />
      {cardCover && (
        <NativePaperCard.Cover
          source={{ uri: cardCover }}
          style={{
            width: '90%',
            margin: 10,
            alignSelf: 'center'
          }}
        />
      )}
      <NativePaperCard.Content style={{ alignSelf: 'center', margin: 10 }}>
        {children}
        {tags.length > 0 && (
          <ReactNativeView style={{
            maxWidth: '90%',
            display: 'flex',
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}>
            {tags.map((tag, index) => (
              <NativePaperChip key={index} icon="tag" onPress={() => console.log(`Pressed ${tag}`)} style={{ margin: 2 }}>
                {tag}
              </NativePaperChip>
            ))}
          </ReactNativeView>
        )}
      </NativePaperCard.Content>
      {setSegmentedButtonsValue && (
        <NativePaperCard.Actions style={{ margin: 10 }}>
          <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <SegmentedButtons
              style={{width: '90%'}}
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: 'like',
                  label: likeLabel,
                  icon: 'emoticon-happy',
                  checkedColor: theme.colors.primary,
                  uncheckedColor: theme.colors.secondary
                },
                {
                  value: 'dislike',
                  label: dislikeLabel,
                  icon: 'emoticon-sad',
                  checkedColor: theme.colors.primary,
                  uncheckedColor: theme.colors.secondary
                },
              ]}
            />
          </SafeAreaView>
        </NativePaperCard.Actions>
      )}
    </NativePaperCard>
  );
}

export default ThemedCard;
