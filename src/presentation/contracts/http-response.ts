export type HttpResponse<T = unknown> = {
  statusCode: number
  body: T
}

export const ok = (data: unknown): HttpResponse => {
  return {
    statusCode: 200,
    body: data,
  }
}

export const serverError = (data: unknown): HttpResponse => {
  return {
    statusCode: 500,
    body: data,
  }
}
