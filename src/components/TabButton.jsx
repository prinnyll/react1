const TabButton = ({ children, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

// const TabButton = (props) => {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// };

export default TabButton;
