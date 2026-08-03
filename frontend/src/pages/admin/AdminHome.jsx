function AdminHome() {
  const steps = [
    'Ingresá a la sección de ingredientes para cargar tus insumos en cantidad mayorista. Ejemplo: 100 huevos.',
    'Ingresá a la sección de productos para crear un nuevo producto, ingresando los ingredientes previamente cargados que necesites y su respectiva cantidad. Ejemplo: 2 huevos.',
    'El costo se calculará automáticamente en base a la cantidad ingresada y a continuación podrás ingresar el margen de ganancia de tu preferencia para calcular el precio.',
    'Una vez cargado el ingrediente, podés editarlo, eliminarlo o entrar a verlo en detalle.',
  ];

  return (
    <section className="rounded-(--radius-app) border border-[#DDD2CB] bg-white p-6 shadow-sm sm:p-8">
      <div className="max-w-3xl space-y-4">
        <span className="inline-block rounded-full bg-[#E8CFC8] px-3 py-1 text-sm font-semibold text-[#334C68]">
          Pasos para empezar
        </span>

        <h2 className="text-2xl font-semibold text-[#334C68]">
          Bienvenido al BackOffice de Cupp
        </h2>

        <p className="text-base leading-relaxed text-[#4F4A48]">
          Este panel te permite organizar la parte operativa de tu negocio de
          forma simple y clara. Comenzá por revisar los recursos más importantes
          y mantener tus datos actualizados.
        Por el momento, las únicas secciones disponibles son inicio, ingredientes, productos y cerrar sesión. 
        </p>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3 rounded-(--radius-app) bg-[#F6F1ED] p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#334C68] font-semibold text-white">
                {index + 1}
              </div>
              <p className="text-sm leading-relaxed text-[#334C68]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdminHome;
