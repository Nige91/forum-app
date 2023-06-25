import {PostData, PostDataInDTO, PostDataOutDTO, ThreadData, ThreadDataInDTO} from "./interfaces.ts";
import {format} from "date-fns";

export function convertPostDataToDTO(postData:PostData) : PostDataOutDTO {
  let {creator, ...result} = {
    ...postData,
    date:  Math.floor(postData.date.getTime()),
    creator_id: postData.creator.id,
    thread_id: postData.thread.id
  };
  return result;
}

export function convertDtoInToPostData(dto:PostDataInDTO):PostData{
  let result: PostData = {...dto, date: new Date(dto.date)};
  return result;
}

export function convertDtoInToThreadData(dto:ThreadDataInDTO):ThreadData{
  let result: ThreadData = {...dto, date: new Date(dto.date)};
  return result;
}