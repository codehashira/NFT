import {getItemImages, getListImages} from './getAssetsData';

const randomNftsTitle = [
  'Ball',
  'Ring',
  'Beer',
  'Music',
  'Abstract',
  'Wave',
  'Abstract Pink',
  'Wave X',
  'Ball',
  'Ring',
  'Beer',
  'Music',
];

export const getRandomNFTData = () => {
  const dataArray = [];
  const itemImages = getItemImages();
  let tempArray = [];
  for (let i = 0; i < itemImages.length; i++) {
    tempArray.push({
      id: i,
      image: itemImages[i],
      name: randomNftsTitle[i],
      nftId: `${randomNftsTitle[i].toLowerCase()} #7645`,
      value: 0.3943,
    });
    if (i % 4 === 0) {
      dataArray.push({
        id: dataArray.length + 1,
        nftCategory: randomNftsTitle[i],
        nftData: tempArray,
      });
      tempArray = [];
    }
  }
  console.log(dataArray);
  return dataArray;
};
