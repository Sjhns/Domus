

## Apartamento 
 
Representa um apartamento que está disponível para aluguer. Tem as seguintes propriedades:

```
id: string
nome: string
endereço: string
descrição: string
aluguer: número
numberOfRooms: número
comodidades: string[]
```

## Inquilino

Representa um inquilino que arrenda um apartamento. Tem as seguintes propriedades:

```
id: string
nome: string
email: string
telefone: string
rentalHistory: Aluguer[]

```

## Rental
 
Representa um contrato de aluguer entre um inquilino e um senhorio para um apartamento específico. Tem as seguintes propriedades:

```
id: string
apartamento: Apartamento
inquilino: Inquilino
startDate: Data
endDate: Data
```

## Senhorio 

Representa um senhorio que possui um ou mais apartamentos. Tem as seguintes propriedades:

```
id: string
nome: string
email: string
telefone: string
apartamentos: Apartamento[]

```


## Revisão 

Representa uma revisão de um apartamento e/ou senhorio por um inquilino. Tem as seguintes propriedades:

```
id: string
apartamento: Apartamento
senhorio: Senhorio
inquilino: Inquilino
classificação: número
comentário: string

```


Estes modelos de domínio representam os principais conceitos e entidades do nosso sistema. São independentes de qualquer tecnologia ou estrutura específica, o que significa que podem ser utilizados com qualquer tecnologia de backend ou frontend. Ao definir estes modelos, podemos começar a implementar a lógica da aplicação e a construir as funcionalidades da nossa plataforma.