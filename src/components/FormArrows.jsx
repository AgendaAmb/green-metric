import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function FormArrows({ number, setNumber }) {
    const pathname = usePathname();
    const handleNumber = (e) => {
        if (e.target.id === "left") {
            setNumber(number - 1);
        } else if (e.target.id === "right") {
            setNumber(number + 1);
        }
    };
    useEffect(() => {
        console.log(pathname);
    });
    return (
        <>
            <div className="navigation-arrow-left" onClick={handleNumber}>
                <div className="arrow">
                    <div id="left"></div>
                    {number > 0 && <ArrowLeftIcon />}
                </div>
            </div>
            <div className="navigation-arrow-right" onClick={handleNumber}>
                <div className="arrow">
                    <div id="right"></div>
                    {number > -1 && <ArrowRightIcon />}
                </div>
            </div>
        </>
    );
}
