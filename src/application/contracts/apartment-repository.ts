import { SaveApartmentDTOInput } from '@/application/dtos/input-save-apartment'

export interface ApartmentRepositoryContract<T, S> {
  save: (input: SaveApartmentDTOInput) => Promise<T>
  findAll: () => Promise<S[] | undefined>
  findOne: (id: string) => Promise<S | undefined>
  update: (id, input: SaveApartmentDTOInput) => Promise<T>
  remove: (id: string) => Promise<void>
}
