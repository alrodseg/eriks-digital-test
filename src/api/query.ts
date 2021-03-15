export async function query<T>(url: string): Promise<T> {
  const response = await fetch(url); // Simple fetching suffices. Could be replaced by axios if we had more specific requirements
  if (response.ok) {
    return response.json();
  }
  else {
    throw new Error('Error fetching ' + url);
  }
}
