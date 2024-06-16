import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Inicio de Sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Correo Electrónico</label>
            <input 
              type="email" 
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Contraseña</label>
            <input 
              type="password" 
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200"
              placeholder="********"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-700"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
