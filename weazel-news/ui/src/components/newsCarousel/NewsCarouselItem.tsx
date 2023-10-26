import {Box} from '@mui/material';
import {ReactNode} from 'react';

export const NewsCarouselItem = (
    item: ReactNode,
    options?: {isSelected: boolean}
) => {
    return (
        <Box
            sx={{
                py: 0,
                px: 1
            }}
        >
            {item}
        </Box>
    );
};
