import React, { useState, useEffect, useContext } from 'react'

import { Assets, UserInfos, Utils } from '../../../context'
import Timer from '../../widgets/Timer'

import VillageGrid from '../../widgets/VillageGrid'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)
  const userInfos = useContext(UserInfos)
  const utils = useContext(Utils)

  return (
    <div id="HomePage">
      <header>
        <VillageGrid />
      </header>
      <nav>
        <h2>Bienvenue, <span className="alternate">{userInfos.name}</span>.</h2>
      </nav>
      <section className="kharoh">
        <div className="left-side">
          <h6>Introduction</h6>
          <h1>Je suis <span style={{ color: 'var(--pink-color)' }}>Kharoh</span>.</h1>
          <p>Si certains m'ont appelé "kraorte", "cora" ou "crao", le vrai pseudonyme de mon identité numérique est Kharoh.</p>
          <p><em><strong>Ambitieux</strong></em>, <em><strong>enthousiaste</strong></em> et <em><strong>travailleur</strong></em> constituent les trois adjectifs que je choisis pour m'introduire.</p>
          <div className="discord">
            <p className="title">DISCORD:</p>
            <p className="username">Kharoh</p>
            <p className="tag">#5846</p>
          </div>
        </div>
        <div className="right-side">
          <div className="container">
            {userInfos.isUserNamePicked ?
              <>
                <h3>Voici votre nouveau nom : <span className="alternate">{userInfos.name}</span></h3>
                <p>Il vous va à ravir, vous aviez une chance sur ... d'obtenir ce nom. Pour ma part, voici mes autres identités :</p>
                <div className="names">
                  <div>Luxh</div>
                  <div>Heest</div>
                  <div>Gaulu</div>
                </div>
              </> :
              <>
                <h3>Et puisque <span className="alternate">Visiteur</span> c'est un peu ennuyant,</h3>
                <p>Laissez-moi vous aider à choisir un nouveau nom pour accompagner votre visite.</p>
                <button onClick={utils.pickUserName}>Cliquez ici</button>
              </>}
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="left-side">
        </div>
        <div className="right-side">
          <h6>Projets</h6>
          <h3>Mes projets et organisations.</h3>
          <p>
            <span className="rainbow-text">Kharoh Families</span> et&nbsp;&nbsp;
            <span className="iron-text">Kharoh Family</span> <span className="gold-text">Science</span>&nbsp;
            sont mes deux principaux projets.
          </p>
          <p>
            J'ai senti la nécessité de monter ces différents projets pour deux raisons :&nbsp;
            Tout d'abord, afin de maîtriser et de mettre en pratique les différentes technologies dont je connaissais la théorie;&nbsp;
            Mais aussi car ma tête farfouillais d'idées différentes qu'il fallait matérialiser.
          </p>
        </div>
      </section>
      <section className="colors">
        Ne me demandez pas mes couleurs préférées, demandez-moi mes couleurs.
      </section>
      <section className="activities"></section>
      <section className="projects"></section>
      <section className="contributed"></section>
      <section className="technos"></section>
      <footer></footer>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage
