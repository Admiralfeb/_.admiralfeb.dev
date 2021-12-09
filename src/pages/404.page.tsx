import { GetStaticProps } from 'next';

const NotFoundPage = () => {
  return <div>admiralfeb.net</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    redirect: {
      destination: 'https://ng.admiralfeb.net',
      permanent: false,
    },
  };
};

export default NotFoundPage;
