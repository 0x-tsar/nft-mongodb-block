import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getBlockchain from "../ethereum.js";

export const Container = styled.div`
  width: 300px;
  /* width: max-content; */
  display: flex;
  flex-wrap: wrap;
  height: max-content;
  justify-content: center;
  /* flex-direction: column; */
  background-color: tomato;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MinStyle = styled.div`
  background-color: black;
  width: 400px;
  height: 300px;
`;

const create_card = () => {
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    rareness: "",
    description: "",
    nationality: "",
    league: "",
    team: "",
    amountMinted: "",
    price: "",
  });

  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [account, setAccount] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      console.log("called");
      // setToken(nft);
      // const balance = await nft.balanceOf(
      //   nft.provider.provider.selectedAddress
      // );
      // console.log(`balance ${balance}`);
      // setAccount(nft.provider.provider.selectedAddress);
      // console.log(nft);

      // const acc = nft.provider.provider.selectedAddress;

      // for (let i = 0; i < balance; i++) {
      //   const tokenId = await nft.tokenOfOwnerByIndex(acc, i);

      //   const item = await nft.getNfts(acc, parseInt(tokenId));
      //   // let date = new Date(Number(item.date) * 1000);
      //   const obj = {
      //     name: item.name,
      //     image: item.imageUrl,
      //     date: item.date,
      //     owner: item.owner,
      //   };
      //   setInfo((info) => [...info, obj]);
    };
    init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        ></input>
        <input
          placeholder="image url"
          name="imageUrl"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
        ></input>
        <input
          placeholder="rareness"
          name="rareness"
          value={form.rareness}
          onChange={(e) => setForm({ ...form, rareness: e.target.value })}
        ></input>
        <input
          placeholder="description"
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></input>

        <input
          placeholder="nationality"
          name="nationality"
          value={form.nationality}
          onChange={(e) => setForm({ ...form, nationality: e.target.value })}
        ></input>

        <input
          placeholder="league"
          name="league"
          value={form.league}
          onChange={(e) => setForm({ ...form, league: e.target.value })}
        ></input>

        <input
          placeholder="team"
          name="team"
          value={form.team}
          onChange={(e) => setForm({ ...form, team: e.target.value })}
        ></input>

        <input
          placeholder="amountMinted"
          name="amountMinted"
          value={form.amountMinted}
          onChange={(e) => setForm({ ...form, amountMinted: e.target.value })}
        ></input>

        <input
          placeholder="price"
          name="price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        ></input>

        {/* 

        // bool isForSelling,
        string memory league,
        string memory team,
        uint amountMinted,
        uint price 
        */}
        {/* <input
          name="surname"
          value={this.state.surname}
          onChange={this.handler}
        ></input>

        <input
          name="isChecked"
          type="checkbox"
          value={this.state.isChecked}
          onChange={this.handler}
        ></input>

        <select name="title" value={this.state.title} onChange={this.handler}>
          <option>Zero</option>
          <option>Um</option>
          <option>Dois</option>
          <option>Três</option>
        </select> */}
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

export default create_card;
