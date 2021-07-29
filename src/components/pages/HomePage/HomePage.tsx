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
      <section className="projects">
        {/* <div className="left-side">
        </div> */}
        <div className="right-side">
          <h6>Projets</h6>
          <h3>Mes projets et organisations.</h3>
          <p>
            <span className="rainbow-text">Kharoh Families</span> et&nbsp;
            <span className="iron-text">Kharoh Family</span> <span className="gold-text">Science</span>&nbsp;
            sont mes deux principaux projets, chacun d'eux m'aura permis d'apprendre à maîtriser de nouvelles technologies et d'exprimer mes idées.
          </p>
        </div>
      </section>
      <section className="projects-presentation">
        <article className="kfies">
          <div className="inner">
            <h3 className="alternate">Kharoh Families</h3>
            <img src={assets.images.kfiesLogo} alt="" />
            <p>
              Kharoh Families est un MMORPG en ligne jouable dans le navigateur. Le développement du jeu a commencé en avril 2019 et le jeu a officiellement débuté une alpha en avril 2021. Kharoh Families a atteint les 30 joueurs connectés simultanément et 100 joueurs inscrits. Le projet a été mis en pause durant l'été 2021 par manque de temps pour son maintien.
            </p>
            <div className="dark-section">
              <h4>La réalisation de <span className="rainbow-text">Kharoh Families</span> n'aurait pas été possible sans</h4>
              <div className="collabs">
                <div className="collab gold">Jerryh</div>
                <div className="collab silver">Bidhul</div>
                <div className="collab silver">Lucile</div>
                <div className="collab bronze">Stig</div>
                <div className="collab bronze">Obvious</div>
              </div>
              <div className="links">
                <div className="discord">
                  <a href="https://discord.gg/fYWDrHptHe" target="_blank">
                    DISCORD
                  </a>
                </div>
                <div className="github">
                  <a href="https://github.com/Kharoh" target="_blank">
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="kfs">
          <div className="inner">
            <h3 className="alternate">Kharoh Family Science</h3>
            <img src={assets.images.kfsLogo} alt="" />
            <p>
              Kharoh Family Science est une organisation github qui gère plusieurs projets. La plupart des projets sont des sites et ont pour but d'exposer des constructions mathématiques ou informatiques d'une manière élégante. Kharoh Family Science a été fondé dans le but précis d'apprendre la programmation par l'apprentissage.
            </p>
            <div className="dark-section">
              <h4>Kharoh Family Science remercie ses collaborateurs</h4>
              <div className="collabs">
                <div className="collab gold">Jerryh</div>
                <div className="collab silver">Bidhul</div>
                <div className="collab silver">SMZ</div>
              </div>
              <div className="links">
                <div className="discord">
                  <a href="https://discord.gg/AUTXwEA" target="_blank">
                    DISCORD
                  </a>
                </div>
                <div className="github">
                  <a href="https://github.com/kharohfamily-science" target="_blank">
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="technos"></section>
      <section className="learning"></section>
      <footer></footer>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage
