import Grid from '../Grid/Grid';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ images, openModal }) => {
  return (
    <Grid>
      {images.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem key={id} avg_color={avg_color} alt={alt} src={src} openModal={openModal}/>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
