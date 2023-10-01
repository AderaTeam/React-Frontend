import { AxiosResponse } from "axios";
import { $apiPython } from "../http";
import { IUserId } from "../models/IUserId";
import { IAnalysis, IAnalysisAll } from "../models/IAnalysis";

export default class AnalysisServices {

  static async externalAnalysis(vvp: string): Promise <AxiosResponse<IAnalysisAll>> {
    return $apiPython.get<IAnalysisAll>(`/analyzecustomgdp/${vvp}`);
  };

  static async pointAnalysisAllPeople(): Promise<AxiosResponse<IAnalysisAll>> {
    return $apiPython.get<IAnalysisAll>('/analyzeall');
  }

  static async pointAnalysisId(id: string): Promise<AxiosResponse<IAnalysis>> {
    return $apiPython.get<IAnalysis>(`/analyzebyid/${id}`);
  }

  static async pointAnalysisBehavior(type: string): Promise<AxiosResponse<IAnalysisAll>> {
    return $apiPython.get<IAnalysisAll>(`/analyzetype/${type}`);
  }

  static async getId(): Promise<AxiosResponse<IUserId>> {
    return $apiPython.get<IUserId>('/ids');
  }

  static async selectAnalysis(id: string): Promise<AxiosResponse<IAnalysis>> {
    return $apiPython.get<IAnalysis>('/analysis' + '/' + id);
};
}