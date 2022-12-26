import classNames from 'classnames/bind';
import { useCallback, useMemo, useState } from 'react';
import LargeBtn from '../Button/Type/Large';
import Input from '../Input';
import style from './style.module.scss';

type Props = {
    title?: string;
    plhdTextArea?: string;
    plhdInput3?: string;
    nameField?: string[];
    noTitle?: boolean;

    noBorderTop?: boolean;
    mt?: string;
    pt?: string;
};
const cx = classNames.bind(style);
interface IFormData {
    name: string;
    email: string;
    website: string;
    textComments: string;
}
const CommentForm = (props: Props) => {
    const { plhdTextArea, plhdInput3, nameField, noTitle, ...rest } = props;
    const [formData, setFormData] = useState<IFormData>({ name: '', email: '', website: '', textComments: '' });

    const handleSubmit = useCallback(() => {
        alert(`
        name: ${formData.name}
        email: ${formData.email}
        website: ${formData.website}
        textComments: ${formData.textComments}
        `);
    }, [formData]);

    const styleWp = useMemo(() => {
        const style: { [key: string]: string } = {};
        if (rest.mt) {
            style.marginTop = rest.mt;
        }
        if (rest.pt) {
            style.paddingTop = rest.pt;
        }
        if (rest.noBorderTop) {
            style.borderTop = 'none';
        }
        return style;
    }, [rest]);
    return (
        <div className={cx('wrapper-comment-form')} style={styleWp}>
            {noTitle ? null : (
                <h4>
                    <span>{props.title || 'Leave a Reply'}</span>
                </h4>
            )}
            <textarea
                value={formData.textComments}
                onChange={(e) => setFormData((prev) => ({ ...prev, textComments: e.target.value }))}
                placeholder={props.plhdTextArea || 'Write comment'}
                name=''
                id=''
                cols={30}
                rows={10}
            ></textarea>
            <div className={cx('group-input')}>
                <div className={cx('input')}>
                    <Input
                        onChange={(v) => setFormData((prev) => ({ ...prev, name: v }))}
                        placeholder='Name'
                        value={formData.name}
                    />
                </div>
                <div className={cx('bulkhead')}></div>
                <div className={cx('input')}>
                    <Input
                        onChange={(v) => setFormData((prev) => ({ ...prev, email: v }))}
                        placeholder='Email'
                        value={formData.email}
                    />
                </div>
            </div>
            <Input
                onChange={(v) => setFormData((prev) => ({ ...prev, website: v }))}
                placeholder={props.plhdInput3 || 'Website'}
                value={formData.website}
            />
            <LargeBtn onClick={handleSubmit} className={cx('submit-btn')} text='post comment' />
        </div>
    );
};

export default CommentForm;
