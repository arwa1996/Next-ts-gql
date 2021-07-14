import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useQuery } from "@apollo/client";

import { QUERY_COUNTRIES } from "../query/queryCountries.js";

interface countryTypes {
  name: string;
}

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);

  // make sure all data is loaded
  if (loading) {
    return <p>loading...</p>;
  }

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Countries</h1>
      <div>
        {data.countries.map((country: countryTypes, id: number) => (
          <div key={id}>{country.name}</div>
        ))}
      </div>
    </div>
  );
}
