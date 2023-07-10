const mapping: Record<string, string> = {
  events: 'event',
  players: 'player',
  registrations: 'registration',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
