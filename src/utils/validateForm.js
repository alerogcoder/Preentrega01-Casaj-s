import { mixed, object, string } from "yup"

let userSchema = object({
    fullname: string().required("El campo nombre completo es requerido"),
    phone: mixed().required("El campo teléfono es requerido"),
    email: string().email("El campo email debe contener una @")
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", message: error.message }
    }

}

export default validateForm