import { ConfigProvider, Progress, Space } from "antd";
import { observer } from "mobx-react-lite";
import { eating } from "../store/eating";
import Statistic from "antd/es/statistic/Statistic";
export const ProgressBar = observer(() => {
  const todayEated = eating.eatedPFCK;
  const DAYNORM = eating.DAYNORM;
  const setPercent = (val, dayVal) => {
    return (val / dayVal) * 100;
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Progress: {
            circleTextFontSize: "0.8em",
            paddingLG: 8,
          },
        },
      }}
    >
      <Space wrap>
        {Object.keys(todayEated).map((key, index) => (
          <Progress
            key={index}
            type="circle"
            strokeColor={
              index === 0
                ? "green"
                : index === 1
                ? "yellow"
                : index === 2
                ? "red"
                : "purple"
            }
            size={60}
            percent={setPercent(todayEated[key], DAYNORM[key])}
            format={() =>
              `${
                key === "p"
                  ? "Белки"
                  : key === "f"
                  ? "Жиры"
                  : key === "c"
                  ? "Углеводы"
                  : "Ккал"
              }\n ${todayEated[key]}/${DAYNORM[key]}`
            }
          />
        ))}
      </Space>
      <Statistic title="Стоимость сьеденного" value={eating.eatedPrice} />
    </ConfigProvider>
  );
});
