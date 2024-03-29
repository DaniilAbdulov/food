import { observer } from "mobx-react-lite";
import { eating } from "../store/eating";
import { Button, Col, Flex, Form, Image, InputNumber, Row } from "antd";
import { products } from "../data/products";
import { ImageLoader } from "./ImageLoader";

export const FoodList = observer(() => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const obj = {};
    for (let key in values) {
      if (values[key] !== undefined) {
        obj[key] = Number(values[key]);
      }
    }
    eating.addToEating(obj);
    form.resetFields();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Row gutter={[8, 8]}>
        {products.length &&
          products
            .sort((a, b) => a.category_id - b.category_id)
            .map((product) => {
              return (
                <Col className="gutter-row" span={8} key={product.id}>
                  <Form.Item name={product.id}>
                    <Flex vertical align="center" gap="small" justify="start">
                      <ImageLoader img={product.img} />
                      {/* <Image width={100} height={100} src={product.img} /> */}
                      <InputNumber />
                      <p style={{ fontSize: "12px" }}>{product.title}</p>
                    </Flex>
                  </Form.Item>
                </Col>
              );
            })}
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Съедено
        </Button>
      </Form.Item>
    </Form>
  );
});
