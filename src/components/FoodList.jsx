import Title from "antd/es/typography/Title";
import { observer } from "mobx-react-lite";
import { eating } from "../store/eating";
import { FoodRow } from "./FoodRow";
export const FoodList = observer(() => {
    const foodRowsCount = eating.eatedFoods.length + 1;
    return (
        <>
            <Title>Приемы пищи</Title>
            <div
                style={{
                    maxHeight: "500px",
                    overflow: "scroll",
                    padding: "5px 10px",
                }}
            >
                {Array.from({ length: foodRowsCount }, (_, index) => (
                    <FoodRow key={index} />
                ))}
            </div>
        </>
    );
});
