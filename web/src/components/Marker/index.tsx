import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { ICustomer, icon } from '../../pages/Dashboard';

interface MarkersProps {
  customers: ICustomer[];
}

const MarkersCustumers: React.FC<MarkersProps> = ({ customers }) => {
  const markers = customers.map((item, i) => (
    <Marker
      key={parseInt(i.toString())}
      position={{ lat: item.lat, lng: item.lng }}
      icon={icon}
    >
      <Popup>
        {item.name} {item.weight}
      </Popup>
    </Marker>
  ));

  return <>{markers}</>;
};

export default MarkersCustumers;
