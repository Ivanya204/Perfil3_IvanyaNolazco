import { useMemo } from 'react';
import { student } from '../data/student';

// Prepara la información del estudiante como campos listos para mostrar.
export function useStudent() {
  return useMemo(
    () => ({
      fields: [
        { label: 'Nombres', value: student.nombres },
        { label: 'Apellidos', value: student.apellidos },
        { label: 'Carnet', value: student.carnet },
        { label: 'Sección', value: student.seccion },
        { label: 'Grupo', value: student.grupo },
      ],
    }),
    []
  );
}
