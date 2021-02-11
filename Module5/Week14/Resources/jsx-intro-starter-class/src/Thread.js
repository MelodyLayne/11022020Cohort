const Thread = (props) => {
  return (
    <div
      style={{
        background: '#FF5733',
        color: 'white',
        border: '5px solid #FFC300',
        padding: '5px'
      }}
    >
      <h1>Thread Component</h1>
      {/* {props.name ? <h2>Hello {props.name}</h2> : <h2>Hello Stranger</h2>} */}
      {props.name && <h2>Hello {props.name}</h2>}
    </div>
  );
};
export default Thread;
