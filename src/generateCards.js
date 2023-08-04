const imageFiles = require.context('./images', false, /\.(png|jpe?g|gif|svg)$/);
console.log( imageFiles.keys())
const imagePaths = imageFiles.keys().map(key => ({
  link: `../media/${key.split('/').pop()}`,
  name: key.split('/').pop()
  
}));

export default imagePaths;