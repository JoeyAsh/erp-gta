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
import {NewsCardProps} from './NewsCardModels';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const CardContent = styled(MuiCardContent)(`
    &:last-child {
        padding-bottom: 8px
    }
`);

const TextTypography = styled(Typography)(`
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        overflow: hidden;
`);

export const NewsCard = (props: NewsCardProps) => {
    return (
        <Card elevation={0}>
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
                            sx={{pb: 0}}
                            disableTypography
                            action={
                                <>
                                    {props.isFavourite ? (
                                        <BookmarkIcon />
                                    ) : (
                                        <BookmarkBorderIcon />
                                    )}
                                    {props.importance === 'high' && (
                                        <WhatshotIcon />
                                    )}
                                </>
                            }
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
                            <TextTypography
                                variant={'body2'}
                                sx={{fontSize: '9pt'}}
                            >
                                {props.text}
                            </TextTypography>
                        </CardContent>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    );
};
