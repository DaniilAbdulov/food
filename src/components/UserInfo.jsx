import { observer } from "mobx-react-lite";
import { Flex, Space, Typography } from "antd";

const { Text } = Typography;
export const UserInfo = observer(() => {
    return (
        <Flex vertical align="start">
            <Text strong>Информация о пользователе</Text>
            <Text>Абдулов Даниил Билалович</Text>
            <Text>Рост: 176 см</Text>
            <Text>Вес: 55 кг</Text>
        </Flex>
    );
});
