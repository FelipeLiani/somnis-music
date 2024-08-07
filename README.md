# Introdução

## Visão Geral do Porjeto

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Objetivo do Documento

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

# Estrutura do Projeto

## Estrutura de Pastas e descrição de Arquivos

```bash
*my-project/
├── assets/         # Pasta para armazenar recursos estáticos do projeto.
│   ├── icons/      # Subpasta para ícones utilizados na aplicação.
├── src/            # Pasta principal para o código-fonte do projeto.
│   ├── components/ # Componentes reutilizáveis.
│   ├── config/     # Configurações do projeto, como variáveis de ambiente e arquivos de configuração.
│   ├── context/    # Contextos do React para gerenciar estado global.
│   ├── lib/        # Biblioteca de funções e utilitários gerais.
│   ├── navigation/ # Arquivos relacionados à configuração e gerenciamento da navegação dentro do aplicativo.
│   ├── screens/    # Telas do aplicativo, que representam as diferentes páginas ou views.
│   ├── services/   # Serviços para interagir com APIs externas, autenticação e outras funcionalidades backend.
│   └── theme/      # Arquivos relacionados ao tema e estilos do aplicativo.
├── App.js          # Arquivo principal que configura e inicializa o aplicativo.
├── app.json        # Arquivo de configuração do Expo que define as configurações do projeto.
├── package.json    # Arquivo que lista as dependências do projeto e scripts para execução de comandos.*
```

### src/components/

1. **modals/**
    - **MusicPlayer.tsx**

        O componente `MusicPlayer` é um modal que exibe um player de música utilizando a biblioteca React Native Paper. Quando visível, o modal mostra uma imagem de capa do álbum, o título e o autor da música, um progresso de reprodução representado por uma barra, e botões de controle de reprodução (anterior, play, próximo). Também inclui um menu com opções para "Baixar", "Salvar" e "Compartilhar" que é acessível através de um ícone de três pontos. O componente utiliza o tema do aplicativo para garantir consistência visual com o restante da interface.

2. **ChipList.tsx**

    O componente `ChipList` exibe uma lista de chips interativos com ícones e textos, organizados horizontalmente em uma linha e que se ajustam automaticamente em múltiplas linhas conforme necessário. Ele recebe um título e um array de itens de chip, onde cada item pode ter um texto, um ícone e uma função de clique opcional. O componente utiliza o tema do aplicativo para estilizar os chips e o título, garantindo uma aparência consistente com o restante da interface. O layout é ajustado para ocupar até 90% da largura disponível, com margem para manter um espaçamento adequado.

3. **PlaylistCarousel.tsx**

    O componente `PlaylistCarousel` exibe um carrossel horizontal de playlists, cada uma representada por um cartão que inclui uma imagem de capa, um título e um subtítulo. O componente recebe um título para a seção e uma lista de playlists, que são exibidas em um `FlatList` horizontal com rolagem infinita e ajuste automático do intervalo de snapping. O título da seção é exibido acima do carrossel, enquanto cada cartão de playlist é estilizado com uma imagem quadrada e margens adequadas. A largura da tela é utilizada para calcular o espaço ao redor do carrossel, garantindo um layout visualmente agradável. O `PlaylistCard`, um componente interno, é responsável pela apresentação individual de cada playlist.


### src/context/

1. **AuthContext.tsx**

    O arquivo `AuthContext.tsx` define um contexto de autenticação para gerenciar o estado da sessão de usuário. Utilizando o Supabase para autenticação, o contexto `AuthContext` fornece o estado da sessão atual e uma função para atualizá-la. O `AuthProvider` carrega a sessão do armazenamento local ao inicializar, ou recupera a sessão atual do Supabase se não houver sessão salva. Ele também escuta mudanças no estado de autenticação e atualiza o estado da sessão e o armazenamento local conforme necessário. O hook `useAuth` facilita o acesso a esse contexto dentro dos componentes do aplicativo, garantindo que o gerenciamento da autenticação seja centralizado e acessível em toda a aplicação.

2. **LoadingContext.tsx**

    O `LoadingContext.tsx` define um contexto para gerenciar e compartilhar o estado de carregamento. Ele cria um contexto `LoadingContext` que mantém o estado booleano `isLoading` e uma função `setLoading` para atualizar esse estado. O `LoadingProvider` é um componente que fornece o contexto a seus filhos, permitindo que qualquer componente dentro dele acesse e modifique o estado de carregamento. O hook `useLoading` facilita o acesso a esse contexto, garantindo que seja utilizado dentro de um `LoadingProvider`, caso contrário, lança um erro.

3. **ThemeContext.tsx**

    O `ThemeContext.tsx` define um contexto para gerenciar e alternar entre temas em uma aplicação React. Ele cria um contexto `ThemeContext` que armazena o tema atual (`theme`), uma função para alternar entre temas (`toggleTheme`) e uma flag (`isDarkTheme`) indicando se o tema escuro está ativado. O `ThemeProvider` carrega o tema salvo anteriormente do armazenamento ao inicializar, e salva a preferência do tema sempre que ela muda. O hook `useThemeContext` permite o acesso ao contexto, garantindo que seja utilizado dentro de um `ThemeProvider`, caso contrário, lança um erro.


### src/lib/

1. **supabase.ts**

    O `Supabase.ts` configura e inicializa o cliente Supabase para uma aplicação React Native. Ele importa o `AppState` do `react-native` e `AsyncStorage` do `@react-native-async-storage/async-storage` para gerenciar a autenticação e o armazenamento de sessões. Utilizando as variáveis de ambiente para obter a URL e a chave anônima do Supabase, o cliente é criado com opções que incluem a persistência da sessão e a autoatualização do token. Adicionalmente, o arquivo configura o comportamento de atualização automática do token com base no estado da aplicação, ativando a atualização quando o estado é 'active' e desativando quando o estado muda.

2. **youtube-search.ts**

    O `youtube-search.ts` define uma função para realizar buscas no YouTube usando a biblioteca `youtube-search` e a chave da API armazenada nas variáveis de ambiente. Ele configura opções para a busca, como o número máximo de resultados, e utiliza a chave da API do YouTube para autenticação. A função `searchYouTube` faz uma pesquisa assíncrona com base em uma consulta fornecida e retorna um objeto com os resultados da pesquisa. Se ocorrer algum erro durante a busca, ele é capturado e tratado, fornecendo mensagens de erro apropriadas para diferentes cenários de falha.


### src/navigation/

1. **AppTabs.tsx**

    O `AppTabs.tsx` configura uma navegação por abas utilizando `react-navigation` e `react-native-paper`. Ele define um `BottomTabNavigator` com quatro abas: "Ínicio", "Pesquisar", "Biblioteca" e "Ajustes", cada uma associada a um componente de tela específico. A aparência das abas é personalizada com ícones e estilos que seguem o tema atual da aplicação, obtido do contexto de tema. O componente `BottomNavigation.Bar` do `react-native-paper` é utilizado para renderizar a barra de navegação inferior, com opções de estilo adaptáveis ao tema, e com comportamento de navegação e interação configurado para lidar com a navegação entre abas e ações de usuário.

2. **LoginStack.tsx**

    O `LoginStack.tsx` configura a navegação de telas relacionadas ao login usando o `@react-navigation/native` e o `@react-navigation/native-stack`. Ele cria um stack navigator com três telas: `LoginScreen`, `ForgotPasswordScreen` e `RegisterScreen`, que representam as etapas de login, recuperação de senha e registro, respectivamente. O tema das telas é aplicado dinamicamente através do `useThemeContext` e das opções de cabeçalho temáticas fornecidas por `themedHeaderOptions`. O `NavigationContainer` é utilizado com a propriedade `independent={true}` para permitir uma navegação independente do contexto da aplicação.

3. **MainStack.tsx**

    O arquivo `MainStack.tsx` define um componente de navegação usando a biblioteca `@react-navigation/native`. Ele configura um `NavigationContainer` que envolve um `Stack.Navigator`, o qual gerencia a navegação entre telas no estilo de pilha. O `Stack.Navigator` é iniciado com a tela "App", que é exibida pelo componente `AppTabs`. A opção `headerShown: false` indica que o cabeçalho padrão do navegador não será exibido para a tela "App".


### screens

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

### services

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

### theme

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
