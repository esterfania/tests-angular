import { Photo } from 'src/app/components/photo-board/interfaces/photo.model';

export function buildPhotoList(): Photo[] {
  const photos = [
    { id: '1', url: 'http://minhafoto.jpg', description: 'picture of test' },
    { id: '2', url: 'http://minhafoto2.jpg', description: 'picture of test2' },
    { id: '3', url: 'http://minhafoto3.jpg', description: 'picture of test3' },
    { id: '4', url: 'http://minhafoto4.jpg', description: 'picture of test4' },
    { id: '5', url: 'http://minhafoto5.jpg', description: 'picture of test5' },
    { id: '6', url: 'http://minhafoto6.jpg', description: 'picture of test6' },
  ];
  return photos;
}
