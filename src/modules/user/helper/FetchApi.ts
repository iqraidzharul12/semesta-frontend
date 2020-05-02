import { userData } from "../../../utilities/dummies";

export function getDataByFilter(filter: any, pageNumber: any, pageSize: any){
  let filteredContent = [];
  let j = 0;
  
  for(let i = 0; i < userData.length; i++){
      let match = true;
      if((filter.id || filter.id !== '') && userData[i].id !== filter.id){
          match = false;
      }else if((filter.role || filter.role !== '') && userData[i].role !== filter.role){
          match = false;
      }
      if(match){
          filteredContent[j] = userData[i];
          j++;
      }
  }

  const first = pageNumber * pageSize;
  const last = first + pageSize;
  let content = [];
  let k = 0;
  for(let i = first; i < last; i++){
      if(filteredContent[i]){
          content[k] = filteredContent[i];
      }
      k++;
  }
  const data = {
      totalElements: filteredContent.length,
      pageSize,
      pageNumber,
      first: first+1,
      last: first+content.length,
      content,
  }
  return data;
}