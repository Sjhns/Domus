Implementar a camada de aplicação para o nosso sistema de aluguer e partilha de apartamentos:

1. Crie uma interface **ApartmentRepositoryInterface** que defina os métodos que serão utilizados para interagir com o modelo de domínio **Apartment**.

```typescript
interface ApartmentRepositoryInterface {
  findById(id: string): Promise<Apartment | undefined>
  findAll(): Promise<Apartment[]>
  create(apartment: Apartment): Promise<void>
  update(apartment: Apartment): Promise<void>
  delete(id: string): Promise<void>
}
```

2. Implementar uma classe **ApartmentRepository** que implemente a interface **ApartmentRepositoryInterface**. Esta classe tratará das interações com a base de dados ou qualquer outro mecanismo de armazenamento utilizado para manter os apartamentos.

```typescript
class ApartmentRepository implements ApartmentRepositoryInterface {
  private readonly apartments: Apartment[] = []

  async findById(id: string): Promise<Apartment | undefined> {
    return this.apartments.find((apartment) => apartment.getId() === id)
  }

  async findAll(): Promise<Apartment[]> {
    return this.apartments
  }

  async create(apartment: Apartment): Promise<void> {
    this.apartments.push(apartment)
  }

  async update(apartment: Apartment): Promise<void> {
    const index = this.apartments.findIndex(
      (a) => a.getId() === apartment.getId(),
    )
    if (index !== -1) {
      this.apartments[index] = apartment
    }
  }

  async delete(id: string): Promise<void> {
    const index = this.apartments.findIndex(
      (apartment) => apartment.getId() === id,
    )
    if (index !== -1) {
      this.apartments.splice(index, 1)
    }
  }
}
```

3. Crie uma classe **ApartmentService** que implemente a lógica comercial do seu sistema. Esta classe irá interagir com a classe **ApartmentRepository** para ir buscar e manter os apartamentos.

```typescript
class ApartmentService {
  constructor(
    private readonly apartmentRepository: ApartmentRepositoryInterface,
  ) {}

  async getAllApartments(): Promise<Apartment[]> {
    return this.apartmentRepository.findAll()
  }

  async getApartmentById(id: string): Promise<Apartment | undefined> {
    return this.apartmentRepository.findById(id)
  }

  async createApartment(apartment: Apartment): Promise<void> {
    await this.apartmentRepository.create(apartment)
  }

  async updateApartment(apartment: Apartment): Promise<void> {
    await this.apartmentRepository.update(apartment)
  }

  async deleteApartment(id: string): Promise<void> {
    await this.apartmentRepository.delete(id)
  }
}
```


4. Por último, crie um controlador ou um conjunto de controladores que tratem os pedidos HTTP de entrada e invoquem os métodos adequados no ApartmentService.

```typescript
class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  async getAllApartments(req: Request, res: Response): Promise<void> {
    const apartments = await this.apartmentService.getAllApartments();
    res.status(200).json(apartments);
  }

  async getApartmentById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const apartment = await this.apartmentService.getApartmentById(id);
    if (apartment) {
      res.status(200).json(apartment);
    } else {
      res.status(404).json({ message: `Apartment with id ${id} not found` });
    }
  }

  async createApartment(req: Request, res: Response): Promise<void> {
    const apartment = new Apartment(req.body);
    await this.apartmentService.createApartment(apartment);
    res.status(201).json(apartment);

```