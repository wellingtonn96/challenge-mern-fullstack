import React from 'react';
import { TileLayer, Marker, Map, Popup } from 'react-leaflet';

import {
  Container,
  Field,
  FormContent,
  InputSearch,
  GeoLocationField,
  ButtonSave,
  ButtonReset,
  ButtonResetContent,
  MapContainer,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <FormContent>
          <form action="">
            <Field>
              <input type="text" placeholder="Nome do cliente" />
            </Field>
            <Field>
              <input type="text" placeholder="Peso da Entrega" />
            </Field>
            <Field>
              <InputSearch>
                <input type="text" placeholder="Endereço Cliente" />
                <button type="button">buscar</button>
              </InputSearch>
            </Field>
            <Field>
              <GeoLocationField>
                <input type="text" placeholder="latitude" disabled />
                <input type="text" placeholder="longitude" disabled />
              </GeoLocationField>
            </Field>

            <ButtonSave type="submit">cadastrar cliente</ButtonSave>
          </form>
          <ButtonResetContent>
            <ButtonReset type="submit">Resetar cadastro</ButtonReset>
          </ButtonResetContent>
        </FormContent>

        <MapContainer>
          <Map
            center={[-27.1185615, -48.9408173]}
            zoom={15}
            style={{ width: 700, height: 400 }}
          >
            {' '}
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-27.1185615, -48.9408173]}>
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                dsfsdfd
              </Popup>
            </Marker>
          </Map>
        </MapContainer>
      </Container>
    </>
  );
};

export default Dashboard;
