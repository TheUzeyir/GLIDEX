// SearchModal.tsx
import React, { useState } from 'react';
import style from './SearchModal.module.scss';

interface SearchModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isVisible, onClose, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  if (!isVisible) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={onClose}>X</button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by subtitle, name, description..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchModal;
