import React, { useState, useEffect, useContext } from 'react'

import { Assets, UserInfos, Utils } from '../../../context'

import VillageGrid from '../../widgets/VillageGrid'
import Timer from '../../widgets/Timer'
import Name from '../../widgets/Name'

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
        <h2>Bienvenue, <Name size="medium" /></h2>
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
      <section className="age">
        <div className="left-side">
          <Timer date={1053900000000} />
        </div>
        <div className="right-side">
          <h6>L'âge</h6>
          <h3>Temps écoulé depuis le premier instant.</h3>
          <p><span className="alternate" style={{ color: 'white' }}>{userInfos.name}</span>, vous découvrez deux données : mon âge, ainsi que ce que représente mon âge par rapport à l'univers.</p>
          <p>La deuxième donnée présente une manière de voir les choses qui ne m'est pas étrangère...</p>
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
