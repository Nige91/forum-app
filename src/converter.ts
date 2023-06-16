import {PostData, PostDataDTO} from "./interfaces.ts";
import {format} from "date-fns";

export function convertPostDataToDTO(postData:PostData) : PostDataDTO {
  let result: PostDataDTO = {...postData, date: format(postData.date, 'yyyy.MM.dd HH:mm')};
  return result;
}

export function convertDtoToPostData(dto:PostDataDTO):PostData{
  let result: PostData = {...dto, date: new Date(dto.date)};
  return result;
}