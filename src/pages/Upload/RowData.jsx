import React, {  useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function RowData({ item, index }) {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div
      key={index}
      className="containerRowData"
    >
      {item.map((i, idx) =>
        idx !== 3 && idx !== 4 && idx !== 1 ? (
          <span
            className={`${idx === 0 ? "width8Rem" : ""} ${
              idx === 1 ? "width12Rem" : ""
            } ${idx === 2 ? "width10Rem" : ""} ${
              idx === 3 ? "width11Rem" : ""
            } ${idx === 4 ? "width20Rem" : ""} itemMapsRows`}
            key={idx}
          >
            {i}
          </span>
        ) : idx === 3 ? (
          <div
            key={idx}
            className="renderColumns"
          >
            <div
              onClick={() => setToggleSelect((prev) => !prev)}
              className="renderTagRowData"
            >
              Select Tags
              <IoIosArrowDown className="arrowColorRow" />
            </div>
            {toggleSelect && (
              <ul className="tagsMapperRow">
                {i.split(",").map((tag, index) => (
                  <li
                    key={index}
                    value={tag}
                    onClick={() => {
                      if (selectedTags.includes(tag)) {
                        setSelectedTags((prev) =>
                          prev.filter((item) => item !== tag)
                        );
                      } else {
                        setSelectedTags((prev) => [...prev, tag]);
                      }
                    }}
                    className="showRowTags"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : idx === 1 ? (
          <a
            href={`https://www.${i}`}
            className="linkTextRows"
            key={idx}
          >
            {i}
          </a>
        ) : (
          <div
            key={idx}
            className="showRowPrefix"
          >
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="showRowSelectedTags"
              >
                {tag}{" "}
                <RxCross2
                  onClick={() => {
                    setSelectedTags((prev) =>
                      prev.filter((item) => item !== tag)
                    );
                  }}
                  className="selectedTagsRows"
                />
              </span>
            ))}
          </div>
        )
      )}
    </div>
  );
}