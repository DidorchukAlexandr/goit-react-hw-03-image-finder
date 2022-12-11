import { createPortal } from 'react-dom';
import { Circles } from 'react-loader-spinner';

import { LoaderBox } from './Loader.styled';

const loader = document.querySelector('#loader');

export default function Loader() {
  return createPortal(
    <LoaderBox>
      <Circles height="80" width="80" color="#4fa94d" />
    </LoaderBox>,
    loader
  );
}
