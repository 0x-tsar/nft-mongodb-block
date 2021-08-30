import { useRouter } from "next/router";
// import { openDB } from "../../lib/openDB";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(200, 0, 40);
`;

export const Team = () => {
  const router = useRouter();
  const { team } = router.query;

  console.log(team);

  // if (posts) {
  //   return (
  //     <div>
  //       Hello from profile {profile} <br />
  //       name: {posts.item} <br></br>
  //       price: R${posts.price} <br></br>
  //       quantity: {posts.quantity} <br></br>
  //       date: {posts.date} <br></br>
  //     </div>
  //   );
  // } else {
  //   return <div style={{ fontSize: "40px" }}>"{profile}" not found</div>;
  // }
  return <Container></Container>;
};

export async function getServerSideProps(context) {
  const router = context.query.profile;
  let data = {};
  console.log(router);
  // implementar a busca dos dados no mongodb
  // const query = { quantity: { $gte: 25 } };

  // const db = await openDB();
  // try {
  //   data = await db.collection("Customers").findOne({ _id: parseInt(router) });
  //   // console.log(`data: ${data}`);
  //   console.log(JSON.parse(JSON.stringify(data)));
  // } catch (error) {
  //   data = "not found!!";
  //   console.log(error);
  // }
  // const data = await db.collection("Customers").find({ data }).toArray();

  return {
    props: {
      hello: "world",
      // posts: data_parsed,
      // posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Team;
