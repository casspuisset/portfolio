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
        <h3>{project.name}</h3>
        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}
        {/* Modale de présentation */}
      </button>
      {
        <dialog ref={ref} className='project'>
          <h2>{project.name}</h2>
          <img src={project.image} alt='' className='project__image desktop' />
          <p>test</p>
          <details>
            <summary>Details</summary>
            Something small enough to escape casual notice.
          </details>
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
          </div>{' '}
          <button type='button' onClick={() => ref.current.close()}>
            <i className='fa-solid fa-xmark' />
          </button>
        </dialog>
      }{' '}
    </>
  )
}
