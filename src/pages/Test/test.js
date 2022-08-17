import React from "react";
import photo_1 from "../../assets/images/img-1.jpg";
import photo_2 from "../../assets/images/img-2.jpg";
import photo_3 from "../../assets/images/img-3.jpg";
import photo_4 from "../../assets/images/img-4.jpg";
import photo_5 from "../../assets/images/img-5.jpg";
import photo_6 from "../../assets/images/img-6.jpg";
import Content from "../props/contain";

var data = [
  {
    pic: photo_1,
    detail:
      "React · Declarative. React makes it painless to create interactive UIs.Component-Based. Build encapsulated components that manage their own state, then compose"
  },
  {
    pic: photo_2,
    detail:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!"
  },
  {
    pic: photo_3,
    detail:
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
  },
  {
    pic: photo_4,
    detail:
      "React · Declarative. React makes it painless to create interactive UIs.Component-Based. Build encapsulated components that manage their own state, then compose"
  },
  {
    pic: photo_5,
    detail:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!"
  },
  {
    pic: photo_6,
    detail:
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
  }
];

const Test = () => {
  return (
    <div className="flex">
      {data.map((value, index) => (
        <Content key={index} move={value.detail} pic={value.pic} />
      ))}
    </div>
  );
};

export default Test;


