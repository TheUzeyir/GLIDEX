import { useNavigate } from 'react-router-dom';
import style from './shopModal.module.css';

interface ShopModalProps {
  isVisible: boolean;
}

const ShopModal: React.FC<ShopModalProps> = ({ isVisible }) => {

  const navigate = useNavigate();

  const handlenavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0); 
  }

  return (
    <div 
      className={style.shopModalContainer}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <div className={style.shopModal}>
        <p className={style.shopModal_item} onClick={() => handlenavigate("/event")}>Event</p>
        <p className={style.shopModal_item} onClick={() => handlenavigate("/Instructor")}>Instructor</p>
        <p className={style.shopModal_item} onClick={() => handlenavigate("/blog")}>Blog</p>
      </div>
    </div>
  );
};

export default ShopModal;
