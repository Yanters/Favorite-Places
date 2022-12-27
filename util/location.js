const GOOGLE_API_KEY = 'SOME_KEY';

export const getMapPreview = (lat, lng) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
};

export const getAddress = async (lat, lng) => {
  // const response = await fetch(
  //   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
  // );

  // if (!response.ok) {
  // throw new Error('Something went wrong!');
  // }

  // const resData = await response.json();
  // if (!resData.results) {
  //   throw new Error('Something went wrong!');
  // }

  // const address = resData.results[0].formatted_address;
  // return address;
  return '(502) 845-0474 29 Apachee Cir Eminence, Kentucky(KY), 40019';
};
