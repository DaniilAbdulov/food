import React, { useState } from "react";
import { Select, Space } from "antd";
import { observer } from "mobx-react-lite";

const { Option } = Select;
export const MySelect = observer(
    ({ value = {}, onChange, optionValues, customWidth }) => {
        const [content, setContent] = useState("");
        console.log(customWidth);
        const triggerChange = (changedValue) => {
            onChange?.({
                content,
                ...value,
                ...changedValue,
            });
        };
        const onContentChange = (newContent) => {
            if (!newContent) {
                console.log("Значение пустое");
            }
            if (!("content" in value)) {
                setContent(newContent);
            }
            triggerChange({
                content: newContent,
            });
        };

        return (
            <Space>
                <Select
                    value={value.content || content}
                    onChange={onContentChange}
                    style={{ width: customWidth }}
                >
                    {optionValues.map((item) => {
                        return (
                            <Option key={item.id} value={item.id}>
                                {item.value}
                            </Option>
                        );
                    })}
                </Select>
            </Space>
        );
    }
);
