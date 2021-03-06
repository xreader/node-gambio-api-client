import { category, image } from './../../tools/fixtures';

const imagePath = image;
const imageName = 'hey.png';
const imageNameRenamed = 'hey-renamed.png'

const invoker = client => client.categories
  .create(category)
  .then(address => address.id)
  .then(id => client.categories.getById(id))
  .then(address => client.categories.update(address.id, { icon: 'image-blubb.png' }))
  .then(() => client.categories.search('image-blubb.png'))
  .then(categories => categories[0].id)
  .then(id => client.categories.delete(id))
  .then(() => client.categories.uploadIcon(imagePath, imageName))
  .then(() => client.categories.renameIcon(imageName, imageNameRenamed))
  .then(() => client.categories.deleteIcon(imageNameRenamed))
  .then(() => client.categories.uploadImage(imagePath, imageName))
  .then(() => client.categories.renameImage(imageName, imageNameRenamed))
  .then(() => client.categories.deleteImage(imageNameRenamed))
  .then(() => client);

export default invoker;
