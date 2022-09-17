// import xw from 'xwind'
// import ButtonReact from '../components/ButtonReact'
// import ButtonStyled from '../components/ButtonStyled'

// const Index = () => (
//   <div css={xw`grid justify-center items-center h-screen space-y-20`}>
//     <div css={xw`space-y-20`}>
//       <ButtonReact>@emotion/react</ButtonReact>
//       <ButtonStyled>@emotion/styled</ButtonStyled>
//     </div>
//   </div>
// )

// export default Index
// import type { NextPage } from 'next'
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Insta v2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />
    </div>
  );
};

export default Home;
