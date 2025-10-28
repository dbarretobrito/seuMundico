import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  height: 0;
  margin-top: 5px;
  padding-bottom: 35%; /* Proporção 16:9 */
  position: relative;
  box-sizing: border-box;

  .slick-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slick-list {
    width: 100%;
    height: 100%;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slick-prev, .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 24px;
    cursor: pointer;
    z-index: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .slick-prev {
    left: 10px;
    transform: translateY(-50%) translateX(-20px);
  }

  .slick-next {
    right: 10px;
    transform: translateY(-50%) translateX(20px);
  }

  &:hover .slick-prev, &:hover .slick-next {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
`;
