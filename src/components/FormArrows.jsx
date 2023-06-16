"use client";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export default function FormArrows({ right, left }) {
    const router = useRouter();
    const prev = () => {
        router.push(left);
    };
    const next = () => {
        router.push(right);
    };

    return (
        <div className="nav-arrows">
            <div className="navigation-arrow-left" onClick={prev}>
                <div className="arrow">
                    <div id="left"></div>
                    {left && <ArrowLeftIcon />}
                </div>
            </div>
            <div className="navigation-arrow-right" onClick={next}>
                <div className="arrow">
                    <div id="right"></div>
                    {right && <ArrowRightIcon />}
                </div>
            </div>
        </div>
    );
}
