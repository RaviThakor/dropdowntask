export const barChartData = {
  labels: ["A", "B", "C"],
  datasets: [
    {
      label: "data",
      data: [22000, 16000, 9500],
      backgroundColor: "rgba(0, 0, 160)",
      barThickness: 80,
    },
  ],
};

export const lineChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [
        5000, 23000, 15000, 23000, 10000, 15000, 20000, 18000, 20000, 10000,
        11000, 22000,
      ],
      borderColor: "#00AA00",
      backgroundColor: "#00AA00",
      pointBackgroundColor: "#00AA00",
      pointRadius: 5,
    },
  ],
};

export const sankeyChartData = [
  {
    source: "United States of America",
    target: "Canada",
    weight: 3,
  },
  {
    source: "Canada",
    target: "Ukrain",
    weight: 1,
  },
  {
    source: "Canada",
    target: "Portugal",
    weight: 1,
  },
  {
    source: "Canada",
    target: "Turkey",
    weight: 1,
  },
  {
    source: "United States of America",
    target: "Persia",
    weight: 3,
  },
  {
    source: "Persia",
    target: "Iran",
    weight: 1,
  },
  {
    source: "Persia",
    target: "Pakistan",
    weight: 1,
  },
  {
    source: "Persia",
    target: "Argentina",
    weight: 1,
  },
  {
    source: "United States of America",
    target: "Russia",
    weight: 3,
  },
  {
    source: "Russia",
    target: "England",
    weight: 1,
  },
  {
    source: "Russia",
    target: "Scotland",
    weight: 1,
  },
  {
    source: "Russia",
    target: "Bermuda",
    weight: 1,
  },
  {
    source: "United States of America",
    target: "Serbia",
    weight: 3,
  },
  {
    source: "Serbia",
    target: "Australia",
    weight: 1,
  },
  {
    source: "Serbia",
    target: "Netherlands",
    weight: 1,
  },
  {
    source: "Serbia",
    target: "South Africa",
    weight: 1,
  },
];

export const markersData = [
  {
    markerOffset: -8,
    name: "Udaipur",
    coordinates: [73.7125, 24.5854],
  },
  {
    markerOffset: -8,
    name: "Ooty",
    coordinates: [76.695, 11.4102],
  },
  {
    markerOffset: -8,
    name: "Bikaner",
    coordinates: [73.3119, 28.0229],
  },
  {
    markerOffset: -8,
    name: "Kutch",
    coordinates: [69.8597, 23.7337],
  },
  {
    markerOffset: -8,
    name: "Dwarkadhish",
    coordinates: [68.9674, 22.2376],
  },
  {
    markerOffset: -8,
    name: "Goa",
    coordinates: [74.124, 15.2993],
  },
  {
    markerOffset: -8,
    name: "Mumbai",
    coordinates: [72.8777, 19.076],
  },
  {
    markerOffset: -8,
    name: "Indore",
    coordinates: [75.8577, 22.7196],
  },
];

export const linesData = [
  {
    place: "Udaipur-Mumbai",
    from: [72.8777, 19.076],
    to: [73.7125, 24.5854],
  },
  {
    place: "Kutch-Mumbai",
    from: [72.8777, 19.076],
    to: [69.8597, 23.7337],
  },
  {
    place: "Ooty-Mumbai",
    from: [72.8777, 19.076],
    to: [76.695, 11.4102],
  },
  {
    place: "Dwarkadhish-Mumbai",
    from: [72.8777, 19.076],
    to: [68.9674, 22.2376],
  },
  {
    place: "Udaipur-Indore",
    from: [75.8577, 22.7196],
    to: [73.7125, 24.5854],
  },
];
