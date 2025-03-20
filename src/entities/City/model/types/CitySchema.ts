export type CitySchema = {
  cities: City[]
}

export type City = { name: string, lat: number, lon: number, checked: boolean };