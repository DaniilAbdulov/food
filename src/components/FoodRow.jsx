import { observer } from "mobx-react-lite";
import { MySelect } from "./MySelect";
import { Button, Flex, Form, Select, Slider } from "antd";
import { eating } from "../store/eating";
import { products } from "../data/products";
import { useState } from "react";

export const FoodRow = observer(() => {
    const [disabled, setDisabled] = useState(false);
    const onFinish = (values) => {
        const obj = {
            product_id: values.food.content,
            grams: values.grams.content,
        };
        if (obj.product_id && obj.grams) {
            eating.addToEating(obj);
            setDisabled(true);
        }
    };

    const [form] = Form.useForm();
    const selectProducts = products
        .map((p) => {
            const val = {
                id: p.id,
                value: p.title,
                label: p.title,
            };
            return val;
        })
        .sort((a, b) => a.value.localeCompare(b.value));
    const selectGrams = [
        { id: 10, value: 10, label: 10 },
        { id: 20, value: 20, label: 20 },
        { id: 30, value: 30, label: 30 },
        { id: 40, value: 40, label: 40 },
        { id: 50, value: 50, label: 50 },
        { id: 100, value: 100, label: 100 },
        { id: 150, value: 150, label: 150 },
        { id: 200, value: 200, label: 200 },
        { id: 250, value: 250, label: 250 },
        { id: 300, value: 300, label: 300 },
        { id: 350, value: 350, label: 350 },
        { id: 400, value: 400, label: 400 },
        { id: 450, value: 450, label: 450 },
        { id: 500, value: 500, label: 500 },
    ];

    return (
        <>
            <Form
                form={form}
                disabled={disabled}
                layout="vertical"
                onFinish={onFinish}
            >
                <Flex gap="small">
                    <Form.Item
                        name="food"
                        label="Блюдо"
                        style={{ marginRight: "10px" }}
                    >
                        <MySelect
                            optionValues={selectProducts}
                            customWidth={150}
                        />
                    </Form.Item>
                    <Form.Item
                        name="grams"
                        label="Грамм"
                        style={{ marginRight: "10px" }}
                    >
                        <MySelect optionValues={selectGrams} customWidth={70} />
                    </Form.Item>
                </Flex>
                <Form.Item style={{ textAlign: "center" }}>
                    <Button type="primary" htmlType="submit">
                        Скушал !
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
});
