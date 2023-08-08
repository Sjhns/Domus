import { Immobile } from '@/domain/entities/immobile'
import { ImmobileModel } from '../model/immobile-model'

export class ImmobileRepository {
  private readonly immobiles: ImmobileModel[] = []

  public async save(immobile: Immobile): Promise<void> {
    this.immobiles.push(immobile.props)
  }

  public async findById(id: string): Promise<ImmobileModel | undefined> {
    return this.immobiles.find((immobile) => immobile.id === id)
  }

  public async findByCep(cep: string): Promise<ImmobileModel | undefined> {
    return this.immobiles.find((immobile) => immobile.cep === cep)
  }

  public async findByOwnerId(ownerId: string): Promise<ImmobileModel[]> {
    return this.immobiles.filter((immobile) => immobile.ownerId === ownerId)
  }

  public async findAll(): Promise<ImmobileModel[]> {
    return this.immobiles
  }

  public async deleteById(id: string): Promise<void> {
    const immobileIndex = this.immobiles.findIndex(
      (immobile) => immobile.id === id,
    )
    this.immobiles.splice(immobileIndex, 1)
  }

  public async update(immobile: Immobile): Promise<void> {
    const immobileIndex = this.immobiles.findIndex(
      (immobil) => immobile.props.id === immobil.id,
    )
    this.immobiles[immobileIndex] = immobile.props
  }

  public async findByOwnerIdAndCep(
    ownerId: string,
    cep: string,
  ): Promise<ImmobileModel | undefined> {
    return this.immobiles.find(
      (immobile) => immobile.ownerId === ownerId && immobile.cep === cep,
    )
  }
}
