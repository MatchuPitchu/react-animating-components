import { useState } from 'react';
import './List.css';

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => setItems((prev) => [...prev, prev.length + 1]);

  const removeItemHandler = (selectedIndex) =>
    setItems((prev) => prev.filter((item, index) => index !== selectedIndex));

  const listItems = items.map((item, i) => (
    <li key={i} className='ListItem' onClick={() => removeItemHandler(index)}>
      {item}
    </li>
  ));

  return (
    <div>
      <button className='Button' onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className='List'>{listItems}</ul>
    </div>
  );
};

export default List;
