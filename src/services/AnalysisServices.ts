import { AxiosResponse } from "axios";
import { $apiPython } from "../http";
import { IUserId } from "../models/IUserId";

export default class AnalysisServices {

  static async externalAnalysis(vvp: string): Promise <AxiosResponse> {
    return $apiPython.post(vvp);
  };

  static async pointAnalysisAllPeople(): Promise<AxiosResponse> {
    return $apiPython.get('/');
  }

  static async pointAnalysisId(): Promise<AxiosResponse> {
    return $apiPython.post('/');
  }

  static async pointAnalysisBehavior(): Promise<AxiosResponse> {
    return $apiPython.post('/');
  }

  static async getId(): Promise<AxiosResponse<IUserId>> {
    return $apiPython.get<IUserId>('/ids');
  }
}