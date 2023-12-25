import { ConfigProvider, Progress, Space } from "antd";
import { observer } from "mobx-react-lite";
export const ProgressBar = observer(() => {
    const DAYPROTAINE = 110;
    const DAYFAT = 100;
    const DAYCARB = 150;
    const DAYKKAL = 2846;
    const eatedP = 51;
    const eatedF = 220;
    const eatedC = 130;
    const eatedKK = 2030;
    const setPercent = (val, dayVal) => {
        return (val / dayVal) * 100;
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Progress: {
                        circleTextFontSize: "20px",
                    },
                },
            }}
        >
            <Space wrap>
                <Progress
                    type="circle"
                    strokeColor="green"
                    percent={setPercent(eatedP, DAYPROTAINE)}
                    format={() => `Белки\n ${eatedP}/${DAYPROTAINE}`}
                />

                <Progress
                    type="circle"
                    strokeColor="yellow"
                    percent={setPercent(eatedF, DAYFAT)}
                    format={() => `Жиры\n ${eatedF}/${DAYFAT}`}
                />
                <Progress
                    type="circle"
                    strokeColor="red"
                    percent={setPercent(eatedC, DAYCARB)}
                    format={() => `Углеводы\n ${eatedC}/${DAYCARB}`}
                />
                <Progress
                    type="circle"
                    strokeColor="purple"
                    percent={setPercent(eatedKK, DAYKKAL)}
                    format={() => `Ккал\n ${eatedKK}/${DAYKKAL}`}
                />
            </Space>
        </ConfigProvider>
    );
});
