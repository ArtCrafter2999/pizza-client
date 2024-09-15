'use client'
import React, { useLayoutEffect, useState } from 'react';
import cn from "classnames";
import { Slider, useSlider } from "@/app/account/(FormComponents)/Slider";
import { useFocusReset } from "@/app/account/(FormComponents)/SequentialFocus";

type Props = {
    error: Error | undefined;
}

export function useError() {
    const [error, setError] = useState<Error>();

    function catchError(promise: Promise<any>) {
        setError(undefined);
        promise.catch((e: Error) => setError(e));
    }

    return {error, catchError, setError};
}

const ErrorPanel = ({error}: Props) => {
    const reset = useFocusReset()
    const [prevError, setPrevError] = useState<Error>();
    const { style, innerRef, setVisible } = useSlider(error?.message, 4);
    useLayoutEffect(() => {
        setVisible(!!error)
        if(error)
            reset?.()
            setPrevError(error)
    }, [error, reset, setVisible]);
    return (
        <Slider style={style}>
            <div
                ref={innerRef}
                className={cn(
                    `text-sm dark:bg-error-700 bg-error-100 border dark:border-error-500 border-error-600 rounded
                          p-1 flex w-full text-center cursor-pointer dark:hover:bg-error-800 hover:bg-error-100 
                          overflow-hidden`)}
                onClick={() => setVisible(false)}>
                {prevError?.message}
            </div>
        </Slider>
    );
};

export default ErrorPanel;