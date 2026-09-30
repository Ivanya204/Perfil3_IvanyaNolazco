import { useCallback, useEffect, useState } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';

const STATUS_LABELS = {
  Alive: 'Vivo',
  Dead: 'Muerto',
  unknown: 'Desconocido',
};

const GENDER_LABELS = {
  Male: 'Masculino',
  Female: 'Femenino',
  Genderless: 'Sin género',
  unknown: 'Desconocido',
};

function toCharacter(raw) {
  return {
    id: raw.id,
    name: raw.name,
    image: raw.image,
    status: raw.status,
    statusLabel: STATUS_LABELS[raw.status] ?? raw.status,
    species: raw.species,
    gender: GENDER_LABELS[raw.gender] ?? raw.gender,
    origin: raw.origin?.name ?? 'Desconocido',
    location: raw.location?.name ?? 'Desconocido',
  };
}

// Consume el endpoint de personajes y expone estado de carga, error y recarga.
export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async (isRefresh = false) => {
    isRefresh ? setRefreshing(true) : setLoading(true);
    setError(null);
    try {
      const results = await getCharacters();
      setCharacters(results.map(toCharacter));
    } catch (e) {
      setError(e.message || 'No se pudo cargar la información');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    characters,
    loading,
    refreshing,
    error,
    retry: () => load(),
    refresh: () => load(true),
  };
}
