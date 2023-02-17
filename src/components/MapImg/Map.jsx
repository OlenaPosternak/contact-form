import map from '../../img/mapGroup.png';
import pinkSmile from '../../img/footer/Group.png';
import yellowSmile from '../../img/yellowSmile(map).png';

import { ImgSection, MapImg, PinkSmile, YellowSmile } from '../MapImg/Map.styled';

export const MapSection = () => {
  return (
    <ImgSection>
      <PinkSmile src={pinkSmile} alt="pinkSmile" />
      <YellowSmile src={yellowSmile} alt="yellowSmile" />
      <MapImg src={map} alt="map" height={976} />
    </ImgSection>
  );
};
