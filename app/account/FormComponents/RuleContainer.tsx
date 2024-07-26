import React, {useMemo, useRef} from 'react';
import cn from "classnames";

type Props = {
    shown: boolean
    children: React.ReactNode
}

const RuleContainer = ({shown, children}: Props) => {
    const ref = useRef<HTMLOListElement>();
    const lines = useMemo(() => ref.current?.children.length, [ref.current, children]) ?? 0;
    return (
        <ol
            style={{height: shown? lines * 1.25 + "rem" : "0px"}}
            ref={ref as any}
            className={cn(
                "transition-[height, margin] ease-in duration-300 overflow-hidden", 
                shown && `mt-2`)}>
            {children}
        </ol>
    );
};

export default RuleContainer;