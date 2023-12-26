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
                        circleTextFontSize: "14px",
                    },
                },
            }}
        >
            <Space wrap>
                <Progress
                    type="circle"
                    strokeColor="green"
                    size={70}
                    percent={setPercent(todayEated.p, DAYNORM.DAYPROTAINE)}
                    format={() =>
                        `Белки\n ${todayEated.p}/${DAYNORM.DAYPROTAINE}`
                    }
                />

                <Progress
                    type="circle"
                    strokeColor="yellow"
                    size={70}
                    percent={setPercent(todayEated.f, DAYNORM.DAYFAT)}
                    format={() => `Жиры\n ${todayEated.f}/${DAYNORM.DAYFAT}`}
                />
                <Progress
                    type="circle"
                    strokeColor="red"
                    size={70}
                    percent={setPercent(todayEated.c, DAYNORM.DAYCARB)}
                    format={() =>
                        `Углеводы\n ${todayEated.c}/${DAYNORM.DAYCARB}`
                    }
                />
                <Progress
                    type="circle"
                    strokeColor="purple"
                    size={70}
                    percent={setPercent(todayEated.kk, DAYNORM.DAYKKAL)}
                    format={() => `Ккал\n ${todayEated.kk}/${DAYNORM.DAYKKAL}`}
                />
            </Space>
            <Statistic title="Стоимость сьеденного" value={eating.eatedPrice} />
        </ConfigProvider>
    );
});
