import React, { useState, useEffect } from "react";

import { Container, DevsContainer, DevsList, SideCard, Title } from './styles';

import DevForm from "../../components/DevForm";
import DevItem from "../../components/DevItem";

import api from "../../services/api";

function Home() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <SideCard>
        <Title>Cadastrar</Title>
        <DevForm onSubmit={handleAddDev} />
      </SideCard>

      <DevsContainer>
        <DevsList>
          {devs.map((dev) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </DevsList>
      </DevsContainer>
    </Container>
  );
}

export default Home;
