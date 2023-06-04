import { Box } from "@chakra-ui/react"

export default function Background() {
    return(
        <>
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                zIndex="-1"
                backgroundColor="gray.800"
            />
        </>
    )
}