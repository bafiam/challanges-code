/**
 * finding all the subsets on a set
 * @param {string} n
 * @returns {array} arrays with all possible subsets
 */
 const powerSet = (n = '') => {
  const array = Array.from(n);
  const base = [''];
  const results = array.reduce((previous, element) => {
    const previousPlusElement = previous.map(el => {
      return `${el}${element}`;
    });
    return previous.concat(previousPlusElement);
    
  }, base)
 
  return results;
 }

 console.log(powerSet('steve'))