var fieldScans = [
  {
    farm: "SignedInFarmId",
    date: new Date(),
    lines: [
      {
        NoLine: 1, // increases after each line...
        rangeTemp: [10, 12, 11, 10], // C°
        rangeMois: [10, 12, 11, 10], // %
        rangeHumi: [10, 12, 11, 10], // %
        trees: [
          {
            NoTree: 1,
            // increases after each tree, resets after each line...
            location: { n: 24.0052156, e: 27.8055424 },
            // location should be in (NE - ↑→) axis form...
            status: "infected - 80%", // enumerated text || percentage
            // percentage is better for the visualization...
          },
          {
            NoTree: 2,
            location: { n: 24.0052156, e: 27.8055424 },
            status: "infected - 80%", // enumerated text || percentage
          },
        ],
      },
      {
        NoLine: 2, // increases after each line...
        rangeTemp: [10, 12, 11, 10], // °C
        rangeMois: [10, 12, 11, 10], // %
        rangeHumi: [10, 12, 11, 10], // %
        trees: [
          {
            NoTree: 1,
            // increases after each tree, resets after each line...
            location: { n: 24.0052156, e: 27.8055424 },
            // location should be in (NE - ↑→) axis form...
            status: "infected - 80%", // enumerated text || percentage
            // percentage is better for the visualization...
          },
          {
            NoTree: 2,
            location: { n: 24.0052156, e: 27.8055424 },
            status: "infected - 80%", // enumerated text || percentage
          },
        ],
      },
    ],
  },
  {},
];

module.exports = fieldScans