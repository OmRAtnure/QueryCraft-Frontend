import { createContext } from "react";

export const DatabaseContext = createContext({
  tables: [],
  refreshTables: () => {},
});