import {ReactNode} from 'react';

export interface NewsCarouselItemProps {
    children?: ReactNode;
    options?: {
        isSelected: boolean;
    };
}
