import { GetServerSideProps } from 'next';
import { REDIRECT_URL } from 'src/redirect';

const HomePage = () => {
  return <div>admiralfeb.net</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: REDIRECT_URL,
      permanent: false,
    },
  };
};

export default HomePage;
