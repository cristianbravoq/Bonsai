export const ACTIONS = {
    signIn: 'Ingresa',
    signUp: 'Registrate',
}

export interface Student {
    idEstudiantes?: number;
    Nombre?: string;
    Apellido?: string;
    Documento?: number;
    Grado?: number;
    Asignatura?: string;
    Calificacion?: number;
    Sede?: string;
    create_at?: Date;
}

export interface Cursos {
    Calificacion?: number;
    Indicadores?: number;
}

export const USER_STORAGE_KEY ='supabase.auth.token';