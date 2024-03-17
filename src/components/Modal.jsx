import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function ResultModal({ children, buttonCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
           {children}
           <form method='dialog' className='pt-4'>
                <Button
                    color='default'
                    variant='filled'
                >
                    {buttonCaption}
                </Button>
           </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;