import { getHeader } from "../../../utilities/localStorage";
import { ENDPOINT } from "../../../utilities/api";
import { HttpService } from "../../../utilities/HttpService";

export const getDirectDownline = async (username: string) =>{
  const data ={
    username,
  }
  const headers = getHeader();
  try{
    const res = await HttpService.post(ENDPOINT.DOWNLINES, data, headers);
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