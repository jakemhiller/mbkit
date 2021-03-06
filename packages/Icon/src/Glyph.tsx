import React, { AllHTMLAttributes, RefObject } from 'react';
import nanoid from 'nanoid';
import classnames from 'classnames';
import styles from './Icon.scss';

type ColorOptions = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'meta';

type BaseGlyphProps = AllHTMLAttributes<any> & {
    children: ({ id }: { id: string }) => React.ReactNode;
    color?: ColorOptions;
    forwardedRef: RefObject<any>;
};
type GlyphProps = AllHTMLAttributes<any> & {
    /** Sets the color of the glyph */
    color?: ColorOptions;
};

const BaseGlyph: React.FC<BaseGlyphProps> = (props: BaseGlyphProps) => {
    const { width = '16', height = '16', color, children, className = '', forwardedRef, ...rest } = props;
    const classNames = classnames({
        [styles[`${color}Color`]]: color,
        [className]: className,
    });
    const id: string = nanoid();
    const Component: any = 'svg';
    return (
        <Component
            {...rest}
            width={width}
            height={height}
            viewBox="0 0 16 16"
            className={classNames}
            ref={forwardedRef}
        >
            {children({ id })}
        </Component>
    );
};

export const GlyphAdd: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Add-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M8.5 2C12.0898509 2 15 4.91014913 15 8.5c0 3.5898509-2.9101491 6.5-6.5 6.5C4.91014913 15 2 12.0898509 2 8.5 2 4.91014913 4.91014913 2 8.5 2zM9 5H8v3H5v1h3v3h1V9h3V8H9V5z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphAdd.displayName = 'GlyphAdd';
export const GlyphCall: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Call-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M7.04265524 3.70761545L5.81576378 2.36951099c-.45139235-.49268132-1.18367723-.49268132-1.63565885 0l-.67257067.73377157c-.58358862.63690687-.67394566 1.6301987-.21882118 2.38154307C5.24337157 8.7087916 7.85076146 11.553228 10.8058295 13.6855373c.6871064.4958958 1.6004982.3971024 2.1825154-.2385186l.6729635-.7342002c.4515888-.4926813.4515888-1.2913866 0-1.7842822l-1.226695-1.33810444c-.4513924-.49268132-1.1838737-.49268132-1.6356589 0l-.4087674.44596334C9.04504582 8.83372993 7.73585088 7.40561844 6.63388785 5.937861l.40876739-.44596339c.45158877-.49268132.45158877-1.29160084 0-1.78428216z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphCall.displayName = 'GlyphCall';
export const GlyphCamera: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Camera-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M10.5 4c1.3604584 0 .6360474 1 2.25 1 .8651874 0 1.25.40759128 1.25 1.21875 0 .00198511-.03125 4.5760949-.03125 4.59375 0 .8060171-.3793796 1.21875-1.21875 1.21875l-.0528077-.0001649C11.9372976 12.028647 3.23731201 12 3.21875 12 2.38481263 12 2 11.6206204 2 10.78125c0-.0222218.03125-.83349335.03125-1.0625V7.82291667C2.03125 7.06404018 2 6.23813699 2 6.21875 2 5.38481263 2.37937961 5 3.21875 5H6.5c1.65536499 0 .69204712-1 2-1h2zm-1 2C8.11916667 6 7 7.11916667 7 8.5S8.11916667 11 9.5 11c1.38 0 2.5-1.11916667 2.5-2.5S10.88 6 9.5 6zm0 1.5c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphCamera.displayName = 'GlyphCamera';
export const GlyphCaution: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Caution-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M9.38147997 1.64542928L15.21131 12.5277786c.2608006.4868279.0775693 1.0929007-.4092586 1.3537014-.1452393.0778067-.3074539.11852-.4722214.11852H2.67017001c-.55228475 0-1-.4477153-1-1 0-.1647675.04071329-.3269822.11852003-.4722214L7.61852003 1.64542928c.26080068-.48682795.86687344-.67005925 1.35370138-.40925856.17377857.09309566.3161629.23547999.40925856.40925856zM8 9h1V5H8v4zm.5 3.5c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1-1 .4477153-1 1 .44771525 1 1 1z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphCaution.displayName = 'GlyphCaution';
export const GlyphChat: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Chat-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M3.59180112 10.8711685L4 14l2.8291104-2.2730205c.22054987.0152213.94436654 0 1.1708896 0 3.5898509 0 7-1.93573372 7-4.3519795C15 4.95875422 11.5898509 3 8 3 4.41014913 3 1 4.95875422 1 7.375c0 1.42886135 1.01768461 2.697737 2.59180112 3.4961685z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphChat.displayName = 'GlyphChat';
export const GlyphChevronBack: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Chevron---Back-${id}`}
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M9.35968758 8L5.6095656 3.31234752l.7808688-.62469504L10.6403124 8l-4.249878 5.3123475-.7808688-.624695z"
                        transform="rotate(-180 8.124939 8)"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphChevronBack.displayName = 'GlyphChevronBack';

export const GlyphChevronDown: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Chevron---Down-${id}`}
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M5.6095656 3.31234752l.7808688-.62469504L10.6403124 8l-4.249878 5.3123475-.7808688-.624695L9.35968758 8z"
                        transform="rotate(90 8.124939 8)"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphChevronDown.displayName = 'GlyphChevronDown';

export const GlyphChevronForward: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Chevron---Forward-${id}`}
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M5 3.62469505L5.78086881 3l4.24987799 5.31234752L5.78086881 13.624695 5 13l3.75012198-4.68765248z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphChevronForward.displayName = 'GlyphChevronForward';
export const GlyphChevronUp: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Chevron---Up-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M5.6095656 3.31234752l.7808688-.62469504L10.6403124 8l-4.249878 5.3123475-.7808688-.624695L9.35968758 8z"
                        transform="rotate(-90 8.124939 8)"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphChevronUp.displayName = 'GlyphChevronUp';

export const GlyphClear: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Clear-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M8.5 2C12.0898509 2 15 4.91014913 15 8.5c0 3.5898509-2.9101491 6.5-6.5 6.5C4.91014913 15 2 12.0898509 2 8.5 2 4.91014913 4.91014913 2 8.5 2zm1.6464466 4.14644661L8.5 7.793 6.85355339 6.14644661l-.70710678.70710678L7.793 8.5l-1.64655339 1.6464466.70710678.7071068L8.5 9.207l1.6464466 1.6465534.7071068-.7071068L9.207 8.5l1.6465534-1.64644661-.7071068-.70710678z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphClear.displayName = 'GlyphClear';
export const GlyphClose: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Close-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M12.0011737 4l.7071067.70710678L9.061 8.354l3.6472804 3.6471736-.7071067.7071068L8.354 9.061l-3.64689322 3.6472804L4 12.0011736 7.647 8.354 4 4.70710678 4.70710678 4 8.354 7.647 12.0011737 4z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphClose.displayName = 'GlyphClose';
export const GlyphDownload: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Download-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M11 12v1H4v-1h7zM7.99999998 3l-.00066963 5.904 2.67600005-2.28424942.6493392.76049884-3.8382357 3.27721378-3.81110355-3.25404741.6493393-.76049884L6.99933035 8.926 6.99999998 3h1z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphDownload.displayName = 'GlyphDownload';
export const GlyphDropdown: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Dropdown-Indicator-${id}`}
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path id={`Mask-${id}`} fill="#54575F" d="M8 12L3 4h10z" />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphDropdown.displayName = 'GlyphDropdown';

export const GlyphEdit: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Edit-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M3 10.0188601V13h2.9765282l7.2330165-7.23368641c.389025-.38906102.3858514-1.02302746-.0010036-1.40991826l-1.5657369-1.56588196c-.3895793-.38961533-1.0263823-.38461996-1.4097877-.00138846L3 10.0188601zm6.94523248-5.94927177l1.98435212 1.98453593-.9921761.99226796-1.98435209-1.98453593.99217607-.99226796z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphEdit.displayName = 'GlyphEdit';
export const GlyphEmail: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Email-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Email-${id}`}
                    fill="#54575F"
                    d="M14 4.99703014v6.00593976C14 11.5536144 13.544239 12 12.9975267 12H3.00247329C2.44882258 12 2 11.5469637 2 11.0029699V4.99703014c0-.10634141.01699806-.20879437.04836656-.30489467L7.6799078 9.38411064 8 9.65085414l.3200922-.2667435 5.6312947-4.69214715c.0315595.096445.0486131.1990278.0486131.30506665zM12.9975267 4c.0685939 0 .1355787.00695396.2003003.0201733L8.02224875 8.36768656a406169392.0297298 406169392.0297298 0 00-5.2176622-4.34805191C2.86926517 4.0067629 2.93518026 4 3.00247329 4h9.99505341z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphEmail.displayName = 'GlyphEmail';
export const GlyphError: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Error-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M8.5 15C4.90917391 15 2 12.0902609 2 8.5 2 4.90973913 4.90917391 2 8.5 2 12.0891304 2 15 4.90973913 15 8.5c0 3.5902609-2.9108696 6.5-6.5 6.5zM8 9h1V5H8v4zm.5 3.5c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1-1 .4477153-1 1 .44771525 1 1 1z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphError.displayName = 'GlyphError';
export const GlyphFavorite: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Favorite-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M6.53402882 12.5860153c-.42805336-.3462977-3.25756979-2.83843408-3.82338503-3.37569708C1.71471745 8.26335818 1 6.93314634 1 5.85693592 1 3.67725889 2.5245098 2 4.59343671 2c1.18337912 0 2.37905658.57874302 3.09493377 1.46930588C8.41148403 2.57443875 9.60249941 2 10.7809367 2 12.8503774 2 14.375 3.67714328 14.375 5.85693592c0 1.07240917-.6922923 2.35795808-1.7061102 3.34901698-.5199739.50702253-3.10025247 2.7735215-3.87734096 3.4276528-.80443198.6777006-1.39702245.6492111-2.25752002-.0475904zm1.61328887-.7172405c.75955811-.6393681 3.32569341-2.893442 3.82298761-3.3783492C12.8086191 7.6709305 13.375 6.61919215 13.375 5.85693592 13.375 4.20927888 12.2756939 3 10.7809367 3c-.98712392 0-2.00832102.55545962-2.51078292 1.37719439l-.59762533.86242167-.40701905-.61815937-.17649466-.2685873C6.6023459 3.55539667 5.58110877 3 4.59343671 3 3.09922839 3 2 4.20936619 2 5.85693592c0 .76502754.58523889 1.85425757 1.39946381 2.62844999.54690007.51930217 3.3566293 2.99401069 3.7636984 3.32333209.50543225.4092817.5661831.4122001.98415548.0600568z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphFavorite.displayName = 'GlyphFavorite';
export const GlyphFavoriteFilled: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Favorite---Filled-${id}`}
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M8.96947468 12.7511553c.48058861-.4045418 3.23253802-2.80076408 3.85034812-3.40318596C13.6870127 8.50024642 14.375 7.32584575 14.375 6.35693592 14.375 4.46653723 13.0842405 3 11.2809367 3c-1.1560443 0-2.34153797.64164663-2.92175316 1.59240769l-.17606962.2540827-.16729746-.2540827C7.43560127 3.64164663 6.25010759 3 5.09343671 3 3.29075949 3 2 4.46653723 2 6.35693592c0 .96890983.70302532 2.18077892 1.55517722 2.99103342.61655696.585444 3.43367088 3.05835946 3.79332911 3.34932516.66731013.5403648.99626582.580175 1.62096835.0538608z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphFavoriteFilled.displayName = 'GlyphFavoriteFilled';
export const GlyphInformation: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Information-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M8.5 2C12.0891304 2 15 4.90973913 15 8.5c0 3.5902609-2.9108696 6.5-6.5 6.5C4.90917391 15 2 12.0902609 2 8.5 2 4.90973913 4.90917391 2 8.5 2zm0 8.5c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1 1-.4477153 1-1-.44771525-1-1-1zM9 5H8v4h1V5z"
                        transform="rotate(-180 8.5 8.5)"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphInformation.displayName = 'GlyphInformation';
export const GlyphLocation: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Location-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M8 2c2.7614237 0 5 2.23857625 5 5 0 1.02785925-.3755018 1.94444444-.8333333 2.77777778-.2721419.49534582-1.4275428 1.88828902-3.4166667 4.15792842-.44854736.5118036-1.07087533.4899309-1.4900779 0-1.88763816-2.2061225-3.0838612-3.6045553-3.42658877-4.15792842C3.25702582 8.84726291 3 8.02785925 3 7c0-2.76142375 2.23857625-5 5-5zm0 3.5c-.82842712 0-1.5.67157288-1.5 1.5S7.17157288 8.5 8 8.5 9.5 7.82842712 9.5 7 8.82842712 5.5 8 5.5z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphLocation.displayName = 'GlyphLocation';
export const GlyphLockUnlocked: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Lock---Unlock-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Combined-Shape-${id}`}
                        fill="#54575F"
                        d="M4 9v5h9V9H4zm4.5-7C10.4329966 2 12 3.56700338 12 5.5V8h1c.5522847 0 1 .44771525 1 1v5c0 .5522847-.4477153 1-1 1H4c-.55228475 0-1-.4477153-1-1V9c0-.55228475.44771525-1 1-1h7V5.5C11 4.11928813 9.88071187 3 8.5 3c-1.09173931 0-2.04750095.70624461-2.37877915 1.72834039C6.04122746 4.97514476 6 5.23447312 6 5.5H5c0-.3705386.05776487-.73389033.16994006-1.0799855C5.63392777 2.98846877 6.97162369 2 8.5 2zm1.5 9H7v1h3v-1z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphLockUnlocked.displayName = 'GlyphLockUnlocked';
export const GlyphLocalLocked: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Lock-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M8.5 3C10.4329966 3 12 4.56700338 12 6.5V8h1c.5522847 0 1 .44771525 1 1v5c0 .5522847-.4477153 1-1 1H4c-.55228475 0-1-.4477153-1-1V9c0-.55228475.44771525-1 1-1h1V6.5C5 4.56700338 6.56700338 3 8.5 3zm.5 7H8v3h1v-3zm-.5-6C7.11928813 4 6 5.11928813 6 6.5V8h5V6.5C11 5.11928813 9.88071187 4 8.5 4z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphLocalLocked.displayName = 'GlyphLocalLocked';
export const GlyphNext: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Next-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M8.5 2C12.0898509 2 15 4.91014913 15 8.5c0 3.5898509-2.9101491 6.5-6.5 6.5C4.91014913 15 2 12.0898509 2 8.5 2 4.91014913 4.91014913 2 8.5 2zm-1 2.79289322L6.79289322 5.5l3 3-3 3L7.5 12.2071068 11.2071068 8.5 7.5 4.79289322z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphNext.displayName = 'GlyphNext';
export const GlyphPrevious: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Previous-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M8.5 2C12.0898509 2 15 4.91014913 15 8.5c0 3.5898509-2.9101491 6.5-6.5 6.5C4.91014913 15 2 12.0898509 2 8.5 2 4.91014913 4.91014913 2 8.5 2zm1.7071068 3.5L9.5 4.79289322 5.79289322 8.5 9.5 12.2071068 10.2071068 11.5l-3.00000002-3 3.00000002-3z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphPrevious.displayName = 'GlyphPrevious';
export const GlyphOther: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Other-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M4.5 6c1.3254834 0 2.41003867 1.02266455 2.49468232 2.33455975L7 8.5c0 1.3254834-1.02266455 2.4100387-2.33455975 2.4946823L4.5 11C3.11928813 11 2 9.89033794 2 8.5c0-1.3254834 1.02266455-2.41003867 2.33455975-2.49468232L4.5 6zm7 0c1.3254834 0 2.4100387 1.02266455 2.4946823 2.33455975L14 8.5c0 1.3254834-1.0226646 2.4100387-2.3345597 2.4946823L11.5 11C10.1192881 11 9 9.89033794 9 8.5c0-1.3254834 1.0226646-2.41003867 2.3345597-2.49468232L11.5 6z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphOther.displayName = 'GlyphOther';
export const GlyphPlay: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Play-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Play-${id}`}
                    fill="#54575F"
                    d="M8.5 2C12.0891304 2 15 4.90973913 15 8.5c0 3.5902609-2.9108696 6.5-6.5 6.5C4.90917391 15 2 12.0902609 2 8.5 2 4.90973913 4.90917391 2 8.5 2zM7 6v5l4-2.5L7 6z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphPlay.displayName = 'GlyphPlay';
export const GlyphPreviewHidden: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Preview-Hidden-${id}`}
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M14.7459287 7.34823842c.4541356.6447027.4844115 1.49085335.0908276 2.16241597l-.090827.14109696-.2119706.29471182C12.5486435 12.6488211 10.3706573 14 8 14c-1.32661963 0-2.59290391-.4231245-3.79885286-1.2693735l3.14659838-1.8165675C7.55568486 10.9701048 7.77435123 11 8 11c1.15906647 0 2.133905-.7887738 2.4170173-1.85882315l3.9653161-2.29090666c.1219179.16094375.2431164.32693316.3635953.49796823zM8 3c1.82848753 0 3.5423544.80382096 5.1416006 2.41146289L15.1554446 4.25c.2391463-.13807119.5449415-.05613361.6830127.1830127.1380712.23914631.0561336.54494152-.1830127.6830127l-.1387653.07951525C15.3980015 5.168431 15.2691849 5.184332 15.1554446 5.25L.57306152 13.6707762C.44170336 13.6411314.32263986 13.5588286.25 13.4330127.11192881 13.1938664.19386639 12.8880712.4330127 12.75l2.27694457-1.3133355c-.49643915-.5168174-.98173449-1.1117851-1.45588602-1.78490292-.45413558-.6447027-.48441147-1.49085335-.09082758-2.16241597l.09082705-.14109696.21197062-.29471182C3.45135651 4.35117894 5.62934273 3 8 3zm0 3C6.61928813 6 5.5 7.11928813 5.5 8.5c0 .41901604.10308538.8139552.28527877 1.16084011l4.32711293-2.4985242C9.66905331 6.46368499 8.88867637 6 8 6z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphPreviewHidden.displayName = 'GlyphPreviewHidden';
export const GlyphPreview: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Preview-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M8 3c2.4553216 0 4.7039645 1.44941281 6.7459287 4.34823842.4865739.6907529.4865741 1.61275981 6e-7 2.30351293l-.2119706.29471182C12.5486435 12.6488211 10.3706573 14 8 14c-2.45532161 0-4.70396452-1.4494128-6.74592875-4.34823842-.48657384-.6907529-.48657405-1.61275981-5.3e-7-2.30351293l.21197062-.29471182C3.45135651 4.35117894 5.62934273 3 8 3zm0 3C6.61928813 6 5.5 7.11928813 5.5 8.5S6.61928813 11 8 11s2.5-1.11928813 2.5-2.5S9.38071187 6 8 6z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphPreview.displayName = 'GlyphPreview';
export const GlyphRefresh: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Refresh-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Refresh-${id}`}
                        fill="#54575F"
                        d="M13.0707107 2.00502525c.273367.03905243.4633165.29231842.424264.56568543l-.5 3.5c-.0314269.21998877-.2042752.3928371-.424264.42426407l-3.50000002.5c-.27336701.03905243-.526633-.15089707-.56568543-.42426407-.03905243-.27336701.15089707-.526633.42426407-.56568543l2.91088988-.41608893-.0710659-.11586141c-1.2317351-1.891349-3.89110811-2.550788-5.86721849-1.41422264-2.24970275 1.29392278-3.04460233 4.03194004-1.84969793 6.09369783 1.31948818 2.2767218 4.08398584 3.0146473 6.37023092 1.6997071 1.1476494-.6600737 1.9080378-1.8391235 2.0816369-3.19226111.0351393-.2738975.2856632-.46744923.5595607-.43230989.2738975.03513933.4674492.28566318.4323099.55956068-.2126787 1.65774832-1.151184 3.11298402-2.5749369 3.93185942-2.76350699 1.5894387-6.1380118.6886844-7.73399932-2.0651255-1.47725404-2.54894029-.50536658-5.89658909 2.21632508-7.4619776 2.24799771-1.29294211 5.18252154-.71068444 6.81767694 1.21717525l.2840242-1.97988913c.0390524-.273367.2923184-.4633165.5656854-.42426407z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphRefresh.displayName = 'GlyphRefresh';
export const GlyphRemove: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <>
                    <defs>
                        <path
                            id={`path-1-${id}`}
                            d="M8.5 2C12.0898509 2 15 4.91014913 15 8.5c0 3.5898509-2.9101491 6.5-6.5 6.5C4.91014913 15 2 12.0898509 2 8.5 2 4.91014913 4.91014913 2 8.5 2zM11 8H6v1h5V8z"
                        />
                    </defs>
                    <g id={`Icons/Glyphs/Remove-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <mask id={`mask-2-${id}`} fill="#fff">
                            <use xlinkHref={`#path-1-${id}`} />
                        </mask>
                        <use id={`Mask-${id}`} fill="#54575F" xlinkHref={`#path-1-${id}`} />
                    </g>
                </>
            )}
        </BaseGlyph>
    ),
);
GlyphRemove.displayName = 'GlyphRemove';
export const GlyphSave: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Grey/Save-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Combined-Shape-${id}`}
                    fill="#54575F"
                    d="M9.66666667 3s.80546063.80428512 2.41638183 2.41285536l.6351628.65559736C12.8989416 6.25499754 13 6.5045425 13 6.7642778V12c0 .5522847-.4477153 1-1 1H4c-.55228475 0-1-.4477153-1-1V4c0-.55228475.44771525-1 1-1h5.66666667zM10 8H6c-.51283584 0-.93550716.38604019-.99327227.88337887L5 9v3h6V9c0-.55228475-.4477153-1-1-1zM9 4H6v2c0 .55228475.44771525 1 1 1h1c.55228475 0 1-.44771525 1-1V4z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphSave.displayName = 'GlyphSave';
export const GlyphSearch: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Search-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Search--${id}`}
                        fill="#54575F"
                        d="M7 12c2.76142375 0 5-2.23857625 5-5S9.76142375 2 7 2 2 4.23857625 2 7s2.23857625 5 5 5zm3.8535534-1.8535534l2.3486328 2.3486328-.7071068.7071068-2.3486328-2.3486328.7071068-.7071068zM7 3c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4-4-1.790861-4-4 1.790861-4 4-4z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphSearch.displayName = 'GlyphSearch';
export const GlyphSettings: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Settings-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M9.51349533 2v1.7615c.53022787.186 1.01555537.4645 1.43428907.82l1.5387203-.8805L14 6.299l-1.5382158.88c.0489364.2665.0787018.54.0787018.821 0 .281-.0297654.554-.0787018.821L14 9.701l-1.5134953 2.598-1.5387203-.88c-.4187337.355-.9040612.633-1.43428907.8195V14H6.48650467v-1.7615c-.53022787-.1865-1.01555537-.4645-1.43428908-.8195l-1.53872026.88L2 9.701l1.53821576-.88C3.48927941 8.554 3.459514 8.281 3.459514 8c0-.281.02976541-.5545.07870176-.821L2 6.299l1.51349533-2.598 1.53872026.8805c.41873371-.3555.90406121-.634 1.43428908-.82V2h3.02699066zM8 6c-1.1045 0-2 .8955-2 2s.8955 2 2 2 2-.8955 2-2-.8955-2-2-2z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphSettings.displayName = 'GlyphSettings';
export const GlyphSliderIndicator: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Slider-Indicator-${id}`}
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path id={`Mask-${id}`} fill="#54575F" d="M9 12L4 4h10z" transform="rotate(-90 9 8)" />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphSliderIndicator.displayName = 'GlyphSliderIndicator';
export const GlyphSortOrder: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Sort-Order-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path id={`Mask-${id}`} fill="#54575F" d="M13 10v1H4v-1h9zm0-5v1H4V5h9z" />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphSortOrder.displayName = 'GlyphSortOrder';
export const GlyphSortedDown: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <>
                    <defs>
                        <path id={`path-1-${id}`} d="M8 12L4 6h8z" />
                    </defs>
                    <g
                        id={`Icons/Glyphs/Sort/Down-Arrow-Sort-${id}`}
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                    >
                        <mask id={`mask-2-${id}`} fill="#fff">
                            <use xlinkHref={`#path-1-${id}`} />
                        </mask>
                        <use id={`Mask-${id}`} fill="#54575F" xlinkHref={`#path-1-${id}`} />
                    </g>
                </>
            )}
        </BaseGlyph>
    ),
);
GlyphSortedDown.displayName = 'GlyphSortedDown';

export const GlyphSortedUp: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <>
                    <defs>
                        <path id={`path-1-${id}`} d="M8 11L4 5h8z" />
                    </defs>
                    <g
                        id={`Icons/Glyphs/Sort/Up-Arrow-Sort-${id}`}
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                    >
                        <mask id={`mask-2-${id}`} fill="#fff">
                            <use xlinkHref={`#path-1-${id}`} />
                        </mask>
                        <use
                            id={`Mask-${id}`}
                            fill="#54575F"
                            transform="matrix(1 0 0 -1 0 16)"
                            xlinkHref={`#path-1-${id}`}
                        />
                    </g>
                </>
            )}
        </BaseGlyph>
    ),
);
GlyphSortedUp.displayName = 'GlyphSortedUp';

export const GlyphStart: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Star-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M8.89306436 11.6029954l2.11181794 1.3861022c.0162689.0106782.033376.013507.049757.009189.0445815-.0117515.0796734-.0732078.0637576-.1393497l-.6075928-2.5250006c-.152477-.63365566.0556121-1.30362897.5402942-1.72699751l1.9107655-1.66904863c.021037-.01837576.03562-.04831359.0378275-.08242638.0042913-.06631333-.036525-.11524015-.0779963-.11817997l-2.4861077-.17623598c-.64195711-.04550726-1.19777258-.46795758-1.43320672-1.08089618l-.92888333-2.41829179c-.01080725-.02813605-.02969624-.04790585-.05022463-.05654349-.03454247-.01453428-.07670326.00428644-.09677557.05654349l-.92888332 2.41829179c-.23543414.6129386-.79124962 1.03538892-1.43320675 1.08089618l-2.4861077.17623598c-.01801859.0012773-.0367845.01129072-.05211986.03052253-.03985625.04998302-.03288338.13092103.01195109.17008382l1.91076552 1.66904863c.4846821.42336854.69277119 1.09334185.54029414 1.72699751l-.6075928 2.5250006c-.00821584.0341429-.00272113.0705428.01412263.0986546.02598077.0433611.0665166.053084.09939198.0315061l2.11181797-1.3861022c.54491971-.3576608 1.24121469-.3576608 1.78613441 0zm-1.23741663.8360076l-2.11181797 1.3861022c-.5120086.3360594-1.19019366.173391-1.50591606-.3535406-.15184927-.2534321-.19789463-.5584613-.1285643-.8465805l.60759281-2.5250005c.06603357-.2744187-.02367824-.56325899-.22590959-.73990755L2.3802671 7.69102743c-.44895481-.39216084-.50819894-1.07984141-.13594871-1.54667383.18833722-.23619038.46414875-.38336245.76327003-.40456665l2.48610769-.17623598c.24976791-.01770562.47246754-.18696958.57041316-.44196512l.92888333-2.41829179c.21983085-.57231639.85590841-.85626364 1.41811219-.6197077.27387555.11523737.48834828.33971129.59589692.6197077l.92888332 2.41829179c.09794567.25499554.32064527.4242595.57041317.44196512l2.4861077.17623598c.6002223.04254875 1.0443687.57495066 1.0051981 1.18025408-.0192724.2978158-.1548717.57619201-.3778768.7709864l-1.9107655 1.66904862c-.2022314.17664856-.2919432.46548885-.2259096.73990755l.6075928 2.5250005c.1411611.5866294-.2020099 1.1876227-.7811162 1.3402727-.2915231.0768444-.6006331.0257297-.8533642-.1401516L8.34434658 12.439003c-.21178221-.1390043-.47691665-.1390043-.68869885 0z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphStart.displayName = 'GlyphStart';
export const GlyphSuccess: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g id={`Icons/Glyphs/Success-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <path
                        id={`Mask-${id}`}
                        fill="#54575F"
                        d="M8.5 2C12.0891304 2 15 4.90973913 15 8.5c0 3.5902609-2.9108696 6.5-6.5 6.5C4.90917391 15 2 12.0902609 2 8.5 2 4.90973913 4.90917391 2 8.5 2zm3.133797 3.65956588L7.34801667 10.2662177 5.36418018 8.15740286c-.18921118-.20113116-.50564616-.21079421-.70677732-.02158304-.20113116.18921118-.21079421.50564616-.02158304.70677732l2.35183821 2.49999996c.19823583.2107244.53339888.2097318.73038313-.002163l2.32408094-2.49999998c.7746936-.83333333 2.3240809-2.5 2.3240809-2.5.1880165-.20224831.1764794-.51862051-.0257689-.70663708-.2022483-.18801657-.5186205-.17647947-.7066371.02576884z"
                    />
                </g>
            )}
        </BaseGlyph>
    ),
);
GlyphSuccess.displayName = 'GlyphSuccess';
export const GlyphTrash: React.FC<GlyphProps> = React.forwardRef((props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
    <BaseGlyph {...props} forwardedRef={ref}>
        {({ id }) => (
            <g id={`Icons/Glyphs/Trash-${id}`} fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    id={`Mask-${id}`}
                    fill="#54575F"
                    d="M12 5l-.8891617 8.0024554C11.049624 13.553384 10.5490248 14 10.009222 14H5.99077797c-.54719156 0-1.04036813-.4463114-1.10161626-.9975446L4 5h8zm1-2v1H3V3h10zm-3-1v1H6V2h4z"
                />
            </g>
        )}
    </BaseGlyph>
));
GlyphTrash.displayName = 'GlyphTrash';
export const GlyphUnsorted: React.FC<GlyphProps> = React.forwardRef(
    (props: GlyphProps, ref: RefObject<SVGSVGElement>) => (
        <BaseGlyph {...props} forwardedRef={ref}>
            {({ id }) => (
                <g
                    id={`Icons/Glyphs/Sort/Unsorted-${id}`}
                    fill="#A0A5AB"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                >
                    <path id={`Path-82-Copy-${id}`} d="M6 1l4 4-4 4z" transform="rotate(-90 8 5)" />
                    <path id={`Path-82-Copy-2-${id}`} d="M6 7l4 4-4 4z" transform="rotate(90 8 11)" />
                </g>
            )}
        </BaseGlyph>
    ),
);

GlyphUnsorted.displayName = 'GlyphUnsorted';
