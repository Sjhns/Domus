import { SaveApartmentDTOInput } from '@/application/dtos/input-save-apartment'

export interface ApartmentRepositoryContract<T> {
  save: (input: SaveApartmentDTOInput) => Promise<T>
  findAll: () => Promise<T[]>
  findOne: (id: string) => Promise<T>
  update: (id, input: SaveApartmentDTOInput) => Promise<T>
  remove: (id: string) => Promise<void>
}
