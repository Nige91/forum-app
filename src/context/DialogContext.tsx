// src/contexts/DialogContext.tsx
import React, {createContext, ReactNode, useState} from 'react';

interface DialogContextProps {
  showDialog: boolean;
  message: string;
  openDialog: (message: string) => void;
  closeDialog: () => void;
}

interface DialogProviderProps {
  children: ReactNode;
}

const DialogContext = createContext<DialogContextProps>({
  showDialog: false,
  message: '',
  openDialog: () => {},
  closeDialog: () => {},
});

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState('');

  const openDialog = (message: string) => {
    setMessage(message);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <DialogContext.Provider value={{ showDialog, message, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogContext;
