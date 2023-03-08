let shibescription_regex = /<h1>Shibescription (\d+)<\/h1>/;

export async function fetchInscriptionNumber(id) {
  let doginals_response = await fetch(`https://doginals.com/shibescription/${id}`);
  if (doginals_response.ok) {
    let doginals_text = await doginals_response.text();
    let match = doginals_text.match(shibescription_regex);
    if (match && match.length > 1) {
      return match[1];
    } else {
      throw {
        message: `No match found for shibescription ${id}`,
      };
    }
  } else {
    throw {
      message: `doginals.com returned error code ${doginals_response.status} with shibescription ${id}`,
    };
  }
}