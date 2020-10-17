import { Orphanage } from "../models/Orphanage";

import ImageView from './ImageView';

class OrphanageView {
  renderOne(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      whatsapp: orphanage.whatsapp,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: ImageView.renderMany(orphanage.images)
    };
  }

  renderMany(orphanages: Array<Orphanage>) {
    return orphanages.map(orphanage => this.renderOne(orphanage));
  }
}

export default new OrphanageView();