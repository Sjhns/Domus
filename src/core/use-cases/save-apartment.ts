import { Apartment } from '@/core/entities/apartment'

export interface SaveApartment {
  save: (apartment: Apartment) => Promise<Apartment | Record<string, string>>
}
