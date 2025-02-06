import GitHubIcon from '@material-ui/icons/GitHub'
import { about } from '../../portfolio'
import profilPicture from '../../ressources/images/profil_picture.png'
import './About.css'
import url from '../../ressources/others/cv.pdf'

export default function About() {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1 className='title'>
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
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          type='button'
          className='btn btn--outline'
        >
          Télécharger le CV
        </a>

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
