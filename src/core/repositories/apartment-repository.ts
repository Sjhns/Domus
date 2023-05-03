import { Apartment } from '../entities/apartment'

export interface ApartmentRepositoryInterface {
  save: (apartment: Apartment) => Promise<Apartment>
  getAll: () => {}
}
