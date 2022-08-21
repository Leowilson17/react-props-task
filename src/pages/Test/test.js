import React from "react";
import "./test.css"
import Content from "../props/contain";

var data = [
  {
    pic: require('../../assets/images/img-1.jpg'),
    detail:
      "React · Declarative. React makes it painless to create interactive UIs.Component-Based. Build encapsulated components that manage their own state, then compose"
  },
  {
    pic: require('../../assets/images/img-2.jpg'),
    detail:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!"
  },
  {
    pic: require('../../assets/images/img-3.jpg'),
    detail:
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
  },
  {
    pic: require('../../assets/images/img-4.jpg'),
    detail:
      "React · Declarative. React makes it painless to create interactive UIs.Component-Based. Build encapsulated components that manage their own state, then compose"
  },
  {
    pic: require('../../assets/images/img-5.jpg'),
    detail:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!"
  },
  {
    pic: require('../../assets/images/img-6.jpg'),
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


