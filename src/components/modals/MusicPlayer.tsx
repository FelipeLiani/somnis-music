import * as React from 'react';
import { Image, View } from 'react-native';
import { Modal, IconButton, ProgressBar, Text, Menu, Divider, Portal } from 'react-native-paper';
import { ThemedComponents } from '../../theme/ThemedComponents';
import { useTheme } from 'react-native-paper';

interface MusicPlayerProps {
  visible: boolean;
  onDismiss: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ visible, onDismiss }) => {
  const theme = useTheme();
  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={{
          backgroundColor: theme.colors.background,
          padding: 20,
          width: '90%',
          height: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 20,
        }}
        style={{
          margin: 0
        }}>

        <IconButton
          icon="chevron-left"
          size={40}
          iconColor={theme.colors.primary}
          onPress={onDismiss}
          style={{ position: 'absolute', top: '0%', left: '0%' }}
        />

        <View style={{ alignItems: 'center', width: '100%' }}>
          <Image
            source={{ uri: 'https://picsum.photos/700' }}
            style={{ width: 240, height: 240, borderRadius: 20 }}
          />
          <View style={{marginTop: '10%', alignItems: 'center'}}>
            <ThemedComponents.Text highlight textSize='medium'>Título da Música</ThemedComponents.Text>
            <ThemedComponents.Text textSize='small'>Autor da Música</ThemedComponents.Text>
          </View>
          <View style={{ marginTop: '10%', width: '90%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '4%' }}>
              <Text style={{color: theme.colors.tertiary, fontSize: 12}}>0:00</Text>
              <Text style={{color: theme.colors.tertiary, fontSize: 12}}>3:30</Text>
            </View>
            <ProgressBar progress={0.5} color={theme.colors.primary} />
          </View>
          <View style={{ marginTop: '10%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton icon="skip-previous" size={50} iconColor={theme.colors.primary} onPress={() => {}} />
            <IconButton icon="play" size={50} iconColor={theme.colors.primary} onPress={() => {}} />
            <IconButton icon="skip-next" size={50} iconColor={theme.colors.primary} onPress={() => {}} />
          </View>
        </View>

        <View style={{position: 'absolute', bottom: '0%', right: '0%' }}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            contentStyle={{
              backgroundColor: theme.colors.background,
              borderBottomEndRadius: 20
            }}
            anchor={
              <IconButton
                icon="dots-horizontal"
                size={40}
                iconColor={theme.colors.primary}
                onPress={openMenu}
              />
            }>
            <Menu.Item
              onPress={() => { }}
              titleStyle={{color: theme.colors.tertiary}}
              title="Baixar"
              leadingIcon='download-box'
              style={{backgroundColor: 'transparent'}} />
            <Menu.Item
              onPress={() => {}}
              titleStyle={{color: theme.colors.tertiary}}
              title="Salvar"
              leadingIcon='folder-music'
              style={{backgroundColor: 'transparent'}} />
            <Menu.Item
              onPress={() => {}}
              titleStyle={{color: theme.colors.tertiary}}
              title="Compartilhar"
              leadingIcon='link-box-variant'
              style={{backgroundColor: 'transparent'}} />
          </Menu>
        </View>

      </Modal>
    </Portal>
  );
};

export default MusicPlayer;
