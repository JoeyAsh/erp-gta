import {Box, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddNewsImageContainerSmall = () => {
    return (
        <Box
            sx={{
                flex: '1 1 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F7F7F7',
                border: '1px solid #C6C6C6',
                height: '90px'
            }}
        >
            <Button>
                <AddIcon sx={{color: 'white'}} />
            </Button>
        </Box>
    );
};
