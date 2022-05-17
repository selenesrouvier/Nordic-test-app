const React = require('react');

const Formulario = ({title}) => {

  return (
    <div className='form'>
			<form>
				<h2>{title}</h2>
				<div>
					<label id='name'>
						Nombre:
						<input type="text" id='name' name="name" />
					</label>
					<label id='surname'>
						Apellido:
						<input type="text" id='surname' name="surname" />
					</label>
					<br/>
					<label id='email'>
						Email:
						<input type="email" id='email' name="email" />
					</label>
					<br/>
					<label id='phone'>
						Teléfono:
						<input type="number" id='phone' name="phone" />
					</label>
				</div>

				<br/>

				<div>
					<label id='nationality'>
						Nacionalidad:
						<br/>
						<select>
							<option value="argentina" id="argentina">Argentina</option>
							<option value="chile" id="chile">Chile</option>
							<option value="colombia" id="colombia">Colombia</option>
							<option value="venezuela" id="venezuela">Venezuela</option>
							<option value="mexico" id="mexico">México</option>
							<option value="bolivia" id="bolivia">Bolivia</option>
							<option value="uruguay" id="uruguay">Uruguay</option>
						</select>
					</label>
				</div>
				
				<br/>

				<div>
					<label id='address'>
						Dirección:
						<input type="text" id='address' name="address" />
					</label>
					<label id='number-address'>
						Número:
						<input type="number" id='number-address' name="number-address" />
					</label>
					<br/>
					<label id='CP'>
						CP:
						<input type="number" id='cp' name="cp" />
					</label>
				</div>

				<br/>

				<div>
					<label id='products'>
						Intereses:
						<br/>
						<label>
							Autos
							<input type="checkbox" id="autos" value="Autos" name="products" />
						</label>
						<label>
							Tecnología
							<input type="checkbox" id="tecnologia" value="Tecnología" name="products" />
						</label>
						<label>
							Hogar
							<input type="checkbox" id="hogar" value="Hogar" name="products" />
						</label>
						<label>
							Ropa
							<input type="checkbox" id="ropa" value="Ropa" name="products" />
						</label>
					</label>
				</div>

				<br/>

				<div>
					<label id='password'>
						Contraseña:
						<input type="password" id='password' name="password" />
					</label>
					<label id='repeat-password'>
						Repetir contraseña:
						<input type="password" id='repeat-password' name="repeat-password" />
					</label>
				</div>
				
				<br/>

				<div>
					<input type="submit" value="Submit" />
				</div>

			</form>
    </div>
  )
}

module.exports = Formulario;
