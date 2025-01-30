import { useState } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import Modal from '../Modal/Modal'

export default function ProjectContainer({ project }) {
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
    <div className='project' style={projectStyle}>
      <h3>{project.name}</h3>
      <div>
        <button type='button' onClick={() => setModal(true)}>
          Open modal
        </button>
        <Modal openModal={modal} closeModal={() => setModal(false)}>
          Modal content.
        </Modal>
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

      {!showDescription && (
        <button type='button' className='project__button' onClick={showMore}>
          Afficher plus
        </button>
      )}
      {showDescription && (
        <div>
          {' '}
          <p> Description</p>
          <button type='button' className='project__button' onClick={showLess}>
            Afficher moins
          </button>
        </div>
      )}
    </div>
  )
}
