import React from "react";
import fetch from "isomorphic-fetch";
import { useRouter } from "next/router";
import s from "./pokemon.module.scss";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          name: "pikachu"
        }
      }
    ],
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemon = await res.json();

  return {
    props: { pokemon },
    revalidate: 1
  };
};

const pokemon = ({ pokemon }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.container}>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt="Front default" />
      <p>{`Id: ${pokemon.id}`}</p>
      <p>{`Altura: ${pokemon.height}`}</p>
    </div>
  );
};

export default pokemon;
