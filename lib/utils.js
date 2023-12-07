export async function fetchPicture(id) {
  let pictureResponse = await fetch(`https://wonky-ord.dogeord.io/content/${id}`);
  if (pictureResponse.ok) {
    // You can return the response in the format you need, for example, as a blob or directly as a URL
    let pictureBlob = await pictureResponse.blob();
    return URL.createObjectURL(pictureBlob);
  } else {
    throw {
      message: `Error fetching picture: Server returned status code ${pictureResponse.status} for ID ${id}`,
    };
  }
}
