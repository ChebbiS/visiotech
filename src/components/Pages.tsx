import {Box} from "@mui/material";
import type {ReactNode} from "react";

type PagesProps = {
    children: ReactNode;
    title: string;
};

const Pages = ({children, title}: PagesProps) => {
    return (
        <Box>
            <title>{title}</title>
            {children}
        </Box>
    );
};

export default Pages;
