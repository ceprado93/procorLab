import React, { Component } from 'react'
import CreatableSelect from "react-select/creatable";
import NewsService from '../services/news.service'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom'

const options = [
    { value: "Pruebas", label: 'Pruebas' },
    { value: "Test", label: 'Test' },
    { value: "Personas", label: 'Personas' },
    { value: "Empresas", label: 'Empresas' },
    { value: "Covid-19", label: 'Covid - 19' },
    { value: "Noticias", label: 'Noticias' },
    { value: "Clientes", label: 'Clientes' },
    { value: "Eventos", label: 'Eventos' },
    { value: "Espacios covid free", label: 'Espacios covid free' },
]

class NewsForm extends Component {

    constructor() {
        super()
        this.state = {
            news: {
                title: '',
                description: '',
                intro: '',
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

    handleInputChangeCK(e) {
        const { name, value } = e
        this.setState({ news: { ...this.state.news, description: e } })
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

    countCharsIntro(obj) {
        console.log(obj.target.innerHTML.length)
        var maxLength = 400;
        var strLength = obj.target.innerHTML.length;

        if (strLength > maxLength) {
            document.getElementById("charNumIntro").innerHTML = '<span style="color: red;">' + strLength + ' out of ' + maxLength + ' characters</span>';
        } else {
            document.getElementById("charNumIntro").innerHTML = strLength + '/' + maxLength;
        }
    }

    countChars(obj) {
        console.log(obj)
        var maxLength = 5000;
        var strLength = obj.length;

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
                        Entradilla:
                        <textarea name="description" value={this.state.news.intro} onChange={e => this.handleInputChange(e)} onKeyUp={(e) => this.countCharsIntro(e)} />
                        <small id="charNumIntro">0 characters</small>
                    </label>
                    <label style={{ marginBottom: 16 }}>
                        Descripcion:
                    </label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.news.description}
                        placeholder='El texto del capitulo va aquí'
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor)
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.handleInputChangeCK(data)
                            this.countChars(data)
                        }}

                        onBlur={(event, editor) => {
                            // console.log('Blur.', editor)
                        }}
                        onFocus={(event, editor) => {
                            // console.log('Focus.', editor)
                        }}
                    />
                    <small style={{ marginBottom: 30 }} id="charNum">0 characters</small>

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