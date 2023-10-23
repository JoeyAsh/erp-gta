import {
    Box,
    Card,
    CardActionArea,
    CardContent as MuiCardContent,
    CardHeader,
    CardMedia,
    styled,
    Typography
} from '@mui/material';
import {grey} from '@mui/material/colors';
import {NewsCardProps} from './NewsCardModels.ts';

const CardContent = styled(MuiCardContent)(`
    &:last-child {
        padding-bottom: 8px
    }
`);

export const NewsCard = (props: NewsCardProps) => {
    return (
        <Card>
            <CardActionArea onClick={props.onClick}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <CardMedia
                        sx={{
                            width: 120,
                            height: 120
                        }}
                        component={'img'}
                        image={props.img?.imageUrl}
                        alt={props.img?.alt}
                    />
                    <Box sx={{textOverflow: 'ellipsis'}}>
                        <CardHeader
                            sx={{py: 0}}
                            disableTypography
                            title={
                                <Typography variant={'body1'}>
                                    <b>{props.title}</b>
                                </Typography>
                            }
                            subheader={
                                <Typography
                                    sx={{fontSize: '9pt'}}
                                    component={'span'}
                                    color={grey[500]}
                                    variant={'body2'}
                                >{`${props.date} | ${props.creatorName}`}</Typography>
                            }
                        />
                        <CardContent sx={{py: 1}}>
                            <Typography
                                sx={{
                                    display: '-webkit-box',
                                    '-webkit-box-orient': 'vertical',
                                    '-webkit-line-clamp': '3',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden'
                                }}
                                variant={'body2'}
                            >
                                {props.text}
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    );
};
