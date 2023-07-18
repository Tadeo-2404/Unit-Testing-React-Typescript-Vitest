import { useState } from 'react';

type AccordeonProps = {
    title: string,
    children: React.ReactNode
}

export const Accordeon = ({ title, children }: AccordeonProps) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <h3>{title}</h3>
            <button onClick={() => setOpen(!open)}>{open ? "Close" : "Open"}</button>
            {
                open && 
                    <div>
                        {children}
                    </div>
            }
        </div>
    )
}
