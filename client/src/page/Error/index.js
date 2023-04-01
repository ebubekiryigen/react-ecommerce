import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";


export default function Error(){
        return(
            <div>
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Error 404</AlertTitle>
                    <AlertDescription>
                        Page Was Not Found
                    </AlertDescription>
                </Alert>
            </div>
        )
}