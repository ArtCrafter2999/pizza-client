'use client'
import React, {
    createContext,
    ReactNode, useCallback,
    useContext,
    useLayoutEffect,
    useRef,
    useState
} from "react";

type InputOrButton = HTMLInputElement | HTMLButtonElement

interface SeqFocusObj {
    appendTarget: (t: InputOrButton) => void;
    removeTarget: (t: InputOrButton) => void;
    reset: () => void;
}

const Context = createContext<SeqFocusObj>({} as SeqFocusObj)

export function useFocusRef<T extends InputOrButton>() {
    const { appendTarget, removeTarget } = useContext(Context);
    const ref = useRef<T>(null);

    useLayoutEffect(() => {
        const current = ref.current
        if (!current) return;
        appendTarget?.(current);
        return () => {
            removeTarget?.(current)
        }
    }, [appendTarget, ref, removeTarget]);

    return ref
}
export function useFocusReset() {
    return useContext(Context).reset;
}


type Props = {
    children: ReactNode
}
function interact(target: InputOrButton){
    if ("click" in target)
        target.click();
    if ("focus" in target)
        target.focus();
}

const SequentialFocus = ({ children }: Props) => {
    const [focusTargets, setFocusTargets] = useState<InputOrButton[]>([]);


    function reset() {
        interact(focusTargets[0])
    }

    function prev() {
        const index = focusTargets.findIndex(i => document.activeElement === i);
        if (index > -1 && index + 1 < focusTargets.length) {
            interact(focusTargets[index - 1])
        }
    }

    function next() {
        const index = focusTargets.findIndex(i => document.activeElement === i);
        if (index > -1 && index + 1 < focusTargets.length) {
            interact(focusTargets[index + 1])
        }
    }

    function keyCheck(event: React.KeyboardEvent<any>) {
        if (["Enter", "ArrowDown", "ArrowRight", "Down", "Right"].includes(event.key))
            next();
        else if (["ArrowUp", "ArrowLeft", "Up", "Left"].includes(event.key))
            prev();
    }

    const appendTarget = useCallback((target: InputOrButton) => {
        setFocusTargets(prev => [...prev, target])
    }, [setFocusTargets]);

    const removeTarget = useCallback((target: InputOrButton) => {
            setFocusTargets(prev => {
                const array = Array.from(prev);
                const index = array.indexOf(target)
                if (index > -1)
                    array.splice(index, 1)
                else
                    console.error("target is not in the array");
                return array;
            })
        }, [setFocusTargets]
    );
    return (
        <Context.Provider value={{ appendTarget, removeTarget, reset}}>
            <div onKeyUp={keyCheck}>
                {children}
            </div>
        </Context.Provider>
    );
};

export default SequentialFocus;
