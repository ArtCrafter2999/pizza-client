import React, { useState } from 'react';
import { PulseLoader } from "react-spinners";
import { Slider, useSlider } from "@/app/account/(FormComponents)/Slider";

type Props = {
    isLoading: boolean
}

export function useLoading(){
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function loading(promise: Promise<any>) {
        if(isLoading) return Promise.resolve();
        setIsLoading(true);
        return promise.finally(() => setIsLoading(false));
    }

    return {isLoading, loading}
}

const Loading = ({ isLoading }: Props) => {
    const {style, innerRef} = useSlider(isLoading);
    return (
        <Slider style={style}>
            <div
                ref={innerRef}    
                className="w-full flex flex-row justify-center pt-0.5">
                <PulseLoader className="*:dark:bg-primary-500 *:bg-primary-700" color={"none"} size={10}/>
            </div>
        </Slider>
    );
};

export default Loading;