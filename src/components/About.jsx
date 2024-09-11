/* eslint-disable react/no-unescaped-entities */
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          className="w-full h-64"
          alt="A man and a woman above a typewriter"
        />
        <article className="">
          <SectionTitle text="about me" />
          <p className='text-slate-600 mt-8 leading-loose'>
            I'm a passionate web developer who began my journey in 2023, driven
            by a deep love for technology. Since then, I've been continuously
            expanding my knowledge, always eager to explore new advancements and
            refine my skills. I thrive on learning and enjoy tackling challenges
            that push me to grow as a developer. Whether it's building dynamic
            websites or mastering the latest tools, I'm dedicated to delivering
            efficient and creative solutions through code.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
