import { useLocation } from 'react-router-dom';
import './detail.css';

export default function Detail() {
  
  const { state } = useLocation();
  const itemData = state && state.itemData;

  
  
  if (!itemData) {
    return <div>Data not found</div>;
  }

  return (
    <div className="detail-container"> {/* Apply the container class */}
      <h1 className="detail-title">{itemData.l}</h1> {/* Apply title class */}
      <p className="detail-description">{itemData.q}</p> {/* Apply description class */}
      <p className="detail-genre">{itemData.s}</p>{/* Apply description class */}
      <img className="detail-image" src={itemData.i.imageUrl} alt={itemData.title} /> {/* Apply image class */}
    </div> 
  );
}