import Hero from '../Hero.jsx'
import Projects from '../projects.jsx'

function Home() {

    return(
        <>
        <Hero/>
        <div id="projects">
                <Projects />
            </div>
        </>
    );
}

export default Home
