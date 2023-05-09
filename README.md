# Style Guide

Este style guide é uma referência para os padrões de codificação que devem ser seguidos em todo o projeto. É importante seguir estes padrões para garantir a consistência, a legibilidade, a qualidade e a facilidade de manutenção do código.

## Conteúdo
- [Nomenclatura](#nomenclatura)
  - [Classes](#classes)
  - [Variáveis e Métodos](#variáveis-e-métodos)
  - [Arquivos](#arquivos)
  - [Constantes](#arquivos)
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Padrões de Codificação](#padrões-de-codificação)
  - [Indentação](#indentação)
  - [Tipos de dados](#tipos-de-dados)
  - [Declaração de variáveis](#declaração-de-variáveis)
  - [Comentários](#comentários)
  - [Tratamento de Erros](#Tratamento-de-erros)
- [Arquitetura](#arquitetura)
  - [Módulos](#módulos)
  - [Casos de uso](#casos-de-uso)
  - [Controladores](#controladores)
- [Padrões de Commit](#padrões-de-commit)

## Nomenclatura

### Classes
As classes devem ser escritas no formato PascalCase.

#### Exemplo:

* `ApartmentRepository`

### Variáveis e métodos  
As variáveis e métodos devem ser escritas no formato camelCase.

#### Exemplo:

* `getAllApartments`

### Arquivos
Os arquivos devem ser escritos no formato kebab-case.

#### Exemplo:

* `create-apartment.ts`

### Constantes

Os nomes das constantes devem ser escritos em SCREAMING_SNAKE_CASE.

#### Examples:

* `ERROR_MESSAGE`
* `STATUS_CODE`

## Padrões de Codificação

* Utilize `camelCase` para variáveis e funções.
* Utilize `PascalCase` para classes.
* Utilize `UPPER_CASE` para constantes.
* Utilize nomes significativos e descritivos.
* Utilize aspas simples para strings.
* Não utilize ponto e virgula. 
* Opte sempre por usar `const` em vez de `let` ou `var`.
* Opte por `arrow function` se possível.
* Escreva funções pequenas e enfocadas.
  * Funções pequenas e enfocadas se referem a funções que realizam uma tarefa específica e limitada, sem se distrair com outras responsabilidades ou tarefas. 
* Evite usar `any` como declaração de tipo.
* Use a versão `LTS` atual.

## Padrões de commit

Neste projeto, seguimos o padrão de commit do Angular. Abaixo estão algumas dicas para escrever mensagens de commit claras e significativas:

* Utilize o imperativo presente para descrever a mudança: "Adicionar" ao invés de "Adicionado" ou "Adicionou".
* Mantenha a mensagem de commit curta e objetiva, limitando-a a uma linha.
* Use frases completas e evite abreviações.
* Utilize o prefixo adequado para a categoria da mudança:
  * feat: Nova funcionalidade
  * fix: Correção de bugs
  * docs: Alterações na documentação
  * style: Alterações no formato do código (por exemplo, espaços em branco, formatação, etc.)
  * refactor: Refatoração do código
  * perf: Melhorias de desempenho
  * test: Adição ou correção de testes
  * chore: Alterações no processo de construção ou dependências
* Adicione uma descrição clara e objetiva para a mudança realizada.
* Exemplo de mensagem de commit:
  * `feat: Adicionar nova funcionalidade de paginação`
  * `fix: Corrigir bug de carregamento de dados da API`
  * `docs: Atualizar documentação da API`
  * `style: Melhorar formatação do código`
  * `refactor: Refatorar código para melhorar performance`
  * `test: Adicionar testes unitários`
  * `chore: Adicionar ou atualizar ferramentas de build`