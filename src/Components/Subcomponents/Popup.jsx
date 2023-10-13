import { useContext } from 'react';
import { PopupContext } from '../../App';

export default function Popup() {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);

  if (!selectedItem) {
    return null;
  }

  return (
    <div className="popup" style={{ zIndex: 9999, color: 'black', position: 'relative' }}>
      <h3>{selectedItem.shortName}</h3>
      <p>{selectedItem.address}</p>
      <p>{selectedItem.scheduleFl}</p>
      <button onClick={() => setSelectedItem(null)}>Close</button>
    </div>
  );
}
