export const skillListToString = (skills: string[]): string => {
  if (skills.length) {
    return skills.length > 1
      ? `${skills.slice(0, -1).join(', ')} and ${skills.slice(-1).join('')}`
      : skills.join('');
  }

  return '';
};
