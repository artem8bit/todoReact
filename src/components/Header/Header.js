import s from "./Header.module.css";
import { Col, Row } from "antd";

const Header = () => {
  return (
    <Row span={24} className={s.root}>
      <Col>
        What's the Plan for Today?
      </Col>
    </Row>
  );
};

export default Header;
