
'use client';
import Agua from "@components/Agua";


export default function Page(props) {
    return (
        <div className="overflow-y">
            <Agua data={props} />
        </div>
    );
}