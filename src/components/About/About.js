import GitHubIcon from '@material-ui/icons/GitHub'
import { about } from '../../portfolio'
import profilPicture from '../../ressources/images/17170144657206_photo.png'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Portfolio de <span className='about__name'>{name}</span>
        </h1>
      )}
      {role && <h2 className='about__role'>{role}</h2>}
      <div className='about__presentation'>
        <img
          className='about__picture'
          src={profilPicture}
          alt='Cassandre Puisset'
        />
        <p className='about__desc'>{description && description}</p>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Il y aura un lien vers le CV ici
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
