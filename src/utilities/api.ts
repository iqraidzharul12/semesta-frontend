import { HttpService } from "./HttpService"

export const ENDPOINT = {
  GET_USER : "user",
  ACTIVATE_USER: "user/activate",
  SIGNIN: "signin",
  DOWNLINES: "user/downline",
  GET_TRANSACTION_BY_USER: "transaction",
  CREATE_TRANSACTION: "transaction/create",
  GET_MONTHLY_BONUS: "bonus",
}

export async function getAllUser(){
  const res = await HttpService.get(ENDPOINT.GET_USER, null, {'Content-Type': 'application/json',});

  if(res.data && res.data.statusCode === 200){
    return res.data.message;
  }
  return "error when get all user data";
}