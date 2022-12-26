import { v4 } from 'uuid';
import image from '../../static/image';
import { IDataItemBlog } from './components/BlogItem/BlogItem';

const ListItemBlog = [
    {
        id: v4(),
        img: {
            srcThumb: image.blog.itemBlog.img_1,
            date: { day: '15', link: '#', months: 'Jan' },
        },
        info: {
            title: 'Google inks pact for new 35-storey office',
            des: `That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.`,
            cmnt: {
                commentCount: '3',
                link: '#',
            },
            post: {
                link: '#',
                postBy: '__SonLe__',
            },
        },
    },
    {
        id: v4(),
        img: {
            srcThumb: image.blog.itemBlog.img_2,
            date: { day: '15', link: '#', months: 'Jan' },
        },
        info: {
            title: 'Google inks pact for new 35-storey office',
            des: `That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.`,
            cmnt: {
                commentCount: '3',
                link: '#',
            },
            post: {
                link: '#',
                postBy: '__SonLe__',
            },
        },
    },
    {
        id: v4(),
        img: {
            srcThumb: image.blog.itemBlog.img_3,
            date: { day: '15', link: '#', months: 'Jan' },
        },
        info: {
            title: 'Google inks pact for new 35-storey office',
            des: `That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.`,
            cmnt: {
                commentCount: '3',
                link: '#',
            },
            post: {
                link: '#',
                postBy: '__SonLe__',
            },
        },
    },
    {
        id: v4(),
        img: {
            srcThumb: image.blog.itemBlog.img_4,
            date: { day: '15', link: '#', months: 'Jan' },
        },
        info: {
            title: 'Google inks pact for new 35-storey office',
            des: `That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.`,
            cmnt: {
                commentCount: '3',
                link: '#',
            },
            post: {
                link: '#',
                postBy: '__SonLe__',
            },
        },
    },
    {
        id: v4(),
        img: {
            srcThumb: image.blog.itemBlog.img_5,
            date: { day: '15', link: '#', months: 'Jan' },
        },
        info: {
            title: 'Google inks pact for new 35-storey office',
            des: `That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.`,
            cmnt: {
                commentCount: '3',
                link: '#',
            },
            post: {
                link: '#',
                postBy: '__SonLe__',
            },
        },
    },
] as IDataItemBlog[];
export default ListItemBlog;
