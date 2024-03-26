'use client'
import * as React from 'react';
import Rating from '@mui/material/Rating';

const RatingWithSSR = React.memo(({ value, readOnly, className } : { value:number, readOnly:boolean, className:string }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // เรนเดอร์เฉพาะบนไคลเอ็นต์เท่านั้น
  return mounted ? (
    <Rating value={value} readOnly={readOnly} className={className} />
  ) : null;
});

export default RatingWithSSR;
