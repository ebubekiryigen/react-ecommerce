import {Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert} from "@chakra-ui/react"
import {useFormik} from "formik"
import { SignInValidation } from "../../../utils/validations"
import { userServices } from "../../../services"
import { useDispatch } from "react-redux"
import { login } from "../../../store/user"
import { useNavigate } from "react-router-dom"


export default function Signin(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
        },
        validationSchema:SignInValidation,
        onSubmit: async (values, bag) =>{
            try {
                const loginResponse = await userServices.login({email:values.email, password:values.password})
                dispatch(login(loginResponse))
                navigate('/profile')
            } catch (error) {
                bag.setErrors({general: error.response.data.message})
            }
        }
    })

    return(
        <div>
            <Flex align="center" width="full" justifyContent="center" direction="column" >
                <Box pt={10}>
                    <Heading>Sign In</Heading>
                </Box>
                <Box my={5} textAlign="left" >
                    <form onSubmit={formik.handleSubmit}>
                        <Box my="4">
                            {
                                formik.errors.general && (
                                    <Alert status="error">{formik.errors.general}</Alert>
                                )
                            }
                        </Box>
                        <FormControl>
                            <FormLabel>E-mail</FormLabel>
                            <Input
                            isInvalid={formik.touched.email && formik.errors.email}
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input
                            isInvalid={formik.touched.password && formik.errors.password}
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            />
                        </FormControl>
                        <Button mt="4" width="full" type="submit" >Giriş Yap</Button>
                    </form>
                </Box>
            </Flex>
        </div>
    )

}