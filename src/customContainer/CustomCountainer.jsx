import clsx from 'clsx';
import React from 'react'

export default function CustomCountainer({children , customclass}) {
  return (
      <>
          <div className={clsx("customCountainer xl:px-9 md:px-6 px-4", customclass)}>{children}</div>
      </>
  );
}
