import React, { FormEvent, useCallback, useState } from 'react';
import { Icon, LeafletMouseEvent } from 'leaflet';
import { TileLayer, Map } from 'react-leaflet';
import { FaTrash } from 'react-icons/fa';

import axios from 'axios';

import MarkerCustomer from '../../components/Marker';

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

export interface IPosition {
  lat: number | undefined;
  lng: number | undefined;
}

export interface IAddress {
  road: string;
  city_district: string;
  city: string;
  municipality: string;
  county: string;
  state_district: string;
  state: string;
  region: string;
  postcode: string;
  country: string;
  country_code: string;
}

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState<IAddress>();
  const [data, setData] = useState<ICustomer[]>([]);
  const [position, setPosition] = useState<IPosition>({
    lat: undefined,
    lng: undefined,
  });

  const [state, setState] = useState({
    currentLocation: { lat: -23.541, lng: -46.584 },
    zoom: 8,
    data,
  });

  const getLocation = useCallback(
    async (event: LeafletMouseEvent) => {
      setPosition({ lat: event.latlng.lat, lng: event.latlng.lng });

      const results = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.lat}&lon=${position.lng}`,
      );

      const dataAddress = results.data.address;

      setAddress({
        road: dataAddress.road,
        city_district: dataAddress.city_district,
        city: dataAddress.city,
        municipality: dataAddress.municipality,
        county: dataAddress.county,
        state_district: dataAddress.state_district,
        state: dataAddress.state,
        region: dataAddress.region,
        postcode: dataAddress.postcode,
        country: dataAddress.country,
        country_code: dataAddress.country_code,
      });
    },
    [position],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const dataForm = {
        name,
        weight,
        geometry: {
          lat: position.lat,
          lng: position.lng,
        },
      };

      console.log(dataForm);
    },
    [name, weight, position],
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
            {/* <Field>
              <InputSearch>
                <input
                  type="text"
                  placeholder="Endereço Cliente"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
                <button type="button" onClick={getLocation}>
                  buscar
                </button>
              </InputSearch>
            </Field> */}
            <Field>
              <GeoLocationField>
                <input
                  type="text"
                  placeholder="latitude"
                  value={position.lat}
                  disabled
                />
                <input
                  type="text"
                  placeholder="longitude"
                  value={position.lng}
                  disabled
                />
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
            onclick={getLocation}
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
            <MarkerCustomer
              customers={data}
              address={address}
              lat={position.lat}
              lng={position.lng}
            />
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
