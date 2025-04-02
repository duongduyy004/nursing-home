import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Sai định dạng email').required('Email không được để trống'),
    password: Yup.string()
        .required('Mật khẩu không được để trống')
        .min(6, 'Tối thiểu 6 kí tự')
        .matches(/[a-zA-Z1-9]/, 'Mật khẩu chỉ có thể chứa kí tự và chữ số')
})

export const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .email('Sai định dạng email').required('Email không được để trống'),
    password: Yup.string()
        .required('Mật khẩu không được để trống')
        .min(6, 'Tối thiểu 6 kí tự')
        .matches(/[a-zA-Z1-9]/, 'Mật khẩu chỉ có thể chứa kí tự và chữ số'),
    name: Yup.string()
        .required('Họ tên không được để trống')
})

export const UpdateUserSchema = Yup.object().shape({
    name: Yup.string()
        .required('Họ tên không được để trống'),
    phone: Yup.string()
        .required('Số điện thoại không được để trống')
});

export const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('Vui lòng nhập mật khẩu cũ'),
    newPassword: Yup.string()
        .required('Vui lòng nhập mật khẩu mới')
        .min(6, 'Tối thiểu 6 kí tự')
        .matches(/[a-zA-Z1-9]/, 'Mật khẩu chỉ có thể chứa kí tự và chữ số'),
    confirmPassword: Yup.string()
        .required('Vui lòng nhập lại mật khẩu mới')
        .oneOf([Yup.ref('newPassword')], 'Mật khẩu chưa trùng khớp')
})

export const RequestPasswordSchema = Yup.object().shape({
    phone: Yup.string()
        .length(10, 'Tối đa 10 số')
        .required('Số điện thoại không được để trống'),
})

export const ForgotPasswordSchema = Yup.object().shape({
    verify_code: Yup.string()
        .required('Vui lòng nhập mã xác nhận'),
    newPassword: Yup.string()
        .required('Vui lòng nhập mật khẩu mới')
        .min(6, 'Tối thiểu 6 kí tự')
        .matches(/[a-zA-Z1-9]/, 'Mật khẩu chỉ có thể chứa kí tự và chữ số'),
    confirmPassword: Yup.string()
        .required('Vui lòng nhập lại mật khẩu mới')
        .oneOf([Yup.ref('newPassword')], 'Mật khẩu chưa trùng khớp')

})