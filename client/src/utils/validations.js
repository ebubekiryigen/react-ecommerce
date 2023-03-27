import * as yup from "yup"


export const SignUpValidation = yup.object().shape({
    email: yup.string().email('Geçerli bir email girin.').required('Zorunlu alan'),
    password: yup.string().min(5, "Parolanız minimum 5 karakter olmalıdır.").required('Zorunlu Alan'),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Parolalar uyuşmuyor").required('Zorunlu Alan')
})

export const SignInValidation = yup.object().shape({
    email: yup.string().email('Geçerli bir email girin.').required('Zorunlu alan'),
    password: yup.string().min(5, "Parolanız minimum 5 karakter olmalıdır.").required('Zorunlu Alan'),
})