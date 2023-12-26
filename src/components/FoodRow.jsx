import { observer } from "mobx-react-lite";
import { MySelect } from "./MySelect";
import { Button, ConfigProvider, Form, Slider } from "antd";
import { eating } from "../store/eating";
import { useState } from "react";

export const FoodRow = observer(() => {
    const [disabled, setDisabled] = useState(false);
    const onFinish = (values) => {
        const obj = {
            product_id: values.food.id,
            grams: values.grams,
        };
        if (obj.product_id && obj.grams) {
            eating.addToEating(obj);
            setDisabled(true);
        }
    };
    const [form] = Form.useForm();
    return (
        <ConfigProvider
            theme={{
                components: {
                    Form: {
                        itemMarginBottom: 10,
                    },
                },
            }}
        >
            <Form
                form={form}
                disabled={disabled}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item name="food">
                    <MySelect />
                </Form.Item>
                <Form.Item name="grams">
                    <Slider step={10} min={0} max={500} />
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                    <Button type="primary" htmlType="submit">
                        Скушал !
                    </Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    );
});
