## Apartment model

```typescript
// src/domain/models/apartment.ts

export class Apartment {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly address: string,
    private readonly description: string,
    private readonly rent: number,
    private readonly numberOfRooms: number,
    private readonly amenities: string[],
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getDescription(): string {
    return this.description;
  }

  getRent(): number {
    return this.rent;
  }

  getNumberOfRooms(): number {
    return this.numberOfRooms;
  }

  getAmenities(): string[] {
    return this.amenities;
  }
}

```

## Tenant model

```typescript
// src/domain/models/tenant.ts

export class Tenant {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly phone: string,
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }
}

```

Para garantir que nosso código siga os princípios de código limpo, como SOLID, podemos usar a injeção de dependência para desacoplar nosso código. Vamos criar interfaces para cada modelo de domínio e injectá-las na nossa camada de aplicação. Dessa forma, nossa camada de aplicação depende apenas de abstrações, em vez de implementações específicas.

Aqui está um exemplo de como podemos usar a injeção de dependência para o modelo Apartamento:

```typescript
// src/domain/interfaces/apartment.interface.ts

export interface ApartmentInterface {
  getId(): string;
  getName(): string;
  getAddress(): string;
  getDescription(): string;
  getRent(): number;
  getNumberOfRooms(): number;
  getAmenities(): string[];
}

```

```typescript
// src/domain/models/apartment.ts

import { ApartmentInterface } from '../interfaces/apartment.interface';

export class Apartment implements ApartmentInterface {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly address: string,
    private readonly description: string,
    private readonly rent: number,
    private readonly numberOfRooms: number,
    private readonly amenities: string[],
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getDescription(): string {
    return this.description;
  }

  getRent(): number {
    return this.rent;
  }

  getNumberOfRooms(): number {
    return this.numberOfRooms;
  }

  getAmenities(): string[] {
    return this.amenities;
  }
}

```