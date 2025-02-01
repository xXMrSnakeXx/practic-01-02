import GridItem from '../GridItem/GridItem';
import style from './PhotosGalleryItem.module.css';
const PhotosGalleryItem = ({ avg_color, alt, src, openModal }) => {
  return (
    <GridItem>
      <div
        className={style.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} onClick={()=> openModal(src.large, alt)} />
      </div>
    </GridItem>
  );
};
export default PhotosGalleryItem;
