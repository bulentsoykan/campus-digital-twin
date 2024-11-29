interface Building {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  height: number;
  width: number;
  length: number;
  color: string;
  status: 'normal' | 'warning' | 'emergency';
}

export const BUILDINGS: Building[] = [
  {
    id: 'student-union',
    name: 'Student Union',
    latitude: 28.6016,
    longitude: -81.2005,
    height: 30,
    width: 50,
    length: 80,
    color: '#4B9CD3',
    status: 'normal',
  },
  {
    id: 'library',
    name: 'John C. Hitt Library',
    latitude: 28.6001,
    longitude: -81.2023,
    height: 45,
    width: 60,
    length: 60,
    color: '#4B9CD3',
    status: 'normal',
  },
  {
    id: 'arena',
    name: 'Addition Financial Arena',
    latitude: 28.6075,
    longitude: -81.1997,
    height: 35,
    width: 100,
    length: 100,
    color: '#4B9CD3',
    status: 'normal',
  },
];