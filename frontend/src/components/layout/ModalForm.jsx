import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import IngredientsForm from './IngredientsForm';
import ProductsForm from './ProductsForm';

function ModalForm({
  open,
  onClose,
  formType,
  initialValues,
  onSubmit,
  formEntity,
}) {
  const forms = {
    ingredient: IngredientsForm,
    product: ProductsForm,
  };
  const SelectedForm = forms[formEntity];
  return (
    <Dialog open={open} onClose={onClose} className="relative z-60">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-60 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-[#fdfbf9] text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-[#fdfbf9] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900 "
                  >
                    {formType}
                  </DialogTitle>
                </div>
              </div>
            </div>
            {SelectedForm && (
              <SelectedForm
                onClose={onClose}
                initialValues={initialValues}
                onSubmit={onSubmit}
              />
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default ModalForm;
