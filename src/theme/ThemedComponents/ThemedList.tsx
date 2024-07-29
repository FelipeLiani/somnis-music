import * as React from 'react';
import { View } from 'react-native';
import { List, useTheme } from 'react-native-paper';

interface AccordionItem {
  title: string;
  icon: string;
  onPress?: () => void;
}

interface AccordionData {
  title: string;
  icon: string;
  items: AccordionItem[];
}

interface ThemedListProps {
  sectionTitle?: string;
  accordions?: AccordionData[];
  ListMode?: 'Nested Items' | 'Unique Items';
}

const ThemedList: React.FC<ThemedListProps> = ({ sectionTitle, accordions, ListMode = 'Nested Items' }) => {
  const theme = useTheme();

  return (
    <View style={{ width: '100%' }}>
      {ListMode === 'Nested Items' && sectionTitle && accordions && accordions.length > 0 && (
        <List.Section title={sectionTitle} titleStyle={{ color: theme.colors.primary, fontWeight: 'bold' }}>
          {accordions.map((accordion, index) => (
            <List.Accordion
              key={index}
              title={accordion.title}
              style={{ borderRadius: 20 }}
              titleStyle={{ color: theme.colors.secondary, fontWeight: 'bold' }}
              descriptionStyle={{ color: theme.colors.tertiary, fontSize: 12 }}
              left={props => <List.Icon {...props} icon={accordion.icon} color={theme.colors.primary} />}
            >
              {accordion.items.map((item, idx) => (
                <List.Item
                  key={idx}
                  title={item.title}
                  style={{ marginLeft: 30 }}
                  titleStyle={{ color: theme.colors.tertiary }}
                  left={props => <List.Icon {...props} icon={item.icon} color={theme.colors.secondary} />}
                  right={props => <List.Icon {...props} icon={'arrow-right'} color={theme.colors.secondary} />}
                  onPress={item.onPress}
                />
              ))}
            </List.Accordion>
          ))}
        </List.Section>
      )}
      {ListMode === 'Unique Items' && accordions && accordions.length > 0 && (
        <List.Section title={sectionTitle} titleStyle={{ color: theme.colors.primary, fontWeight: 'bold' }}>
          {accordions.flatMap((accordion, accordionIdx) =>
            accordion.items.map((item, itemIdx) => (
              <List.Item
                key={`${accordionIdx}-${itemIdx}`}
                title={item.title}
                style={{ borderRadius: 20 }}
                titleStyle={{ color: theme.colors.tertiary }}
                left={props => <List.Icon {...props} icon={item.icon} color={theme.colors.secondary} />}
                right={props => <List.Icon {...props} icon={'arrow-right'} color={theme.colors.secondary} />}
                onPress={item.onPress}
              />
            ))
          )}
        </List.Section>
      )}
    </View>
  );
};

export default ThemedList;
