import { useEffect, useRef } from 'react'
import './Modal.css'

export default function Modal({ openModal, closeModal }) {
  const ref = useRef()

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [openModal])

  return (
    <dialog ref={ref} onCancel={closeModal}>
      <p>test</p>
      <button type='button' onClick={closeModal}>
        Close
      </button>
    </dialog>
  )
}
