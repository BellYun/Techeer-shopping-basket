import { useNavigate } from 'react-router-dom';
import '../../css/common/Modal.css';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const navigate = useNavigate();

  const handleGotoCart = () => {
    navigate('/cart');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className='gobutton' onClick={handleGotoCart}>장바구니로 이동하기</button>
        <button className='closebutton' onClick={onClose}>장바구니에 더 담기</button>
      </div>
    </div>
  );
};

export default Modal;
