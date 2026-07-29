# Prompt de Implementação para Codex

Você deve criar uma landing page de portfólio pessoal/profissional usando apenas HTML, CSS e JavaScript puros. Não use frameworks, bibliotecas externas, React, Vue, Angular, Tailwind, Bootstrap, jQuery, build tools ou dependências via CDN, exceto fontes do Google Fonts se necessário. A entrega deve funcionar abrindo o arquivo `index.html` diretamente no navegador.

## Objetivo

Construir uma landing page moderna, responsiva e profissional para apresentar um desenvolvedor/portfólio. A página deve transmitir domínio técnico, organização, clareza visual e foco em conversão para contato.

Crie os seguintes arquivos dentro da pasta do projeto:

- `index.html`
- `style.css`
- `script.js`

## Regras técnicas obrigatórias

- Usar HTML semântico.
- Usar CSS puro com variáveis em `:root`.
- Usar JavaScript puro, sem bibliotecas.
- Garantir responsividade para desktop, tablet e mobile.
- Priorizar acessibilidade: contraste adequado, textos legíveis, foco visível em links e botões, `aria-label` onde fizer sentido.
- Evitar código duplicado e manter a estrutura fácil de entender.
- Não criar textos explicativos dentro da interface sobre como a página funciona.
- Não usar cards dentro de cards.
- Não usar layout com texto quebrando ou sobrepondo outros elementos.
- Não usar animações pesadas; todas devem ser suaves e discretas.

## Identidade visual

Use um visual escuro, técnico e sofisticado, com contraste forte e detalhes em cor de destaque.

### Paleta sugerida

- Fundo principal: `#080B12`
- Fundo secundário: `#101624`
- Superfície: `#151D2E`
- Texto principal: `#F5F7FA`
- Texto secundário: `#AAB4C5`
- Linha/borda: `rgba(255, 255, 255, 0.10)`
- Destaque principal: `#36D399`
- Destaque secundário: `#5B8CFF`
- Alerta/realce pontual: `#FBBF24`

Evite deixar a página inteira parecendo uma paleta de uma única cor. Use os destaques com moderação para botões, links, indicadores e detalhes.

### Tipografia

- Fonte principal: `Inter`, `Manrope` ou `system-ui`.
- Títulos com peso forte, mas sem exagero.
- Texto de apoio com tamanho confortável e boa altura de linha.
- Não usar letter-spacing negativo.
- Não escalar fonte com viewport width.

## Estrutura da página

### 1. Header fixo

Criar um header no topo com:

- Nome/marca pessoal do portfólio.
- Navegação com links para: Início, Sobre, Stack, Projetos, Experiência e Contato.
- Botão de contato.
- Menu mobile com ícone hambúrguer.

Comportamento:

- Header fixo no topo.
- Fundo com leve transparência e blur.
- No mobile, abrir um menu vertical ao tocar no botão.
- Ao clicar em qualquer item do menu mobile, fechar o menu.

### 2. Hero

Primeira dobra da página com:

- Nome do profissional ou placeholder: `Lucas DepvH`.
- Título forte, por exemplo: `Desenvolvedor Full Stack focado em interfaces modernas e sistemas eficientes.`
- Texto curto explicando valor profissional.
- Dois botões principais:
  - `Ver projetos`
  - `Entrar em contato`
- Pequeno bloco de indicadores, como:
  - `Projetos reais`
  - `Front-end`
  - `Back-end`
  - `Automações`

O hero deve ocupar bem a primeira tela, mas deixar uma pista visual da próxima seção aparecendo.

### 3. Sobre

Seção com texto objetivo sobre o profissional:

- Quem é.
- Que tipo de problema resolve.
- Como trabalha.
- Diferenciais técnicos e comportamentais.

Inclua também uma lista curta de pontos fortes, como:

- Desenvolvimento de interfaces responsivas.
- Integração com APIs.
- Organização de código.
- Foco em experiência do usuário.

### 4. Stack

Seção com tecnologias organizadas por categorias:

- Front-end: HTML, CSS, JavaScript.
- Back-end: Node.js, Ruby on Rails ou outra stack desejada.
- Banco de dados: PostgreSQL, MySQL, SQLite.
- Ferramentas: Git, GitHub, Figma, VS Code.

Use badges ou blocos compactos, com bom espaçamento e leitura rápida.

### 5. Projetos

Criar uma seção de portfólio com filtros em JavaScript.

Filtros:

- Todos
- Front-end
- Back-end
- Full Stack

Cada projeto deve ter:

- Título.
- Categoria.
- Descrição curta.
- Lista de tecnologias.
- Links: `Demo` e `Código`.

Use dados fictícios realistas e deixe fácil substituir depois.

Comportamento:

- Ao clicar em um filtro, mostrar apenas os projetos daquela categoria.
- Destacar visualmente o filtro ativo.
- A transição entre projetos deve ser suave.

### 6. Experiência ou processo

Criar uma seção com timeline ou etapas de trabalho:

- Descoberta do problema.
- Planejamento da solução.
- Desenvolvimento.
- Testes e refinamento.
- Entrega.

O layout deve funcionar bem no mobile sem ficar apertado.

### 7. Depoimentos ou resultados

Criar uma seção opcional com 2 ou 3 cards simples contendo:

- Resultado alcançado.
- Pequeno comentário.
- Nome/cargo fictício ou tipo de cliente.

Se preferir, pode substituir por métricas de impacto.

### 8. Contato

Seção final com chamada direta para contato:

- Título convidando para conversar.
- Texto curto.
- Links/botões para:
  - Email
  - WhatsApp
  - GitHub
  - LinkedIn

Inclua um formulário visual simples com:

- Nome.
- Email.
- Mensagem.
- Botão enviar.

Como não haverá back-end, o formulário deve ter validação simples em JavaScript e exibir uma mensagem de sucesso simulada sem recarregar a página.

### 9. Footer

Footer compacto com:

- Nome/marca.
- Ano atual gerado via JavaScript.
- Links sociais.

## Comportamentos JavaScript obrigatorios

Implemente em `script.js`:

- Menu mobile abre e fecha.
- Fechar menu mobile ao clicar em um link.
- Scroll suave para seções internas.
- Filtros dos projetos.
- Animação de entrada ao rolar a página usando `IntersectionObserver`.
- Validação simples do formulário de contato.
- Atualização automática do ano no footer.

## Animações

- Elementos devem aparecer com fade/slide leve ao entrar na viewport.
- Botões podem ter hover com pequena elevação ou mudança de borda.
- Cards podem ter hover discreto.
- Respeitar usuários com redução de movimento usando `@media (prefers-reduced-motion: reduce)`.

## Responsividade

Garantir bons breakpoints:

- Desktop: layout com grid e boa largura máxima.
- Tablet: reduzir colunas quando necessário.
- Mobile: menu hambúrguer, seções empilhadas e botões com largura confortável.

Checklist responsivo:

- Nenhum texto deve cortar ou vazar do container.
- Nenhum botão deve quebrar de forma feia.
- Projetos devem ficar em uma coluna no mobile.
- Header mobile não deve cobrir conteúdo de forma permanente.
- Espaçamentos devem ser menores no mobile.

## Conteúdo base sugerido

Use estes textos como ponto de partida, podendo melhorar a escrita mantendo o mesmo sentido.

Nome:

`Lucas DepvH`

Headline:

`Desenvolvedor Full Stack criando interfaces modernas, sistemas sob medida e experiências digitais eficientes.`

Descrição curta:

`Transformo ideias em produtos digitais claros, responsivos e bem estruturados, unindo design, código limpo e foco em resultado.`

CTA principal:

`Ver projetos`

CTA secundário:

`Entrar em contato`

## Qualidade esperada

Antes de finalizar, revise:

- Se o HTML está bem indentado.
- Se o CSS está organizado por seções.
- Se o JavaScript não quebra quando elementos não existem.
- Se a página funciona ao abrir `index.html`.
- Se todos os links internos apontam para IDs existentes.
- Se a experiência mobile está completa.

Entregue apenas os arquivos finais com código pronto para uso.
