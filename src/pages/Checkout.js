import React from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import DoremonCD from '../images/DoremonCD.jpg'
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">TVTH Store</h3>
                            <nav style={{ "--bs-breadcrumb-divider": ">" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className="text-dark total-price" to="/cart">Giỏ hàng</Link>
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total-price active" aria-current="page">
                                        Thông tin
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total-price active">
                                        Giao hàng
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item total-price active" aria-current="page">
                                        Thanh toán
                                    </li>
                                </ol>
                            </nav>

                            <h4 className="title total pt-3">Thông tin cá nhân</h4>
                            <p className="user-details total">
                                Minh Hảo (duongminhhao23@gmail.com)
                            </p>
                            <h4 className="mb-3 pt-3">Địa chỉ giao hàng</h4>
                            <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                <div className="w-100">
                                    <select name=""
                                        className="form-control"
                                        id="">
                                        <option value="" selected disabled>Nhập Khu vực</option>
                                    </select>
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Tên" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Họ" className="form-control" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Địa chỉ" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Thành phố" className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <select name=""
                                        className="form-control"
                                        id="">
                                        <option value="" selected disabled>Nhập quận</option>
                                    </select>
                                </div>

                                <div className="w-100 py-5">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark"><BiArrowBack className="me-2" /> Trở về giỏ hàng</Link>
                                        <Link to="/product" className="button"> Tiếp tục mua hàng</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10 mb-2 align-items-center">
                                <div className="w-75 d-flex gap-10">
                                    <div className="w-25 position-relative">
                                        <span
                                            style={{ top: "-10px", right: "2px" }}
                                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                            1
                                        </span>
                                        <img className="img-fluid" src={DoremonCD} alt="product" />
                                    </div>
                                    <div>
                                        <h5 className="total-price">Chuyên đề Doremon</h5>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="total">100.000</h5>
                                </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Thành tiền</p>
                                <p className="total-price">100.000 VNĐ</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Phí ship</p>
                                <p className="mb-0 total-price">10.000 VNĐ</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                            <h4 className="total"> Tổng cộng</h4>
                            <h5 className="total-price">110.000 VNĐ</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Checkout