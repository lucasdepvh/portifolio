# Prompt de Implementacao para Codex

Voce deve criar uma landing page de portfolio pessoal/profissional usando apenas HTML, CSS e JavaScript puros. Nao use frameworks, bibliotecas externas, React, Vue, Angular, Tailwind, Bootstrap, jQuery, build tools ou dependencias via CDN, exceto fontes do Google Fonts se necessario. A entrega deve funcionar abrindo o arquivo `index.html` diretamente no navegador.

## Objetivo

Construir uma landing page moderna, responsiva e profissional para apresentar um desenvolvedor/portfolio. A pagina deve transmitir dominio tecnico, organizacao, clareza visual e foco em conversao para contato.

Crie os seguintes arquivos dentro da pasta do projeto:

- `index.html`
- `style.css`
- `script.js`

## Regras tecnicas obrigatorias

- Usar HTML semantico.
- Usar CSS puro com variaveis em `:root`.
- Usar JavaScript puro, sem bibliotecas.
- Garantir responsividade para desktop, tablet e mobile.
- Priorizar acessibilidade: contraste adequado, textos legiveis, foco visivel em links e botoes, `aria-label` onde fizer sentido.
- Evitar codigo duplicado e manter a estrutura facil de entender.
- Nao criar textos explicativos dentro da interface sobre como a pagina funciona.
- Nao usar cards dentro de cards.
- Nao usar layout com texto quebrando ou sobrepondo outros elementos.
- Nao usar animacoes pesadas; todas devem ser suaves e discretas.

## Identidade visual

Use um visual escuro, tecnico e sofisticado, com contraste forte e detalhes em cor de destaque.

### Paleta sugerida

- Fundo principal: `#080B12`
- Fundo secundario: `#101624`
- Superficie: `#151D2E`
- Texto principal: `#F5F7FA`
- Texto secundario: `#AAB4C5`
- Linha/borda: `rgba(255, 255, 255, 0.10)`
- Destaque principal: `#36D399`
- Destaque secundario: `#5B8CFF`
- Alerta/realce pontual: `#FBBF24`

Evite deixar a pagina inteira parecendo uma paleta de uma unica cor. Use os destaques com moderacao para botoes, links, indicadores e detalhes.

### Tipografia

- Fonte principal: `Inter`, `Manrope` ou `system-ui`.
- Titulos com peso forte, mas sem exagero.
- Texto de apoio com tamanho confortavel e boa altura de linha.
- Nao usar letter-spacing negativo.
- Nao escalar fonte com viewport width.

## Estrutura da pagina

### 1. Header fixo

Criar um header no topo com:

- Nome/marca pessoal do portfolio.
- Navegacao com links para: Inicio, Sobre, Stack, Projetos, Experiencia e Contato.
- Botao de contato.
- Menu mobile com icone hamburguer.

Comportamento:

- Header fixo no topo.
- Fundo com leve transparencia e blur.
- No mobile, abrir um menu vertical ao tocar no botao.
- Ao clicar em qualquer item do menu mobile, fechar o menu.

### 2. Hero

Primeira dobra da pagina com:

- Nome do profissional ou placeholder: `Lucas DepvH`.
- Titulo forte, por exemplo: `Desenvolvedor Full Stack focado em interfaces modernas e sistemas eficientes.`
- Texto curto explicando valor profissional.
- Dois botoes principais:
  - `Ver projetos`
  - `Entrar em contato`
- Pequeno bloco de indicadores, como:
  - `Projetos reais`
  - `Front-end`
  - `Back-end`
  - `Automacoes`

O hero deve ocupar bem a primeira tela, mas deixar uma pista visual da proxima secao aparecendo.

### 3. Sobre

Secao com texto objetivo sobre o profissional:

- Quem e.
- Que tipo de problema resolve.
- Como trabalha.
- Diferenciais tecnicos e comportamentais.

Inclua tambem uma lista curta de pontos fortes, como:

- Desenvolvimento de interfaces responsivas.
- Integracao com APIs.
- Organizacao de codigo.
- Foco em experiencia do usuario.

### 4. Stack

Secao com tecnologias organizadas por categorias:

- Front-end: HTML, CSS, JavaScript.
- Back-end: Node.js, Ruby on Rails ou outra stack desejada.
- Banco de dados: PostgreSQL, MySQL, SQLite.
- Ferramentas: Git, GitHub, Figma, VS Code.

Use badges ou blocos compactos, com bom espacamento e leitura rapida.

### 5. Projetos

Criar uma secao de portfolio com filtros em JavaScript.

Filtros:

- Todos
- Front-end
- Back-end
- Full Stack

Cada projeto deve ter:

- Titulo.
- Categoria.
- Descricao curta.
- Lista de tecnologias.
- Links: `Demo` e `Codigo`.

Use dados ficticios realistas e deixe facil substituir depois.

Comportamento:

- Ao clicar em um filtro, mostrar apenas os projetos daquela categoria.
- Destacar visualmente o filtro ativo.
- A transicao entre projetos deve ser suave.

### 6. Experiencia ou processo

Criar uma secao com timeline ou etapas de trabalho:

- Descoberta do problema.
- Planejamento da solucao.
- Desenvolvimento.
- Testes e refinamento.
- Entrega.

O layout deve funcionar bem no mobile sem ficar apertado.

### 7. Depoimentos ou resultados

Criar uma secao opcional com 2 ou 3 cards simples contendo:

- Resultado alcancado.
- Pequeno comentario.
- Nome/cargo ficticio ou tipo de cliente.

Se preferir, pode substituir por metricas de impacto.

### 8. Contato

Secao final com chamada direta para contato:

- Titulo convidando para conversar.
- Texto curto.
- Links/botoes para:
  - Email
  - WhatsApp
  - GitHub
  - LinkedIn

Inclua um formulario visual simples com:

- Nome.
- Email.
- Mensagem.
- Botao enviar.

Como nao havera back-end, o formulario deve ter validacao simples em JavaScript e exibir uma mensagem de sucesso simulada sem recarregar a pagina.

### 9. Footer

Footer compacto com:

- Nome/marca.
- Ano atual gerado via JavaScript.
- Links sociais.

## Comportamentos JavaScript obrigatorios

Implemente em `script.js`:

- Menu mobile abre e fecha.
- Fechar menu mobile ao clicar em um link.
- Scroll suave para secoes internas.
- Filtros dos projetos.
- Animacao de entrada ao rolar a pagina usando `IntersectionObserver`.
- Validacao simples do formulario de contato.
- Atualizacao automatica do ano no footer.

## Animacoes

- Elementos devem aparecer com fade/slide leve ao entrar na viewport.
- Botoes podem ter hover com pequena elevacao ou mudanca de borda.
- Cards podem ter hover discreto.
- Respeitar usuarios com reducao de movimento usando `@media (prefers-reduced-motion: reduce)`.

## Responsividade

Garantir bons breakpoints:

- Desktop: layout com grid e boa largura maxima.
- Tablet: reduzir colunas quando necessario.
- Mobile: menu hamburguer, secoes empilhadas e botoes com largura confortavel.

Checklist responsivo:

- Nenhum texto deve cortar ou vazar do container.
- Nenhum botao deve quebrar de forma feia.
- Projetos devem ficar em uma coluna no mobile.
- Header mobile nao deve cobrir conteudo de forma permanente.
- Espacamentos devem ser menores no mobile.

## Conteudo base sugerido

Use estes textos como ponto de partida, podendo melhorar a escrita mantendo o mesmo sentido.

Nome:

`Lucas DepvH`

Headline:

`Desenvolvedor Full Stack criando interfaces modernas, sistemas sob medida e experiencias digitais eficientes.`

Descricao curta:

`Transformo ideias em produtos digitais claros, responsivos e bem estruturados, unindo design, codigo limpo e foco em resultado.`

CTA principal:

`Ver projetos`

CTA secundario:

`Entrar em contato`

## Qualidade esperada

Antes de finalizar, revise:

- Se o HTML esta bem indentado.
- Se o CSS esta organizado por secoes.
- Se o JavaScript nao quebra quando elementos nao existem.
- Se a pagina funciona ao abrir `index.html`.
- Se todos os links internos apontam para IDs existentes.
- Se a experiencia mobile esta completa.

Entregue apenas os arquivos finais com codigo pronto para uso.
