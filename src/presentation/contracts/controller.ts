import { SaveApartmentInput } from '@/application/types/save-apartment-input'
import { HttpResponse } from './http-response'

export interface SaveApartmentControllerInterface {
  handle: (apartmentInput: SaveApartmentInput) => Promise<HttpResponse>
}
