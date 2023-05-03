1. Identificar sistemas externos: Identifique os sistemas externos com os quais a camada de infra-estrutura terá de interagir, como uma base de dados ou um sistema de mensagens.

2. Definir interfaces: Defina interfaces para cada sistema externo que a sua camada de aplicação irá utilizar. Estas interfaces devem ser agnósticas em termos de tecnologia, para que possa trocar a implementação sem afectar a sua camada de aplicação.

3. Implementar as interfaces: Implemente as interfaces utilizando a tecnologia específica que escolheu, como uma base de dados SQL ou um corretor de mensagens.

4. Utilizar a injecção de dependências: Utilize a injecção de dependências para injectar as implementações da infra-estrutura na camada de aplicação.

5. Escreva testes de integração: Escreva testes de integração para garantir que a camada de infra-estrutura está a funcionar correctamente. Estes testes devem abranger todos os cenários possíveis e casos extremos.

Aqui está um exemplo de implementação da camada de infra-estrutura para uma base de dados SQL usando TypeORM: