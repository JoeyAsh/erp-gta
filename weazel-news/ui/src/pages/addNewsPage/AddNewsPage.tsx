import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    TextField
} from '@mui/material';
import {useState} from 'react';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import {AddNewsImageContainer} from '../../components/addNewsImageContainer/AddNewsImageContainer';
import {AddNewsImageContainerSmall} from '../../components/addNewsImageContainerSmall/AddNewsImageContainerSmall';

export const AddNewsPage = () => {
    const [isHot, setIsHot] = useState(false);

    const toggleHot = () => {
        setIsHot(!isHot);
    };

    return (
        <Container sx={{flex: 1, py: 2}}>
            <Stack spacing={2} sx={{height: '100%'}}>
                <Box>
                    <AddNewsImageContainer />
                </Box>
                <Stack direction={'row'} spacing={2}>
                    <AddNewsImageContainerSmall />
                    <AddNewsImageContainerSmall />
                    <AddNewsImageContainerSmall />
                    <AddNewsImageContainerSmall />
                </Stack>
                <Box>
                    <TextField fullWidth label={'Headline'} />
                </Box>
                <Box sx={{flex: 1}}>
                    <TextField
                        multiline
                        fullWidth
                        label={'Text'}
                        placeholder={'Enter Text...'}
                    />
                </Box>
                <Stack direction={'row'}>
                    <Button>News Posten</Button>
                    <IconButton
                        color={isHot ? 'primary' : undefined}
                        onClick={toggleHot}
                    >
                        {isHot ? (
                            <LocalFireDepartmentIcon />
                        ) : (
                            <LocalFireDepartmentOutlinedIcon />
                        )}
                    </IconButton>
                </Stack>
            </Stack>
        </Container>
    );
};
