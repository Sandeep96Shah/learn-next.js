import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styled, { css } from "styled-components";
import Hello from "../components/Hello";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>myself</title>
      </Head>
      <section>
        <p>Your Self Introduction</p>
        <p>
          (This is a sample website - youll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Hello hi={true} />
    </Layout>
  );
}
