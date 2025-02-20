export const getDataBoys = async () => {
    const response = await fetch("../data/bmi_data_boys.json");
    return response.json();
};
