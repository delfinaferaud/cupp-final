import { useState } from 'react';

export function useCrudModals() {
  const [modalType, setModalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

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

  return {
    modalType,
    selectedItem,

    isCreateOpen: modalType === 'create',
    isEditOpen: modalType === 'edit',
    isDeleteOpen: modalType === 'delete',

    openCreate,
    openEdit,
    openDelete,
    closeModal,
  };
}