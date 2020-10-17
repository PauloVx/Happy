import { Image } from './Image';

export interface Orphanage {
  id: number,
  name: string,
  whatsapp: string,
  latitude: number,
  longitude: number,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: boolean,
  images: Array<Image>
};