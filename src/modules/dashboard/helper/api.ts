import { getHeader } from "../../../utilities/localStorage";
import { ENDPOINT } from "../../../utilities/api";
import { HttpService } from "../../../utilities/HttpService";

export const getLatestTransaction = async () =>{
  const data ={
    pageNumber: 0,
    pageSize: 5,
  }
  
  const headers = getHeader();
  try{
    const res = await HttpService.post(ENDPOINT.GET_TRANSACTION_BY_USER, data, headers);
    if(res.data && res.data.statusCode === 200){
      const result = {
        error: false,
        errorMessage: null,
        data: res.data.message,
      }
      return result;
    }
    else{
      const result = {
        error: true,
        errorMessage: res.data.message,
        data: [],
      }
      console.log(result);
      return result;
    }
  }
  catch(e){
    const result = {
      error: true,
      errorMessage: e,
      data: [],
    }
    console.log(result);
    return result;
  }
};

export const getMonthlyBonus = async () =>{
  const headers = getHeader();
  try{
    const res = await HttpService.get(ENDPOINT.GET_MONTHLY_BONUS, null, headers);
    if(res.data && res.data.statusCode === 200){
      const result = {
        error: false,
        errorMessage: null,
        data: res.data.message,
      }
      return result;
    }
    else{
      const result = {
        error: true,
        errorMessage: res.data.message,
        data: [],
      }
      console.log(result);
      return result;
    }
  }
  catch(e){
    const result = {
      error: true,
      errorMessage: e,
      data: [],
    }
    console.log(result);
    return result;
  }
};