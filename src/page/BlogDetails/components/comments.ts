import { v4 } from 'uuid';
import image from '../../../static/image';
import { IDataItemComment } from './CommentArea/components/ItemComment/ItemComment';

const listFeedBack: IDataItemComment[] = [
    {
        id: v4(),
        avatarSrc: image.blogDetails.avatarUserComment.img_1,
        date: 'December 4, 2017 at 3:12 pm',
        feedbackText:
            'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        link: '#',
        name: 'Emilly Blunt',
    },
    {
        id: v4(),
        avatarSrc: image.blogDetails.avatarUserComment.img_2,
        date: 'December 4, 2017 at 3:12 pm',
        feedbackText:
            'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        link: '#',
        name: 'Emilly Blunt',
    },
    {
        id: v4(),
        avatarSrc: image.blogDetails.avatarUserComment.img_3,
        date: 'December 4, 2017 at 3:12 pm',
        feedbackText:
            'Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser',
        link: '#',
        name: 'Emilly Blunt',
    },
];

export default listFeedBack;
