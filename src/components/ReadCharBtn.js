const ReadChar = (props) => {
  return (
    <ul>
      {props.chars.map((char) => (
        <li key={char.title}>
          {char.title} {char.race} {char.strCheck} {char.strength}
        </li>
      ))}
    </ul>
  );
};

export default ReadChar;
