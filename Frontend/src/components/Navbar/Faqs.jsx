import React, { useState } from "react";  
import "./Faqs.css"; // You can create a separate CSS file for styling  

const AccordionItem = ({ title, content, isOpen, onToggle }) => {  
  return (  
    <div className="accordion-item">  
      <div className="accordion-header" onClick={onToggle}>  
        <h3>{title}</h3>  
      </div>  
      {isOpen && (  
        <div className="accordion-body">  
          <p>{content}</p>  
        </div>  
      )}  
    </div>  
  );  
};  

const Faq = () => {  
  const [openedIndex, setOpenedIndex] = useState(0); // Default open item  

  const toggleAccordion = (index) => {  
    setOpenedIndex(openedIndex === index ? null : index); // Toggle open/close  
  };  

  return (  
    <div className="accordion-container">  
      <AccordionItem   
        title="Question #1"   
        content="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element."   
        isOpen={openedIndex === 0}   
        onToggle={() => toggleAccordion(0)}   
      />  
      <AccordionItem   
        title="Question #2"   
        content="This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element."   
        isOpen={openedIndex === 1}   
        onToggle={() => toggleAccordion(1)}   
      />  
      <AccordionItem   
        title="Question #3"   
        content="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element."   
        isOpen={openedIndex === 2}   
        onToggle={() => toggleAccordion(2)}   
      />  
    </div>  
  );  
};  

export default Faq; 