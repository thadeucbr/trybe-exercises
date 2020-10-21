# Bloco 6: HTML e CSS: Forms, Flexbox e Responsivo

HTML & CSS - Forms: vamos aprender sobre formulários em HTML, que são uma forma de enviar informações para outra página do seu site ou para um servidor.

Bibliotecas JavaScript e Frameworks CSS: como adicionar bibliotecas JavaScript e CSS aos seus sites.
Existem literalmente milhares de bibliotecas JavaScript e CSS disponíveis gratuitamente na Internet, com os mais diversos propósitos. À medida que os sites que você desenvolve se tornam mais complexos, será preciso encontrar e integrar ferramentas que facilitem e acelerem o desenvolvimento.

------------


**Introdução - CSS Flexbox:** Desenvolver páginas web responsivas é uma tarefa muito importante, pois as pessoas acessam a Internet atráves de vários dispositivos com telas de diferentes tamanhos.

Uma das abordagens para criar páginas responsivas é dividir a página em segmentos lógicos, usando cálculos baseados em porcentagem e, em seguida, ajustando os elementos para caberem nesse espaço definido.

Infelizmente, a prática não é tão simples quanto descrito acima. Isso acontece porque os elementos não se assentam por padrão, próximos um do outro, como gostaríamos - pelo menos não os que têm a propriedade display configurada para ser block. 

Um outro problema comum é, depois de tudo configurado, a adição de margens e definição da propriedade float voltar a desconfigurar toda a estrutura inicialmente proposta.

Como descrito acima, criar páginas responsivas utilizando float e posicionamento é um trabalho complicado.

Para tornar esse trabalho mais fácil, você irá aprender a utilizar o CSS Flexbox, que é um módulo de layout que torna fácil o desenvolvimento de estruturas responsivas.

Para isso, dividimos o conteúdo em duas partes:
Primeiro você aprenderá sobre as propriedades flex-direction, flex-wrap, flex-flow, reverse, justify-content, align-items e align-content. Todas essas propriedades serão aplicadas em containers.

**CSS Flexbox - parte I**:
Flexbox é um módulo que visa a fornecer uma maneira mais eficiente de organizar, alinhar e distribuir espaço entre os itens em um container, mesmo quando seu tamanho é desconhecido.

Um container pode ser qualquer elemento HTML que contenha outros elementos, como, por exemplo, um div ou section. Esse elemento pai é chamado de container, e os elementos filhos serão os itens.

A ideia principal por trás do "layout flexível" é dar ao container a habilidade de alterar o tamanho (width e height) e a ordem dos itens para melhor ocupar o espaço disponível. Essa habilidade nos permite acomodar uma página em todos os tipos de dispositivos e tamanhos de tela.

**CSS Flexbox - parte II**:
Agora é hora de aprender sobre as propriedades que atuam nos items.

------------


**CSS Responsivo - Mobile First:** Construir páginas responsivas é uma habilidade fundamental para pessoas que trabalham com desenvolvimento front-end hoje em dia. Quando falamos sobre páginas responsivas, o termo "mobile first" - layout voltado para dispositivos móveis - vem à cabeça imediatamente.

Em teoria, é mais fácil construir um layout "mobile first" quando você está começando o desenvolvimento, pois você não tem que se preocupar muito sobre funcionalidades complexas que podem entrar em telas grandes de desktop.

Você vai aprender como utilizar media queries para mostrar um layout diferente em tamanhos de tela diferentes.

Exemplo:

Layout 1 para telas grandes: desktops, laptops, etc;

Layout 2 para telas médias: tablets, telefones com tela grande (Samsung Note), etc;

Layout 3 para telas pequenas: smartphones.

Media queries são bastante utilizadas no design responsivo para mostrar diferentes layouts para diferentes telas, dependendo do seu tamanho e/ou orientação. A principal razão para isso é que alguns layouts podem parecer "estranhos" (ou até completamente quebrados) em telas muito estreitas, ou muito largas.
