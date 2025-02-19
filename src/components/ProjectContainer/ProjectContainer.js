import { useRef } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

export default function ProjectContainer({ project }) {
  const ref = useRef()
  console.log(ref)
  const projectStyle = {
    backgroundImage: `url(${project.image})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  }

  return (
    <>
      <button
        type='button'
        className='project filter'
        style={projectStyle}
        onClick={() => ref.current.showModal()}
      >
        <div className='project__text'>
          <h3 className='project__name'>{project.name}</h3>
          <p className='project__description'>{project.description}</p>
        </div>
      </button>
      {
        <dialog ref={ref} className='project__modale'>
          <h2 className='project__title'>{project.name}</h2>
          <div className='project__sections'>
            <section className='modale__left'>
              <img
                src={project.image}
                alt=''
                className='project__image desktop'
              />
              {project.stack && (
                <ul className='project__stack'>
                  {project.stack.map((item) => (
                    <li
                      key={uniqid()}
                      className='skills__list-item btn btn--plain'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}{' '}
            </section>
            <section className='modale__right'>
              <p className='project__ModalText'>{project.resume}</p>
              <details>
                <summary>Details</summary>
                {project.details}
              </details>
            </section>{' '}
          </div>
          <div className='project__links'>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
              >
                <LaunchIcon />
              </a>
            )}
            <button type='button' onClick={() => ref.current.close()}>
              <i className='fa-solid fa-xmark' />
            </button>
          </div>{' '}
        </dialog>
      }{' '}
    </>
  )
}
