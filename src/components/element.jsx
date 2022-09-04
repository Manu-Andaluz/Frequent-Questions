import "./element.css";
import Question from "./question";

const Element = () => {
  return (
    <div className="container">
      <div className="container-info">
        <div className="info-title">
          <h1>Frequent Questions 🤷‍♂️ </h1>
        </div>
        <Question
          title="What is the shipping time?"
          answer="In CABA a maximum of 48 hours. The rest of the country between 2-7 business days."
        />
        <Question
          title="What are the payment methods?"
          answer="All cards available by Mercado Pago or bank transfer."
        />
        <Question
          title="Is there a guarantee?"
          answer="No, there is no guarantee. Items can be returned within the first 48 hours and in the conditions in which they were purchased."
        />
        <Question
          title="Can I cancel my order?"
          answer="Call +54 9 11 6596-8664 or send an email to dropsbainfo@gmail.com. If the order has already been dispatched, consult our Returns Policy."
        />
        <Question
          title="Where is the branch?"
          answer="Lorem ipsum dolor sit amet. Aut voluptatem temporibus aut vero consequatur ut consequuntur omnis qui esse fuga qui ducimus iure aut aliquam velit qui impedit necessitatibus."
        />
      </div>
    </div>
  );
};

export default Element;
