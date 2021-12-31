import Layout from '../layout/layout';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import Intro from '../components/intro/intro';

export default function Home() {
  return (
    <Layout
      title="Mark Phillips - Full Stack Software Developer"
      description="This portfolio website was built to showcase previous projects and host my blog."
    >
      <Intro />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}
