import { createContext, useContext, useMemo, useState } from 'react';

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const closeToast = () => {
    setToast(null);
  };

  const openCreate = () => {
    setSelectedItem(null);
    setModalType('create');
  };

  const openEdit = (item) => {
    setSelectedItem(item);
    setModalType('edit');
  };

  const openDelete = (item) => {
    setSelectedItem(item);
    setModalType('delete');
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedItem(null);
  };

  const value = useMemo(
    () => ({
      toast,
      showToast,
      closeToast,
      modalType,
      selectedItem,
      isCreateOpen: modalType === 'create',
      isEditOpen: modalType === 'edit',
      isDeleteOpen: modalType === 'delete',
      openCreate,
      openEdit,
      openDelete,
      closeModal,
    }),
    [toast, modalType, selectedItem],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUiContext() {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error('useUiContext debe usarse dentro de UiProvider');
  }

  return context;
}
