import "./Form.css"; 
import { useState } from "react";

export default function Form({ onSubmitCard }) {
    const [formData, setFormData] = useState({ question: '', answer: '' });

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        })
      }
    
      function handleSubmit(event) {
        event.preventDefault()
        onSubmitCard([...formData, event.target.value] )
      }

    return (
      <div className="form" onSubmit={handleSubmit}>
        <h2>Create your question card here:</h2>
        <label>
          Question:
          <input
            type="text"
            value={formData.question}
            onChange={handleChange}
            name="question"
          />
        </label>
        <label>
          Answer:
          <input
            type="text"
            value={formData.answer}
            onChange={handleChange}
            name="answer"
          />
        </label>
        <button className="button" onClick={handleSubmit}>Submit card</button>
      </div>
    )
  }