import React, { FormEvent, useCallback, useState } from 'react';
import { Icon } from 'leaflet';
import { TileLayer, Map } from 'react-leaflet';
import { FaTrash } from 'react-icons/fa';

import MarkerCustumer from '../../components/Marker';

import {
  Container,
  Field,
  FormContent,
  InputSearch,
  GeoLocationField,
  ButtonSave,
  ButtonReset,
  ButtonResetContent,
  ButtonDelete,
  Main,
} from './styles';

import data from '../../data.json';

export const icon = new Icon({
  iconUrl: '/icon.svg',
  iconSize: [35, 35],
  iconAnchor: [17, 46],
  popupAnchor: [-3, -50],
});

export interface ICustomer {
  name: string;
  street: string;
  city: string;
  country: string;
  weight: number;
  lat: number;
  lng: number;
}

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState('');

  const [state, setState] = useState({
    currentLocation: { lat: -23.541, lng: -46.584 },
    zoom: 8,
    data,
  });

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const dataForm = {
        name,
        weight,
        address,
      };

      console.log(dataForm);
    },
    [name, weight, address],
  );

  return (
    <>
      <Container>
        <FormContent>
          <form onSubmit={handleSubmit}>
            <Field>
              <input
                type="text"
                placeholder="Nome do cliente"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Field>
            <Field>
              <input
                type="text"
                placeholder="Peso da Entrega"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
            </Field>
            <Field>
              <InputSearch>
                <input
                  type="text"
                  placeholder="Endereço Cliente"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
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

        <Main>
          <Map
            center={state.currentLocation}
            zoom={state.zoom}
            style={{
              width: 700,
              height: 400,
              borderWidth: 5,
              borderRadius: 10,
              marginTop: 60,
            }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerCustumer customers={data} />
          </Map>
          <p>Total de clientes: 15; Peso Total: Ticket Médio*: 301,4</p>
          <table>
            <thead>
              <th>Nome</th>
              <th>Rua</th>
              <th>Cidade</th>
              <th>Pais</th>
              <th>Peso</th>
              <th>Lat</th>
              <th>Lng</th>
              <th>Ações</th>
            </thead>
            <tbody>
              {data.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.weight}</td>
                  <td>{item.lat}</td>
                  <td>{item.lng}</td>
                  <td>
                    <ButtonDelete type="button">
                      <FaTrash />
                    </ButtonDelete>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Main>
      </Container>
    </>
  );
};

export default Dashboard;
