import React from 'react'
import styled from "styled-components"

var Sun, Moon

Sun = Moon = styled.svg`
 transition: all 1.0s linear;
`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <div onClick={toggleTheme}>
        {theme === "light" ?
          <Moon xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox=" 0 4 24 24" fill="black" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
          : <Sun xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#FFDE03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></Sun>}
      </div>
    );
};

export default Toggle;