export async function fetchInscriptionNumber(id) {
  try {
    const response = await fetch(`https://wonky-ord.dogeord.io/shibescription/${id}`);
    if (!response.ok) {
      throw new Error(`Server returned error code ${response.status} for Shibescription ${id}`);
    }
    const text = await response.text();
    const match = text.match(/<h1>Shibescription (\d+)<\/h1>/);
    if (match && match.length > 1) {
      return match[1];
    } else {
      throw new Error(`No inscription number found for Shibescription ${id}`);
    }
  } catch (error) {
    console.error(`Error fetching Shibescription: ${error.message}`);
    throw error;
  }
}
