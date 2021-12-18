import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { REDIRECT_URL } from 'src/redirect';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(REDIRECT_URL);
  });

  return <div>admiralfeb.dev</div>;
};

export default NotFoundPage;
