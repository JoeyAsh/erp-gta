import {Carousel} from 'react-responsive-carousel';
import {NewsCarouselItem} from './NewsCarouselItem';

export const NewsCarousel = () => {
    return (
        <Carousel
            centerSlidePercentage={90}
            selectedItem={1}
            autoPlay={false}
            infiniteLoop={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            centerMode
            renderItem={NewsCarouselItem}
        >
            <img src={'https://picsum.photos/seed/picsum/120/40'} />
            <img src={'https://picsum.photos/seed/picsum/120/40'} />
            <img src={'https://picsum.photos/seed/picsum/120/40'} />
            <img src={'https://picsum.photos/seed/picsum/120/40'} />
        </Carousel>
    );
};
