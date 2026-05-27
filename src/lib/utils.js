/**
 * Tailwind utility and dynamic class merger
 * Keeps code clean and composable
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format date strings
 */
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Limit string character count for card excerpts
 */
export function truncate(str, max = 100) {
  if (!str) return '';
  return str.length > max ? str.substring(0, max) + '...' : str;
}
