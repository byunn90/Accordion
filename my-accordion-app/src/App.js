import "./index.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "This Is React",
    text: "React was created by FaceBook in 2013",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(0);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          text={el.text}{" "}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ title, text, num, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(num);
  }

  return (
    <div className="item" onClick={handleToggle}>
      <h1 className="number">{num < 9 ? `0${num + 1}` : num + 1}</h1>
      <h1 className="title">{title}</h1>
      <h1 className="icon">{isOpen ? "-" : "+"}</h1>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
