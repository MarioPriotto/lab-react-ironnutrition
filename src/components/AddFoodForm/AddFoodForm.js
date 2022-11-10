import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function AddFoodForm(props) {

    const [ name, setName ] = useState("")
    const [ image, setImage ] = useState("")
    const [ calories, setCalories ] = useState(0)
    const [ servings, setServings ] = useState(0)

    const handleNameInput = (e) => { setName(e.target.value) }
    const handleImageInput = (e) => { setImage(e.target.value) }
    const handleCaloriesInput = (e) => { setCalories(e.target.value) }
    const handleServingsInput = (e) => { setServings(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFood = { name, calories, image, servings }
        props.addFood(newFood)
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

    return (
      
            <Form onSubmit={ handleSubmit }>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="text" 
                  placeholder="Escreva aqui o nome do alimento" 
                  value={ name }
                  onChange={handleNameInput}
                />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Link para Imagem:</Form.Label>
                <Form.Control type="text" 
                  placeholder="Escreva aqui o link para a imagem do alimento" 
                  value={ image }
                  onChange={handleImageInput}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Calorias:</Form.Label>
                <Form.Control type="text" 
                  placeholder="Escreva aqui a quantidade de calorias" 
                  value={ calories }
                  onChange={handleCaloriesInput}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Porções:</Form.Label>
                <Form.Control type="text" 
                  placeholder="Escreva aqui o número de porções" 
                  value={ servings }
                  onChange={handleServingsInput}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Cadastrar
              </Button>

            </Form>

    )

}

export default AddFoodForm
