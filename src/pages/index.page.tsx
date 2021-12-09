import { GetServerSideProps } from 'next';

const HomePage = () => {
  return <div>admiralfeb.net</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'https://ng.admiralfeb.net',
      permanent: false,
    },
  };
};

export default HomePage;
