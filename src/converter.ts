import {PostData, PostDataDTO, ThreadData, ThreadDataDTO} from "./interfaces.ts";
import {format} from "date-fns";

export function convertPostDataToDTO(postData:PostData) : PostDataDTO {
  let result: PostDataDTO = {...postData, date:  Math.floor(postData.date.getTime() / 1000)};
  return result;
}

//TODO use milliseconds instead of seconds.
export function convertDtoToPostData(dto:PostDataDTO):PostData{
  let result: PostData = {...dto, date: new Date(dto.date*1000)};
  return result;
}

export function convertDtoToThreadData(dto:ThreadDataDTO):ThreadData{
  let result: ThreadData = {...dto, date: new Date(dto.date*1000)};
  return result;
}