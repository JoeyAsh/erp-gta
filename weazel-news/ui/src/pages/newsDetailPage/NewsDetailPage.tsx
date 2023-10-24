import {ArrowBack} from '@mui/icons-material';
import {Box, Button, Stack, Typography} from '@mui/material';
import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getMockData} from '../../mock/News.mock.ts';

export const NewsDetailPage = () => {
    const {newsId} = useParams();
    const data = getMockData(parseInt(newsId ?? '1'));

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, []);

    return (
        <Box sx={{my: 2}}>
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Button onClick={handleBackButtonClick}>
                    <ArrowBack /> Back
                </Button>
                <Typography variant={'h2'}>{data.title}</Typography>
            </Stack>

            <Typography variant={'h6'}>
                {data.date} | {data.creatorName}
            </Typography>
            <Box sx={{my: 2}}>
                <Box
                    component={'img'}
                    src={data.img?.imageUrl}
                    alt={data.img?.alt}
                    sx={{mr: 2, mb: 2, float: 'left'}}
                />
                <Typography>{data.text}</Typography>
            </Box>
        </Box>
    );
};
