import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
      <Meta title={"Danh sách yêu thích"} />
      <BreadCrumb title='Danh sách yêu thích' />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/DoremonCD.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="tittle">Tuyển tập Doraemon chuyên đề</h5>
                  <h6 className="price">100.000 VNĐ</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/DoremonCD.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="tittle">Tuyển tập Doraemon chuyên đề</h5>
                  <h6 className="price">100.000 VNĐ</h6>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                <div className="wishlist-card-image">
                  <img src="images/DoremonCD.jpg" className="img-fluid w-100" alt="watch" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="tittle">Tuyển tập Doraemon chuyên đề</h5>
                  <h6 className="price">100.000 VNĐ</h6>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};

export default Wishlist