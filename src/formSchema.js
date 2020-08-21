import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(6, "Your name must be at least 6 characters long.")
        .required("We need to know who you are")    ,
    size: yup
        .string()
        .required("We need to know how bit to make your pie") ,
     toppings: yup,
     special: yup
     .string(),
});

export default formSchema