import React, {
    CSSProperties,
    ReactNode,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from 'react';

export function useSlider(children: any, addHeight: number = 0) {
    const [isVisible, setVisible] = useState<boolean>(true);
    const [style, setStyle] = useState<CSSProperties>({height: "0"});
    const innerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setVisible(!!children);
    }, [children]);
    useLayoutEffect(() => {
        setStyle({height: (
                isVisible &&
                innerRef.current &&
                ((innerRef.current.scrollHeight ?? 0) + addHeight) + "px"
            ) ||
            "0"});
    }, [innerRef, isVisible, addHeight, setStyle, innerRef.current?.scrollHeight]);

    return { style, innerRef: innerRef, setVisible }
}

type Props = {
    style: CSSProperties
    children: ReactNode
}

export const Slider = ({ style, children }: Props) => {
    return (
        <div
            style={style}
            className="overflow-hidden transition-[height] ease-in duration-300">
            {children}
        </div>
    );
};