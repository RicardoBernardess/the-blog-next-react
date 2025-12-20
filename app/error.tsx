//QUALQUER componente impotado em um arquivo "use client" se tornará TAMBÉM "use client".
'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  //Utilizando useEffect para monitorar: use client
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Ocorreu um erro no qual nossa aplicação não conseguiu se recuperar'
    />
  );
}
