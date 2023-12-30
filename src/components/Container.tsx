"use client"
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export function Container({ children }: Props) {
    return (
        <div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-12">
            {children}
        </div>
    )
};