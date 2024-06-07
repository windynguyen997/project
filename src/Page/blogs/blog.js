import React from 'react';
import './blog.css'
import { Col, Container, Row } from 'reactstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <h1 className='headblog'>Kiến thức nuôi mèo</h1>
                <div className='line1'></div>
                <Row>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/meo-co-bi-cam-lanh-khong'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/05/meo-chua-benh-cam-lanh-cho-meo-con1-280x280.jpg'></img>
                    <h5>Mèo Có Bị Cảm Lạnh Không ?</h5>
                    </a>
                    <p>Mèo, giống như con người, cũng có thể bị cảm lạnh do nhiều nguyên nhân khác nhau. Việc nhận biết và xử lý kịp thời các triệu chứng cảm lạnh...</p>
                    <a className='more' href='https://helloconsen.com/meo-co-bi-cam-lanh-khong'>Xem thêm</a>
                    </Col>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/meo-bi-so-mui-la-do-dau'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/04/ef90b190-thuoc-tri-so-mui-cho-meo-3-280x280.jpg'></img>
                    <h5>Mèo Bị Sổ Mũi Là Do Đâu?</h5>
                    </a>
                    <p>Mèo bị sổ mũi là một triệu chứng phổ biến, có thể do nhiều nguyên nhân khác nhau...</p>
                    <a className='more' href='https://helloconsen.com/meo-bi-so-mui-la-do-dau'>Xem thêm</a>
                    </Col>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/meo-oi-vang-do-nguyen-nhan-gi'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/05/meo-ngo-doc-7-e1570169731469-280x280.jpg'></img>
                    <h5>Mèo ói vàng do nguyên nhân gì?</h5>
                    </a>
                    <p>Tình trạng mèo bị ói mửa, đặc biệt là ói ra dịch vàng, là một hiện tượng khá phổ biến khiến nhiều chủ nuôi lo lắng...</p>
                    <a className='more' href='https://helloconsen.com/meo-oi-vang-do-nguyen-nhan-gi'>Xem thêm</a>
                    </Col>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/nguyen-nhan-meo-bi-nam-tai'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/05/ly-do-meo-cung-cua-ban-luon-cam-thay-doi-5-280x280.jpg'></img>
                    <h5>Nguyên Nhân Mèo Bị Nấm Tai</h5>
                    </a>
                    <p>Mèo bị nấm tai là một vấn đề sức khỏe phổ biến, gây khó chịu và ảnh hưởng đến chất lượng cuộc sống của mèo...</p>
                    <a className='more' href='https://helloconsen.com/nguyen-nhan-meo-bi-nam-tai'>Xem thêm</a>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/meo-bo-an-lieu-co-dang-lo-ngai'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/04/phai-lam-gi-khi-meo-bo-an-nam-met-moi-202104272032467343-280x280.jpg'></img>
                    <h5>Mèo bỏ ăn: Liệu có đáng lo ngại?</h5>
                    </a>
                    <p>Tình trạng mèo đột nhiên bỏ ăn có thể xuất phát từ nhiều nguyên nhân khác nhau, từ đơn giản đến phức tạp...</p>
                    <a className='more' href='https://helloconsen.com/meo-bo-an-lieu-co-dang-lo-ngai'>Xem thêm</a>
                    </Col>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/tai-sao-meo-bi-chay-nuoc-mat-va-ghen'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/04/meo-hay-bi-chay-nuoc-mat1-280x280.jpg'></img>
                    <h5>Tại Sao Mèo Bị Chảy Nước Mắt Và Ghèn?</h5>
                    </a>
                    <p>Mèo bị chảy nước mắt và ghèn là một triệu chứng phổ biến, có thể do nhiều nguyên nhân khác nhau...</p>
                    <a className='more' href='https://helloconsen.com/tai-sao-meo-bi-chay-nuoc-mat-va-ghen'>Xem thêm</a>
                    </Col>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/cho-meo-bi-ky-sinh-trung-mau-nen-lam-gi'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/04/cho-meo-bi-ki-sinh-trung-mau--280x280.jpeg'></img>
                    <h5>Chó Mèo Bị Ký Sinh Trùng Máu, Nên Làm Gì?</h5>
                    </a>
                    <p>Ký sinh trùng máu là một trong những mối nguy hiểm tiềm ẩn cho sức khỏe của chó mèo, ảnh hưởng đến khả năng vận động, sinh sản và thậm chí đe dọa tính mạng...</p>
                    <a className='more' href='https://helloconsen.com/cho-meo-bi-ky-sinh-trung-mau-nen-lam-gi'>Xem thêm</a>
                    </Col>
                    <Col md={3} className='news'>
                    <a href='https://helloconsen.com/bi-quyet-tri-nam-da-hieu-qua-cho-meo-cung'>
                    <img src='https://helloconsen.com/wp-content/uploads/2024/03/tri-nam-cho-meo-696x420-1-280x280.jpg'></img>
                    <h5>Bí quyết trị nấm da hiệu quả cho mèo cưng</h5>
                    </a>
                    <p>Mèo bị nấm là một vấn đề phổ biến, gây ảnh hưởng đến sức khỏe và thẩm mỹ của mèo, đồng thời tiềm ẩn nguy cơ lây sang người...</p>
                    <a className='more' href='https://helloconsen.com/bi-quyet-tri-nam-da-hieu-qua-cho-meo-cung'>Xem thêm</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blog;
