import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//  ui
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import { 
  faSpinner, 
  faEllipsisV,  
  faUserPlus,
  faSignOutAlt,
  faTrash,
  faCaretDown,
  faUpload,
  faTimes,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Chat from "./components/Chat/Chat";
import NotFound from "./components/NotFound/NotFound";

library.add(
  faSmile,
  faImage,
  faSpinner, 
  faEllipsisV,  
  faUserPlus,
  faSignOutAlt,
  faTrash,
  faCaretDown,
  faUpload,
  faTimes,
  faBell,
);

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute component={<Chat />} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NotFound />}  /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
