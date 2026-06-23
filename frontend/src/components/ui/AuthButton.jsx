function AuthButton({ children, type = 'submit', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full
        rounded-full
        bg-[#5B4636]
        py-3
        font-semibold
        text-white
        transition
        hover:opacity-90
        active:scale-[0.98]
      "
    >
      {children}
    </button>
  );
}

export default AuthButton;
