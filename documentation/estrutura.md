Nesta estrutura, separámos o nosso código em camadas que tratam de responsabilidades específicas.


```lua
src/
|-- application/
|   |-- interfaces/
|   |-- useCases/
|   |-- services/
|
|-- domain or core/
|   |-- models/
|   |-- repositories/
|   |-- services/
|
|-- infrastructure or infra/
|   |-- database/
|   |-- repositories/
|   |-- services/
|
|-- interfaces/
|   |-- controllers/
|   |-- middlewares/
|   |-- routes/
|
|-- main.ts

```



**aplicação**: Esta camada contém os casos de utilização, os serviços e as interfaces que definem a lógica de aplicação da nossa plataforma. Os casos de utilização definem as ações que podem ser executadas pela nossa plataforma, enquanto os serviços contêm a lógica comercial que suporta estes casos de utilização. As interfaces definem os contratos entre a camada de aplicação e outras camadas do nosso sistema.

**domínio**: Esta camada contém os modelos de domínio, repositórios e serviços que definem os principais conceitos e entidades da nossa plataforma. Os modelos representam as entidades do domínio e as suas propriedades, enquanto os repositórios fornecem a interface para acessar e manipular essas entidades. Os serviços contêm a lógica de domínio que suporta os casos de utilização da nossa plataforma.

**Infra-estrutura**: Esta camada contém os detalhes de implementação da nossa plataforma, tais como a base de dados e os serviços externos. Os repositórios nesta camada implementam as interfaces definidas na camada de domínio, e os serviços fornecem a lógica de infra-estrutura necessária para suportar a camada de aplicação.

**interfaces**: Esta camada contém os controladores, middlewares e rotas que definem os pontos de extremidade da API da nossa plataforma. Os controladores tratam os pedidos de entrada e interagem com a camada de aplicação, enquanto os middlewares fornecem funcionalidades adicionais, como autenticação e tratamento de erros. As rotas definem os caminhos de URL e os métodos HTTP para cada ponto de extremidade da API.

**main.ts**: Este é o ponto de entrada da nossa aplicação, onde configuramos e iniciamos o nosso servidor.

Esta abordagem modular baseada nos princípios da arquitectura limpa permite-nos alterar ou substituir facilmente diferentes componentes do nosso sistema sem afectar outras partes. Também ajuda a manter o nosso código organizado e de fácil manutenção à medida que a nossa plataforma cresce e evolui ao longo do tempo.