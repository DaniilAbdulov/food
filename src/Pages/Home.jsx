import React from "react";
import { Flex, Layout } from "antd";
import { observer } from "mobx-react-lite";
import { UserInfo } from "../components/UserInfo";
import { ProgressBar } from "../components/ProgressBar";
import { FoodList } from "../components/FoodList";
const { Content } = Layout;
export const Home = observer(() => {
    return (
        <Content>
            <Flex align="center" justify="center" vertical>
                //<UserInfo />
                <ProgressBar />
                <FoodList />
            </Flex>
        </Content>
    );
});
