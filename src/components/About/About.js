import GitHubIcon from '@material-ui/icons/GitHub'
import { about } from '../../portfolio'
import profilPicture from '../../ressources/images/profil_picture.png'
import './About.css'
import '../../ressources/others/cv.pdf'

export default function About() {
  const { name, role, description, resume, social } = about
  const url = '../../ressources/others/cv.pdf'
  const download = () => {
    const link = document.createElement('a')
    link.href = url
    link.download = 'cv_puisset.pdf'
    link.dispatchEvent(new MouseEvent('click'))
  }

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
        {resume && (
          <a href={resume}>
            <button
              type='button'
              className='btn btn--outline'
              onClick={download}
            >
              Télécharger le CV
            </button>
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
