import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Login = () => {
    return (
        <>
            <Meta title={"Đăng nhập"} />
            <BreadCrumb title='Đăng nhập' />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Đăng nhập</h3>
                            <form action="" className="d-flex flex-column gap-15">

                                <CustomInput type="email"
                                    name="email"
                                    placeholder="Nhập email" />

                                <CustomInput type="password"
                                    name="password"
                                    placeholder="Nhập mật khẩu" />

                                <div>
                                    <Link to="/forgot-password"> Quên mật khẩu ?</Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type="submit">Đăng nhập</button>
                                        <Link to="/signup" className="button signup">Đăng ký</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login