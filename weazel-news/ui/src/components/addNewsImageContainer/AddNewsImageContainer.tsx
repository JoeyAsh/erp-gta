import {Box, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddNewsImageContainer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F7F7F7',
                border: '1px solid #C6C6C6',
                height: '150px'
            }}
        >
            <Button>
                <AddIcon sx={{color: 'white'}} />
            </Button>
        </Box>
    );
};
