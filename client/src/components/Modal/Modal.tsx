import React from 'react'
import styles from './Modal.module.scss'

type ModalProps = {
  children: JSX.Element[];
  clicked: () => void;
}

const Modal = ({ children, clicked }: ModalProps) => {

  const findByKey = (name: string) => {
    let modalPart = null;
    if (Array.isArray(children)) {
      modalPart = children.map((child: JSX.Element) => {
        if (child.key === name) {
          return child;
        }
        return null;
      })
    }

    return modalPart;
  };

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    const btn = e.target as HTMLElement;
    if (btn.classList.contains('modal-close')) {
      console.log('clicked')
      return clicked();
    }
  }

  return (
    <div className={`${styles.modalMask} modal-close`} onClick={closeModal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer}>

          <div className={styles.modalHeader}>
            {findByKey('header')}
          </div>

          <div className={styles.modalBody}>
            {findByKey('body')}
          </div>

          <div className={styles.modalFooter}>
            <button className="modal-close" onClick={closeModal}>Close</button>
            {findByKey('footer')}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal;