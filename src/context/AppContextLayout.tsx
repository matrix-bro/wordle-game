import { ReactNode, createContext } from "react";

type Props = {
  children: ReactNode;
};

type AppContextType = {
  onSelectLetter: (keyValue: string) => void;
};

export const AppContext = createContext({} as AppContextType);

const AppContextLayout = ({ children }: Props) => {
  const onSelectLetter = (keyValue: string) => {
    console.log("IN ", keyValue);
  };

  return (
    <>
      <AppContext.Provider value={{ onSelectLetter }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContextLayout;
