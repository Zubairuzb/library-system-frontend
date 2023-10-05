import React, { createContext, useState, useContext } from 'react';

const AdminSessionContext = createContext();

export function AdminSessionProvider({ children }) {
const [adminSessionData, setAdminSessionData] = useState({});

    return (
        <AdminSessionContext.Provider value={{ adminSessionData, setAdminSessionData }}>
            {children}
        </AdminSessionContext.Provider>
    );
}

export function useSession() {
    return useContext(AdminSessionContext);
}