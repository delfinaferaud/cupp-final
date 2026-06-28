import blob1 from '../../assets/blob-1.svg';
import blob2 from '../../assets/blob-2.svg';
function AuthLayout({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F6F1ED] flex items-center justify-center px-4">
      <div className="absolute -top-24 -right-24 h-100 w-200 opacity-64">
        <img
                  src={blob1}
                  alt="Blob"
                />
      </div>

      <div className="absolute bottom-20 -left-24 h-80 w-170 opacity-50">
        <img
                  src={blob2}
                  alt="Blob"
                />
      </div>
      
      <div className="relative z-10 w-full flex justify-center">
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;