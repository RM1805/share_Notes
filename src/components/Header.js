import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import NotesIcon from '@mui/icons-material/Notes';

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Share Notes
        <NotesIcon />
      </h1>
    </header>
  );
}

export default Header;


