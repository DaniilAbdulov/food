import React, { useState } from "react";
import { Select, Space } from "antd";
import { observer } from "mobx-react-lite";
import { getSelectProducts } from "../functions/getSelectProducts";
import { products } from "../data/products";
import { productsCategories } from "../data/productsCategories";

export const MySelect = observer(({ value = {}, onChange, optionValues }) => {
    const [content, setContent] = useState("");
    const triggerChange = (changedValue) => {
        onChange?.({
            content,
            ...value,
            ...changedValue,
        });
    };
    const onContentChange = (newContent) => {
        const product_id = products.filter((p) => p.title === newContent)[0].id;
        if (!newContent) {
            console.log("Значение пустое");
        }
        if (!("content" in value)) {
            setContent(newContent);
        }
        triggerChange({
            content: newContent,
            id: product_id,
        });
    };
    const selectProducts = getSelectProducts(products, productsCategories);
    return (
        <Space>
            <Select
                value={value.content || content}
                onChange={onContentChange}
                style={{ minWidth: 250 }}
                options={selectProducts}
            ></Select>
        </Space>
    );
});
