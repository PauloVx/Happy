import { Image } from '../models/Image';

import { APP_PORT, APP_HOST } from '../config';

class ImageView {
  renderOne(image: Image) {
    return {
      id: image.id,
      url: `http://${APP_HOST}:${APP_PORT}/uploads/${image.path}`
    };
  }

  renderMany(images: Array<Image>) {
    return images.map(image => this.renderOne(image));
  }
}

export default new ImageView();