# Bloco 9: JavaScript Assíncrono e Promises

**JavaScript Assíncrono e Callbacks:** Páginas da web não existem sozinhas. Elas carregam imagens, iframes, conteúdo ou recuperam todo tipo de informações de outros lugares que não seus próprios servidores. E depender de algo externo ao seu sistema para fazer algo traz uma problemática: e se o serviço do qual eu dependo sair do ar? E se os servidores dele estiverem lentos? O que acontece com minha página?

Numa lógica normal, sequencial de programação, sua página esperaria o serviço dar retorno ou voltar ao ar para continuar. Ou seja, a página ficaria quebrada, ou teria todo o seu carregamento freado em função de um problema totalmente fora do seu controle. Para lidar com esse problema e outros de natureza similar, existe um conceito que é muito poderoso e presente no JavaScript: a assincronicidade. Em vez de o programa ser carregado todo em sequência, uma linha após a outra, linhas que podem trazer esse tipo de problema podem "ficar carregando", enquanto o resto do seu programa executa normalmente. A execução dessa linha, a espera pela disponibilidade desse serviço, corre paralelamente ao desenvolver do restante do código. É uma execução assíncrona. E isso tem muito poder.

Pareceu interessante?! Pois bem. Para começar, nesta aula você vai aprender dois conceitos importantes:

Operações assíncronas;
callbacks.

------------

**JavaScript Promises:** Callbacks são utilizadas em toda parte no JavaScript. A depender da complexidade do que você quer fazer, no entanto, as callbacks podem, muito rápido, ficar confusas e pouco legíveis. 

Para tornar o código mais compreensível, surgem as Promises, que você estudará na aula de hoje. E, com as promises, você fará uma pequena página web que colhe dados de um serviço terceiro utilizando a API dele.

