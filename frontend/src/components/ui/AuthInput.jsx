function AuthInput({
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-(--radius-app)
          bg-white
          px-5
          py-3
          text-sm
          text-[#5B4636]
          shadow-[0_4px_10px_rgba(0,0,0,0.18)]
          outline-none
          placeholder:text-[#9B8F8A]

        "
      />

      {error && (
        <p className="px-4 text-sm text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export default AuthInput;