import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://ng.admiralfeb.net');
  });

  return <div>admiralfeb.net</div>;
};

export default NotFoundPage;
