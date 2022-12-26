import classNames from 'classnames/bind';
import AreaLink from '../../../../components/common/AreaLink';
import Quote from '../../../../components/common/Quote';
import image from '../../../../static/image';
import style from './style.module.scss';
type Props = {};

const cx = classNames.bind(style);
const SinglePost = (props: Props) => {
    return (
        <div className={cx('wrapper-SinglePost')}>
            <div className={cx('thumb-area')}>
                <img src={image.blog.itemBlog.img_1} alt='' />
            </div>
            <div className={cx('info-area')}>
                <h2>Second divided from form fish beast made every of seas all gathered us saying he our</h2>
                <div className={cx('wrapper-link-info')}>
                    <AreaLink
                        data={{ user: { name: '__SonLe__2k4', link: '#' }, comment: { link: '#', quantity: '5' } }}
                    />
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ut maxime impedit vero nemo,
                    quisquam enim minima ratione culpa quo iste porro eos eum totam aliquam? Provident, magnam
                    voluptatem ipsam repellat suscipit et reprehenderit tempora dolor consequuntur non vitae recusandae
                    perferendis quaerat maiores voluptate ipsum eius corrupti temporibus obcaecati iusto?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur itaque. Tempore
                    eligendi aliquid distinctio repellat ullam magnam dicta sint molestiae, recusandae nulla libero
                    repellendus sit a minima dignissimos? Est eius suscipit accusantium quae quisquam explicabo
                    provident eaque esse amet numquam, modi sequi, possimus ipsum, omnis adipisci nisi hic voluptatibus.
                    Veniam architecto nisi iusto deleniti, voluptatibus alias illo saepe in natus nobis amet eaque
                    laudantium. Architecto quaerat commodi quasi porro!
                </p>
                <Quote />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsam veritatis totam corrupti
                    sequi voluptate, magnam consequuntur assumenda aperiam deleniti hic laudantium dolorem quibusdam
                    dolor distinctio, temporibus, non id maiores aliquam iste sunt recusandae eius!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente blanditiis culpa! Incidunt
                    repellendus dicta facilis explicabo officia quibusdam architecto, in eos, quae fuga aperiam maiores
                    ipsam odio consequuntur fugiat optio reiciendis dolore! Error ratione natus aut voluptates tempora
                    obcaecati eveniet inventore eaque excepturi itaque.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
