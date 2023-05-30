import { SaveApartmentDTOInput } from '@/application/dtos/input-save-apartment'
import { ApartmentModel } from '../models/apartment-model'

export class ApartmentRepository {
  private database: ApartmentModel[]

  async save(input: SaveApartmentDTOInput) {
    this.database.push(input)
  }

  async findAll() {
    return this.database
  }

  async findAllOne(id: string) {
    return this.database.find((user) => user.id === id)
  }

  async update(id: string, input: SaveApartmentDTOInput) {
    return this.database.find((user) => {
      if (user.id === id) {
        user = { ...input }
        return user
      }

      return 'Usuário não encontrado'
    })
  }

  async remove(id: string) {
    return this.database.filter((user) => user.id !== id)
  }
}
