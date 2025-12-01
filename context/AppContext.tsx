"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [reports, setReports] = useState([]);

  // Load all reports from Firestore
  const loadReports = async () => {
    const snapshot = await getDocs(collection(db, "reports"));
    const data: any = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    setReports(data);
  };

  // Add new report
  const addReport = async (report: any) => {
    await addDoc(collection(db, "reports"), report);
    await loadReports();
  };

  // Update report status
  const updateReportStatus = async (id: string, status: string) => {
    const ref = doc(db, "reports", id);
    await updateDoc(ref, { status });
    await loadReports();
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <AppContext.Provider
      value={{
        reports,
        addReport,
        updateReportStatus,
        reloadReports: loadReports,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
