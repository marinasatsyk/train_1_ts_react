import { type } from "@testing-library/user-event/dist/type";
import React from "react";


type CardProps = {
    title: string;
    content: string;
}

// export default function Card(props: CardProps) {
export default function Card({ title, content }: CardProps) {
    console.log(title, content);

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}