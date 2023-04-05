// import ButtonCheckBox from './ButtonCheckBox';
/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import DataRow from './DataRow';
import useStore from './UseStore';
import DataModal from './DataModal';
import { ModalContext } from './ModalContext';

const App = () => {
  const { viewModal, setViewModal } = useContext(ModalContext);
  const [dataStore] = useStore();
  return (
    <div className="relative">
      <button type="button" onClick={() => setViewModal((prev) => !prev)}>
        View JSON
      </button>
      {dataStore && dataStore.map((item) => <DataRow key={item.name} data={item} />)}
      {viewModal && <DataModal viewModal={viewModal} />}
    </div>
  );
};

export default App;
