import { observer } from "mobx-react-lite";
import { eating } from "../store/eating";
import { Button, Col, Flex, Form, Image, InputNumber, Row } from "antd";
import { products } from "../data/products";

export const FoodList = observer(() => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const obj2 = {};
    for (let key in values) {
      if (values[key] !== undefined) {
        obj2[key] = Number(values[key]);
      }
    }
    eating.addToEating(obj2);
    form.resetFields();
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
                      <Image width={100} height={100} src={product.img} />
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
