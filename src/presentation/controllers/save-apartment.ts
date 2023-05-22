import { SaveApartmentService } from '@/application/services/save-apartment'
import { HttpResponse } from '../contracts/http-response'
import { SaveApartmentViewModel } from '../view-models/save-apartment'
import { SaveApartmentInput } from '@/application/types/save-apartment-input'
import { SaveApartmentControllerInterface } from '../contracts/controller'

export class SaveApartmentController
  implements SaveApartmentControllerInterface
{
  constructor(private readonly saveApartmentService: SaveApartmentService) {}

  async handle(
    apartmentInput: SaveApartmentInput,
  ): Promise<HttpResponse<SaveApartmentViewModel>> {
    const dataApartmentSaved = await this.saveApartmentService.save(
      apartmentInput,
    )
    return {
      statusCode: 200,
      body: dataApartmentSaved,
    }
  }
}
