import { SaveApartmentDTOInput } from '@/application/dtos/input-save-apartment'
import { ApartmentModel } from '../models/apartment-model'
import { ApartmentRepositoryContract } from '@/domain/repository/apartment-repository'

export class ApartmentRepositoryMemory
  implements ApartmentRepositoryContract<ApartmentModel>
{
  private database: ApartmentModel[] = []

  async save(input: SaveApartmentDTOInput): Promise<ApartmentModel> {
    this.database.push(input)
    return input
  }

  async findAll(): Promise<ApartmentModel[]> {
    return this.database
  }

  async findOne(id: string): Promise<ApartmentModel> {
    return this.database.find((user) => user.id === id)
  }

  async update(
    id: string,
    input: SaveApartmentDTOInput,
  ): Promise<ApartmentModel> {
    const index = this.database.findIndex((apartment) => apartment.id === id)

    if (index !== -1) {
      this.database[index] = input
      return input
    }
  }

  async remove(id: string): Promise<void> {
    const apartment = this.database.find((user) => user.id === id)
    const index = this.database.indexOf(apartment)
    if (index !== -1) {
      this.database.splice(index, 1)
    }
  }
}
