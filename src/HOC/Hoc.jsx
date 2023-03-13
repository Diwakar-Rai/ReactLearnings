let Hoc = WrappedComponent => {
  return () => {
    return (
      <WrappedComponent
        courses={{ trainer: "Shivu", courseName: "Javascript" }}
      />
    );
  };
};

// let Hoc = (WrappedComponent = () => (
//   <WrappedComponent jspider={{ course: "meanStack" }} />
// ));

export default Hoc;
