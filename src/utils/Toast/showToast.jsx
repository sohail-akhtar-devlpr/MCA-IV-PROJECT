import { toast, Zoom } from 'react-toastify';

const showToast = (type, message) => {
  toast[type](message, {
    position: 'bottom-left',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Zoom,
  });
};

export default showToast;
