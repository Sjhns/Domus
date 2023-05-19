
import { Apartment } from '@/core/entities/apartment'

export type ApartmentModel = Apartment

export interface SaveApartmentRepository {
  saveApartment: (apartment: ApartmentModel) => Promise<ApartmentModel>
  getAllApartments: () => Promise<ApartmentModel[]>
}
