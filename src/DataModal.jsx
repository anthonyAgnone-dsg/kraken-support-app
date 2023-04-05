/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { utils, writeFile } from 'xlsx';
import useStore from './UseStore';
import { ModalContext } from './ModalContext';

function DataModal({ viewModal }) {
  const { setViewModal } = useContext(ModalContext);
  const [data] = useStore();
  const writeToXlsx = () => {
    const filename = 'krakenReport.xlsx';
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'entries');
    writeFile(wb, filename);
  };
  return (
    <div
      id="jsonModal"
      className={`${
        viewModal ? '' : 'hidden'
      } absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-[rgba(20,20,20,.4)]`}
    >
      <div className="absolute top-12 left-1/2 mx-auto my-0 h-[80vh] w-4/5 -translate-x-1/2 overflow-scroll bg-white">
        <div className="flex gap-3 p-2">
          <button
            className="rounded-lg border border-slate-900 px-2 py-1 text-slate-900"
            type="button"
            onClick={() => setViewModal(false)}
          >
            Close Modal
          </button>
          <button
            className="rounded-lg border border-slate-900 px-2 py-1 text-slate-900"
            type="button"
            onClick={() => navigator.clipboard.writeText(JSON.stringify(data, null, 2))}
          >
            Copy to Clipboard
          </button>
          <button
            className="rounded-lg border border-slate-900 px-2 py-1 text-slate-900"
            type="button"
            onClick={writeToXlsx}
          >
            Convert to Excel
          </button>
        </div>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default DataModal;
