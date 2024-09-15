import React, { useLayoutEffect } from "react";
import cn from "classnames";
import { buttonStyles } from "@/app/button-styles";

type Props = {
    variants: { value: any, display: string }[]
    required?: boolean;
    setValue: (v: any | undefined) => void
    value?: any;
    className?: string
    style?: string
}

const CheckboxButtonRow = ({ variants, required, setValue, value, className, style = "secondary-border" } : Props) => {

    useLayoutEffect(() => {
        if(required && !value){
            setValue(variants[0].value)
        }
    }, [required, setValue, value, variants]);

    function onButtonClick(v: string) {
        console.log(`value: ${value}, v: ${v}`)
        if(value === v && !required)
            setValue(undefined);
        else
            setValue(v);
    }

    return (
        <div className="flex *:flex-1 rounded-r">
            {variants.map((v, i) => {
                const classNames = [];
                if(i === 0)
                    classNames.push("rounded-l-xl")
                if(i === variants.length-1)
                    classNames.push("rounded-r-xl")
                else
                    classNames.push("border-r-0")


                return (
                    <div
                        key={i}
                        className={cn(
                            "flex justify-center items-center",
                            className,
                            buttonStyles[`${style}${value === v.value? "-selected": ""}`],
                            value === v.value? "select-text" : "select-none",
                            classNames)
                        }
                        onClick={() => onButtonClick(v.value)}
                    >
                        {v.display}
                    </div>
                )
            })}
        </div>
    );
};

export default CheckboxButtonRow;