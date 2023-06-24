import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const validationSchema = yup.object().shape({
    email: yup.string().email("Не схоже на електронну пошту").required("Поле з ел.поштою не повинно бути порожнім"),
    birthday: yup.string().required(),
    password: yup
        .string()
        .min(
            6,
            "Пароль повинен містити 6 або більше символів з кожним із наступних: 1 великий, 1 маленький, цифра та спец.символ"
        )
        .minLowercase(1, "Пароль повинен містити хоча б одну маленьку літеру")
        .minUppercase(1, "Пароль повинен містити хоча б одну велику літеру")
        .minNumbers(1, "Пароль повинен містити хоча б одну цифру")
        .minSymbols(1, "Пароль повинен містити хоча б один спеціальний символ")
        .required(),
    firstName: yup.string().required("Ім'я не повинно бути порожнім"),
    lastName: yup.string().required("Прізвище не повинно бути порожнім"),
    phone: yup
        .string()
        .length(10, "Номер телефону повинен містити 10 цифр")
        .required("Номер телефону не повинен бути порожнім"),
});

export default validationSchema;