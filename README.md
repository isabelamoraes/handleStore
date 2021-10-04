<h1 align="center">
  HandleStore
</h1>

<h4 align="center">
  Adicione e gerencie seus produtos no carrinho de compras
</h4>

<p align="center">
  <img alt="Mobile Application Demo" src="https://github.com/isabelamoraes/handleStore/blob/main/demo/handleStore.gif?raw=true" width="60%">
</p>

## Funcionamento
- **Home**: essa tela conta com a listagem de todos os produtos obtidos através da requisição com a API, sendo possível clicar sobre o produto desejado para adicioná-lo ao carrinho.
- **Cart**: através dessa tela é possível visualizar todos os produtos adicionados ao carrinho, atualizar a quantidade de cada item e remover determinado produto do carrinho de compras.

## Tecnologias

-  **[Expo](https://expo.io/)** - permite desenvolver aplicações mobile com React Native e com o Javascript como linguagem de programação. Além de trazer as facilidades proporcionadas pelo Expo, através desse ambiente também é possível realizar o "eject" das pastas nativas (Android e iOS), permitindo uma maior autonomia para realizar customizações nativas.
- **[Expo Vector Icons](https://docs.expo.dev/guides/icons/)**: ao utilizar o Expo, é possível usufruir do Expo Vector Icons, uma coleção que reuni várias bibliotecas de ícones. Para essa aplicação foi utilizado o MaterialIcons, que apresentava todos os ícones desejados para a aplicação.
- **[TypeScript](https://reactnative.dev/docs/typescript)**: o TypeScript foi utilizado com o intuito de adicionar tipagem aos componentes da aplicação, de modo a facilitar a manutenção, aumentar a produtividade (IntelliSense) e evitar erros.
- **[Expo Font e Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)**: possibilitou utilizar as fontes Chivo e Overpass do Google para personalizar a tipografia da aplicação.
- **[App Loading](https://docs.expo.dev/versions/latest/sdk/app-loading/)**: recurso utilizado para manter a aplicação na tela de splash enquanto as fonts são carregadas.
- **[React Navigation](https://reactnavigation.org/)**: essa biblioteca foi utilizada com o intuito de criar a navegação e rotas da aplicação.
- **[Styled Components](https://styled-components.com/)**: biblioteca de estilização baseada em CSS. Ela foi utilizada devido à flexibilidade e dinamismo que oferece, possibilitando utilizar propriedades com base em estados.
- **[React Native Responsive Font Size](https://www.npmjs.com/package/react-native-responsive-fontsize)**: a partir dessa biblioteca foi possível utilizar a função RFValeu, que faz o tratamento do valor inserido, possibilitando trabalhar com diferentes proporções.
- **[Axios](https://github.com/axios/axios)**: essa biblioteca foi utilizada para lidar com requisição HTTP com a API.
- **[Moti](https://moti.fyi/)**: baseado na biblioteca Reanimated v2, o Moti permite criar animações para React Native.
- **[React Native Testing Library](https://github.com/callstack/react-native-testing-library)**: biblioteca de testes que faz o uso do Jest, uma das bibliotecas mais utilizadas para testes em ambiente Java Script.

## Instruções

Para clonar e executar essa aplicação, execute os seguintes comandos:

```bash
# Clonar o repositório
$ git clone https://github.com/isabelamoraes/handleStore.git handleStore

# Acessar a pasta do projeto
$ cd handleStore

# Installar as dependências
$ yarn

# Executar o projeto com o Expo
$ expo start

# Executar o teste
$ yarn test

```

## Design da Aplicação

De modo a auxiliar o processo de desenvolvimento do aplicativo, o design foi projetado no Figma e o modelo está disponível para visualização nesse [link](https://www.figma.com/file/26iUxO1ps0xQ8Mo2bZtQNU/HandleStore?node-id=0%3A1).