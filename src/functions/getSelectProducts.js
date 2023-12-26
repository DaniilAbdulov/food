export const getSelectProducts = (pR, pC) => {
    const newArr = [];
    pC.map((c) => {
        const newItem = {
            label: c.name,
            options: pR
                .filter((p) => p.category_id === c.id)
                .map((p) => ({
                    id: p.id,
                    label: p.title,
                    value: p.title,
                })),
        };
        newArr.push(newItem);
    });
    return newArr;
};
