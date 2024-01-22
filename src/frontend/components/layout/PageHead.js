import React, { useEffect } from 'react';

const PageHead = ({ headTitle }) => {
  useEffect(() => {
    document.title = headTitle ? headTitle : "Open9 | NFT Marketplace Nextjs Template";
    // Puedes agregar más manipulaciones del head del documento aquí si es necesario
  }, [headTitle]);

  return null;
};

export default PageHead;