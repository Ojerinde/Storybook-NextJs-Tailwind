import Card from "./index";

export default {
  title: "My Cards",
};

const Template = (arguments_) => <Card {...arguments_} />;

// A new instance of the Card story called GreenCard and passed the above GreenCard.args values as props to be rendered with our Card component.
export const GreenCard = Template.bind({});
GreenCard.args = {
  title: "Hello World",
  showSub: false,
  background: "yellow-600",
  imgUrl: "https://path/to/some/image",
  Children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};
