import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientInfoPage } from "./pages/client.info.page";
import { CreateClientPage } from "./pages/create.client.page";
import { CreateContactPage } from "./pages/create.contact.pages";
import { ListClientsPage } from "./pages/list.clients.page";
import { LoginDatabasePage } from "./pages/login.database.page";

function App() {

  const connected = useSelector((state) => state.database.connected);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/database" element={<LoginDatabasePage/>}/>
        <Route path="/clients" element={<ListClientsPage/>}/>
        <Route path="/clients/:id" element={<ClientInfoPage/>}/>
        <Route path="/clients/add" element={<CreateClientPage/>}/>
        <Route path="/clients/:id/add_contact" element={<CreateContactPage/>}/>
        <Route exact path="/" element={connected ? <ListClientsPage/> : <LoginDatabasePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
