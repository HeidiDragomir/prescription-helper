export const getDataGirls = async () => {
    const response = await fetch("../data/bmi_data_girls.json");
    return response.json();
};
