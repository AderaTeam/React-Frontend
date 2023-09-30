import { AxiosResponse } from "axios";
import $api from "../http";
import { IUserId } from "../models/IUserId";

export default class AnalysisServices {

  static async externalAnalysis(vvp: string): Promise <AxiosResponse> {
    return $api.post(vvp);
  };

  static async pointAnalysisAllPeople(): Promise<AxiosResponse> {
    return $api.get('/');
  }

  static async pointAnalysisId(): Promise<AxiosResponse> {
    return $api.post('/');
  }

  static async pointAnalysisBehavior(): Promise<AxiosResponse> {
    return $api.post('/');
  }

  static async getId(): Promise<AxiosResponse<IUserId[]>> {
    return $api.get<IUserId[]>('/');
  }
}