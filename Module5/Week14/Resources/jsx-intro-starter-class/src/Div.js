import Thread from './Thread';

const Div = (props) => {
  return (
    <div
      style={{
        color: props.color || 'white',
        backgroundColor: props.background,
        padding: '10px',
        margin: '10px',
        border: '5px solid #FF5733'
      }}
    >
      <h1>Div Component</h1>
      <Thread name={props.name} />
    </div>
  );
};

export default Div;
