function Toast({ message, type = 'success', onClose }) {
  const styles = {
    success: 'bg-[#B8C7AF] text-[#334C68]',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <div
      className={`
        fixed
        top-6
        right-6
        z-999
        rounded-(--radius-app)
        px-5
        py-4
        shadow-lg
        font-semibold
        ${styles[type]}
      `}
    >
      <div className="flex items-center gap-4">
        <p>{message}</p>

        <button
          type="button"
          onClick={onClose}
          className="font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Toast;