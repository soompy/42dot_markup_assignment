const layouts = {
  grid: {
    columns: 3,
    gutter: "20px",
    breakpoints: {
      mobile: "576px",      
      tablet: "992px",
      pc: "1200px",
    },
    columnWidths: {
      1: "calc((100% - (3 * 20px)) / 3)",
      2: "calc((100% - (3 * 20px)) / 1.5)",
      3: "100%",      
    },
  },
};

export default layouts;
