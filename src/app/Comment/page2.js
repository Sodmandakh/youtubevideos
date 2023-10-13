import React, { useState } from "react";
import Image from "next/image";
import image from "../../../public/User-Avatar1.png"

function Comment() {
  const [items, setItems] = useState([]);

  function addItem(event) {
    event.preventDefault();
    const newItemText = event.target.elements[0].value;
    if (newItemText.trim() === "") {
      return;
    }
    const newItem = { text: newItemText, completed: false };
    setItems([...items, newItem]);
    event.target.reset();
  }

  function toggleItemCompletion(index) {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  function deleteItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={addItem}>
        <input className="bg-zinc-900" type="text" style={{color: "white", marginBottom: 20, width: 400,}} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""} style={{display: "flex", justifyContent: "space-between"}}>
            <span
              onClick={() => toggleItemCompletion(index)}
              className="text-white flex flex-row gap-4"
            >
              <Image src={image} width={40} height={40}/>{item.text}
            </span>
            <span>{item.completed && " Completed"}</span>
            <button
              onClick={() => deleteItem(index)}
              className=" border-radius ML-3 text-white"
            > delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comment;
