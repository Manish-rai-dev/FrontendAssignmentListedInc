import { useEffect, useRef, useState } from "react";
import excel from "../../assets/excel.svg";
import Papa from "papaparse";
import "./Upload.css";
import { MdOutlineFileUpload } from "react-icons/md";

import RowData from "./RowData";
export default function UploadData() {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const [error, setError] = useState(false);
  const acceptableFileTypes =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv';

  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleFileChange = (e) => {
    // check file type
    if (
      e.target.files[0].type !==
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
      e.target.files[0].type !== 'application/vnd.ms-excel' &&
      e.target.files[0].type !== '.csv' &&
      e.target.files[0].type !== 'text/csv'
    ) {
      removeFile();
      setError(true);
      return;
    }

    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      if (file) {
        Papa.parse(file, {
          complete: function (results) {
            setParsedData((prev) => [...prev, ...results.data]);
          },
        });
      }
      setLoading(false);
      removeFile();
    }, 1500);
  };

  const removeFile = () => {
    if (ref.current) ref.current.value = '';
    setFile(null);
  };

  return (
    <>
      <div
        className="UploadMainContainer"
      >
      </div>
      <div className="innerUploadContainer"
      style={{
        Width:"596px",
        Height:"367px",
        background:""

      }}
      >
        <div className="aboveInput"

        style={{
          Width:"564px",
          Height:"258px",

        }}
        >

        

        <input
        // only accept .xlsx and .csv files
        type="file"
        name="file"
        id="fileInput"
        
        ref={ref}
        accept={acceptableFileTypes}
        onChange={(e) => handleFileChange(e)}
        className="hidden"
      />

          <img src={excel} alt="Excel logo" style={{height:"36px",width:"36px"}} />
          <p className="textFileUpload">
            {!file ? (
              <>
                Drop your excel sheet here or{' '}
                <span
                  onClick={() => handleClick()}
                  className="uploadBrowse"
                >
                  Browse
                </span>
              </>
            ) : file.name.length > 35 ? (
              file.name.slice(0, 35) + '...'
            ) : (
              file.name
            )}
          </p>
          {file && (
            <span
              onClick={() => removeFile()}
              className="uploadRemove"
            >
              Remove
            </span>
          )}
        </div>
        <button
          onClick={() => handleUpload()}
          disabled={!file}
          className="handleUploadData"
        >
          {loading }
          {!loading && (
            <>
              <MdOutlineFileUpload className="UploadText" />
              Upload
            </>
          )}
        </button>
      </div>
      {parsedData.length > 0 && (
        <div className="tableScreenUpload">
          <span className="tableHeadersUpload">
            Uploads
          </span>
          <div className="overflowAutoUpdate">
            <div className="rowUpload">
              <div className="columnDataUpload">
                {parsedData[0].map((item, index) => (
                  <h4
                    key={index}
                    className={`${
                      index === 0 ? 'width2Rem' : ''
                    } ${
                      index === 1
                        ? 'width12Rem'
                        : ''
                    } ${
                      index === 2 ? 'width10Rem' : ''
                    } ${
                      index === 3 ? 'width11Rem' : ''
                    } ${
                      index === 4 ? 'width20Rem' : ''
                    } tableContainerUpload`}
                  >
                    {item}
                  </h4>
                ))}
              </div>
              {parsedData.slice(1).map((item, index) => (
                <RowData key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}