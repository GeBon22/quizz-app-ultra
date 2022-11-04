import "./Form.css"; 

export default function Form({ onSubmitCard }) {
    const [formData, setFormData] = useState({ question: '', answer: '' })
  
    return (
      <FormWrapper className="form" onSubmit={handleSubmit}>
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
        <button>Add</button>
      </FormWrapper>
    )
  
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
  }