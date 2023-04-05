/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import ButtonCheckBox from './ButtonCheckBox';
import { urls } from './constants';
import useStore from './UseStore';

function DataRow({ data: { name, found, replacedInHomr, notes, site } }, i) {
  const [dataStore, setDataStore] = useStore();
  const onSubmit = (e, uri, route) => {
    e.preventDefault();
    window.open(uri + route);
    // this is where we instead fetch request and see if returns 400?
  };
  const updateSelect = (e, current, field) => {
    const newDataStore = dataStore.map((el) => {
      if (el.name !== current) {
        return el;
      }
      return { ...el, [field]: e.target.value };
    });
    setDataStore(newDataStore);
  };
  const updateInput = (e, current) => {
    const newDataStore = dataStore.map((el) => {
      if (el.name !== current) {
        return el;
      }
      return { ...el, notes: e.target.value };
    });
    setDataStore(newDataStore);
  };

  return (
    <div className="m-2 border" key={`${name}main${i}`}>
      <div className="grid grid-cols-12 grid-rows-2 content-between gap-6">
        <div className="col-span-2 row-span-2 flex h-full flex-col justify-between self-center bg-slate-700 p-4 text-white">
          <p>{name}</p>
          <p className="mt-3 mb-1">Launch</p>
          <div className="flex gap-1">
            {urls.map((el) => (
              <button
                key={el.text + i}
                type="button"
                onClick={(e) => onSubmit(e, el.url, name)}
                className='pl-2" w-full rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-white dark:text-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              >
                {el.text}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-10 row-span-2 flex flex-col justify-between py-4">
          <div className="grid w-full grid-cols-4 gap-6">
            <p className="p-1">Found</p>
            <p className="bg-slate-200 p-1">Site</p>
            <p className="p-1">Replaced w/homR Content</p>
            <p className="bg-slate-200 p-1">Notes/Redirect URL</p>
          </div>

          <div className="grid w-full grid-cols-4 gap-6">
            <select
              onChange={(e) => updateSelect(e, name, 'found')}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 pl-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={found}
            >
              <option value={false}>no</option>
              <option value>yes</option>
            </select>
            <div className="grid grid-cols-5 gap-1">
              {urls.map((el) => (
                <ButtonCheckBox
                  key={`checkbox${el.label}${i}`}
                  current={name}
                  value={el.label}
                  defaultChecked={site && site.includes(el.label)}
                />
              ))}
            </div>
            <select
              onChange={(e) => updateSelect(e, name, 'replacedInHomr')}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 pl-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={replacedInHomr}
            >
              <option value={false}>no</option>
              <option value>yes</option>
            </select>
            <input
              onChange={(e) => updateInput(e, name)}
              value={notes}
              className="border border-slate-900"
              type="text"
              id={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataRow;
