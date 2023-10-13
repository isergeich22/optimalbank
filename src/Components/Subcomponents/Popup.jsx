import { useContext } from 'react';
import { PopupContext } from '../Map';

export default function Popup() {
  const { selectedItem, setSelectedItem } = useContext(PopupContext);

  if (!selectedItem) {
    return null;
  }

  return (
    <div style={{ zIndex: 9999, color: 'black', position: 'relative' }}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          position: 'relative',
        }}>
        <h3>{selectedItem.shortName}</h3>
        <p>{selectedItem.address}</p>
        <p>{selectedItem.scheduleFl}</p>
        <button onClick={() => setSelectedItem(null)}>Close</button>
      </div>
    </div>
  );
}
