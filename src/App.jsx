import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
import { Champ } from "./Pages/Champ"
import { TransitionGroup, CSSTransition } from 'react-transition-group';



export function App() {

    const champs = [
        {
            name: "jinx",
            title: "O gatilho desenfreado",
            text: "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.",
            background: "jinxbg.jpg",
            png: "jinx.png",
            loadingbg: "jinxletter.jpg",
            champClass: "atirador",
            route: ""
        },
        {
            name: "ashe",
            title: "A arqueira de gelo",
            text: "A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez.",
            background: "ashebg.jpg",
            png: "ashe.png",
            loadingbg: "asheletter.png",
            champClass: "atirador",
            route: "ashe"
        },
        {
            name: "garen",
            title: "O poder de demacia",
            text: "Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. Popular entre seus companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o esperado de um herdeiro da prestigiosa família Stemmaguarda, encarregada de defender Demacia e seus ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada, Garen está sempre pronto para confrontar magos e feiticeiros no campo de batalha.",
            background: "garenbg.jpg",
            png: "garen.png",
            loadingbg: "garenletter.jpg",
            champClass: "lutador",
            route: "garen"
        },
    ]

    const location = useLocation();


    return (
        <>
            <div className="logo">
                <a className="logo" href="https://www.leagueoflegends.com/pt-br/">
                </a>
            </div>
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade">
                    <Routes location={location} key={location.pathname}>
                        <Route index
                            element={<Champ name={champs[0].name}
                                title={champs[0].title}
                                text={champs[0].text}
                                previous={champs[2].route}
                                next={`${champs[1].route}`}
                                background={champs[0].background}
                                png={champs[0].png}
                                champClass={champs[0].champClass}
                                loadingbg={champs[0].loadingbg}
                            />} />
                        <Route
                            path={champs[1].route}
                            element={<Champ name={champs[1].name}
                                title={champs[1].title}
                                text={champs[1].text} 
                                previous={`../${champs[0].route}`}
                                next={`../${champs[2].route}`}
                                background={champs[1].background}
                                png={champs[1].png}
                                champClass={champs[1].champClass}
                                loadingbg={champs[1].loadingbg}
                            />} />
                        <Route
                            path={champs[2].route}
                            element={<Champ name={champs[2].name}
                                title={champs[2].title}
                                text={champs[2].text}
                                previous={`../${champs[1].route}`}
                                next={`../${champs[0].route}`}
                                background={champs[2].background}
                                png={champs[2].png}
                                champClass={champs[2].champClass}
                                loadingbg={champs[2].loadingbg}
                            />} />

                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}