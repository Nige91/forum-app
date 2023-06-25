import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {PostData, PostDataInDTO, PostDataOutDTO, ThreadData, ThreadDataInDTO} from "../interfaces.ts";
import {convertDtoInToPostData, convertDtoInToThreadData} from "../converter.ts";
import { v4 as uuidv4 } from 'uuid';


class PostgrestService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000';
  }

  // public async createAccount(accountData: { id: string; name: string }): Promise<AxiosResponse> {
  //   const url = `${this.baseUrl}/account`;
  //   return axios.post(url, accountData);
  // }
  //
  // public async createThread(threadData: { id: string; creator: string; date: Date; title: string }): Promise<AxiosResponse> {
  //   const url = `${this.baseUrl}/thread`;
  //   return axios.post(url, threadData);
  // }
  //
  // public async createPost(postData: { id: string; content: string; date: Date; threadId: string; creator: string }): Promise<AxiosResponse> {
  //   const url = `${this.baseUrl}/post`;
  //   return axios.post(url, postData);
  // }
  //
  // public async getAccount(accountId: string): Promise<AxiosResponse> {
  //   const url = `${this.baseUrl}/account?id=eq.${accountId}`;
  //   return axios.get(url);
  // }

  public async getThreads(): Promise<ThreadData[]> {
    const response: AxiosResponse<ThreadDataInDTO[]> = await this.fetch('thread', {select: '*,creator(*)'})
    return response.data.map(dto=> convertDtoInToThreadData(dto))
  }

  public async getPosts(threadId: string): Promise<PostData[]> {
    const response: AxiosResponse<PostDataInDTO[]> = await this.fetch('post', {select: '*,creator(*),thread(*)', thread_id: `eq.${threadId}`})
    return response.data.map(dto=> convertDtoInToPostData(dto))
  }

  public async addPost(content: string, userId: string, threadId: string): Promise<AxiosResponse> {
    let data: PostDataOutDTO = {
      id: uuidv4(),
      content: content,
      date: new Date().getTime(),
      thread_id: threadId,
      creator_id: userId
    }
    return await this.post('post', data)
  }

  private async fetch(route: string, params?: Record<string, string>): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = { params };
    //axios automatically throws error from request
    return await axios.get(`${this.baseUrl}/${route}`, config);
  }

  private async post(route: string, data: object, params?: Record<string, string>): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = { params };
    return await axios.post(`${this.baseUrl}/${route}`, data, config);
  }
}

export default new PostgrestService()
