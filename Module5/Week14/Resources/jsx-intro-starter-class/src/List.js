import ListItem from './ListItem';

export default function List(props) {
  return (
    <div>
      <h1>List Component</h1>
      <ol>
        {props.fruits.map((fruit) => (
          <ListItem key={fruit} fruit={fruit} />
        ))}
      </ol>
    </div>
  );
}
