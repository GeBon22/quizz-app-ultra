import "./Form.css"; 
import { useState } from "react";

export default function Form({ onSubmitCard }) {
    const [formData, setFormData] = useState({ question: '', answer: '' })

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        })
      }
    
      function handleSubmit(event) {
        event.preventDefault()
        onSubmitCard(formData)
      }
  
    return (
      <div className="form" onSubmit={handleSubmit}>
        <h3>Add your question card here:</h3>
        <label>
          Question:
          <textarea
            value={formData.question}
            onChange={handleChange}
            name="question"
          />
        </label>
        <label>
          Answer:
          <textarea
            value={formData.answer}
            onChange={handleChange}
            name="answer"
          />
        </label>
        <button className="button">Add</button>
      </div>
    )
  }