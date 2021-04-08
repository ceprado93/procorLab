import React, { Component } from 'react'
import CreatableSelect from "react-select/creatable";
import NewsService from '../services/news.service'
import { Link } from 'react-router-dom'

const options = [
    { value: "pruebas", label: 'pruebas' },
    { value: "test", label: 'test' },
    { value: "personas", label: 'personas' },
    { value: "empresas", label: 'empresas' },
    { value: "covid-19", label: 'covid - 19' },
    { value: "noticias", label: 'noticias' },
    { value: "clientes", label: 'clientes' },
    { value: "eventos", label: 'eventos' },
    { value: "espacios covid free", label: 'espacios covid free' },
]

class NewsForm extends Component {

    constructor() {
        super()
        this.state = {
            news: {
                title: '',
                description: '',
                image: '',
                tags: [],
            },
        }

        this.newsService = new NewsService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ news: { ...this.state.news, [name]: value } })
    }

    handleNew(e) {
        console.log(this.state.news)

        e.preventDefault()
        this.newsService
            .saveNews(this.state.news)
            .then(() => {
                console.log(this.state.news)
            })
            .catch(err => console.log(err))
    }

    handleEdit(e) {
        e.preventDefault()
        this.newsService
            .editNews(this.state.news.id, this.state.news)
            .then(() => {
                this.props.handleAlert(true, 'Edicion guardada', 'Se ha guardado la noticia en nuestra Base de Datos')
            })
            .catch(err => console.log(err))
    }

    handleChange = selectedOption => {

        selectedOption.map(elm => {
            this.setState({ news: { ...this.state.news, tags: [...this.state.news.tags, elm.value] } })
        })
    }


    countChars(obj) {
        console.log(obj.target.innerHTML.length)
        var maxLength = 5000;
        var strLength = obj.target.innerHTML.length;

        if (strLength > maxLength) {
            document.getElementById("charNum").innerHTML = '<span style="color: red;">' + strLength + ' out of ' + maxLength + ' characters</span>';
        } else {
            document.getElementById("charNum").innerHTML = strLength + '/' + maxLength;
        }
    }

    render() {
        return (
            <section className="newPost">
                <h3><Link className="Nav__link-newPost" to="/blogs">BLOG</Link></h3>
                <h1> Nuevo Post</h1>
                <form>
                    <label>
                        Titulo:
                        <input className="newPost__input" type="text" name="title" value={this.state.news.title} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Descripcion:
                        <textarea name="description" value={this.state.news.description} onChange={e => this.handleInputChange(e)} onKeyUp={(e) => this.countChars(e)} />
                        <small id="charNum">0 characters</small>

                    </label>
                    <label>
                        Foto:
                        <input className="newPost__input" type="text" name="image" value={this.state.news.image} onChange={e => this.handleInputChange(e)} />
                    </label>
                    <label>
                        Tags:
                        <CreatableSelect isMulti onChange={this.handleChange} options={options} />
                    </label>
                    <input className="newpost__submit" type="submit" value="Submit" onClick={e => this.handleNew(e)} />
                </form>



            </section >
        )
    }
}



export default NewsForm