import React from 'react';
import AniVault2 from '../../../images/AniVault2.png';

interface NavBarProps {
  onBackClick: () => void;
  selectedMood: string | null;
}

const NavBar: React.FC<NavBarProps> = ({ onBackClick, selectedMood }) => {
  return (
    <div className="navbar bg-base-300 center-container mt-4 py-2 my-2 rounded-[15px] shadow-xl">
      <div className="navbar-start">
        <button onClick={onBackClick} className="btn btn-ghost btn-circle text-2xl">
          ⛩️
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-3xl font-bold">
          <img src={AniVault2} width="200" height="100" alt="AniVault logo" />
        </a>
      </div>
      <div className="navbar-end">
        {selectedMood && <p className="text-xl font-bold">{selectedMood}</p>}
      </div>
    </div>
  );
};

export default NavBar;