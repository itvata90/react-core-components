const DashDivider = () => {
  return (
    <hr
      style={{
        borderBottom: 'none',
        height: '1px',
        background: 'repeating-linear-gradient(90deg, #CDCDCD, #CDCDCD 4px, transparent 4px, transparent 8px)',
      }}
    />
  );
};

export default DashDivider;
