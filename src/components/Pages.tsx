import {Box} from "@mui/material";

const Pages = ({children, title}) => {

    return (
        <>
            <Box ml="110px" mt="64px">
                <title>{title}</title>
                {children}
            </Box>
        </>
    );
};

export default Pages;
