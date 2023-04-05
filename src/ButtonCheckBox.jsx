/* eslint-disable react/prop-types */
import { useState } from 'react';
import useStore from './UseStore';

const ButtonCheckBox = ({ current, value, defaultChecked }) => {
  const [checked, setChecked] = useState(false);
  const [dataStore, setDataStore] = useStore();
  const updateDataStore = () => {
    const newDataStore = dataStore.map((item) => {
      if (item.name !== current) {
        return item;
      }
      if (checked) {
        return { ...item, site: item.site.filter((site) => site !== value) };
      }
      return { ...item, site: item.site ? [...item.site, value] : [value] };
    });
    setDataStore(newDataStore);
    setChecked(!checked);
  };
  return (
    <button
      type="button"
      onClick={updateDataStore}
      className={`rounded-lg border border-slate-900 p-1 py-0 ${
        checked || defaultChecked ? 'bg-gray-700 text-white' : 'bg-white'
      }`}
    >
      {value}
    </button>
  );
};

export default ButtonCheckBox;
