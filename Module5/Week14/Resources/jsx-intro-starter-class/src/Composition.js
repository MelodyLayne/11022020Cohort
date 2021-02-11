const Composition = ({ children }) => {
  return (
    <div
      style={{
        border: '5px solid #FF5733',
        background: 'white',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        color: '#000'
      }}
    >
      <h1>Composition Component</h1>
      {children}
    </div>
  );
};
export default Composition;
