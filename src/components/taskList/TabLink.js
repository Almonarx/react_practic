export const TabLink = ({ title, index, select }) => {
  const onClick = () => select(index);

  return <button onClick={onClick}>{title}</button>;
};
