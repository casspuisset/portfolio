import { useRef, useState } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import Modal from '../Modal/Modal'

export default function ProjectContainer({ project }) {
  const ref = useRef()
  const [modal, setModal] = useState(false)
  const [showDescription, setDescription] = useState(false)
  const projectStyle = {
    backgroundImage: `url(${project.image})`,
    backgroundPosition: `center`,
  }

  const showMore = () => {
    setDescription(true)
  }
  const showLess = () => {
    setDescription(false)
  }
  return (
    <button
      type='button'
      className='project'
      style={projectStyle}
      // onClick={() => ref.current.showModal()}
    >
      <h3>{project.name}</h3>
      <div>
        {/* <Modal openModal={modal} closeModal={() => setModal(false)}>
          Modal content.
        </Modal> */}
        {/* 
        <dialog ref={ref}>
          <p>test</p>
          <button type='button'>
            <i className='fa-solid fa-xmark' />{' '}
          </button>
        </dialog> */}
      </div>

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
      </div>
      <div>
        {!showDescription && (
          <button type='button' className='project__button' onClick={showMore}>
            <i className='fa-solid fa-chevron-down' />
          </button>
        )}
        {showDescription && (
          <div>
            {' '}
            <p> Description</p>
            <details>
              <summary>Details</summary>
              Something small enough to escape casual notice.
            </details>
            <button
              type='button'
              className='project__button'
              onClick={showLess}
            >
              <i className='fa-solid fa-chevron-up' />{' '}
            </button>
          </div>
        )}
      </div>
    </button>
  )
}
