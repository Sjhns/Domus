https://dev.to/vitordevsp/padronizacao-de-commit-com-commitlint-husky-e-commitizen-3g1n

dá uma olhada depois: commitizen

--------------------------------------------------------------

A ideia de atribuir para a entidade regras genéricas é evitar que ela seja uma entidades anêmicas, ou seja, que não possuía nada além de ser uma mera "representação".

Nossas entidades são o coração da nossa aplicação. Ela deve ter um papel neste ecossistema. Porém, é preciso entender que as regras atrelados a nossa entidades devem ser genéricas, pois para uma regras mais especificas/rígidas é trabalho dos casos de uso isso.


------------     core/domain -----------------

Dentro do core/domain não é colocado implementações apenas interfaces/contratos/modelos/entity que irão nortear o nosso sistema.

--- 

type: tipagem 
class: se tive métodos, comportamento, DDD - é recomendado que tenha alguma lógica de negócio aqui.
interfaces: para contratos

-----------------
core/domain: é dados e protocolos.
application: será a implementação dessas regras.
 --> Para cada caso de uso terá um único serviço. Relação 1:1  

application só enxerga o domínio, o domínio não enxerga nada de fora.  Nunca poderá ter imports de coisas externas. 

Infra --> Application --> core/domain

```css
application/
  |--contracts/
  |--repositories/
  |--services/
  |--validators/

```

Dessa forma, é possível separar bem as responsabilidades de cada pasta. A pasta **contracts** pode conter os contratos de entrada e saída dos serviços, a pasta **repositories** pode conter as implementações das interfaces de repositório, a pasta **services** pode conter a lógica de negócios dos serviços e a pasta validators pode conter as regras de validação dos dados de entrada.


https://www.youtube.com/watch?v=yLPxkIxbNDg ---> continua


├── domain
│   ├── entities
│   ├── repositories
│   └── services
├── application
│   ├── usecases
│   ├── dtos
│   └── mappers
└── infra
    ├── persistence
    │   ├── repositories
    │   └── models
    ├── external
    │   ├── services
    │   └── clients
    └── config

Nessa estrutura:

A pasta domain contém os elementos centrais do domínio da aplicação. Isso inclui as entidades do domínio, as interfaces dos repositórios (contratos), e os serviços do domínio, se houver.
A pasta application abriga a lógica de aplicação. Os casos de uso (use cases) são implementados aqui, juntamente com os Data Transfer Objects (DTOs) que definem as estruturas de dados transferidas entre as camadas.
A pasta infra engloba a infraestrutura e detalhes de implementação. Isso pode incluir a persistência de dados, serviços externos e configurações específicas da infraestrutura.
Na pasta persistence, você encontrará a implementação dos repositórios, bem como os modelos de dados (se houver).
Na pasta external, você pode colocar a implementação de serviços externos ou clientes para integrações com APIs, por exemplo.
A pasta config é usada para armazenar arquivos de configuração relacionados à infraestrutura.

---

{
  "titulo": "",
  "data": ""
  "imagem": []
  "valor do apartamento": 
  "informações do vendedor": {
    ""
  },
  "localização": {
    "cep": ""
    "município"
    "Bairro"
    "Logradouro"
  },

  detalhes: {
    "categoria":
    "tipo"
    "condomínio"
    "IPTU"
    "Quartos"
    "Banheiro"
    "Vagas na garagem"
    "Detalhes do imóvel"
    "Area util"
    "banheiro"
    "vagas"
  }
}

oxl: https://ba.olx.com.br/regiao-de-vitoria-da-conquista-e-barreiras/imoveis/apartamento-3-quartos-1191376594?lis=listing_1002