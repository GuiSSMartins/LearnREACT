export function getImageUrl(person : any, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }