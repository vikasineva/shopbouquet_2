import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const validationSchema = yup.object().shape({
    arrivalDate: yup.string().required("Дата не повинна бути порожньою"),
    firstName: yup.string().required("Ім'я не повинно бути порожнім"),
    phone: yup
        .string()
        .length(10, "Номер телефону повинен містити 10 цифр")
        .required("Номер телефону не повинен бути порожнім"),
    apartment: yup.number().min(1, 'Значення номеру квартири не може бути менше за 1').typeError("Номер квартири повинен складатися лише з цифр"),
    house: yup
        .string()
        .required("Номер дому не може бути порожнім"),
    city: yup
        .string()
        .required("Місто не може бути порожнім"),
    street: yup
        .string()
        .required("Вулиця не може бути порожньою"),
});

export default validationSchema;