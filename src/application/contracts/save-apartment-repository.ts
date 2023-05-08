import { ApartmentModel } from './models/apartment-model'

export interface SaveApartmentRepository {
  saveApartment: (apartment: ApartmentModel) => Promise<ApartmentModel>
  getAllApartments: () => Promise<ApartmentModel[]>
}
