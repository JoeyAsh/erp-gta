import {MouseEventHandler} from 'react';

export type NewsImportance = 'normal' | 'high' | 'low';

export interface NewsCardProps {
    id: string;
    img?: {
        imageUrl: string;
        alt: string;
    };
    text: string;
    title: string;
    date: string;
    creatorName: string;
    importance?: NewsImportance;
    onClick?: MouseEventHandler;
}
