const getYoutubeVideoID = (url: string) => {
  const urlArr = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return urlArr[2] !== undefined ? urlArr[2].split(/[^0-9a-z_\-]/i)[0] : urlArr[0];
};

export default getYoutubeVideoID;
