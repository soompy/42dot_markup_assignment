const layouts = {
  grid: {
    columns: 12,
    gutter: "20px",
    breakpoints: {
      mobile: "576px",      
      tablet: "992px",
      pc: "1200px",
    },
    columnWidths: {
      1: "calc((100% - (11 * 20px)) / 12)",
      2: "calc((100% - (11 * 20px)) / 6)",
      3: "calc((100% - (11 * 20px)) / 4)",
      4: "calc((100% - (11 * 20px)) / 3)",
      6: "calc((100% - (11 * 20px)) / 2)",
      12: "100%",
    },
  },
};

export default layouts;
