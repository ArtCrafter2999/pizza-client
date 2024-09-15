'use client'
import React from 'react';
import cn from "classnames";
import { Slider, useSlider } from "@/app/account/(FormComponents)/Slider";

type Props = {
    shown: boolean
    children: React.ReactNode
}

const RuleContainer = ({ shown, children }: Props) => {
    const { style, innerRef} = useSlider(shown, 4);
    return (
        <Slider style={style}>
            <div
                ref={innerRef}
                className={cn(
                    "transition-[height, margin] ease-in duration-300 overflow-hidden",
                    shown && `mt-2`)}>
                {children}
            </div>
        </Slider>
    );
};

export default RuleContainer;