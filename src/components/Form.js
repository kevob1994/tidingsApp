import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = { 
        category: 'general'
    }

    handleChange = e => {
        this.setState({ 
           category: e.target.value
        }, 
        () => {
            this.props.callApiNews(this.state.category)
        })
       
    }
    
    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2> Encuentra Noticias por Categoria</h2>
                        <div className="input-field col s12 m8">
                            <select onChange={this.handleChange}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencias</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}

Form.propTypes = {
    callApiNews: PropTypes.func,
}

export default Form;