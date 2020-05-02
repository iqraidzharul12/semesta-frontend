export const validateTokenExpiry = () => {
  try {
    const exp = localStorage.getItem('exp');

    const token_expired = exp? Number.parseInt(exp): 0;

    const currentTime = Math.floor(new Date().getTime()/1000);
    if (currentTime > token_expired) {
      return true;
    }else{
      return false;
    }
  } catch (e) {
    console.log(`error at validate token expiry with error: ${e}`);
    return { isExpired: false, isError: true, message: `error at validate token expiry with error: ${e}` };
  }
};

export const formatCurrency = (number: number) => {
  // return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  return number.toLocaleString('ID-JK', { style: 'currency', currency: 'IDR' });
}