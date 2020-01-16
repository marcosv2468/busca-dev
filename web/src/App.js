import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header> 
              <img src="https://avatars3.githubusercontent.com/u/28361577?s=460&v=4" alt="Marcos Vinícius"/>
              <div className="user-info">
                <strong>Marcos Vinícius</strong>
                <span>ReactJS, NodeJS e React Native</span>
              </div>
            </header>
            <p>
              Formado no curso Técnico em Informática - IFPI - em 2019. 
              Atualmente estudante de Análise e Desenvolvimento de Sistemas - IFPI.
            </p>
            <a href="https://github.com/marcosv2468">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>

  );
}

export default App;
