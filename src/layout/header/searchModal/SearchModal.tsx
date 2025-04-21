import React, { useState } from "react";
import style from "./searchModal.module.scss";
import data from "../../../json/data.json";

interface SearchModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isVisible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!isVisible) return null;

  const filteredData = searchTerm.trim()
    ? data.filter((item) => {
        const lowerSearch = searchTerm.toLowerCase();
        return (
          item.name.toLowerCase().includes(lowerSearch) ||
          item.languagesUsed.toLowerCase().includes(lowerSearch)
        );
      })
    : [...data].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className={style.modal_overlay} onClick={onClose}>
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="Axtar..."
          className={style.search_input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={style.results}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className={style.result_item}>
                <h4>{item.name}</h4>
                <p>{item.languagesUsed}</p>
              </div>
            ))
          ) : (
            <p>Nəticə tapılmadı.</p>
          )}
        </div>
        <button onClick={onClose} className={style.close_button}>Bağla</button>
      </div>
    </div>
  );
};

export default SearchModal;
