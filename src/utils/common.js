export const getProjectionConfigData = (countryName) => {
  let configData = {};
  switch (countryName) {
    case "India":
      configData = {
        rotate: [-80, -20, 0],
        scale: 1000,
      };
      break;

    case "Sri_Lanka":
      configData = {
        rotate: [-80, -8, 0],
        scale: 7500,
      };
      break;

    case "Nepal":
      configData = {
        rotate: [-84, -28.5, 0],
        scale: 5600,
      };
      break;

    case "Canada":
      configData = {
        rotate: [-80, -116, 180],
        scale: 800,
      };
      break;

    case "Australia":
      configData = {
        rotate: [-135, 27, 0],
        scale: 900,
      };
      break;

    case "United_States_of_America":
      configData = {
        rotate: [-57, -128, 170],
        scale: 600,
      };
      break;

    case "China":
      configData = {
        rotate: [-100, -37, -3],
        scale: 850,
      };
      break;

    case "Bangladesh":
      configData = {
        rotate: [-90, -23.7, 0],
        scale: 5200,
      };
      break;

    case "Afghanistan":
      configData = {
        rotate: [-65, -33, 0],
        scale: 2500,
      };
      break;

    default:
      configData = {
        rotate: [-80, -20, 0],
        scale: 1000,
      };
      break;
  }
  return configData;
};
