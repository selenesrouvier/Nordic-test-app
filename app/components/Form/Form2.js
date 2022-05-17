const React = require('react');
const { useState } = require('react');
const ProductItem = require('../ProductItem/ProductItem');

const Formulario2 = () => {

	const [id, setId] = useState(null);
	const [name, setName] = useState(null);
	const [price, setPrice] = useState(null);
	const [description, setDescription] = useState(null);

	const saveProduct = (e) => {
		e.preventDefault();
    
		e.target.reset()
		setId(null)
		setName('')
		setPrice(0)
		setDescription('')
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
			<h2 style={{width: '100%', textAlign: 'center'}}>
				Cargar un nuevo producto:
			</h2>
      <form onSubmit={saveProduct}>
				<div style={{width: '100%'}}>
					<label id='id'>
						ID:
						<input 
							type="number" 
							id='id' 
							name="id" 
							onChange={(e) => setId(e.target.value)}
						/>
					</label>
					<label id='name'>
						Nombre:
						<input 
							type="text" 
							id='name' 
							name="name" 
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<br/>
					<label id='price'>
						Precio:
						<input 
							type="number" 
							id='price' 
							name="price" 
							onChange={(e) => setPrice(e.target.value)}
						/>
					</label>
					<br/>
					<label id='description'>
						Descripción:
						<input 
							type="text" 
							id='description' 
							name="description"
							onChange={(e) => setDescription(e.target.value)}
					  />
					</label>
				</div>

				<br/>
				<input type="submit" value="Agregar producto" />

				<ProductItem id={id} name={name} price={price} description={description} />

			</form>
    </div>
  )
}

module.exports = Formulario2;
